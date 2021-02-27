//alert("hola juan");

const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () =>
{
    if (audio.Pause || audio.ended){
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        playPause.querySelector(".play-btn").classList.toggle("hide");
        audio.play();
    } else{
        audio.Pause();
        playPause.querySelector(".pause-btn").classList.toggle("hide");
        playPause.querySelector(".play-btn").classList.toggle("hide");
    }
});
