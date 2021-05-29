const express = require("express");
const app=express();
const port=process.env.PORT || 2000;
const nav=[{
    link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'
},
{link:'/sign',name:'Sign-UP'},
];
    const booksRouter = require("./src/routes/bookRoutes")(nav);
    const authorRouter = require("./src/routes/authorRoutes")(nav);
    const signRouter = require("./src/routes/signRoutes")(nav);
    const loginRouter = require("./src/routes/loginRoutes")(nav);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views', __dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/sign',signRouter);
app.use('/login',loginRouter);
app.get('/',function(req,res){
    res.render('index',{
      nav,  
    title:'Library'
});
});

app.listen(port,()=>{console.log("server ready at"+port)});