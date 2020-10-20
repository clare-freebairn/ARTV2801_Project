var colour = [0, 50, 100, 150, 200, 250];
//TODO
//- fucking help me
//- create first page and initialise mp3
//- 
//-------------------------------------MiniGame 4 Distraction Game---------------------------------\\v
var distractionGameCalls = 0;
var distractionButtons;
var distractionGameBooleans = {mouseOver1: false, mouseOver2: false, title: false, answer1: 0, answer2: 0, answer3: 0, endTitle: 0};

function distractionGame() {
    setDistractionButtons();
    distractionMouseOver();
    
    if( !distractionGameBooleans.title ){ 
        distractionGameTitle();
    }
    if( distractionGameBooleans.title ){
        distractionHexagons();
        setTimeout(distractionAnswers, 67000)
    } 
    
}

function distractionGameTitle() {
    push();
    fill(distractionButtons[0].colour);
    strokeWeight(20);
    stroke(distractionButtons[0].stroke);
    rect(distractionButtons[0].x - distractionButtons[0].w/2, distractionButtons[0].y, distractionButtons[0].w, distractionButtons[0].h);
    fill(distractionButtons[1].text);
    noStroke();
    text("Distraction", wWidth*0.5, wHeight*0.25);
    text("You are at a coffee shop with a friend", wWidth*0.5, wHeight*0.5);
    text("they are telling you a story about themselves.", wWidth*0.5, wHeight*0.5 + 30);
    text("What can you hear?", wWidth*0.5, wHeight*0.5 + 60);
    fill(distractionButtons[0].text);
    text("Start", distractionButtons[0].x, distractionButtons[0].y + distractionButtons[0].h/2);
    pop();
}

function distractionHexagons() {
  drawTriangle();
  drawHex();

  
  push();
  hexagons(wWidth/2, wHeight/2);
  pop();
  push();
  hexagons(wWidth/2, wHeight/2 - 400);
  pop();
  push();
  hexagons(wWidth/2, wHeight/2 + 400);
  pop();
  push();
  hexagons(wWidth/2 - 300, wHeight/2 -200);
  pop();
  push();
  hexagons(wWidth/2 - 300, wHeight/2 +200);
  pop();
  push();
  hexagons(wWidth/2 + 300, wHeight/2 -200);
  pop();
  push();
  hexagons(wWidth/2 + 300, wHeight/2 +200);
  pop();
}

function hexagons(centreWidth, centreHeight) {
  translate(centreWidth, centreHeight);
  scale(0.5);
  push();
  imageMode(CENTER);
  translate(h * -2, -300);
  tessellate(3);
  translate(-h, 150);
  tessellate(4);
  translate(-h, 150);
  tessellate(5);
  translate(h, 150);
  tessellate(4);
  translate(h, 150);
  tessellate(3);
  pop();
}

function distractionAnswers() {
    
}

function setDistractionButtons(){
    distractionButtons = [
        {x: wWidth*0.48, y: wHeight*0.75, w: wWidth*0.25, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}, 
        {x: wWidth*0.125, y: wHeight*0.5, w: wWidth*0.333, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}, 
        {x: wWidth*0.52, y: wHeight*0.5, w: wWidth*0.333, h: wHeight*0.125, colour: colour[2], stroke: colour[1], text: colour[4]}]

}

function distractionMouseOver() {
  //If the mouse is over the button, change its colour.
  var a = mouseX > distractionButtons[0].x - distractionButtons[0].w/2 && mouseX < distractionButtons[0].x - distractionButtons[0].w/2 + distractionButtons[0].w;
  var b = mouseY > distractionButtons[0].y && mouseY < distractionButtons[0].y + distractionButtons[0].h;
  if(a && b && !distractionGameBooleans.title){
    distractionButtons[0].colour = colour[4];
    distractionButtons[0].stroke = colour[0];
    distractionButtons[0].text = colour[2];
    distractionGameBooleans.mouseOver1 = true;
  } else { spellingGameBooleans.mouseOver1 = false; }
}

//-------------------------------------Disctraction Game Functions I didnt write-------------------------------------\\

let h = Math.sqrt(3) / 2 * 100;
let shapes;
let hex;

function colorFromPalette(n) {
  const palette = ['#fc71ee', '#3f0f6e', '#030a24', '#222152', '#00f7eb'];
  return palette[n % (palette.length)];
}

function hexagonSetup() {
    

  h = Math.sqrt(3) / 2 * 100;

  shapes = createGraphics(100, Math.ceil(h));
  shapes.noStroke();
  shapes.angleMode(DEGREES);

  hex = createGraphics(wWidth, wHeight);
  hex.angleMode(DEGREES);
}

function drawTriangle() {
    const ctx = shapes.drawingContext;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(100, h);
    ctx.lineTo(0, h);
    ctx.clip();
    shapes.clear();
    shapes.rotate(frameCount);
    shapes.fill(colorFromPalette(0));
    shapes.rect(20, 20, 50, 50);
    shapes.fill(colorFromPalette(2));
    shapes.triangle(0, 10, 80, 90, 0, 100);
    shapes.fill(colorFromPalette(1));
    shapes.triangle(20, 0, 50, 30, 30, 60);
    shapes.fill(colorFromPalette(4));
    shapes.ellipse(100, 50, 80);
    shapes.fill(colorFromPalette(1));
    shapes.ellipse(-50, -50, 50);
    shapes.fill(colorFromPalette(5));
    shapes.ellipse(-40, -46, 20);
    shapes.fill(colorFromPalette(0));
    shapes.triangle(-60, 0, -30, -40, -30, 0);
    shapes.fill(colorFromPalette(3));
    shapes.rect(-45, 0, 40, 300);
    shapes.rotate(17);
    shapes.fill(colorFromPalette(4));
    shapes.rect(30, 40, 10, 40);
    shapes.rotate(37);
    shapes.fill(colorFromPalette(6));
    shapes.rect(30, 40, 20, 40);
    shapes.rotate(180);
    shapes.fill(colorFromPalette(0));
    shapes.triangle(10, 20, 80, 90, 0, 100);
    shapes.translate(20, 0);
    shapes.rotate(20);
    shapes.fill(colorFromPalette(3));
    shapes.rect(0, 0, 20, 200);
    ctx.restore();
  }
  
  function drawHex() {
    hex.push();
    hex.clear();
    hex.translate(100, 100);
    hex.push();
    hex.scale(1 / pixelDensity());
    hex.rotate(30);
    for (let i = 0; i < 3; i++) {
      hex.drawingContext.drawImage(shapes.elt, -50 * pixelDensity(), 0);
      hex.scale(-1, 1);
      hex.rotate(60);
      hex.drawingContext.drawImage(shapes.elt, -50 * pixelDensity(), 0);
      hex.rotate(60);
      hex.scale(-1, 1);
    }
    hex.pop();
    hex.pop();
  }
  
  function tessellate(n) {
    push();
    for (let i = 0; i < n; i++) {
      push();
      scale(1 / pixelDensity());
      drawingContext.drawImage(hex.elt, -100 * pixelDensity(), -100 * pixelDensity());
      pop();
      translate(h * 2, 0);
    }
    pop();
  }

  
    

//-------------------------------------MiniGame 3 Spelling Game-------------------------------------\\
//Unfinished Title 
var questionsMinigame3 = ["It's not ________ correct", "____ you be able to ____ this", "Does this ___ make it easier", "Why can't you _____ this?"];
var answersMinigame3 = [["Necesarily", "Nessicarily"], ["Wuld/read", "Would/reed"], ["Fant", "Coler"], ["Lane", "Lern"]];
var buttonPlacement;
var currentQText = [questionsMinigame3[0], answersMinigame3[0]];
var spellingGameBooleans = {mouseOver1: false, mouseOver2: false, question1: 0, question2: 0, question3: 0, question4: 0, endTitle: 0};
var endTitleTextMinigame3 = [];
var spellingGameCalls = 0;

function spellingGame() {
    var startingFrameRate;
    if(spellingGameCalls == 0){ 
        startingFrameRate = frameCount;
        spellingGameCalls += 1;
    }
    setButtons();
    mouseIsOverButtons();
    
    spellingGameTitle();
    
    setTimeout(spellingGameAfterTitle(), 15000)
    
}

function spellingGameAfterTitle() {
    if(spellingGameBooleans.endTitle == 0){
        spellingButtons();
        spellingGameText();
    } else {
        spellingGameEndTitle();
    }
}

function spellingGameTitle() {
    push();
    fill(buttonPlacement[0].text);
    text("Spelling Game", wWidth*0.5, wHeight*0.25);
    text("For each question select the correct answer.", wWidth*0.5, wHeight*0.5);
    pop()

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

    changeSpellingGameText();
    pop();
}

function changeSpellingGameText() {

    if(spellingGameBooleans.question1 != 0 && spellingGameBooleans.question2 == 0){
        currentQText = [questionsMinigame3[1], answersMinigame3[1]];
        return;
    }

    if(spellingGameBooleans.question2 != 0 && spellingGameBooleans.question3 == 0){
        currentQText = [questionsMinigame3[2], answersMinigame3[2]];
        return;
    }

    if(spellingGameBooleans.question3 != 0 && spellingGameBooleans.question4 == 0){
        currentQText = [questionsMinigame3[3], answersMinigame3[3]];
        return;
    }
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