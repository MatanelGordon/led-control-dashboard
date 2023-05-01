const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.put("/led/on", (_, res) => {
  console.log("\x1b[41m\x1b[37mTurned On\x1b[0m");
  res.status(200).json({ status: true });
});

app.put("/led/off", (_, res) => {
  console.log("Turned Off");
  res.status(200).json({ status: false });
});

app.put("/slider", (req, res) => {
  const { min, max, value } = req.body;

  if (!min || !max || !value || max < min) {
    res.status(500).json({ reason: "bad input parameters" });
    return;
  }

  const clampped = Math.min(Math.max(value, min), max);

  const rel = (clampped - min) / (max - min);

  console.log(`Slider Value: ${clampped} (rel = ${rel.toFixed(2)})`)

  res.json({status: clampped, rel});
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
