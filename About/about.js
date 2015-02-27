$(document).ready(function(){
	blinkFont();
});

function blinkFont(){
	document.getElementById("blink").style.color="red"
	document.getElementById("blink").style.color="black"
	setTimeout("setblinkFont()", 500)
}

function setblinkFont(){
	document.getElementById("blink").style.color="black"
	document.getElementById("blink").style.color="red"
	setTimeout("blinkFont()", 500)
}
