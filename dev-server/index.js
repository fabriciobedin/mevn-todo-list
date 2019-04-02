import express from "express";
var app = express();
import { registerRoutes } from "./routes";
registerRoutes(app);

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
