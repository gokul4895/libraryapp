const express = require('express');
const adminsRouter=express.Router();
const Authordata=require('../model/Authordata');

 function router(nav) {   
adminsRouter.get('/', function(req,res)
{
    res.render('addAuthor',{
        nav,
    title:'Library',

})
})
adminsRouter.post('/add',function(req,res){
   
    var item ={
        name: req.body.name,
        country: req.body.country,
        image: req.body.image
    }
    var author=Authordata(item);
    author.save();//saving to database
    res.redirect('/authors');
   

});
return adminsRouter;
 }
 module.exports=router;