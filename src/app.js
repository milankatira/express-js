//~import
const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port="8000"

//?pass 2 parameters 1.routes,2.callback

app.get(routes,callback)

//~html passing 
app.get("/",(req,res)=>{
res.send("<h1>hello from express</h1>")
});

//!json parsing
//instans of send we can also used json output will be same 
app.get('/json',(req,res)=>{
    res.send([
    {
        id:1,
        name:"milan"         
    },
    {
        id:2,
        name:"katira"   
    }
    ])

});


//?html file routing using built in middleware

const staticPath=path.join(__dirname,"../public")

//!app.use(express.static(staticPath));
const templatePath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")

//!set the view template engine
app.set("view engine","hbs");

//!change the views dir name
app.set("views",templatePath);

hbs.registerPartials(partialsPath);


//templates engine route and rendering hbs file 

//here top to bottom appproach followed so only first file is render here
app.get("",(req,res)=>{
    res.render('index.hbs')
});

app.get("/about",(req,res)=>{
    res.render('index.hbs')
});

// app.get("/",(req,res)=>{
// res.send("<h1>hello from express</h1>")
// });

app.get('*',(req,res)=>{
res.render("404")
});

//error message inside about page
app.get('/about/*',(req,res)=>{
    res.render("404")
    });

//listen
app.listen(port,()=>{
    console.log(`listening on ${port}`);
});


