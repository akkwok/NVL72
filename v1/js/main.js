/*需要計算高度時*/
// (function(){ 
// 	var pageInit=function(){
// 		$window=$(window);
// 		$wp=$(".overview-wrapper");
// 		$rwf=$("#Helios-width-full");
// 		$sso=$("#sectionOverview");
// 		$oldsso=$("#old-sectionOverview");
// 		$sso_b=$("#special-sectionOverview");

// 		$window.load(pageResize); //works in chrome
// 		$window.resize(pageResize);
// 	}
// 	var pageResize=function(){
// 		$sso.css({"height":$rwf.height()});
// 		$oldsso.css({"height":$rwf.height()});
// 		$sso_b.css({"height":$rwf.height()});
// 	};
// 	$(document).ready(function($) {
// 		pageInit();	
// 	});

// })();

$(function () {
  // this page
  click_tab();
  // click_video();
});
/*計算寬度與置中*/
var App = App || {};
App.utils = App.utils || {};

$(function() {
    var a = $(window),
        c = $(this).width();
    a.on("resize.hackBootstrap", function() {
        c = a.width();
        var e = App.responsive ? c : Math.max(1E3, c);
        $(".m-wrap").css({
            "margin-left": ($("#special-sectionOverview, #sectionOverview, #old-sectionOverview").width() - e) / 2,
            width: e
        });
       
        $(".html").css("overflow-x", 1E3 < c ? "hidden" : "")
    }).trigger("resize.hackBootstrap");
    if ($.scrollTo) a.on("scroll.hackBootstrap", function() {
        1E3 < c 
    });
});
App.responsive = !0;


// $(function(){
//     $('.back-to-top').click(function(){
//         var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
//         $body.animate({
//                 scrollTop: 0
//         }, 800);
//     });
// });

$(function() {
    // --- 主導航
    $('.BMC_nav').navScroll({
        mobileDropdown: false,
        mobileBreakpoint: 768,
        scrollSpy: true
    });

    $('#BMC-nav ul li a').on('click', function() {
        $('#BMC-nav ul li').removeClass('on');
        $(this).parent().addClass('on');
    });

    // --- 卡片導航 nav_list
    $('.nav_list').navScroll({
        mobileDropdown: false,
        mobileBreakpoint: 768,
        scrollSpy: false // 卡片通常不用自動高亮，可視情況打開
    });

    // 阻止佔位用的 href="#" 跳到頂部
    $('.nav_list').on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });

    // nav_list 點擊額外補償 100px
    $('.nav_list').on('click', 'a[href^="#"]:not([href="#"])', function(e) {
        var $target = $(this.hash);
        if ($target.length) {
            e.preventDefault();
            // 這裡直接基於 navScroll 已經加過的 +180，再額外扣掉 100
            var scrollTop = $target.offset().top + 180 - 230; 
            $('html, body').stop(true).animate({ scrollTop: scrollTop }, 800);
        }
    });
});



//gif
    $(function () {
    $(".gif-container .gif-btn-control a, .gif-container .gif-btn-control .play-pause-button").on("keydown click", function () {
        var $container = $(this).closest('.gif-container'); // 找到當前的 gif-container
        var isPaused = $container.hasClass('pause'); // 判斷當前是否為暫停狀態

        if (isPaused) {
            $(this).removeClass('play').attr("aria-label", "Pause the motion");
            $container.removeClass('pause');
        } else {
            $(this).addClass('play').attr("aria-label", "Play the motion");
            $container.addClass('pause');
        }
    });
});

// ---------   click_tab   ---------
function click_tab() {
  $('.js_tabLink').click(function () {
    let $this = $(this);
    let thisID = $this.attr('data-id'); // 目標面板的選擇器

    // ✅ 更新 tab 狀態
    $this
      .addClass('on')
      .attr('aria-selected', 'true')        // 被選 tab 設 aria-selected=true
      .siblings('.js_tabLink')
      .removeClass('on')
      .attr('aria-selected', 'false');      // 其他 tab 設 aria-selected=false

    // ✅ 更新 panel 狀態
    let $container = $this.parents('.js_tabContainer');
    $container.find(thisID)
      .addClass('show')
      .attr('aria-hidden', 'false')         // 顯示的面板設 aria-hidden=false
      .siblings('.js_tabContent')
      .removeClass('show')
      .attr('aria-hidden', 'true');         // 隱藏的面板設 aria-hidden=true

    return false; // 阻止預設跳轉
  });
}


//Scroll indicate
// $(window).load(function(){
//     $(window).scroll(function(){
//         var a = $(window).scrollTop();
//         if(a > 1000){
//             $(".back-to-top").fadeIn();
//         }else{
//             $(".back-to-top").fadeOut();
//         }
//     });
// });



// $(function() {
//     var a = "Helios",
//         b = {
//             hd_draggable: function() {
//                 var b = $("#" + a + "-width-full .screen");
//                 var t = $(".ctr_line").find('img');
//                 var desktop = $(".desktop");
//                 b.find(".ctr_line").draggable({
//                     axis: "x",
//                     scroll: !1,
//                     drag: function(a, c) {
//                         var d = c.position.left,
//                             e = b.width();
//                         b.find(".desktop .left").width( (d + t.width()/2) / (desktop.width()/100) + "%")
//                     }
//                 });
//             },
//         };
//     b.hd_draggable()
// });


// $(function(){
//     /**/
//     $("#beforeafter").twentytwenty({
//         default_offset_pct: 0.6458
//     });
// });

