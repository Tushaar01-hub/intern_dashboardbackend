import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";

const app=express();
const port=3000;

app.use(cors());
app.use(express.json());

const intern = {
  name: "Tushaar Chaudhary",
  referral: "tushaar2025",
  totalDonations: 3750,
  rewards: [
    { title: "Bronze Badge", unlocked: true },
    { title: "Silver Badge", unlocked: true },
    { title: "Gold Badge", unlocked: false },
    { title: "Custom Hoodie", unlocked: false },
  ]}

const leaderboard = [
    { name: "Tushaar", referral: "tushaar2025", donations: 2400 },
    { name: "Priya", referral: "priya2025", donations: 2100 },
    { name: "Rohan", referral: "rohan2025", donations: 1800 },
    { name: "Ananya", referral: "ananya2025", donations: 1500 },
    { name: "Karan", referral: "karan2025", donations: 1200 },
    { name: "Nisha", referral: "nisha2025", donations: 1000 }
];

app.post("/user",async(req,res)=>{
  const { username, password } = req.body;
  console.log("New user signup:", username, password);

  res.status(201).json(intern);
});

app.get("/leaderboard",async(req,res)=>{
    res.json(leaderboard);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});