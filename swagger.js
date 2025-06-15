const swaggerUi = require('swagger-ui-express');

const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Contacts API',
    version: '1.0.0',
    description: 'API documentation for the Contacts project',
  },
  servers: [
    {
      url: 'https://mongodb-api-assignment.onrender.com',
    },
  ],
  paths: {
    '/contacts': {
      get: {
        tags: ['Contacts'],
        summary: 'Get all contacts',
        responses: {
          200: {
            description: 'A list of contacts',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      _id: { type: 'string' },
                      firstName: { type: 'string' },
                      lastName: { type: 'string' },
                      email: { type: 'string' },
                      favoriteColor: { type: 'string' },
                      birthday: { type: 'string' }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    explorer: true,
    cacheControl: false
  }));
}

module.exports = setupSwagger;
