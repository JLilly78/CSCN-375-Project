import jsonData from './response.json' with {type: "json"};


var bot_text = document.getElementById("convotext");
var text_box_inner = document.getElementById("textboxinner");

console.log(jsonData);
window.onload = function start(){
    bot_text = document.getElementById("convotext");
    text_box_inner = document.getElementById("textboxinner");




function changetext(chosenQuery) { //change the parameter to a string. make that string the textContent.
    if (chosenQuery == 1) {
        bot_text.textContent = "OK, here is a calendar showing the classes you've chosen \n (This is where you would see a calendar, if I had one)";
    }
    else if (chosenQuery == 2) {
        bot_text.textContent = "Based on what I can see from your previously taken courses, it seems like you can take CSCN 375, CSCN 342, BUSI 427, and others.";
    }
    else if (chosenQuery == 3) {
        bot_text.textContent = "The ideal order of courses to take for the next 3 semesters is (This is where I would say that, but I don't feel like it today, sorry buddy)";
    }
    else if (chosenQuery == 4) {
        bot_text.textContent = "what's up";
    }

}

text_box_inner.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        var input = text_box_inner.value;
        if (input.includes("calendar")) {
            changetext(1);
        }
        else if (input.includes("recommended")) {
            changetext(2);
        }
        else if (input.includes("ideal order")) {
            changetext(3);
        }
        else if (input.includes("hi")) {
            changetext(4);
        }
        else {
            bot_text.textContent = "What???";
        }
        text_box_inner.value= "";
    }
});

};