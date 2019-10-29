const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const wholeEnchilada = require("./parsers/wholeString");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.query);
  req.query.csvStuff
    ? res.send(wholeEnchilada(req.query.csvStuff).join("\n"))
    : res.send(
        "Add either a query param called csvStuff or a urlencoded string to the url to parse."
      );
});

app.get("/:csvStuff", (req, res) => {
  res.send(wholeEnchilada(req.params.csvStuff).join("\n"));
});

app.listen(PORT, () => {
  console.log(`Node express server listening on port ${PORT}`);
});
