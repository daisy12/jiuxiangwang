function ajax(method, url, data, success) {
	var xhr = null;
	try {
		xhr = new XMLHttpRequest();
	} catch (e) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	if (method == 'get' && data) {  //判断是get传输还是post传输
		url += '?' + data;
	}
	
	xhr.open(method,url,true);
	if (method == 'get') {
		xhr.send();
	} else {
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	xhr.onreadystatechange = function() {
		
		if ( xhr.readyState == 4 ) {
			if ( xhr.status == 200 ) {
				/*等价于：
				* if(success){
				* 	success(xhr.responseText)
				* }*/
				success && success(xhr.responseText); //回调函数的参数
			} else {
				alert('出错了,Err：' + xhr.status);
			}
		}
		
	}
}