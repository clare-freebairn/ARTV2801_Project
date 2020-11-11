var p;
var h1;
var radio;

let button;

let lines;

var final = ["Incorrect", "Correct", "Incorrect, What is wrong with you?", "You're almost there!", "It's because you keep talking with you friends", "It's hard for special kids like you", "Stop being lazy", "Try again with a different font", "Maybe you need glasses...?", "Please try to focus!"]


//function preload() {
//  lines = loadStrings("story.txt");

// }

function setup() {
  
 noCanvas ();
 // createCanvas(windowWidth, windowHeight - 30);

  let h1 = createElement('h1', 'Reading And Comprehension');
  h1.position(0,0);
  
  
  //text(lines, 10, 0, windowHeight);

  question1 = createElement('h2', 'How old was the student?');
  radioQ1 = createRadio();
  radioQ1.option('A', 12);
  radioQ1.option('B', 14);
  radioQ1.option('C', 15);
  radioQ1.option('D', 16);
  radioQ1.style('width', '200px');
  textAlign(CENTER);



  question2 = createElement('h3', 'What kind of shoes did the teacher wear?');
  radioQ2 = createRadio();
  radioQ2.option('A', "'Mary-Jane' pumps");
  radioQ2.option('B', "Cone heeled shoes");
  radioQ2.option('C', "Kitten heeled shoes");
  radioQ2.option('D', "Sling back shoes");
  radioQ2.style('width', 400);
  textAlign(CENTER);


  question3 = createElement('h3', 'How did the writer feel at the end?');
  radioQ3 = createRadio();
  radioQ3.option('A', "Happy");
  radioQ3.option('B', "Disappointed");
  radioQ3.option('C', "Apathetic");
  radioQ3.option('D', "Angry");
  radioQ3.style('width', 400);
  textAlign(CENTER);


  question4 = createElement('h3', 'Do you think the teacher was trying their best?');
  radioQ3 = createRadio();
  radioQ3.option('A', "Yes");
  radioQ3.option('B', "Yes, the writer should be more understanding.");
  radioQ3.option('C', "No");
  radioQ3.option('D', "No, the teacher need to do better.");
  radioQ3.style('width', 400);
  textAlign(CENTER);


  button = createButton("Submit");
  button.mouseClicked(
    function() {
      alert(random(final));
    }
  );

}


function draw() {


}



// original: http://geon.github.io/programming/2016/03/03/dsxyliea

"use strict";

$(function() {
  var getTextNodesIn = function(el) {
    return $(el).find(":not(iframe)").addBack().contents().filter(function() {
      return this.nodeType == 3;
    });
  };

  // var textNodes = getTextNodesIn($("p, h1, h2, h3"));
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