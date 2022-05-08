window.reproduce = {
    bg: document.querySelector('.sectplayer .imgbg'),
    tit: document.querySelector('.titart h5'),
    art: document.querySelector('.titart p'),
    aud: document.querySelector('.titart audio'),
     audioData: audios,
     currentAudio: {},
     currentPlaying: 0,

    start(){
        this.update();
        this.aud.onended = () => this.next();
    },

    next(){
        this.currentPlaying++

        if(this.currentPlaying == this.audioData.length) this.restart();
        this.update();
        this.aud.play();
    },

    update(){
        this.currentAudio = this.audioData[this.currentPlaying];
        this.bg.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover `;
        this.tit.innerHTML = this.currentAudio.title;
        this.art.innerHTML = `<i class="fa-solid fa-user"></i>${this.currentAudio.artist}`;
        this.aud.src = path(this.currentAudio.file);
    },

    restart(){
        this.currentPlaying = 0;
        this.update();
    }
};