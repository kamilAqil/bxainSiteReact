const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'../','bxain_front_end', 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'bxain_front_end', 'build', 'index.html'));
});



app.listen(9000,()=>{
    console.log('app listening on port 9000');
});