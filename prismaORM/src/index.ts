import { PrismaClient } from "./generated/prisma";

const client = new PrismaClient({
  log:["query"]
});

async function createUser() {
  await client.user.createMany({
    data: [
      {
        username: "saket",
        password: "saket@124",
      },
      {
        username: "rahul",
        password: "saket@124",
      },
      {
        username: "vinod",
        password: "saket@124",
      },
      {
        username: "mahesh",
        password: "saket@124",
      },
    ],
  });

  console.log("Created users");
}

async function updateUser() {
  await client.user.update({
    where: {
      id: 1,
    },
    data: {
      username: "ganeshwadule",
    },
  });

  console.log("updated user");
}

async function deleteUser() {
  try {
    await client.user.delete({
      where: {
        id: 1,
      },
    });
  
  } catch (error) {
    console.error(error)
  }
  console.log("deleted user");
}

async function getUser() {
  const user = await client.user.findFirst({
    where:{
      id:1
    },
    include:{
      todos:true
    }
  });

  console.log(user);
}
deleteUser();
