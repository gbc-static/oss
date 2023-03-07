
var Cookie={get:function(name){var value='',matchs;if(matchs=document.cookie.match("(?:^| )"+name+"(?:(?:=([^;]*))|;|$)"))value=matchs[1]?unescape(matchs[1]):"";return value},set:function(name,value,expire,domain){expire=expire||30*24*3600*1000;var date=new Date(),cookie="";date.setTime(date.getTime()+expire);cookie=name+"="+escape(value)+";expires="+date.toGMTString()+";path=/;";domain&&(cookie+="domain="+domain+";");document.cookie=cookie},del:function(name,domain){Cookie.set(name,'',-1,domain)}};
function setCookie(cooktval) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    // exp.setTime(exp.getTime() + Days * 100000);
    document.cookie = cooktval + "=yes;expires=" + exp.toGMTString()
}

if (typeof(page) == "undefined") {
  page = "0"  
};



	wandoujiaready();
    $("#address").on("click",function(){
         //点击下载时判断是否勾选豌豆荚下载
        if($('#g-uwdj').hasClass("uno")){
            waidoujiahandle();
        }else{
           addhref(1);
        }
    })
     //豌豆荚页面加载前准备
    function wandoujiaready(){
    // var pname;
    // pname=$(".g-app-cont h1").html();
    // 	$.ajax({
    //        type:"post",
    //        url:"http://sb.shuoshuokong.com/info.php",
    //        data:{
    //        	"file":baoname
    //        },
    //        async:false,
    //        success:function(data){
    //        	var msg=eval('('+data+')');
    //           if(msg.result){
    //           	pname=msg.package;
    //           	console.log(pname)
    //           }
    //           //alert("成功"),     
    //         }
    //    });
    	WdjBZ.init({
    		packageName: bmname,
			channel: 'pm_nubz_ssk',
		  	downloadUrl: apkurl,
		});
        WdjBZ.checkPackageName(function(ret) {
            if (!ret.code) {
            	$(".f-down-cont").prepend('<p id="g-uwdj" class="uno">使用豌豆荚助手</p>');//添加勾选豌豆荚
				$(".down-btn").append('<p class="g-stips">需先下载豌豆荚助手,使用高速下载更快更安全</p>');//下载提示
                //$('#g-uwdj').attr('class','uno');
                $(".down-btn a.i-az").text("高速下载");
                console.log('WdjBZ.checkPackageName ok.');
                addhref(2);
            } else {
            	addhref(1);
            	$(".down-btn a.i-az").text("立即下载");
                console.log('WdjBZ.checkPackageName failed.'); 
                $('#g-uwdj').attr('class','');
            }
        }); 
    }
     //豌豆荚高速下载
    function waidoujiahandle(){
        WdjBZ.downloadFast(function(ret) {
            if (!ret.code) {
                console.log('WdjBZ.downloadFast ok.');
            }
        });
    }
}//-----------添加豌豆荚end-------------


$(function(){

	//baidu输入搜索 2021-1-25
    $("#bdcs-search-form-input").on('change', function(){
        var inputtxt = $(this).val();
        //console.log(inputtxt)
        $("#bdcs-search-form-submit").click(function(){
            $(this).attr('href','https://m.baidu.com/s?word='+inputtxt+'&ssid=7021c7b3d2e4353538c154&si=m.shuoshuokong.com');
        });
    });
		
	//附加按钮背景
	var mentext = $(".article-list-btns a").eq(1).attr("href");
	var durl = window.location.href;
	$(".g-cnot-bg nav a").each(function(){
		var navurl = $(this).attr("href");
		var menturl =  $(this).text();
		if(durl.indexOf(navurl) != -1){
			$(this).addClass("hover");
		}	
		if(durl == navurl){
			$(this).addClass("hover");
		}
	})
	

	//返回顶部
	$("body").append("<a href=\"javascript:;\" class=\"m-backTop\"></a>");	
	$(window).scroll(function(){
		if($(window).scrollTop()>=300){
			$(".m-backTop").show();
	
		}else if($(window).scrollTop()<300){
			$(".m-backTop").hide()
		}
	});
	$(".m-backTop").click(function(){$('body,html').animate({scrollTop:0},1000);return false;});
	
	
	//分类展开
	$("#mcate").click(function() {
		$("#mcateCont").toggleClass("u-block");
	}),
	$("#mcateCont p span").click(function() {
		$(this).addClass("cur").siblings().removeClass("cur");
		var e = $("#mcateCont p span").index(this);
		$("#mcateCont ul").eq(e).addClass("on").siblings().removeClass("on")
	}),
	$("#topNav").length > 0 && e("#topNav ul");
	var o = document.domain,
	i = document.referrer;
	i.indexOf(o) > -1 && window.history.length > 0 && $(".sback, .back").on("click",
	function() {
		return window.history.go( - 1),
		!1
	})
	
		
	
	var contimg = $("#content li").height();
	$(".screenshot").height(contimg);
	
	$(".zt a:nth-child(8n)").after('<b></b>');
	
	//点击展开关闭
	if($("#details").height() <= 700){
		$("#expand").hide();
		$("#details").height("auto")
	}else{
		$("#details").height(700);	
		$(".lookmore").addClass("on-hover");
		$("#expand span").click(function(){
			if($("#expand span em").text()=="展开全部内容"){
				$("#details").height("auto");
				$("#expand span em").text("收起内容");
				$("#expand span").addClass("m-click-bg");
				$(".lookmore").removeClass("on-hover");
			}else{
				$("#details").height("700px");
				$("#expand span em").text("展开全部内容");
				$("#expand span").removeClass("m-click-bg");
				$(".lookmore").addClass("on-hover");
			}
		})
	}
	
	//搜索点击展开
	$(".f-search-ico").click(function(){
		if($(".g-search-box").css('display') === 'none' ){
			$(".g-search-box").show()
		}else{
			$(".g-search-box").hide()
		}
	})
	$(".g-search-box").hover(function(){
		$(this).show();},function(){$(this).hide();});
	$("content").on("touchstart", function() {
		$(".g-search-box").hide();
	});


if(page == 1)
{

	$(".g-rank-bd .g-rank-ul").eq(0).addClass("block");
	$(".g-hotsy .g-hotsy-ul").eq(0).addClass("block");
	$(".f-hot-a a").click(function() {
	    $(this).addClass("m-hover").siblings().removeClass("m-hover");
	    var contul = $(".f-hot-a a").index(this);
	    $(".g-hotsy .g-hotsy-ul").eq(contul).addClass("block").siblings().removeClass("block")
	});

	$(".f-rank-link a").click(function() {
	    $(this).addClass("m-hover").siblings().removeClass("m-hover");
	    var contul = $(".f-rank-link a").index(this);
	    $(".g-rank-bd .g-rank-ul").eq(contul).addClass("block").siblings().removeClass("block")
	});

	var tags_a = $(".label-box a");
     tags_a.each(function(){
         var x = 9;
         var y = 0;
         var rand = parseInt(Math.random() * (x - y + 1) + y);
         $(this).addClass("tags"+rand);
      });

}

//隐藏分页
var tit = $(".jogger").children("a:eq(0)").attr('title')
if(tit == 'Total record'){
	$(".jogger").children("a:eq(0)").hide();
}

var lastname = $(".jogger a:last").text();
if(lastname == '尾页'){
	$(".jogger a:last").hide();
}


// 下载详细页
if(page == 3){	

	//定义是否是商务包  2021-01-18
	var isSwbUrl=false; //是否为商务包 屏蔽商务包地址获取348行代码
	var downHref = $("#address").attr("href");
	var pbsbwNew = ["tj.chenjianxiang.com","guopan.cn","9game.cn","tj.viphxw.com","kepan365.com","99maiyou.com","sp4.tools86.com"];       
	                 
	//if (jQuery.inArray(info.classid,arrid) != -1) {
		for(i=0;i<pbsbwNew.length;i++){    // 循环判断商务地址
			if(downHref.indexOf(pbsbwNew[i]) > -1){             
				isSwbUrl=true;
			}
		}
	//}else{
		//isSwbUrl=false;
	//}
	//定义rem尺寸
	rem();
	window.onresize = function(){
		rem();
	}
	
	function rem(){
		//长宽占位 rem算法, 根据root的rem来计算各元素相对rem, 默认html 320/20 = 16px */
			var w = document.documentElement.offsetWidth;
			document.documentElement.style.fontSize=w/7.2+'px';
			window.onresize = function(){
			//长宽占位 rem算法, 根据root的rem来计算各元素相对rem, 默认html 320/20 = 16px */
			var w = document.documentElement.offsetWidth;
			document.documentElement.style.fontSize=w/7.2+'px';
			}	
	}
	
	
	var tags = $(".xgk-cont").html();
	var tagstxt = tags.replace("标签：","")
	$(".g-xgk").append(tagstxt);
	$(".g-xgk span").remove();





	var touimgnum = $("#content img").length;
	var imgurl = ''
	if(touimgnum>1){
			$("#content img").each(function(i){
			    imgurl = $(this).attr("src")
			    //if(imgurl.indexOf('shuoshuokong.com')!= -1){ 
				//var imguleft = imgurl.split(".")[2].split("_")[0].substr(11,36)
				var imgurt = imgurl.split("!")[0]
				// var imgu =  "http://m.shuoshuokong.com"+imgurt+"."+imgurl.split(".")[3]
				//$(this).attr("data-original",imgu);
				//$(this).wrap('<span class="s-img"><a href="'+imgu+'" class="swipebox"></a></span>')
				//if(imgurl.split(".")[3] == "gif"){ 
				 	$(this).attr("data-original",imgurt);
					$(this).wrap('<em class="s-img"><a href="'+imgurt+'" class="swipebox"></a></em>')
				 //}else{
				 	//$(this).attr("data-original",imgu);
					//$(this).wrap('<span class="s-img"><a href="'+imgu+'" class="swipebox"></a></span>')
				 //}	
			// }
			});		
			$('.s-img').swipebox();
			$(".m-she").hide();
			$("#swipebox-download").css("margin-left","-50px")		
	}





	var dnav = 167;
	$(".f-ctab li").click(function(){
		var n = $(this).index();
		if(n<3){	
			var gotoTop = $(".f-tabs-bd").eq(n).offset().top - dnav;
			$("body,html").animate({scrollTop:gotoTop},500)
		}else{
			var gotoTop = $("#down-mian").offset().top - dnav;
			$("body,html").animate({scrollTop:gotoTop},500)	
		}
	})

	if(/iphone|ipad/i.test(navigator.userAgent)){
		var iosurl = iosdown.url;
		$(".down-btn a").attr('href',iosurl);
		if(iosurl==""){
			$("#address").text("no").css({"background":"#8e8e8e","color":"#fff"}).attr("href","javascript:;")
		}
	}else{
		var azurl = $(".i-az").attr('href');
		// if (azurl == "" || Cookie.get("aqxz") == "yes") {
		if (azurl == "") {
			$("#address").text("no").css({"background":"#8e8e8e","color":"#fff"}).attr("href","javascript:;")
		}
	}

	var zthj = $(".g-zthj a").length;
	if(zthj <= 0){
		$(".g-zthj-cont").hide();
	}

	var xgbb = $(".g-xgbb ul li").length;
	if(xgbb <= 0){
		$(".g-xgbb").hide();
	}




	
$(document).ready(function () {
	//滚动显示下载按钮
	var navTop = $(".f-down-cont").height()+250;
	var downtxt = $(".down-btn a.i-az").text();
	var dqxzdz = $(".down-btn a.i-az").attr("href");
	$(window).scroll(function(){		
		if($(window).scrollTop() > navTop){
			$(".f-down-cont").addClass("f-float");
			if($('#g-uwdj').hasClass("uno")){
				$(".down-btn a.i-az").attr("href",dqxzdz).text("立即下载");
			}
		}else{
			$(".f-down-cont").removeClass("f-float");
			if($('#g-uwdj').hasClass("uno")){
				$(".down-btn a.i-az").attr("href","JavaScript:void(0)").text("高速下载");
			}
		}
	})
})




var titleName = $(".g-app-cont h1").text(); // 2020-12-08 新增判断标题
if (titleName.indexOf('快手') !== -1) {
	zsisAds=true;
}

var openurl = document.referrer.substr(0,20);//获取浏览器来路 

var cityAr = ['北京','武汉']// 根据区分地区屏蔽=属于‘下架’或者‘1星’规则
var zscity = ['北京'] //获取来路并判断不是北京地区 
//var bjcity = ['北京','武汉']
$.ajax({
  async : true,
  url : "//api.map.baidu.com/location/ip?ak=TgwAfmHofaIoqDl4zQynNdchcmyrI9uc",
  type : "get",
  dataType : "jsonp", 
  jsonp : 'callback', 
  jsonpCallback: 'city', 
  data : {
      q : "javascript", 
      count : 1
   }, 
  success: function(response, status, xhr){
       var province = response.address.split('|')[1];
       var city = response.address.split('|')[2];

       if($.inArray(city, cityAr) != -1){

       		if(typeof(info) != "undefined"){
			  if(typeof(info.soft) != 'undefined'){
			    if(info.soft == "\u4e0b\u67b6"){
			        //如果授权等于“下架”就提示该资源以下架
				    $(".down-btn a.i-az").addClass("no-down");
					$(".down-btn a.i-az").text("资源已下架");
					$(".down-btn a.i-az").attr("href","javascript:void(0);");
				    }
			    } 

			    if(typeof(info.pcstar) != 'undefined'){
			    	if(info.soft != "\u4e0b\u67b6"){ 
			    		if(info.pcstar == '1'){
			    			//不等于下架，星级为1的执行
							console.log(info.pcstar)
			    			$(".down-btn a.i-az").addClass("no-down");
							$(".down-btn a.i-az").text("资源已下架");
							$(".down-btn a.i-az").attr("href","javascript:void(0);");
			    		}
			    	}
			    }
			
				//判断等级为1星的提示该资源以下架
			    /* if(typeof(info.pcstar) != 'undefined'){
			   	 if(info.soft != "\u4e0b\u67b6"){ // 不等于下架执行1星规则
				  if(info.pcstar == '1'){
						$(".g-cnot-bg ,.article-list-btns ,.g-app-cont ,.f-down-cont ,.g-xgbb").hide();
						$(".f-vtadiv .g-js-cont").remove();
						//$("body content").prepend('<div class="g-cnot-bg clearfix"><nav><a href="http://m.shuoshuokong.com/xz.html">首页</a><a href="http://m.shuoshuokong.com/youxi/"class="hover">游戏</a><a href="http://m.shuoshuokong.com/soft/">软件</a><a href="http://m.shuoshuokong.com/s/">专题</a><a href="http://m.shuoshuokong.com/ph/">排行</a></nav></div><div class="article-list-btns"><i></i>当前位置：<a href="/">首页</a>&nbsp;&gt;&nbsp;<a href="/youxi/">手机游戏</a>&nbsp;&gt;&nbsp;<a href="/youxi/zyqp/">桌游棋牌</a></div><div class="g-app-cont clearfix"><i class="icon"><img src="/d/file/2018-09/9c52859c413b87b20a3509247e7c2196.png"title="欢乐斗地主v6.043.001"></i><h1>欢乐斗地主</h1><p>大小：77.76M</p><p>时间：2018-09-19</p><p>性质：网游</p><p>版本：v6.043.001</p></div><div class="f-down-cont"><div class="down-btn"><a class="i-az"href="http://sa.shuoshuokong.com/hldzz.apk"id="address">立即下载</a></div><div id="xgk"class="g-xgk"><a href="/t/doudizhu/">斗地主</a><a href="/t/qipai/">棋牌</a><a href="/t/zhuanqian/">赚钱</a><a href="/t/shishi/">史诗</a><a href="/t/pkp/">扑克牌</a><a href="/t/daxing/">大型</a></div></div>');
						//$(".f-vtadiv .g-bd-cont").prepend('<div class="g-js-cont clearfix f-tabs-bd"><div id="xgk"class="xgk-cont"><span>标签：</span><a href="/t/doudizhu/">斗地主</a><a href="/t/qipai/">棋牌</a><a href="/t/zhuanqian/">赚钱</a><a href="/t/shishi/">史诗</a><a href="/t/pkp/">扑克牌</a><a href="/t/daxing/">大型</a></div><div class="screenshot scroll-module"style="height: 222px;"><ul class="screenshot-list clearfix"id="content"><li><em class="s-img"><a href="/d/file/2018-09/c256e45d6e159e6426f5157d1416e34d.jpg"class="swipebox"><img src="/d/file/2018-09/c256e45d6e159e6426f5157d1416e34d.jpg"data-original="/d/file/2018-09/c256e45d6e159e6426f5157d1416e34d.jpg"></a></em></li><li><em class="s-img"><a href="/d/file/2018-09/9863059a3cc802d7fda0f89eb552ec3e.jpg"class="swipebox"><img src="/d/file/2018-09/9863059a3cc802d7fda0f89eb552ec3e.jpg"data-original="/d/file/2018-09/9863059a3cc802d7fda0f89eb552ec3e.jpg"></a></em></li><li><em class="s-img"><a href="/d/file/2018-09/31ffd75ec7351dac3a3ce08c4f90b33e.jpg"class="swipebox"><img src="/d/file/2018-09/31ffd75ec7351dac3a3ce08c4f90b33e.jpg"data-original="/d/file/2018-09/31ffd75ec7351dac3a3ce08c4f90b33e.jpg"></a></em></li><li><em class="s-img"><a href="/d/file/2018-09/3fad2da19f3dbe16ec8d00a5a2290bf2.jpg"class="swipebox"><img src="/d/file/2018-09/3fad2da19f3dbe16ec8d00a5a2290bf2.jpg"data-original="/d/file/2018-09/3fad2da19f3dbe16ec8d00a5a2290bf2.jpg"></a></em></li></ul></div><div id="details"data-am-gallery="{ pureview: true }"data-am-widget="gallery"class="am-no-layout"style="height: 700px;"><p>欢乐斗地主手游是一款腾讯官方自研的一款经典斗地主手游，这款游戏有着丰富的游戏玩法，出了经典的三人斗地主玩法外，还开扩了癞子玩法、不洗牌玩法等，还有着独特的段位比赛制度，让游戏更加的惊险刺激，更加具有挑战性！欢乐斗地主手游有着各色奖励赛制，有着送话费卡比赛、数码实物比赛、黄金饰品比赛等，让玩家在娱乐之余，也能够收获到意外之喜，实在是掌上必不可少的游戏之一！</p><p style="text-align: center;"><img src="/d/file/2018-09/c50c69f4500899a3e40c73d4fc3f58f0.jpg"alt="欢乐斗地主v6.043.001"data-am-pureviewed="1"></p><h3>游戏简介</h3><p>11年经典棋牌品牌，腾讯游戏精心打造，与8亿玩家一起《欢乐斗地主》！</p><h3>游戏特色</h3><p><strong>【纯正的经典玩法】</strong></p><p style="text-align: center;"><img src="/d/file/2018-09/3fad2da19f3dbe16ec8d00a5a2290bf2.jpg"alt="欢乐斗地主v6.043.001"data-am-pureviewed="1"></p><p>等车、排队、闲暇时间太无聊？不如经典模式快速开一局！拥有经典、不洗牌、癞子、天地癞子四大玩法的经典模式为你提供最纯粹的单局乐趣，无论想要思考博弈，还是惊险刺激，经典模式都能满足你！</p><p><strong>【畅爽的排位玩法】</strong></p><p style="text-align: center;"><img src="/d/file/2018-09/31ffd75ec7351dac3a3ce08c4f90b33e.jpg"alt="欢乐斗地主v6.043.001"data-am-pureviewed="1"></p><p>给你三颗心，能否一轮升星冲段？欢乐斗地主排位模式独创竞技分玩法，赢牌只是第一步，加倍、压制、打出特殊牌型都可以为你累积竞技分数，还有多种角色多样技能供你选择，萌宝贝儿、女神艾琳娜、帅大叔卡神，谁才是你的本命英雄呢~</p><p><strong>【刺激的赛事玩法】</strong></p><p style="text-align: center;"><img src="/d/file/2018-09/9863059a3cc802d7fda0f89eb552ec3e.jpg"alt="欢乐斗地主v6.043.001"data-am-pureviewed="1"></p><p>丰富多样的赛事模式，全年全天无休的挑战赛、钻石赛给予过五关斩六将的你丰厚的豆子和钻石奖励，诚邀各路斗地主高手见证实力、收获荣誉！</p><p><strong>【精致的游戏体验】</strong></p><p style="text-align: center;"><img src="/d/file/2018-09/c256e45d6e159e6426f5157d1416e34d.jpg"alt="欢乐斗地主v6.043.001"data-am-pureviewed="1"></p><p>场景化的游戏界面，感受真实的斗地主；丰富趣味的飞机、炸弹动画，为斗地主增添更多欢乐元素！</p><h3>游戏亮点</h3><p>【支持癞子玩法和其他玩法】首款手机端支持癞子玩法的斗地主游戏，还有任务，抢地主，明牌，加倍等玩法，刺激好玩的玩法提升游戏乐趣！&nbsp;<br>【挑战赛模式】加入QQ游戏大厅的欢乐斗地主中广受玩家喜爱的挑战赛模式！让您在手机上也能体验到永不落幕的比赛，享受冲击冠军的刺激，感受竞技的乐趣！&nbsp;<br>【与QQ游戏大厅完全互通】数据与QQ游戏大厅完全互通，与亿万玩家同桌竞技，真正感受无处不在的欢乐！&nbsp;<br>【真实场景化游戏界面】这一次，您将更真实的坐在牌桌上和网友一起欢乐斗地主，真实场景化的游戏界面，让您感受家一般的温馨。&nbsp;<br>【支持游戏换肤】游戏界面支持更换背景，“绿野仙踪”、“田园踏青”、“恬静书院”、“斗神擂台”……想闲暇对弈，还是激烈对战，游戏氛围您来选！&nbsp;<br>【贴近真实打牌体验】真实的出牌体验，出牌不再凭空出现和消失，而是一直保留在桌上直到本局结束。后续还将加入手牌飞行动画，让你体验真实的打牌流程！&nbsp;<br>【丰富趣味的游戏动画】飞机，炸弹，地主农民也有丰富的表情动作，为斗地主增添更多欢乐元素。</p><h3>小编测评</h3><p>同欢乐斗地主类似的游戏有很多，也玩过很多相似的游戏，最后感觉还是愤怒的小鸟2给我的体验是最好的，好东西是要拿出来分享给大家的，所以在这里我想把我的游戏乐趣分享给家，同时希望更多的人能够看到我这条评论并且对其有所帮助，最早接触这款游戏是在电脑端，从下载下来就跟朋友玩的是不亦乐乎、废寝忘食。戏体验感非常好，打斗感很棒，还有通讯录做的非常棒，我是看中国boy来的，果然，boy介绍的游戏都很不错，游戏是新游，部分虽然还没做好但我是很理解的，在此希望游戏方修复几个bage，我总结了大部分玩家资料，一般玩家都是登不进去和偶尔会闪退以及卡顿等等部分bage，往往打得正激烈忽然来个闪退。体验感就会降低很多，所以在此希望游戏方能尽快解决，以免这么棒的游戏被荒废，游戏我非常喜欢，也希望这游戏越来越好，越做越辉皇情怀就不用说了，刀剑神域，魔禁，俺妹等都是大热的作品，原画很强，像素风的人物做的很精致，我个人觉得只要心态摆正，也不需要氪多少钱就能正常玩耍，大佬想要一秒钟六金卡，张张都还要自己最喜欢的人物，那是大佬的玩法，普通玩家慢慢养成，绿卡也可以升成金卡。</p><h3>游戏攻略</h3><p>高级场斗地主和任何游戏一样，必须讲究运气，也就是说运气第一，但是有很多种不是很好的牌型，通过一定的技术，是可以反败为胜的，这说明斗地主技术成份还是非常重要，这也是它的魅力所在。要提高斗地主的技术水平，一定要掌握以下技巧，具体归纳为“五牌”。</p><p><strong>一是高级场斗地主要善于记牌。</strong></p><p>记牌要贯穿整个游戏的始终。记牌的原则是从大到小以排除法记忆，也就是娱乐者都出了哪些大牌?剩有哪些大牌?记牌的过程中还要特别地注意“断牌”，因为这样的牌有可能成为炸弹，当地主时尤其要注意防炸，因为进出得分都是双倍的。</p><p><strong>二是高级场斗地主要善于分析牌。</strong></p><p>一般斗地主高手出三圈牌后，就能大概说出一些牌的分布，这都是善于分析的结果。如出“a”后，地主方很快就出“2”，他单“2”的可能性比较大;再如出“2”后，地主方不出，绝大多数情况下，两个王到了一家，成了炸弹。</p><p><strong>三是高级场斗地主要善于换牌。</strong></p><p>也可称之为换“门子”、送牌等。这里所说的换牌是指当是斗地主的一方时，出牌为大后，根据地主方怕出的类型出牌。比如他怕出单，可以把对子拆了出;有时他怕出对子，在自己的牌无法打完的情况下，甚至可以拆句子上的对子来出。总之，地主怕什么，自己的对家需要什么就出什么。</p><p><strong>四是在地主的上家要善于顶牌。</strong></p><p>有很多这样的牌型，地主方发牌后，过一张不大不小的牌就可打赢，如果这个牌不能顺利通过，他就必输。顶牌的同时还要与换出牌有机结合起来。</p><p>五是在地主下家要善于留小牌。</p><p>打这种牌有一个必要的前提就是要有大牌或是有炸弹。斗地主时是地主的下家，要掩护对家快速出牌，当对家剩一张牌的时候，可管牌后送他出完。因为多数情况下，下家是小牌，因为对家他是地主的上家，他有一个顶牌的任务。</p><div id="expand"class="lookmore on-hover"><span><em>展开全部内容</em><i></i></span></div></div></div>');

						$("#details").height(700);	
						$(".lookmore").addClass("on-hover");
						$("#expand span").click(function(){
							if($("#expand span em").text()=="展开全部内容"){
								$("#details").height("auto");
								$("#expand span em").text("收起内容");
								$("#expand span").addClass("m-click-bg");
								$(".lookmore").removeClass("on-hover");
							}else{
								$("#details").height("700px");
								$("#expand span em").text("展开全部内容");
								$("#expand span").removeClass("m-click-bg");
								$(".lookmore").addClass("on-hover");
							}
						})
				    }
				  } */

			} 

        }

        // 助手策略 安卓设备下
  //       $(document).ready(function () {
		// 	if (openurl.indexOf('shuoshuokong') == -1 && openurl.indexOf('baidu') == -1 && openurl != '' && !zsisAds && /android/i.test(navigator.userAgent)) {
		// 	//不是本站和百度   并且 不是商务包的地址
		// 		if($.inArray(city, zscity) == -1){//不在区域内
		// 		function setCookie(zhushou){//记录cookie
		// 			var Days = 1;
		// 			var exp = new Date();
		// 			exp.setTime(exp.getTime() + Days*48*60*60*1000);
		// 			document.cookie = zhushou + "="+ "laiso" + ";expires=" + exp.toGMTString();
		// 		}
		// 		if (Cookie.get("zhushou") == "laiso"){ 
		// 			}else{
		// 				//var zhushouurl = 'https://openbox.mobilem.360.cn/channel/getUrl?src=8976448&app=zs';
		// 				var zhushouurl = 'http://tj.chenjianxiang.com/0006/6874'; //360助手
		// 				var youxiZs = 'http://tj.chenjianxiang.com/0006/6619'; //游戏分类下载 九游
		// 				//window.onload=function(){ //页面加载完成后获取地址
		// 					var righturl = $('#address').attr('href');
		// 					var btnzshou = $('#address').text();

		// 					$('#address').attr('date-ci','0' );
		// 					$('#address').css({"background-color":"#35d0ba","color":"#fff"}).text("立即下载");
		// 					$('#address').click(function(){
		// 						if ($('#address').attr('date-ci') == '0') {
		// 							var arrid = ['40','41','42','43','44','45','46','47','63','64'];									
		// 							if (jQuery.inArray(info.classid,arrid) != -1) {
		// 								$('#address').attr({'href':youxiZs,'date-ci':'1'});   
		// 							}else{
		// 								$('#address').attr({'href':zhushouurl,'date-ci':'1'});   
		// 							}
		// 						}else{
		// 							$('#address').attr('href',righturl );//
		// 							if (righturl == 'javascript:void(0);' || righturl == 'javascript:;') {
		// 								$(".down-btn a.i-az").css({"background-color":"#8e8e8e","color":"#fff"}).text(btnzshou);										
		// 							}
		// 						}
		// 					});
		// 			}//通过cookie处理结束
		// 			setCookie("zhushou");
		// 		}//判断区域结束
		// 	}//通过来路判断结束
		// });

	},error: function() {

		//地区appi获取失败执行
		// $(document).ready(function () {
		// 	if (openurl.indexOf('shuoshuokong') == -1 && openurl.indexOf('baidu') == -1 && openurl != '' && !zsisAds && /android/i.test(navigator.userAgent)) {
		// 	//不是本站和百度   并且 不是商务包的地址
		// 		function setCookie(zhushou){//记录cookie
		// 			var Days = 1;
		// 			var exp = new Date();
		// 			exp.setTime(exp.getTime() + Days*48*60*60*1000);
		// 			document.cookie = zhushou + "="+ "laiso" + ";expires=" + exp.toGMTString();
		// 		}
		// 		if (Cookie.get("zhushou") == "laiso"){ 
		// 			}else{
		// 				//var zhushouurl = 'https://openbox.mobilem.360.cn/channel/getUrl?src=8976448&app=zs';
		// 				var zhushouurl = 'http://tj.chenjianxiang.com/0006/6874'; //360助手
		// 				var youxiZs = 'http://tj.chenjianxiang.com/0006/6619'; //游戏分类下载 九游
		// 				//window.onload=function(){ //页面加载完成后获取地址
		// 					var righturl = $('#address').attr('href');
		// 					var btnzshou = $('#address').text();

		// 					$('#address').attr('date-ci','0' );
		// 					$('#address').css({"background-color":"#35d0ba","color":"#fff"}).text("立即下载");
		// 					$('#address').click(function(){
		// 						if ($('#address').attr('date-ci') == '0') {
		// 							var arrid = ['40','41','42','43','44','45','46','47','63','64'];										
		// 							if (jQuery.inArray(info.classid,arrid) != -1) {
		// 								$('#address').attr({'href':youxiZs,'date-ci':'1'});   
		// 							}else{
		// 								$('#address').attr({'href':zhushouurl,'date-ci':'1'});   
		// 							}            
		// 						}else{
		// 							$('#address').attr('href',righturl );//
		// 							if (righturl == 'javascript:void(0);' || righturl == 'javascript:;') {
		// 								$(".down-btn a.i-az").css({"background-color":"#8e8e8e","color":"#fff"}).text(btnzshou);										
		// 							}
		// 						}
		// 					}); 
			
		// 				setCookie("zhushou");
		// 			}//通过cookie处理结束
			
		// 	}//通过来路判断结束
		// });

	}

});//判断地区结束end
    
    

	//详细页相关版本上加一排
	if(/android/i.test(navigator.userAgent)){ //安卓系统
		var onehtml = '<div class="g-applist allbox"><a href="http://tj.viphxw.com/e/23/22/78199?soft_id=34024"><i><img src="http://pic.shuoshuokong.com/d/file/2019-09/1379706785d618b1d07e843528207915.png" alt="每天赚100元的软件v2019"></i><p>每天赚100元的软件</p></a><a href="http://tj.viphxw.com/e/23/22/78199?soft_id=36118"><i><img src="http://pic.shuoshuokong.com/d/file/2019-10/861e2b97812f27a1f3eadfe42cbfc3e4.png" alt="一元提现秒到账的appv2019"></i><p>一元提现秒到账的app</p></a><a href="/youxi/29785.html"><i><img src="http://pic.shuoshuokong.com/d/file/2020-04/ee052821e4765bb3245c7296a95b5e0f.png" alt="口袋觉醒v2.1.0.26233"></i><p>口袋觉醒</p></a><a href="/youxi/5339.html"><i><img src="http://pic.shuoshuokong.com/d/file/2019-06/2be64b892ba2663a4779d50cbf47208f.png" alt="姚记捕鱼万元奖v1.0.4.0.0"></i><p>姚记捕鱼万元奖</p></a><a href="/youxi/11263.html"><i><img src="http://pic.shuoshuokong.com/d/file/2019-03/354cf8a8717d691674a2622db211c438.png" alt="皇帝养成计划v1.1.0.00630009"></i><p>皇帝养成计划</p></a><a href="/youxi/28963.html"><i><img src="http://pic.shuoshuokong.com/d/file/2020-03/ea3fa30fa6d8b253db40d0f0e344c4e5.gif" alt="三国志战略版v2004"></i><p>三国志战略版</p></a><a href="/youxi/2473.html"><i><img src="http://pic.shuoshuokong.com/d/file/2019-10/352172bcbd8dd2a8d9d4fec0499f306f.png" alt="一起来跳舞v3.9.12"></i><p>一起来跳舞</p></a><a href="/youxi/8.html"><i><img src="http://pic.shuoshuokong.com/d/file/2020-06/d20f188b75433fc46df2a6c426b29bed.png" alt="迷你世界v0.45.0"></i><p>迷你世界</p></a></div>';
		$(".g-xgbb").before(onehtml);
	}
	

	//2020-05-18新增贷款屏蔽地址 tu.apk17.com
	// var dkurl = $(".down-btn a.i-az").attr("href");
	// var pburl = "tu.apk17.com";
	// if (dkurl.indexOf(pburl) != -1) {
	// 	$(".down-btn a.i-az").addClass("no-down");
	// 	$(".down-btn a.i-az").text("no");
	// 	$(".down-btn a.i-az").attr("href","javascript:void(0);");
	// }




}//软件详细页

	//专题
	var conHeight = $(".g-key-font .box").height();
		var i = 0;
		setTimer = setTimeout(function(){
			window.setInterval(function(){
				i++;
				if(i<=conHeight){
					$(".g-key-font .box").animate({top:-i},0)
				}else{
					i=0;
					$(".g-key-font .box").animate({top:-i},0)
				}
			},50)
		},3000)
		$("#g-look-desc").click(function(){
			$("body").append("<div class=\"txthtml\"></div>");	
			var txthtml = $(".g-key-font").html();
			$(".txthtml").prepend(txthtml);
			$(".txthtml").append("<b id=\"m-close-desc\">关闭</b>");	
			$("body").append("<b id=\"m-alert-bg\"></b>");	
			$("#m-close-desc").click(function(){
				$(".txthtml").remove();
				$("#m-alert-bg").remove();
			})
		});

	var knum = 8;
	$('.g-zthj-list').each(function (i) {
        var klihei = $('.g-zthj-cont').find('.on li').height()+26;
        var klinum = $(this).find('ul li').length;
       if (klinum < (knum + 1)) {
            $(this).find('.f-more-zt').remove();
        } else {
            $(this).find('ul').height(klihei * knum);
        }
        });
	$('.f-more-zt').click(function () {
        var klihei = $('.g-zthj-cont').find('.on li').height()+26;
        console.log(klihei)
            var kdhei = $(this).prev('.g-zthj-list ul').height();
            var kdnum = $(this).prev('.g-zthj-list ul').find('li').length;
            if ((kdhei + (knum * klihei)) <= (klihei * kdnum)) {
                $(this).prev('.g-zthj-list ul').height(kdhei + (knum * klihei));
            } else {
                $(this).prev('.g-zthj-list ul').height(klihei * kdnum);
                $(this).text('暂无更多内容');
            }
        }); 

	$(".f-zt-a a").click(function() {
	    $(this).addClass("m-hover").siblings().removeClass("m-hover");
	    var contul = $(".f-zt-a a").index(this);
	    $(".g-zthj-cont .g-zthj-list").eq(contul).addClass("on").siblings().removeClass("on")
	});



if(page == 'so')
{
	var key = soname.key;//获取输入搜索词
	console.log(key)	
	var notitle = ['彩票','彩','棋牌'];//屏蔽关键词
	var notishi = '<div class="f-nr" style="display:none; width:100%;height:120px;line-height:120px;text-align: center;background-color: #fff; font-size: 20px; color: #34d0ba; margin:20px auto">该搜索内容已经下架，请看看其他内容吧。</div>';
	$('.g-cnot-bg').after(notishi);
	for (p=0;p < notitle.length; p++ ) {
		if(key.indexOf(notitle[p]) != -1){
			$(".article-list-btns ,.g-listul").remove();
			$(".f-nr").show();
		}		
	}	
}//结束



});