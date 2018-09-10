const { upDb } = require('../utils')

const config = {
  nameNews: 'Dan Tri',
  urlNews: 'https://dantri.com.vn'
}

const urlrss = [
  {
    url: 'http://dantri.com.vn/trangchu.rss',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/suc-khoe.rss',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/xa-hoi.rss',
    retry: 0
  },
  {
    url: '(http://dantri.com.vn/giao-duc-khuyen-hoc.rss',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/giai-tri.rss',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/the-thao.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/the-gioi.rss',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/kinh-doanh.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/o-to-xe-may.rss',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/suc-manh-so.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/tinh-yeu-gioi-tinh.rss',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/chuyen-la.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/viec-lam.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/tam-long-nhan-ai.rss',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/phap-luat.rss',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/ban-doc.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/dien-dan.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/tuyen-sinh.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/blog.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/van-hoa.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/du-hoc.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/du-lich.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/doi-song.rss)',
    retry: 0
  },
  {
    url: 'http://dantri.com.vn/khoa-hoc-cong-nghe.rss)',
    retry: 0
  }
]


const dantri = async () => {
  return await upDb(config, urlrss)
}

module.exports = dantri