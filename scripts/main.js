function vaEtVient(){
		if(document.getElementById('invisible').style.display == 'none'){
    	document.getElementById('invisible').style.display = 'block';
      document.getElementById('boutonclic').style.display = 'none';
  		}
  		else {
    	document.getElementById('invisible').style.display = 'none';
		}
}

function countPopup()
{
setTimeout("Popup()",10000);
return false;
}
function Popup()
{
window.alert('Hey le site http://www.xxxvidsxxx.com est trop bien. Viens dessus stp please','_blank');
}


var myButton = document.querySelector('#monlien');
myButton.onclick = function() {
  var mySearch = document.querySelector('#leinput').value;
if(mySearch !== "") {
  document.querySelector('#monlien').href = "https://www.google.fr/#q=" +mySearch
     	}
     }
