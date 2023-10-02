const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://user1:Aditya9235%40@cluster0.16grfrm.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});



const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.get('/' , (req,res) => { 
    res.json({"Message": "Server is running: D"})
})

let PORT = 8080

require('./app/routes/app.routes.js')(app);

app.listen(PORT , () => {
    console.log(`Server is listening on port ${PORT}`)
})




