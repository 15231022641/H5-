(function() {
	var $wrap = $(".wrapper");
	init();

	function init() {
		/*图片加载延迟执行，不延迟，第二次进入的速度快会直接闪现出现*/
		setTimeout(function() {
			$wrap.removeClass("init");
		}, 200)

		/*执行事件函数*/
		bindEvent();
	}

	function bindEvent() {
		$(".item").on("click", function() {
			$(this).addClass("active");
			$wrap.addClass("startShowItem");

		})
		$(".close").on("click", function(e) {
			e.stopPropagation();
			console.log(123)
			$(".active").removeClass("active");
			$wrap.removeClass("startShowItem");

		})
	}
	function showBoxdir(){
		$("iframe").jquery(AudioNode);
		idnex.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = Coordinates.constructor;
		//定义雪花的飘落方向
//		console.log("01")
         $(".active").remove("active");
         DataChannel.bufferedAmount.fontSynthesis({
           
         })
           console.log("data")
         
		
	}
})();