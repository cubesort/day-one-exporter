const fs = require('fs');
const utils = require('./utils');

function append(entries, dist, flagsArray) {
  const flags = utils.parseFlags(flagsArray);

  entries.forEach(entry => {
    const title = utils.formatDate(entry.creationDate);
    const path = `${dist}/${title}.txt`;
    let text = entry.text;

    if (flags.location) {
      text = `${utils.formatLocation(entry.location)}\n\n${text}`;
    }

    if (fs.existsSync(path)) {
      fs.appendFile(path, `\n\n----\n\n${text}`, err => {
        if (err) {
          console.error(`Failed exporting ${entry.uuid}: ${err}`);
        }
      });
    } else {
      fs.writeFileSync(path, text);
    }
  });
}

module.exports = {
  append
};
