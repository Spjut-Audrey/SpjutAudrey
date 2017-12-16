function calClick() {
    // change class from hidden  to show so the form for people to submit
    if (document.getElementById("formDiv").className = ".hidden") {
        document.getElementById("formDiv").classList.remove(".hidden");
        document.getElementById("instruc").classList.add("hidden");

    }
}

var dayTimes = ["8:30am", "12:30pm", "12:40pm", "12:50pm", "1:00pm", "1:10pm", "1:20pm", "1:30pm", "1:40pm", "1:50pm"];
var nightArray = ["7:10", "7:20", "7:30", "7:40", "7:50", "8:00", "8:10", "8:20", "8:30", "8:40", "8:50"];

var nightTimes = nightArray;// + "pm" added in loop;



// table selector for highlighting
var trs = document.querySelectorAll("td");
for(var i = 0; i < trs.length; i++){
    trs[i].addEventListener("click",  function(){
        for (td of trs) {
            td.className = "";
        }
        this.className += " selected";
    });
}

// input class change onkeypress to light yellow
    document.getElementsByTagName("input").onkeypress = function(){boardEvent()};
        function boardEvent() {
            document.getElementsByTagName("input").style.backgroundColor = " lightyellow";
        }

//dom manip for arrays into time form

for(var i = 0; i < dayTimes.length; i++ ){
    var timeOption = document.createElement("option");

    timeOption.innerHTML = dayTimes[i];
    timeOption.value = dayTimes[i];

    document.getElementsByName("time")[0].appendChild(timeOption);
}

for(var i = 0; i < nightTimes.length; i++ ){
    var timeOption = document.createElement("option");

    timeOption.innerHTML = nightTimes[i] + "pm";
    timeOption.value = nightTimes[i];

    document.getElementsByName("time")[0].appendChild(timeOption);
}

//Get loval storage for JSON (attempt)

// get info first from onclick of submit button

//after stored show results in "output" div
function buttonPress() {
    var formInfo = document.getElementById('form');
    var time = document.getElementById('timeValue');
    var person = document.getElementById('personValue');
    alert("Thank you for submitting your meeting request!");
    
    var displayTime = localStorage.setItem('timeValue', time.value);
    var displayPerson = localStorage.setItem('personValue', person.value);
    
    alert(JSON.stringify(displayTime, displayPerson);)
    
   
    document.getElementById('output').innerHTML = formInfo;
    
    // thank user for submitting their form
    alert("Thank you for submitting your meeting request!");
    return false;
}
