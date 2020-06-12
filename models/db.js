//set connection to db


const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/songDB', { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if (!err) { console.log('mongodbconnection sucessful')}
    else { console,log('Error in DB connection: ' + err) }
})

require('./song.model')