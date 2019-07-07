/*$(document).bind("contextmenu", function(e) {
    return false;
});
$(function() {
    document.addEventListener('keydown', function(e) {
        e = window.event || e;
        var keycode = e.keyCode || e.which;
        if (e.ctrlKey && keycode == 83) { //屏蔽Ctrl+s 保存页面
            e.preventDefault();
            window.event.returnValue = false;
        }
        if (e.ctrlKey && keycode == 85) { //屏蔽Ctrl+u  查看页面的源代码
            e.preventDefault();
            window.event.returnValue = false;
        }
        if (keycode == 123) { //屏蔽F12
            e.preventDefault();
            window.event.returnValue = false;
        }
        if (e.ctrlKey && e.shiftKey && keycode == 73) { //屏蔽Ctrl+shift+i   屏蔽调出控制台 和F12一样
            e.preventDefault();
            window.event.returnValue = false;
        }
    });
});*/
$(function() {
    //延迟加载
    $(".lazy").lazyload({
        effect: "fadeIn",
        threshold: 200
    });
    //返回顶部
    $(".back2top").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });
    $(".t-back2top").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });
    //导航
    $(".meun-off").click(function() {
        //$(this).toggleClass("meun-on");
        $(".nav").slideDown(500);
    });

    $(".nav .close").click(function() {
        //$(this).toggleClass("meun-on");
        $(".nav").slideUp(500);
    });
    //banner
    $(".slide").slide({ titCell: ".hd ul", mainCell: ".bd ul", effect: "fade", vis: "auto", autoPlay: true, autoPage: true, trigger: "mouseover", switchLoad: "_src", interTime: 5000, delayTime: 800});

    $(".banner").slide({
        mainCell: ".bd ul",
        titCell: ".hd ul",
        autoPlay: true,
        autoPage: true,
        effect: "fold",
        interTime: 3000,
        delayTime: 1000,
        mouseOverStop: false,
        startFun: function(i, c) {
            var now = $(".banner .bd li").eq(i);
            if (now.attr("data-load") == "no") {
                now.css("backgroundImage", "url(" + now.attr("data-bg") + ")");
                now.attr("data-load", "yes");
            }
        },
        endFun: function(i, c) {
            var now = $(".banner .bd li").eq(i + 1);
            if (now.attr("data-load") == "no") {
                setTimeout(function() {
                    now.attr("data-load", "yes");
                    now.css("backgroundImage", "url(" + now.attr("data-bg") + ")");
                }, 3000);
            }
        }
    });
    //案例
    $(".case li").hover(function() {
        $(this).children(".case-summary").fadeIn();
        $(this).children("img").css({ "transform": "scale(1.1)" });

    }, function() {
        $(this).children(".case-summary").stop().fadeOut();
        $(this).children("img").css({ "transform": "scale(1)" });
    });

    //
    $(".nav a").hover(function() {
        $(this).children(".en").css({ "margin-top": "-80px" });
    }, function() {
        $(this).children(".en").stop().css({ "margin-top": "0px" });
    });

    //
    $(".share").hover(function() {
        $(this).find(".share-list").addClass("active");
    }, function() {
        $(this).find(".share-list").removeClass("active");
    });


    var a = 2560 / 973; //banner图比例
    var dw = $(document).width(); //当前窗口宽度
    var ih = dw / a; //计算banner区域新高度
    var p = dw + 'px' + ' ' + ih + 'px';
    var hp = ih - 40 + 'px';
    //console.log(ih);
    $('.banner .bd ul').css({ "height": ih });
    $('.banner .bd').css({ "height": ih });
    $('.banner .bd li').css({
        "height": ih,
        "background-size": p
    });
    $('.banner .hd').css({
        "top": hp
    });


});
$(window).resize(function() {
    var a = 2560 / 973; //banner图比例
    var dw = $(document).width(); //当前窗口宽度
    var ih = dw / a; //计算banner区域新高度
    var p = dw + 'px' + ' ' + ih + 'px';
    var hp = ih - 40 + 'px';
    //console.log(ih);
    $('.banner .bd ul').css({ "height": ih });
    $('.banner .bd').css({ "height": ih });
    $('.banner .bd li').css({
        "height": ih,
        "background-size": p
    });
    $('.banner .hd').css({
        "top": hp
    });
});


$(window).scroll(function() {
    //css3效果（使用方法：添加class：ani-view ）
    var _ismobile = false;
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var showNum = !_ismobile ? 4 : 16;
    $('.ani-view').each(function() {
        var pageQ1 = $(this).offset().top + $(this).height() / showNum;
        var pageQ3 = $(this).offset().top + $(this).height() / 1;
        if ((pageQ1 <= windowBottom) && (pageQ3 >= windowTop)) {
            if ($(this).hasClass("fade-in-down")) $(this).addClass('fadeInDown');
            if ($(this).hasClass("fade-in-left")) $(this).addClass('fadeInLeft');
            if ($(this).hasClass("fade-in-right")) $(this).addClass('fadeInRight');
            if ($(this).hasClass("indCon2-fade-in-down")) $(this).addClass('indCon2fadeInDown');
            if ($(this).hasClass("indCon2-fade-in-up")) $(this).addClass('indCon2fadeInUp');
        } else {
            if ($(this).hasClass('fadeInDown')) $(this).removeClass('ani-view fade-in-down fadeInDown');
            if ($(this).hasClass('fadeInLeft')) $(this).removeClass('ani-view fade-in-left fadeInLeft');
            if ($(this).hasClass('fadeInRight')) $(this).removeClass('ani-view fade-in-right fadeInRight');
            if ($(this).hasClass("indCon2fadeInDown")) $(this).addClass('ani-view indCon2-fade-in-down indCon2fadeInDown');
            if ($(this).hasClass("indCon2fadeInUp")) $(this).addClass('ani-view indCon2-fade-in-up indCon2fadeInUp');
        }
    });

    if ($(window).scrollTop() > 0) {
        $(".header").addClass("header-small");

    } else {
        $(".header").removeClass("header-small");
    }

});


var worksthumbs = {
    init: function() {
        $container = $('.case-content');
        $container.isotope({
            itemSelector: '.item',
            masonry: {
                columnWidth: ".item"
            }

        });

        $('#filters').on('click', 'a', function() {
            $('#filters a').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
            return false;
        });

        $container.find("img").each(function(index, element) {
            var imageUrl = $(this).attr("data-original");
            var img = new Image();
            img.src = imageUrl;
            img.onload = function() {
                $container.isotope('layout');
            }

        });

    }
}