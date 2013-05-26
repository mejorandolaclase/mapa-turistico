var app      = require('../app'),
    request  = require('supertest');


describe('#Places', function (){
    'use strict';

    describe('#POST /places', function () {
        it('should return 200', function (done) {
            var path = (__dirname + '/fixtures/bosque.jpg');
            request(app)
                .post('/places')
                .field('description' ,'Este es un lugar bonito')
                .field('city' ,'Santo Domingo')
                .field('country' ,'Republica Dominica')
                .field('name' ,'Faro colon')
                .field('lat' , '40')
                .field('lng' , '40')
                .attach('file', path)
                .expect(201, done);
        });

        it('should returnar 400 because the post is wrong', function (done) {
            request(app)
                .post('/places')
                .send({})
                .set('Accept', 'application/json')
                .expect(400, done);
        });
    });

    describe('#GET /places', function () {
        it('should return 200 and objects json', function (done) {
            request(app)
                .get('/places')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200,done);
        });
    });
});