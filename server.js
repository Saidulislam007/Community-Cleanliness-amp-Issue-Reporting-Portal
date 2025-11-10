import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Issue Schema
const issueSchema = new mongoose.Schema({
    title: String,
    category: String,
    location: String,
    description: String,
    image: String,
    amount: Number,
    status: { type: String, default: "ongoing" },
    date: { type: Date, default: Date.now },
    email: String,
});

const Issue = mongoose.model("Issue", issueSchema);

// API to add issue
app.post("/api/issues", async (req, res) => {
    try {
        const issue = new Issue(req.body);
        await issue.save();
        res.status(201).json({ success: true, message: "Issue added!" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
