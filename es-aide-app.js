function calClick() {
    // change class from hidden  to show so the form for people to submit
    if (document.getElementById("formDiv").className = ".hidden") {
        document.getElementById("formDiv").classList.remove(".hidden");
        document.getElementById("instruc").classList.add(".hidden");

    }
}

function buttonPress() {
    // thank user for submitting their form
    alert("Thank you for submitting your meeting request!");
}

var dayTimes = ["8:30am", "12:30pm", "12:40pm", "12:50pm", "1:00pm", "1:10pm", "1:20pm", "1:30pm", "1:40pm", "1:50pm"];
var nightArray = ["7:10", "7:20", "7:30", "7:40", "7:50", "8:00", "8:10", "8:20", "8:30", "8:40", "8:50"];

var nightTimes = nightArray + "pm";



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
