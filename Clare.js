var colour = [0, 50, 100, 150, 200, 250];
var questionsMinigame3 = ["It's not ________ correct", "____ you be able to ____ this", "Does this ___ make it easier", "Why can't you _____ this?"];
var answersMinigame3 = [["Necesarily", "Nessicarily"], ["Wuld/read", "Would/reed"], ["Fant", "Coler"], ["Lane", "Lern"]];
var buttonPlacement;
var currentQText = [questionsMinigame3[0], answersMinigame3[0]];
var spellingGameBooleans = {mouseOver1: false, mouseOver2: false, question1: 0, question2: 0, question3: 0, question4: 0, endTitle: 0};

var endTitleTextMinigame3 = [];




function spellingGame() {
    setButtons();
    mouseIsOverButtons();
    if(spellingGameBooleans.endTitle == 0){
        spellingButtons();
    spellingGameText();
    } else {


    }

}

function setButtons(){
    buttonPlacement = [
        {x: wWidth*0.25, y: wHeight*0.125, w: wWidth*0.5, h: wHeight*0.25, colour: colour[2], stroke: colour[1], text: colour[4]}, 
        {x: wWidth*0.125, y: wHeight*0.5, w: wWidth*0.333, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}, 
        {x: wWidth*0.52, y: wHeight*0.5, w: wWidth*0.333, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}],
        {x: 10, y: 10, w: 10, h: 10, colour: colour[2], stroke: colour[1], text: colour[4]}
}

function mouseIsOverButtons() {
    //If the mouse is over the button, change its colour.
    var a = mouseX > buttonPlacement[1].x && mouseX < buttonPlacement[1].x + buttonPlacement[1].w;
    var b = mouseY > buttonPlacement[1].y && mouseY < buttonPlacement[1].y + buttonPlacement[1].h;
    if(a && b){
        buttonPlacement[1].colour = colour[4];
        buttonPlacement[1].stroke = colour[0];
        buttonPlacement[1].text = colour[2];
        spellingGameBooleans.mouseOver1 = true;

    } else { spellingGameBooleans.mouseOver1 = false; }

    var c = mouseX > buttonPlacement[2].x && mouseX < buttonPlacement[2].x + buttonPlacement[2].w;
    var d = mouseY > buttonPlacement[2].y && mouseY < buttonPlacement[2].y + buttonPlacement[2].h;
    if(c && d){
        buttonPlacement[2].colour = colour[4];
        buttonPlacement[2].stroke = colour[0];
        buttonPlacement[2].text = colour[2];
        spellingGameBooleans.mouseOver2 = true;

    } else { spellingGameBooleans.mouseOver2 = false;}
}

function spellingButtons() {
    push();
    strokeWeight(20);
    // draw the text boxes, and set their fill colour to the one specified in the array 
    //Question Text Box
    fill(buttonPlacement[0].colour);
    stroke(buttonPlacement[0].stroke);
    rect(buttonPlacement[0].x, buttonPlacement[0].y, buttonPlacement[0].w, buttonPlacement[0].h);
    //Left Text Box
    fill(buttonPlacement[1].colour);
    stroke(buttonPlacement[1].stroke);
    rect(buttonPlacement[1].x, buttonPlacement[1].y, buttonPlacement[1].w, buttonPlacement[1].h);
    //Right Text Box
    fill(buttonPlacement[2].colour);
    stroke(buttonPlacement[2].stroke);
    rect(buttonPlacement[2].x, buttonPlacement[2].y, buttonPlacement[2].w, buttonPlacement[2].h);
    pop();
    // console.log(mouseX, mouseY);

}

function spellingGameText() {
    //Displays the text for questions and answers (and eventually results)
    push();

    fill(buttonPlacement[0].text);
    text(currentQText[0], buttonPlacement[0].x + (buttonPlacement[0].w)/2, buttonPlacement[0].y + (buttonPlacement[0].h)/2);

    fill(buttonPlacement[1].text);
    text(currentQText[1][0], buttonPlacement[1].x + (buttonPlacement[1].w)/2, buttonPlacement[1].y + (buttonPlacement[1].h)/2);

    fill(buttonPlacement[2].text);
    text(currentQText[1][1], buttonPlacement[2].x + (buttonPlacement[2].w)/2, buttonPlacement[2].y + (buttonPlacement[2].h)/2);
    pop();
}

function spellingGameScoring() {

    if(spellingGameBooleans.question1 == 1){
        endTitleTextMinigame3.push("It is not necesarily correct")
    } else if(spellingGameBooleans.question1 == 2){
        endTitleTextMinigame3.push("It is not nessicarily correct")
    }

    if(spellingGameBooleans.question2 == 1){
        endTitleTextMinigame3.push("Wuld you be able to read this?") 
    } else if(spellingGameBooleans.question2 == 2){
        endTitleTextMinigame3.push("Would you be able to reed this?") 
    }

    if(spellingGameBooleans.question3 == 1){
        endTitleTextMinigame3.push("Does this coler help?") 
    } else if(spellingGameBooleans.question3 == 2){
        endTitleTextMinigame3.push("Does this fant help?") 
    }

    if(spellingGameBooleans.question4 == 1){
        endTitleTextMinigame3.push("Why can't you lane this?") 
    } else if(spellingGameBooleans.question4 == 2){
        endTitleTextMinigame3.push("Why can't you lern this?") 
    }

    
    

}

function spellingGameEndTitle() {
    spellingGameScoring();

  
    push();

    fill(colour[2]);
    stroke(colour[4]);
    rect();
    fill(buttonPlacement[3].text);
    text("How is your Spelling?" );
    text("These are your selected answers, how did you do? Did you find it difficult to get them right?");
    text(endTitleTextMinigame3[0], );
    text(endTitleTextMinigame3[1]);
    text(endTitleTextMinigame3[2]);
    text(endTitleTextMinigame3[3]);
    text("Next Game" )

}