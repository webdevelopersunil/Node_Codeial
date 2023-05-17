const express = require('express');
const app   =   express();
const port  =   8000;

//use express routes
app.use('/', require('./routes'));






app.listen(port, function(err){
    if(err){
        // console.log('err', err);
        console.log(`Error during runnign server : ${err}`); // This is called interpolation method to use it with stabs
    }

    console.log(`Server is running on port : ${port}`);
});
