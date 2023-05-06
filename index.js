import dogs from "./data.js"
import Dog from "./Dog.js"

let currentDog = 0;

document.getElementById("cross").addEventListener("click", nope)
document.getElementById("heart").addEventListener("click", like)
document.getElementById("dog-card").addEventListener("dblclick", like)

function nope() {
    document.getElementById("nope").hidden = false;
    setTimeout(() => {
        document.getElementById("nope").hidden = true;
        currentDog = currentDog + 1 === dogs.length ? 0 : currentDog + 1;
    const dog = new Dog(dogs[currentDog]);
    render(dog);
    }, 1000);
  }

function like() {
    document.getElementById("like").hidden = false;
    setTimeout(() => {
        document.getElementById("like").hidden = true;
        currentDog = currentDog + 1 === dogs.length ? 0 : currentDog + 1;
    const dog = new Dog(dogs[currentDog]);
    render(dog);
}, 1000);
}

function render(dog) {
    document.getElementById("dog-card").innerHTML = dog.getDogHtml();
}

const dog = new Dog(dogs[currentDog]);
render(dog);