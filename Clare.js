var corners
//-------------------------------------MiniGame 4 Distraction Game---------------------------------\\v
var distractionGameCalls = 0;
var distractionButtons;
var distractionGameBooleans = {mouseOver1: false, mouseOver2: false, mouseOver3: false, mouseOver4: false, title: false, answer1: false, answer2: false, answer3: false, endTitle: false};

function distractionGame() {
    setDistractionButtons();
    distractionMouseOver();
    
    if( !distractionGameBooleans.title ){ 
        distractionGameTitle();
    }
    if( distractionGameBooleans.title && !distractionGameBooleans.endTitle){
        distractionHexagons();
    } 
    if(distractionGameBooleans.endTitle){
        distractionGameEndTitle()
    }
    
}

function distractionGameTitle() {
    push();
    noStroke();
    fill(colour[6]);
    rect(titleCards.x, titleCards.y, titleCards.w, titleCards.h, corners[1])
    fill(distractionButtons[0].colour);
    rect(distractionButtons[0].x - distractionButtons[0].w/2, distractionButtons[0].y, distractionButtons[0].w, distractionButtons[0].h, corners[2]);
    fill(distractionButtons[1].text);
    text("Distraction", wWidth*0.5, wHeight*0.25);
    text("You are at a coffee shop with a friend they are telling you a story about themselves. What can you hear?", titleCards.x - corners[0]/2, titleCards.y + titleCards.h*0.2, titleCards.w  - titleCards.w*0.125, titleCards.h);
    rectMode(CORNER);
    fill(distractionButtons[0].text);
    text("Start", distractionButtons[0].x, distractionButtons[0].y + distractionButtons[0].h/2);
    pop();
}

function distractionHexagons() {
  drawTriangle();
  drawHex();
  if(distractionGameCalls == 0){
      distractionSound.play();
  }
  push();
  //Middle
  hexagons(wWidth/2, wHeight/2);
  pop();
  push();
  //Middle Top
  hexagons(wWidth/2 + 43, wHeight/2 - 400 + 25);
  pop();
  push();
  //Bottom Middle
  hexagons(wWidth/2 - 43, wHeight/2 + 400 - 25);
  pop();
  push();
  //Top left
  hexagons(wWidth/2 - 300, wHeight/2 - 200 - 25);
  pop();
  push();
  //Bottom Left
  hexagons(wWidth/2 - 300 - 43, wHeight/2 + 200 - 50);
  pop();
  push();
  //Top right
  hexagons(wWidth/2 + 300 + 46, wHeight/2 - 200 + 50);
  pop();
  push();
  //Bottom Right
  hexagons(wWidth/2 + 300 + 3, wHeight/2 + 200 + 25);
  pop();
  push();
  //Far top left
  hexagons(wWidth/2 - 600 + 43, wHeight/2 - 400 + 25);
  pop();
  //Far left Middle 
  push();
  hexagons(wWidth/2 - 600, wHeight/2);
  pop();
  //Far right Middle 
  push();
  hexagons(wWidth/2 + 600 + 43, wHeight/2 + 75);
  pop();
  //Bottom Far Left
  push();
  hexagons(wWidth/2 - 600 - 43, wHeight/2 + 400 - 25);
  pop();
  //Bottom Far Right
  push();
  hexagons(wWidth/2 + 600 + 3, wHeight/2 + 400 + 50);
  pop();
  //Top Far Right
  push();
  hexagons(wWidth/2 + 600 + 86, wHeight/2 - 200 - 100);
  pop();
  //Top above left
  push();
  hexagons(wWidth/2 - 300 + 43, wHeight/2 - 600);
  pop();
  push();
  //Top right above
  hexagons(wWidth/2 + 300 + 43, wHeight/2 - 400 - 50);
  pop();
  push();
  //Bottom Right
  hexagons(wWidth/2 + 300 + 3, wHeight/2 + 400 + 125);
  pop();
  push();
  hexagons(wWidth/2 - 400 + 15, wHeight/2 + 500 + 25);
  pop();
  //Far far top left
  push();
  hexagons(wWidth/2 - 900, wHeight/2 - 200 - 25);
  pop();
  //Far far middle left
  push();
  hexagons(wWidth/2 - 900 - 43, wHeight/2 + 200 - 50);
  pop();
  //Far far middle right
  push();
  hexagons(wWidth/2 + 900 - 43, wHeight/2 + 200 - 50);
  pop();

  distractionGameCalls += 1;
  if(distractionGameCalls > 400){distractionSound.onended(distractionAnswers())}
}

function hexagons(centreWidth, centreHeight) {
  push();
  translate(centreWidth, centreHeight);
  scale(0.5);
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
    push();
    noStroke();
    fill(distractionButtons[1].colour);
    rect(distractionButtons[1].x, distractionButtons[1].y, distractionButtons[1].w, distractionButtons[1].h, corners[1], corners[2], corners[1], corners[0]);
    fill(distractionButtons[1].text);
    textSize(20);
    text("Pardon?", distractionButtons[1].x  + distractionButtons[1].w/2, distractionButtons[1].y + distractionButtons[1].h / 2);
    fill(distractionButtons[2].colour);
    rect(distractionButtons[2].x, distractionButtons[2].y, distractionButtons[2].w, distractionButtons[2].h, corners[1], corners[2], corners[1], corners[0]);
    fill(distractionButtons[2].text);
    noStroke();
    text("You can't just “Get it”, I’ve always had it…", distractionButtons[2].x + distractionButtons[3].w*0.15, distractionButtons[2].y + distractionButtons[2].h*0.125, distractionButtons[2].w*0.75, distractionButtons[2].h*0.75);
    fill(distractionButtons[3].colour);
    rect(distractionButtons[3].x, distractionButtons[3].y, distractionButtons[3].w, distractionButtons[3].h, corners[1], corners[2], corners[1], corners[0]);
    fill(distractionButtons[3].text);
    noStroke();
    text("I’m off, enjoy your coffee", distractionButtons[3].x + distractionButtons[3].w*0.15, distractionButtons[3].y + distractionButtons[3].h*0.25, distractionButtons[3].w*0.75, distractionButtons[3].h*0.5);
    pop();    
}

function setDistractionButtons(){
    distractionButtons = [
        {x: wWidth*0.5, y: wHeight*0.75, w: wWidth*0.25, h: wHeight*0.125, colour: colour[6], stroke: colour[1], text: colour[3]}, 
        {x: wWidth*0.2 - wWidth*0.25/2, y: wHeight*0.5, w: wWidth*0.25, h: wHeight*0.125, colour: colour[6], stroke: colour[1], text: colour[3]}, 
        {x: wWidth*0.5 - wWidth*0.25/2, y: wHeight*0.5, w: wWidth*0.25, h: wHeight*0.125, colour: colour[6], stroke: colour[1], text: colour[3]},
        {x: wWidth*0.8 - wWidth*0.25/2, y: wHeight*0.5, w: wWidth*0.25, h: wHeight*0.125, colour: colour[6], stroke: colour[1], text: colour[3]}]

}

function distractionMouseOver() {
  //If the mouse is over the button, change its colour.
  var a = mouseX > distractionButtons[0].x - distractionButtons[0].w/2 && mouseX < distractionButtons[0].x - distractionButtons[0].w/2 + distractionButtons[0].w;
  var b = mouseY > distractionButtons[0].y && mouseY < distractionButtons[0].y + distractionButtons[0].h;
  if(a && b && (!distractionGameBooleans.title || distractionGameBooleans.endTitle)){
    distractionButtons[0].colour = colour[3];
    distractionButtons[0].stroke = colour[0];
    distractionButtons[0].text = colour[1];
    distractionGameBooleans.mouseOver1 = true;
  } else { distractionGameBooleans.mouseOver1 = false; }

  var c = mouseX > distractionButtons[1].x&& mouseX < distractionButtons[1].x + distractionButtons[1].w;
  var d = mouseY > distractionButtons[1].y && mouseY < distractionButtons[1].y + distractionButtons[1].h;
  if(c && d && distractionGameBooleans.title){
    distractionButtons[1].colour = colour[3];
    distractionButtons[1].stroke = colour[0];
    distractionButtons[1].text = colour[1];
    distractionGameBooleans.mouseOver2 = true;
  } else { distractionGameBooleans.mouseOver2 = false; }

  var e = mouseX > distractionButtons[2].x&& mouseX < distractionButtons[2].x + distractionButtons[2].w;
  var f = mouseY > distractionButtons[2].y && mouseY < distractionButtons[2].y + distractionButtons[2].h;
  if(e && f && distractionGameBooleans.title){
    distractionButtons[2].colour = colour[3];
    distractionButtons[2].stroke = colour[0];
    distractionButtons[2].text = colour[1];
    distractionGameBooleans.mouseOver3 = true;
  } else { distractionGameBooleans.mouseOver3 = false; }

  var g = mouseX > distractionButtons[3].x&& mouseX < distractionButtons[3].x + distractionButtons[3].w;
  var h = mouseY > distractionButtons[3].y && mouseY < distractionButtons[3].y + distractionButtons[3].h;
  if(g && h && distractionGameBooleans.title){
    distractionButtons[3].colour = colour[3];
    distractionButtons[3].stroke = colour[0];
    distractionButtons[3].text = colour[1];
    distractionGameBooleans.mouseOver4 = true;
  } else { distractionGameBooleans.mouseOver4 = false; }
}

function distractionGameEndTitle() {
    noStroke();
    fill(colour[6]);
    rect(titleCards.x, titleCards.y, titleCards.w, titleCards.h, corners[1])
    fill(distractionButtons[0].colour);
    rect(distractionButtons[0].x - distractionButtons[0].w/2, distractionButtons[0].y, distractionButtons[0].w, distractionButtons[0].h, corners[2]);
    fill(distractionButtons[1].text);
    text("Feeling confused?", wWidth*0.5, wHeight*0.25);
    text("Some people with dyslexia experience sensory overload and distraction in every day settings. This game, Distraction was a representation of those feelings.",  titleCards.x - corners[0]/2, titleCards.y + titleCards.h*0.2, titleCards.w  - titleCards.w*0.125, titleCards.h);
    rectMode(CORNER);
    fill(distractionButtons[0].text);
    text("Next Game", distractionButtons[0].x, distractionButtons[0].y + distractionButtons[0].h/2);
}

//-------------------------------------Disctraction Game Functions I didnt write-------------------------------------\\

let h = Math.sqrt(3) / 2 * 100;
let shapes;
let hex;

function colorFromPalette(n) {
  const palette = ['#E8959E', '#9A4C95', '#0A2239', '#222152', '#2371F7'];
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
//-----------------------------------------------------Border---------------------------------------------------------\\
var LoremIpsum = 'Lorem vero eos et accus a mus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';
var LoremIpsumSet = 'Lorem vero eos et accus a mus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';
var lawyer = {size: 100, colour: colour[1], textColour: colour[3]}
var grow = {size: 200, colour: colour[2], textColour: colour[0]}
var right = {size: 200, colour: colour[3], textColour: colour[0]}
var bottom = {size: 250, colour: colour[2], textColour: colour[4]}
var letter = {size: 250, colour: colour[7], textColour: colour[2]}


function border() {
    if (frameCount % 6 == 0) {
        LoremIpsum = LoremIpsumSet
    }
    if (frameCount % 2 == 0) {
        LoremIpsum = scramble(LoremIpsum);
    }


    //middle bottom square
    push();
    translate(windowWidth / 2, windowHeight);
    rotate(QUARTER_PI);
    borderSquare(lawyer);
    pop();
    //corner right square
    push();
    translate(windowWidth, windowHeight);
    rotate(PI / 3.0);
    borderSquare(grow);
    pop();
    //middle left bottom
    push();
    translate(-20, windowHeight / 2);
    rotate(PI / 1.34);
    borderSquare(right);
    pop();
    //corner left bottom
    push();
    translate(-20, windowHeight);
    rotate(PI / 1.7);
    borderSquare(bottom);
    pop();
    //right bottom almost quarter
    push();
    translate(windowWidth * 0.75, windowHeight + 80);
    rotate(PI / 5);
    borderSquare(bottom);
    pop();
    //left three quarter down
    push();
    translate(-20, windowHeight * 0.75);
    rotate(PI / 1.2);
    borderSquare(lawyer);
    pop();
    //top 1/3 left
    push();
    translate(windowWidth * 0.3, -80);
    rotate(PI / 0.7);
    borderSquare(right);
    pop();
    //top middle
    push();
    translate(windowWidth * 0.5, -100);
    rotate(PI / 0.8);
    borderSquare(bottom);
    pop();
    //top middle
    push();
    translate(windowWidth * 0.8, -80);
    rotate(PI / 0.3);
    borderSquare(letter);
    pop();
    //top middle
    push();
    translate(windowWidth, 0);
    rotate(PI / 0.65);
    borderSquare(grow);
    pop();
    //right bottom almost quarter
    push();
    translate(windowWidth * 0.25, windowHeight + 80);
    rotate(PI / 3.0);
    borderSquare(letter);
    pop();
}

function borderSquare(shape) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(shape.colour);
    rect(0, 0, shape.size, shape.size);
    fill(shape.textColour);
    textAlign(LEFT);
    textSize(10);
    text(LoremIpsum, 0, 0, shape.size, shape.size);
    pop();
}

function scramble(words) {

    var seperated = words.split(' ');
    var newString = [];
    for (word of seperated) {
        var randomLetter = [];
        for (i = 0; i < word.length; i++) {
            randomLetter.push(i)
        }
        if (word.length > 3 && word.length <= 5) {
            var chr = word[2];
            word = word.replace(chr, word[random(randomLetter)]);
            newString.push(word);
        } else if (word.length > 5) {
            chr = word[2];
            word = word.replace(chr, word[random(randomLetter)]);
            chr = word[5];

            word = word.replace(chr, word[random(randomLetter)]);
            newString.push(word);
        } else {
            newString.push(word);
        }
    }
    temp = newString.toString(' ');
    var result = temp.replace(/,/g, ' ');
    return result;
}
//-------------------------------------MiniGame 3 Spelling Game-------------------------------------\\
var questionsMinigame3 = ["It's not ________ correct", "____ you be able to ____ this", "Does this ___ make it easier", "Why can't you _____ this?"];
var answersMinigame3 = [["Necesarily", "Nessicarily"], ["Wuld/read", "Would/reed"], ["Fant", "Coler"], ["Lane", "Lern"]];
var buttonPlacement;
var currentQText = [questionsMinigame3[0], answersMinigame3[0]];
var spellingGameBooleans = {mouseOver1: false, mouseOver2: false, mouseOver3: false, started: false, question1: 0, question2: 0, question3: 0, question4: 0, endTitle: 0};
var endTitleTextMinigame3 = [];
var spellingGameCalls = 0;
var spellingColours = ['#FFFFFF', '#E4EEFB', '#FAE0D4', '#FAF5D7', '#DEF7DF'];
var swapColours = [spellingColours[0], spellingColours[1]];

function spellingGame() {
        
    setButtons();
    mouseIsOverButtons();
    
    if(!spellingGameBooleans.started){
        spellingGameTitle();
    }
    if( spellingGameBooleans.started && spellingGameBooleans.endTitle == 0){
        spellingGameAfterTitle();
    }
     if(spellingGameBooleans.endTitle > 0){
        spellingGameEndTitle();
    }
    
    
    
}

function spellingGameAfterTitle() {
    spellingButtons();
    spellingGameText();   
}

function spellingGameTitle() {
    push();
    noStroke();
    fill(colour[0]);
    rect(titleCards.x, titleCards.y, titleCards.w, titleCards.h, corners[1])
    fill(buttonPlacement[3].text);
    text("Spelling Game", wWidth*0.5, wHeight*0.25);
    text("This is a multiple choice spelling test, for each question select the correct answer.", titleCards.x, wHeight*0.4, titleCards.w - corners[2], titleCards.h);
    fill(buttonPlacement[4].colour);
    rect(buttonPlacement[4].x - buttonPlacement[4].w/2, buttonPlacement[4].y, buttonPlacement[4].w, buttonPlacement[4].h, corners[2]);
    fill(buttonPlacement[4].text);
    text("Start", buttonPlacement[4].x, buttonPlacement[4].y + buttonPlacement[4].h/2);
    pop()
}

function setButtons(){
    buttonPlacement = [
        {x: wWidth*0.25, y: wHeight*0.125, w: wWidth*0.5, h: wHeight*0.25, colour: swapColours[1], stroke: colour[1], text: colour[8]}, 
        {x: wWidth*0.125, y: wHeight*0.5, w: wWidth*0.333, h: wHeight*0.125, colour: swapColours[0], stroke: colour[1], text: swapColours[1]}, 
        {x: wWidth*0.52, y: wHeight*0.5, w: wWidth*0.333, h: wHeight*0.125, colour: swapColours[0], stroke: colour[1], text: swapColours[1]},
        {x: 10, y: 10, w: 10, h: 10, colour: colour[2], stroke: colour[1], text: colour[8]},
        {x: wWidth*0.5, y: wHeight*0.75, w: wWidth*0.25, h: wHeight*0.125, colour: colour[0], stroke: colour[1], text: colour[7]}]
}

function mouseIsOverButtons() {
    //If the mouse is over the button, change its colour.
    var a = mouseX > buttonPlacement[1].x && mouseX < buttonPlacement[1].x + buttonPlacement[1].w;
    var b = mouseY > buttonPlacement[1].y && mouseY < buttonPlacement[1].y + buttonPlacement[1].h;
    if (a && b) {
        buttonPlacement[1].colour = swapColours[1];
        buttonPlacement[1].text = swapColours[0];
        spellingGameBooleans.mouseOver1 = true;
    } else {
        spellingGameBooleans.mouseOver1 = false;
    }
    var c = mouseX > buttonPlacement[2].x && mouseX < buttonPlacement[2].x + buttonPlacement[2].w;
    var d = mouseY > buttonPlacement[2].y && mouseY < buttonPlacement[2].y + buttonPlacement[2].h;
    if (c && d) {
        buttonPlacement[2].colour = swapColours[1];
        buttonPlacement[2].text = swapColours[0];
        spellingGameBooleans.mouseOver2 = true;
    } else {
        spellingGameBooleans.mouseOver2 = false;
    }

    var e = mouseX > buttonPlacement[4].x - buttonPlacement[4].w / 2 && mouseX < buttonPlacement[4].x - buttonPlacement[4].w / 2 + buttonPlacement[4].w;
    var f = mouseY > buttonPlacement[4].y && mouseY < buttonPlacement[4].y + buttonPlacement[4].h;
    if (e && f && (!spellingGameBooleans.started || spellingGameBooleans.endTitle)) {
        buttonPlacement[4].colour = colour[8];
        buttonPlacement[4].text = colour[1];
        spellingGameBooleans.mouseOver3 = true;
    } else {
        spellingGameBooleans.mouseOver3 = false;
    }
}

function spellingButtons() {
    push();
    noStroke();
    // draw the text boxes, and set their fill colour to the one specified in the array 
    //Question Text Box
    fill(buttonPlacement[0].colour);
    rect(buttonPlacement[0].x, buttonPlacement[0].y, buttonPlacement[0].w, buttonPlacement[0].h, corners[2]);
    //Left Text Box
    fill(buttonPlacement[1].colour);
    rect(buttonPlacement[1].x, buttonPlacement[1].y, buttonPlacement[1].w, buttonPlacement[1].h, corners[1], corners[2], corners[1], corners[0]);
    //Right Text Box
    fill(buttonPlacement[2].colour);
    rect(buttonPlacement[2].x, buttonPlacement[2].y, buttonPlacement[2].w, buttonPlacement[2].h, corners[1], corners[2], corners[1], corners[0]);
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
        swapColours[1] = spellingColours[2];
        return;
    }

    if(spellingGameBooleans.question2 != 0 && spellingGameBooleans.question3 == 0){
        currentQText = [questionsMinigame3[2], answersMinigame3[2]];
        swapColours[1] = spellingColours[3];
        return;
    }

    if(spellingGameBooleans.question3 != 0 && spellingGameBooleans.question4 == 0){
        currentQText = [questionsMinigame3[3], answersMinigame3[3]];
        swapColours[1] = spellingColours[4];
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
    fill(colour[0]);
    rect(titleCards.x, titleCards.y, titleCards.w, titleCards.h, corners[1])
    fill(buttonPlacement[3].text);
    noStroke();
    text("How is your Spelling?", wWidth/2, wHeight * 0.25);
    text("These are your selected answers, how did you do? Did you find it difficult to get them right?", titleCards.x, titleCards.y + titleCards.h*0.2, titleCards.w - titleCards.w*0.125, titleCards.h);;
    text(endTitleTextMinigame3[0], wWidth/2, wHeight/2 - 20);
    text(endTitleTextMinigame3[1], wWidth/2, wHeight/2 + 10);
    text(endTitleTextMinigame3[2], wWidth/2, wHeight/2 + 40);
    text(endTitleTextMinigame3[3], wWidth/2, wHeight/2 + 70);
    fill(buttonPlacement[4].colour);
    rect(buttonPlacement[4].x - buttonPlacement[4].w/2, buttonPlacement[4].y, buttonPlacement[4].w, buttonPlacement[4].h, corners[2]);
    fill(buttonPlacement[4].text);
    text("Next Game", buttonPlacement[4].x, buttonPlacement[4].y + buttonPlacement[4].h/2);
}