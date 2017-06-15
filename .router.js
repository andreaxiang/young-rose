function setRouter(app){ 
 var router = app; 

app.get('/getNews', function(req, res) {

  var news = [
    {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a19f34.jpg',
      title: '清新百合',
      price: '65.00'
    }, {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a329b4.jpg',
      title: '楼兰姑娘',
      price: '100.00'
    }, {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a66082.jpg',
      title: '花好月圆',
      price: '169.00'
    },
    {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a6d2f2.jpg',
      title: '春风十里',
      price: '405.00'
    }, {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a94086.jpg',
      title: '友谊常青',
      price: '100.00'
    }, {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838aa0a67.jpg',
      title: '桃李芬芳',
      price: '145.00'
    },
    {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838acfa0f.jpg',
      title: '栀子花开',
      price: '305.00'
    }, {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a19f34.jpg',
      title: '夏日香气',
      price: '100.00'
    }, {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a66082.jpg',
      title: '海阔天空',
      price: '245.00'
    },
    {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838aa0a67.jpg',
      title: '情意绵绵',
      price: '105.00'
    }, {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a329b4.jpg',
      title: '夕阳天使',
      price: '99.00'
    }, {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838acfa0f.jpg',
      title: '文艺青年',
      price: '66.60'
    },
    {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a94086.jpg',
      title: '友谊常青',
      price: '100.00'
    }, {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838aa0a67.jpg',
      title: '桃李芬芳',
      price: '145.00'
    },
    {
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838acfa0f.jpg',
      title: '栀子花开',
      price: '305.00'
    },{
      img: 'https://ooo.0o0.ooo/2017/06/15/5942838a66082.jpg',
      title: '春风十里',
      price: '169.00'
    }
  ];

  var pageIndex = req.query.page;
  var len = 4;

  var retNews = 	news.slice(pageIndex*len, pageIndex*len+len);


  res.send({
    status: 0,
    data: retNews
  });
});

}
 module.exports.setRouter = setRouter