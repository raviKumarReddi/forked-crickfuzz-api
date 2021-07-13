const request = require('request')

const matches = (callback)=>{
    const matchesUrl = process.env.MATCHES_API_KEY
    //'https://cricapi.com/api/matches?apikey=6naQbZX60FgYHKtyZzGfLK8uPH03'

    request({url:matchesUrl,json:true},(error,response)=>{
        if(error){
           // console.log('matches npt found')
            return callback('Unable to fetches matches data',undefined)
        }else{
            //console.log('matches found')
            callback(undefined,response.body.matches)
        }
    })
}

const scorecard = (id,callback)=>{
    const scorecardUrl = process.env.SCORECARD_API_KEY+'='+id.toString(10)
    //'https://cricapi.com/api/fantasySummary?apikey=6naQbZX60FgYHKtyZzGfLK8uPH03&unique_id='+id.toString(10)
    //+id.toString(10)
    //https://cricapi.com/api/fantasySummary?apikey=TGL6XDHgcaMsBT3u4RByGjF0vEX2&unique_id=1034809
     console.log(scorecardUrl)
    console.log("im in scorecard")
    request({url:scorecardUrl,json:true},(error,response)=>{
        if(error || response.error){
            return callback('Unable to fetch scorecard',undefined)
        }else{
             //  console.log(response.body.data)
            callback(undefined,response.body.data)
        }
    })
}

const oldMatches = (callback)=>{
    const oldMatchesUrl = process.env.OLDMATCHES_API_KEY
    //'https://cricapi.com/api/cricket?apikey=6naQbZX60FgYHKtyZzGfLK8uPH03'
    request({url:oldMatchesUrl,json:true},(error,response)=>{
        if(error || response.error){
            return callback('Unable to fetch scorecard',undefined)
        }else{
            // console.log('response successful')
            // console.log(response.body.data)
            callback(undefined,response.body.data)
        }
    })
}

const playerFinder =(id,callback)=>{
   const playerfinderUrl = process.env.PLAYERFINDER_API_KEY+'='+id
   //'https://cricapi.com/api/playerStats?apikey=6naQbZX60FgYHKtyZzGfLK8uPH03&pid='+id
   //pid=35320
   request({url:playerfinderUrl,json:true},(error,response)=>{
    //    console.log(playerfinderUrl)
       if(error){
           return callback('Unable to fetch data',undefined)
       }
       else{
        //    console.log(response)
           callback(undefined,response.body)
       }
   })
}

module.exports ={
                matches,
                scorecard,
                oldMatches,
                playerFinder
} 