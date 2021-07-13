const boxTemplate = document.querySelector('#usable').innerHTML
const $Row = document.querySelector('.row')


console.log('hiie')
fetch('/matches').then((response)=> {
    response.json().then((data)=>{
        //  const count = data.length
        // console.log(data[0].["team-1"])
        data.forEach((match)=>{
            const date = match["dateTimeGMT"].slice(0,10)
            const time = match["dateTimeGMT"].slice(11,19)
            if(match["toss_winner_team"]=== "no toss"){
                match["toss_winner_team"] = "no team"
            }
            const html = Mustache.render(boxTemplate,{
                                 team1:match["team-1"],
                                 team2:match["team-2"],
                                 type:match.type,
                                 toss:match["toss_winner_team"],
                                 time,
                                 matchid:match["unique_id"],
                                 myid:match["unique_id"]
           })
            $Row.insertAdjacentHTML('beforeend',html)
        })
        // console.log(document.getElementById("usable"))
        document.getElementById("usable").innerHTML = ""
     }).catch((err)=>{
         console.log(err)
     })
})