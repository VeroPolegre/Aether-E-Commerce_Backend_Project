<h1 align="center"><samp>E-Commerce</samp></h1>

<h2 align="center"><samp>Aether: A Backend Project</samp></h2>
  <p align="center"><samp>
    Backend project made with Node.js && Express.js technologies using MySQL && Sequelize.
    <br /> 
    ⭐
    <a href="https://github.com/victorcodigos/1-proyecto-e-commerce-backend/issues">Request Feature</a>
    ⭐
    <br />
    
  </samp></p>
  
# <h2><samp> 💬 Introduction  </samp></h2>

This project aims to leverage the knowledge of Node.js and Express technologies, coupled with MySQL/Sequelize, creating a robust REST API for an online store (e-commerce) application.

Aether, a database schema designed with well-defined relationships between tables, and a subsequently developed REST API that meet the next objectives and specified requirements.

# <h2><samp> ⚡ Objectives  </samp></h2>
<samp>
  
- Register users using Bcrypt
 
- User login + logout. Token (JWT) + middleware
 
- Creation of a CRUD.
 
- At least one Many to Many relationship and another One to Many.
 
- Use of seeders.
  
</samp>

# <h2 align="center"><samp> 🔧 Built with </samp></h2>

<p align="center">
<img align="center" alt="npm" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg">
<img align="center" alt="Node" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
<img align="center" alt="js" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
<img align="center" alt="mysql" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg">
<img align="center" alt="postman" height="50" width="50" src="https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project/assets/145065743/c9dc674c-39ab-4e2b-9142-0ca9f1155753">

</p>

# <h2 align="center"><samp>  🚀 Development  </samp></h2>
Project endpoints

Endpoints play a pivotal role in shaping the interaction between a client and a server, facilitating the exchange of data and enabling the functionality of web applications. They are specific, predefined URLs or routes on a server that are designed to handle incoming HTTP requests from clients, such as web browsers, mobile apps, or other software. In this backend project, the use of endpoints is fundamental to the creation of a robust and interactive REST API.

Products:

    - Added an endpoint to create a new product.
    - Implemented an endpoint to update an existing product.
    - Developed an endpoint to delete a product.
    - Displayed product categories alongside product information.
    - Retrieve all products showing categories and associated reviews.
    - Retrieved a product by its unique identifier, displaying categories and reviews.
    - Implemented search filters for products by name and price.
    - Sorted products from highest to lowest price.
    - Applied validation for creating products, ensuring all fields were filled.
    - Allowed access to create, update, and delete products after user authentication.

Categories:

    - Created endpoints for CRUD operations to manage product categories.
    - Added an endpoint to create a new category.
    - Implemented an endpoint to update a category.
    - Developed an endpoint to delete a category.
    - Retrieved categories along with the products they contain.
    - Retrieved a category by its unique identifier.
    - Implemented a search filter for categories by name.

Orders:

    - Created an endpoint to view orders along with the products they include.
    - Implemented an endpoint to place new orders.

Users:

    - Developed an endpoint for user registration using Bcrypt for password security.
    - Implemented an endpoint for user login using Bcrypt and JWT for authentication.
    - Retrieved user information, including their associated orders and the products in each order.
    - Added an endpoint for user logout.
    - Implemented validation for creating user profiles, ensuring all fields were filled.
    - Implemented a role-based system with an "Admin" and "SuperAdmin" roles that grants specific privileges for product management.
    - Implemented a change of the roles.

Reviews:

    - Developed an endpoint for review creation with rating.
    - Retrieve all reviews endpoint.
    
Seeders:

    - Created a seeder to populate the database with seven initial products.
    - Six categories.
    - Twenty products.
    - Products associated with the categories.
    - Reviews associated with the users.

<h2><samp> 📝 Diagram </samp></h2>

![Vero-E-Commerce_Aether](https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project/assets/145065743/fd138498-f16b-4ef7-bfd5-31196fac587f)

# <h2 align="center"><samp>  ⬇️ Download  </samp></h2>

```bash

 # Clone the repository
 $ git clone https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project
 
 # Enter the directory
 $ cd Aether-E-Commerce_Backend_Project

 # Install the dependencies
 $ npm install

 # start or project
 $ npm start 

```

# <h2 align="center"><samp>  Postman for testing the REST API 🖥️  </samp></h2>

CRUD, an abbreviation for CREATE, READ, UPDATE, and DELETE, represents the fundamental actions involved in establishing and controlling persistent data entities, primarily within relational and NoSQL databases.
 
# <h2 align="center"><samp>  Bcrypt for all passwords ⚔️ </samp></h2>

Bcrypt is an algorithm designed to hash and salt passwords for safe storage. It's an industry standard that's time-tested and proven to resist threats from hackers and other malicious agents.

# <h2 align="center"><samp>  Middleware  🔗 </samp></h2>

Middleware is software positioned between an operating system and the applications it hosts. Serving as a concealed translation layer, middleware facilitates communication and data handling for distributed applications.

# <h2 align="center"><samp>  Json web token  🕸️ </samp></h2>

JSON Web Token (JWT) represents an open standard.

## 🖊️ License

This project is under license of [Vero Polegre](https://github.com/VeroPolegre)

### ⭐️ How to reach me!

<a href="https://www.linkedin.com/in/veronica-polegre-304a3b297/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

📩 Or if you want to send me an email: **veronicapolegre98@gmail.com**

<p align="right">(<a href="#readme-top">back to top</a>)</p>
