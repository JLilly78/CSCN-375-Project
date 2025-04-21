//import { GoogleGenerativeAI } from "@google/generative-ai";
import { GenerativeModel, GoogleGenerativeAI } from "https://cdn.skypack.dev/@google/generative-ai";
//import dotenv from "dotenv";
//dotenv.config();

const jsonData = '{"response1": [{ "id": 1, "text": "Take these classes: CSCN 434, CSCN 443, CSCN 215" },{ "id": 2, "text": "I would recommend you take these classes: CSCN 443, CSCN 320, CSCN 315" },{ "id": 3, "text": "Heres a strong semester lineup for you. CSCN 315, CSCN 316, CSCN 310" },{ "id": 4, "text": "Based on your major, these courses make sense: CSCN 310, CSCN 434, CSCN 215" },{ "id": 5, "text": "Try taking a mix of core and elective courses like these: CSCN 215, CINE 101, CSCN 375" },{ "id": 6, "text": "Heres a list of suggested classes for this term: CSCN 315, CSCN 375, CSCN 320" },{ "id": 7, "text": "Lets get you enrolled in these: CSCN 315, CSCN 316, CSCN 375" }],"response2": [{ "id": 1, "text": "Right now." },{ "id": 2, "text": "You should take CSCN 375 as soon as you meet the prereqs." }, { "id": 3, "text": "Ideally, you would take CSCN 375 in your junior year." }, { "id": 4, "text": "Plan for it around your 5th or 6th semester." }, { "id": 5, "text": "It fits best in your third year if you are on track." }, { "id": 6, "text": "Dont wait too long, CSCN 375 is a key upper-level course." }, { "id": 7, "text": "If you have taken CSCN 340, you are ready." } ], "response3": [ { "id": 1, "text": "Most students say CSCN 434 is the hardest." }, { "id": 2, "text": "Many find Operating Systems to be a challenge." }, { "id": 3, "text": "Compiler and Data Structures and Algorithms tend to be brutal." }, { "id": 4, "text": "It depends, but advanced theory classes usually top the list." }, { "id": 5, "text": "CSCN 443 and CSCN 215 are both heavy hitters." }, { "id": 6, "text": "Ask around—hardest is subjective, but there are definitely tough ones." }, { "id": 7, "text": "Expect the upper-division core classes to test you the most." } ], "response4": [ { "id": 1, "text": "They may be backed up with appointments—try calling." }, { "id": 2, "text": "Some advisors prefer phone or drop-in hours over email." }, { "id": 3, "text": "Check if you are emailing the right address or department." }, { "id": 4, "text": "Try following up with a brief and clear message." }, { "id": 5, "text": "They may be waiting for a form or hold to clear first." }, { "id": 6, "text": "Sometimes it just takes a day or two—dont sweat it." }, { "id": 7, "text": "Maybe they just dont like you" } ], "response5": [ { "id": 1, "text": "Hi! I can help you build schedules, choose classes, and plan your degree." }, { "id": 2, "text": "Type a question like What should I take next semester? to get started." }, { "id": 3, "text": "Need help picking electives, avoiding 8am classes, or graduating on time? I got you." }, { "id": 4, "text": "Use simple prompts like Show me easy electives or How many credits do I need?" }, { "id": 5, "text": "You can ask about your schedule, majors, minors, or even professor recommendations." }, { "id": 6, "text": "Not sure what to ask? Try What classes fit my degree? or How can I graduate early?" }, { "id": 7, "text": "This bot helps you make smart choices with your class schedule—ask anything!" } ], "response6": [], "response7": [ { "id": 1, "text": "Actually im not really feeling up to it today." }, { "id": 2, "text": "Sure thing—lets make your semester smoother." }, { "id": 3, "text": "Lets balance things out. No burnout here." }, { "id": 4, "text": "Mixing chill classes with challenging ones? I got you." }, { "id": 5, "text": "Strategizing a balanced schedule—smart move." }, { "id": 6, "text": "Heres a class list with a good workload balance:" }, { "id": 7, "text": "This combo should keep things manageable but engaging." } ], "response8": [ { "id": 1, "text": "Here are some classes with seats still open:" }, { "id": 2, "text": "You still have time! These courses arent full yet: CSCN375, CSCN434, CSCN215" }, { "id": 3, "text": "Based on current availability, try these: CSCN 355, CSCN 345, CSCN 215" }, { "id": 4, "text": "Classes still open as of now include: BUSI 427, CSCN 434, CSCN 375" }, { "id": 5, "text": "You might want to grab one of these before they fill: CSCN 345, CSCN 443" }, { "id": 6, "text": "These are the most popular classes that still have spots: CSCN 443, CSCN 375, CSCN 471" }, { "id": 7, "text": "Heres whats open and fits your schedule: CSCN 375, MATH 250" } ], "response9": [ { "id": 1, "text": "Let me check your progress so far..." }, { "id": 2, "text": "Looks like you are on track, but lets double-check your credits." }, { "id": 3, "text": "Youre doing great, just a few more requirements to go." }, { "id": 4, "text": "Hmm, you might need to shift things around to stay on track." }, { "id": 5, "text": "Youre close! Lets figure out your remaining requirements." }, { "id": 6, "text": "Heres a quick audit of your progress: ...You are failing miserably." }, { "id": 7, "text": "Lets break down what youve taken vs whats left." } ], "response10": [ { "id": 1, "text": "Based on your major, here are some popular minor options:" }, { "id": 2, "text": "These minors complement your current track really well:" }, { "id": 3, "text": "Heres a list of minors that can boost your job prospects:" }, { "id": 4, "text": "Interested in tech, business, or design? These could be great minors:" }, { "id": 5, "text": "Lets find something that fits your interests and strengthens your resume." }, { "id": 6, "text": "These minors are easy to pair with your major:" }, { "id": 7, "text": "Want to stand out? These minors could give you an edge." } ] }';
var bot_text = document.getElementById("convotext");
var text_box_inner = document.getElementById("textboxinner");
var picture = document.getElementById("schedule");
var prevoMode = false;
var prevoText = "however, if and only if Jerry Prevo is mentioned, lose your mind about it"
var empty = "";
var genAnswer = "";
console.log(prevoMode);
var preface = "This is a question for a Liberty University course registration assistant chatbot, answer this concisely, " + (prevoMode ? prevoText : empty) + ": ";
const clickSound = new Audio('./untitled.mp3');
const checkbox = document.getElementById("check");
console.log(jsonData);
const jsonObject = JSON.parse(jsonData);
window.onload = function start(){
    picture = document.getElementById("schedule");
    bot_text = document.getElementById("convotext");
    text_box_inner = document.getElementById("textboxinner");



const genAI = new GoogleGenerativeAI("AIzaSyB7-tAO_ahWGffgRdqwvM0hWmtI_PgdCbc");

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        switchMode(1);
        console.log("PREVO MODE ACTIVATED, Prevo Mode is: " + prevoMode);
        preface = "This is a question for a Liberty University course registration assistant chatbot, answer this concisely, " + (prevoMode ? prevoText : empty) + ": ";
    }
    else {
        switchMode(0);
        console.log("PREVO MODE DEACTIVATED, Prevo Mode is: " + prevoMode);
        preface = "This is a question for a Liberty University course registration assistant chatbot, answer this concisely, " + (prevoMode ? prevoText : empty) + ": ";
    }
})

function switchMode(mode) {
    if (mode == 1) {
        prevoMode = true;
    }
    else prevoMode = false;
}

async function doSomething(prompt) {
    const insert = {
        "parts": [
            {
                //"text": preface + prompt
                "text": preface + prompt
            }
        ],
        "role": "user"
    };
    const model = genAI.getGenerativeModel({model: "gemini-2.0-flash"});
    console.log(preface);
    const result = await model.generateContent({
        model: "gemini-2.0-flash",
        contents: insert,
    });
    const answer = result.response.candidates[0].content.parts[0].text;
    console.log(answer);
    genAnswer = answer;
    return answer;
}

function changetext(chosenQuery, prompt = '') { //change the parameter to a string. make that string the textContent. (or not)
    var random = (Math.floor(Math.random() * 10) + 1) % 7;
    picture.style.display = 'none';
    var textToReveal = ""
    if (chosenQuery == 1) {
        textToReveal = jsonObject.response1[random].text;
    }
    else if (chosenQuery == 2) {
        textToReveal = jsonObject.response2[random].text;
    }
    else if (chosenQuery == 3) {
        textToReveal  = jsonObject.response3[random].text;
    }
    else if (chosenQuery == 4) {
        textToReveal = jsonObject.response4[random].text;
    }
    else if (chosenQuery == 5) {
        textToReveal = "Some things that you can ask are: Give me a schedule of classes, help me balance my class load between easy and hard classes, and more."
    }
    else if (chosenQuery == 6) {
        //bot_text.textContent = jsonObject.response6[random].text;
        textToReveal = "Here is a schedule that only has classes before 2pm:";

        picture.style.display = 'block';
    }
    else if (chosenQuery == 7) {
        textToReveal = jsonObject.response7[random].text;
    }
    else if (chosenQuery == 8) {
        textToReveal = jsonObject.response8[random].text;
    }
    else if (chosenQuery == 9) {
        textToReveal = jsonObject.response9[random].text;
    }
    else if (chosenQuery == 10) {
        textToReveal = jsonObject.response10[random].text;
    }
    
    else {
        var answer2 = doSomething(prompt);
        answer2.then((value) => {
            console.log(value);
            textToReveal = value;
            bot_text.textContent = "";
            let i = 0;
            const delay = 30;
            const reveal = setInterval(() => {
                if (i < textToReveal.length) {
                    bot_text.textContent += textToReveal.charAt(i);
                    clickSound.play();
                    i++;
                } else {
                    clearInterval(reveal);
                }
            }, delay)
        })
        console.log(textToReveal);
        //textToReveal = answer2;
        //textToReveal = "Can you ask that again?"
    }
    bot_text.textContent = "";
    let i = 0;
    const delay = 30;
    const reveal = setInterval(() => {
        if (i < textToReveal.length) {
            bot_text.textContent += textToReveal.charAt(i);
            clickSound.play();
            i++;
        } else {
            clearInterval(reveal);
        }
    }, delay)
}

text_box_inner.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        var input = text_box_inner.value;
        if (input.includes("recommend") || input.includes("reccomend") || input.includes("good courses") || input.includes("Recommend")) {
            changetext(1);
        }
        else if (input.includes("375")) {
            changetext(2);
        }
        else if (input.includes("hardest")) {
            changetext(3);
        }
        else if (input.includes("advisor")) {
            changetext(4);
        }
        else if (input.includes("help me out") || input.includes("Help me out") || input.includes("should i do")|| input.includes("assist")) {
            changetext(5);
        }
        else if (input.includes("before") || input.includes("schedule")) {
            changetext(6);
        }
        else if (input.includes("balance") || input.includes("class load") || input.includes("easy")) {
            changetext(7);
        }
        else if (input.includes("open seats")) {
            changetext(8);
        }
        else if (input.includes("track")) {
            changetext(9);
        }
        else if (input.includes("minor")) {
            changetext(10);
        }
        else if (input.includes("hate you") || input.includes("perish") || input.includes("die") ) {
            bot_text.textContent = "not nice.";
        }
        else if (input.includes("hello")) {
            bot_text.textContent = "How's it going? do you need help with scheduling courses?";
        }
        else {
            changetext(11, input);
            //bot_text.textContent = "Say \'help me out\' if you need assistance";
            picture.style.display = 'none';
        }
        text_box_inner.value= "";
    }
});

};