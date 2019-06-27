# express-zipkin-playground

This repository contains an example of an [express](https://expressjs.com/) + [zipkinjs](https://github.com/openzipkin/zipkin-js) integration. The project contains:

* A web service that shows a date.
* An API that returns the current date.
* a [docker-compose](https://docs.docker.com/compose/) file to run zipkin.

## Running the example

To run the example you need to follow these steps:

1. `$ docker-compose up`: This command will start the docker `zipkin` container on `9411`.
2. `$ yarn`: This will download the js dependencies.
3. `$ yarn api`: This will start `date-service` on port 3001.
4. `$ yarn web`: This will start `web-backend` on port 3000.
5. Go to `http://localhost:3000`. This will show you the current date.
6. Search the trace in `http://localhost:9411/zipkin/`. Can you tell what's happening? :)
