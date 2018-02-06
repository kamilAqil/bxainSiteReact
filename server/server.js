const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../', 'public')));
var PORT = process.env.PORT || 8080;


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

<<<<<<< HEAD
app.listen(PORT, ()=>{
    console.log('listening on port',PORT);
=======
app.listen(process.env.PORT || 8080,()=>{
    console.log('listening on port',8080);
>>>>>>> 4a11a0def9db2ec760e1e564c45319e1a4a04683
});