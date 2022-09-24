## Web Systems and Technologies Repository

<br>

### Requirements

#### 1. Git

- Download git [here](https://git-scm.com/downloads).
- Git Bash will be installed along with Git.
- Use Git Bash to enter git commands.

```
Note (This is important!):

After installing git. Open Git Bash and enter user config for git.

Commands:
git config --global user.email "<your-email>"
git config --global user.name "<your-name>"

Example:
git config --global user.email "owenpatrick.falculan@g.batstate-u.edu.ph"
git config --global user.name "Owen Patrick Falculan"
```

#### 2. Github

- Create a GitHub Account and add your username [here](https://docs.google.com/spreadsheets/d/1dbLlteb_eT49D2mW4nqbA3amqZcflPaSZ64H18HGgK8/edit?usp=sharing). You will be invited as a collaborator in this repository.

<br>

### Contributing

1. Deploy your personal website to GitHub Pages. Follow this [tutorial](https://www.w3schools.com/git/git_remote_pages.asp?remote=github).

```
Steps:
1. Create new repository on GitHub.
2. Initialize your project with git.
(Go to your project folder > right click > Open Git Bash) Command: git init
3. Add your files to staging area. Command: git add .
4. Commit your changes. Command: git commit -m <commit-message>
5. Add github repository remote URL. Command: git remote add origin <remote-url>
6. Push main/master branch. Command: git push -u origin master
7. Click settings > pages > deploy master branch > save.
8. Your website link will be available after 30 seconds.
```

2. Open Git Bash (installed along with git) and clone our course repository. Do not clone inside your personal website project!

```
Commands:
git clone https://github.com/owenfalculan/web-systems-and-technologies.git
cd web-systems-and-technologies
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

6. Edit `utils/variables.js` file. Look for your name and add the links of your personal website and the code.

```
Sample:
links: {
  website: {
    link: "https://ams-mai.github.io/almamaearguelles/",
    code: "https://github.com/ams-mai/almamaearguelles",
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

10. Find your pushed branch in our GitHub repository then create and open pull request.
11. After I merged your pull request. Your website will be available [here](https://owenfalculan.github.io/web-systems-and-technologies/).
