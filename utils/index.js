const db = require('./db')
const parserXmlToJson = require('./xmltojson')
const wait = require('./wait')
const getDataNews = require('./getdata');
const upDb = require('./updb');

module.exports = {
  db,
  upDb,
  parserXmlToJson,
  wait,
  getDataNews
}