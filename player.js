window.reproduce = {
    bg: document.querySelector('.sectplayer .imgbg'),
    tit: document.querySelector('.titart h5'),
    art: document.querySelector('.titart p'),
    aud: document.querySelector('.titart audio'),
     audioData: audios,
     currentAudio: {},

    start(){

        this.currentAudio = this.audioData[0];

        this.bg.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover `;
        this.tit.innerHTML = this.currentAudio.title;
        this.art.innerHTML = `<i class="fa-solid fa-user"></i>${this.currentAudio.artist}`;
        this.aud.src = path(this.currentAudio.file); 

        this.aud.addEventListener("ended", () => {
           this.aud.src = path(this.audioData[1].file) 
           this.aud.play();
        })
    }
};