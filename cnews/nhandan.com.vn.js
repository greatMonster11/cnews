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
  {
    url: 'http://www.nhandan.com.vn/rss/kinhte.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/vanhoa.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/xahoi.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/phapluat.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/congnghe.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/khoahoc.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/giaoduc.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/suckhoe.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/thegioi.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/thethao.html',
    retry: 0
  },
  {
    url: 'http://www.nhandan.com.vn/rss/bandoc.html',
    retry: 0
  }
]

const nd = async () => {
  return await upDb(config, urlrss)
}

module.exports = nd
