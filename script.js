"use strict";
// window.addEventListener("beforeunload",function(event){
//   event.returnValue = "";
// });
var input = document.querySelector(".guess");
var check = document.querySelector(".p-main-left");
var scroe = document.querySelector(".span-main-left");
var highscore = document.querySelector(".span2-main-left");
// document.addEventListener("keypress", (event)=>{
//     console.log(event);
//     if(event.key == 'Enter'){
//     }
// })
console.log(typeof 0);
var scorei = 0;
var random = Math.trunc(Math.random() * 20);
console.log(random);
document.querySelector(".btn-check").addEventListener("click", () => {
  var hightscore = document.querySelector(".span2-main-left");
  if(!input.value){
    check.textContent = "🔢 NO NUMBER "
  }
  if (input.value > random) {
    check.innerHTML = "📈 big number";
  } else if (input.value < random && input.value) {
    check.innerHTML = "📉 small number";
  } else if (input.value == random) {
    console.log(random);
    if (input.value >= sum) {
      highscore.innerHTML = document.querySelector(".guess").value;
    }
    alert("succesiful!");
    check.innerHTML = "🎁 congratulation!";
    scorei++;
    var sum = scorei;
    scroe.innerHTML = `🎟️ Score: ${sum} `;
  }
});
let sec = 0;
let min = 0;
let hr = 0;
var couont;
// function start(){
//     couont = setInterval(() => {
//     sec += 1;
//     if (sec >= 60) {
//       min += 1;
//       sec = 0;
//     }
//     if(min>= 60){
//       hr += 1;
//       min = 0;
//     }
//     var timer = document.querySelector(".span-main-left");
//     timer.innerHTML = `the time is ${sec} secound and ${min} minutes and ${hr} hours`
//   }, 1000);;
// };
// test();
function stop(){
  clearInterval(couont)
};



















