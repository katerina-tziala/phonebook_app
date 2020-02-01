# Connect the PhoneBook App to MongoDB

1. Create your own account on [**MongoDb**](https://www.mongodb.com/cloud), create a cluster, add a database user, and get your credentials for the database access.

2. Create your own connection link for the database connection according to the following form:

   ```
   mongodb+srv://<username>:<password>@cluster0-xq5jf.mongodb.net/<database>?retryWrites=true"&"w=majority
   ```

This connection link is required to connect the app with the database and will be referred from now on as ***YOUR_OWN_MONGODB_URI***.
   
**Notes:**

* Make sure that you use the correct credentials (**username** and **password**) in the connection link.

* The name of the database for this app is **phonebook**! You can set your own name for the database. 
