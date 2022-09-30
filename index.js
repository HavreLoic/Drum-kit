


for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.addEventListener("keyup", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key)

  })

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var sound = this.innerHTML;
    makeSound(sound);
    buttonAnimation(sound);
  })
    // var audio = new Audio("sounds/tom-1.mp3")
    // audio.play()

  function makeSound(key) {
    switch (key) {
      case "w":
        var wSound = new Audio("sounds/tom-1.mp3");
        wSound.play();
        break;
      case "a":
        var aSound = new Audio("sounds/tom-2.mp3");
        aSound.play();
        break;
      case "s":
        var sSound = new Audio("sounds/tom-3.mp3");
        sSound.play();
        break;
      case "d":
        var dSound = new Audio("sounds/tom-4.mp3");
        dSound.play();
        break;
      case "j":
        var jSound = new Audio("sounds/crash.mp3");
        jSound.play();
        break;
      case "k":
        var kSound = new Audio("sounds/kick-bass.mp3");
        kSound.play();
        break;
      case "l":
        var lSound = new Audio("sounds/snare.mp3");
        lSound.play();
        break;
      default: console.log(sound)

    }
  }

  function buttonAnimation(currentButton) {
   var activeDrum = document.querySelector("." + currentButton);
   activeDrum.classList.add("pressed");

   setTimeout(function() {
     activeDrum.classList.remove("pressed");

   }, 100)
  };
}

// document.addEventListener("keydown", function(e){
//   console.log(e)
// })


// function handleclicks() {
//   alert("i got clicked")
// }
