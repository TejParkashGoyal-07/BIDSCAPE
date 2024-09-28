import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_AUCTION_PLATFORM", // Ensure the database name is correct
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the database.");
    })
    .catch((err) => {
      console.error(`Some error occurred while connecting to the database: ${err.message}`);
    });
};
