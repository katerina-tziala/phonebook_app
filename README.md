# PhoneBook App

The *PhoneBook App* is a Web App, namely a digital phonebook, where users can manage and display phonenumbers of desired persons.  This app was developed in the context of the ***Full Stack Open 2019 - Deep Dive Into Modern Web Development*** open course from the University of Helsinki and is a proof-of-concept app that illustrates the fullstack development and deployment of an app.

Access the *PhoneBook App* here: [**PhoneBook**](https://phonebook-app-demo.herokuapp.com/)


## Technologies

Here’s a high level list of the technologies used for this app:

* React: For the development of the frontend of the *PhoneBook App*.

* NodeJS and Express: For the development of the *Phonebook API*.

* MongoDB: A document database that stores data in flexible JSON-like format.

* Heroku: A cloud platform to deploy the app on the internet.


## Connect to MongoDB

To connect the *PhoneBook App* to MongoDB  follow the instructions in the [**README_DB_CONNECTION**](https://github.com/katerina-tziala/phonebook_app/blob/master/README_DB_CONNECTION.md) file.


## Deploy on Heroku

To deploy the *PhoneBook App* on **Heroku** follow the instructions in the [**README_DEPLOYMENT**](https://github.com/katerina-tziala/phonebook_app/blob/master/README_DEPLOYMENT.md) file.




<!-- heroku config:set MONGODB_URI=mongodb+srv://fullstack:fullstackKT6890@cluster0-xq5jf.mongodb.net/phonebook?retryWrites=true"&"w=majority -->

 <!-- heroku git:remote -a phonebook-app-demo -->






<!-- 
Commit a text file to your app’s root directory that is named Procfile without a file extension. This file tells Heroku which command(s) to run to start your app. These commands are probably the same as the ones you use to run your code on your local machine.

Here’s an example Procfile for a simple Node.js app:


Access the app here: <a href="https://phonebook-app-kt.herokuapp.com/" target="blank">PhoneBook App</a>

<h2>Setup of the Project</h2>

**1.** Fork and clone this repository.

**2.** Navigate from your terminal inside the /backend directory and run ***npm install*** to install the project's dependencies.

**3.** Navigate from your terminal inside the /frontend directory and run ***npm install*** to install the project's dependencies.
<br/>
<br/>
<h3>Running BackEnd and FrontEnd Side By Side</h3>

**1.** Navigate from your terminal inside the /backend directory and run ***npm run watch***.

**2.** Inside the /frontend/src/services/phonebookService.js file make sure that the baseUrl variable is set to:

        const baseUrl = 'http://localhost:3001/api/persons';

**3.** Open a new terminal, navigate inside the /frontend directory and run ***npm start***.
<br/>
<br/>
<h3>Running App Locally</h3>

**1.** Inside the /frontend/src/services/phonebookService.js file make sure that the baseUrl variable is set to:

        const baseUrl = 'api/persons';

**2.** Navigate from your terminal inside the /backend directory and run ***npm run build-frontend*** and then ***npm run watch***.
<br/>
<br/>
<h3>Running FrontEnd Locally With Deployed Backend To Heroku</h3>

**1.** Deploy Back End To Heroku....+

**2.** Inside the /frontend/src/services/phonebookService.js file make sure that the baseUrl variable is set to:

        const baseUrl = 'https://phonebook-app-kt.herokuapp.com/api/persons';

**3.** Navigate from your terminal inside the /frontend directory and run ***npm start***. -->
