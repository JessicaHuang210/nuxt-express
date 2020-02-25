const functions = require("firebase-functions");
const { Nuxt } = require("nuxt");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// const nuxt = new Nuxt({
//   ...nuxtConfig,
//   dev: false // buildしたものを使うので必要
// });

// exports.ssr = functions.https.onRequest(async (req, res) => {
//   await nuxt.ready(); // since nuxt 2.5
//   return nuxt.render(req, res);
// });
const express = require("express");

const app = express();
const config = {
  dev: false
};

const nuxt = new Nuxt(config);

let isReady = false;
const readyPromise = nuxt
  .ready()
  .then(() => {
    isReady = true;
  })
  .catch(() => {
    process.exit(1);
  });

async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise;
  }
  res.set("Cache-Control", "public, max-age=1, s-maxage=1");
  await nuxt.render(req, res);
}

app.get("*", handleRequest);
app.use(handleRequest);
exports.ssr = functions.https.onRequest(app);
