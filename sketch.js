var colours = ["#0A58F5", "#1577E8", "#EB0071", "#F70C63"];

var testColours = ["#05A8AA", "#B8D5B8", "#D7B49E", "#DC602E", "#BC412B", "#2F0A28", "#2E4057"]

var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur"
var titleScreenCount = 50;
var miniGames = [1, 2, 3, 4, 5, 6];
var levelArray = [];
var distractionSound
let wWidth;
let wHeight;

function preload() {
  distractionSound = loadSound('assets/FinsihedSoundForQuestion.mp3');
  euphemiaUCAS = loadFont('assets/Euphemia UCAS_Regular_2.6.6.ttf');
}

function setup() { // This function is called once at the beginning and never again. 
  textFont(euphemiaUCAS)
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 200);
  frameRate(20);
  textSize(30)
  textAlign(CENTER);
  setGameLevels();

  wWidth = windowWidth;
  wHeight = windowHeight;
  corners = [wHeight*0.005, wHeight*0.02, wHeight*0.04];
  hexagonSetup();

}

function draw() { // This function is called and loops every frame

  playLevels();
  wWidth = windowWidth;
  wHeight = windowHeight;
  

}

function playLevels() { 
  //This function uses the booleans in the functions below to determine which level to play. 

  if(frameCount < titleScreenCount) {
    titleScreen();
  }

  if(frameCount > titleScreenCount && levelArray[0].played == false){
    levelArray[0].getMiniGame();
  }

  if(levelArray[1].played == false && levelArray[0].played == true ){
    levelArray[1].getMiniGame();
  }

  if(levelArray[1].played == true ){
    levelArray[2].getMiniGame();
  }

  if(levelArray[0].played && levelArray[1].played && levelArray[2].played){
    endScreen();
  }
}

function setGameLevels() {///In here first and second minigame are set to 3 and 4, remove this after testing
  // This function takes the array created in the chooseGameLevel function, 
  //and creates an object that can
  // be used to play and record the right levels. 
  gameLevel = chooseMiniGames();

  //remove two lines below after testing, this ensures the first two games are 3 and 4. 
  gameLevel[0] = 4;
  gameLevel[1] = 3;
  gameLevel[2] = 1;

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
        miniGame5()
      }
    } else if (levelArray[2].miniGame == 5){
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
// ___________________________________________________________________________________________
// This is the mouseClicked function, anything that needs to happen on a mouseClick should go in this function

function mouseClicked() {
  print("clicked", mouseX, mouseY)
  var clicked = false;
  // Please keep this function as tidy as possible and follow 
  //the formatting, as this function is likely to get very long. 
  // __________MiniGame 1_________\\

  if(comprehensionGameBooleans.mouseOver1 && comprehensionGameBooleans.title && comprehensionGameBooleans.playing){
    comprehensionGameBooleans.title = false;
    window.open("comprehension.html");//Opens the html game in a different window
    return;
  } else if (comprehensionGameBooleans.mouseOver1 && !comprehensionGameBooleans.title && comprehensionGameBooleans.playing){
    if(levelArray[0].miniGame == 1 && !comprehensionGameBooleans.title){
      levelArray[0].played = true;
      comprehensionGameBooleans.playing = false;
      return;
    } else if(levelArray[1].miniGame == 1 && !comprehensionGameBooleans.title){
      levelArray[1].played = true;
      comprehensionGameBooleans.playing = false;
      return;
    } else if(levelArray[2].miniGame == 1 && !comprehensionGameBooleans.title){
      levelArray[2].played = true;
      comprehensionGameBooleans.playing = false;
      return;
    }
    
  }

  //__________MiniGame 2__________\\

  //__________MiniGame 3__________\\

  if(spellingGameBooleans.mouseOver1 && spellingGameBooleans.question1 == 0){
    spellingGameBooleans.question1 = 1;
    return;
  } else if(spellingGameBooleans.mouseOver2  && spellingGameBooleans.question1 == 0){
    spellingGameBooleans.question1 = 2;
    return;
  }

  if(spellingGameBooleans.mouseOver1 && spellingGameBooleans.question1 != 0 && spellingGameBooleans.question2 == 0){
    spellingGameBooleans.question2 = 1;
    return;
  } else if(spellingGameBooleans.mouseOver2 && spellingGameBooleans.question1 != 0 && spellingGameBooleans.question2 == 0){
    spellingGameBooleans.question2 = 2;
    return;
  }

  if(spellingGameBooleans.mouseOver1 && spellingGameBooleans.question2 != 0 && spellingGameBooleans.question3 == 0){
    spellingGameBooleans.question3 = 1;
    return;
  } else if(spellingGameBooleans.mouseOver2 && spellingGameBooleans.question2 != 0 && spellingGameBooleans.question3 == 0){
    spellingGameBooleans.question3 = 2;
    return;
  }

  if(spellingGameBooleans.mouseOver1 && spellingGameBooleans.question3 != 0 && spellingGameBooleans.question4 == 0){
    spellingGameBooleans.question4 = 1;
    spellingGameBooleans.endTitle = 1; 
    return;
  } else if(spellingGameBooleans.mouseOver2 && spellingGameBooleans.question3 != 0 && spellingGameBooleans.question4 == 0){
    spellingGameBooleans.question4 = 2;
    spellingGameBooleans.endTitle = 1;
    return;
  }

  if(spellingGameBooleans.mouseOver3 && !spellingGameBooleans.started){
    spellingGameBooleans.started = true;
    return;
  } else if (spellingGameBooleans.mouseOver3 && spellingGameBooleans.started && spellingGameBooleans.endTitle > 0 ){
    if(levelArray[0].miniGame == 3 && !levelArray[0].played){
      levelArray[0].played = true;
      return;
    } else if(levelArray[1].miniGame == 3 && !levelArray[1].played){
      levelArray[1].played = true;
      return;
    } else if(levelArray[2].miniGame == 3 && !levelArray[2].played){
      levelArray[2].played = true;
      return;
    }
    
  }

  //__________MiniGame 4__________\\

  
  if(distractionGameBooleans.mouseOver2 && distractionGameBooleans.title){
    distractionGameBooleans.question1 = true;
    distractionGameBooleans.endTitle = true;
  }

  if(distractionGameBooleans.mouseOver3 && distractionGameBooleans.title){
    distractionGameBooleans.question2 = true;
    distractionGameBooleans.endTitle = true;
  }

  if(distractionGameBooleans.mouseOver4 && distractionGameBooleans.title){
    distractionGameBooleans.question3 = true;
    distractionGameBooleans.endTitle = true;
  }

  if(distractionGameBooleans.mouseOver1 && !distractionGameBooleans.title){
    distractionGameBooleans.title = true;
    return;
  } else if (distractionGameBooleans.mouseOver1 && distractionGameBooleans.title && distractionGameBooleans.endTitle ){
    if(levelArray[0].miniGame == 4 && !levelArray[0].played){
      levelArray[0].played = true;
      return;
    } else if(levelArray[1].miniGame == 4 && !levelArray[1].played){
      levelArray[1].played = true;
      return;
    } else if(levelArray[2].miniGame == 4 && !levelArray[2].played){
      levelArray[2].played = true;
      return;
    }
    
  }



  //__________MiniGame 5__________\\

  //__________MiniGame 6__________\\

  //__________Testing__________\\

  var a = mouseX < windowWidth/2;
  var b =  mouseX > windowWidth/2;

  if(frameCount > titleScreenCount && a && levelArray[0].played == false && levelArray[0].minigame != 3 && levelArray[0].miniGame != 4 && levelArray[0].miniGame != 1){
    levelArray[0].played = true; 
  }

  if( b && levelArray[0].played === true && levelArray[1].played === false && levelArray[1].miniGame != 3 && levelArray[1].miniGame != 4 && levelArray[1].miniGame != 1){
    levelArray[1].played = true;
  }

  if(a && levelArray[1].played == true && levelArray[2].played == false && levelArray[2].miniGame != 3 && levelArray[2].miniGame != 4 && levelArray[2].miniGame != 1){
    levelArray[2].played = true;
  }
  

}

//____________________________________________________________________________________________
// Below this line are functions that contain the different Minigame function calls 

function titleScreen() {
  background(testColours[0]);
  text("Sorry, I can't read that", windowWidth/2, windowHeight/2);



}
// The functions below contain all of the minigame screens, I will connect these to our individual 
// files for whoever is coding each minigame so that this file doesnt become cluttered. 
function miniGame1() {
  background(testColours[1]);
  comprehensionGame();

}

function miniGame2() {
  background(testColours[2]);
  text("MiniGame 2", windowWidth/2, windowHeight/2);

}

function miniGame3() {
  background(testColours[3]);
  spellingGame();

}

function miniGame4() {
  background(testColours[4]);
  distractionGame()

}

function miniGame5() {
  background(testColours[5]);
  text("MiniGame 5", windowWidth/2, windowHeight/2);

}

function miniGame6() {
  background(testColours[6]);
  text("MiniGame 6", windowWidth/2, windowHeight/2);

}

function endScreen() {
  background(0);
  text("Thanks for playing", wWidth/2, wHeight/2);

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