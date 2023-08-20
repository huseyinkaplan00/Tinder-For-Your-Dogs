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

// Function to apply transition effect
const applyOpeningEffect = () => {
    setTimeout(() => {
      const dogPhotoTitle = document.querySelector(".dog-photo-title");
      const dogName = document.querySelector(".dog-name");
      const iconLike = document.querySelector(".icon-like");
      const iconNope = document.querySelector(".icon-nope");
  
      [dogPhotoTitle, dogName, iconLike, iconNope].forEach((element) => {
        if (element) {
          element.style.opacity = 1;
          element.style.transform = "translateY(0)";
        }
      });
    }, 100); // You can adjust this delay time
  };
  
  // Function to apply transition effect
  const applyTransitionEffect = (direction) => {
    const dogPhotoTitle = document.querySelector(".dog-photo-title");
    if (dogPhotoTitle) {
      dogPhotoTitle.style.opacity = 0;
      dogPhotoTitle.style.transform = `translateY(${direction})`;
    }
  };
const getNewDog = () => {
    const nextDogData = dogs[allDogs.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}



const noIcon = () => {

    applyTransitionEffect("2%");
  document.querySelector(".icon-nope").classList.remove("d-none");

  setTimeout(() => {
    document.querySelector(".icon-nope").classList.add("d-none");
  }, 300);

  if (allDogs.length > 0) {
    setTimeout(() => {
      newDogs = getNewDog();
      render();
    }, 800);
  } else {
    setTimeout(() => {
      endScreen();
    }, 1200);
  }
}


const yesIcon = () => {

    applyTransitionEffect("-2%");
  document.querySelector(".icon-like").classList.remove("d-none");

  setTimeout(() => {
    document.querySelector(".icon-like").classList.add("d-none");
  }, 300);

  if (allDogs.length > 0) {
    setTimeout(() => {
      newDogs = getNewDog();
      render();
    }, 800);
  } else {
    setTimeout(() => {
      endScreen();
    }, 1200);
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
    applyOpeningEffect();
    document.getElementById("dogTitle").innerHTML = newDogs.getDogHtml()
}
render()