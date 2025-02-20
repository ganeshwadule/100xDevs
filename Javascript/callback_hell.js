// logs hii after 1 second
// logs hello 3 seconds after step 1
// logs hello therer5 seconds after step 2

// setTimeout(()=>{
//     console.log("hii");
//     setTimeout(()=>{
//         console.log("hello");
//         setTimeout(()=>{
//             console.log("hello there");
//         },5000
//     )
//     },3000)
// },1000)

function setTimeoutPromisified(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    });
}

setTimeoutPromisified(3000).then(()=>{
    console.log("hii");
})