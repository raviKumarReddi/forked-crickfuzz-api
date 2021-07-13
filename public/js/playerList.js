const playerForm = document.querySelector('form')
const search =  document.querySelector('input')

//  const data = [{pid: 50626, fullName: "Senerath Seneviratne", name: "Senerath Seneviratne"},
//  {pid: 54776, fullName: "Chamani Roshini Seneviratna", name: "Chamani Seneviratna"},
//  {pid: 253802, fullName: "Virat Kohli", name: "Virat Kohli"},
//  {pid: 434225, fullName: "Ishani Seneviratne", name: "Ishani Seneviratne"},
//  {pid: 720465, fullName: "Virat Binod Singh", name: "Virat Singh"},
//  {pid: 843875, fullName: "Dasun Senevirathna", name: "Dasun Senevirathna"},
//  {pid: 962201, fullName: "Wasalamudiyanselage Dulanjana Seneviratne", name: "Dulanjana Seneviratne"},
//  {pid: 1135068, fullName: "Senaviratne Yadage Chenutha Kavinda Wickramasinghe", name: "Chenutha Wickramasinghe"},
//  {pid: 1137944, fullName: "Dulanjan Senaviratne", name: "Dulanjan Senaviratne"},
//  {pid: 1210286, fullName: "Kalindu Senaviratna", name: "Kalindu Senaviratna"}]


playerForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  document.getElementById('container').innerHTML =""
  fetch('https://cricapi.com/api/playerFinder?apikey=6naQbZX60FgYHKtyZzGfLK8uPH03&name='+search.value).then((response)=>{
    response.json().then((resp)=>{
      console.log(resp)
      const count = resp.data.length
      const data = resp.data
      console.log(data)
      var ul = document.createElement('ul')
      for(i=0;i<count;i++)
      {
        var li = document.createElement('li')
        var anchor = document.createElement('a')
        var txt = document.createTextNode(data[i].name)
        anchor.appendChild(txt)
        anchor.href = `/player?id=${data[i].pid}`
        li.appendChild(anchor)
        ul.appendChild(li)
      }
      document.getElementById('container').appendChild(ul)
    })
  })
 })


 
  // var values = ["dog", "cat", "parrot", "rabbit"];

  // var select = document.createElement("select");
  // select.name = "pets";
  // select.id = "pets"

  // for (const val of values)
  // {
  //     var option = document.createElement("option");
  //     option.value = val;
  //     option.text = val.charAt(0).toUpperCase() + val.slice(1);
  //     select.appendChild(option);
  // }

  // var label = document.createElement("label");
  // label.innerHTML = "Choose your pets: "
  // label.htmlFor = "pets";

  // document.getElementById("container").appendChild(label).appendChild(select);
