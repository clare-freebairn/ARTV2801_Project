# ARTV2801_Project

Hey Jordan and Sasha,

This is the repository for the code we're going to use in our project. I completely understand that coding isnt a very dyslexia friendly thing to do, and please let me know how youre going with it and we can find ways to work with it. 

I did find a font that was developed for this purpose if you find the default fonts hard to read:
https://www.opendyslexic.org/

And there are lots of different colour themes available if that helps at all.

I have also added some instructions on how to save to github below, which unfortunately is a bit wordy. But if you just copy paste the lines with git at the beginning it should work fine. 

Cheers, Clare 

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Feel free to add any messages or links in here:

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Minigames:

1. Auditory distraction Minigame:
- audio that fades in and out, difficult to hear. Long winded, convoluted.
- Input box 

Gist:
- That it will be both distracting and confusing but also possible to answer 

Format/Structure:

- scene setting phrase "youre at a coffee shop with your friend listening to them tell a story"
- play the audio of the conversation/ repeating turn of phrase.
- screen some kind of abstract screen saver like thing.
- input box saying "What is your answer"

Objective:
 - Idea that dys is not just written words and spelling. Its also linked to attention/focus. 
 Getting caught up with certain phrases and meanings that arent direct (like sayings and metaphors) 
 -phrases repeating in your head to understand them

2. Writing with mouse game
- Use the curser to write a word on the screen.
- based on other confusing "prove youre not a robot" style text?

3. Classic Glitch Dyslexia
- read this glitchy paragraph
- answer three questions about the content. 

4. Spelling Based one
- Like the previous colour/similar word based one
- (typeFont function)

Format:
- ~ different words/spelling/colour boxes
-"Click which one is correct"
- Score through the game. at end display how theyre answers sit within the questions. eg 

Question: "It is not ________ correct"
answers: "Necesarily/ Nessicarily"
Result "It is not _Nessicarily_ correct"

Question: "____ you be able to ____ this?"
Answers: "World/read. Would/reed"
Result: "_Would_ you be able to _reed_ this?"

Question: "Does this ___ make it easier?"
Answers: "fant/ Coler/ Seize"
Result: "Does this _fant_ make it easier?"
        "Does this _coler_ make it easier?"
        "Does this _seize_ make it easier?"       

Question: "Which of these sentences makes sense?"
Answers: "get Jordan, Sasha to write some quick sentences of phrases, trying not to worry about spelling"
Result: ""

Objective:
- simulate how spelling can be difficult/ understanding which word it is
- Not meant to be a "get it right" sometimes both answers are wrong (maybe both).


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
How to "save" to GitHub (commit and push) in VSCode/Git

I always forget how to do this, so in the case that you might like to write something in here, or some code and save it to the git repository, here are some steps of how to do so:

n.b. This is steps using the terminal, there are other ways to do it that I can write out if you like, I just find this the easiest way.
                            --------*****----------
    1. When you want to save, open a Terminal. You can do this by selecting the terminal drop down in the tool bar above, and then selecting New Terminal (or you can use the shortcut control+shift+'). 

This will bring up a new Terminal tab at the bottom of your screen. It will have a string of words/numbers and a place for you to type. The words and numbers are the file path for your folder :) mine looks like this:

clare@clare-desktop:~/Documents/UNI/ARTV2801/ARTV2801_Projects$ []

The little box at the end is where you type your commands. This tells the computer to do the things for you.
                            --------*****----------
    2. Before we commit or push, we have to save locally in the computer, and tell the computer that we've done so. So in your file, make a save (either through clicking File in the toolbar and selecting save, or using the shortcut control+s).

    Also, before we push, make sure we pull (step 5) so that everything is up to date.

    After you've saved, click in the little box at the end of the file path in the terminal and type:

    git add .  

This tells the computer to look for any changes or saves made to add to the git repository.
                            --------*****----------
    3. To commit, type in the Terminal: 
    
    git commit -m "Write your message of what youre saving here"

    After this press enter, and watch as the computer writes a bunch of stuff. If it throws an error, copy paste it and send it to me :P and we can figure it out.

Doing this creates what I think of as a "mini save". It won't upload it to the internet, but it will create a staged save. Kind of like saving before a big boss in a video game, in case you make a mistake and need somewhere to come back to. 

You can make multiple of these little saves before uploading or "pushing", this works well if you have no/shoddy internet.
                            --------*****----------
     4. After you've committed a bunch, or want to upload to the online git repository, bring up a terminal again, or use the one thats already there if you still have it, and type:

     git push

     Then press enter, it might then ask you for a username and password for your git account (it won't show the password when you type unfortunately, so make it something easy and quick)

     It will then write a bunch of stuff again, and if its pushed successfully, the last few lines should look like this:

To https://github.com/clare-freebairn/ARTV2801_Project.git
5331bc1..dd77a8a  master -> master

This uploads your work to the shared repository, which we can then update and share with each other. 
                            --------*****----------
    5. When you want to pull everyone elses work down to your local computer (best to do this when you start working so everything is up to date), simply type:

    git pull

    And it should update all your files with everyone else in the groups work. Again, if this throws an error pop it in the chat and we can workshop :)


