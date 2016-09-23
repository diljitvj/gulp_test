var gulp = require("gulp");
var fs = require('fs');

gulp.task('default', function() {

    var cheerio = require("cheerio");
    var xml = fs.readFileSync('./config.xml');
    var $ = cheerio.load(xml, { xmlMode: true });
    var version = $('widget')[0].attribs.version;
    console.log(version);

});
