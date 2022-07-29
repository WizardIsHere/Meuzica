const express = require('express');
const app = express();
const port = 8001;

const mariadb = require('mariadb');




app.get('/', (req, res) => {
    res.send('Hello World!');}
    );

app.listen(port, ()=>{
    console.log("Server listening on port " + port);
})

root