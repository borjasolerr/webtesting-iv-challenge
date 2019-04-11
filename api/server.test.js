const app = require('./server');
const request = require('supertest');

describe('Express app', () => {
  describe('Create new resource', () => {
    it('will create new resource', () => {
      const newResourceResponse = { message: 'New resource created' };
      return request(app)
        .post('/')
        .send({ name: 'Bobas' })
        .expect(newResourceResponse);
    });

    it('will response with 201 status code', () => {
      return request(app)
        .post('/')
        .send({ name: 'Bobas' })
        .expect(201);
    });

    it('will fail with 400 status code if name is missing in payload', () => {
      return request(app)
        .post('/')
        .send({ user: 'Bobas' })
        .expect(400);
    });
  });

  describe('Delete a resource', () => {
    it('will delete resource', () => {
      const newResourceResponse = { message: 'Resource deleted' };
      return request(app)
        .delete('/1')
        .expect(newResourceResponse);
    });

    it('will response with 200 status code', () => {
      return request(app)
        .delete('/1')
        .expect(200);
    });

    it('will fail with 404 status code on missing ID in params', () => {
      return request(app)
        .delete('/')
        .expect(404);
    });
  });
});
