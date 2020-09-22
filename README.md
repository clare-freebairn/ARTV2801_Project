# ARTV2801_Project

Hey Jordan and Sasha,








++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
How to "save" (commit and push) in VSCode/Git

I always forget how to do this, so in the case that you might like to write something in here, or some code and save it to the git repository, here are some steps of how to do so:

n.b. This is steps using the terminal, there are other ways to do it that I can write out if you like, I just find this the easiest way.

    1. When you want to save, open a Terminal. You can do this by selecting the terminal drop down in the tool bar above, and then selecting New Terminal (or you can use the shortcut control+shift+'). 

This will bring up a new Terminal tab at the bottom of your screen. It will have a string of words/numbers and a place for you to type. The words and numbers are the file path for your folder :) mine looks like this:

clare@clare-desktop:~/Documents/UNI/ARTV2801/ARTV2801_Projects$ []

The little box at the end is where you type your commands. This tells the computer to do the things for you.

    2. Before we commit or push, we have to save locally in the computer, and tell the computer that we've done so. So in your file, make a save (either through clicking File in the toolbar and selecting save, or using the shortcut control+s).

    After you've saved, click in the little box at the end of the file path in the terminal and type:

    git add . 

This tells the computer to look for any changes or saves made to add to the git repository.

    3. To commit, type in the Terminal: 
    
    git commit -m "Write your message of what youre saving here"

    After this press enter, and watch as the computer writes a bunch of stuff. If it throws an error, copy paste it and send it to me :P and we can figure it out.

Doing this creates what I think of as a "mini save". It won't upload it to the internet, but it will create a staged save. Kind of like saving before a big boss in a video game, in case you make a mistake and need somewhere to come back to. 

You can make multiple of these little saves before uploading or "pushing", this works well if you have no/shoddy internet.

     4. After you've committed a bunch, or want to upload to the online git repository, bring up a terminal again, or use the one thats already there if you still have it, and type:

     git push

     Then press enter, it might then ask you for a username and password for your git account (it won't show the password when you type unfortunately, so make it something easy and quick)

     It will then write a bunch of stuff again, and tell you when its pushed successfully. 

This uploads your work to the shared repository, which we can then update and share with each other. 

    5. This is for pulling and is blank until Clare learns how to pull :P 

