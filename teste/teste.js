const bg = document.querySelector('.sectplayer .imgbg');
const tit = document.querySelector('.titart h5');
const art = document.querySelector('.titart p');
const aud = document.querySelector('.titart audio');

const data = {
    title: "Childish Gambino - Redbone __ Guitar Loop Cover",
    artist: "Desconhecido",
    cover: "images/img1.gif",
    file: "audio/Childish Gambino - Redbone __ Guitar Loop Cover.mp3"
};

bg.style.background = `url('${data.cover}') center center`

tit.innerHTML = data.title;

art.innerHTML = `<i class="fa-solid fa-user"></i>${data.artist}`

aud.src = data.file