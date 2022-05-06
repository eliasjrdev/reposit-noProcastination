
 const reproduce = {
    bg: document.querySelector('.sectplayer .imgbg'),
    tit: document.querySelector('.titart h5'),
    art: document.querySelector('.titart p'),
    aud: document.querySelector('.titart audio'),

     data: {
        title: "Childish Gambino - Redbone __ Guitar Loop Cover",
        artist: "Desconhecido",
        cover: "images/img1.gif",
        file: "audio/Childish Gambino - Redbone __ Guitar Loop Cover.mp3"
    },

    start(){
        this.bg.style.background = `url('${this.data.cover}') center center`;
        this.tit.innerHTML = this.data.title;
        this.art.innerHTML = `<i class="fa-solid fa-user"></i>${this.data.artist}`;
        this.aud.src = this.data.file; 
    }
};


reproduce.start();

