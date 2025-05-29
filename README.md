📚 Book Management API 🚀

🌟 Overview
This is a simple **REST API** for managing a collection of books. It allows users to **view, add, update, and delete books**. The API is built using **Node.js** and **Express**.

🔧 Technologies Used
✅ **Node.js** - JavaScript runtime  
✅ **Express.js** - Web framework  
✅ **cURL** (Optional) - Command-line requests  

📂 Project Structure 🏗️
**📁 server.js # Main server file 📁 routes.js # API routing 📁 controller.js # Handles book data 📁 README.md # Project documentation**

⬇️Install the dependencies(If needed):
npm install express
📌 API Endpoints 📡
⚡ Method	             📌 Endpoint	                     📋 Description
    GET                   /books	                           Fetch all books
    POST	                /books	                           Add a new book
    PUT	                  /books/:id	                       Update an existing book
    DELETE	              /books/:id	                       Delete a book

⚒️Working
->Run the Server Using:node server.js
->Then navigate to respective local host to see the result

If the browser not working(alternavtive Using Cmd)
  **curl -X PUT http://localhost:4000/books/1 -H "Content-Type: application/json" -d "{\"title\": \"The Hobbit - Updated\", \"author\": \"J.R.R. Tolkien\"}"
**✏️ Update the book paste this
**curl -X DELETE http://localhost:4000/books/1** ❌ To delete the book

** OUTPUT **
![image](https://github.com/user-attachments/assets/83188b10-2c46-4e61-bde7-8d0d8add31b8)




