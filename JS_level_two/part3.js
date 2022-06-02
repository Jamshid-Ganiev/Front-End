var arr = ['A', 'B', 'C']

for(i = 0; i < arr.length ; i++){
  console.log(arr[i]);
}

  //any var name here before of
for(letter of arr){
  alert(letter);
}

//Pro VERSION
arr.forEach(alert);


function addAwesome(name){
  console.log(name + " is awesome!");
}

var langs = ['python','c++','django']
langs.forEach(addAwesome);
