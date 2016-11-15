
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
})