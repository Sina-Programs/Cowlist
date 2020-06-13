const db = require("../database/database");

module.exports = {
  getCows: (callback) => {
    const query = "SELECT * FROM cowsTable";
    db.query(query, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  addCow: (cow, callback) => {
    const query =
      "INSERT IGNORE INTO cowsTable (cowName, cowDescription, cowUrl) VALUES (?, ?, ?)";
    db.query(query, [cow.name, cow.description, cow.url], (err) => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    });
  },

  updateCow: (cow, callback) => {
    const query =
      "UPDATE cowsTable SET cowName = ?, cowDescription = ? WHERE id = ?";
    db.query(query, [cow.name, cow.description, cow.id], (err) => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    });
  },

  deleteCow: (cow, callback) => {
    const query = "DELETE FROM cowsTable WHERE cowName = ?";
    db.query(query, [cow.name], (err) => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    });
  },
};
