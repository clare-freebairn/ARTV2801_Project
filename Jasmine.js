let c1
let c2
let wordSwitch
var logo

function setupLogo() {
  c1 = random(100,200);
  c2 = random(100,200);
  logo = ["I can't read that", "I cunt read that"];
  wordSwitch = logo[Math.floor(Math.random() * logo.length)];
}

function drawLogo() {
    if(frameCount % 7 == 0){
      c1 = random(100,200);
    }
    if(frameCount % 5 == 0){
      c2 = random(100,200);
      wordSwitch = logo[Math.floor(Math.random() * logo.length)]; 
    }  
    fill(230, c1, c2);
    noStroke();
    circle(wWidth/2 ,wHeight/2 , 400);
    
    push()
    textAlign(CENTER)
    textStyle(BOLD);
    fill(255, c2, c1)
    textSize(45);
    text(wordSwitch, wWidth/2 ,wHeight/2)
    pop()
  }


//--------------------------------------Clare Code-------------------------------------------//
var comprehensionGameBooleans = {playing: false, mouseOver1: false, mouseOver2: false, mouseOver3: false, mouseOver4: false, title: true, answer1: false, answer2: false, answer3: false, endTitle: false};
var comprehensionColours = [255, 0]//I added this variable where you can store your colours, just makes them easier to use/change
var comprehensionText = ["In this game you will need to read the story in its entirety. Then answer the multiple-choice questions correctly. Many Australians will recognise this as being based off the Naplan tests that had to be done in Grade school. "]

//This function should contain all the function calls that your game recquires to work. 
//this is called in MiniGame 1, and that is where your game will play from.
function comprehensionGame() {
    push();//gets rid of all my style presets (like text size. strokeweight and such) so you have a clean slate
    comprehensionGameBooleans.playing = true;
    setComprehensionButtons(); 
    comprehensionMouseOver();
    drawComprehensionButtons();
    pop();//Clears your presets so they dont affect the functions after.    
}



function setComprehensionButtons() {
    comprehensionButtons = [
        {x: wWidth*0.5, y: wHeight*0.75, w: wWidth*0.25, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}, 
        {x: wWidth*0.2 - wWidth*0.25/2, y: wHeight*0.5, w: wWidth*0.25, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}, 
        {x: wWidth*0.5 - wWidth*0.25/2, y: wHeight*0.5, w: wWidth*0.25, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]},
        {x: wWidth*0.8 - wWidth*0.25/2, y: wHeight*0.5, w: wWidth*0.25, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}]
}

function drawComprehensionButtons() {
    //Text title 
    noStroke();
    fill(colour[2]);
    rect(titleCards.x, titleCards.y, titleCards.w, titleCards.h, corners[1])
    
    fill(comprehensionButtons[1].text)
    text("Comprehension Test", wWidth*0.5, wHeight*0.25);

    rectMode(CENTER);
    text(comprehensionText, wWidth*0.5, wHeight*0.45, wWidth*0.3, wHeight*0.3);
    rectMode(CORNER);
    

    //obligatory click to continue

    //Go Button
    noStroke();
    fill(comprehensionButtons[0].colour);
    rect(comprehensionButtons[0].x - comprehensionButtons[0].w/2, comprehensionButtons[0].y, comprehensionButtons[0].w, comprehensionButtons[0].h, corners[1]);
    fill(comprehensionButtons[0].text);
    
    if(comprehensionGameBooleans.title){
        text("Start", comprehensionButtons[0].x, comprehensionButtons[0].y + comprehensionButtons[0].h/2);
    } else if(!comprehensionGameBooleans.title){
        text("Next Game", comprehensionButtons[0].x, comprehensionButtons[0].y + comprehensionButtons[0].h/2);
    }    
}

function comprehensionMouseOver() {
  var a = mouseX > comprehensionButtons[0].x - comprehensionButtons[0].w/2 && mouseX < comprehensionButtons[0].x - comprehensionButtons[0].w/2 + comprehensionButtons[0].w;
  var b = mouseY > comprehensionButtons[0].y && mouseY < comprehensionButtons[0].y + comprehensionButtons[0].h;
  if(a && b && (comprehensionGameBooleans.title || !comprehensionGameBooleans.endTitle)){
    comprehensionButtons[0].colour = colour[4];
    comprehensionButtons[0].text = colour[2];
    comprehensionGameBooleans.mouseOver1 = true;
  } else { comprehensionGameBooleans.mouseOver1 = false; }
}