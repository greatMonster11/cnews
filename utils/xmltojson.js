const parseString = require('xml2js').parseString
const xml = `
<rss version="2.0">
<channel>
<title>VietNamNet - Pháp luật</title>
<description>Chuyên mục Pháp luật - Báo VietNamNet</description>
<link>http://vietnamnet.vn</link>
<copyright>© VietNamNet - Báo VietNamNet</copyright>
<generator>VietNamNet.CMS.UI.Generator - version 1.5</generator>
<item>
<title>
Đại gia nào bỏ nghìn đô mua dâm hoa hậu, á khôi, người mẫu?
</title>
<description>
<![CDATA[
<p>Khi tên tuổi các hoa hậu, á hậu, người mẫu bán dâm công khai, các đối tượng môi giới dính án thì danh tính đại gia mua dâm vẫn là một ẩn số.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/18/dai-gia-nao-bo-nghin-do-mua-dam-hoa-hau-a-khoi-nguoi-mau.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/dai-gia-nao-bo-nghin-do-mua-dam-hoa-hau-a-khoi-nguoi-mau-475514.html
</link>
<pubDate>08/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/18/dai-gia-nao-bo-nghin-do-mua-dam-hoa-hau-a-khoi-nguoi-mau.jpg
</image>
</item>
<item>
<title>
Cao Bằng: Chồng giết vợ rồi nhét xác vào bao tải phi tang
</title>
<description>
<![CDATA[
<p>Sau khi cự cãi với vợ, Hải dùng tay bóp cổ vợ đến chết rồi cho xác vợ vào bao tải phi tang.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/08/18/cao-bang-chong-giet-vo-roi-nhet-xac-vao-bao-tai-phi-tang.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/cao-bang-chong-giet-vo-roi-nhet-xac-vao-bao-tai-phi-tang-475682.html
</link>
<pubDate>08/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/08/18/cao-bang-chong-giet-vo-roi-nhet-xac-vao-bao-tai-phi-tang.jpg
</image>
</item>
<item>
<title>
Thêm nhiều á hậu dính vào đường dây bán dâm 25.000 USD
</title>
<description>
<![CDATA[
<p>Công an TP.HCM vừa triệu tập một số á hậu và truy thêm nhiều chân dài nổi tiếng khác trong làng giải trí, liên quan đến đường dây mại dâm 25.000 USD.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/15/them-nhieu-a-hau-dinh-vao-duong-day-ban-dam-25-000-usd.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/them-nhieu-a-hau-dinh-vao-duong-day-ban-dam-25-000-usd-475413.html
</link>
<pubDate>07/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/15/them-nhieu-a-hau-dinh-vao-duong-day-ban-dam-25-000-usd.jpg
</image>
</item>
<item>
<title>
Cuồng ghen, chồng giết vợ 17 tuổi rồi tự sát trước mặt mẹ vợ
</title>
<description>
<![CDATA[
<p>Ghen tuông cuồng nộ, gã chồng ở miền Tây ra tay sát hại vợ mới 17 tuổi rồi cầm dao tự tử trước mặt mẹ vợ.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/08/18/cuong-ghen-chong-giet-vo-17-tuoi-roi-tu-sat-truoc-mat-me-vo.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/cuong-ghen-chong-giet-vo-17-tuoi-roi-tu-sat-truoc-mat-me-vo-475681.html
</link>
<pubDate>08/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/08/18/cuong-ghen-chong-giet-vo-17-tuoi-roi-tu-sat-truoc-mat-me-vo.jpg
</image>
</item>
<item>
<title>Sợ lộ chuyện ngoại tình nên hoang báo bị cướp</title>
<description>
<![CDATA[
<p>Bị con của nhân tình chém thương tích, nhưng ông T khi trình báo công an thì cho là bị cướp tấn công.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/08/10/so-lo-chuyen-ngoai-tinh-nen-hoang-bao-bi-cuop-2.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/so-lo-chuyen-ngoai-tinh-nen-hoang-bao-bi-cuop-475616.html
</link>
<pubDate>08/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/08/10/so-lo-chuyen-ngoai-tinh-nen-hoang-bao-bi-cuop-2.jpg
</image>
</item>
<item>
<title>Bắn chết người rồi bị…tâm thần</title>
<description>
<![CDATA[
<p>Sau khi bắn chết người, Lộc được giám định bị tâm thần và VKS ra quyết định bắt buộc y phải chữa bệnh.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/23/ban-chet-nguoi-1.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/ban-chet-nguoi-roi-bi-tam-than-475577.html
</link>
<pubDate>08/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/23/ban-chet-nguoi-1.jpg
</image>
</item>
<item>
<title>Á hậu, hoa khôi bán dâm, phi vụ ngàn đô cay đắng</title>
<description>
<![CDATA[
<p>Nhiều đường dây bán dâm ngàn đô liên quan đến các chân dài á hậu, hoa khôi, người mẫu bị phanh phui thời gian qua.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/06/14/lay-loi-khai-tu-ong-va-cac-a-hau-dien-vien-kiem-mc-cua-duong-day-mai-dam-khung.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/a-hau-hoa-khoi-ban-dam-phi-vu-ngan-do-cay-dang-475296.html
</link>
<pubDate>07/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/06/14/lay-loi-khai-tu-ong-va-cac-a-hau-dien-vien-kiem-mc-cua-duong-day-mai-dam-khung.jpg
</image>
</item>
<item>
<title>
'Hot girl' buôn ma túy, mỗi đêm không thể thiếu người tình nhận án tử
</title>
<description>
<![CDATA[
<p>Yến biến các mắt xích trong đường dây ma túy của mình thành người tình và những kẻ này dù luôn giáp mặt nhau nhưng đều nghĩ mình là người tình duy nhất của bà trùm.</p>
 
 <br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/19/hot-girl-ma-tuy-hang-dem-khong-the-thieu-nguoi-tinh-binh-than-nhan-an-tu.gif?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ky-su-phap-dinh/hot-girl-buon-ma-tuy-moi-dem-khong-the-thieu-nguoi-tinh-nhan-an-tu-475559.html
</link>
<pubDate>07/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/19/hot-girl-ma-tuy-hang-dem-khong-the-thieu-nguoi-tinh-binh-than-nhan-an-tu.gif
</image>
</item>
<item>
<title>
Vụ cướp ngân hàng ở Khánh Hòa: 'Kịch bản' đã lên từ 4 tháng trước
</title>
<description>
<![CDATA[
<p>Hôm nay, Công an tỉnh Khánh Hòa thông tin nhiều tình tiết bất ngờ về việc bắt giữ 2 nghi can dùng súng cướp ngân hàng ở địa phương này.</p>
 <br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/15/bat-ngo-ve-loi-khai-cua-2-ke-dung-sung-cuop-ngan-hang-o-khanh-hoa-5.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/vu-cuop-ngan-hang-o-khanh-hoa-kich-ban-da-len-tu-4-thang-truoc-475485.html
</link>
<pubDate>07/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/15/bat-ngo-ve-loi-khai-cua-2-ke-dung-sung-cuop-ngan-hang-o-khanh-hoa-5.jpg
</image>
</item>
<item>
<title>
Cô gái trẻ ở miền Tây bị người yêu tống tình bằng clip 'nóng'
</title>
<description>
<![CDATA[
<p>Cô gái trẻ ở miền Tây trình báo bị người yêu dùng clip "nóng" đe dọa để cưỡng dâm.</p>
 <br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/10/co-gai-tre-o-mien-tay-bi-nguoi-yeu-tong-tinh-bang-clip-nong.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/co-gai-tre-o-mien-tay-bi-nguoi-yeu-tong-tinh-bang-clip-nong-475402.html
</link>
<pubDate>07/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/10/co-gai-tre-o-mien-tay-bi-nguoi-yeu-tong-tinh-bang-clip-nong.jpg
</image>
</item>
<item>
<title>Bắt 2 nghi phạm vụ cướp ngân hàng ở Khánh Hòa</title>
<description>
<![CDATA[
<p>Cơ quan Công an vừa bắt giữ 2 nghi can dùng súng cướp ngân hàng ở Khánh Hòa, thu giữ lượng lớn tiền mặt.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/09/vu-cuop-ngan-hang-o-khanh-hoa-bat-2-doi-tuong.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/bat-2-nghi-pham-vu-cuop-ngan-hang-o-khanh-hoa-475374.html
</link>
<pubDate>07/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/09/vu-cuop-ngan-hang-o-khanh-hoa-bat-2-doi-tuong.jpg
</image>
</item>
<item>
<title>
Bé gái 3 tuổi ở nhà một mình bị gã hàng xóm 57 tuổi hại đời
</title>
<description>
<![CDATA[
<p>Lợi dụng lúc cháu bé 3 tuổi ở một mình, người đàn ông 57 tuổi ở Hồng Bàng, Hải Phòng đã thực hiện hành vi hiếp dâm.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/13/tam-giu-nghi-pham-hiep-dam-be-gai-3-tuoi.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/be-gai-3-tuoi-o-nha-mot-minh-bi-ga-hang-xom-57-tuoi-hai-doi-475451.html
</link>
<pubDate>07/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/13/tam-giu-nghi-pham-hiep-dam-be-gai-3-tuoi.jpg
</image>
</item>
<item>
<title>
Tú ông đường dây bán dâm 25.000 USD và hé lộ về bảng giá
</title>
<description>
<![CDATA[
<p>Từ 1 sinh viên chạy GrabBike kiếm sống, Kiều Đại Dũ trở thành ông trùm đường dây chăn dắt á hậu, người mẫu, diễn viên, MC bán dâm.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/06/13/anh-dai-dien.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/tu-ong-duong-day-ban-dam-25-000-usd-va-he-lo-ve-bang-gia-474591.html
</link>
<pubDate>06/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/06/13/anh-dai-dien.jpg
</image>
</item>
<item>
<title>
Nam thanh niên bị đâm nhiều nhát, chết tức tưởi trên phố
</title>
<description>
<![CDATA[
<p>Nam thanh niên đang chạy xe trên đường thì bị truy sát, đâm nhiều nhát dã man. Nạn nhân gục chết tại chỗ.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/14/nam-thanh-nien-bi-dam-chet-da-man-khi-dang-chay-xe-tren-duong.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/nam-thanh-nien-bi-dam-nhieu-nhat-chet-tuc-tuoi-tren-pho-475457.html
</link>
<pubDate>07/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/14/nam-thanh-nien-bi-dam-chet-da-man-khi-dang-chay-xe-tren-duong.jpg
</image>
</item>
<item>
<title>
Chém người bất thành, ném đạn pháo vào nhà đối thủ để...đe dọa
</title>
<description>
<![CDATA[
<p>Bức xúc chuyện vay tiền, gã đàn ông đã lấy vũ khí quân dụng, ném đầu đạn pháo vào nhà nạn nhân để đe dọa.</p><br /><img src="https://vnn-imgs-f.vgcloud.vn/2018/09/07/00/giet-nguoi-2.jpg?w=220" />
]]>
</description>
<link>
http://vietnamnet.vn/vn/phap-luat/ho-so-vu-an/chem-nguoi-bat-thanh-nem-dan-phao-vao-nha-doi-thu-de-de-doa-475351.html
</link>
<pubDate>07/09/2018 (GMT+7)</pubDate>
<image>
https://vnn-imgs-f.vgcloud.vn/2018/09/07/00/giet-nguoi-2.jpg
</image>
</item>
</channel>
</rss>
`
const xml2jsonPromise = xmlInput => {
  return new Promise((resolve, reject) => {
    parseString(xmlInput, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

const parserXmlToJson = async (nameNews, xml) => {
  const data = []
  const result = await xml2jsonPromise(xml)
  const items = result.rss.channel[0].item
  for (let i = 0; i < items.length; i++) {
    data.push({
      nameNews,
      title: items[i].title[0].replace(/(\r\n|\n|\r)/gm, '').trim(),
      link: items[i].link[0].replace(/(\r\n|\n|\r)/gm, ''),
      pubDate: +new Date(items[i].pubDate[0])
    })
  }

  return data
}

module.exports = parserXmlToJson