const express = require('express')

const app = express()

// parse various different custom JSON types as JSON
app.use(express.static(__dirname +'/dist' ))

// parse an HTML body into a string
app.all('*',(req,res)=>{
    res.status(200).sendFile(__dirname+ 'dist/text/html' );
});
app.listen (process.env.PORT || 8080);