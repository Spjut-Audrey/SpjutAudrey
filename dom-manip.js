
function moveOrphan() {
    document.getElementById('parent')
        .appendChild(document.getElementById('orphan'));
    
}

function moveBefore() {
    document.getElementById('parent')
        .insertBefore(document.getElementById('orphan'), document.getElementById('child1'));
}

function removeOrphan() {
    document.getElementById('orphan').parentNode
        .removeChild(document.getElementById('orphan'));
}

function createDiv() {
    var newD = document.createElement('div');
    var newText = document.createTextNode('I am a new div');
    newD.appendChild(newText);
    
    var oldDiv = document.getElementById('parent');
    document.body.insertBefore(newD, oldDiv);
}