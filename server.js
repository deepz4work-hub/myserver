const http = require("http"); //importing module


const server = http.createServer((req, res) => {//creating server
  if (req.method == "GET" && (req.url == "/" || req.url == "/home")) {//api routing for "GET" and default url to be home
    res.writeHead(200, { "Content-Type": "text/html" });//status code
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home | My Website</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8f9fa;
    }
    .hero {
      background: linear-gradient(135deg, #007bff, #00c6ff);
      color: white;
      text-align: center;
      padding: 100px 20px;
    }
    .hero h1 {
      font-size: 3rem;
      font-weight: bold;
    }
    .hero p {
      font-size: 1.25rem;
      margin-top: 10px;
    }
    .section {
      padding: 60px 20px;
    }
    footer {
      background: #212529;
      color: #aaa;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">My Website</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/aboutus">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="/contactus">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>Welcome to My Website</h1>
      <p>Your one-stop place for amazing products and services.</p>
      <a href="/aboutus" class="btn btn-light btn-lg mt-3">Learn More</a>
    </div>
  </section>

  <!-- Features Section -->
  <section class="section">
    <div class="container text-center">
      <h2 class="mb-4">Why Choose Us?</h2>
      <div class="row">
        <div class="col-md-4">
          <h4>✨ Quality</h4>
          <p>We provide only the best products and services.</p>
        </div>
        <div class="col-md-4">
          <h4>⚡ Fast</h4>
          <p>Quick delivery and top-notch performance every time.</p>
        </div>
        <div class="col-md-4">
          <h4>🤝 Support</h4>
          <p>24/7 customer support to help you with anything.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 ThreeTigers.inc. All rights reserved.</p>
  </footer>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`);//displayed data
    return res.end();
  } else if (req.url == "/aboutus") {//routing to aboutus
    res.writeHead(200, { "Content-Type": "text/html" });//status code
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | My Website</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { background: #f8f9fa; font-family: "Segoe UI", sans-serif; }
    .header { background: linear-gradient(135deg, #00c6ff, #007bff); color: white; padding: 80px 20px; text-align: center; }
    .section { padding: 60px 20px; }
    footer { background: #212529; color: #aaa; padding: 20px; text-align: center; }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">My Website</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link active" href="/aboutus">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="/contactus">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Header -->
  <div class="header">
    <h1>About Us</h1>
    <p>Learn more about our journey and vision.</p>
  </div>

  <!-- Content -->
  <div class="section container">
    <h2>Who We Are</h2>
    <p>We are a passionate team dedicated to delivering high-quality products and services. Our mission is to make life easier and more enjoyable for our customers.</p>
    <h2 class="mt-4">Our Values</h2>
    <ul>
      <li>🌟 Excellence in everything we do</li>
      <li>🤝 Building trust with customers</li>
      <li>🚀 Constant innovation and improvement</li>
    </ul>
  </div>

  <footer>
    <p>&copy; 2025 My ThreeTigers.Inc. All rights reserved.</p>
  </footer>
`);//displayed data
    return res.end();
  } else if (req.url == "/contact") {//routing to contact
    res.writeHead(200, { "Content-Type": "text/html" });//status code
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us | My Website</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { background: #f8f9fa; font-family: "Segoe UI", sans-serif; }
    .header { background: linear-gradient(135deg, #007bff, #00c6ff); color: white; padding: 80px 20px; text-align: center; }
    .section { padding: 60px 20px; }
    footer { background: #212529; color: #aaa; padding: 20px; text-align: center; }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">My Website</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/aboutus">About Us</a></li>
          <li class="nav-item"><a class="nav-link active" href="/contactus">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Header -->
  <div class="header">
    <h1>Contact Us</h1>
    <p>We’d love to hear from you. Get in touch!</p>
  </div>

  <!-- Contact Form -->
  <div class="section container">
    <h2>Send Us a Message</h2>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Your Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Your Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email">
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Your Message</label>
        <textarea class="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>

  <footer>
    <p>&copy; 2025 My ThreeTigers.Inc. All rights reserved.</p>
  </footer>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`);//displayed data
    return res.end();
  } else {//handling routing error
    res.writeHead(404, { "Content-Type": "text/html" });//status code
    res.end("<h1>404-Page Not Found</h1>");//error display
  }
});

const PORT = 3000;

//creating server
server.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
