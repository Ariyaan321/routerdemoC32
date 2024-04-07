Honors Assignment 

USER MANAGEMENT

Users
Show list of users by pulling it from the backend NodeJS Express server using GET /users API call. The list should be displayed in the form of table that will have header columns namely Username, Email, Phone and Action. The action column should have two buttons for editing and deleting respective user record.
When edit action button for an existing record is clicked, a new Component (EditUser) should be rendered on the screen, and should show the current values of Username, Email, Phone pre-filled. The component should have save and cancel buttons. Upon clicking the save button, call the backend PUT HTTP /users method and pass the JSON data of the updated field(s) only along with the unique id value for the current record. The backend API currently supports updating only the age property, so that will need to be updated to accommodate the new attributes. When the user record is saved successfully, it should get navigate the UI back to UserList component.
The delete action should call backend API endpoint /users with HTTP DELETE method, please pass the value of the _id field for the target record while calling it as /users/<_id>
To see how to call API endpoints, you can refer to https://clouddevs.com/react/api-calls-with-axios-hook/




Add New User

Add UI elements for adding new user by supplying fields username, email, phone, password.
Add buttons to save and cancel the operation.


------------------------------------------------------------------------------------------
PRODUCE MANAGEMENT

Products
Show list of products by pulling it from the backend NodeJS Express server using GET /products API call. The list should be displayed in the form of table that will have header columns namely Product Name,Price and Action. The action column should have two buttons for editing and deleting respective product record.
When edit action button for an existing record is clicked, a new Component (EditProduct) should be rendered on the screen, and should show the current values of Product Name,Price pre-filled. The component should have save and cancel buttons. Upon clicking the save button, call the backend PUT HTTP /products method and pass the JSON data of the updated field(s) only along with the unique id value for the current record. When the product record is saved successfully, it should get navigate the UI back to ProductList component.
The delete action should call backend API endpoint /products with HTTP DELETE method, please pass the value of the _id field for the target record while calling it as /products/<_id>
To see how to call API endpoints, you can refer to https://clouddevs.com/react/api-calls-with-axios-hook/


Add New Product

Add UI elements for adding new product by supplying fields product name, price.
Add buttons to save and cancel the operation.