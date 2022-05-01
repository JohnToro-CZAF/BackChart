const mongoose = require('mongoose')

const url = `mongodb+srv://DKER:Phuong2003@cluster0.n8bg2.mongodb.net/Login?retryWrites=true&w=majority`;

//Connect to Mongodb Atlats
const connect = () => mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


    
module.exports = {connect};