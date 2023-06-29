var gamePattern = [];
var userClickedPattern = [];
var buttonColour = ["red", "blue", "green", "yellow"];
var currentColour;
var currentLevel;
var i;
var wrong;
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed")
    }, 100
    );

}

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
    console.log(userClickedPattern.length - 1);
});



function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);


}

function playSound(name) {
    var audio = new Audio("./" + name + ".mp3");
    audio.play();


}
var firstKeyPress = true;
var level;

$(document).keypress(function (event) {
    if (firstKeyPress) {
        level = 0;
        $("h1").text("Level " + level);
        nextSequence();
        firstKeyPress = false;
    }
});
function startOver(){
    level = 0;
    gamePattern =[];
    firstKeyPress = true;

}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
        console.log("Success");
        setTimeout(function () {
            nextSequence();
        }, 1000);
    }
}
    else {
        console.log("Wrong");
        var audio3 = new Audio("./wrong.mp3");
        audio3.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 200
        );
        $("h1").text("Game over, Press any key to restart");
        startOver();

    }

}















