
const express=require("express");

const app=express(); //creating server
app.get("/api/main", function (req, res) {
    res.send("<h1>Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.</h1>")
});
app.listen(6500, ()=>{
    console.log("Application is running");
});