# Day One Exporter

Day One Exporter allows you to export your [Day One](http://dayoneapp.com) entries one entry per text file (*note* multiple entries of the same day will be exported to the same file).

## Prerequisite

You will need Node.js to run Day One Exporter. The latest version can be found [here](https://nodejs.org/en/).

## Instructions

- Export your Day One entries in JSON format
- Clone (or download and unzip) the repo
- Run command from Day One Exporter's directory: `node exporter DAY_ONE_EXPORT_PATH [--location]`
	- Substitute `DAY_ONE_EXPORT_PATH` with the exported JSON file’s path
	- `--location` is an optional flag to output location data
- You will find the results in `dist` folder inside Day One Exporter

## Road map

I hope to add following features:

- [ ] Option to use first line as title
- [ ] Option to export one entry per file regardless of creation date
- [ ] Ability to export multiple journals in one run
- [ ] Option to preserve metadata
	- [x] location
	- [ ] weather
	- [ ] time zone
- [ ] Photos support

## License

MIT
