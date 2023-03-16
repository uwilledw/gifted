

export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
    }




    get giftTemplate() {
        // this.opened = false
        if (this.opened) {
            return `
            <div class="col-4 elevation-3 p-3 text-center">
            <img class="img-fluid" src="${this.url}" alt="${this.tag}">
            <p>${this.tag}</p>
            </div>`
        } else {
            return `
            <div class="col-4 elevation-3 p-3 text-center">
            <img class="img-fluid" src="https://www.memecreator.org/static/images/memes/4947950.jpg" alt="${this.tag}">
            <p>${this.tag}</p>
            </div>`
        }
    }

}