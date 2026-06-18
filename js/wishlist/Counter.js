class WhishListCounter {
    constructor() {
        this.count = 0
        this.$wishCount = document.querySelector('.wish-count')
    }

    update(action) {
        switch (action) {
            case 'INC':
                this.count++
                break
            case 'DEC':
                this.count--
                break
            default:
                throw 'Unknown action'
                break
        }

        this.render(this.count)
    }

    render(data) {
        this.$wishCount.innerHTML = data
    }
}
