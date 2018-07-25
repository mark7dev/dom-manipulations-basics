
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
  var content = parseInt(answerPTagWithValue.textContent)
  answerPTagWithValue.textContent = content * 2;
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector('.circle-red');
  var cirAlto = circle.offsetHeight;
  var cirLargo = circle.offsetWidth;

  cirAlto *= 2;
  circle.style.height = cirAlto + "px";

  cirLargo *= 2;
  circle.style.width = cirLargo + "px";

  if(circle.offsetHeight > 320) {
    circle.style.width = 40 + "px";
    circle.style.height = 40 + "px";
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4
  var list = document.querySelectorAll('#user-list li');
  var listParent = document.querySelector('#user-list');
  var listArray = [...list];

  listArray.forEach(function(listItem) {
    if(listItem.className === 'inactive') {
      listParent.removeChild(listItem);
    }
  })
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
  var list = document.querySelectorAll("#squares-box span")
  var listMax = document.querySelector("#squares-box")
  var arrayList2 = [...list];
  var arrayReverse = arrayList2.reverse();

  arrayReverse.forEach(function(listElement) {
    listMax.appendChild(listElement)
  })
})


document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
  var patito = document.querySelectorAll('#tasks li');
  var buzz = document.querySelector('#tasks');
  console.log(buzz);

  patito.forEach(function(pollitos){
    var nuggets = pollitos.textContent;
    nuggets = nuggets.split("").reverse().join("");
    pollitos.textContent=nuggets;
    buzz.appendChild(pollitos);
  })
})


document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
})
