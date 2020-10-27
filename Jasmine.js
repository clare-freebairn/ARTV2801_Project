

// Hi Jasmine, 
// Thanks for pushing your work, I copy pasted the function from your classic.js 
//file into here, and created the comprehensionGame function to integrate the game
//into the overall structure. However I'm not familiar with jQuery so I'm not really
//sure how to integrate the jQuery function into the overall game structure. 
//(feel free to delete this message after you've read it so it doesnt clutter up your file :P )

//p.s two important variables I have created are wWidth, and wHeight, 
// which are the width and height of the screen the game is being played on
//This means no matter what size screen people have, the game should fill their screen. 



 

//--------------------------------------Clare Code-------------------------------------------//
var comprehensionGameBooleans = {playing: false, mouseOver1: false, mouseOver2: false, mouseOver3: false, mouseOver4: false, title: true, answer1: false, answer2: false, answer3: false, endTitle: false};
var comprehensionColours = [255, 0]//I added this variable where you can store your colours, just makes them easier to use/change
var comprehensionText = ["A bit about the game"]

//This function should contain all the function calls that your game recquires to work. 
//this is called in MiniGame 1, and that is where your game will play from.
function comprehensionGame() {
    push();//gets rid of all my style presets (like text size. strokeweight and such) so you have a clean slate
    comprehensionGameBooleans.playing = true;
    setComprehensionButtons();
    drawComprehensionButtons();
    comprehensionMouseOver();

    pop();//Clears your presets so they dont affect the functions after.    
}



function setComprehensionButtons() {
    comprehensionButtons = [
        {x: wWidth*0.48, y: wHeight*0.75, w: wWidth*0.25, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}, 
        {x: wWidth*0.2 - wWidth*0.25/2, y: wHeight*0.5, w: wWidth*0.25, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}, 
        {x: wWidth*0.5 - wWidth*0.25/2, y: wHeight*0.5, w: wWidth*0.25, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]},
        {x: wWidth*0.8 - wWidth*0.25/2, y: wHeight*0.5, w: wWidth*0.25, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}]
}

function drawComprehensionButtons() {
    //Text title 
    fill(comprehensionButtons[0].colour)
    text("Comprehension Test", wWidth*0.5, wHeight*0.25);

    rectMode(CENTER);
    text(comprehensionText, wWidth*0.5, wHeight*0.5, wWidth*0.3, wHeight*0.25);
    rectMode(CORNER);
    text("when you press start you will be taken to a new tab for this game", wWidth*0.5, wHeight*0.5, 100, 100);

    //obligatory click to continue

    //Go Button
    fill(comprehensionButtons[0].colour);
    strokeWeight(20);
    stroke(comprehensionButtons[0].stroke);
    rect(comprehensionButtons[0].x - comprehensionButtons[0].w/2, comprehensionButtons[0].y, comprehensionButtons[0].w, comprehensionButtons[0].h);
    fill(comprehensionButtons[0].text);
    noStroke();
    
    if(comprehensionGameBooleans.title){
        text("Start", comprehensionButtons[0].x, comprehensionButtons[0].y + comprehensionButtons[0].h/2);
    } else if(!comprehensionGameBooleans.title){
        text("Next Game", comprehensionButtons[0].x, comprehensionButtons[0].y + comprehensionButtons[0].h/2);
    }

    //End text

    //Next button
    
}

function comprehensionMouseOver() {
    var a = mouseX > comprehensionButtons[0].x - comprehensionButtons[0].w/2 && mouseX < comprehensionButtons[0].x - comprehensionButtons[0].w/2 + comprehensionButtons[0].w;
  var b = mouseY > comprehensionButtons[0].y && mouseY < comprehensionButtons[0].y + comprehensionButtons[0].h;
  if(a && b && (comprehensionGameBooleans.title || !comprehensionGameBooleans.endTitle)){
    comprehensionButtons[0].colour = colour[4];
    comprehensionButtons[0].stroke = colour[0];
    comprehensionButtons[0].text = colour[2];
    comprehensionGameBooleans.mouseOver1 = true;
  } else { comprehensionGameBooleans.mouseOver1 = false; }
}