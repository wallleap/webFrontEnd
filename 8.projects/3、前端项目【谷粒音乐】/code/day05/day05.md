###第一版手动橡皮筋效果
	disX : touchstart 到 touchend 整个过程中手指滑动的距离
		elementX 为基准（每次手指touchstart的时候，元素的位置）
	pointDis:	nowPoint -  lastPoint 
			在touchmove的最后一定要记住同步nowpoint 给 lastPoint
		应该以实时位置为基准(damu.css函数)
	
###手动橡皮筋
	减小每次手指移动（一次touchmove手指滑动的距离）的有效距离

###快速滑屏
	拿到手指touchend时的speed
		以速度为基准值延长目标位置
			tragetX = translateX + speed*200;
	

	speed:最后一次touchmove过程中的平均速度
		pointdis / timedis
		速度的正负代表方向


###快速滑屏的橡皮筋效果
	贝塞尔


###快速滑屏的橡皮筋效果   和  手动橡皮筋的冲突
	在手动橡皮筋效果触发时不开启快速滑屏

###2个bug
	不处理 distime ;  首次点击导航后,滑屏会失效
		distime =1;
	
	速度的残留
		每次touchstart时重置dispoint
		dispoint =0;

###防抖动
	isX
	isFirst
	判断用户的首次操作
		如果是x轴滑屏，不管用户以后怎么操作，滑屏逻辑永远都会被触发
		如果是y轴滑屏，不管用户以后怎么操作，滑屏逻辑永远都不会被触发
		
		怎么防止首次抖动
			1.确定了用户首次操作的方向
				isFirst加入逻辑就变为false。直达下一次touchstart置回
				如果是y   return
		怎么防止后续抖动
			在touchmove一上来时，就对用户首次操的方向进行判断
				如果是y   return









