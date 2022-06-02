// $(.container).css('text-align', 'center');

var player1 = prompt("Player One: Enter your Name, You will be Green.");
var player1Color = 'rgb(0, 255, 0)';

var player2 = prompt("Player Two: Enter your Name,You will be Yellow.");
var player2Color = 'rgb(255, 255, 0)';

var gameOn = true;
var table = $('table tr');

// THE FOLLOWING FUNCTON IS JUST A RECORD OFR US
function reportWin(rowNum, colNum){
  console.log("You won starting at this row, col");
  console.log(rowNum);
  console.log(colNum);
}

// Change the color of a button
function changeColor(rowIndex, colIndex, color){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

// Report Back to current color of a button
function returnColor(rowIndex, colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}
// Take in column index, returns the bottom row that is still gray
function checkBottom(colIndex){
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row> -1; row--){
    colorReport = returnColor(row, colIndex);
    if (colorReport === 'rgb(128, 128, 128)') {
      return row
    }
  }
}
// Check to see if 4 inputs are the same color
function colorMatchCheck(one,two,three,four){
  return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}

// Check for Horizontal Wins
function horizontalWinCheck(){
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if(colorMatchCheck(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horizontal');
        reportWin(row, col);
        return true;
      }else {
        continue;
      }
    }
  }
}

//check for vertical wins
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row, col), returnColor(row+1, col), returnColor(row+2, col), returnColor(row+3, col))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for diagonal wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1, col+1), returnColor(row+2, col+2), returnColor(row+3, col+3))) {
        console.log('diagonal');
        reportWin(row, col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1), returnColor(row-2, col+2), returnColor(row-3, col+3))) {
        console.log('diagonal');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// START WITH PLAYER 1
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$('p').text(player1 + ", It is your turn, pick a column to drop in!")


$('.board button').on('click', function(){

// finding out what column was chosen
  var col = $(this).closest('td').index();

//finding out the available unchosen cell starting from bottom
  var bottomAvail = checkBottom(col);

// drop in the chip to the chosen button
  changeColor(bottomAvail, col, currentColor);


// Check for a win or a tie.
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck() ) {
    $('h1').text(currentName + ", You have won!").css("fontSize", "50px");
    $('h2').fadeOut('fast');
    $('p').fadeOut('fast');
  }

// If no win or tie, continue to next player
  currentPlayer = currentPlayer * -1;

  if (currentPlayer === 1) {
    currentName = player1;
    $('p').text(currentName + ' It is your turn!');
    currentColor = player1Color;
  }else{
    currentName = player2;
    $('p').text(currentName + " It is your turn");
    currentColor = player2Color;
  }

})
