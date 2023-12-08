const mongoose = require("mongoose");
const databaseUrl =
  process.env.DATABASE_URL ||
  "mongodb+srv://testeur:12345@cluster-p13.coekofn.mongodb.net/?retryWrites=true&w=majority";

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://testeur:12345@cluster-p13.coekofn.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
