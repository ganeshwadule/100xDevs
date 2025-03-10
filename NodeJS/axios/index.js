const axios = require("axios");

async function getData() {
    const response = await axios.post("https://httpdump.app/dumps/34e39ee5-e84e-4dd1-bf8d-cb9f922b9710",{
        "username":"ganeshwadule",
        "password":"ganesh@12345"
    },{
        headers:{
            Authorization:"token-verified-user",
            "Content-Type":"application/json"
        }
    })

    console.log(response.data)
}

// #Another way to make Request using axios
// async function getData() {
//   const reponse = await axios({
//     url: "https://httpdump.app/dumps/eef57b7c-f39d-4561-be08-cda6cb2e023b",
//     method: "POST",
//     headers: {
//       Authorization: "token 3456",
//     },
//     data: { username: "ganeshwadule", password: "ganesh@123" },
//   });
// }

getData();
