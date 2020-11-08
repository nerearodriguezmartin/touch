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
    document.getElementById("log").innerHTML = "Touchstart";
    
  }

  function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchend";
    
  }

  function handleCancel(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchcancel";
    
  }

  function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchmove";
    
  }

  function click(){
      alert("click");
  }