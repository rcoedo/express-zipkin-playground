const express = require("express");
const zipkinMiddleware = require("zipkin-instrumentation-express").expressMiddleware;

const { tracer } = require("./tracer");
const { delay } = require("../shared/utils");

const app = express();
app.use(zipkinMiddleware({ tracer }));

app.get("/time", async (req, res) => {
  await tracer.local("awaiting 200ms delay", async () => {
    await delay(200);
  });
  res.json({ currentDate: new Date().getTime() });
});

module.exports = {
  app,
};
