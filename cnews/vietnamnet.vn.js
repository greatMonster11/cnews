const { upDb } = require('../utils')

const config = {
  nameNews: 'Vietnamnet',
  urlNews: 'vietnamnet.vn'
}

const urlrss = [
  {
    url: 'http://vietnamnet.vn/rss/home.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/phap-luat.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/cong-nghe.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/kinh-doanh.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/giao-duc.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/thoi-su.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/giai-tri.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/suc-khoe.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/the-thao.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/doi-song.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/the-gioi.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/bat-dong-san.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/tin-moi-nong.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/ban-doc.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/tin-noi-bat.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/tuanvietnam.rss',
    retry: 0
  },
  {
    url: 'http://vietnamnet.vn/rss/goc-nhin-thang.rss',
    retry: 0
  }
]

const vnn = async () => {
  return await upDb(config, urlrss)
}

module.exports = vnn
