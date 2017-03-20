const fs = require('fs');
const exportHelpers = require('./bin/exportHelpers');
const dayOneData = require(process.argv[2]).entries;

// config
const outputPath = 'dist';

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}

exportHelpers.append(dayOneData, outputPath);
