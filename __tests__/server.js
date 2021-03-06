const request = require('supertest');

const server = require('../api/server.js');

describe('server.js', () => {
    describe('/ endpoint', () => {
        it('should return status 200', async () => {
            let response = await request(server).get('/');
            expect(response.status).toBe(200);
        });

        it('should return json object', async () => {
            let response = await request(server).get('/');
            expect(response.type).toBe('application/json');
        });

        it('should return {api: \'running\'}', async () => {
            let response = await request(server).get('/');
            expect(response.body).toEqual({api: 'running'});
        });
    });
});