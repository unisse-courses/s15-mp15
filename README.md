# .doetal, a Calendar Based Planner

This repository consists of the files necessary in running 'doetal" a Calendar Based Planner.

Features:
* Create up to 15 Calendars with customized names and colors.
* Create, Update, and Delete Unlimited Plans/Schedules.
* Daily and Monthly View.

Visit https://doetal-app.herokuapp.com/ for a working version of the web app.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [git](https://git-scm.com/)
* [GitHub Desktop](https://desktop.github.com/)(optional)
* [NodeJS & npm](https://www.npmjs.com/get-npm)
* [MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) Cluster
* Any text editor for JavaScript, HTML & CSS (VSCode, Atom, SublimeText, etc.)

## Local Setup
1. Fork this repository to create a copy on your GitHub account.
2. Clone the forked repository to your machine.
  ```shell
  git clone https://github.com/YOUR_USERNAME/s15-mp15.git
  ```
3. Navigate to the directory.
  ```shell
  cd s15-mp15
  ```
4. Create a new file `.env`. In this file, set the port, the MongoDB connection URL and the value of `secret` in the `express-session`

```dotenv
PORT = 3000
MONGODB_URL=""
SESSION_SECRET=""
```
5. Install the dependencies in package.json. All needed packages are already included.
  ```shell
  npm install
  ```
6. Run the server using the script defined (using `nodemon`)
  ```shell
  npm run dev
   ```
6. Navigate to [http://localhost:3000/](http://localhost:3000/) or selected port. You should see the login page (see link to web app above for a sample).
  
To stop the server, simply key in CTRL+C (Windows) or control (^) + C (Mac).


## Deployment

### Prerequisites

* [git](https://git-scm.com/)
* [GitHub Desktop](https://desktop.github.com/)(optional)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) Cluster
* [Heroku](https://www.heroku.com/)

1. Use the `heroku login` command to login to your Heroku account. It will open up the browser for login.
```shell
heroku login
```
2. Since our application is already connected to a `git` repository, we can now directly create the Heroku app.
```shell
$ heroku create app-name
Creating app... done, ⬢ protected-sea-52141
https://protected-sea-52141.herokuapp.com/ | https://git.heroku.com/protected-sea-52141.git
```
3. When you create an app, a git remote (called `heroku`) is also created and associated with your local git repository. Before pushing any changes to the `heroku` remote branch, make sure all changes are commited first.
```shell
git add .
git commit -m 'Update code for deployment'

or

commit and push all changes using GitHub Desktop
```
4. To deploy the application, simply push the code to the `heroku` branch:
```shell
git push heroku master
```
5. To know that it was completely deployed, you should see at the end of the build:
```
...
remote: Verifying deploy... done.
To https://git.heroku.com/protected-sea-52141.git
 * [new branch]      master -> master
```
6. According to the [Heroku Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true#deploy-the-app), to ensure that at least one instance is running, execute this command:
```shell
heroku ps:scale web=1
```
7. Go to the app's **`Settings`** tab from the [Heroku Dashboard](https://dashboard.heroku.com/apps and click the "Reveal Config Vars" button.
```
Use the `.env` file created previously to create the config vars. No need for the quotes, just paste the values and make sure to click **Add**.
```
8. To access the app and get the URL of your application, run:
```shell
heroku open
```
9. You can also test if the code works locally, by running:
```shell
heroku local web
```
This will simply get the values from the local `.env` file and whatever's in the current repository. To ensure that changes get deployed, do not forget to **COMMIT** the changes to the code.

That's it! You now have a fully deployed application on Heroku!

## Built With

* HTML, CSS, Javascript - Client Side
* Node.js, Express, Handlebars, AJAX - Server Side
* [Toast UI](https://ui.toast.com/tui-calendar/) - The calendar ui plugin used in the app
* [Boostrap](https://getbootstrap.com/) - For free CSS classes
* [mongoose](https://mongoosejs.com/) - Object modeling used for Node.js
* [mongodb - Atlas](https://www.mongodb.com/) - Cloud-hosted MongoDB service
* [Heroku](https://dashboard.heroku.com/) - Cloud platform used in running our app
* [PurpleBooth's README Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - Templated used in creating this README file
* [GitHub](https://github.com/) - File repository for collaboration

## Team Members:

* **Custodio, Nicholas Rupert**
* **Sanchez, Martin Christopher B.**
* **Mapa, Jamie Shekinah** 

## Acknowledgments

* Ms. [Unisse Chua](https://unissechua.github.io/) for giving us the opportunity and lessons to create our project
* Our friends and family

