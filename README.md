# PhoneBook App



## Connecting the App to the Database

1. Create your own account on [**MongoDb**](https://www.mongodb.com/cloud), create a cluster, add a database user, and get your credentials for the database access.

2. Create your own connection link for the database connection according to the following form:

        mongodb+srv://<username>:<password>@cluster0-xq5jf.mongodb.net/<nameofdatabse>?retryWrites=true"&"w=majority

This connection link is required to connect the app with the database and will be referred from now on as ***YOUR_OWN_MONGODB_URI***.
   
**Notes:**

* Make sure that you use the correct credentials (**username** and **password**) in the connection link.

* The name of the database for this app is **phonebook**! You can set your own name for the database. 
<br/>

## Deploying the App to Heroku

The app is deployed on [**Heroku**](https://www.heroku.com/platform) from the **dist** directory. To deploy this app:

1. Create your own account on [**Heroku**](https://www.heroku.com/platform) and create a new app.

2. On the ***Settings*** section on **Heroku Platform** get the url of your app. It will be referred from now on as ***YOUR_OWN_APP_URL***.
image
3. Fork and clone this repository.

4. From the root directory run ***npm install*** or ***npm i*** to install the project's dependencies.

5. Navigate from your terminal inside the /src/backend directory and run ***npm install*** or ***npm i*** to install all the dependencies of the backend side of the app.

6. Navigate from your terminal inside the /src/frontend directory and run ***npm install*** or ***npm i*** to install all the dependencies of the frontend side of the app.

7. Clear the **dist** directory (remove all files). 

8. From the root directory run ***npm run dist-backend*** to copy the required files for the backend side of the app to the dist folder.

9. From the root directory run ***npm run dist-backend*** to copy the required files for the backend side of the app to the dist folder.

10. To make express show the static content of the app (the index.html page, the JavaScript etc.) add the following line of code in the **index.js** file located in the **dist** directory:

        app.use(express.static('build'));

11. Add the following line in the **package.json** file located in the **dist** directory:

        "proxy": "YOUR_OWN_APP_URL"

For example, for this app the *proxy* specified in the **package.json** file located in the **dist** directory is :

        "proxy": "https://phonebook-app-demo.herokuapp.com/"


<!-- 
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
