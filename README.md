# phonebook_app





Access the app here: <a href="https://phonebook-app-kt.herokuapp.com/" target="blank">PhoneBook App</a>

<h2>Setup of the Project</h2>

**1.** Fork and clone the this repository.

**2.** Navigate from your terminal inside the /backend folder and run ***npm install*** to install the project's dependencies.

**3.** Navigate from your terminal inside the /frontend folder and run ***npm install*** to install the project's dependencies.
<br/>
<br/>
<h3>Running BackEnd and FrontEnd Side By Side</h3>

**1.** Navigate from your terminal inside the /backend folder and run ***npm run watch***.

**2.** Inside the /frontend/src/services/phonebookService.js file make sure that the baseUrl variable is set to:

        const baseUrl = 'http://localhost:3001/api/persons';

**3.** Open a new terminal, navigate inside the /frontend folder and run ***npm start***.
<br/>
<br/>
<h3>Running App Locally</h3>

**1.** Inside the /frontend/src/services/phonebookService.js file make sure that the baseUrl variable is set to:

        const baseUrl = 'api/persons';

**2.** Navigate from your terminal inside the /backend folder and run ***build-frontend*** and then ***npm run watch***.
<br/>
<br/>
<h3>Running FrontEnd Locally With Deployed Backend To Heroku</h3>

**1.** Deploy Back End To Heroku....+

**2.** Inside the /frontend/src/services/phonebookService.js file make sure that the baseUrl variable is set to:

        const baseUrl = 'https://phonebook-app-kt.herokuapp.com/api/persons';

**3.** Navigate from your terminal inside the /frontend folder and run ***npm start***.
