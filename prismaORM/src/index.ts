import { PrismaClient } from "./generated/prisma";

const client = new PrismaClient();

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
  await client.user.delete({
    where: {
      id: 2,
    },
  });

  console.log("deleted user");
}

async function getUser() {
  const user = await client.user.findMany({
    
  });

  console.log(user);
}
getUser();
