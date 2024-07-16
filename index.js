var h = 0;
var m = 0;
var s = 0;
var interval = null;
var hours = document.getElementsByClassName('hours')[0];
var minutes = document.getElementsByClassName('minutes')[0];
var seconds = document.getElementsByClassName('seconds')[0];

function updateDisplay() {
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

function start() {
    // if (interval) {
    //     return; // Prevent multiple intervals
    // }
    console.log("mmk")
    interval = setInterval(function() {
        s++;
        if (s == 60) {
            s = 0;
            m++;
            if (m == 60) {
                m = 0;
                h++;
            }
        }
        updateDisplay();
    }, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    clearInterval(interval);
    interval = null;
    h = 0;
    m = 0;
    s = 0;
    updateDisplay();
}

// Initialize display
updateDisplay();