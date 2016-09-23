let cheerio = require("cheerio");

let xml = fs.readFileSync('./config.xml');
let $ = cheerio.load(xml, {xmlMode: true});
let version   = $('widget')[0].attribs.version;

console.log("version");
