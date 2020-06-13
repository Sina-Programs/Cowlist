const models = require("../models/models");
const API_KEY = require("../config");
const axios = require("axios");

module.exports = {
  get: (req, res) => {
    models.getCows((err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.send(data);
      }
    });
  },

  post: (req, res) => {
    axios
      .get(
        `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&query=cow`
      )
      .then((img) => {
        const url = img.data.urls.thumb;
        req.body.url = url;
        models.addCow(req.body, (err) => {
          if (err) {
            console.log(err);
            res.sendStatus(400);
          } else {
            res.sendStatus(201);
          }
        });
      });
  },

  update: (req, res) => {
    console.log(req.body);
    models.updateCow(req.body, (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    });
  },

  delete: (req, res) => {
    models.deleteCow(req.query, (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.sendStatus(201);
      }
    });
  },
};
