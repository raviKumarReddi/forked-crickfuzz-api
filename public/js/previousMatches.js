const boxTemplate = document.querySelector('#usable').innerHTML
const $Row = document.querySelector('.row')

// fetch('/scorecard?id='+id.toString(10)).then((response)=>{
//   response.json().then((resp)=>{
//       if(resp.error){
//         document.querySelector('.bottom').remove()
//         document.querySelector('.bottom').remove()
//         table.remove()
//         $title.style.display='none'
//           return;
//       }
//     //   console.log(resp)
//       const batting = resp.batting
//       const bowling = resp.bowling
//       addBattingTable(batting[0].scores,batting[0].title)
//   }).catch((err)=>{
//       console.log(err)
//   })
// })

console.log('firing oldmatches?id=false')
fetch('/oldmatches?id=false').then((response)=> {
    response.json().then((data)=>{
        // const data = resp.data;
        if(data.error){
            return console.log('error')
        }
        data.forEach((match)=>{
            // match["unique_id"] = "1034809"
            const html = Mustache.render(boxTemplate,{
                                 description:match["description"],
                                 matchid:match["unique_id"],
                                 myid:match["unique_id"]
           })
            $Row.insertAdjacentHTML('beforeend',html)
        })
        // console.log(document.getElementById("usable"))
        document.getElementById("usable").innerHTML = ""
     }).catch((err)=>{
         console.log('error')
         console.log(err)
     })
})

