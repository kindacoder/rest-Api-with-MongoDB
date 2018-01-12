var express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

///acquiring routes-
var apiRoute=require('./routes/api');

///set up express app-
const app=express();


//serve static files-

app.use(express.static('public'));


///connect to mongodb
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise=global.Promise;   ///?????



//bodyParser middleware to parse the body-
app.use(bodyParser.json());

//use route for specific route-
app.use('/api',apiRoute);


//error handling-
app.use(function(err,req,res,next){
  // console.log(err);
  res.status(422).send({error:err._message})
})

//listen to requests-
app.listen(3000,function(){
  console.log('Listening to port 3000');
})
