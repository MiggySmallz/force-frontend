import Vue from 'vue'
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
export default {
  namespaced: true,
  modules: {},
  mutations: {
    UPSERT_CAMPAIGNS (state, campaigns) {
      if (!state.campaigns) {
        // We have no campaigns yet
        state.campaigns = campaigns
      } else {
        const updatedCampaigns = state.campaigns.map((c) => { return { ...c } })
        for (let i = 0; i < campaigns.length; i++) {
          const index = state.campaigns.findIndex(c => c.id === campaigns[i].id)
          if (index !== -1) {
            if (campaigns[i].content.field_1 === state.campaigns[index].content.field_1) {
              campaigns[i].info = state.campaigns[index].info
            }
            // Update existing campaign
            updatedCampaigns[index] = campaigns[i]
          } else {
            // Insert new campaign
            updatedCampaigns.push(campaigns[i])
          }
        }
        state.campaigns = updatedCampaigns
      }
    },
    UPSERT_BATCHES (state, batches) {
      if (!state.batches) {
        state.batches = batches
      } else {
        const updatedBatches = state.batches.map((b) => { return { ...b } })
        for (let i = 0; i < batches.length; i++) {
          const index = state.batches.findIndex(c => c.batch_id === batches[i].batch_id)
          if (index !== -1) {
            // Update existing batches
            updatedBatches[index] = batches[i]
          } else {
            // Insert new batches
            updatedBatches.push(batches[i])
          }
        }
        state.batches = updatedBatches
      }
    },
    UPSERT_SUBMISSIONS (state, submissions) {
      if (!state.submissions) {
        state.submissions = submissions
      } else {
        const updatedSubmissions = state.submissions.map((s) => { return { ...s } })
        for (let i = 0; i < submissions.length; i++) {
          const index = state.submissions.findIndex(s => s.id === submissions[i].id)
          if (index !== -1) {
            if (state.submissions[index].paid !== 1) {
              // Submission was not paid yet, so could be updated.
              updatedSubmissions[index] = submissions[i]
            }
          } else {
            // Insert new submissions
            updatedSubmissions.push(submissions[i])
          }
        }
        state.submissions = updatedSubmissions
      }
    },
    SET_LOADING (state, loading) {
      state.loading = loading
    },
    SET_LOADING_BATCH (state, loading) {
      state.loadingBatch = loading
    },
    SET_LOADING_SUBMISSIONS (state, loading) {
      state.loadingSubmissions = loading
    },
    SET_ALL_CAMPAIGNS_LOADED (state, allCampaignsLoaded) {
      state.allCampaignsLoaded = allCampaignsLoaded
    },
    SET_ALL_BATCHES_LOADED (state, allBatchesLoaded) {
      state.allBatchesLoaded = allBatchesLoaded
    },
    SET_ALL_SUBMISSIONS_LOADED (state, allSubmissionsLoaded) {
      state.allSubmissionsLoaded = allSubmissionsLoaded
    },
    SET_CAMPAIGN_INFO (state, { id, info }) {
      const index = state.campaigns.findIndex(campaign => campaign.id === id)
      const campaign = state.campaigns[index]
      if (JSON.stringify(info) !== JSON.stringify(campaign.info)) {
        // Info has changed, update
        campaign.info = info
        Vue.set(state.campaigns, index, campaign)
      }
    },
    SET_BATCH_TASKS (state, { batchId, tasks }) {
      const index = state.batches.findIndex(batch => batch.batch_id === batchId)
      const batch = state.batches[index]
      batch.tasks = tasks
      Vue.set(state.batches, index, batch)
    },
    ADD_CAMPAIGN (state, campaign) {
      if (state.campaigns) {
        state.campaigns.push(campaign)
      } else {
        state.campaigns = [campaign]
      }
    },
    ADD_BATCH (state, batch) {
      if (state.batches) {
        const index = state.batches.findIndex(b => b.batch_id === batch.batch_id)
        if (index === -1) {
          state.batches.push(batch)
        } else {
          Vue.set(state.batches, index, batch)
        }
      } else {
        state.batches = [batch]
      }
    }
  },
  getters: {
    campaignById (state) {
      return id => state.campaigns ? state.campaigns.find(c => c.id === id) : null
    },
    batchByCampaignId (state) {
      return id => state.batches ? state.batches.filter(b => b.campaign_id === id) : null
    },
    campaignsByCategory (state) {
      return category => state.campaigns && category ? state.campaigns.filter(c => c.info ? c.info.category === category : false) : state.campaigns
    },
    reservationsByAccountId (state) {
      return id => state.submissions ? state.submissions.filter(s => s.account_id === id && !s.data) : null
    },
    submissionsByBatchId (state) {
      return id => state.submissions ? state.submissions.filter(s => s.batch_id === id) : null
    },
    submissionsByAccountId (state) {
      return id => state.submissions ? state.submissions.filter(s => s.account_id === id) : null
    }
  },
  actions: {
    async getBatches ({ dispatch, commit, state }, nextKey) {
      if (!nextKey && state.loadingBatch) {
        console.log('Already retrieving batches somewhere else, aborting..')
        return
      }
      commit('SET_LOADING_BATCH', true)
      try {
        const data = await this.$blockchain.getBatches(nextKey, 200, false)
        commit('UPSERT_BATCHES', data.rows)

        if (data.more) {
          console.log('retrieving more batches..')
          await dispatch('getBatches', data.next_key)
        } else {
          // No more campaigns, we are done
          commit('SET_ALL_BATCHES_LOADED', true)
          commit('SET_LOADING_BATCH', false)
        }
      } catch (error) {
        this.$blockchain.handleError(error)
        commit('SET_LOADING_BATCH', false)
      }
    },
    async getBatch ({ dispatch, commit, state }, { batchId }) {
      commit('SET_LOADING_BATCH', true)
      const hardRefresh = true
      try {
        const batchFilter = c => c.batch_id === batchId
        if (!state.batches || !state.batches.find(batchFilter) || hardRefresh) {
          const data = await this.$blockchain.getBatches(batchId, 1)

          if (data.rows.length > 0) {
            await commit('ADD_BATCH', data.rows[0])
          } else {
            throw new Error('Cannot find batch with the given id.')
          }
        }
        // If batch exists but doesnt have tasks yet get tasks
        if (state.batches && state.batches.find(batchFilter) && !state.batches.find(batchFilter).tasks) {
          await dispatch('getBatchTasks', state.batches.find(batchFilter))
        }
      } catch (error) {
        this.$blockchain.handleError(error)
      }
      commit('SET_LOADING_BATCH', false)
    },
    async getCampaign ({ dispatch, commit, state }, id) {
      commit('SET_LOADING', true)
      try {
        let campaign
        if (state.campaigns) {
          campaign = state.campaigns.find(c => c.id === id)
        }
        if (!campaign) {
          const data = await this.$blockchain.getCampaigns(id, 1, false)

          if (data.rows.length > 0) {
            commit('ADD_CAMPAIGN', data.rows[0])
            await dispatch('processCampaign', data.rows[0])
          } else {
            throw new Error('Cannot find campaign with the given id.')
          }
        } else if (!campaign.info) {
          await dispatch('processCampaign', campaign)
        }

        // No more campaign, we are done
        commit('SET_LOADING', false)
      } catch (error) {
        this.$blockchain.handleError(error)
        commit('SET_LOADING', false)
      }
    },
    async getCampaigns ({ dispatch, commit, state }, { processAllCampaigns = false, nextKey }) {
      if (!nextKey && state.loading) {
        console.log('Already retrieving campaigns somewhere else, aborting..')
        return
      }
      commit('SET_LOADING', true)
      try {
        const data = await this.$blockchain.getCampaigns(nextKey, 200, false)

        if (processAllCampaigns && !state.allCampaignsLoaded) {
          // first time fetching campaigns, already show loading placeholders while we still have to process campaigns
          commit('UPSERT_CAMPAIGNS', data.rows)
        }

        // Process campaigns asynchronously from retrieving campaigns, but synchronously for multi-campaign processing
        if (processAllCampaigns) {
          setTimeout(() => {
            dispatch('processCampaigns', data.rows)
          }, 0)
          // ;(async () => {
          //   for (const campaign of data.rows) {
          //   // TODO: only make one thread to process campaigns, now a new thread is started for every call, so as a temporary fix we are increasing the limit to 500 so only one call is being made
          //   // a short sleep helps for some reason to make interface less laggy
          //   // await sleep(0)
          //     dispatch('processCampaign', campaign)
          //   }
          // })()
        }

        if (data.more) {
          console.log('retrieving more campaigns..')
          await sleep(100)
          await dispatch('getCampaigns', { nextKey: data.next_key, processAllCampaigns })
        } else {
          // No more campaigns, we are done
          commit('SET_ALL_CAMPAIGNS_LOADED', true)
          commit('SET_LOADING', false)
        }
      } catch (error) {
        this.$blockchain.handleError(error)
        commit('SET_LOADING', false)
      }
    },
    async processCampaigns ({ commit, rootGetters, dispatch }, campaigns) {
      // field_0 represents the content type where:
      // 0: IPFS
      for (const campaign of campaigns) {
        try {
          if (campaign.content.field_0 === 0) {
          // field_1 represents the IPFS hash
          // Save IPFS content it in the store if its not there yet
            await dispatch('ipfs/getIpfsContent', campaign.content.field_1, { root: true })
            const info = rootGetters['ipfs/ipfsContentByHash'](campaign.content.field_1)
            campaign.info = info
          }
        } catch (e) {
          commit('SET_CAMPAIGN_INFO', { id: campaign.id, info: null })
        }
      }
      commit('UPSERT_CAMPAIGNS', campaigns)
    },
    async processCampaign ({ commit, rootGetters, dispatch }, campaign) {
      try {
        // field_0 represents the content type where:
        // 0: IPFS
        if (campaign.content.field_0 === 0) {
          // field_1 represents the IPFS hash
          // Save IPFS content it in the store if its not there yet
          await dispatch('ipfs/getIpfsContent', campaign.content.field_1, { root: true })
          const info = rootGetters['ipfs/ipfsContentByHash'](campaign.content.field_1)
          commit('SET_CAMPAIGN_INFO', { id: campaign.id, info })
        }
      } catch (e) {
        commit('SET_CAMPAIGN_INFO', { id: campaign.id, info: null })
      }
    },
    async getSubmissions ({ dispatch, commit, state }, nextKey) {
      if (!nextKey && state.loadingSubmissions) {
        console.log('Already retrieving submissions somewhere else, aborting..')
        return
      }
      commit('SET_LOADING_SUBMISSIONS', true)
      try {
        const data = await this.$blockchain.getSubmissions(nextKey, 200, false)
        const submissions = data.rows.map(function (x) {
          x.batch_id = parseInt(x.batch_id)
          return x
        })
        commit('UPSERT_SUBMISSIONS', submissions)

        if (data.more) {
          console.log('retrieving more submissions..')
          await dispatch('getSubmissions', data.next_key)
        } else {
          // No more campaigns, we are done
          commit('SET_ALL_SUBMISSIONS_LOADED', true)
          commit('SET_LOADING_SUBMISSIONS', false)
        }
      } catch (error) {
        this.$blockchain.handleError(error)
        commit('SET_LOADING_SUBMISSIONS', false)
      }
    },
    async getBatchTasks ({ commit, rootGetters, dispatch }, batch) {
      try {
        // field_0 represents the content type where:
        // 0: IPFS
        if (batch.content.field_0 === 0) {
          // field_1 represents the IPFS hash
          // Save IPFS content it in the store if its not there yet
          await dispatch('ipfs/getIpfsContent', batch.content.field_1, { root: true })
          const tasks = rootGetters['ipfs/ipfsContentByHash'](batch.content.field_1)
          commit('SET_BATCH_TASKS', { batchId: batch.batch_id, tasks: tasks.tasks })
        }
      } catch (e) {
        commit('SET_BATCH_TASKS', { batchId: batch.batch_id, tasks: null })
      }
    }
  },
  state: () => {
    return {
      batches: null,
      campaigns: null,
      submissions: null,
      loading: false,
      loadingBatch: false,
      loadingSubmissions: false,
      allCampaignsLoaded: false,
      allBatchesLoaded: false,
      allSubmissionsLoaded: false
    }
  }
}
