const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert("./permissions.json"),
  databaseURL: "https///fb-api-25591.firebase.com",
});
app.get("/hello-world", (req, res) => {
  return res.status(200).json({message: "Hello world"});
});

app.use(require("./products.routes.js"));

exports.app = functions.https.onRequest(app);
