function eligible(users){
    const eligibleUsers = [];
    for(let user of users){
        if(user.age >= 18 && user.gender.toLowerCase() == 'male'){
            eligibleUsers.push(user);
        }
    }

    return eligibleUsers;
}
const filterEligibleUsers = (users)=>{
    return users.filter((user)=>user.age >= 18 && user.gender.toLowerCase() == "male");
}
const users =[
    {fullName:"Ganesh Wadule",age:22,gender:"male"},
    {fullName:"Vaishnavi Wadule",age:17,gender:"female"},
    {fullName:"Gita Wadule",age:42,gender:"female"},
    {fullName:"Bandu Wadule",age:46,gender:"male"},
    {fullName:"Punjabai Wadule",age:22,gender:"female"}
];

console.log(filterEligibleUsers(users));