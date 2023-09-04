var numberOfDrumButtons = document.querySelectorAll(".drum").length; // all buttons contains drum class

for(var i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      addAnimation(buttonInnerHTML);
      });


      document.addEventListener("keydown",function(event)
      {
        makeSound(event.key);
        addAnimation(event.key);
      });


      function makeSound(key){
        switch (key) {
            case "w":
                var crash = new Audio("sounds/crash.mp3"); // created an object of Audio class
                crash.play();
                break;
            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom_1 = new Audio("sounds/tom-1.mp3");
                tom_1.play();
                break;
            case "j":
                var tom_2 = new Audio("sounds/tom-2.mp3");
                tom_2.play();
                break;
            case "k":
                var tom_3 = new Audio("sounds/tom-3.mp3");
                tom_3.play();
                break;
            case "l":
                var tom_4 = new Audio("sounds/tom-4.mp3");
                tom_4.play();
                break;
            default: console.log(buttonInnerHTML);
                break;
          }
      }
    function addAnimation(key)
    {
       var activeButton = document.querySelector("."+key);
       activeButton.classList.add("pressed"); // add css class to an HTML element

       setTimeout(function(){  // this function set the time after which we will execute the function inside 
        activeButton.classList.remove("pressed");  // remove css class to an HTML element
       },100); // here the timer is 100 which means 100 miliseconds.
    }
}