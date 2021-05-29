const express = require("express");
const booksRouter=express.Router();
function router(nav){
var books=[
    {
        title: "The power of your subconsious mind",
        author: "Joseph Murphy",
        genre: "Self help",
        img: "TPOSM.jpg"
    },
    {
        title: "The Alchemist",
        author: "Paulo coelho",
        genre: "Quest",
        img: "TA.jpg"
    },
    {
        title: "Christmas Carol",
        author: "Charles Dickens",
        genre: "Classic",
        img: "CC.jpeg"
    },
    {
        title: "Adventures of Huckleberry Fin",
        author: "Mark Twain",
        genre: "Classic",
        img: "AOHF.jpg"
    },
    {
        title: "Uncle Tom's cabin",
        author: "Harriet Beecher Stowe",
        genre: "Classic",
        img: "UTC.jpg"
    },
    {
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        genre: "Classic",
        img: "TI.jpg"
    }
]
booksRouter.get('/',function(req,res){
    res.render('books',{
        nav,
    title:'Library',
    books
});
});
booksRouter.get('/:id',function(req,res)
{
    const id=req.params.id
    res.render('book',
    {
        nav,
    title:'Library',
    book: books[id]
    });
});
return booksRouter;
}
module.exports=router;