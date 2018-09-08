require('dotenv').config('../.env')
const MongoClient = require('mongodb').MongoClient

const initMongo = async (url, dbName) => {
  try {
    const client = await MongoClient.connect(
      url,
      { useNewUrlParser: true }
    )
    console.log('Connected to database!')
    return client.db(dbName)
  } catch (error) {
    console.log(error.stack)
  }
}

const db = async () => {
  return await initMongo(process.env.MONGODB, process.env.DBNAME)
}

module.exports = db
