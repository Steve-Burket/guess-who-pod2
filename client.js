console.log("Here are all the available people:", people);

// [x] step 0: add jquery to the project
// [x] step 0.5: randomly pick one person to be the guess
//    store that globally, show on the DOM: function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }
// [x] step 1: loop over all the data
//      -This is an image tag: <img src="https://github.com/booherbg.png?size=250" alt="Profile image of Blaine">
// [x] step 2: append an image for each person (src=github.com/:username:.png)
// [x] step 3: make sure to store the person's name in a data attribute
// [x] step 4: in the click handler, compare the image clicked (name) to the game's answer
// [] step 5: reset the game (call a function that repeats step 0.5)

let guessNum = randomNumber(0, people.length - 1);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function onReady() {
  console.log("jQ");

  //can target the div class, OR target the img element
  $(".content-main").on("click", "img", function (event) {
    // alert(people[guessNum].name);
    let answer = $(event.target).data("name");

    if (answer === people[guessNum].name) {
      alert('correct answer!');
    }

  });

  $("#game-prompt").text(people[guessNum].name);

  console.log(guessNum);

  for (let person of people) {
    // console.log(person.githubUsername); //when we get a value from an object: person.githubUsername
    // make tags in divs to append images to DOM
    // make variable to store images
    let pic = `<img data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250"/>`;
    //  console.log(pic);
    // TODO: mark img class in css as display: inline-block
    $(".content-main").append(`<div class="image-block">${pic}</div>`);
  } // end of for loop
}

$(document).ready(onReady);
