
/**
 * Created by zhiyongYan on 2017/3/6.
 */
$(function () {
	//初始化坐标变量
	var last = {row:0,col:0};
	var now = {row:1,col:1};
	//初始化四个方向变量
	var direction = {up:1,right:2,down:3,left:4};
	//初始化是否移动变量
	var isMoving = false;


	//向上滑动
	$(document).swipeUp(function () {
		if(isMoving){
			return;
		}
		//将滑动前手指作用的页面的坐标赋值给滑动之后上一个页面
		last.row = now.row;
		last.col = now.col;
		//判断滑动的条件  滑动所需参数的设置
		if(last.col!=5){
			now.row = 1;
			now.col = last.col + 1;
			pageMove(direction.up);
		}
	});

	//向下滑动
	$(document).swipeDown(function () {
		if(isMoving){
			return;
		}
		//将滑动前手指作用的页面的坐标赋值给滑动之后上一个页面
		last.row = now.row;
		last.col = now.col;
		//判断滑动的条件  滑动所需参数的设置
		if(last.col!=1){
			now.row = 1;
			now.col = last.col - 1;
			pageMove(direction.down);
		}
	});

	//向左滑动
	$(document).swipeLeft(function () {
		if(isMoving){
			return;
		}
		//将滑动前手指作用的页面的坐标赋值给滑动之后上一个页面
		last.row = now.row;
		last.col = now.col;
		//判断滑动的条件  滑动所需参数的设置
		if(last.col>1&&last.col<5&&last.row==1){
			now.row = last.row + 1;
			pageMove(direction.left);
		}
	});

	//向右滑动
	$(document).swipeRight(function () {
		if(isMoving){
			return;
		}
		//将滑动前手指作用的页面的坐标赋值给滑动之后上一个页面
		last.row = now.row;
		last.col = now.col;
		//判断滑动的条件  滑动所需参数的设置
		if(last.col>1&&last.col<5&&last.row==2){
			now.row = last.row - 1;
			pageMove(direction.right);
		}
	});
	//定义move函数
	function pageMove(dir) {
		//初始化作用的两个页面
		var lastPage = '.page-' + last.col + '-' + last.row;
		var nowPage = '.page-' + now.col + '-' + now.row;

		//初始化页面类
		var outClass = '';
		var inClass = '';
		//匹配方向
		switch (dir){
			case direction.up:
				outClass = 'pt-page-moveToTop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case direction.right:
				outClass = 'pt-page-moveToRight';
				inClass = 'pt-page-moveFromLeft';
				break;
			case direction.down:
				outClass = 'pt-page-moveToBottom';
				inClass = 'pt-page-moveFromTop';
				break;
			case direction.left:
				outClass = 'pt-page-moveToLeft';
				inClass = 'pt-page-moveFromRight';
				break;
		}
		//为页面添加动画开始的类
		$(nowPage).removeClass('hide');

		$(lastPage).addClass(outClass);
		$(nowPage).addClass(inClass);
		isMoving = true;
		//处理动画完成时页面的类
		setTimeout(function () {
			$(lastPage).addClass('hide');
			$(lastPage).removeClass(outClass);
			$(lastPage).removeClass('page-current');
			$(lastPage).find('img').addClass('hide');

			$(nowPage).addClass('page-current');
			$(nowPage).removeClass(inClass);
			$(nowPage).find('img').removeClass('hide');
			isMoving = false;
		},600);
	}
});


