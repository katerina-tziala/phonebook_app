# PhoneBook App

This directory contains the source code of the *PhoneBook App*. The *PhoneBook App* is a simple React App, a digital phonebook, where users can manage and display phonenumbers of desired persons.

The *PhoneBook App* consists of two parts:

* [**backend**](https://github.com/katerina-tziala/phonebook_app/tree/master/src/backend)**:** This directory contains the code of the *PhoneBook API* (backend side) of the app. 

* [**frontend**](https://github.com/katerina-tziala/phonebook_app/tree/master/src/frontend)**:** This directory contains the code of the frontend side of the app.


## Running the App Locally

To run the app locally, both parts of the app (backend and frontend) should run in parallel (different terminals). Follow the instructions in the *README* file, located in the root directory of each part, to compile and run the app locally.


## Running the Frontend Locally With Deployed Backend On Heroku

1. Deploy the *PhoneBook API* on **Heroku**, according to the instructions on the **Step C: Deploy the Backend of the App** section in the [**README_DEPLOYMENT**](https://github.com/katerina-tziala/phonebook_app/blob/master/README_DEPLOYMENT.md) file located in the root directory of this repository, (if you haven't done it already).

2. Make sure that all the dependencies of the frontend side of the *PhoneBook App* are installed (frontend directory).

3. Make sure that the *proxy* in the **package.json** file is defined as:
    
     "proxy": "YOUR_OWN_APP_URL"

For example, for this app the *proxy* specified in the **package.json** file located in the **frontend** directory is :

        "proxy": "https://phonebook-app-demo.herokuapp.com/"

4. Navigate from your terminal inside the /src/frontend directory and run ***npm start***.

5. Access the app at http://localhost:3000/.


## Running the Backend And Serving Static Files

1. Make sure that all the dependencies of the *PhoneBook App* are installed (root directory).

2. Make sure that all the dependencies of the frontend side of the *PhoneBook App* are installed (frontend directory).

3. Make sure that all the dependencies of the *PhoneBook API* are installed (backend directory).

4. From the root directory of this repository run ***npm run build-frontend-dev*** to build the frontend side of the app and move it into the **src/backend** directory.

4. From the src/backend directory run ***npm run start*** to run the app.

5. Access the app at http://localhost:3001/.