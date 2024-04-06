const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {

    res.send('Hello Jutin and Jeep');

})

app.listen(port, () => {
    console.log("Listening on port %d", port);  
})