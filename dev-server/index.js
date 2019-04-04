import express from "express";
var app = express();
import { registerRoutes } from "./routes";
import { setEnvironment } from "./config/env";
import { connectToDB } from "./config/db";

setEnvironment(app);
connectToDB();
registerRoutes(app);

app.get("/", function(req, res) {
  if (process.env.NODE_ENV !== "production") {
    return res.send("Running server in development mode!");
  } else {
    return res.sendFile("index.html", { root: __dirname + "/../dist/" });
  }
});

app.listen(3000, function() {
  console.log(
    "Example app listening on port 3000 in " + process.env.NODE_ENV + " mode"
  );
});
