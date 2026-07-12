import express from "express";
import "dotenv/config";
import cors from "cors";
import chatRoutes from "./routes/chat.routes.js";
// const chatRoutes = (await import("./routes/chat.routes.js")).default;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is runing" });
});
app.use("/api/chat", chatRoutes);

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
