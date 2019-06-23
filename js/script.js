class Display {
    constructor(time) {
        this.start = 0;
        this.time = time * 1000;   //time in seconds
        this.progressLoad = document.querySelector('.preloader__progress');
        this.progressLoad.value= 0;
        this.load = document.querySelector('.page__preloader');
        // Play app variables
        this.video = document.querySelector('.play__video');
        this.playRange = document.querySelector('.play__range');
        this.playRange.value = 0;
        this.playRange.min = 0;
        this.video.addEventListener('loadedmetadata', () => {
            this.playRange.max = this.video.duration;
        }); // not working directly for webkit!
        this.playPause = document.querySelectorAll('.play__btn');
        this.btnActive = 'play__btn__active';
        this.hidden = 'preloader__hidden';
    }

    loadProgress() {
        let f = () => {
            setTimeout(() => {
                if (!this.load.classList.contains(this.hidden)) {
                    this.load.classList.add(this.hidden);
                }
            }, this.time);
        };
        f() === window.onload; // or the global object

        // progress bar
        this.time /=100; // time for all operations [100]!
        this.intervalNum = setInterval(() => {
            if (this.start > 100) {
                clearInterval(this.intervalNum);
            }
            else {
                this.progressLoad.value = this.start;
            }
            this.start++;
        }, this.time);
    }

    PlayApp() {
        if (this.video.paused) {
            this.video.play();
            this.startDuration = setInterval(()=> {
                this.playRange.value = this.video.currentTime;

                if (this.playRange.value === this.playRange.max) {
                    this.playPause[0].classList.add(this.btnActive);
                    this.playPause[1].classList.remove(this.btnActive);
                }
            }, 15);
            this.playPause[0].classList.remove(this.btnActive);
            this.playPause[1].classList.add(this.btnActive);
        }
        else {
            this.video.pause();
            clearInterval(this.startDuration);
            this.playPause[0].classList.add(this.btnActive);
            this.playPause[1].classList.remove(this.btnActive);
        }
    }
    clickPlayApp() {
        this.playPause[0].onclick = this.PlayApp.bind(this);
        this.playPause[1].onclick = this.PlayApp.bind(this);
        this.video.onclick = this.PlayApp.bind(this);
    }
}
let display1 = new Display(2); // load time 2s
display1.loadProgress();
display1.clickPlayApp();