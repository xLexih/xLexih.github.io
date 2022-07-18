
document.addEventListener('DOMContentLoaded',function(event){

var time = 125
var dataText = [
"why are you here smh smh",
"How cute, you think i can program?",
"Guess what...",
"mostly stolen! heheHEHEHEHEHEHEHE",
"anyway you probably didnt notice i spelt \"Programming\" wrong <3"];

function typeWriter(text, i, fnCallback) {
	if (i < (text.length)) {
		document.getElementById("TEXT").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
		if (text.includes("mostly stolen!"))
		switch(i){
			case 13:
				time = 850;
				break;
			case i>13:
				time = 50;
				break;
			case i>20:
				time = 10;
				break;
			case i>20:
				time = 10;
				break;
			default:
				time = 125;
		}
		setTimeout(function() {
			typeWriter(text, i + 1, fnCallback)
		}, time);
	}
	else if (typeof fnCallback == 'function') {	
		setTimeout(fnCallback, 700);
	}
}
function StartTextAnimation(i) {
	if (typeof dataText[i] === 'undefined'){
		setTimeout(function() {
			StartTextAnimation(0);
		}, 3000);
	}
	else if (i < dataText[i].length) {
		typeWriter(dataText[i], 0, function(){
			StartTextAnimation(i + 1);
		});
	}
}

StartTextAnimation(0);
});
