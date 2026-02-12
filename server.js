import dotenv from "dotenv";
import connectDB from "./DB/db.js";
import app from "./index.js";

dotenv.config();

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
