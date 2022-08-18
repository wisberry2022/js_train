$(function () {

  var TXT = ['HOME', '01', '02', '03', '04', "king's portfolio"];
  //fullpage
  $('.main').fullpage({
    anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
    afterLoad: function (page, num) {
      $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
      $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
      $('.this_page').text(TXT[num - 1]);
      // $('.this_bg').css({
      //   backgroundPositionY: -(100 * (num - 1)) + "px"
      // });
      // $('.this_pic img').attr({ src: `./assets/image/lesedilarona0${num}.jpg` });
      // $('.this_tp').css({
      //   backgroundImage: `url(./assets/image/lesedilarona0${num}.jpg)`
      // });
    }
  });
})