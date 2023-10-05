const express = require("express");
const path = require("path");

const app = express.default();
const port = process.env.PORT || 3001;

// Serve static files from the 'dist' folder (assuming Vite build output folder)
app.use(express.static(path.join(__dirname, "dist")));

// Serve the index.html file for all requests
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});