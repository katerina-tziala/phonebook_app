# PhoneBook App



## Connecting the App to the Database

1. Create your own account on [**MongoDb**](https://www.mongodb.com/cloud), create a cluster, add a database user, and get your credentials for the database access.

2. Create your own connection link for the database connection according to the following form:

   ```
   mongodb+srv://<username>:<password>@cluster0-xq5jf.mongodb.net/<nameofdatabse>?retryWrites=true"&"w=majority
   ```

This connection link is required to connect the app with the database and will be referred from now on as ***YOUR_OWN_MONGODB_URI***.
   
**Notes:**

* Make sure that you use the correct credentials (**username** and **password**) in the connection link.

* The name of the database for this app is **phonebook**! You can set your own name for the database. 
<br/>

## Deploy the PhoneBook App on Heroku

To Deploy the *PhoneBook App* on **Heroku** follow the instructions in the [**README_DEPLOYMENT**](https://github.com/katerina-tziala/phonebook_app/blob/master/README_DEPLOYMENT.md) file.




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
