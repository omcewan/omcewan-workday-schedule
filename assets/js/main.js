let currentDayEl = document.getElementById("currentDay");
currentDayEl.innerHTML = moment().format("dddd, MMMM Do, YYYY");

let row1El = document.getElementById("row1");
let row2El = document.getElementById("row2");
let row3El = document.getElementById("row3");
let row4El = document.getElementById("row4");
let row5El = document.getElementById("row5");
let row6El = document.getElementById("row6");
let row7El = document.getElementById("row7");
let row8El = document.getElementById("row8");
let row9El = document.getElementById("row9");
rowArr = [
  row1El,
  row2El,
  row3El,
  row4El,
  row5El,
  row6El,
  row7El,
  row8El,
  row9El,
];

// check if the time is current past or future.
function checkHour() {
  let rowtimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  let hour = moment().format("HH");
  let j = 0;
  for (let i = 0; i < rowArr.length; i++) {
    if (rowtimes[j] < hour) {
      rowArr[i].children[1].classList.add("past");
      j++;
    } else if (rowtimes[j] > hour) {
      rowArr[i].children[1].classList.add("future");
      j++;
    } else {
      rowArr[i].children[1].classList.add("present");
      j++;
    }
  }
}

setInterval(checkHour, 1000);
