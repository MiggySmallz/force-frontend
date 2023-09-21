import { Client, } from "@effectai/effect-js/dist/";
import { VAccount, Campaign, Reservation } from "@effectai/effect-js/dist/types/index";
import { Session } from "@wharfkit/session";

const { sessionKit } = useSessionKit()
const { fetch } = sessionKit

const effectClient = reactive(new Client("jungle4", { fetch }));

const userLoggedIn   : Ref<boolean>            = ref(false)
const userAccount    : Ref<VAccount | null>    = ref(null)
const userName       : Ref<string>             = ref('')
const userPermission : Ref<string>             = ref('')
const efxPrice       : Ref<number>             = ref(0)
const reservation    : Ref<Reservation | null> = ref(null)
const allCampaigns  : Ref<Campaign[]>         = ref([])

const connectWallet = async (session?: Session) => {
    // Login
    if (session) {
        effectClient.loginWithSession(session)
    } else {
        const { session: newSession } = await sessionKit.login()
        effectClient.loginWithSession(newSession)
    }
    
    // Retrieve Campaigns
    allCampaigns.value = await effectClient.tasks.getAllCampaigns()

    // Retrieve user Data
    // efxPrice.value = await effectClient.efx.getEfxPrice()
    userAccount.value = await effectClient.vaccount.get()
    userName.value = effectClient?.session.actor.toString()
    userPermission.value = await effectClient?.session?.permission.toString()
    userLoggedIn.value = true
}

const disconnectWallet = async (): Promise<void> => {
    await sessionKit.logout()
    userLoggedIn.value = false
    useRouter().push('/')// Go home after logout
}

// Persist session
const restoreSession = await sessionKit.restore()
if (restoreSession) {
    await connectWallet(restoreSession)
}

export const useEffectClient = () => ({
    effectClient,
    connectWallet,
    disconnectWallet,
    userLoggedIn,
    userName,
    userPermission,
    userAccount,
    efxPrice,
    reservation,
    allCampaigns,
 })
