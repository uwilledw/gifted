import { appState } from "../AppState.js";
import { giftSandboxService } from "../Services/GiftSandboxService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"


function _drawGifts() {
    let gift = appState.gifts
    let template = ''
    gift.forEach(g => template += g.giftTemplate)
    console.log(template);
    setHTML('gifts', template)
}





export class GiftSandboxController {
    constructor() {
        console.log('sandbox controller');
        this.getSandboxGift()
        appState.on('gifts', _drawGifts)
    }


    async getSandboxGift() {
        try {
            console.log('get gift');
            await giftSandboxService.getSandboxGift()

        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async openGift(giftId) {
        try {

            console.log(giftId);
            await giftSandboxService.openGift(giftId)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async newGift() {
        try {
            console.log('in new gift now');
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            await giftSandboxService.newGift(formData)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}

