import { app } from "./src/app.js";
import { config } from "dotenv";
import { connectDb } from "./src/db/connectDb.js";

config();
export const envMode = process.env.NODE_ENV || "PRODUCTION";
connectDb(process.env.DATABASE_URL);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening at ${PORT} in ${envMode} mode`);
});
