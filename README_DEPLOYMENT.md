# Deploy the PhoneBook App on Heroku

The *PhoneBook App* is deployed on [**Heroku Platform**](https://www.heroku.com/platform) from the **dist** directory. To deploy this app on **Heroku** according to the following directions, make sure that you maintain the structure of this repository.
**Note:** The **Procfile** in the **src** directory is required to speecify the required commands for **Heroku**  to run and start your app.


### Step A: Create an App on Heroku

1. Create your own account on [**Heroku**](https://www.heroku.com/platform) and create a new app.

2. Create your own app on **Heroku**. The name of your app will be referred from now on as ***YOUR_OWN_HEROKU_APP***.

3. On the **Heroku Platform** navigate to the ***Settings*** and get the url of your app under the ***Domains*** section. It will be referred from now on as ***YOUR_OWN_APP_URL*** and is the link you will use to access your app.


### Step B: Prepare the App for Deployment

1. Fork and clone this repository.

2. From the root directory run ***npm install*** or ***npm i*** to install the project's dependencies.

3. Navigate from your terminal inside the /src/backend directory and run ***npm install*** or ***npm i*** to install all the dependencies of the backend side of the app.

4. Navigate from your terminal inside the /src/frontend directory and run ***npm install*** or ***npm i*** to install all the dependencies of the frontend side of the app.

5. Clear the **dist** directory (remove all files). 

6. From the root directory run ***npm run dist-backend*** to copy the required files for the backend side of the app to the dist folder.

7. From the root directory run ***npm run dist-backend*** to copy the required files for the backend side of the app to the dist folder.

8. To make express show the static content of the app (the index.html page, the JavaScript etc.) add the following line of code in the **index.js** file located in the **dist** directory:

        app.use(express.static('build'));

9. Add the following line in the **package.json** file located in the **dist** directory:

        "proxy": "YOUR_OWN_APP_URL"

For example, for this app the *proxy* specified in the **package.json** file located in the **dist** directory is :

        "proxy": "https://phonebook-app-demo.herokuapp.com/"

10. From the root directory run ***npm run dist-frontend*** to build the frontend side of the app and move it to the **dist** directory.

11. Commit your changes on your own repo on [**GitHub**](https://github.com/) maintaining the structure of this repository.


### Step C: Deploy the App

To deploy the *PhoneBook App* on **Heroku** use your terminal from the root directory of your repository to ecexute the following commands. If you use [**Visual Studio Code**](https://code.visualstudio.com/), install the [**Heroku plugin**](https://marketplace.visualstudio.com/items?itemName=ivangabriele.vscode-heroku) and use the *Terminal* provided by the **Visual Studio Code**.

1. Run ***heroku login*** to login to your **Heroku** account.

2. Run ***heroku git:remote -a YOUR_OWN_HEROKU_APP*** to set a git a remote for your **Heroku** app.

3. Run ***heroku config:set MONGODB_URI=YOUR_OWN_MONGODB_URI*** to set the connection link for the database on your **Heroku** app. Create **YOUR_OWN_MONGODB_URI** as specified in the [*README**](https://github.com/katerina-tziala/phonebook_app/blob/master/README.md) file in the root directory of this repository.

4. Run ***git subtree push --prefix dist heroku master*** to deploy the *PhoneBook App* from the **dist** directory of this repository on **Heroku**.

**Note:** To show the heroku logs in case anything goes wrong run the command ***npm run logs:prod***.
<br/><br/>

## Update the Deployed App on Heroku

1. Clear the **dist** directory (remove all files) or remove the files that will be updated. 

2. If you update the backend side of the app, copy the required files for the backend side of the app to the dist folder as stated above.

   **Note:** Make sure that you add the correct *proxy*  in the **package.json** file located in the **dist** directory, and you add the 

        app.use(express.static('build'));

   line of code in the **index.js** file located in the **dist** to serve the static files of the app.


3. If you update the frontend side of the app, build and move the required files for the frontend side of the app to the dist folder as stated above.

4. Commit your changes on your own repo on [**GitHub**](https://github.com/) for this app.

5. Run ***heroku login*** to login to your **Heroku** account.

6. Run ***git subtree push --prefix dist heroku master*** to deploy the updated *PhoneBook App* from the **dist** directory of this repository on **Heroku**.

**Note:** To show the heroku logs in case anything goes wrong run the command ***npm run logs:prod***.