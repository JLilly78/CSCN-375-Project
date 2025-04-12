var bot_text = document.getElementById("convotext");

window.onload = function start(){
    bot_text = document.getElementById("convotext");
};



function changetext(chosenQuery) {
    if (chosenQuery == 1) {
        bot_text.textContent = "OK, here is a calendar showing the classes you've chosen \n (This is where you would see a calendar, if I had one)";
    }
    else if (chosenQuery == 2) {
        bot_text.textContent = "Based on what I can see from your previously taken courses, it seems like you can take CSCN 375, CSCN 342, BUSI 427, and others."
    }
    else if (chosenQuery == 3) {
        bot_text.textContent = "The ideal order of courses to take for the next 3 semesters is (This is where I would say that, but I don't feel like it today, sorry buddy)"
    }

}