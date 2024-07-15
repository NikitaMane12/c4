const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOption = {
  swaggerDefination: {
    openapi: "3.0.0",
    info: {
      title: "BookStore Api",
      version: "1.0.0",
      description: "API Documention for the online bookstore",
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOption);
module.exports = { swaggerUi, swaggerDocs };
