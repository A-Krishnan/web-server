const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocoding=require('./coding/geocoding')
const forecasting=require('./coding/forecasting')

const app=express()
const port=process.env.PORT || 3000

const viewspath=path.join(__dirname,'../template/views')
const partialpath=path.join(__dirname,'../template/partials')
const csspath=path.join(__dirname,'../public')


 
app.use(express.static(csspath))
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)
                                


app.get('',(req,res)=>{
  res.render('index',{
      name:'Ajay',
      age:23,
      msg:'Everyone',
      title:'Weather'
  })
})

 app.get('/help',(req,res)=>{
     res.render('help',{
         name:['Ajay','Rahul'],
         status:'On Job Training',
        student:'Ajay',
        title:'Help'
     })

    
})

app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error:'Enter to address to move forward'
        })
    }
   geocoding(req.query.address,(error,{latitude,longitude,location}={})=>{
      if(error)
      {
           res.send({error})
      }
      else
      {
      
       forecasting(latitude,longitude,(error,{forecast,humidity,temperature,time,feelslike}={})=>{
         if(error)
         {
              res.send({error})
         }
         else{
           res.send({
               place:req.query.address,
               location:location,
               forecast,
               humidity:humidity,
               temperature:temperature,
               time,
               feelslike


           })
        }
       })
     }

   })

})

 app.get('/about',(req,res)=>{

     res.render('about',{
         title:'About Me',
         name:'Ajay Krishnan'
     })

 })
 
 app.get('/help/*',(req,res)=>{
       res.render('404',{
           title :'4041',
           name:'Ajay Krishnan',
           errormessage:'Help article'
       })

 })

 
app.get('*',(req,res)=>{
 
    res.render('404',{
        title:'404',
        name:'Ajay krishnan',
        errormessage:'content'
    })
})

app.listen(port,()=>{
 
    console.log('Server is on port'+ port)

})