const path=require('path')
const express=require('express')
const hbs=require('hbs')
const bodyparser = require('body-parser')

const app=express()
//config the paths
app.use(express.static(path.join(__dirname,'../public')))
const viewspath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')
  
  app.use(bodyparser.json())
  
app.use(bodyparser.urlencoded({ extended: false }))

//set up handlebars engine and view engine
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)



app.get('/home',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/help',(req,res)=>{
    res.render('help')
})

app.get('/play', (req, res) =>{
   res.render('play')
})
app.get('/api',(req,res)=>{
    res.render('api')
})

app.get('/livstation',(req,res)=>{
    res.render('livstation')
})

app.get('/trainsearch',(req,res)=>{
  res.render('trainsearch')
})

app.get('/cancel',(req,res)=>{
    res.render('cancel')
  })

  app.get('/pnr',(req,res)=>{
      res.render('pnr')
  })

  app.get('/trainplay',(req,res)=>{
    res.render('trainPlay')
})

app.get('*',(req,res)=>{
    res.render('error')
})




app.listen(3000,()=>{
    console.log("server has started on port 3000...")
})