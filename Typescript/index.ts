// abstract class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   abstract greet: () => string;
// }

// class Manager extends User {
//   name: string;

//   constructor(name: string) {
//     super(name);
//     this.name = name;
//   }

//   greet = () => {
//     return "hello";
//   };
// }


type User = {
  name: string;
  age: number;
}

type Parent = {
  name: string;
  age: number;
  pancard: number
}

// this enforces object to have all props of Parent & User
let user:User & Parent={
  name:"ganesh",
  age:18,
  pancard:24545
}
