const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const wholeEnchilada = require("./parsers/wholeString");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/:csvStuff", (req, res) => {
  res.send(wholeEnchilada(req.params.csvStuff).join("\n"));
});

app.listen(PORT, () => {
  console.log(`Node express server listening on port ${PORT}`);
});
