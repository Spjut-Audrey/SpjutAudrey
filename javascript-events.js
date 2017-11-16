function mouseClick() {
    var buttonClick = document.getElementById("clickButton");
    
    buttonClick.classList.toggle("changeClick");
}

function dateFunc() {
    var d = new Date();
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    var month = new Array(12);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";


    var n = weekday[d.getDay()] + ", " +d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();

    document.getElementById("currentdate").innerHTML = n;
}

function numFunc(){
    console.log("numFunc called");
    var num_one = parseFloat(document.getElementById("numOne").value);
    var num_two = parseFloat(document.getElementById("numTwo").value);

    var s = num_one + num_two;
    alert(s);
//    return false;
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
    document.getElementById("drop").innerHTML = " Element is dragging it's feet.";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("drop").innerHTML = " You dropped it like it's hot!"
}

function copyFunc() {
    document.getElementById("copyText").innerHTML = "Copy that, rogue leader";
}

function pasteFunc() {
    document.getElementById("pasteText").innerHTML = "Stop pasting time! D:"
}

function printFunc() {
    document.getElementById("printBox").innerHTML = "Printing in progress."
}

function mediaFunc() {
    alert("Video is playing.");
}

var a = document.getElementById("aniDiv");

function aniFunc() {
a.style.WebkitAnimation = "name 1s 2";
console.log(3);
}

a.addEventListener("webkitAnimationStart", startFunc);
a.addEventListener("webkitAnimationIteration", repeatFunc);
a.addEventListener("webkitAnimationEnd", endFunc);

a.addEventListener("animationstart", startFunc);
a.addEventListener("animationiteration", repeatFunc);
a.addEventListener("animationend", endFunc);

function startFunc() {
     this.innerHTML = "animationstart event occurred";
    this.style.backgroundColor = "blue";
    console.log(2);
}

function repeatFunc() {
    this.innerHTML = "animationiteration event occurred";
    this.style.backgroundColor = "green";
}

function endFunc() {
    this.innerHTML = "animationend event occurred";
    this.style.backgroundColor = "purple";
}

document.getElementById("tranEvent").addEventListener("webkitTransitionEnd", tranFunc);
document.getElementById("tranEvent").addEventListener("transitionend", tranFunc);

function tranFunc() {
    this.innerHTML = "transitionend event occurred";
    this.style.backgroundColor = "red";
}

//work on this more!
function log(message) {
    document.getElementById("log").innerHTML = message;
}

function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
  log("initialized.");
}

function colorForTouch (touch) {
    return "#1b1b1b";
}
function handleStart(evt) {
  evt.preventDefault();
  log("touchstart.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;
        
  for (var i = 0; i < touches.length; i++) {
    log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    log("touchstart:" + i + ".");
  }
}

function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      log("continuing touch "+idx);
      ctx.beginPath();
      log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
      log(".");
    } else {
      log("can't figure out which touch to continue");
    }
  }
}

function handleEnd(evt) {
  evt.preventDefault();
  log("touchend");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
      ongoingTouches.splice(idx, 1);  // remove it; we're done
    } else {
      log("can't figure out which touch to end");
    }
  }
}

function handleCancel(evt) {
  evt.preventDefault();
  log("touchcancel.");
  var touches = evt.changedTouches;
  
  for (var i = 0; i < touches.length; i++) {
    var idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);  // remove it; we're done
  }
}