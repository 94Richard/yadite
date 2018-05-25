

$(function(){

	/*banner*/

	/*headericon*/
	/*$(".headericon span").eq(0).animate({left:-50,opacity:0},500);
	$(".headericon span").eq(1).animate({left:50,opacity:0},500);
	$(".headericon span").eq(2).animate({left:-50,opacity:0},500);*/

	/*header*/
	/*p01_header*/
	/*$(".headers01 .hright li.last").hover(function(){
		$(this).find("input").show(500)
		},function(){
			$(this).find("input").hide(500)
			})*/
	$(".header").slidedown(1000)

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

/*	function headericon(){
		$(".headericon span").eq(0).animate({width:'40%'},500).animate({width:'100%'},500)
		$(".headericon span").eq(1).delay(200).animate({width:'40%'},500).animate({width:'100%'},500)
		$(".headericon span").eq(2).delay(400).animate({width:'40%'},500).animate({width:'100%'},500)
		}
	var settime = setInterval(headericon,2000)

	$(".headericon").hover(function(){
		clearInterval(settime);
		$(".header").slideDown(500);
		$(this).find("span").eq(0).animate({left:-50,opacity:0},300);
		$(this).find("span").eq(1).animate({left:50,opacity:0},300);
		$(this).find("span").eq(2).animate({left:-50,opacity:0},300,function(){
			$(".headericon").hide()
			});
		},function(){
			settime = setInterval(headericon,2000)
			})
	$(".header").mouseleave(function(){
		$(this).slideUp(500);
		$(".headericon").show(50,function(){
			$(this).find("span").eq(0).animate({left:0,opacity:1},500);
			$(this).find("span").eq(1).animate({left:0,opacity:1},500);
			$(this).find("span").eq(2).animate({left:0,opacity:1},500)
			})
		})*/

	/*p02*/
	$(".section2 .probox li").hover(function(){
		$(this).find(".wen").stop().animate({backgroundPosition:340,height:103,borderTop:'1px solid #1651b8'},500).css({"background-color":"#1651b8"})
		$(this).find("img").stop().animate({width:'110%',left:'-5%',top:'-5%'})
		},function(){
			$(this).find(".wen").stop().animate({backgroundPosition:-40,height:93,borderTop:'1px solid #ccc'},300).css({"background-color":"#fff"})
		$(this).find("img").stop().animate({width:'100%',left:'0',top:'0'})
			})


	$(".more").hover(function(){
		$(this).css({"background-color":"#1751b7","border":'1px solid #1751b7',"color":"#fff","text-decoration":'none'})
		$(this).find("img").fadeIn(300).stop().animate({marginLeft:10,opacity:1},300)
		},function(){
			$(this).css({"background-color":"#fff","border":'1px solid #999',"color":"#888"})
			$(this).find("img").fadeOut(300).stop().animate({marginLeft:0,opacity:0},300)
			})


	/*p04*/

	$(".section4 .jslist").hover(function(){
		$(this).find("em").css({"color":"#1651b8","border-top-color":"#1651b8"})
		$(this).find("h4").css({"color":"#1651b8"})
		$(this).find("img").stop().animate({marginTop:-150},300)
		},function(){
			$(this).find("em").css({"color":"#dadada","border-top-color":"#f1f1f1"})
			$(this).find("h4").css({"color":"#333"})
			$(this).find("img").stop().animate({marginTop:0},300)
			})

	/*p05*/
	$(".section5 dl").hover(function(){
		$(this).css({"background-color":"#1651b9"})
		$(this).find("h5").css({"color":"#fff"})
		$(this).find("em").stop().animate({marginBottom:35},300).css({"color":"#fff"})
		$(this).find("p").css({"color":"#fff","opacity":0.6})
		$(this).find("i").stop().animate({top:"55%"},300).css({"background-color":"#ff0d00"})
		$(this).find(".imgp").stop().animate({width:'110%',left:'-5%',top:'-5%'})

		},function(){
			$(this).css({"background-color":"#f1f1f1"})
			$(this).find("h5").css({"color":"#333"})
			$(this).find("em").stop().animate({marginBottom:13},300).css({"color":"#555"})
			$(this).find("p").css({"color":"#777","opacity":1})
			$(this).find("i").stop().animate({top:"105%"},300).css({"background-color":"#999"})
			$(this).find(".imgp").stop().animate({width:'100%',left:'0',top:'0'})
			})


	/*p06*/
	$(".section6 .newslist").hover(function(){
		$(this).css({"border-top-color":"#075cf7"})
		$(this).find("h4").stop().animate({top:120,backgroundPosition:334},300)
		$(this).find("h5").stop().animate({paddingTop:30},300)
		$(this).find("img").stop().animate({width:'110%',marginLeft:'-5%',height:'110%',marginTop:'-5%'},300)
		},function(){
			$(this).css({"border-top-color":"#cecece"})
			$(this).find("h4").stop().animate({top:30,backgroundPosition:-100},300)
			$(this).find("h5").stop().animate({paddingTop:85},300)
			$(this).find("img").stop().animate({width:'100%',left:'0', height:'100%',marginTop:0},300)
			})









	/*以下屏幕切换效果*/



				$(".section2 .probox ul").slideUp();
				$(".section2 h3").hide();
				$(".section2 span").hide();
				$(".section2 i").hide();
				$(".section2 .btn").hide();
				$(".section2 .more").css({"width":0,"opacity":0});

				$(".section3 .video").css({"margin-left":'-50%'})
				$(".section3 .wen").css({"margin-right":'-50%'})

				$(".section4 h3").hide();
				$(".section4 span").hide();
				$(".section4 i").hide();
				$(".section4 .js01").css({"left":-380})
				$(".section4 .js03").css({"right":-380})
				$(".section4 .js02").css({"top":380})

				$(".section5 h3").hide();
				$(".section5 span").hide();
				$(".section5 dl").eq(0).css({"left":"-50%","top":"-50%","opacity":0})
				$(".section5 dl").eq(1).css({"right":"-50%","top":"-50%","opacity":0})
				$(".section5 dl").eq(2).css({"left":"-50%","bottom":"-50%","opacity":0})
				$(".section5 dl").eq(3).css({"right":"-50%","bottom":"-50%","opacity":0})


				$(".section6 h3").hide();
				$(".section6 span").hide();
				$(".section6 i").hide();
				$(".section6 .more").css({"width":0,"opacity":0});
				$(".section6 .newslist").css({"top":500,"opacity":0})






});
	$(window).scroll(function(){
		var top = $(window).scrollTop();

			if(top>300){
				$(".section2 h3").show();
				$(".section2 span").show();
				$(".section2 i").show();
				$(".section2 .probox ul").slideDown(1000);
				$(".section2 .btn").show();
				$(".section2 .more").animate({width:248,opacity:1})
			}
			if(top>1200){

				$(".section3 .video").animate({marginLeft:0},1000,'easeOutExpo')
				$(".section3 .wen").animate({marginRight:0},1000,'easeOutExpo')

			}
			if(top>1800){

				$(".section4 h3").show();
				$(".section4 span").show();
				$(".section4 i").show();
				$(".section4 .js01").animate({left:0},1000,'easeOutExpo')
				$(".section4 .js02").animate({top:0},1000,'easeOutExpo')
				$(".section4 .js03").animate({right:0},1000,'easeOutExpo')

			}
			if(top>2400){

				$(".section5 h3").show();
				$(".section5 span").show();
				$(".section5 dl").eq(0).animate({left:0,top:0,opacity:1},1000,'easeOutExpo')
				$(".section5 dl").eq(1).animate({right:0,top:0,opacity:1},1000,'easeOutExpo')
				$(".section5 dl").eq(2).animate({left:0,bottom:0,opacity:1},1000,'easeOutExpo')
				$(".section5 dl").eq(3).animate({right:0,bottom:0,opacity:1},1000,'easeOutExpo')
			}
			if(top>3000){

				$(".section6 h3").show();
					$(".section6 span").show();
					$(".section6 i").show();
				$(".section6 .news01").animate({top:0,opacity:1},1000,'easeOutExpo')
				$(".section6 .news02").delay(300).animate({top:0,opacity:1},1000,'easeOutExpo')
				$(".section6 .news03").delay(600).animate({top:0,opacity:1},1000,'easeOutExpo',function(){

					$(".section6 .more").animate({width:248,opacity:1})
					})
			}
			if(top>4000){



			}
		})



function xuanze() {


    var xz = document.getElementById('seachkeywords').value;


    if (xz.length == 0) {

        xz = "";

    }

    window.location.href = '/Search/Index.aspx?objtype=product&kwd=' + xz;

}

jQuery(document).ready(function ($) {

    action();

});


function action() {

    $(document.body).append(" <div id=\"roll\" style=\"display:none;\"><div title=\"回到顶部\" id=\"roll_top\"></div></div>");

    $('#roll_top').click(function () {

        $('html,body').animate({

            scrollTop: '0px'

        }, 800)

    });

    $('#ct').click(function () {

        $('html,body').animate({

            scrollTop: $('.ct').offset().top

        }, 800)

    });

    $(window).scroll(function (event) {


        if ($(this).scrollTop() > 260) {

            $('#roll').fadeIn()

        } else {

            $('#roll').fadeOut()

        }

    })

}
