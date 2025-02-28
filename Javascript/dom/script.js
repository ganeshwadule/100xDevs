 
const timeEl = document.querySelector("#time");
let val = 0;
// setInterval(()=>{
//     timeEl.innerHTML = val;
//     val += 1;
// },1000);

function recursiveCounter(){
   timeEl.innerHTML = new Date().toLocaleTimeString();
   
   setTimeout(recursiveCounter,1000)
}

// setTimeout(recursiveCounter(0),1000)
// callback 
// setInterval(()=>console.log("Hello"),1000)
const callback = ()=>{
    console.log("Hii I am timout")
    setTimeout(callback,1000)
}

setTimeout(recursiveCounter,1000)