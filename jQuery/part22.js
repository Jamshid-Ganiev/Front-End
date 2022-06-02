// $('h1').click(function(){
//   console.log('There was a click!');
// })

//Grabbing list item
$('li').dblclick(function(){
  console.log("any list item was clicked!!!")
})

// this keyword adn changing text
$('h1').click(function(){
  $(this).text('Here comes Change!!!');
})

// //KEY PRESS
// $('input').eq(0).keypress(function(){
//   $('h3').toggleClass('turnBlue');
// })

// $('input').eq(0).keypress(function(event){
//   if (event.which === 13){
//     $('h1').toggleClass('turnRed');
//   }
// })

// //in order to see the numerical number of the keyboard presses
// $('input').eq(0).keypress(function(event){
//   console.log(event);
// })

//on() method: // everytime it is dblclicked it turns of and on

$('h1').on('dblclick', function(){
  $(this).toggleClass('turnBlue');
})

$('h1').on('mouseenter', function(){
  $(this).toggleClass('turnRed');
})


// //Events and Animations
// $('input').eq(1).on('click',function(){
//   $('.container').fadeOut(100);
// })

$('input').eq(1).on('click',function(){
  $('.container').slideUp(2000);
})
