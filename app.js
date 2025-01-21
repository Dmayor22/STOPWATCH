//array for hours, minutes, seconds
let [secs, mins, hours] = [0, 0, 0];
const Time = document.getElementById("displayTime");
let timer = null
const playBtn = document.getElementById('play')

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
  Time.innerHTML = `${hours}:${mins}:${secs}`
};

//function to start watch every 1 secs
const watchStart = () => {
    if (timer !== null) {
        clearInterval(timer)
    }
  timer = setInterval(stopwatch, 1000);
};

playBtn.addEventListener('click', watchStart)



