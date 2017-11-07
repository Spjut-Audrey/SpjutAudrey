function tranTog() {
    var transClick = document.getElementById("trans");
    
    transClick.classList.toggle("changeTrans");
}

function scaleTog() {
    var scaleClick = document.getElementById("scale");
    
    scaleClick.classList.toggle("changeScale");
}

function rotateTog() {
    var rotateClick = document.getElementById("rotate");
    
    rotateClick.classList.toggle("changeRotate");
}

function skewTog() {
    var skewClick = document.getElementById("skew");
    
    skewClick.classList.toggle("changeSkew");
}