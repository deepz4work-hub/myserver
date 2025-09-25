# 🌐 My Website Node.js Server


A **lightweight Node.js HTTP server** serving a multi-page website with **Home**, **About Us**, and **Contact Us** pages using plain HTTP. Fully styled with **Bootstrap 5** and supports Chrome DevTools JSON requests.

---

## 🚀 Features

- ✅ Fully responsive **Home, About Us, Contact Us** pages.  
- ✅ Built with **plain Node.js HTTP server** (no Express required).  
- ✅ Handles **GET**  requests for `/` and `/home`for homepage
- ✅ Handles **GET**  requests for `/contact`for contactpage
- ✅ Handles **GET**  requests for `/aboutus`for aboutuspage

response status code is given for every call created.
---

## 🛠 Requirements

- **Node.js** v14 or higher  
- Internet connection (to load Bootstrap CSS & JS from CDN)  

---

## 📥 Installation

1. Clone the repository:
gh repo clone deepz4work-hub/node

2. Navigate to the project folder:
cd my-website-node-server

3. cd my-website-node-server
node server.js

4. Open your browser:
http://localhost:3000

| Method | Route               |    Description   
| GET    | `/` or `/home`      | Home page                              
| GET    | `/aboutus`          | About Us page                              
| GET    | `/contactus`        | Contact Us page with form     
| POST   | `/` or `/home`      | Handles POST form submissions (customizable) |

