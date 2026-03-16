"use strict";

// init foundarion 
$(document).foundation(); //IE old version tip

var userAgent = window.navigator.userAgent;
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if (userAgent.indexOf("MSIE 7.0") > 0 || userAgent.indexOf("MSIE 8.0") > 0 || userAgent.indexOf("MSIE 9.0") > 0 || navigator.appVersion.indexOf("MSIE 10") !== -1) {
  var url = "browser.html";
  setTimeout(function () {
    $(location).attr('href', url);
  }, 0);
} // doc ready


(function ($, window, document) {
  // Window 相關設定
  var w = window,
      win = $(window),
      ww,
      wh,
      ws; // 取得Window設定值

  var windowSetting = function windowSetting() {
    ww = win.innerWidth();
    wh = win.innerHeight();
    ws = win.scrollTop();
  };

  windowSetting(); // ----------------------------------- Window 相關監測
  // window on scroll use javascript
  // Reference: https://stackoverflow.com/a/10915048
  // http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html#event-type-scroll

  function onScrollEventHandler(ev) {}

  function onResizeEventHandler(ev) {
    windowSetting();
  }

  if (w.addEventListener) {
    w.addEventListener('scroll', onScrollEventHandler, false);
    w.addEventListener('resize', onResizeEventHandler, false); // w.addEventListener('load', onLoadEventHandler, false);   
  } else if (w.attachEvent) {
    w.attachEvent('onscroll', onScrollEventHandler);
    w.attachEvent('onresize', onScrollEventHandler);
    w.attachEvent('load', onLoadEventHandler);
  } // =================================================


  $(document).ready(function () {
    var win = $(window),
        ww = win.innerWidth(),
        wh = win.innerHeight(),
        window_width = win.width(),
        ws = win.scrollTop();

    var resizeWindow = function resizeWindow() {
      ww = win.innerWidth();
      wh = win.innerHeight();
    }; // ----------------------------------- [START] go top
    //go top


    var $gotop = $(".gotop");
    $gotop.on("click touchstart", function () {
      $('html, body').animate({
        scrollTop: 0
      }, 400, "swing");
    }).focus(function () {
      $(this).blur();
    }); // ----------------------------------- [END] go top

    $(document).on('mouseenter', '.hd_page_pagename a', function () {
      var news = $(this).data('news');
      $('.newspic_box').removeClass('hover');
      $('.newspic_box[data-news=' + news + ']').addClass('hover');
    });
    $(document).on('mouseleave', '.hd_page_pagename a', function () {
      $('.newspic_box').removeClass('hover');
    });
    $(document).on('mouseenter', '.hd_link, .hd_page_content', function () {
      var headerhover = $(this).data('headerhover');
      $('.hd_page_content[data-headerhover=' + headerhover + ']').addClass('hover');
    });
    $(document).on('mouseleave', '.hd_link, .hd_page_content', function () {
      $('.hd_page_content').removeClass('hover');
    });
    $(document).on('click', '.mo_menu', function () {
      if ($('.mo_menu').hasClass('open') == false) {
        $('.mo_menu').addClass('open');
        $('.header-center__pagelink').addClass('open');
      } else {
        $('.mo_menu').removeClass('open');
        $('.header-center__pagelink').removeClass('open');
      }
    });
    $(document).on('click', '.ft_unit .title', function () {
      if ($(this).hasClass('open') == false) {
        $('.ft_unit .title').removeClass('open');
        $('.ft_pagelistbox').removeClass('open');
        $(this).addClass('open');
        $(this).next('.ft_pagelistbox').addClass('open');
      } else {
        $('.ft_unit .title').removeClass('open');
        $('.ft_pagelistbox').removeClass('open');
      }
    }); // $(document).on('click','.hd_search',function(){
    // 	$('.searchbar').addClass('click');
    // });
    // $(document).on('click','.searchbar_close',function(){
    // 	$('.searchbar').removeClass('click');
    // });

    if ($('.calink_box').length == 3) {
      $('.calink').addClass('three');
    } else if ($('.calink_box').length == 4) {
      $('.calink').addClass('four');
    }

    if (ww >= 1024) {
      var scroll_w = $('.hd_page_pagename .grid-x').width();
      $('#headerpage').mCustomScrollbar({
        theme: "dark",
        // 設定捲軸樣式
        setWidth: scroll_w,
        // 設定寬度
        setHeight: 250 // 設定高度

      });
    }

    var rellax = new Rellax('.mapbg'); // browser瀏覽器判斷
    // ----------------------------------- 

    if (_uac.browser == "ie11" || _uac.browser == "ie10" || _uac.browser == "ie9" || _uac.browser == "ie8" || _uac.browser == "ie" || _uac.browser == "edge") {
      $('html').addClass('ie');
    } else if (_uac.browser == "Firefox") {
      $('html').addClass('firefox');
    } else if (_uac.browser == "opera") {
      $('html').addClass('opera');
    } else if (_uac.browser == "safari") {
      $('html').addClass('safari');
    } else if (_uac.browser == "chrome") {
      $('html').addClass('chrome'); //init ease scroll
      // ----------------------------------- 

      $('html').easeScroll({
        frameRate: 20,
        animationTime: 1000,
        stepSize: 120,
        pulseAlgorithm: !0,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: !0,
        arrowScroll: 50
      });
    } // var window_top_position = win.scrollTop();
    // if(window_top_position == 0){
    // 	$('.gotop, .contact_btn').css('opacity', 0);
    // }else{
    // 	$('.gotop, .contact_btn').css('opacity', 1);
    // }
    // 頁面滾動時的動畫判斷


    $(document).scroll(function () {
      var window_height = win.height();
      var window_top_position = win.scrollTop();
      var window_bottom_position = window_top_position + window_height - 400;
      var footer_h = $('footer').height();
      var footer_contact_h = $('.footer_contact').height();
      var body_h = $('body').height();

      if (ww >= 1024) {
        if (window_top_position == 0) {
          $('.gotop, .contact_btn').addClass('opa');
        } else if (window_bottom_position <= body_h - footer_h - footer_contact_h - 70) {
          $('.gotop, .contact_btn').removeClass('stop').addClass('scroll');
          $('.gotop, .contact_btn').removeClass('opa');
        } else {
          $('.gotop, .contact_btn').removeClass('scroll').addClass('stop');
          $('.gotop, .contact_btn').removeClass('opa');
        }
      } else {
        if (window_top_position == 0) {
          $('.gotop, .contact_btn').addClass('opa');
        } else if (window_bottom_position <= body_h - footer_h - footer_contact_h - 45) {
          $('.gotop, .contact_btn').removeClass('stop').addClass('scroll');
          $('.gotop, .contact_btn').removeClass('opa');
        } else {
          $('.gotop, .contact_btn').removeClass('scroll').addClass('stop');
          $('.gotop, .contact_btn').removeClass('opa');
        }
      }
    });
  }); // end doc ready
})(jQuery, window, document);