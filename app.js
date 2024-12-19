const express = require('express');
const path = require('path');
const app = express()
app.use(express.static(path.join(__dirname, "web")));
app.listen(5780 , () => {
    console.log('starting ....')
})