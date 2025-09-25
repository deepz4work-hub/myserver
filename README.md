# this project is build and deployed in render and available in 

https://myserver-6rd5.onrender.com


# 🌐 Simple Node.js Server (Without Express)

This project demonstrates how to build a lightweight web server using **only Node.js core modules** (`http`) without relying on external frameworks like Express.js.  

---

## 📂 Project Structure

```
project/
│-- server.js          # Main server file

---

## ⚙️ How It Works

- `http` → Creates the web server and listens for requests.  
- `fs` → Reads the HTML files from the filesystem.  
- `path` → Safely constructs file paths.  
- Routes:
  - `/` or `/home` → Loads `home.html`  200 statusCode
  - `/aboutus` → Loads `aboutus.html`  200 statusCode
  - `/contactus` → Loads `contactus.html`  **200 statusCode
  - Any other route → Shows a **404 Page Not Found**  400 statusCode

--Response code is given 200 for routing and any error will be handled with 400
---

## 🚀 Getting Started

### 1. Install Node.js
Check if Node.js is installed:
```bash
node -v
```
If not, download and install from [Node.js official site](https://nodejs.org/).

---

### 2. Clone or Create the Project
```bash
git clone <your-repo-url>
cd project
```

---

### 3. Run the Server
```bash
node server.js
```

---

### 4. Open in Browser
- [http://localhost:3000/](http://localhost:3000/) → Home Page  
- [http://localhost:3000/aboutus](http://localhost:3000/aboutus) → About Us Page  
- [http://localhost:3000/contactus](http://localhost:3000/contactus) → Contact Us Page  

---

## 🛠 Example Code (server.js)

```js
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.write()//inside will contain whole html code for home
  } else if (req.url === "/aboutus") {
      res.write()//inside will contain whole html code for aboutus
  } else if (req.url === "/contactus") {
       res.write()//inside will contain whole html code for contact
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

---

## 📌 Features

- ✅ Pure Node.js (no external libraries required)  
- ✅ Serves static HTML files  
- ✅ Clean routing for Home, About Us, and Contact Us  
- ✅ Handles 404,500 errors gracefully  

---

## 🔮 Future Improvements

- Serve CSS, JavaScript, and image files (static assets)  
- Add logging for requests  
- Enable query parameter handling  
- Add support for POST requests (e.g., contact form)  
- Convert to use a templating engine (EJS, Handlebars, etc.)  

---

## 📜 License

This project is open-source and available under the "ThreeTiger.Inc"
You are free to use, modify, and distribute it for personal or commercial purposes.  

---