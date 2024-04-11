var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; ++i)
  buttons[i].addEventListener("click", handleClick);

var sounds = {
  Q: "./Sounds/hihat-close audio.wav",
  W: "./Sounds/hihat-open audio.wav",
  E: "./sounds/ride audio.wav",
  D: "./sounds/snare audio.wav",
  K: "./sounds/tom-high audio.wav",
  O: "/sounds/tom-high audio.wav",
  P: "./sounds/tom-low audio.wav",
  S: "./sounds/kick audio.wav"
};
function handleClick(Event) {
  if (sounds.hasOwnProperty(this.innerText))
    new Audio(sounds[this.innerText]).play();
}

// function btnanimation(currentKey){
//   var activeButton = document.querySelector("." + currentKey);
//   activeButton.classList.add("pressed");
//   setTimeout(function(){
//       activeButton.classList.remove("pressed");
//   }, 100);
// }

