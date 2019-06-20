document.body.onload = function() {
	setTimeout(function () {
	var load = document.getElementById('load');
		if (!load.classList.contains('hidload')) {
			load.classList.add('hidload');
		}
	}, 1000 );
	loadProgress(1000/100) // т.е. время за все повторения 1s!
}
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

function PlayApp() {
	/* Video play*/
	var video = document.querySelector('.video');
	var playPause = document.querySelectorAll('.play-pause');
	var i = 0;
	var playRange = document.querySelector('.play-range');
	playRange.value = 0;
	playRange.min = 0;
	video.addEventListener('loadedmetadata', function() {
	    playRange.max = video.duration;
	}); // напрямую не работает для webkit!

	function playPauseVideo() {
		if (video.paused) {
			video.play();
			startDuration = setInterval(playRangeVideo, 15);
			playPause[i].style.display = "none";
			playPause[i+1].style.display = "block";
		}
		else {
			video.pause();
			clearInterval(startDuration);
			playPause[i].style.display = "block";
			playPause[i+1].style.display = "none";
		}
	}

	function playRangeVideo() {
		playRange.value = video.currentTime;
		
		if (playRange.value == playRange.max) {
			playPause[i].style.display = "block";
			playPause[i+1].style.display = "none";
		}
	}

	playPause[i].onclick = playPauseVideo;
	playPause[i+1].onclick = playPauseVideo;
	video.onclick = playPauseVideo;
};
var play = new PlayApp();