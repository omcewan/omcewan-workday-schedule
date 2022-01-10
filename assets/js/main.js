let currentDayEl = document.getElementById("currentDay");
currentDayEl.innerHTML = moment().format("dddd, MMMM Do, YYYY");

let saveBtn1 = document.getElementById("saveBtn1");
let saveBtn2 = document.getElementById("saveBtn2");
let saveBtn3 = document.getElementById("saveBtn3");
let saveBtn4 = document.getElementById("saveBtn4");
let saveBtn5 = document.getElementById("saveBtn5");
let saveBtn6 = document.getElementById("saveBtn6");
let saveBtn7 = document.getElementById("saveBtn7");
let saveBtn8 = document.getElementById("saveBtn8");
let saveBtn9 = document.getElementById("saveBtn9");

let textarea1El = document.getElementById("textarea1");
let textarea2El = document.getElementById("textarea2");
let textarea3El = document.getElementById("textarea3");
let textarea4El = document.getElementById("textarea4");
let textarea5El = document.getElementById("textarea5");
let textarea6El = document.getElementById("textarea6");
let textarea7El = document.getElementById("textarea7");
let textarea8El = document.getElementById("textarea8");
let textarea9El = document.getElementById("textarea9");

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

setInterval(checkHour, 0);

function saveData() {
    localStorage.setItem("textarea", "test")
}

function loadSaveData() {
    localStorage.getItem("textarea")
}

let saveBtnClicks = {
  saveBtn1: (saveBtn1.onclick = () => {
    let row1Value = textarea1El.value;
    console.log(row1Value);
  }),
  saveBtn2: (saveBtn2.onclick = () => {
    let row2Value = textarea2El.value;
    console.log(row2Value);
  }),
  saveBtn3: (saveBtn3.onclick = () => {
    let row3Value = textarea3El.value;
    console.log(row3Value);
  }),
  saveBtn4: (saveBtn4.onclick = () => {
    let row4Value = textarea4El.value;
    console.log(row4Value);
  }),
  saveBtn5: (saveBtn5.onclick = () => {
    let row5Value = textarea5El.value;
    console.log(row5Value);
  }),
  saveBtn6: (saveBtn6.onclick = () => {
    let row6Value = textarea6El.value;
    console.log(row6Value);
  }),
  saveBtn7: (saveBtn7.onclick = () => {
    let row7Value = textarea7El.value;
    console.log(row7Value);
  }),
  saveBtn8: (saveBtn8.onclick = () => {
    let row8Value = textarea8El.value;
    console.log(row8Value);
  }),
  saveBtn9: (saveBtn9.onclick = () => {
    let row9Value = textarea9El.value;
    console.log(row9Value);
  }),
};

saveBtnClicks.saveBtn1();
saveBtnClicks.saveBtn2();
saveBtnClicks.saveBtn3();
saveBtnClicks.saveBtn4();
saveBtnClicks.saveBtn5();
saveBtnClicks.saveBtn6();
saveBtnClicks.saveBtn7();
saveBtnClicks.saveBtn8();
saveBtnClicks.saveBtn9();