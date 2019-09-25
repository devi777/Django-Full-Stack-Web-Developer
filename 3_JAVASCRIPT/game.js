var a=document.getElementById("restart")
var squares=document.querySelectorAll('td')

function clearboard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent="";
  }
}

$('a').click(clearboard)

// a.addEventListener('click',clearboard,false)
$('h1').click(clearmarker)



function clearmarker(){
  if(this.textContent===''){
    this.textContent='X';
  }

  else if (this.textContent==='X') {
    this.textContent='O';
  }
  else {
    this.textContent='';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',clearmarker)
}
