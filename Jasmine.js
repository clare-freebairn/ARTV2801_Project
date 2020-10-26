

// Hi Jasmine, 
// Thanks for pushing your work, I copy pasted the function from your classic.js 
//file into here, and created the comprehensionGame function to integrate the game
//into the overall structure. However I'm not familiar with jQuery so I'm not really
//sure how to integrate the jQuery function into the overall game structure. 
//(feel free to delete this message after you've read it so it doesnt clutter up your file :P )

//p.s two important variables I have created are wWidth, and wHeight, 
// which are the width and height of the screen the game is being played on
//This means no matter what size screen people have, the game should fill their screen. 

var comprehensionColours = [255, 0]//I added this variable where you can store your colours, just makes them easier to use/change

//This function should contain all the function calls that your game recquires to work. 
//this is called in MiniGame 1, and that is where your game will play from. 
function comprehensionGame() {
    push();//gets rid of all my style presets (like text size. strokeweight and such) so you have a clean slate
    rectMode(CENTER); //Makes it so that the x y coords given to the rect(x, y, w, h); the centre
    fill(comprehensionColours[0]);//the fill and rect functions just recreate your canvas within the game environment
    rect(wWidth/2, wHeight/2, 300, 300); 
    
    let p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    fill(comprehensionColours[1]); //Makes the text colour black
    text(p, wWidth/2, wHeight/2, 300, 300); // Text wraps within text box
    //loadFont(times);

    pop();//Clears your presets so they dont affect the functions after.    
}

// word scramble, using  jquery to interact with html elements
$(function () {
    var getTextNodesIn = function (el) { // Look at all the page elements and returns the text nodes
        return $(el).find(":not(iframe,script)").addBack().contents().filter(function () {
            return this.nodeType == 3; // Text node types are type 3
        });
    };

    // var textNodes = getTextNodesIn($("p, h1, h2, h3","*"));
    var textNodes = getTextNodesIn($("p"));

    function isLetter(char) {
        return /^[\d]$/.test(char);
    }

    var wordsInTextNodes = [];
    for (var i = 0; i < textNodes.length; i++) {
        var node = textNodes[i];

        var words = []

        var re = /\w+/g;
        var match;
        while ((match = re.exec(node.nodeValue)) != null) {

            var word = match[0];
            var position = match.index;

            words.push({
                length: word.length,
                position: position
            });
        }

        wordsInTextNodes[i] = words;
    };

    function messUpWords() {

        for (var i = 0; i < textNodes.length; i++) {

            var node = textNodes[i];

            for (var j = 0; j < wordsInTextNodes[i].length; j++) {

                // Only change a tenth of the words each round.
                if (Math.random() > 1 / 10) {

                    continue;
                }

                var wordMeta = wordsInTextNodes[i][j];

                var word = node.nodeValue.slice(wordMeta.position, wordMeta.position + wordMeta.length);
                var before = node.nodeValue.slice(0, wordMeta.position);
                var after = node.nodeValue.slice(wordMeta.position + wordMeta.length);

                node.nodeValue = before + messUpWord(word) + after;
            };
        };
    }

    function messUpWord(word) {

        if (word.length < 3) {

            return word;
        }

        return word[0] + messUpMessyPart(word.slice(1, -1)) + word[word.length - 1];
    }

    function messUpMessyPart(messyPart) {

        if (messyPart.length < 2) {

            return messyPart;
        }

        var a, b;
        while (!(a < b)) {

            a = getRandomInt(0, messyPart.length - 1);
            b = getRandomInt(0, messyPart.length - 1);
        }

        return messyPart.slice(0, a) + messyPart[b] + messyPart.slice(a + 1, b) + messyPart[a] + messyPart.slice(b + 1);
    }

    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    setInterval(messUpWords, 50);
});