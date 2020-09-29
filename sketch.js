var colours = ["#0A58F5", "#1577E8", "#EB0071", "#F70C63"];

var testColours = ["#05A8AA", "#B8D5B8", "#D7B49E", "#DC602E", "#BC412B", "#2F0A28", "#2E4057"]

var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur"

var miniGames = [1, 2, 3, 4, 5, 6];
var levelArray = [];



function setup() { // This function is called once at the beginning and never again. 
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 200);
  frameRate(20);
  textSize(30)
  textAlign(CENTER);
  setGameLevels();

}

function draw() { // This function is called and loops every frame

  playLevels();
  

}

function playLevels() {

  if(frameCount < 200) {
    titleScreen();
  }

  if(frameCount > 200 && levelArray[0].played == false){
    levelArray[0].getMiniGame();
  }

  if(levelArray[0].played == true && levelArray[1].played == false){
    levelArray[1].getMiniGame();
  }

  if(levelArray[1].played = true && levelArray[2] == false){
    levelArray[2].getMiniGame();
  }
}

function setGameLevels() {
  // This function takes the array created in the chooseGameLevel function, 
  //and creates an object that can
  // be used to play and record the right levels. 
  gameLevel = chooseMiniGames();

  levelArray = [{
    miniGame: gameLevel[0],
    played: false,
    outcome: 0
  }, {
    miniGame: gameLevel[1],
    played: false,
    outcome: 0
  }, {
    miniGame: gameLevel[2],
    played: false,
    outcome: 0
  }
  ]
  setMinigamefunctions()

  //print(LevelArray)
}

function setMinigamefunctions(){
  //Uses a bunch of boolean statements to add a method function to the level array. 
  //This means when you call levelArray[i].getMiniGame() it should call the correct minigame.


  //If any of the minigames should be the first, create a 
  //function which calls the miniGame1() below.  
  if(levelArray.length == 3){
    if (levelArray[0].miniGame == 1){
      levelArray[0].getMiniGame = function getMiniGame(){
        miniGame1()
      }
    } else if (levelArray[1].miniGame == 1){
      levelArray[1].getMiniGame = function getMiniGame(){
        miniGame1()
      }
    } else if (levelArray[2].miniGame == 1){
      levelArray[2].getMiniGame = function getMiniGame(){
        miniGame1()
      }
    }
  }

  //Set minigame2
  if(levelArray.length == 3){
    if (levelArray[0].miniGame == 2){
      levelArray[0].getMiniGame = function getMiniGame(){
        miniGame2()
      }
    } else if (levelArray[1].miniGame == 2){
      levelArray[1].getMiniGame = function getMiniGame(){
        miniGame2()
      }
    } else if (levelArray[2].miniGame == 2){
      levelArray[2].getMiniGame = function getMiniGame(){
        miniGame2()
      }
    }
  }

  //Set minigame3
  if(levelArray.length == 3){
    if (levelArray[0].miniGame == 3){
      levelArray[0].getMiniGame = function getMiniGame(){
        miniGame3()
      }
    } else if (levelArray[1].miniGame == 3){
      levelArray[1].getMiniGame = function getMiniGame(){
        miniGame3()
      }
    } else if (levelArray[2].miniGame == 3){
      levelArray[2].getMiniGame = function getMiniGame(){
        miniGame3()
      }
    }
  }

  //Set minigame4
  if(levelArray.length == 3){
    if (levelArray[0].miniGame == 4){
      levelArray[0].getMiniGame = function getMiniGame(){
        miniGame4()
      }
    } else if (levelArray[1].miniGame == 4){
      levelArray[1].getMiniGame = function getMiniGame(){
        miniGame4()
      }
    } else if (levelArray[2].miniGame == 4){
      levelArray[2].getMiniGame = function getMiniGame(){
        miniGame4()
      }
    }
  }

  //Set minigame5
  if(levelArray.length == 3){
    if (levelArray[0].miniGame == 5){
      levelArray[0].getMiniGame = function getMiniGame(){
        miniGame5()
      }
    } else if (levelArray[1].miniGame == 5){
      levelArray[1].getMiniGame = function getMiniGame(){
        miniGame1()
      }
    } else if (levelArray[2].miniGame == 1){
      levelArray[2].getMiniGame = function getMiniGame(){
        miniGame5()
      }
    }
  }

  //Set minigame6
  if(levelArray.length == 3){
    if (levelArray[0].miniGame == 6){
      levelArray[0].getMiniGame = function getMiniGame(){
        miniGame6()
      }
    } else if (levelArray[1].miniGame == 6){
      levelArray[1].getMiniGame = function getMiniGame(){
        miniGame6()
      }
    } else if (levelArray[2].miniGame == 6){
      levelArray[2].getMiniGame = function getMiniGame(){
        miniGame6()
      }
    }
  }

  

}

function chooseMiniGames() {
  // This function shuffles the level array and chooses the first three of the shuffled array. 
  // It then returns this new array so it can be used to set the levels when someone plays the game.

  shuffledMiniGames = shuffle(miniGames);

  currentMiniGames = shuffledMiniGames.slice(0, 3)// To change how many levels are played, add 1 to the last number in the bracket

  print(currentMiniGames); //This will show in the console which 3 miniGames were chosen.
  return (currentMiniGames);
}

//____________________________________________________________________________________________
// Below this line are functions that contain the different Minigame function calls 

function titleScreen() {
  background(testColours[0]);
  text("Sorry, I can't read that", windowWidth/2, windowHeight/2);



}

function miniGame1() {
  background(testColours[1]);
  text("MiniGame 1", windowWidth/2, windowHeight/2);

}

function miniGame2() {
  background(testColours[2]);
  text("MiniGame 2", windowWidth/2, windowHeight/2);

}

function miniGame3() {
  background(testColours[3]);
  text("MiniGame 3", windowWidth/2, windowHeight/2);

}

function miniGame4() {
  background(testColours[4]);
  text("MiniGame 4", windowWidth/2, windowHeight/2);

}

function miniGame5() {
  background(testColours[5]);
  text("MiniGame 5", windowWidth/2, windowHeight/2);

}

function miniGame6() {
  background(testColours[6]);
  text("MiniGame 6", windowWidth/2, windowHeight/2);

}

function typeFont() {
  fill("#0A58F5")
  rect(0, 200, 400, 100);

  fill("#1577E8")
  text("Neseccary Necessary", 100, 250);

  fill("#EB0071")
  rect(400, 200, 400, 100);

  fill("#F70CF0")
  text("World Would", 420, 250);


}

function loremIpsum() {

  fill(random(0, 255), random(0, 250), random(0, 255));

  rect(0, 0, 800, 400);

  fill(255);

  text(LoremIpsum, 0, 0, 800, 400)

}
//____________________________________________________________________________________________
//Test Functions that are only for testing; wont be used in the final game 


function mouseClicked() {

  var a = mouseX > windowWidth/2 - 200 && mouseX < windowWidth/2 + 200;
  var b =  mouseY > windowHeight/2 - 75 && mouseY < windowHeight/2 +75;

  if(frameCount > 200 && a && b && levelArray[0].played == false ){
    levelArray[0].played = true; 
  }

  if(a && b && levelArray[0].played == true && levelArray[1].played == false ){
    levelArray[1].played = true;
  }

  if(a && b && levelArray[1].played == true && levelArray[2].played == false ){
    levelArray[2].played =true;
  }

}

//____________________________________________________________________________________________
// Below this line are functions that I have not written myself, but am using in this program. 



//The Below function was written by Mike Bostock, and shuffles an array. It is the second block of code in this website:
//https://bost.ocks.org/mike/shuffle/ 
function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}