const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Home Route
app.get("/", (req, res) => {
    res.send("Backend Running");
});


// Hero API
app.get("/api/hero", (req, res) => {

    res.json({
        heading: "Upskill yourself With",
        highlight: "Just One",
        subHeading: "Subscription"
    });

});


// Server

app.listen(5003, () => {
    console.log("Server running on port 5003");
});