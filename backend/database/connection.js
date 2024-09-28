import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MERN_AUCTION_PLATFORM",
      useNewUrlParser: true,       // Optional: prevents deprecation warnings
      useUnifiedTopology: true,    // Optional: enables new server discovery and monitoring engine
    });
    console.log("Connected to database.");
  } catch (err) {
    console.error(`Some error occurred while connecting to the database: ${err}`);
  }
};
