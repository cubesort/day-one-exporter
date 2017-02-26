const fs = require('fs');
const dayOneData = require(process.argv[2]);

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

function formatDate(dateString) {
  return dateString.split(/T|Z/).join(' ').trim();
}

function parseDayOneExport(entries) {
  let title;

  entries.map(entry => {
    title = formatDate(entry.creationDate);

    fs.writeFile(`dist/${title}.txt`, entry.text, err => {
      if (err) {
        console.error(`Failed exporting ${entry.creationDate}: ${err}`);
      }
    });
  });
}

parseDayOneExport(dayOneData.entries);
