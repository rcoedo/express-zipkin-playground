const { BatchRecorder, jsonEncoder } = require("zipkin");
const { HttpLogger } = require("zipkin-transport-http");

const ZIPKIN_ENDPOINT = process.env.ZIPKIN_ENDPOINT || "http://localhost:9411";

const recorder = new BatchRecorder({
  logger: new HttpLogger({
    endpoint: `${ZIPKIN_ENDPOINT}/api/v2/spans`,
    jsonEncoder: jsonEncoder.JSON_V2,
  }),
});

module.exports = {
  recorder,
};
