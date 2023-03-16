import { appState } from "../AppState.js";
import { giftSandboxService } from "../Services/GiftSandboxService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawGifts() {
    let gift = appState.gifts
    let template = ''
    gift.forEach(g => template += g.giftTemplate)
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

    async openGift() {
        try {
            await giftSandboxService.openGift()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}

