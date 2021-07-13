const express = require('express')
const path = require('path')
const {matches,scorecard,oldMatches,playerFinder} = require('./find.js')
const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))
// app.set('view engine','html');

app.get('/',(req,res)=>{
    console.log('im at home')
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


app.get('/previousMatches',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/previousMatches.html'))  
})

app.get('/playerfinder',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/playerList.html'))
})


app.get('/newmatches',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/newMatches.html'))
})

let idm  = 0
app.get('/score',(req,res)=>{
    console.log('im in score')
    idm = req.query.id
    res.sendFile(path.join(__dirname,'../public/scorecard.html'))
})

let pid = 0
app.get('/player',(req,res)=>{
    console.log('im in player')
    pid = req.query.id
    res.sendFile(path.join(__dirname,'../public/player.html'))
})



app.get('/matches',(req,res)=>{
    console.log('finding matches')
    matches((error,response)=>{
        if(error){
            res.send({error:"Unable to fetch data"})
        }
        else{
           // console.log(response)
         featuredMatches = response.filter((match)=> match.matchStarted)
         // console.log(featuredMatches)
         res.send(featuredMatches)
        }
    })
})


app.get('/findmyplayer',(req,res)=>{
   console.log('finding player')
   playerFinder(pid,(error,response)=>{
       if(error){
           res.send({error:'Unable to fetch data'})
       }
       else{
           //console.log(response)
          res.send(response)
       }
   })
})


app.get('/scorecard',(req,res)=>{
    console.log('finding scorecard')
    scorecard(idm,(error,response)=>{
        if(error || !response){
            //  console.log('error')
            res.send({error:"Unable to fetch scorecard"})
        }
        else{
            //  console.log(response)
            res.send(response)
        }
    })
})


app.get('/oldmatches',(req,res)=>{
    console.log('finding recent matches')
    oldMatches((error,response)=>{
        if(error){
            // console.log('error')
            // console.log(error)
            res.send({error:"Unable to fetch data"})
        }
        else{
             //console.log('response recieved')
            res.send(response)
        }
    })
})

app.get('*',(req,res)=>{
  res.status(404).send("<h2>Invalid URL</h2>")
})

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})