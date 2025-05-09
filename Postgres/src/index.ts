import { Client } from "pg";

const pgClient = new Client(
  "postgresql://neondb_owner:npg_cZmnb2Oyjlk5@ep-shiny-waterfall-a10i2gw3-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
);

async function connectToDB() {
  try {
    await pgClient.connect();
    const data = await pgClient.query("SELECT * FROM todo");
    console.log(data.rows);
  } catch (error) {
    console.error(error);
  }
}

connectToDB();
