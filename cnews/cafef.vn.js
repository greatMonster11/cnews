const { upDb } = require('../utils')

const config = {
  nameNews: 'Cafe F',
  urlNews: 'https://cafef.vn'
}

const { upDb } = require('../utils')

const urlrss = [
  {
    url: 'http://cafef.vn/rss/chung-khoan.rss',
    retry: 0
  },
  {
    url: 'http://cafef.vn/rss/bat-dong-san.rss',
    retry: 0
  },
  {
    url: 'http://cafef.vn/rss/doanh-nghiep.rss',
    retry: 0
  },
  {
    url: 'http://cafef.vn/rss/tai-chinh-quoc-te.rss',
    retry: 0
  },
  {
    url: 'http://cafef.vn/rss/ngan-hang.rss',
    retry: 0
  },
  {
    url: 'http://cafef.vn/rss/song.rss',
    retry: 0
  }
]


const cafef = async () => {
  return await upDb(config, urlrss)
}

module.exports = cafef