		
			var mySwiper = new Swiper('.swiper-container1', {
				direction:'vertical',
				onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
					swiperAnimateCache(swiper); //隐藏动画元素 
					swiperAnimate(swiper); //初始化完成开始动画
					
				}, 
				onSlideChangeEnd: function(swiper){ 
					swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画		
					
//					if(swiper.activeIndex==1){
//						wasStar.style.animation = "sildeInRightTop 3s 0.4s linear forwards";
//					}
				}
			})