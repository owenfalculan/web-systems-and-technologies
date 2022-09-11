## Web Systems and Technologies Repository

#### Contributing

1. Make sure you have git installed. Download git [here](https://git-scm.com/downloads).
2. Create GitHub Account and add your username [here](https://docs.google.com/spreadsheets/d/1dbLlteb_eT49D2mW4nqbA3amqZcflPaSZ64H18HGgK8/edit?usp=sharing). You will be invited as a collaborator in this repository.
3. Open Git Bash (installed along with git) and clone the repository.
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
6. Add your project in ``personal-websites/<your-section>``. The main html file inside your project should be named ``index.html``.
7. Edit ``scripts/variables.js`` file. Look for your name and add the project folder name as the value for website property.
8. Add your changes to staging area.
```
Command:
git add .
```
9. Commit your changes.
```
Command:
git commit -m <commit-message>

Example:
git commit -m 'develop owen falculan website'
```
10. Push your branch.
```
Command:
git push

If prompted to set remote as upstream. Just enter the recommended command.
Sample:
git push --set-upstream origin <branch-name>
```
11. Find your pushed branch in our GitHub repository then create and open pull request.
