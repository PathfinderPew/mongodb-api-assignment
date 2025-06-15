const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API documentation for the Contacts project',
    },
    servers: [
      {
        url: 'https://mongodb-api-assignment.onrender.com', // deployed URL
      }
    ],
  },
  apis: ['./routes/*.js'], // route files for auto doc generation
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    explorer: true,
    cacheControl: false
  }));
}

module.exports = setupSwagger;
