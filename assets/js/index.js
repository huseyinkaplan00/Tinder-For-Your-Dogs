import dogs from './data.js'
import Dog from './Dog.js'

document.addEventListener("click", (e) => {

    if (e.target.id === "iconNope") {
        noIcon()
    }

    else if (e.target.id === "iconYeap") {
        yesIcon()
    }

})


let allDogs = ['rex', 'bella', 'teddy', 'milo', 'duke', 'cooper', 'stella']

const getNewDog = () => {
    const nextDogData = dogs[allDogs.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}



const noIcon = () => {


    if (!newDogs.hasBeenSwiped) {

        if (allDogs.length > 0) {
            newDogs = getNewDog()
            render()
            document.querySelector(".icon-nope").classList.remove("d-none")

            setTimeout(() => {
                document.querySelector(".icon-nope").classList.add("d-none")
            }, 500);
        }

        else {

            endScreen()
        }

    }
}


const yesIcon = () => {


    if (!newDogs.hasBeenSwiped) {

        if (allDogs.length > 0) {

            newDogs = getNewDog()
            render()

            document.querySelector(".icon-like").classList.remove("d-none")

            setTimeout(() => {
                document.querySelector(".icon-like").classList.add("d-none")
            }, 500);
        }

        else {
            setTimeout(() => {
                endScreen()
            }, 500);

        }

    }

}

const endScreen = () => {
    newDogs.hasBeenSwiped = true
    document.querySelector(".icon-like").classList.add("d-none")
    document.querySelector(".icon-nope").classList.add("d-none")




    document.querySelector(".name-and-photo").innerHTML = `
        
        <div class="finish-screen">

        <img src="https://media.giphy.com/media/SATTJiHDEFnZ12f5sV/giphy.gif"
            alt="finish screen image">
        <h1>You've seen all the potential dogs around you</h1>
        <p>We've run out of potential matches in your area.</p>
        <button id="sameDogs">Same Dogs</button>

    </div>
        
        `

    document.querySelector(".main-icons").innerHTML = ''

    document.getElementById('sameDogs').addEventListener("click", () => {

        location.reload();

    })


}

let newDogs = getNewDog()
function render() {
    document.getElementById("dogTitle").innerHTML = newDogs.getDogHtml()
}
render()