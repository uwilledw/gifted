import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandboxApi } from "./AxiosService.js"



class GiftSandboxService {

    async getSandboxGift() {
        const res = await sandboxApi.get('api/gifts')
        console.log(res.data);
        appState.gifts = res.data.map(g => new Gift(g))
        console.log(appState.gifts, 'appstate gifts');
    }

    openGift() {
    }

}


export const giftSandboxService = new GiftSandboxService()