// alert("Welcome to your Bank");
// var deposit = prompt("How much would you like to deposit today?");
// alert("You've deposited: " + deposit);
// console.log("You're a cool person");

        // CONDITIONALS
// var hot = true
// var temp = 80
//
// if (temp > 80) {
//   console.log("Hot Outside!");
// }else if (temp <= 80 && temp >= 50){
//   console.log("Averge temp outside");
// }else if (temp < 50 && temp >=32){
//   console.log("It is pretty cold outiside");
// }else {
//   console.log("It is very cold outside");
// }

      //LOOPS
 // WHILE LOOP

// var x = 1;
//
// while (x <=10){
//   if (x%2 === 0){
//     console.log(x);
//   }
//   x+=1;
// }

  //For loop

// for (var i = 0; i < 5; i++) {
//   console.log("Number is "+i);
// }

// var word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// for (var i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// var word = "ABABABABAB";
// for (var i = 1; i < word.length; i+=2) {
//   console.log(word[i]);
// }


/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
console.log("while loop: ");

x = 1;
while(x<=5){
  console.log("hello");
  x++
}

// For Loop
console.log("for loop: ");

for (var i = 0; i < 5; i++) {
  console.log('hello');
}

/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
console.log("while loop (odd nums): ");

num = 1;
while (num <=25){
  if (num % 2 !== 0){
    console.log(num);
  }
  num++
}

// METHOD TWO
// For Loop
console.log("for loop (odd nums): ");
for (var i = 1; i <=25 ; i++) {
  if (i%2 !== 0) {
    console.log(i)
  }
}
