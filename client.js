console.log("Here are all the available people:", people);

// [x] step 0: add jquery to the project
// [] step 0.5: randomly pick one person to be the guess
//    store that globally, show on the DOM: function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }
// [] step 1: loop over all the data
//      -This is an image tag: <img src="https://github.com/booherbg.png?size=250" alt="Profile image of Blaine">
// [x] step 2: append an image for each person (src=github.com/:username:.png)
// [] step 3: make sure to store the person's name in a data attribute
// [] step 4: in the click handler, compare the image clicked (name) to the game's answer
// [] step 5: reset the game (call a function that repeats step 0.5)

let userPics = [];

function onReady() {
  console.log("jQ");

  $('#game-prompt').text(`Steve`);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  console.log(randomNumber(0, people.length));

  for (let person of people) {
   // console.log(person.githubUsername); //when we get a value from an object: person.githubUsername
    // make tags in divs to append images to DOM
    // make variable to store images
    let pic = `<img src="https://github.com/${person.githubUsername}.png?size=250"/>`;
  //  console.log(pic);
    userPics.push(pic);
  } // end of for loop

  // loop userPics and create <div> with images
  for (let pic of userPics) {
    //grab the content main element and append new <div>
    $(".content-main").append(`<div class="image-block">${pic}</div>`);
  } // end for loop
}

$(document).ready(onReady);
