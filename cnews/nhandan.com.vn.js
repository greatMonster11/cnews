const { upDb } = require('../utils')

const config = {
  nameNews: 'Nhân dân',
  urlNews: 'nhandan.com.vn'
}

const urlrss = [
  {
    url: 'http://nhandan.com.vn/rss/chinhtri.html',
    retry: 0
  },
  
  
]

const nd = async () => {
  return await upDb(config, urlrss)
}

module.exports = nd
