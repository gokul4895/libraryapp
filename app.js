const express = require("express");
const app=express();
const port=process.env.PORT || 5000;
const nav=[{
    link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'
},
{link:'/login',name:'Login'},
{link:'/sign',name:'Sign-UP'},
{link:'/admin',name:'ADD BOOK'},
{link:'/admins',name:'ADD AUTHOR'}
];
    const booksRouter = require("./src/routes/bookRoutes")(nav);
    const authorRouter = require("./src/routes/authorRoutes")(nav);
    const signRouter = require("./src/routes/signRoutes")(nav);
    const loginRouter = require("./src/routes/loginroutes")(nav);
    const adminRouter = require("./src/routes/adminRoutes")(nav);
    const adminsRouter = require("./src/routes/adminsRoutes")(nav);
    app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views', __dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/sign',signRouter);
app.use('/login',loginRouter);
app.use('/admin',adminRouter);
app.use('/admins',adminsRouter);
app.get('/',function(req,res){
    res.render('index',{
      nav,  
    title:'Library'
});
});

app.listen(port,()=>{console.log("server ready at"+port)});