/* Pseudo Code
A basic Multiple Choice Trivia Game
 
Click to Start
Timer begins at 60 seconds and countdown
Player goes through all 10 questions
player can only guess one answer per question
Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
    ques: "What is Kitty Pryde's alias?",
    ans: ["Rogue", "Siren", "Storm", "Shadowcat"],
    name: "kitty",
    correct: "Shadowcat",
    divClass: ".kitty"
},
{
    ques: "Which Ragin' Cajun has a thing for Rogue?",
    ans: ["Cyclops", "Gambit", "Wolverine", "Iceman"],
    name: "gambit",
    correct: "Gambit",
    divClass: ".gambit"
},
{
    ques: "Jean Grey was the central character in one of the best comic storylines in X-Men history, when she was possessed by what?",
    ans: ["Venom", "The Phoenix", "Mr. Sinister", "The White Queen"],
    name: "jean",
    correct: "The Phoenix",
    divClass: ".jean"
},
{
    ques: "Who was one of the original X-Men?",
    ans: ["Longshot", "Iceman", "Bishop", "Sunfire"],
    name: "original",
    correct: "Iceman",
    divClass: ".original"
},
{
    ques: "Which of the following can NOT read minds?",
    ans: ["Psylocke", "Jean Grey", "Professor X", "Magneto"],
    name: "mindReader",
    correct: "Magneto",
    divClass: ".mindReader"
},
{
    ques: "What are Wolverine's bones laced with?",
    ans: ["Silver", "Gold", "Steel", "Adamantium"],
    name: "bones",
    correct: "Adamantium",
    divClass: ".bones"
},
{
    ques: "What is Scott Summers' codename?",
    ans: ["Cyclops", "Banshee", "Iceman", "Wolverine"],
    name: "cyclops",
    correct: "Cyclops",
    divClass: ".cyclops"
},
{
    ques: "Who is Cable in relation to Cyclops?",
    ans: ["Father", "Friend", "Son", "Brother"],
    name: "cable",
    correct: "Son",
    divClass: ".cable"
},
{
    ques: "Storm suffers from what type of phobia?",
    ans: ["Arachnophobia", "Claustrophobia", "Hydrophobia", "Pyrophobia"],
    name: "fears",
    correct: "Claustrophobia",
    divClass: ".fears"
},
{
    ques: "Cyclops' visor is shielded with what element?",
    ans: ["Ruby Quartz", "Garnet", "Diamond", "Rose Gold"],
    name: "visor",
    correct: "Ruby Quartz",
    divClass: ".visor"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr>');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz