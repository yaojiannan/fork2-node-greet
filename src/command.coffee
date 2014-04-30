parseArgs = require('minimist');
greet = require('../lib/index.coffee');

args = parseArgs(process.argv.slice(2));

module.exports = ->
	cosole.log(greet(args._[0], args.drunk))