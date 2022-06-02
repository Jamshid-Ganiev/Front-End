var firstName = prompt("Hello and Welcome!, Please Enter your First Name:");
var lastName = prompt("Enter your Last Name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var petName = prompt("What is the name of your favourite pet?");
alert("Thank you so much for the information! We truly appreciate it!");


// CONDITION CHECKING:
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;


if (firstName[0] === lastName[0]){
  nameCond = true;
}else{
  nameCond = false;
}

if (age > 20 && age < 30){
  ageCond = true;
}else{
  ageCond = false;
}

if (height >= 175){
  heightCond = true;
}else{
  heightCond = false;
}

if (petName[petName.length-1] == "y"){
  petCond = true;
}else{
  petCond = false;
}


if (nameCond && ageCond && heightCond && petCond){
  console.log("Hey you, buttface. Eventually came!!!");
}else{
  console.log("Nothing to see here00");
}
