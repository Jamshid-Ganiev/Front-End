var restart = document.querySelector('#abc');

///////////////////////////////////
//GRAB ALL THE CELLS
var cells=document.querySelectorAll("td");

//CLEAR ALL THE CELLS
function clearBoard() {
  for(var i = 0; i < cells.length; i++){
    cells[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);


function marker(){
  if(this.textContent === ''){
    this.textContent = "X";
    this.style.color = 'green';
  }else if (this.textContent === 'X') {
    this.textContent = "O";
    this.style.color = 'blue';
  }else {
    this.textContent = '';
  }
}

for(var i = 0; i< cells.length;i++) {
  cells[i].addEventListener('click',marker);
}
