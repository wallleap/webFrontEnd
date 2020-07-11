###day02
	1.rem适配
		rem单位：根标签的font-size所代表的值
		---步骤
			第一步  		创建style标签
			第二三步		将根标签的font-size置为布局视口的宽/16
			第四步  		将style标签添加到head中
		---原理
			改变一个元素在不同设备上的css像素的个数
		---优缺点
			优点：可以使用完美视口
			缺点：px到rem的转化特别麻烦
	2.viewport适配
		---步骤
			将所有设备的布局视口的宽置为设计图的宽度
			第一步	定义设计图的宽度
			第二步	确定系统缩放比例
			第三步	选中viewport标签，改变其content值
		---原理
			改变不同设备上一个css像素跟物理像素的比例
		---优缺点
			优点：所量即所得
			缺点：破坏了完美视口
	3.百分比适配
		百分比参照于谁
	4.流体(弹性布局 flex)+固定 (不是适配)
	
	5.一物理像素的实现
		rem+系统缩放
			1.主体适配采用rem适配 并放大rem的基值(dpr倍)
			2.再通过系统缩放 缩回dpr倍，initial-scale=1/dpr
		响应式+变换缩放
	
	6.移动端事件基础
		1.queryselectorAll：静态列表		queryselector：静态列表的第一个
		2.touchstart touchmove	touchend
		3.阻止事件的默认行为，阻止事件的冒泡
		4.怎么全局阻止默认事件
		5.事件点透
		6.event 3类手指列表
		7.常见问题
			-webkit-appearance:none
			-webkit-tap-highlight-color
			font boosting
		
		
	
	
	
	
	
	
	
