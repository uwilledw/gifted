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

    async openGift(giftId) {
        console.log('service time', giftId);
        let found = appState.gifts.find(f => f.id == giftId)
        found.opened = true
        const res = await sandboxApi.put(`api/gifts/${giftId}`, found)
        let index = appState.gifts.findIndex(f => f.id == giftId)
        appState.gifts.splice(index, 1, new Gift(res.data))
        appState.emit('gifts')
        console.log(res.data);
    }

    async newGift(formData) {
        // console.log('our form coming in', formData);
        const res = await sandboxApi.post('api/gifts', formData)
        console.log('made a gift', res.data);
        const newGift = new Gift(res.data)
        // appState.gifts.push(newGift)
        appState.gifts = [new Gift(res.data), ...appState.gifts]
        console.log('is this working?', appState.gifts);
        // appState.emit('gifts')

    }
}


export const giftSandboxService = new GiftSandboxService()