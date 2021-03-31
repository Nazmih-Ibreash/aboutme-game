'use strict';

/* let userName = 'nazmia';

let age = prompt('what is your age?');
console.log('before ' + typeof age);//here we put + and it works
//here if we enter a text 

age = parseInt(age); /***** WAY 1 */
//here will return a Nan
//Nan means: not a number
//age = Number(); /****** WAY 2 */
//console.log('after ', typeof age);//here we put , and it works also

/*************************** Confirm box */
/*let feeling = confirm('what is your feeling');

if (feeling) {
    console.log('great');
} else {
    console.log('hope you feel well');
}*/
let userName = prompt('what is your name?');
alert('hello ' + userName);

let counter = 0;

// Q1
let myAge = '';
function age() {
  myAge = prompt('is my age > 25?');
  myAge = myAge.toLowerCase();

  if (myAge === 'n' || myAge === 'no') {
    alert('great gessing');
    //console.log('my age is lower than ' + myAge);

    counter += 1;
  } else if (myAge === 'y' || myAge === 'yes') {
    alert('oh no! I am 23');
  } else {
    alert('please answer with only yes/y or no/n with no spaces');
  }
}
age();

//Q2

let homeLocation = '';
function home() {
  homeLocation = prompt('do I live in zarqa?');
  homeLocation = homeLocation.toLowerCase();
  if (homeLocation === 'y' || homeLocation === 'yes') {
    //console.log('great, I live in zarqa');
    alert('great gessing');
    counter++;
  } else if (homeLocation === 'n' || homeLocation === 'no') {
    alert('oh no');
  } else {
    alert('please answer with only yes/y or no/n with no spaces');
  }
}
home();

//Q3
let turkey = '';
function travel() {
  turkey = prompt('do I love turkey?');
  turkey = turkey.toLowerCase();
  if (turkey === 'y' || turkey === 'yes') {
    //console.log('great, I really love turkey');
    alert('great gessing');
    counter++;
  } else if (turkey === 'n' || turkey === 'no') {
    alert('oh no');
  } else {
    alert('please answer with only yes/y or no/n with no spaces');
  }
}
travel();
//Q4
let galaxy = '';
function galaxyFunction() {
  galaxy = prompt('do I love choclate?');
  galaxy = galaxy.toLowerCase();
  if (galaxy === 'y' || galaxy === 'yes') {
    //console.log('great, I really love galaxy choclate');
    alert('great gessing');
    counter++;
  } else if (galaxy === 'n' || galaxy === 'no') {
    alert('oh no');
  } else {
    alert('please answer with only yes/y or no/n with no spaces');
  }
}
galaxyFunction();
//Q5
let design = '';
function designFunction() {
  design = prompt('do I love designing?');
  design = design.toLowerCase();
  if (design === 'y' || design === 'yes') {
    //console.log('great, actully I am a Humble designer');
    alert('great gessing');
    counter++;
  } else if (design === 'n' || design === 'no') {
    alert('oh no');
  } else {
    alert('please answer with only yes/y or no/n with no spaces');
  }
}
designFunction();

//Q6
let guessNum = '';
function guessNumFunction() {
  guessNum = prompt('guess a number between 0 & 10, you have 4 opportunities ');
  let Num = 4;

  for (let index = 0; index < 4; index++) {
    if (guessNum < Num) {
      alert('too low, try a different number');
      guessNum = prompt(
        'guess a number between 0 & 10, you have 4 opportunities '
      );
    } else if (guessNum > Num) {
      alert('too high, try a different number');
      guessNum = prompt(
        'guess a number between 0 & 10, you have 4 opportunities '
      );
    }
  }
  if (guessNum === Num) {
    alert('excelent guessing :)');
    //console.log('great, actully I chose the number 4');

    counter++;
  } else if (guessNum !== Num) {
    alert('oh no! the number is ' + Num);
  }
}

guessNumFunction();
//Q7

let fruits = ['banana', 'watermelon', 'pineapple', 'mango'];
let guessFruit = '';

// let i = 0;
attempts: for (let attempts = 0; attempts < 6; attempts++) {
  //   for (; i < fruits.length; i++) {
  //     if (guessFruit === fruits[i]) {
  //       break;
  //     }
  //   }
  guessFruit = prompt(
    'guess kind of fruits that I like, you have 6 opportunities '
  );
  for (let j = 0; j < fruits.length; j++) {
    if (fruits[j] === guessFruit) {
      alert(
        'great :) there are the list of fruites I like: banana , watermelon , pineapple , mango :)'
      );
      counter++;
      break attempts;
    }
  }
  if (attempts === 5) {
    alert('sorry no more tries ' + fruits);
  } else if (attempts < 6) {
    alert('this is wrong');
  }

  //   if (i === fruits.length) {
  //     // alert('Your guess is wrong');
  //     guessFruit = prompt(
  //       'guess kind of fruits that I like, you have 6 opportunities '
  //     );
  //   } else {
  //     alert(
  //       'great :) there are the list of fruites I like: banana , watermelon , pineapple , mango :)'
  //     );
  //     //console.log('great, actully I like banana , watermelon , pineapple and mango');
  //     counter++;
  //     break;
  //   }
  //   if (attempts == 5) {
  //     alert(
  //       'oh no! there are the list of fruites I like: banana , watermelon , pineapple , mango :)'
  //     );
  //   }
}

if (counter > 3) {
  alert('very good ' + userName + ' your score is ' + counter + ' of 7');
} else {
  alert(
    'actully you dont know me :) ' +
      userName +
      ' your score is ' +
      counter +
      ' of 7'
  );
}
