const express = require('express')
const app = express()
app.use(express.static('web')) //serve our files in public statically
app.listen(4100 , () => {
    console.log('starting ....')
})