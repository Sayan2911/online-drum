// // var numberOfButtons=document.querySelectorAll(".drum").length;
// // for(var i=0 ; i<=numberOfButtons; i++)
// // {
// //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {

// // // function WAudio(){
// //     var audio= new Audio("sounds/tom-1.mp3");
// //     audio.play();
// // });
// // }

// var numberOfButtons=document.querySelectorAll(".drum").length;
// for(var i=0 ; i<=numberOfButtons; i++)
// {
//     document.querySelectorAll(".w")[i].addEventListener("click",WAudio )
//     document.querySelectorAll(".a")[i].addEventListener("click", AAudio )
//     document.querySelectorAll(".s")[i].addEventListener("click", SAudio )
//     document.querySelectorAll(".d")[i].addEventListener("click", DAudio )
//     document.querySelectorAll(".j")[i].addEventListener("click", JAudio )
//     document.querySelectorAll(".k")[i].addEventListener("click", KAudio )
//     document.querySelectorAll(".l")[i].addEventListener("click", LAudio )

//     function WAudio() 
//     {
//     var audio= new Audio("sounds/tom-1.mp3");
//     audio.play();
        
//     }
        
//     function AAudio() 
//     {
//       var audio= new Audio("sounds/tom-2.mp3");
//       audio.play();
      
//     }  

//      function SAudio() 
//     {
//         var audio= new Audio("sounds/tom-3.mp3");
//         audio.play();
        
//     }

//      function DAudio() 
//     {
//           var audio= new Audio("sounds/tom-4.mp3");
//           audio.play();
    
//     }

//     function JAudio() 
//     {
//             var audio= new Audio("sounds/crash.mp3");
//             audio.play();
    
//     }
//     function KAudio() 
//     {
//               var audio= new Audio("sounds/kick-bass.mp3");
//               audio.play();
    
//     }
//     function LAudio() 
//     {
//                 var audio= new Audio("sounds/snare.mp3");
//                 audio.play();
   
//     }

// }
// document.addEventListener("keydown", function(event){
//   makesound(event.key);
// });
// function makesound(key){
// switch  (key){
//     case "w":
//         WAudio() ;
//       break;
//     case "y": 
//       // code block
//       break;
//     default:
//       // code block
//   }

// }
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHTML= this.innerHTML;
  makeSound(buttonInnerHTML);
});
}
  

  document.addEventListener("keypress", function(event) {
    makeSound(event.key);
  });

  function makeSound(key) {
    switch (key) {
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
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

      default:
        console.log(event.key);
    }
  }