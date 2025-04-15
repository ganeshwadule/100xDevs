
// this can be type or Interface
type User = {
  name: string;
  age: number;
  email: string;
  password: string;
}

// to create selected type from selecting types from existing Interface / Type
type UpdateProps = Pick<User, "name" | "age" | "email">;

// to make fields optional
type UpdatePropsOptional = Partial<UpdateProps>;

const user: UpdatePropsOptional = {
  name: "ganesh",
  age: 18,
  email: "ganesh@gmail.com"
};

console.log(user);

interface a{
  name:string

}

interface b{
  age:number
}

type c = a & b

let u:c={
  name:"ganesh",
  age:18
}

// ReadOnly

interface Address{
  readonly country:string;
  picode:number
}

const address:Address = {
  country :"India",
  picode:443301
}

const address2:Readonly<Address> = {
  country :"India",
  picode:443301
}
console.log(address2 === address)

Exclude
Map and Record
Zod Inference