import express from "express";

const { postPayoutMobileMoney } = require("../controllers/payoutController");

const router = express.Router();

router.get("/here", (req, res) => {
  res.send("Hello, world!");
});

router.post("/payouts/mobile-money", postPayoutMobileMoney);

export default router;
