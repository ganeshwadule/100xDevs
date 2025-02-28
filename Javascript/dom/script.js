 
const timeEl = document.querySelector("#time");
let val = 0;
setInterval(()=>{
    timeEl.innerHTML = val;
    val += 1;
},1000);