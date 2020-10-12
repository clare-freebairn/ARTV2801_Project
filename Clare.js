var colour = [0, 50, 100, 150, 200, 250];
var questionsMinigame3 = ["It's not ________ correct", "____ you be able to ____ this", "Does this ___ make it easier", ""];
var answersMinigame3 = [["Necesarily", "Nessicarily"], ["Wuld/read", "Would/reed"], ["Fant", "Coler", "Sise"], ["", ""]];
var buttonPlacement = [
    {x: wWidth*0.333, y: wHeight*0.25, w: wWidth*0.333, h: wHeight*0.25, colour: colour[2], stroke: colour[1]}, 
    {x: wWidth*0.333, y: wHeight*0.5, w: wWidth*(1.0/6.0), h: wHeight*0.25, colour: colour[2], stroke: colour[1]}, 
    {x: wWidth*0.666, y: wHeight*0.5, w: wWidth*(1.0/6.0), h: wHeight*0.25, colour: colour[2], stroke: colour[1]}];




function spellingGame() {
    spellingButtons();

}

function spellingButtons() {
    push();
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
    console.log(mouseX, mouseY);

}

function mouseIsOverButtons() {


}
