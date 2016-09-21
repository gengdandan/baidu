/**
 * Created by Administrator on 2016/8/23.
 */
//触摸事件
$(".fullpage").mousedown(function(e){
    e.preventDefault()
    $(".fullpage").mousemove(function(e){
        e.preventDefault()
    })
})
$(".lunchuan").css("transform","translate(0,0)").css("opacity",1)
var ch=$(window).height()
$(".con1bigbox").css("height",ch)
$("con-yunbox").css("height",ch)
$(".con2bigbox").css("height",ch)
$("content2").css("height",ch)
$(".con3bigbox").css("height",ch)
$("content3").css("height",ch)
$(".con4bigbox").css("height",ch)
$("content4").css("height",ch)
var flag=true
var num=0
touch.on(".fullpage","swipe",function(e){
    if(e.direction=="down"){
        /*方向  开关  数字关联*/
        if(num==0){
            return
        }
        if(!flag){
            return
        }
        flag=false
        num--
        $(".fullpage").css("marginTop",-num*ch)
        $(".rightdian>li").css("background","").eq(num).css("background","#666")
    }else if(e.direction=="up"){
        if(num==$(".section").length-1){
            return
        }
        if(!flag){
            return
        }
        flag=false
        num++
        $(".fullpage").css("marginTop",-num*ch)
        $(".rightdian>li").css("background","").eq(num).css("background","#666")
    }
    $(".section").each(function(index,obj){
        if(index==num){
          $(obj).find(".left").css("transform","translate(0,0)").css("opacity",1)
            $(obj).find(".right").css("transform","translate(0,0)").css("opacity",1)
        }else{
            $(obj).find(".left").css("transform","translate(-50px,0)").css("opacity",0.4)
            $(obj).find(".right").css("transform","translate(50px,0)").css("opacity",0.4)
        }
    })
    $(window).resize(function(){
        var ch=$(window).height()
        $(".con1bigbox").css("height",ch)
        $("con-yunbox").css("height",ch)
        $(".con2bigbox").css("height",ch)
        $("content2").css("height",ch)
        $(".con3bigbox").css("height",ch)
        $("content3").css("height",ch)
        $(".con4bigbox").css("height",ch)
        $("content4").css("height",ch)
        $(".fullpage").css("marginTop",-num*ch)
    })
})
$(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
    flag=true
})

//导航的二维码出现与消失
$(".hot").hover(function(){
    $(".erweima").css("display","block")
},function(){
    $(".erweima").css("display","none")
})


//响应
var flag=true
$(".small-right").click(function(){
    if(flag){
    $(".small-one").css({"transform":"translate(0,6px) rotate(45deg)"})
    $(".small-two").css({"transform":"translate(0,-4px) rotate(-45deg)"})
        $(".menu").css({"height":400})
        $(".menu li a").each(function(index,obj){
            $(obj).css({
                "opacity":1,
                "transition": "all 0.4s ease "+index*0.2+"s"})
        })
        flag=false
    }else{
        $(".small-one").css({"transform":""})
        $(".small-two").css({"transform":""})
        $(".menu").css({"height":0})
        $(".menu li a").each(function(index,obj){
            $(obj).css({
                "opacity":0,
                "transition": "all 0.4s ease "+index*0.2+"s"})
        })
        flag=true
    }
})

//右边的圆点移入与移出
$(".rightdian>li").mouseover(function(){
    var index=$(".rightdian>li").index(this)
    $(".rightzi>li").eq(index).finish().animate({opacity:0.7})
})
$(".rightdian>li").mouseout(function(){
    var index=$(".rightdian>li").index(this)
    $(".rightzi>li").eq(index).finish().animate({opacity:0})
})


//圆点的点击事件
$(".rightdian>li").click(function(){
    var num=$(".rightdian>li").index(this)
    $(".fullpage").css("marginTop",-num*ch)
    $(".rightdian>li").css("background","").eq(num).css("background","#666")
    $(".section").each(function(index,obj){
        if(index==num){
            $(obj).find(".left").css("transform","translate(0,0)").css("opacity",1)
            $(obj).find(".right").css("transform","translate(0,0)").css("opacity",1)
        }else{
            $(obj).find(".left").css("transform","translate(-50px,0)").css("opacity",0.4)
            $(obj).find(".right").css("transform","translate(50px,0)").css("opacity",0.4)
        }
    })
    $(window).resize(function(){
        var ch=$(window).height()
        $(".con1bigbox").css("height",ch)
        $("con-yunbox").css("height",ch)
        $(".con2bigbox").css("height",ch)
        $("content2").css("height",ch)
        $(".con3bigbox").css("height",ch)
        $("content3").css("height",ch)
        $(".con4bigbox").css("height",ch)
        $("content4").css("height",ch)
        $(".fullpage").css("marginTop",-num*ch)
    })
})

//下箭头的点击事件
$(".btn2").click(function(){
    var num=$(".btn2").index(this)
    //alert(num)
    $(".fullpage").css("marginTop",-(num+1)*ch)
    $(".rightdian>li").css("background","").eq(num+1).css("background","#666")
    $(".section").each(function(index,obj){
        if(index==(num+1)){
            $(obj).find(".left").css("transform","translate(0,0)").css("opacity",1)
            $(obj).find(".right").css("transform","translate(0,0)").css("opacity",1)
        }else{
            $(obj).find(".left").css("transform","translate(-50px,0)").css("opacity",0.4)
            $(obj).find(".right").css("transform","translate(50px,0)").css("opacity",0.4)
        }
    })
    $(window).resize(function(){
        var ch=$(window).height()
        $(".con1bigbox").css("height",ch)
        $("con-yunbox").css("height",ch)
        $(".con2bigbox").css("height",ch)
        $("content2").css("height",ch)
        $(".con3bigbox").css("height",ch)
        $("content3").css("height",ch)
        $(".con4bigbox").css("height",ch)
        $("content4").css("height",ch)
        $(".fullpage").css("marginTop",-(num+1)*ch)
    })
})




//滚轮事件
function mouseWheel(obj,upfun,downfun){
    if(obj.attachEvent){
        obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
    }else if(obj.addEventListener){
        obj.addEventListener("mousewheel",scrollFn,false);
        //chrome,safari -webkit-
        obj.addEventListener("DOMMouseScroll",scrollFn,false);
        //firefox -moz-
    }
    function scrollFn(e){
        var ev=e||window.event;
        if (ev.preventDefault ){
            ev.preventDefault(); //阻止默认浏览器动作(W3C)
        }else{
            ev.returnValue = false;//IE中阻止函数器默认动作的方式
        }
        var num=ev.detail||ev.wheelDelta;
        if(num==-3||num==120){//向上
            if(upfun){
                upfun();
            }
        }
        if(num==3||num==-120){//向上
            if(downfun){
                downfun();
            }
        }
    }
}

mouseWheel($(".fullpage")[0],function(){
    if(num==0){
        return;
    }
    if(!flag){
        return;
    }
    flag=false
    num--
    $(".fullpage").css("marginTop",-num*ch)
    $(".rightdian>li").css("background","").eq(num).css("background","#666")
    $(".section").each(function(index,obj){
        if(index==num){
            $(obj).find(".left").css("transform","translate(0,0)").css("opacity",1)
            $(obj).find(".right").css("transform","translate(0,0)").css("opacity",1)
        }else{
            $(obj).find(".left").css("transform","translate(-50px,0)").css("opacity",0.4)
            $(obj).find(".right").css("transform","translate(50px,0)").css("opacity",0.4)
        }
    })
    $(window).resize(function(){
        var ch=$(window).height();
        $(".firstbox").css("height",ch)
        $(".first").css("height",ch)
        $(".secondbox").css("height",ch)
        $(".second").css("height",ch)
        $(".thirdbox").css("height",ch)
        $(".third").css("height",ch)
        $(".fourbox").css("height",ch)
        $(".four").css("height",ch)
        $(".manping").css("marginTop",-num*ch)
    })
},function(){
    if(num==$(".section").length-1){
        return;
    }
    if(!flag){
        return;
    }
    flag=false
    num++
    $(".fullpage").css("marginTop",-num*ch)
    $(".rightdian>li").css("background","").eq(num).css("background","#666")
    $(".section").each(function(index,obj){
        if(index==num){
            $(obj).find(".left").css("transform","translate(0,0)").css("opacity",1)
            $(obj).find(".right").css("transform","translate(0,0)").css("opacity",1)
        }else{
            $(obj).find(".left").css("transform","translate(-50px,0)").css("opacity",0.4)
            $(obj).find(".right").css("transform","translate(50px,0)").css("opacity",0.4)
        }
    })
    $(window).resize(function(){
        var ch=$(window).height()
        $(".con1bigbox").css("height",ch)
        $("con-yunbox").css("height",ch)
        $(".con2bigbox").css("height",ch)
        $("content2").css("height",ch)
        $(".con3bigbox").css("height",ch)
        $("content3").css("height",ch)
        $(".con4bigbox").css("height",ch)
        $("content4").css("height",ch)
        $(".fullpage").css("marginTop",-num*ch)
    })
})
