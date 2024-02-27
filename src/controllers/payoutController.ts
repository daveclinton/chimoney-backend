// controllers/payoutController.js
const { post } = require("api");

const postPayoutMobileMoney = async (
  req: any,
  res: {
    json: (arg0: any) => void;
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { error: string }): void; new (): any };
    };
  }
) => {
  try {
    const { data } = await post(
      "@chimoney/v0.2.3#3te2ts2rlssyvr0q/postV02PayoutsMobileMoney"
    );
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  postPayoutMobileMoney,
};
