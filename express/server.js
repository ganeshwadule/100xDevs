const express = require("express")

const app = express()
const sum = (n)=>{
    let res = 0;

    for(let i=1;i<=n;i++){
        res += i;
    }

    return res;
}
app.get("/",(req,res)=>{
    const ans = sum(parseInt(req.query.n))
    res.send("your answer is "+ans);

})

app.listen(3000)