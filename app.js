const express = require('express');

const app = express();

app.get('/app', (req, res) => {
    res.send('hello boss')
})


app.listen(4000, () => {
    console.log("App is running at port 4000")
})