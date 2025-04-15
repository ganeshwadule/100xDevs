interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Ganesh", age: 1 },
  { name: "Mahesh", age: 1 },
  { name: "Ganesh", age: 6 },
];

function legalUsers(users: User[]): User[] {
  const legals = users.filter((user) => user.age >= 18);
  return legals;
}

console.log(legalUsers(users))