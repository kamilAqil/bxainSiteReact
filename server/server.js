const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../', 'public')));
var PORT = process.env.PORT || 8080;


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});


app.listen(process.env.PORT || 8080,()=>{
    console.log('listening on port',80);

});