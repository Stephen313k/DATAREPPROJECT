const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const strConnection = 'mongodb+srv://admin:admin@cluster0.oqpl9.mongodb.net/favourites?retryWrites=true&w=majority';
//connecting mongoose
mongoose.connect(strConnection, {useNewUrlParser: true, useUnifiedTopology: true });


const Schema = mongoose.Schema;
//New schema for database
var favouriteSchema =  new Schema({
    Colour:String,
    LuckyNumber:String,
    Sport:String,
    Music:String
});

var favouriteModel = mongoose.model("fave", favouriteSchema);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/favourites', (req, res)=>{
    favouriteModel.find((err, data)=>{
        res.json(data)
    })
})

app.get('/api/favourites/:id', (req, res)=>{
    console.log(req.params.id);
    favouriteModel.findById(req.params.id, (err, data)=>{
    res.json(data);
    })
})

app.put('/api/favourites/:id', (req, res)=>{
    console.log("Update favourite" + req.params.id);
    console.log(req.body);

    favouriteModel.findByIdAndUpdate(req.params.id, {new: true},
        (err, data)=>{
            res.send(data);
    })
})
app.post('/api/favourites', (req, res) => {
    console.log(req.body);

    favouriteModel.create({
        Colour:req.body.Colour,
        LuckyNumber:req.body.LuckyNumber,
        Sport:req.body.Sport,
        Music:req.body.Music
    })
    .then()
    .catch();
    
    res.send("Data received");
    //let server know its been created
    //res.send('Favourites has been added');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})