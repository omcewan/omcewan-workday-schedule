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
let textareaElArr = [
  textarea1El,
  textarea2El,
  textarea3El,
  textarea4El,
  textarea5El,
  textarea6El,
  textarea7El,
  textarea8El,
  textarea9El,
];
let textareaKey = [
  "textarea1",
  "textarea2",
  "textarea3",
  "textarea4",
  "textarea5",
  "textarea6",
  "textarea7",
  "textarea8",
  "textarea9",
];

let row1El = document.getElementById("row1");
let row2El = document.getElementById("row2");
let row3El = document.getElementById("row3");
let row4El = document.getElementById("row4");
let row5El = document.getElementById("row5");
let row6El = document.getElementById("row6");
let row7El = document.getElementById("row7");
let row8El = document.getElementById("row8");
let row9El = document.getElementById("row9");
let rowArr = [
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

function pageReload() {
  location.reload();
}

function loadSaveData() {
  for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(textareaKey[i]));
    textareaElArr[i].value = localStorage.getItem(textareaKey[i]);
  }
}

function saveData(textareaKey, rowValue) {
  localStorage.setItem(textareaKey, rowValue);
}

let saveBtnClicks = {
  saveBtn1: (saveBtn1.onclick = () => {
    let row1Value = textareaElArr[0].value;
    saveData(textareaKey[0], row1Value);
  }),
  saveBtn2: (saveBtn2.onclick = () => {
    let row2Value = textareaElArr[1].value;
    saveData(textareaKey[1], row2Value);
  }),
  saveBtn3: (saveBtn3.onclick = () => {
    let row3Value = textareaElArr[2].value;
    saveData(textareaKey[2], row3Value);
  }),
  saveBtn4: (saveBtn4.onclick = () => {
    let row4Value = textareaElArr[3].value;
    saveData(textareaKey[3], row4Value);
  }),
  saveBtn5: (saveBtn5.onclick = () => {
    let row5Value = textareaElArr[4].value;
    saveData(textareaKey[4], row5Value);
  }),
  saveBtn6: (saveBtn6.onclick = () => {
    let row6Value = textareaElArr[5].value;
    saveData(textareaKey[5], row6Value);
  }),
  saveBtn7: (saveBtn7.onclick = () => {
    let row7Value = textareaElArr[6].value;
    saveData(textareaKey[6], row7Value);
  }),
  saveBtn8: (saveBtn8.onclick = () => {
    let row8Value = textareaElArr[7].value;
    saveData(textareaKey[7], row8Value);
  }),
  saveBtn9: (saveBtn9.onclick = () => {
    let row9Value = textareaElArr[8].value;
    saveData(textareaKey[8], row9Value);
  }),
};

loadSaveData();
setInterval(pageReload, 300000);

setInterval(checkHour, 0);

saveBtnClicks.saveBtn1();
saveBtnClicks.saveBtn2();
saveBtnClicks.saveBtn3();
saveBtnClicks.saveBtn4();
saveBtnClicks.saveBtn5();
saveBtnClicks.saveBtn6();
saveBtnClicks.saveBtn7();
saveBtnClicks.saveBtn8();
saveBtnClicks.saveBtn9();
