//****************** Adding Event Listeners **************** //
/* Select a button in HTML and add event
   document.querySelector("button")[].addEventListener("click", handleClick);

    function handleClick(){
        alert("I got click");
}*/

//****************** Play sounds to a website **************** //

// var audio = new Audio('sounds/tom-1.mp3');
//                                 audio.play();
// this -- the identity of the button that triggers the event listener

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var index = 0; index < numberOfDrumButtons; index++)
{
    document.querySelectorAll(".drum")[index]
       .addEventListener("click", function(){
                var buttonInnerHTML = this.innerHTML;
                makeSound(buttonInnerHTML);
                
            }// Play the sound which button is clicked
        ); 
}

// When the key was pressed
// document.addEventListener("keypress", function(){
//    alert("key was pressed");
// });

document.addEventListener("keypress", function(event){
   makeSound(event.key);
   // how to understand pass function as parameters
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default: console.log();
    }
}