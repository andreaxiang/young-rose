/**
 * Created by xiangxue on 17/6/15.
 */
var pageIndex = 0;
var isOver = false;
var isNewsArrive = true;

getNews();
$(window).on('scroll', checkNews)

function checkNews(){
  if( isShow($('.loadmore')) && !isOver && isNewsArrive ){
    getNews()
  }
}

function getNews(){
  isNewsArrive = false;

  $.get('/getNews', {page: pageIndex}).done(function(ret){
    isNewsArrive = true;

    if(ret.status === 0){
      pageIndex++;
      appendHtml(ret.data)
      checkNews()
    }else{
      alert('加载产品出错')
    }

  }).fail(function(){
    alert('系统异常')
  })
}

function appendHtml(news){
  if(news.length === 0){
    //$('.load-more').remove();
    isOver = true;
    $('.wrap').append('<div>^_^更多新品正在研发中，敬请期待哦～</div>')
    return;
  }
  var htmls = '';
  $.each(news, function(){
    htmls += `
           <li class="item">
              <a href="#"><img src=${this.img}></a>
              <div class="detail">
                 <h3>${this.title}</h3>
                 <p>&yen;${this.price}</p>
              </div>
           </li>
          `;
  })

  $('.wrap').append(htmls);
}


function isShow($node){
  console.log('show ', $node)
  var windowHeight = $(window).height(),
    scrollTop = $(window).scrollTop(),
    offsetTop = $node.offset().top,
    nodeHeight = $node.height();
  if(windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight){
    return true;
  }else{
    return false;
  }

}