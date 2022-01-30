var min = 25;
var sec = 60;

var interval;
var startbutton = document.querySelector("#start");
var count = 0;

function start(){
  if (startbutton.innerHTML == "Iniciar"){
    min--;
  }
  
  if (interval === undefined){
    interval = setInterval(watch, 1000);
    startbutton.innerHTML = "Iniciar";  
  } else {
    alert("A contagem já está em andamento!!!");
  }
}

function stop(){
  clearInterval(interval);
  interval = undefined;
  startbutton.innerHTML = "Retomar";
}

function reset(){
  location.reload();
  
  /*
  min = 25;
  sec = 0;
  document.getElementById('watch').innerText=zero(min)+':'+zero(sec);
  clearInterval(interval);
  interval = undefined;
  startbutton.innerHTML = "Iniciar";
  */
}

function watch(){
  sec--;
  if (sec == 0){
    min--;
  }
  if (sec < 0){
    sec = 59;
  }

  if (min === -1 && sec === 0){
    count += 1;
    min = 5;
    sec = 0;
    clearInterval(interval);
    interval = undefined;
  }

  if (count == 1 && min == 0 && sec == 0) {
    min = 0;
    sec = 0;
    clearInterval(interval);
    interval = undefined;
  }
  
  document.getElementById('watch').innerText=zero(min)+':'+zero(sec);
}

function zero(digit){
  if (digit<10){
    return('0'+digit);
  }else{
    return(digit);
  }
}