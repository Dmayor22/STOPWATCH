//array for hours, minutes, seconds
let [secs, mins, hours] = [0, 0, 0];
const Time = document.getElementById("displayTime");
let timer = null;
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

//function for stopwatch
const stopwatch = () => {
  secs++;
  if (secs == 60) {
    secs = 0;
    mins++;
    if (mins == 60) {
      mins = 0;
      hours++;
    }
  }
  let h = hours < 10 ? `0${hours}` : hours;
  let m = mins < 10 ? `0${mins}` : mins;
  let s = secs < 10 ? `0${secs}` : secs;

  Time.innerHTML = `${h}:${m}:${s}`;
};

//function to start watch every 1 secs
const watchStart = () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
};

//function to stop
const watchStop = () => {
  clearInterval(timer);
};
const watchReset = () => {
  clearInterval(timer);
  [secs, mins, hours] = [0, 0, 0];
  Time.innerHTML = "00:00:00";
};

playBtn.addEventListener("click", watchStart);
resetBtn.addEventListener("click", watchReset);
stopBtn.addEventListener("click", watchStop);
