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
       .addEventListener("click",
                         function(){
                             var buttonInnerHTML = this.innerHTML;
                             
                           }// Play the sound which button is clicked
                        ); 
}

