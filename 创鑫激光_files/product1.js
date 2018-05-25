

$(function(){/*mian*/

	$(".header").slideDown(1000)
		
	/*end p01_header*/	

		
		
	$(".header .hright li.last").hover(function(){
		$(this).find("input").show(500)
		},function(){
			$(this).find("input").hide(500)
			})
	
	$(".header .nav li").hover(function(){
		$(this).children(".erjinav").stop().slideDown()
		},function(){
			$(this).children(".erjinav").stop().slideUp()
		})
	
	$(".probox li").hover(function(){
		$(this).find(".wen").stop().animate({backgroundPosition:340,height:103,borderTop:'1px solid #1651b8'},500).css({"background-color":"#1651b8"})
		$(this).find("img").stop().animate({width:'110%',left:'-5%',top:'-5%'})
		},function(){
			$(this).find(".wen").stop().animate({backgroundPosition:-40,height:93,borderTop:'1px solid #ccc'},300).css({"background-color":"#fff"})
		$(this).find("img").stop().animate({width:'100%',left:'0',top:'0'})
			})

$(".ny_yyUl01 li").hover(function () {
    $(this).find(".wen").stop().animate({ backgroundPosition: 340, height: 60, borderTop: '1px solid #1651b8' }, 500)
    $(this).find("img").stop().animate({ width: '110%', left: '-5%' })
}, function () {
    $(this).find(".wen").stop().animate({ backgroundPosition: -40, height: 60, borderTop: '1px solid #ccc' }, 300).css({ "background-color": "#fff" })
    $(this).find("img").stop().animate({ width: '100%', left: '0', top: '0' })
})
	
	
	$(".inabout .tulist li").hover(function(){
		$(this).find("img").stop().animate({width:'110%',left:'-5%',top:'-8%'})
		},function(){
			$(this).find("img").stop().animate({width:'100%',left:'0%',top:'0%'})
			})
	
	
	
	$(".innewsbox .listnews").hover(function(){
		$(this).find("i").stop().animate({width:40})
		$(this).find("img").stop().animate({marginRight:45})
		$(this).find(".more").stop().animate({right:25,backgroundPositionY:-40})
		
		},function(){
			$(this).find("i").stop().animate({width:0})
			$(this).find("img").stop().animate({marginRight:25})
			$(this).find(".more").stop().animate({right:0,backgroundPositionY:0})
			})

			$(".gsgginnewsbox .listnews").hover(function() {
			    $(this).find("i").stop().animate({ width: 40 })
			    $(this).find("img").stop().animate({ marginRight: 45 })
			    $(this).find(".more").stop().animate({ right: 25, backgroundPositionY: -40 })

			}, function() {
			    $(this).find("i").stop().animate({ width: 0 })
			    $(this).find("img").stop().animate({ marginRight: 25 })
			    $(this).find(".more").stop().animate({ right: 0, backgroundPositionY: 0 })
			})
	/*历程*/
	
	var lcall = $(".in_licheng .listallbox dl").length;
	var lc_n =0 ;
	$(".in_licheng .listallbox").width(1125*lcall);


	$(".timebox li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		lc_n = $(this).index();
		$(".in_licheng .listallbox").stop().animate({left:-1125*lc_n},1000)
		})
	
	$(".timebox .btn01").click(function(){
		if(lc_n>0){
			lc_n--;
			$(".timebox li").eq(lc_n).addClass("cur").siblings().removeClass("cur");
			
			$(".in_licheng .listallbox").stop().animate({left:-1125*lc_n},1000)
			}else{
				lc_n=lcall-1;
				$(".timebox li").eq(lc_n).addClass("cur").siblings().removeClass("cur");
			
				$(".in_licheng .listallbox").stop().animate({left:-1125*lc_n},1000)
				}
		})
	$(".timebox .btn02").click(function(){
		if(lc_n<lcall-1){
			lc_n++;
			$(".timebox li").eq(lc_n).addClass("cur").siblings().removeClass("cur");
			
			$(".in_licheng .listallbox").stop().animate({left:-1125*lc_n},1000)
			}else{
				lc_n=0;
				$(".timebox li").eq(lc_n).addClass("cur").siblings().removeClass("cur");
			
				$(".in_licheng .listallbox").stop().animate({left:-1125*lc_n},1000)
				}
		})
	
	/*end 历程*/
	
	
	
	
	
	
	
	
	
	
	
	
	
})/*end mian*/

	/*历程 共用插件*/
function licheng(ID){
	
	
	var lc_li = $(""+ID+" li ").length;
	var lc_btn = 0;
	$(""+ID+" ul").width(560*lc_li)
	
	function lcul(){
		
		$(""+ID+" ul").animate({left:-560},1000,function(){
			$(""+ID+" li:first").insertAfter($(""+ID+" li:last"));
			$(""+ID+" ul").css({"left":0});
			});
		lc_btn++;
		if(lc_btn<lc_li){
			$(""+ID+" .btn span").eq(lc_btn).addClass("cur").siblings().removeClass("cur")
			}else{
				lc_btn = 0;
				$(""+ID+" .btn span").eq(lc_btn).addClass("cur").siblings().removeClass("cur");
				}
		
		}
		if (lc_li > 1) {
		    var t = setInterval(lcul, 2000)
		} else {
		    clearInterval(t)
		    $("" + ID + " .btn").hide()
        }
	
	$(""+ID+" .btn").empty()
	for(i=0;i<lc_li;i++){
		$(""+ID+" .btn").append("<span></span>")
		}
	$(""+ID+" .btn span:first").addClass("cur")
	
	$(ID).hover(function(){
		clearInterval(t)
		},function(){
			t = setInterval(lcul,3000)
			})
	
	
	
	}
