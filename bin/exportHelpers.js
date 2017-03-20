const fs = require('fs');
const utils = require('./utils');

function append(entries, dist) {
  let title;

  entries.forEach(entry => {
    title = utils.formatDate(entry.creationDate);

    fs.appendFile(`${dist}/${title}.txt`, entry.text, err => {
      if (err) {
        console.error(`Failed exporting ${entry.creationDate}: ${err}`);
      }
    });
  });
}

module.exports = {
  append
};
