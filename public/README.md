# Simple Node.js HTTP Server

This is a basic HTTP server built with Node.js that serves static HTML files from the `public` folder based on the URL paths `/`, `/home`, `/aboutus`, and `/contactus`.

## Features

- Serves HTML files from the `public` directory
- Handles routing for home, about us, and contact us pages
- Returns a 404 page for undefined routes
- Handles internal server errors when files are missing or unreadable

## Getting Started

### Prerequisites

- Node.js installed on your machine (download from [nodejs.org](https://nodejs.org))

### Installation

1. Clone this repository or download the source code.
2. Ensure you have a `public` folder with HTML files: `home.html`, `aboutus.html`, `contactus.html`.
3. Open a terminal and navigate to the project folder.

### Running the Server

Run the following command to start the server:

node server.js

The server listens on port `4000` by default.

### Accessing the Server

Open a web browser and navigate to:

- `http://localhost:4000/` or `http://localhost:4000/home` - Home page
- `http://localhost:4000/aboutus` - About Us page
- `http://localhost:4000/contactus` - Contact Us page

## File Structure
/project-root
/public
home.html
aboutus.html
contactus.html
server.js
README.md

## Troubleshooting

- If you get `localhost refused to connect`, ensure no other process is using port 4000.
- Ensure your HTML files exist in the `public` directory.
- Check firewall or antivirus settings if your browser cannot connect.

## License

This project is open source and available under the MIT License.

