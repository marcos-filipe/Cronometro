window.onload = function(){

	var minutes = 0;
	var seconds = 0;
	var tens = 0;

	var appendMinutes = document.getElementById('minutes');
	var appendSeconds = document.getElementById('seconds');
	var appendTens = document.getElementById('tens');

	var buttonStart = document.getElementById('start');
	var buttonStop = document.getElementById('stop');
	var buttonReset = document.getElementById('reset');

	var interval;

	buttonStart.onclick = function(){
		clearInterval(interval);
		interval = setInterval(startTimer, 10);
	}

	buttonStop.onclick = function(){
		clearInterval(interval);
	}

	buttonReset.onclick = function(){
		clearInterval(interval);
		minutes = '00';
		seconds = '00';
		tens = '00';

		appendMinutes.innerHTML = minutes;
		appendSeconds.innerHTML = seconds;
		appendTens.innerHTML = tens;
	}

	function startTimer(){
		tens++;

		if(tens <= 9){
			appendTens.innerHTML = '0' + tens;
		}

		if(tens > 9){
			appendTens.innerHTML = tens;
		}

		if(tens > 99){
			console.log('seconds');
			seconds++;
			appendSeconds.innerHTML = seconds;
			tens = 0;
			appendTens.innerHTML = '0' + 0;
		}

		if(seconds > 60){
			minutes++;
			appendSeconds.innerHTML = seconds;
			seconds = 0;
			appendMinutes.innerHTML = minutes;
		}
	}
}