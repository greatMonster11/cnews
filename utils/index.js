const db = require('./db')
const parserXmlToJson = require('./xmltojson')
const wait = require('./wait')
const getDataNews = require('./getdata');

module.exports = {
  db,
  parserXmlToJson,
  wait,
  getDataNews
}