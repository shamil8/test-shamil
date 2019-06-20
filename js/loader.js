// Load progress bar
function loadProgress(time) {
	 var  start = 0;
	 var progressLoad = document.getElementById('load-progress');
	 setInterval( intervalNum = function () {
	 	if (start > 100) {
	 		clearInterval(intervalNum); 	
	 	}
	 	else {
	 		progressLoad.value = start;
	 	}
	 	start++;

	 }, time);
}
document.body.onload = function() {
	setTimeout(function () {
	var load = document.getElementById('load');
		if (!load.classList.contains('hidload')) {
			load.classList.add('hidload');
		}
	}, 1000 );
	loadProgress(1000/100) // т.е. время за все повторения 1s!
}