const request = require('supertest');

// const { request } = require('express');
const app = require('../src/app');

test("/ return the home page", (done) => {
  request(app)
    .get("/")
      .expect(200)
      .expect('Content-Type', /html/)
    .end(function (err, res) {
        if (err) return done(err);
      done();
    });
});

test("/search/:name return ", (done) => {
  request(app)
    .get("/search/Batman")
    .expect(200)
    .expect('Content-Type',/json/)
    .end(function (err, res) {
      if (err) return done(err);
      expect(res.body.length).toBeGreaterThan(2);
      done();
    });
})
