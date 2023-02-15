class Dog {
    constructor(data) {
        Object.assign(this, data)

    }




    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this

        return `
                        <img class="main-photo-img" src="${avatar}" alt="">
                        <div class="name">
                            <h1>${name}, ${age}</h1>
                            <p>${bio}</p>
                        </div>
        `

    }

}

export default Dog 