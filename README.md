## Web Systems and Technologies Repository

### Requirements
1. Git - Make sure you have git installed. Download git [here](https://git-scm.com/downloads).
2. Github - Create a GitHub Account and add your username [here](https://docs.google.com/spreadsheets/d/1dbLlteb_eT49D2mW4nqbA3amqZcflPaSZ64H18HGgK8/edit?usp=sharing). You will be invited as a collaborator in this repository.

### Contributing

1. Create repository for your personal website and deploy it using GitHub Pages. Follow this [tutorial](https://www.w3schools.com/git/git_remote_pages.asp?remote=github).
```
Steps:
1. Create new repository on GitHub.
2. Initialize your project with git. Command: git init
3. Add your files to staging area. Command: git add .
4. Commit your changes. Command: git commit -m <commit-message>
5. Add github repository remote URL. Command: git remote add origin <remote-url>
6. Push main/master branch. Command: git push -u origin main
7. Click settings > pages then deploy master branch.
```

2. Open Git Bash (installed along with git) and clone our course repository.
```
Command:
git clone https://github.com/owenfalculan/web-systems-and-technologies.git
```
4. Create a branch. Use your name as branch name (eg. owen-patrick-falculan)
```
Command:
git checkout -b "owen-patrick-falculan"
```
5. Make sure that you are in your newly created branch. Do not make changes in master branch! To check, type "git branch" and your branch should be highlighted.
```
Command:
git branch
```
6. Edit ``scripts/variables.js`` file. Look for your name and add the links of your personal website and github repository.
```
Sample:
links: {
  website: {
    link: "https://owenfalculan.github.io/web-systems-and-technologies/",
    code: "https://github.com/owenfalculan/web-systems-and-technologies",
  },
  calculator: "",
},
```
7. Add your changes to staging area.
```
Command:
git add .
```
8. Commit your changes.
```
Command:
git commit -m <commit-message>

Example:
git commit -m 'develop owen falculan website'
```
9. Push your branch.
```
Command:
git push

If prompted to set remote as upstream. Just enter the recommended command.
Sample:
git push --set-upstream origin <branch-name>
```
110. Find your pushed branch in our GitHub repository then create and open pull request.
