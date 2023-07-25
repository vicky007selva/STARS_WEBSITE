const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from('<h2>Test String</h2>'));
    console.log("hello this is form server ")
})

app.listen(5173)