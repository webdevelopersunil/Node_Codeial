const express = require('express');
const app   =   express();
const port  =   8000;


// Set up default the template engine ejs
app.set('view engine', 'ejs');
app.set('views','./views');


//use express routes
app.use('/', require('./routes'));
app.use('/users', require('./routes/users'));



app.listen(port, function(err){
    if(err){
        // console.log('err', err);
        console.log(`Error during runnign server : ${err}`); // This is called interpolation method to use it with stabs
    }

    console.log(`Server is running on port : ${port}`);
});
