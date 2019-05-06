window.onload = myMain;

function myMain() {
  document.getElementById("cardContainer").onclick = buton;
}

var temp;
function buton(e) {
  if (e.target.tagName == 'BUTTON') {
  	//var filename = 'home/'.concat('text',e.target.id,'.txt')
  	console.log(e.target.id)
  	var filename='text'.concat(e.target.id,'.html')
  	var self=this
  	var contents=""
  	
  	$.ajax({
  		url: '/get_ajax/',
  		type: 'POST',
  		cache: false,
  		data: {'filename':filename},
  		success:function(result){
  			document.getElementById('modelText').innerHTML = result
  			result=""
  		}
  	});
    modal.style.display = "block";  
  }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("btnRead");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
 
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  document.getElementById('modelText').innerHTML=""
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  document.getElementById('modelText').innerHTML=""
  if (event.target == modal) {
    modal.style.display = "none";
  }
}