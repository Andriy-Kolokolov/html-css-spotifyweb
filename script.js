const slider = document.getElementById("song-time-slider");
const volumeSlider = document.getElementById("volume-slider");

const output = document.getElementById("song-time");
const songDuration = 275;

output.innerHTML = secondsToTimeFormat(slider.value);

slider.max = songDuration;

slider.oninput = function() {
    output.innerHTML = secondsToTimeFormat(this.value);

    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(90deg, #1DB954 ${value}%, #b3b3b3 ${value}%)`;
};

volumeSlider.oninput = function() {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(90deg, #1DB954 ${value}%, #b3b3b3 ${value}%)`;
};

function secondsToTimeFormat(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}