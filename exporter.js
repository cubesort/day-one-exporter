const fs = require('fs');
const exportEntries = require('./bin/helpers').exportEntries;

const dayOneData = require(process.argv[2]).entries;
const outputPath = 'dist';

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}

exportEntries(dayOneData, outputPath);
