const { db, getDataNews } = require('../utils')

const nameNews = 'Vietnamnet'
const urlNews = 'vietnamnet.vn'

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

const vnnData = async () => await getDataNews(nameNews, urlrss)

const vnn = async () => {
  const initdb = await db()
  const dataVnn = await vnnData()
  for (let item of dataVnn.data) {
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
      timeStart: dataVnn.timeStart,
      timeEnd: +new Date(),
      successRate: dataVnn.successRate
    })
    .then(() => {})
    .catch(error => console.log(error))

  return '-> success'
}
module.exports = vnn
