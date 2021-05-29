const express = require("express");
const authorRouter=express.Router();
function router(nav){
var authors=[
    {
        work: "The power of your subconsious mind",
        name: "Joseph Murphy",
        country: "Ireland",
        img: "joseph.jpg"
    },
    {
        work: "The Alchemist",
        name: "Paulo coelho",
        country: "Brazil",
        img: "paulo.jpg"
    },
    {
        work: "Christmas Carol",
        name: "Charles Dickens",
        country: "United Kingdom",
        img: "charles.jpg"
    },
    {
        work: "Adventures of Huckleberry Fin",
        name: "Mark Twain",
        country: "United States",
        img: "MarkTwain.jpg"
    },
    {
        work: "Uncle Tom's cabin",
        name: "Harriet Beecher Stowe",
        country: "United States",
        img: "Beecher.jpg"
    },
    {
        work: "Treasure Island",
        author: "Robert Louis Stevenson",
        country: "United Kingdom",
        img: "Robert.jpg"
    }
]
authorRouter.get('/',function(req,res){
    res.render('authors',{
        nav,
    title:'Library',
    authors
});
});
authorRouter.get('/:ic',function(req,res)
{
    const ic=req.params.ic
    res.render('author',
    {
        nav,
    title:'Library',
    author: authors[ic]
    });
});
return authorRouter;
}
module.exports=router;