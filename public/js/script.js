$(function(){


  let btn=$('#btn');
  let list=$("#list");
  var form=$('#form');

form.submit(function(event){
event.preventDefault();
let lng=$('#lng').val();
let lat=$('#lat').val();
  $.get(
    '/api/ninjas?lng='+lng+'&lat='+lat,
    function(data){
      console.log(data);
  for(let i=0;i<data.length;i++){
    list.append(`
        <li>
        <div class="col s4">${data[i].obj.name}</div>
        <div class="col s4">${data[i].obj.rank}</div>
        <div class="col s4">${data[i].obj.available}</div>
        </li>
      `)
  }

  })

})

})
