(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1062:function(t,e,n){"use strict";var c={props:["page","perPage","items"],computed:{maxPage:function(){return Math.ceil(this.items/this.perPage)}},watch:{items:function(){this.$emit("setPage",1)}}},o=n(22),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return t.items&&t.items>t.perPage?e("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[e("span",{staticStyle:{"padding-left":"0.5em"}},[t._v(t._s((t.page-1)*t.perPage+1)+"-"+t._s(Math.min(t.page*t.perPage,t.items))+" of\n    "+t._s(t.items))]),t._v(" "),e("a",{staticClass:"pagination-previous",attrs:{disabled:1===t.page},on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v("Previous")]),t._v(" "),e("a",{staticClass:"pagination-next",attrs:{disabled:!t.maxPage||t.page===t.maxPage},on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("Next page")]),t._v(" "),e("ul",{staticClass:"pagination-list has-margin-top-mobile"},[t.page>2?e("li",[e("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",1)}}},[t._v("1")])]):t._e(),t._v(" "),t.page>3?e("li",[e("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.page>1?e("li",[e("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v(t._s(t.page-1))])]):t._e(),t._v(" "),e("li",[e("a",{staticClass:"pagination-link is-current",attrs:{"aria-current":"page"}},[t._v(t._s(t.page))])]),t._v(" "),t.page<t.maxPage?e("li",[e("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("\n        "+t._s(t.page+1))])]):t._e(),t._v(" "),t.maxPage>t.page+2?e("li",[e("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.maxPage>t.page+1?e("li",[e("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.maxPage)}}},[t._v(t._s(t.maxPage))])]):t._e()])]):t._e()}),[],!1,null,null,null);e.a=component.exports},1067:function(t,e,n){var map={"./effect-captions-icon.png":1068,"./effect-dao-icon.png":1069,"./effect-force-icon.png":563,"./effect-socials-icon.png":1070,"./effect-translate-icon.png":1071};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=1067},1068:function(t,e,n){t.exports=n.p+"img/effect-captions-icon.d32e1fd.png"},1069:function(t,e,n){t.exports=n.p+"img/effect-dao-icon.8a49264.png"},1070:function(t,e,n){t.exports=n.p+"img/effect-socials-icon.113948d.png"},1071:function(t,e,n){t.exports=n.p+"img/effect-translate-icon.a76baca.png"},1072:function(t,e,n){var content=n(1079);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("11f21862",content,!0,{sourceMap:!1})},1073:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},1074:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0iIzg0OEE5QSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMi40MjMiIGN5PSIyLjQyMzA2IiByPSIxLjYxNTM4IiBmaWxsPSIjODQ4QTlBIi8+CjxyZWN0IHg9IjUuNjUzMzIiIHk9IjEuNjE1MzYiIHdpZHRoPSIxNC41Mzg1IiBoZWlnaHQ9IjEuNjE1MzgiIHJ4PSIwLjgwNzY5MiIgZmlsbD0iIzg0OEE5QSIvPgo8ZWxsaXBzZSBjeD0iMi40MjMiIGN5PSI4LjA3NjkzIiByeD0iMS42MTUzOCIgcnk9IjEuNjE1MzgiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iNS42NTMzMiIgeT0iNy4yNjkyMyIgd2lkdGg9IjE0LjUzODUiIGhlaWdodD0iMS42MTUzOSIgcng9IjAuODA3NjkzIiBmaWxsPSIjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjEzLjczMDgiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxMi45MjMxIiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiMjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjE5LjM4NDYiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxOC41NzY5IiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1077:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1078:function(t,e,n){"use strict";n(1072)},1079:function(t,e,n){var c=n(59),o=n(1073),r=n(1074),l=c(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);var d=o(r);l.push([t.i,".title-section[data-v-36aa746e]{height:100%}.column[data-v-36aa746e]{flex-wrap:wrap;align-items:stretch}.box.is-disabled[data-v-36aa746e]{background-color:rgba(222,224,230,.5)}.box.is-disabled .column[data-v-36aa746e]:not(:last-child){opacity:.5}.box.has-reservation[data-v-36aa746e]{box-shadow:0 0 14px 5px rgba(17,72,235,.3)}.box .image img[data-v-36aa746e]{border:1px solid #d2d9eb}.card .card-image[data-v-36aa746e],.card .card-image figure[data-v-36aa746e],.card .card-image img[data-v-36aa746e],.card .card-image p[data-v-36aa746e]{height:75px!important}.card .card-image img[data-v-36aa746e]{width:100%;-o-object-fit:contain;object-fit:contain;border-radius:6px!important}.switch-button[data-v-36aa746e]{background:#d7dcee;border-radius:6px;overflow:hidden;width:80px;text-align:center;font-size:18px;letter-spacing:1px;color:#155fff;padding:4px 40px 4px 4px;position:relative}.switch-button[data-v-36aa746e]:before{content:url("+d+');position:absolute;top:9px;bottom:0;right:1px;width:40px;align-items:center;justify-content:center;z-index:3;pointer-events:none}.switch-button-checkbox[data-v-36aa746e]{cursor:pointer;position:absolute;top:0;left:0;bottom:0;width:100%;height:100%;opacity:0;z-index:2}.switch-button-checkbox:checked+.switch-button-label[data-v-36aa746e]:before{transform:translateX(36px);transition:transform .3s linear}.switch-button-checkbox+.switch-button-label[data-v-36aa746e]{position:relative;padding:1px 0;display:block;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.switch-button-checkbox+.switch-button-label[data-v-36aa746e]:before{content:"";padding:1px 0;background:#f6f7ff;height:100%;width:100%;position:absolute;left:0;top:0;border-radius:6px;transform:translateX(0);transition:transform .3s}.switch-button-checkbox+.switch-button-label .switch-button-label-span[data-v-36aa746e]{position:relative;top:5px}.image[data-v-36aa746e]{max-height:90px}@media screen and (min-width:1024px){.column.is-1-desktop[data-v-36aa746e]{flex:none;width:8.33333337%;max-width:76px}}.grid[data-v-36aa746e]{text-align:center}@media screen and (max-width:1023px){.columns[data-v-36aa746e]{text-align:center}}',""]),t.exports=l},1084:function(t,e,n){"use strict";var c=n(19),o=(n(69),n(53),n(100),n(108),n(34),n(81),[function(){var t=this._self._c;return t("label",{staticClass:"switch-button-label",attrs:{for:""}},[t("span",{staticClass:"switch-button-label-span"},[t("img",{attrs:{height:"28px",src:n(1077)}})])])}]),r=(n(45),n(43),n(14),n(55),n(36),n(56),n(2)),l=(n(27),n(46));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"CampaignList",components:{Pagination:n(1062).a},props:["gridToggle","campaigns"],data:function(){return{page:this.$route.query.page||1,perPage:30,ipfsExplorer:this.$blockchain.sdk.config.ipfsNode,categories:["translate","captions","socials","dao"]}},computed:m(m(m({},Object(l.c)({batchesByCampaignId:"campaign/batchesByCampaignId"})),Object(l.d)({campaignsLoading:function(t){return t.campaign.loading},allCampaignsLoaded:function(t){return t.campaign.allCampaignsLoaded},allBatchesLoaded:function(t){return t.campaign.allBatchesLoaded},allSubmissionsLoaded:function(t){return t.campaign.allSubmissionsLoaded},allQualificationsLoaded:function(t){return t.qualification.allQualificationsLoaded},advanced:function(t){return t.view.advanced}})),{},{list:{get:function(){return this.$store.state.view.grid},set:function(t){this.$store.commit("view/SET_GRID_LIST",t)}},grid:function(){return!this.list&&this.gridToggle},paginatedCampaigns:function(){var t=(this.page-1)*this.perPage;return this.campaigns?this.campaigns.slice(t,t+this.perPage):[]}}),created:function(){this.getForceInfo()},methods:{setPage:function(t){this.page=t},getForceInfo:function(){var t=this;this.allQualificationsLoaded||this.$store.dispatch("qualification/getQualifications"),this.campaigns&&this.allCampaignsLoaded||this.$store.dispatch("campaign/getCampaigns"),this.allBatchesLoaded||Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("campaign/getBatches");case 2:t.allSubmissionsLoaded||t.$store.dispatch("campaign/getSubmissionsForActiveBatches");case 3:case"end":return e.stop()}}),e)})))()}}},f=(n(1078),n(22)),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"is-flex is-justify-content-space-between"},[e("div"),t._v(" "),t.gridToggle?e("div",{staticClass:"is-hidden-touch"},[e("div",{staticClass:"switch-button mb-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.list,expression:"list"}],staticClass:"switch-button-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.list)?t._i(t.list,null)>-1:t.list},on:{change:function(e){var n=t.list,c=e.target,o=!!c.checked;if(Array.isArray(n)){var r=t._i(n,null);c.checked?r<0&&(t.list=n.concat([null])):r>-1&&(t.list=n.slice(0,r).concat(n.slice(r+1)))}else t.list=o}}}),t._v(" "),t._m(0)])]):t._e()]),t._v(" "),e("hr",{staticClass:"mt-1"}),t._v(" "),e("div",{staticClass:"columns is-multiline",class:{grid:t.grid}},t._l(t.paginatedCampaigns,(function(o){return e("div",{key:o.id,staticClass:"column is-one-third-tablet",class:{"is-one-fifth-desktop":t.grid,"is-12-desktop":!t.grid}},[e("nuxt-link",{staticClass:"box p-4",class:Object(c.a)({"is-disabled":null===o.info,"has-reservation":o.userHasReservation},"is-disabled",!1===o.joinable),attrs:{to:"/campaigns/"+o.id}},[e("div",{staticClass:"columns is-vcentered is-multiline"},[e("div",{staticClass:"column is-12-touch",class:{"is-1-desktop":!t.grid,"is-12-desktop":t.grid}},[e("p",{staticClass:"image has-radius is-vcentered has-background-image"},[o.info&&o.info.image?e("img",{attrs:{src:o.info.image.Hash?t.ipfsExplorer+"/ipfs/"+o.info.image.Hash:o.info.image}}):o.info&&o.info.category&&t.categories.includes(o.info.category)?e("img",{attrs:{src:n(1067)("./effect-".concat(o.info.category,"-icon.png"))}}):e("img",{attrs:{src:n(563),alt:"campaign title"}})])]),t._v(" "),e("div",{staticClass:"column",class:{"is-12":t.grid,"is-4-desktop is-4-widescreen is-12-touch":!t.grid}},[e("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[e("div",[o.info&&o.info.category?e("nuxt-link",{staticClass:"tag is-light mb-2 has-border is-capitalized",class:["is-"+o.info.category],attrs:{to:{path:"/",query:{category:o.info.category}}}},[t._v("\n                  "+t._s(o.info.category)+"\n                ")]):null!==o.info?e("span",{staticClass:"tag is-light mb-2"},[e("span",{staticClass:"loading-text"},[t._v("Loading")])]):t._e()],1),t._v(" "),o.info?e("span",[o.info.title?e("span",[t._v(t._s(o.info.title))]):e("i",[t._v("- Untitled -")])]):null!==o.info?e("span",{staticClass:"loading-text"},[t._v("Loading")]):e("span",{staticClass:"has-text-danger-dark"},[t._v("Could not load campaign info")])]),t._v(" "),e("div",{staticClass:"has-text-grey is-size-7"},[o.info?e("div",[o.info.description?e("div",{staticClass:"is-ellipsis"},[t._v("\n                  "+t._s(o.info.description)+"\n                ")]):e("i",[t._v("- no description -")])]):null!==o.info?e("div",[t._v("\n                ........\n              ")]):t._e()])]),t._v(" "),e("div",{staticClass:"column is-12",class:{"is-2-desktop":!t.grid}},[e("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Requester:\n            ")]),t._v(" "),e("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[e("nuxt-link",{attrs:{to:"/profile/"+o.owner[1]}},[e("span",{staticClass:"is-ellipsis"},[t._v(t._s(o.owner[1]))])])],1)]),t._v(" "),e("div",{staticClass:"column"},[e("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Reward:\n            ")]),t._v(" "),e("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[t._v("\n              "+t._s(o.reward.quantity)+"\n            ")])]),t._v(" "),o.num_tasks||o.tasks_done?e("div",{staticClass:"column"},[e("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Tasks:\n            ")]),t._v(" "),e("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[e("span",[t._v("\n                "+t._s(o.num_tasks-o.tasks_done)),t.advanced?e("span",[t._v("/"+t._s(o.num_tasks))]):t._e(),t._v(" left\n              ")])])]):t._e(),t._v(" "),e("div",{staticClass:"column has-text-right",class:{"is-12":t.grid}},[e("button",{staticClass:"button is-primary has-text-weight-semibold is-fullwidth",class:{"is-loading":void 0===o.info,"is-accent":null===o.info||o.userHasReservation,"is-outlined":null===o.info||!1===o.joinable,"is-wide":!t.grid},attrs:{disabled:!o||null===o.info}},[o.userHasReservation?e("span",[t._v("Go to Task")]):o.joinable?e("span",[t._v("Start")]):e("span",[t._v("View")])])])])])],1)})),0),t._v(" "),t.campaigns?e("pagination",{staticClass:"mt-2",attrs:{items:t.campaigns.length,page:t.page,"per-page":t.perPage},on:{setPage:t.setPage}}):t._e(),t._v(" "),t.campaignsLoading?e("div",{staticClass:"subtitle loading-text has-text-centered"},[t._v("\n    Campaigns loading\n  ")]):t.allBatchesLoaded?t.campaigns&&!t.campaigns.length?e("div",{staticClass:"subtitle has-text-centered"},[t._v("\n    No tasks\n  ")]):t.campaigns?t._e():e("div",{staticClass:"subtitle has-text-centered has-text-danger"},[t._v("\n    Could not retrieve campaigns\n  ")]):e("div",{staticClass:"loading-text has-text-centered"},[t._v("\n    Batches loading\n  ")])],1)}),o,!1,null,"36aa746e",null);e.a=component.exports},1320:function(t,e,n){"use strict";n.r(e);n(69),n(45),n(34),n(55),n(36),n(56);var c=n(2),o=n(19),r=(n(27),n(54),n(90),n(43),n(14),n(46));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{CampaignList:n(1084).a},middleware:["auth"],data:function(){return{name:this.$route.params.name,account:null,loading:!1}},computed:d(d(d({},Object(r.d)({campaigns:function(t){return t.campaign.campaigns}})),Object(r.c)({transactionsByUser:"transaction/transactionsByUser",getPendingPayouts:"pendingPayout/getPendingPayouts",campaignById:"campaign/campaignById",activeBatchesByCampaignId:"campaign/activeBatchesByCampaignId",batchesByCampaignId:"campaign/batchesByCampaignId"})),{},{myCampaigns:function(){var t=this;if(this.campaigns)return this.campaigns.filter((function(e){return e.owner[1]===t.name})).map((function(t){return d({},t)}))}}),created:function(){this.getProfile()},methods:{getProfile:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$blockchain.getVAccountByName(t.name);case 4:(n=e.sent)&&n.length&&(t.account=n[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.$blockchain.handleError(e.t0);case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},h=n(22),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center"},[e("h4",{staticClass:"title is-spaced"},[t._v("\n        Effect Account\n      ")]),t._v(" "),t.loading?e("div",{staticClass:"loading-text"},[t._v("\n        Loading\n      ")]):t.account?e("div",[e("div",{staticClass:"block"},[e("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n            Effect Account Name:\n          ")]),t._v(" "),e("div",{staticClass:"subtitle"},["address"===t.account.address[0]?e("span",{staticClass:"blockchain-address"},[t._v(t._s(t.account.address[1]))]):e("a",{attrs:{href:t.$blockchain.eos.explorer+"/address/"+t.account.address[1],target:"_blank"}},[t._v(t._s(t.account.address[1]))])])]),t._v(" "),e("div",{staticClass:"block"},[e("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n            Effect Account ID:\n          ")]),t._v(" "),e("div",{staticClass:"subtitle"},[t._v("\n            "+t._s(t.account.id)+"\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n            Blockchain:\n          ")]),t._v(" "),e("div",{staticClass:"subtitle"},[e("a",{attrs:{href:"".concat(t.$blockchain.eos.explorer,"/account/").concat(t.$blockchain.sdk.account.config.accountContract,"?loadContract=true&tab=Tables&table=account&account=").concat(t.$blockchain.sdk.account.config.accountContract,"&scope=").concat(t.$blockchain.sdk.account.config.accountContract,"&limit=1&lower_bound=").concat(t.account.id,"&upper_bound=").concat(t.account.id),target:"_blank"}},[t._v("View on explorer")])])]),t._v(" "),e("h2",{staticClass:"title is-4"},[t._v("\n          Campaigns\n        ")]),t._v(" "),e("campaign-list",{staticClass:"mb-6",attrs:{campaigns:t.myCampaigns}})],1):e("div",[t._v("\n        Could not retrieve account\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);