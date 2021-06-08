const express = require("express");
const authorsRouter=express.Router();
const Authordata=require('../model/Authordata');

function router(nav){
// var authors=[
//     {
//         work: "The power of your subconsious mind",
//         name: "Joseph Murphy",
//         country: "Ireland",
//         img: "joseph.jpg"
//     },
//     {
//         work: "The Alchemist",
//         name: "Paulo coelho",
//         country: "Brazil",
//         img: "paulo.jpg"
//     },
//     {
//         work: "Christmas Carol",
//         name: "Charles Dickens",
//         country: "United Kingdom",
//         img: "charles.jpg"
//     },
//     {
//         work: "Adventures of Huckleberry Fin",
//         name: "Mark Twain",
//         country: "United States",
//         img: "MarkTwain.jpg"
//     },
//     {
//         work: "Uncle Tom's cabin",
//         name: "Harriet Beecher Stowe",
//         country: "United States",
//         img: "Beecher.jpg"
//     },
//     {
//         work: "Treasure Island",
//         name: "Robert Louis Stevenson",
//         country: "United Kingdom",
//         img: "Robert.jpg"
//     },
//     {
//         work: "Goosebumps",
//         name: "R L Stine",
//         country: "United States",
//         img: "RLS.jpg"
//     }
// ]
authorsRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render('authors',{
            nav,
        title:'Library',
        authors
    });
    })
    
});
authorsRouter.get('/:id',function(req,res)
{
    const id=req.params.id;
    Authordata.findOne({_id: id})
    .then(function(author){
        res.render('author',
    {
        nav,
    title:'Library',
    author
    });
    })
});
return authorsRouter;
}
module.exports=router;