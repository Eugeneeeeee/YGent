// start jquery
$(function(){
  //bg parallax event
  var windowWidth = $(window).width();

  $('#s1_bg').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
  var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
  $('#s1_bg_box').css('margin-left', moveX + 'px');
  $('#s1_bg_box').css('margin-top', moveY + 'px');
  // $('.s1_square_container').css('margin-left', -moveX + 'px');
  // $('.s1_square_container').css('margin-top', -moveY + 'px');
  });

  //  gnb hover > depth2 opens
  $('#gnb > div > ul > li:eq(1)').stop().mouseover(function(){
    $('.depth2').stop().slideDown();
  });
  $('#gnb > div > ul > li:eq(1)').stop().mouseleave(function(){
    $('.depth2').stop().slideUp();
  });

  // menu btn click > menu opens
  $('#menu_btn').click(function(){
    console.log('hi');
    $('#gnb').toggleClass('menu_active');
  });

  //menu btn animation
  $('#menu_btn').click(function(){
    $('.line').toggleClass('active');
  });

  //lang button click > language opens
  $('#lang_btn').click(function(){
    $('.language').slideToggle();
    $(this).find('i').toggleClass('icon_rotate')
  });

  // search button
  $('#search').click(function(){
    $('#search_bar').slideToggle(300);
  });

  //s2 yg album tracklist on
  $('.yg_life_box').mouseenter(function(){
    $(this).find('.tracklist').css('opacity',1);
  });
  $('.yg_life_box').mouseleave(function(){
    $(this).find('.tracklist').css('opacity',0);
  });

}); //end jquery
