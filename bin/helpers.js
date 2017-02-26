const fs = require('fs');

function formatDate(dateString) {
  return dateString.split(/T|Z/).join(' ').replace(/:/g, '.').trim();
}

function exportEntries(entries, dist) {
  let title;

  entries.forEach(entry => {
    title = formatDate(entry.creationDate);

    fs.writeFile(`${dist}/${title}.txt`, entry.text, err => {
      if (err) {
        console.error(`Failed exporting ${entry.creationDate}: ${err}`);
      }
    });
  });
}

module.exports = {
  exportEntries
};
