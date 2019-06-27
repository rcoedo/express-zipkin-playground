const { tracer } = require("./tracer");
const axios = require("zipkin-instrumentation-axios")(require("axios"), {
  tracer,
  serviceName: "axios-client",
});

module.exports = { axios };
