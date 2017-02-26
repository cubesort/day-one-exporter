# Day One Exporter

Day One Exporter allows you to export your [Day One](http://dayoneapp.com) entries one entry per text file. Currently, it only exports text.

## Prerequisite

You need Node.js to run Day One Exporter. If you haven't already, download the latest version [here](https://nodejs.org/en/).

## Instructions

- Export your Day One entries in JSON format
- Clone (or download and unzip) the repo
- Change to Day One Exporter directory from Terminal (on Mac, you can drop Day One Exporter folder onto Terminal's dock icon)
- Run the script by typing `node exporter DAY_ONE_EXPORT_PATH` (substitute `DAY_ONE_EXPORT_PATH` with path of the JSON file you got from step one; on Mac, you can drop the file to Terminal window to get its path)
- You will find the results in `dist` folder inside Day One Exporter

## Road map

I hope to add following features:

- [ ] Option to use first line as title
- [ ] Option to have entries of the same day in the same file
- [ ] Ability to export multiple journals in one run
- [ ] Option to preserve metadata (weather, location, etc)
- [ ] Photos support

## License

MIT
