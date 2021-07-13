const boxTemplate = document.querySelector('#usable').innerHTML
const $Row = document.querySelector('.row')

fetch('https://cricapi.com/api/matches?apikey=6naQbZX60FgYHKtyZzGfLK8uPH03').then((response)=> {
    response.json().then((resp)=>{
        const matches = resp.matches
        for(i=0;i<100;i++){
            const match = matches[i]
            if(match.matchStarted) continue;
            // console.log(match)
            const date = match["dateTimeGMT"].slice(0,10)
            const time = match["dateTimeGMT"].slice(11,19)

            const html = Mustache.render(boxTemplate,{
                        team1:match["team-1"],
                        team2:match["team-2"],
                        type:match.type,
                        time,
                        date
            })
            $Row.insertAdjacentHTML('beforeend',html)
        }
        document.getElementById("usable").innerHTML = ""
      })
})

