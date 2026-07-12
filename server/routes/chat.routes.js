import express from "express";
import askLLM from "../services/ai.service.js";

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const { message } = req.body;
        if (!message || message.trim() === "") {
            return res.status(400).json({ message: "message is required" });
        }

        const response = await askLLM(message);
        // console.log(response);
        return res.status(200).json({ message: response, messageFromUser: `${message}`, response: `${response}` });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "something went wrong", error: `${error}` });
    }
})

export default router;
