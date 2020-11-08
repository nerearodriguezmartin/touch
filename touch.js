function inicio() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false); // el false se puede quitar, es igual que no ponerlo
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click", click);
  }

  window.onload = inicio;
  /*document.addEventListener("DOMContentLoaded", startup);*/

  function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchstart" + evt.pageX + " " + evt.pageY;
    
  }

  function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchend" + evt.pageX + " " + evt.pageY;
    
  }

  function handleCancel(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchcancel" + evt.pageX + " " + evt.pageY;
    
  }

  function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchmove"+ evt.pageX + " " + evt.pageY;
    
  }

  function click(){
      alert("click");
  }