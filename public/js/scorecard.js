//1247039
const table = document.getElementsByClassName('table')
const btable = document.getElementsByClassName('btable')
const $header = document.getElementById('header')
const $title = document.getElementsByClassName('title')
const boxTemplate = document.getElementById('overal').innerHTML
const squadTemplate = document.getElementById('squad').innerHTML

const arr =["batsman","dismissal","R","B","4s","6s","SR"]
const barr = ["bowler","O" ,"M","R","W","Econ"]

const fillTable =(scores,title,bscores,k)=>{
  var wkts = 0,balls = 0,total = 0

  $title[k].innerText = title
    const count = scores.length
    let i = 2;
    for(;i<=count + 1;i++){
        const row =table[k].insertRow(i)
        if(scores[i-2][arr[1]] !== 'not out')
          wkts += 1 
        total += scores[i-2][arr[2]]
        balls +=scores[i-2][arr[3]]
        for(j=0;j<7;j++){
            const cell =row.insertCell(j)
            cell.innerHTML = scores[i-2][arr[j]]
            if(j > 1){
             cell.className = 'myclass'
            }
         }
    }
    const lrow = table[k].insertRow(i)
    lrow.insertCell(0).innerHTML ='total'
    for(j=1;j<6;j++)
        lrow.insertCell(j).innerHTML = "" 
    var overs = Math.floor (balls/6)
    var rem = balls%6
    console.log(balls, overs, rem)
    lrow.insertCell(6).innerHTML = `${total}(${wkts} wkts, ${overs}.${rem} Ov)`
    // 311 (7 wkts, 105.3 Ov)
    const bcount = bscores.length
    for(i=1;i<=bcount;i++){
      const row = btable[k].insertRow(i)
      for(j=0;j<6;j++){
        const cell = row.insertCell(j)
        cell.innerHTML = bscores[i-1][barr[j]]
        if(j>1){
          cell.className = 'myClass'
        }
      }
    }
}

let obj = {}
const func = (players)=>{
  const c = players.length
  for(i=1;i<=c;i++)
    obj[`p${i}`] = players[i-1].name
  return obj
}

const Squad = (teams,mom)=>{
  console.log('im in squad')
  if(!mom) document.getElementById('forDisplay').style.display  = 'none' 
  document.getElementById('mom').innerText = mom
  const html = Mustache.render(squadTemplate,{
    team:teams[0].name,
    ...func(teams[0].players)
  })
  const bhtml = Mustache.render(squadTemplate,{
    team:teams[1].name,
    ...func(teams[1].players)
  })
  // document.getElementById('last').insertAdjacentElement('beforeend',document.getElementById('mom'))
  document.getElementById('last').insertAdjacentHTML('beforeend',html)
  document.getElementById('last').insertAdjacentHTML('beforeend',bhtml)
}

//"winner_team": "Karachi Kings",
document.getElementById('overal').style.display = 'none'
document.getElementById('forDisplay').style.display  = 'none'
fetch('/scorecard').then((response)=>{
  response.json().then((resp)=>{
    console.log('im in response')
      if(resp.error || resp.batting.length === 0){
        document.getElementById('overal').style.display = 'none'
        document.getElementById('forDisplay').style.display = 'none'
        document.getElementById('error').style.display = ''
        console.log(resp.error)
          return;
      }
      document.getElementById('overal').style.display = '' 
      document.getElementById('forDisplay').style.display  = ''
      document.getElementById('error').style.display = 'none'
         let count = resp.batting.length 
         for(i=0;i<count -1;i++)
           document.getElementById('last').insertAdjacentHTML('beforeend',boxTemplate)
      const batting = resp.batting
      const bowling = resp.bowling
      for(i=0;i<count;i++)
        fillTable(batting[i].scores,batting[i].title,bowling[i].scores,i)
        if(resp["winner_team"])
          document.getElementById('wtitle').innerText = resp["winner_team"] + ' won the match'
    Squad(resp.team,resp["man-of-the-match"].name)
  }).catch((err)=>{
      console.log(err)
  })
})
// teams =  [
//   {
//   name: "India",
//   players: [
//   {
//   pid: "237095",
//   name: "M Vijay"
//   },
//   {
//   pid: "28763",
//   name: "G Gambhir"
//   },
//   {
//   pid: "32540",
//   name: "CA Pujara"
//   },
//   {
//   pid: "253802",
//   name: "V Kohli"
//   },
//   {
//   pid: "31107",
//   name: "A Mishra"
//   },
//   {
//   pid: "277916",
//   name: "AM Rahane"
//   },
//   {
//   pid: "26421",
//   name: "R Ashwin"
//   },
//   {
//   pid: "279810",
//   name: "WP Saha"
//   },
//   {
//   pid: "234675",
//   name: "RA Jadeja"
//   },
//   {
//   pid: "376116",
//   name: "UT Yadav"
//   },
//   {
//   pid: "481896",
//   name: "Mohammed Shami"
//   }
//   ]
//   },
//   {
//   name: "England",
//   players: [
//   {
//   pid: "11728",
//   name: "AN Cook"
//   },
//   {
//   pid: "632172",
//   name: "H Hameed"
//   },
//   {
//   pid: "303669",
//   name: "JE Root"
//   },
//   {
//   pid: "521637",
//   name: "BM Duckett"
//   },
//   {
//   pid: "8917",
//   name: "MM Ali"
//   },
//   {
//   pid: "311158",
//   name: "BA Stokes"
//   },
//   {
//   pid: "297433",
//   name: "JM Bairstow"
//   },
//   {
//   pid: "247235",
//   name: "CR Woakes"
//   },
//   {
//   pid: "244497",
//   name: "AU Rashid"
//   },
//   {
//   pid: "349853",
//   name: "ZS Ansari"
//   },
//   {
//   pid: "10617",
//   name: "SCJ Broad"
//   }
//   ]
//   }
// ]
// Squad(teams,"Virat kohli")

