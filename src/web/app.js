const path = require("path");
const express = require("express");
const zipkinMiddleware = require("zipkin-instrumentation-express").expressMiddleware;

const { tracer } = require("./tracer");
const { axios } = require("./axios");
const { delay } = require("../shared/utils");

const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:3001";

const app = express();
app.use(zipkinMiddleware({ tracer }));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  await tracer.local("awaiting 100ms delay", async () => {
    await delay(100);
  });
  const result = await axios.get(`${API_ENDPOINT}/time`);
  res.render("index", { date: new Date(result.data.currentDate).toLocaleTimeString() });
});

module.exports = {
  app,
};
