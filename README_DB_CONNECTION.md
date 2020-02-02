# Connect the PhoneBook App to MongoDB

1. Create your own account on [**MongoDb**](https://www.mongodb.com/cloud).

2. Create a cluster [**MongoDb**](https://www.mongodb.com/cloud).

3. Add a database user on [**MongoDb**](https://www.mongodb.com/cloud) with read and write privileges to any database.<br/>The **username** and the **password** of the created user are the credentials you need for the database access.<br/>This **username**  will be referred from now on as ***YOUR_OWN_MONGODB_USERNAME***.<br/>This **password** will be referred from now on as ***YOUR_OWN_MONGODB_PASSWORD***.

4. Create your own connection link for the database connection according to the following form:

   ```
   mongodb+srv://<username>:<password>@cluster0-xq5jf.mongodb.net/phonebook?retryWrites=true"&"w=majority
   ```

This connection link is required to connect the app with the database and will be referred from now on as ***YOUR_OWN_MONGODB_URI***.

## Notes

- Make sure that you use the correct credentials (**username** and **password**) in the connection link.
