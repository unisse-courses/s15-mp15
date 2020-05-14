# .doetal, a Calendar Based Planner

This repository consists of the files necessary in running a Calendar Based Planner

## Getting Started

Visit our website here (running on heroku)

```
https://doetal-app.herokuapp.com/
```

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [NodeJS & npm](https://www.npmjs.com/get-npm)
* [MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)
* Any text editor for JavaScript, HTML & CSS (VSCode, Atom, SublimeText, etc.)

## MongoDB Installation
1. Download MongoDB Community Server from [here](https://www.mongodb.com/download-center/community).
2. Follow the instructions for your operating system from [this guide](https://docs.mongodb.com/manual/administration/install-community/).
3. You can also follow along this [YouTube Video by Traversy Media](https://youtu.be/-56x56UppqQ) for installing and using mongo `shell` & MongoDB Compass (similar to MySQL Workbench).
4. Make sure that mongodb is running as a service in the background. Otherwise, this will not work.

## Local Setup
1. Clone this repository: `git clone https://github.com/unisse-courses/node-mongodb-sample.git`
2. Navigate to the directory: `cd node-mongodb-sample`
3. Install the dependencies: `npm install`
    * I've already installed mongodb so it's in the `package.json` file already.
4. Run the server: `node index.js`
    * Navigate to `http://localhost:9090/` in the browser to view the app.

The landing page should look like this:
![alt text](screens/expected-home.png "Expected Landing Page")

## (?)Running the tests

(?)Explain how to run the automated tests for this system

### (?)Break down into end to end tests

(?)Explain what these tests test and why

```
Give an example
```

### (?)And coding style tests

(?)Explain what these tests test and why

```
Give an example
```

## Deployment

### Prerequisites

What things you need to install the software and how to install them
```
MongoDB Atlas (Database)
Heroku (Deployment)
```

to deploy this using heroku, follow these steps (make sure that you have pushed your repository to GitHub)
```
heroku login
```
replace </ name of app >/ with any name
```
heroku git:remote -a < name of app >-app
```
push the repository
```
git push heroku master
```
you'll be given a link after having your "push" compiled

## Built With

* [Toast UI](https://ui.toast.com/tui-calendar/) - The calendar ui plugin used in the app
* [Boostrap](https://getbootstrap.com/) - For free CSS classes
* [mongoose](https://mongoosejs.com/) - Object modeling used for node.js
* [mongodb - Atlas](https://www.mongodb.com/) - Cloud-hosted MongoDB service
* [Heroku](https://dashboard.heroku.com/) - Cloud platform used in running our app
* [PurpleBooth's README Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - Templated used in creating this README file
* [GitHub](https://github.com/) - Used in collaborating, passing requirements for the project

## (?)Contributing


## (?)Versioning

(?)You can follow the versioning of the file with the number of commits made on the GitHub repository

## Team Members:

* **Custodio, Nicholas Rupert**
* **Sanchez, Martin Christopher B.**
* **Mapa, Jamie Shekinah** 

## Acknowledgments

* Ms. Unisse Chua for giving us the opportunity to pass our project
* Our friends and family

