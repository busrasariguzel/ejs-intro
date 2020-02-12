const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
require('dotenv').config();
const users =require('./models/Users')
const port = process.env.PORT || 3000;
app.use(logger('dev'))

// app.use(express.json())
// app.use(express.urlencoded({extended: true})) // in order to get the data from the client
app.use(express.static(path.join(__dirname,  'public')))
app.get('/first', (req,res) => {

    res.render('main/home', {name:'Bill'});
});
app.get('/location/:color/:car', (req , res) => {
    const firstName = 'Busra'
    const lastName = "sariguzel"
    let places = 
    [
    {city:'Stanford', state: 'Connecticut'},
    {city:'Rockville', state: 'Maryland'},
    {city:'Barnard', state: 'Arizona'}]
    const {color,car} = req.params;

    res.render('main/location', {color , car, places , firstName, lastName})
})

    app.get('/users', (req , res) => {

    // const {name,city} = users;
    
        res.render('main/Users', {users})
    })


// .render = 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});