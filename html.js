
document.addEventListener('DOMContentLoaded',function(event){

var dataText = [ "why are you here smh smh", "How cute, you think i can program?", "Guess what...", "mostly stolen! hehehe"];

function typeWriter(text, i, fnCallback) {
	if (i < (text.length)) {
		document.getElementById("TEXT").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
		setTimeout(function() {
			typeWriter(text, i + 1, fnCallback)
		}, 125);
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
