import mongoose from "mongoose";

export const connectDb = (uri) => {
  mongoose
    .connect(uri, {
      dbName: "Tech",
    })
    .then((data) => {
      console.log(`Connected to db: ${data.connection.host}`);
    })
    .catch((error) => {
      throw error;
    });
};
