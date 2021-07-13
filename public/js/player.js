// const resp = {
//     pid: 35320,
//     profile: "\n\nSachin Tendulkar has been the most complete batsman of his time, the most prolific runmaker of all time, and arguably the biggest cricket icon the game has ever known. His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to geniuses - anticipation. If he didn't have a signature stroke - the upright, back-foot punch comes close - it's because he was equally proficient at each of the full range of orthodox shots (and plenty of improvised ones as well) and can pull them out at will.  \n\n",
//     imageURL: "https://www.cricapi.com/playerpic/35320.jpg",
//     battingStyle: "Right-hand bat",
//     bowlingStyle: "Right-arm offbreak, Legbreak googly",
//     majorTeams: "India,Asia XI,Mumbai,Mumbai Indians,Yorkshire",
//     currentAge: "44 years 186 days",
//     born: "April 24, 1973, Bombay (now Mumbai), Maharashtra",
//     fullName: "Sachin Ramesh Tendulkar",
//     name: "Sachin Tendulkar",
//     country: "India",
//     playingRole: "Top-order batsman",
//     data: {
//       bowling: {
//         listA: {
//           4: "4",
//           5: "2",
//           10: "0",
//           Ave: "42.17",
//           BBI: "5/32",
//           BBM: "5/32",
//           Balls: "10230",
//           Econ: "4.97",
//           Inns: "",
//           Mat: "551",
//           Runs: "8478",
//           SR: "50.8",
//           Wkts: "201"
//         },
//         firstClass: {
//           4: "",
//           5: "0",
//           10: "0",
//           Ave: "61.74",
//           BBI: "3/10",
//           BBM: "",
//           Balls: "7605",
//           Econ: "3.45",
//           Inns: "",
//           Mat: "310",
//           Runs: "4384",
//           SR: "107.1",
//           Wkts: "71"
//         },
//         T20Is: {
//           4: "0",
//           5: "0",
//           10: "0",
//           Ave: "12.00",
//           BBI: "1/12",
//           BBM: "1/12",
//           Balls: "15",
//           Econ: "4.80",
//           Inns: "1",
//           Mat: "1",
//           Runs: "12",
//           SR: "15.0",
//           Wkts: "1"
//         },
//         ODIs: {
//           4: "4",
//           5: "2",
//           10: "0",
//           Ave: "44.48",
//           BBI: "5/32",
//           BBM: "5/32",
//           Balls: "8054",
//           Econ: "5.10",
//           Inns: "270",
//           Mat: "463",
//           Runs: "6850",
//           SR: "52.2",
//           Wkts: "154",
//         },
//         tests: {
//           4: "0",
//           5: "0",
//           10: "0",
//           Ave: "54.17",
//           BBI: "3/10",
//           BBM: "3/14",
//           Balls: "4240",
//           Econ: "3.52",
//           Inns: "145",
//           Mat: "200",
//           Runs: "2492",
//           SR: "92.1",
//           Wkts: "46",
//         }
//       },
//       batting: {
//         listA: {
//           4: "",
//           6: "",
//           50: "114",
//           100: "60",
//           Ave: "45.54",
//           BF: "",
//           Ct: "175",
//           HS: "200*",
//           Inns: "538",
//           Mat: "551",
//           NO: "55",
//           Runs: "21999",
//           SR: "",
//           St: "0"
//         },
//         firstClass: {
//           4: "",
//           6: "",
//           50: "116",
//           100: "81",
//           Ave: "57.84",
//           BF: "",
//           Ct: "186",
//           HS: "248*",
//           Inns: "490",
//           Mat: "310",
//           NO: "51",
//           Runs: "25396",
//           SR: "",
//           St: "0"
//         },
//         T20Is: {
//           4: "2",
//           6: "0",
//           50: "0",
//           100: "0",
//           Ave: "10.00",
//           BF: "12",
//           Ct: "1",
//           HS: "10",
//           Inns: "1",
//           Mat: "1",
//           NO: "0",
//           Runs: "10",
//           SR: "83.33",
//           St: "0"
//         },
//         ODIs: {
//           4: "2016",
//           6: "195",
//           50: "96",
//           100: "49",
//           Ave: "44.83",
//           BF: "21367",
//           Ct: "140",
//           HS: "200*",
//           Inns: "452",
//           Mat: "463",
//           NO: "41",
//           Runs: "18426",
//           SR: "86.23",
//           St: "0",
//         },
//         tests: {
//           4: "",
//           6: "69",
//           50: "68",
//           100: "51",
//           Ave: "53.78",
//           BF: "",
//           Ct: "115",
//           HS: "248*",
//           Inns: "329",
//           Mat: "200",
//           NO: "33",
//           Runs: "15921",
//           SR: "",
//           St: "0"
//         }
//       }
//     }
//   }
  document.getElementById('entire').style.display = 'none'
    fetch('/findmyplayer').then((response)=>{
      response.json().then((resp)=>{
        if(resp.error || !resp){
            console.log(resp.error)
              return;
          }
          document.getElementById('entire').style.display = ''
        console.log(resp)
                document.getElementById('image').src = resp['imageURL']
        document.getElementById('rightTitle').firstElementChild.innerHTML = resp['name']
        document.getElementById('rightTitle').lastElementChild.innerHTML = resp['country']
        
        const batTable = document.getElementById('battingTable')
        const table = document.createElement('table')
        table.className = 'personalTable'
        const bowlTable = document.getElementById('bowlingTable')
        
        const arr = ['fullName','born','currentAge','playingRole','battingStyle','bowlingStyle','majorTeams']
        const left = ['full name','born','age','playing role','batting style','bowling style','major teams']
        for(i=0;i<7;i++)
        {
            const row = table.insertRow(i)
            const cella = row.insertCell(0)
            cella.className = 'left'
            cella.innerHTML = left[i]
            const cellb = row.insertCell(1)
            cellb.className = 'right'
            cellb.innerHTML = resp[arr[i]]
        }
        document.getElementById('personalInfo').appendChild(table)
        document.getElementById('momz').lastElementChild.innerHTML = resp['profile']
        
        
        var Left = ['tests','ODIs','T20Is','listA']
        const varLeft = ['Test','ODI','T20I','ListA']
        
        if(!resp.data.batting.tests) Left[0] = 'firstClass'
        const bat = ['Mat','Inns','NO','Runs','HS','Ave','BF','SR','100','50','4s','6s']
        for(i=0;i<4;i++)
        {
            const row = batTable.insertRow(i+1)
            for(j=0;j<13;j++)
            {
            const cell = row.insertCell(j)
            if(j === 0)
            {
            cell.style.fontWeight = 'bold'
            cell.innerText = varLeft[i]
            }
            else
            {
                var t =resp.data.batting[Left[i]][bat[j-1]]
                if(!t) t = '--'
                cell.innerText = t
            }
            }
        }
        
        
        const bowl = ['Mat','Inns','Balls','Runs','Wkts','BBI','BBM','Ave','Econ','SR','4W','5W','10W']
        for(i=0;i<4;i++)
        {
            const row = bowlTable.insertRow(i+1)
            for(j=0;j<14;j++)
            {
            const cell = row.insertCell(j)
            if(j === 0)
            {
            cell.style.fontWeight = 'bold'
            cell.innerText = varLeft[i]
            }
            else
            {
                var t =resp.data.bowling[Left[i]][bowl[j-1]]
                if(!t) t = '--'
                cell.innerText = t
                console.log(t,bowl[j-1])
            }
            }
        }
         })
      })
  