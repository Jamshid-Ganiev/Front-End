var arr = [];

function add(name){
  var name = prompt("What name would you like to add?");
  arr.push(name);
}

function remove(rName){
  var index = arr.indexOf(rName);
  arr.splice(index, 1);
}

function display(){
  console.log(arr);
}





var start = prompt('Would you like to start the roster web app? y/n');
while (start != 'n' && start != 'y') {
  alert("Wrong input. Please Try again!");
  start = prompt('Would you like to start the roster web app? y/n');
}

while (start == 'y') {
  var choice = prompt("PLease select an action: add, remove, display, or quit.");
  if (choice == 'add') {
    add(name);
  }else if (choice == 'remove') {
    var rName = prompt("What name would you like to remove?");
    remove(rName);
  }else if (choice == 'display'){
    display();
  }else if (choice == 'quit'){
    start = 'n';
  }else {
    alert("Not recognized")
  }
}

alert("Please refresh the page to start over.");
