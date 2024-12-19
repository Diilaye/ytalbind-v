const express = require('express');
const path = require('path');
const app = express()
app.use(express.static(path.join(__dirname, "web")));
app.get('/' , (req,res) => {
    try {
        const filePath = path.join(__dirname, 'web', 'index.html');
        let html = fs.readFileSync(filePath, 'utf-8');
        res.send(html);

    } catch (error) {
        const filePath = path.join(__dirname, 'web', 'index.html');
        let html = fs.readFileSync(filePath, 'utf-8');
        res.send(html);
    }
});
app.listen(5780 , () => {
    console.log('starting ....')
})