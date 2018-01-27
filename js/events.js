//define functions here

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    let id = document.querySelector('img')
    id.className += " tasty"
  })
}

function pressIt(){
  $()
}

$(document).ready(function(){
getIt()
// call functions here

});
