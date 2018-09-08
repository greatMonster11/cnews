const { db, getDataNews } = require('../utils')

const nameNews = 'Người lao động'
const urlNews = 'nld.com.vn'

const urlrss = [
  {
    url: 'https://nld.com.vn/tin-moi-nhat.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/thoi-su.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/thoi-su-quoc-te.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/trich-dan-nong.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/tin-doc-quyen.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/noi-thang.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/kinh-te.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/cong-doan.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/giao-duc-khoa-hoc.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/phap-luat.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/van-nghe.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/the-thao.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/suc-khoe.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/ban-doc.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/cong-nghe-thong-tin.rss',
    retry: 0
  },
  {
    url: 'https://nld.com.vn/dia-phuong.rss',
    retry: 0
  }
]

const nldData = async () => {
  const data = await getDataNews(nameNews, urlrss)
  return data
}

const nld = async () => {
  const initdb = await db()
  const dataNld = await nldData()

  for (let item of dataNld.data) {
    initdb
      .collection('datacnews')
      .updateOne(
        { link: item.link },
        {
          $set: {
            ...item,
            urlNews: urlNews,
            nameNews: nameNews
          },
          $inc: { count: 1 }
        },
        { upsert: true }
      )
      .then(() => {})
      .catch(error => console.log(error))
  }
  // log
  initdb
    .collection('logcnews')
    .insertOne({
      urlNews: urlNews,
      nameNews: nameNews,
      timeStart: dataNld.timeStart,
      timeEnd: +new Date(),
      successRate: dataNld.successRate
    })
    .then(() => {})
    .catch(error => console.log(error))

  return '-> success'
}
module.exports = nld
