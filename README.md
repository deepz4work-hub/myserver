# 🌐 My Website Node.js Server


A **lightweight Node.js HTTP server** serving a multi-page website with **Home**, **About Us**, and **Contact Us** pages using plain HTTP. Fully styled with **Bootstrap 5** 
---
Code Explanation Given:

### importing http module

       const http=require('http');   

### port declaration

       const PORT=3000                   

### server creation

       const server=http.createServer((req,res)=>{  

### routing

       if(req.url==='/home' || req.url===('/')){ //routing to defaultPage or homepage
        
### redirection is done using this code in menu and res.write is used to pass the values displayed as the response


       res.write(`
        <ul class="menu">           
                <li><a href="/home">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
        </ul>`)
     }
### after the redirection to particular routes , res.end() should be used to finish the response

#### res.end should not be used before res.write as will be getting error 'ERR_STREAM_WRITE_AFTER_END'

        else if(req.url==='/contact'){}   //routing to contact

    

        else if(req.url==='/aboutus'){} //routing to aboutus


### else is used for invalid route Error Handling

        else {res.write('<h1>404-Error File not found</h1>)} // 

    })


### server running
server.listen(PORT ,()=>{
    console.log(`Server starting on ${PORT}`)
})


********************************************************
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
| GET    | `/contact`        | Contact Us page with form   



