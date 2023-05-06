class Dog {
    constructor(data) {
    Object.assign(this, data)
    }

    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `<img src="${avatar}">
                <div class="dog-text">
                    <h3 class="info">${name}, ${age}</h3>
                    <p class="bio">${bio}</p>
                </div>`
    }
}

export default Dog