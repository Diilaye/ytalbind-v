const express = require('express');
const path = require('path');
const app = express()
app.use(express.static(path.join(__dirname, "web")));
app.listen(4100 , () => {
    console.log('starting ....')
})