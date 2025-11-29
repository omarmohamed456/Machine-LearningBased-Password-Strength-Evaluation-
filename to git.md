--> download git

--> search for git bash

--> run



**--> to move to a dir**



cd E:/-path-



or



go to dir

right click

more options

open git bash here



**--> to create a dir**



mkdir



**--> to list all in dir**



ls



**--> to create local repo**



git init



**--> to add to the "staging area"**



git add . #to add all-



git add file.py #to add specific file-



**--> to commit the changes**



git commit -m "commit note" #shows up to everyone on GitHub so be carful and make it clear 



**--> to check if changes are made or the status**



git status



**--> to connect local repo to online repo**



git remote add origin https://github.com/omarmohamed456/Machine-LearningBased-Password-Strength-Evaluation- #origin is the name of the repo (best practice)



**--> to check if connected or url**



git remote -v



**--> to change url**



git remote set-url origin https://github.com/USERNAME/REPO.git #may be needed if you changed the online repo name on github



**--> to pull (download)**



git pull #used to update local branch with the upstream branch



git pull origin main #pull from a specific remote branch to the branch you are in remote branch here is main



also after git push -u origin main you can just use git pull NOTE can't git pull -u origin main 



**--> to change the online repo name**



using GitHub



**--> to push (push)**



git push -u origin main # -u is used to set the push from local branch to the branch specified in the command (origin main)



git push #can be used later after using -u or --set-upstream



**--> to push (upload) for new branches (doesn't exist online)**



use the same command if it doesn't exist it will create it



**--> to push and set upstream for multiple branches at once**



git push -u origin main common



**--> to create a branch**



git branch branch-name



or



git checkout -b branch-name #create a branch and moves to it immediately



**--> to move from one branch to another**



git checkout branch\_name



**--> to rename branch**



git branch -M main



**--> to list all branches**



git branch #all local branches



git branch -a #all local and online



**--> to see which branches track which remote**



git branch -vv



**--> to merge**

\#merging means to combine one branch into the other 



1. git checkout main #you have to be in the branch you want to merge into



2\. git merge branch\_name 



**--> to clone**

\#to make a copy from an online repo to your local machine



git clone https://github.com/omarmohamed456/Machine-LearningBased-Password-Strength-Evaluation-



**--> to make a copy of an online branch that doesn't exist locally**



git checkout -b main origin/main #create local copy of the remote branch.



**--> to fork**

\#forking means to copy someone else's repo on your account



done on GitHub



**-->to pull Request**

\#to propose changes in case you don't have access



done on GitHub



**--> to change head**

\#this is only needed to go back to previous commits 

