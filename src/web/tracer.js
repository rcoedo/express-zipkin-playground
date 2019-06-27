const { Tracer, ExplicitContext } = require("zipkin");
const { recorder } = require("../shared/recorder");

const tracer = new Tracer({
  ctxImpl: new ExplicitContext(),
  recorder,
  localServiceName: "web-backend",
});

module.exports = {
  tracer,
};
