const fs = require('fs');
const utils = require('./utils');

function append(entries, dist) {
  let title;
  let path;

  entries.forEach(entry => {
    title = utils.formatDate(entry.creationDate);
    path = `${dist}/${title}.txt`;

    if (fs.existsSync(path)) {
      fs.appendFile(path, `\n\n----\n\n${entry.text}`, err => {
        if (err) {
          console.error(`Failed exporting ${entry.uuid}: ${err}`);
        }
      });
    } else {
      fs.writeFileSync(path, entry.text);
    }
  });
}

module.exports = {
  append
};
