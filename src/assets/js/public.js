//input
$(function(){
    if(localStorage.getItem("isReload")){
        $(".hint_text").hide();
    }else{
        $(".hint_text").show();
        localStorage.setItem("isReload", true)
    }
    $(".Text").focus(function(){ 
        if($(this).val() == this.defaultValue){
            $(this).val("");
        };
    });
    $(".Text").blur(function(){
        if ($(this).val() == ""){
            $(this).val(this.defaultValue);
        };
    });
});

$(function(){
    var w = $(window).width();
    var h = $(window).height();
    if(w<1200){
        $("body").addClass("mobile")
    }else{
        $("body").removeClass("mobile")
    }
    $(".header .nav .ls").hover(function(){
        var a_le = $(this).find("ul").find("li").length;
        $(this).find("ul").css("width",a_le*120)
        if(a_le>0){
            $(".header .nav_bac").stop().animate({'height':'50'});
            $(this).find("ul").stop().animate({'height':'50'})
        }else{
            $(".header .nav_bac").stop().animate({'height':'0'});
            $(this).find("ul").stop().animate({'height':'0'})
        }
    },function(){
        $(".header .nav_bac").stop().animate({'height':'0'});
        $(this).find("ul").stop().animate({'height':'0'}) 
    });
    //移动端一级导航点击触发
    $(".m_header .nav_icon").click(function(){
        if($(this).hasClass("cur")){
            $(this).removeClass("cur");
            $(".m_nav").removeClass("cur");
            $("body").removeClass("on")
        }else{
            $(this).addClass("cur");
            $(".m_nav").addClass("cur");
            $("body").addClass("on")
        }
    });
    //移动端二级导航点击触发
    $(".m_nav ul li").click(function(){
        $(this).siblings("li").find(".pos").slideUp();
        $(this).find(".pos").slideDown();
    });
    
    //浏览器提示语
    $(".hint_text span").click(function(){
        $(".hint_text").hide();
    })
    setTimeout(function(){
        $(".hint_text").hide();
    },10000);
})
//右侧悬浮
$(function(){
    var lazyheights = 0; 
    function showloads(){
        lazyheights = $(window).scrollTop();
        if ( lazyheights >= 10 ){
            $(".scroll").addClass("scroll_fixed");
        } else{
            $(".scroll").removeClass("scroll_fixed");
        } 
        if ( lazyheights >= 600 ){
            $(".suspension").addClass("suspension_fixed");
        } else{
            $(".suspension").removeClass("suspension_fixed");
        };
        

        if($(".ind06 .next .a_1").hasClass("cur")){

        }else{
            var w = $(window).width();
            var h = $(window).height();
            if(w>1200){
                if ( lazyheights >= (2516 + h)){
                    $(".ind06 .next .a_1 video").trigger("play");
                    $(".ind06 .next .a_1 .pic,.ind06 .next .a_1 .icon").hide();
                }else{
                    $(".ind06 .next .a_1 video").trigger("pause");
                    $(".ind06 .next .a_1 .pic,.ind06 .next .a_1 .icon").show();
                }
            }
            
        }
        
    }
    $(window).bind("scroll", function(){
        showloads();
    });
    
});
//返回顶部
function gotoTop(acceleration,stime) {
   acceleration = acceleration || 0.1;
   stime = stime || 10;
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var x3 = 0;
   var y3 = 0; 
   if (document.documentElement) {
       x1 = document.documentElement.scrollLeft || 0;
       y1 = document.documentElement.scrollTop || 0;
   }
   if (document.body) {
       x2 = document.body.scrollLeft || 0;
       y2 = document.body.scrollTop || 0;
   }
   var x3 = window.scrollX || 0;
   var y3 = window.scrollY || 0;
 
   // 滚动条到页面顶部的水平距离
   var x = Math.max(x1, Math.max(x2, x3));
   // 滚动条到页面顶部的垂直距离
   var y = Math.max(y1, Math.max(y2, y3));
 
   // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
 
   // 如果距离不为零, 继续调用函数
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
};


//窗口
$(window).resize(function(){
    //location.replace(document.referrer);//返回到上一页
    //location=location
    // if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    //     location=location
    // }
    
});
$(function(){
    function browserVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //Edge浏览器
        var isFirefox = userAgent.indexOf("Firefox") > -1; //Firefox浏览器
        var isOpera = userAgent.indexOf("Opera")>-1 || userAgent.indexOf("OPR")>-1 ; //Opera浏览器
        var isChrome = userAgent.indexOf("Chrome")>-1 && userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Chrome浏览器
        var isSafari = userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Chrome")==-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Safari浏览器
        if(isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            $("body").addClass("body_Ie");
            // if(fIEVersion == 7) {
            //     return 'IE7';
            // } else if(fIEVersion == 8) {
            //     return 'IE8';
            // } else if(fIEVersion == 9) {
            //     return 'IE9';
            // } else if(fIEVersion == 10) {
            //     return 'IE10';
            // } else {
            //     return 'IE6';//IE版本<7
            // }
            
        } else if(isIE11) {
            $("body").addClass("body_Ie");
            //console.log("IE11")
        } else if(isEdge) {
            //console.log("Edge")
        } else if(isFirefox) {
            //console.log("Firefox")
        } else if(isOpera) {
            //console.log("Opera")
        } else if(isChrome) {
            //console.log("Chrome");
        } else if(isSafari) {
            //console.log("Safari");
        } else{
            //console.log("不是ie浏览器");
        }
    };
    browserVersion();
});

/* $(function(){
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        console.log ('这里是移动端');
    }else {
        console.log ('这里是电脑端');
        $(window).resize(function(){
            // location=location
            var w = $(window).width();
            if(w<1201){
                (function (win, doc) {
                    if (!win.addEventListener) return;
                    var html = document.documentElement;
                    function setFont() {
                        var html = document.documentElement;
                        var k = 750;
                        html.style.fontSize = html.clientWidth / k * 100 + "px";
                    }
                    setFont();
                    setTimeout(function () {
                        setFont();
                    }, 300);
                    doc.addEventListener('DOMContentLoaded', setFont, false);
                    // win.addEventListener('resize', setFont, false);
                    win.addEventListener('load', setFont, false);
                })(window, document);
            }
        });
    }
}); */







