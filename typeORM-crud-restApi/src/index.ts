import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("database connected");

    app.listen(3000, () => {
      console.log("server is listening on port 3000");
    });
  } catch (e) {
    console.log(e);
  }
}

main();
