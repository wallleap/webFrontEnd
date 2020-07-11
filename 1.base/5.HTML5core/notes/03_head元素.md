###head元素
	MIME类型:
		每当浏览器请求一个页面时，web服务器会在发送实际页面内容之前，先发送一些头信息。
		浏览器需要这些信息来决定如何解析随后的页面内容。最重要的是Content-Type
		
		比如: Content-Type:text/html
		
		text/html:即这个页面的"内容类型",或者称为MIME类型。这个头信息将唯一确定某个资源的本质是什么
		也决定了它应该如何被呈现。
		
		图片也有自己的MIME类型		
			jpg:image/jpeg   
			png:image/png
			
		js也有自己的MIME类型，css也有自己的MIME类型，
			任何资源都有自己的MIME类型，整个web都依靠MIME类型来运作
			
			
			
	<meta charset="UTF-8">:
		告诉浏览器你应该使用哪种编码来解析网页