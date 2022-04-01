const express=require('express');
const app=express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`);
})
/*app.get('/about')
/* app.get('/contact')
app.get('/posts')*/

app.use(req,res=>{
    res.render('404');
})
app.use((error,req,res,next)=>{
    res.render('500');
})



app.listen(3000);