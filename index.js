var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');
var kick = new Audio('sounds/kick-bass.mp3');

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  var pressedKey = (event.key).toLowerCase();
  if (pressedKey === "w" || pressedKey === "a" || pressedKey === "s" || pressedKey === "d" || pressedKey === "j" || pressedKey === "k" || pressedKey === "l") {
    makeSound(pressedKey);
    buttonAnimation(pressedKey);
  }
});

function makeSound(key) {

  switch (key) {
    case "w":
      tom1.play();
      break;

    case "a":
      tom2.play();
      break;

    case "s":
      tom3.play();
      break;

    case "d":
      tom4.play();
      break;

    case "j":
      snare.play();
      break;

    case "k":
      crash.play();
      break;

    case "l":
      kick.play();
      break;

    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
