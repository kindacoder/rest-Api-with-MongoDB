var route=require('express').Router();
const Ninja=require('../models/ninja');

//get the ninjas
route.get('/ninjas',function(req,res,next){

  Ninja.geoNear({type:'Point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
  {
    maxDistance:100000,spherical:true}
  ).then(function(ninjas){
    res.send(ninjas);
  }).catch(next);


})

// add a new ninja in database
route.post('/ninjas',function(req,res,next){
// var ninja =new Ninja(req.body);
// ninja.save()
Ninja.create(req.body).then(function(ninja){
  res.send(ninja);
}).catch(next);
res.render('main')

})


///modify or update the specific ninja in app-

route.put('/ninjas/:id',function(req,res,next){
  Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    ///find updated ninja and then send it back to the client-
    Ninja.findOne({_id:req.params.id}).then(function(ninja){
      res.send(ninja)
    })
})
})


///delete a specific ninja in database--

route.delete('/ninjas/:id',function(req,res,next){
  // Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
  Ninja.findByIdAndRemove(req.params.id).then(function(ninja){
    res.send(ninja);
  })

})

module.exports=route;
