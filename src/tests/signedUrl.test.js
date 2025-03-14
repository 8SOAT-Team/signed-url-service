const request = require('supertest');
const app = require('../server');

describe('POST /signed-url', () => {
    it('should generate and return a signed URL', async () => {
        const res = await request(app)
            .post('/signed-url')
            .send({ bucketName: 'test-bucket', key: 'test-file.txt', expiresIn: 3600 });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('url');
    });
});
