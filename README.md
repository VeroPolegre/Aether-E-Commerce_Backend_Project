<a name="readme-top"></a>

<h1 align="center"><samp>E-Commerce</samp></h1>

<h2 align="center"><samp>Aether: A Backend Project</samp></h2>
  <p align="center"><samp>
    Backend project made with Node.js && Express.js technologies using MySQL && Sequelize.
    <br /> 
    ⭐
    <a href="https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project
/issues">Request Feature</a>
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
 
- Creation of CRUD
 
- One to Many and Many to Many relationships
 
- Use of seeders
  
</samp>

# <h2 align="center"><samp> 🔧 Built with </samp></h2>

<p align="center">
<img align="center" alt="npm" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg">
<img align="center" alt="Node" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
<img align="center" alt="js" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
<img align="center" alt="mysql" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg">
<img align="center" alt="postman" height="50" width="50" src="https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project/assets/145065743/c9dc674c-39ab-4e2b-9142-0ca9f1155753">

</p>

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

 # Start the project
 $ npm start 

```

# <h2 align="center"><samp>  🚀 Development  </samp></h2>
# <h2><samp> 🎯 Endpoints  </samp></h2>

Endpoints play a pivotal role in shaping the interaction between a client and a server, facilitating the exchange of data and enabling the functionality of web applications. They are specific, predefined URLs or routes on a server that are designed to handle incoming HTTP requests from clients, such as web browsers, mobile apps, or other software. In this backend project, the use of endpoints is fundamental to the creation of a robust and interactive REST API.

Products:

    - Create a new product.
    - Update an existing product.
    - Delete a product.
    - Display product categories alongside product information.
    - Retrieve all products showing categories and associated reviews.
    - Retrieved a product by its unique identifier, displaying categories and reviews.
    - Search filters for products by name and price.
    - Sort products from highest to lowest price.
    - Validation for creating products, ensuring all fields were filled.
    - Access to create, update, and delete products after user authentication.

Categories:

    - Create a new category.
    - Update a category.
    - Delete a category.
    - Retrieved categories along with the products they contain.
    - Retrieved a category by its unique identifier.
    - Search filter for categories by name.

Orders:

    - Make an order.
    - View orders along with the products they include, their reviews and the users that wrote them.

Users:

    - User registration using Bcrypt for password security.
    - Login user using Bcrypt and JWT for authentication.
    - Retrieve user information, including their associated orders and the products in each order.
    - Validation for creating user profiles, ensuring all fields were filled.
    - Role-based system with an "Admin" and "SuperAdmin" roles that grants specific privileges for product management.
    - Change of the roles (user, admin, superadmin)
    - Email confirmation.
    - Logout user.

Reviews:

    - Review creation with rating.
    - Retrieve all reviews endpoint with the user that wrote it.
    
Seeders:

    - Created a seeder to populate the database with seven initial users with name, email, password, avatar, role and email confirmation.
    - Six categories of the product.
    - Twenty products with title, description, release date, price, genre, platform and rating.
    - Products associated with the categories.
    - Reviews associated with the users with text and date.

# <h2 align="center"><samp>  Postman for testing the REST API 🖥️  </samp></h2>

CRUD, an abbreviation for CREATE, READ, UPDATE, and DELETE, represents the fundamental actions involved in establishing and controlling persistent data entities, primarily within relational and NoSQL databases.

Testing the user flow:

https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project/assets/145065743/ea0645d9-d90a-4e0f-bd87-9f7ab66f0555

https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project/assets/145065743/894a6e81-c3c7-4d96-905d-72552a49b335

https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project/assets/145065743/5b3ae3b6-2f2a-4cb2-9353-b1318bb715e1

https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project/assets/145065743/7f6a277a-42e7-4d1a-8474-5437371868cc


 
# <h2 align="center"><samp>  Bcrypt for all passwords ⚔️ </samp></h2>

A cryptographic hash function - usually known as a "hash" - is a mathematical algorithm that transforms any
arbitrary block of data into a new character string with a fixed length.

It works with "salt", a random string that when encrypting a plain text password with salt, the output of the
Hash algorithm is no longer predictable. The same password will no longer produce the same hash.

# <h2 align="center"><samp>  Middleware  🔗 </samp></h2>

A middleware is a function that can be executed before or after handling a
route. This function has access to the Request object, Response and the next() function.

Middleware functions are often used as a mechanism to verify levels of
access before entering a route, error handling, data validation, etc.

In this project JSON web token, admin and superadmin authentication, handling of validation errors and express JSON was used as middleware tools.

- Token authentication:

Defines a route to which only logged in users can enter, therefore,
You need to check before entering that route, whether the user is logged in or not.

- Admin authentication:

Defines a route to which only administrator or superadmins users can enter, so
Therefore, you need to check before entering that route, whether or not the user is a
administrator.

- Validations:

Data validation is a process that ensures the delivery of clean and clear data to the programs, applications and services that support it.
they use. Checks the integrity and validity of the data being entered into different software and
it's components. Data validation ensures that the data meets the requirements and quality parameters.

Data validation primarily helps ensure that data sent to connected applications is complete, accurate,
safe and consistent. This is achieved through data validation checks and rules that routinely check the validity of data.
data.

# <h2 align="center"><samp>  JSON web token  🕸️ </samp></h2>

It is used to create access tokens that allow the propagation of a specific user's identity and privileges.

JWT is created with a secret key and that secret key is private to you (your server), which means it will never
will not be revealed to the public or injected into the JWT token. When you receive a JWT from the client, you can verify that JWT
with this secret key stored on the server.

A JWT is simply a string but contains three distinct parts separated by periods.

- HEADER: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 (indicates the algorithm and type of Token, in our case: HS256 and JWT).

- PAYLOAD: eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9 (user data, date
creation…).

- SIGNATURE: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ (the signature, to verify that the token is valid, here it is
important is the "secret" with which we sign).

The signature is used to verify that the sender of the JWT is who they say they are and to ensure that the message has not been
changed along the way.

# <h2 align="center"><samp>  Testing  🧪 </samp></h2>

Testing is a process to verify and validate the functionality of a software program or application with the goal of ensuring that the product is free of defects. 

Done with Jest, a JavaScript testing framework developed by Meta(Facebook).

<h2><samp> 📶 Future Roadmap </samp></h2>

![Vero-E-Commerce_Aether_Roadmap](https://github.com/VeroPolegre/Aether-E-Commerce_Backend_Project/assets/145065743/6c75506b-e1d4-4442-adcb-e2db845df07a)

## 🤝 Contributing

The open source community thrives on contributions, which elevate it into an extraordinary space for learning, inspiring, and innovating. 

Your contributions are sincerely valued. If you have any suggestions to improve it, please consider forking the repository and initiating a pull request. Alternatively, you can easily open an issue labeled "enhancement." And, remember to show your support for the project by giving it a star! Thank you!

1. Fork Aether-E-Commerce_Backend_Project
2. Create your Feature Branch (`git checkout -b feature/YourName`)
3. Commit your Changes (`git commit -m 'Add some YourName'`)
4. Push to the Branch (`git push origin feature/YourName`)
5. Open a Pull Request


## 🖊️ License

This project is under license of [Vero Polegre](https://github.com/VeroPolegre)

### ⭐️ How to reach me!

<a href="https://www.linkedin.com/in/veronica-polegre-304a3b297/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

📩 Or if you want to send me an email: **veronicapolegre98@gmail.com**

<p align="right">(<a href="#readme-top">back to top</a>)</p>
