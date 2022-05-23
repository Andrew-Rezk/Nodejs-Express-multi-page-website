// import required files
const express = require ("express");
const path = require("path"); //path is a built in node module
const app = express();  // create an express app and store in app variable 
const port = process.env.PORT || 8888;  // set up a port number

// Set up paths to important files and folders
app.set("views", path.join(__dirname, "views")); //set Express views to use <app_directory>/views
app.set("view engine", "pug");

//set up path for static files (ex. css and client side js)
app.use(express.static(path.join(__dirname, "public")));

// set up page routes
app.get("/", (request, response) => {
    response.render("index", { title: "Home"} );
});

app.get("/products", (request, response) => {
    response.render("products", { title: "Products"} );
});

app.get("/about", (request, response) => {
    response.render("about", { title: "About Us"} );
});

// set up server listener
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});