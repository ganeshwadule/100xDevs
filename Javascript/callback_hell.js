// logs hii after 1 second
// logs hello 3 seconds after step 1
// logs hello therer5 seconds after step 2

//#BAD WAY
setTimeout(()=>{
    console.log("hii");
    setTimeout(()=>{
        console.log("hello");
        setTimeout(()=>{
            console.log("hello there");
        },5000
    )
    },3000)
},1000)

// #GOOD WAY

function setTimeoutPromisified(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    });
}



setTimeoutPromisified(1000)
.then(()=>{
    console.log("Hii")
    return setTimeoutPromisified(3000);
})
.then(()=>{
    console.log("Hello");
    return setTimeoutPromisified(5000);

})
.then(()=>{
    console.log("Hello there");
})

// BEST WAY

// await is only useful when async fucntion returns a promise otherwise it nas no effect
async function solve(){
    const data = await setTimeoutPromisified(1000)
    console.log(data)
    await setTimeoutPromisified(3000);
    console.log("Hello")
    await setTimeoutPromisified(5000);
    console.log("Hello there")
}

// this also returns a promise which can be handle using .then() eg: solve().then(()=>{})
solve();