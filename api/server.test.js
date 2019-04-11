const app = require('./server');
const request = require('supertest');

describe('Express app', () => {
  describe('Create new resource', () => {
    it('will create new resource', () => {
      const newResourceResponse = { message: 'New resource created' };
      return request(app)
        .post('/', { name: 'Bobas' })
        .expect(newResourceResponse);
    });

    it('will response with 201 status code', () => {
      return request(app)
        .post('/', { name: 'Bobas' })
        .expect(201);
    });
  });
});
