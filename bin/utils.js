function parseFlags(argsArray) {
  return argsArray.reduce((flags, arg) => {
    if (arg.slice(0, 2) === '--') {
      flags[arg.slice(2)] = true;
    }

    return flags;
  }, {});
}

function formatDate(dateString) {
  return dateString.split('T')[0];
}

function formatLocation({placeName, localityName, administrativeArea, country}) {
  return `${placeName}\n${localityName}, ${administrativeArea}\n${country}`;
}

module.exports = {
  parseFlags,
  formatDate,
  formatLocation
};

