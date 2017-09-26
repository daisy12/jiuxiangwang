document.onreadystatechange=function() {
	//存在四个状态
	//内容加载完成执行
	if (document.readyState == "complete") {
		document.getElementsByClassName('mask_load')[0].style.display = "none";
		document.getElementsByClassName('mask_ad')[0].style.opacity="1";
	}
}
window.onload=function(){
	var mask_ad=document.getElementsByClassName('mask_ad')[0];
	var maskAd_img=mask_ad.getElementsByTagName('img')[0];
	var h=document.documentElement.clientHeight||document.body.clientHeight;
	move(maskAd_img,{'top':parseInt(0.5*h)});
	setTimeout(function(){
		move(mask_ad,{'opacity':0});
		mask_ad.style.display="none";
	},3000);



	var nav=document.getElementsByClassName('nav')[0];
	var nav_lis=nav.getElementsByTagName('li');
	for(var i=0;i<nav_lis.length;i++){
		if(nav_lis[i].getElementsByClassName('nav_des').length!=0){
			nav_lis[i].onmouseover=function(){
				this.style.backgroundColor="#fff";
				this.getElementsByClassName('nav_des')[0].style.display="block";
			}
			nav_lis[i].onmouseout=function(){
				this.style.backgroundColor="transparent";
				this.getElementsByClassName('nav_des')[0].style.display="none";
			}
		}
		
	}

	var categoryItem=document.getElementsByClassName('categoryItem');
	var menuBox=document.getElementsByClassName('menuBox');
	var temp=0;
	for(var i=0;i<categoryItem.length;i++){
		categoryItem[i].index=i;
		menuBox[i].index=i;
		categoryItem[i].onmouseover=function(){
			menuBox[temp].style.display="none";
			categoryItem[temp].style.borderLeft="3px solid #fff";
			categoryItem[temp].style.backgroundColor="#fff";	

			this.style.borderLeft="3px solid #cc0001";
			this.style.backgroundColor="#f1f1f1";	
			menuBox[this.index].style.display="block";
			temp=this.index;
		}
		categoryItem[i].onmouseout=function(){
			menuBox[this.index].style.display="none";
			categoryItem[temp].style.borderLeft="3px solid #fff";
			categoryItem[temp].style.backgroundColor="#fff";
		}
		menuBox[i].onmouseover=function(){
			this.style.display="block";
			categoryItem[temp].style.borderLeft="3px solid #cc0001";
			categoryItem[temp].style.backgroundColor="#f1f1f1";
		}
		menuBox[i].onmouseout=function(){
			this.style.display="none";
			categoryItem[temp].style.borderLeft="3px solid #fff";
			categoryItem[temp].style.backgroundColor="#fff";
		}
	}


	var menuBox_next=document.getElementsByClassName('menuBox_next')[0];
	var choose=menuBox_next.getElementsByClassName('choose')[0];
	var oP=menuBox_next.getElementsByTagName('p');	
	var oA=choose.getElementsByTagName('a');

	var tempA=0;
	for(var i=0;i<oA.length;i++){
		oA[i].index=i;
		oA[i].onmouseover=function(){
			oA[tempA].className="";
			oA[tempA].children[0].style.display="none";
			oP[tempA].style.display="none";

			this.className="current"
			this.children[0].style.display="block";
			oP[this.index].style.display="block";
			tempA=this.index;

		}
	}
	/*轮播图*/
	var banner=document.getElementsByClassName('banner')[0];
	var banner_box=document.getElementsByClassName('banner_box')[0];
	var bannerItem=banner_box.getElementsByClassName('bannerItem');
	var dot=document.getElementsByClassName('dot')[0];
	var dotLis=dot.getElementsByTagName('li');
	var num=0;
	var tempShow=0;
	var bannerTimer=null;
	bannerTimer=setInterval(function(){
		move(bannerItem[tempShow],{'opacity':0});
		for(var i=0;i<dotLis.length;i++){
			dotLis[i].className="";
		}
		num++;
		if(num>=bannerItem.length){
			num=0;
		}
		dotLis[num].className="active";
		move(bannerItem[num],{'opacity':100});
		tempShow=num;
	},2000);

	for(var i=0;i<dotLis.length;i++){
		dotLis[i].index=i;
		dotLis[i].onclick=function(){
			move(bannerItem[tempShow],{'opacity':0});
			for(var i=0;i<dotLis.length;i++){
				dotLis[i].className="";
			}
			num=this.index;
			dotLis[num].className="active";
			move(bannerItem[num],{'opacity':100});
			tempShow=num;
		}
	}
	banner.onmouseover=function(){
		clearInterval(bannerTimer);
	}
	banner.onmouseout=function(){
		bannerTimer=setInterval(function(){
			move(bannerItem[tempShow],{'opacity':0});
			for(var i=0;i<dotLis.length;i++){
				dotLis[i].className="";
			}
			num++;
			if(num>=bannerItem.length){
				num=0;
			}
			dotLis[num].className="active";
			move(bannerItem[num],{'opacity':100});
			tempShow=num;
		},2000);
	}

	/*banner区域产品展示*/
	var banner_show=document.getElementsByClassName('banner_show')[0];
	var show_item=banner_show.getElementsByClassName('show_item');
	for(var i=0;i<show_item.length;i++){
		show_item[i].onmouseover=function(){
			for(var j=0;j<show_item.length;j++){
				show_item[j].children[0].style.display="none";
			}
			this.children[0].style.display="block";
		}
		show_item[i].onmouseout=function(){
			for(var j=0;j<show_item.length;j++){
				show_item[j].children[0].style.display="none";
			}
		}
	}



	var shopLeft=document.getElementsByClassName('shopLeft')[0];
	var select=shopLeft.getElementsByClassName('select')[0];
	var selectLis=select.getElementsByTagName('li');

	var selectBox=document.getElementsByClassName('selectBox')[0];

	var ul=document.createElement('ul');
	ul.setAttribute('class','selectItem clearfix');

	selectBox.innerHTML="";

	for(var i=0;i<data['item0'].length;i++){

		ul.innerHTML+='<li class="fl">'+
			'<div class="pic">'+
			'<a href=""  title="【酒仙自营】52°金剑南K6 500ml+52°五粮液股份进万家（窖藏）450ml">'+
			'<img src="'+'images/item0/'+data['item0'][i].src+'">'+
			'</a>'+
			'</div>'+
			'<p class="msg">'+
			'<a href="" title="【酒仙自营】52°金剑南K6 500ml+52°五粮液股份进万家（窖藏）450ml">'+
									'【酒仙自营】52°金剑南K6 500ml+52°五粮液股份进万家（窖藏）450ml'+
		'</a>'+
		'</p>'+
		'<div class="price">'+
			'<strong>'+data['item0'][i].price+'</strong>'+
		'</div>'+
		'</li>';
	}
	selectBox.appendChild(ul);


	var selectTemp=0;
	for(var i=0;i<selectLis.length;i++){
		selectLis[i].index=i;
		selectLis[i].onmouseover=function(){

			selectLis[selectTemp].className="";

			this.className="active";

			selectTemp=this.index;

			var ul=document.createElement('ul');


			selectBox.innerHTML="";
			ul.setAttribute('class','selectItem clearfix');
			for(var i=0;i<data['item'+this.index].length;i++){

				ul.innerHTML+='<li class="fl">'+
					'<div class="pic">'+
					'<a href=""  title="【酒仙自营】52°金剑南K6 500ml+52°五粮液股份进万家（窖藏）450ml">'+
					'<img src="'+'images/item'+this.index+'/'+data['item'+this.index][i].src+'">'+
					'</a>'+
					'</div>'+
					'<p class="msg">'+
					'<a href="" title="【酒仙自营】52°金剑南K6 500ml+52°五粮液股份进万家（窖藏）450ml">'+
											'【酒仙自营】52°金剑南K6 500ml+52°五粮液股份进万家（窖藏）450ml'+
				'</a>'+
				'</p>'+
				'<div class="price">'+
					'<strong>'+data['item'+this.index][i].price+'</strong>'+
				'</div>'+
				'</li>';
			}
			selectBox.appendChild(ul);
			/*console.log(selectBox.innerHTML);*/
		}
	}

	var new_title=document.getElementsByClassName('new_title')[0];
	var titleLis=new_title.getElementsByTagName('li');
	var new_list=document.getElementsByClassName('new_list')[0];
	var list_box=new_list.getElementsByClassName('list_box');
	for(var i=0;i<titleLis.length;i++){
		titleLis[i].index=i;
		titleLis[i].onmouseover=function(){
			for(var j=0;j<titleLis.length;j++){
				titleLis[j].className="";
				list_box[j].style.display="none";
			}
			this.className="active";
			list_box[this.index].style.display="block";
		}
	}

	/*侧边轮播图*/
	var sideTimer1=null;
	var sideTimer2=null;
	var num1=0;
	var num2=0;
	var bannerTop=document.getElementsByClassName('bannerTop')[0];
	var bannerTop_ul=bannerTop.getElementsByTagName('ul')[0];
	var dotTop=bannerTop.getElementsByClassName('dot')[0];
	var bannerOl_lis1=dotTop.getElementsByTagName('li');

	var bannerBottom=document.getElementsByClassName('bannerBottom')[0];
	var bannerBottom_ul=bannerBottom.getElementsByTagName('ul')[0];
	var dotBottom=bannerBottom.getElementsByClassName('dot')[0];
	var bannerOl_lis2=dotBottom.getElementsByTagName('li');
	
	sideTimer1=setInterval(function(){
		num1++;
		for(var i=0;i<bannerOl_lis1.length;i++){
			bannerOl_lis1[i].className="";
		}
		if(num1>bannerOl_lis1.length){
			bannerTop_ul.style.left="0px";
			num1=1;
			setTimeout(function(){
				move(bannerTop_ul,{'left':-268*num1});
				bannerOl_lis1[num1].className="active";
			},30)
		}else{
			move(bannerTop_ul,{'left':-268*num1});
			bannerOl_lis1[num1%bannerOl_lis1.length].className="active";
		}
		
	},2000);
	sideTimer2=setInterval(function(){
		num2++;
		for(var i=0;i<bannerOl_lis2.length;i++){
			bannerOl_lis2[i].className="";
		}
		if(num2>bannerOl_lis2.length){
			bannerBottom_ul.style.left="0px";
			num2=1;
			setTimeout(function(){
				move(bannerBottom_ul,{'left':-268*num2});
				bannerOl_lis2[num2].className="active";
			},30)
		}else{
			move(bannerBottom_ul,{'left':-268*num2});
			bannerOl_lis2[num2%bannerOl_lis2.length].className="active";
		}
		
	},2000);

	bannerTop.onmouseover=function(){
		clearInterval(sideTimer1);
	}
	bannerBottom.onmouseover=function(){
		clearInterval(sideTimer2);
	}
	bannerTop.onmouseout=function(){
		sideTimer1=setInterval(function(){
			num1++;
			for(var i=0;i<bannerOl_lis1.length;i++){
				bannerOl_lis1[i].className="";
			}
			if(num1>bannerOl_lis1.length){
				bannerTop_ul.style.left="0px";
				num1=1;
				setTimeout(function(){
					move(bannerTop_ul,{'left':-268*num1});
					bannerOl_lis1[num1].className="active";
				},30)
			}else{
				move(bannerTop_ul,{'left':-268*num1});
				bannerOl_lis1[num1%bannerOl_lis1.length].className="active";
			}
			
		},2000);
	}
	bannerBottom.onmouseout=function(){
		sideTimer2=setInterval(function(){
			num2++;
			for(var i=0;i<bannerOl_lis2.length;i++){
				bannerOl_lis2[i].className="";
			}
			if(num2>bannerOl_lis2.length){
				bannerBottom_ul.style.left="0px";
				num2=1;
				setTimeout(function(){
					move(bannerBottom_ul,{'left':-268*num2});
					bannerOl_lis2[num2].className="active";
				},30)
			}else{
				move(bannerBottom_ul,{'left':-268*num2});
				bannerOl_lis2[num2%bannerOl_lis2.length].className="active";
			}
			
		},2000);
	}
	for(var i=0;i<bannerOl_lis1.length;i++){
		bannerOl_lis1[i].index=i;
		bannerOl_lis1[i].onclick=function(){
			for(var i=0;i<bannerOl_lis1.length;i++){
				bannerOl_lis1[i].className="";
			}
			num1=this.index;
			move(bannerTop_ul,{'left':-268*num1});
			bannerOl_lis1[num1].className="active";
		}
	}
	for(var i=0;i<bannerOl_lis2.length;i++){
		bannerOl_lis2[i].index=i;
		bannerOl_lis2[i].onclick=function(){
			for(var i=0;i<bannerOl_lis2.length;i++){
				bannerOl_lis2[i].className="";
			}
			num2=this.index;
			move(bannerBottom_ul,{'left':-268*num2});
			bannerOl_lis2[num2].className="active";
		}
	}




	var recommend_box=document.getElementsByClassName('recommend_box')[0];
	var product=recommend_box.getElementsByClassName('product')[0];
	var product_lis=product.getElementsByTagName('li');
	var recommend=document.getElementsByClassName('recommend')[0];
	var recL=recommend.getElementsByClassName('prev')[0];
	var recR=recommend.getElementsByClassName('next')[0];
	var recTimer=null;
	var flag=-1;
	product.innerHTML+=product.innerHTML;
	product.style.width=product_lis[0].offsetWidth*product.children.length+"px";

	recTimer=setInterval(function(){
		moveImg(-2376,0,flag);
	},30)

	
	recommend_box.onmouseover=function(){
		clearInterval(recTimer);
	}
	recommend_box.onmouseout=function(){
		clearInterval(recTimer);
		recTimer=setInterval(function(){
			if(flag<0) {
				moveImg(-2376, 0, flag);
			}else{
				moveImg(0,-2376,flag);
			}
		},30)
	}
	recR.onclick=function(ev){
		clearInterval(recTimer);
		flag=1;
		recTimer=setInterval(function(){
			moveImg(0,-2376,flag);
		},30)
	}
	recL.onclick=function(){
		clearInterval(recTimer);
		flag=-1;
		recTimer=setInterval(function(){
			moveImg(-2376,0,flag);
		},30);
	}
	function moveImg(iTarget,value,speed){
		if(product.offsetLeft===iTarget){
			product.style.left=value+"px";
		}else{
			product.style.left=product.offsetLeft+speed+"px";
		}
	}


	var recLis=product.getElementsByTagName('li');
	for(var i=0;i<recLis.length;i++){
		dateTime(recLis[i]);
	}
	function dateTime(obj){
		var hour=obj.getElementsByClassName('hour')[0];
		var minute=obj.getElementsByClassName('minute')[0];
		var second=obj.getElementsByClassName('second')[0];
		var hours=parseInt(hour.innerText);
		var minutes=parseInt(minute.innerText);
		var seconds=parseInt(second.innerText);

		var time=hours*3600+minutes*60+seconds;//秒数

		setInterval(function(){
			time=time-1;


			hour.innerText=Math.floor(time/3600);

			minute.innerText=Math.floor(time/60%60);
			second.innerText=Math.floor(time%60);

		},1000)
	}

	var rank_title=document.getElementsByClassName('rank_title')[0];
	var rank_ul=rank_title.getElementsByTagName('ul')[0];
	var rank_lis=rank_ul.getElementsByTagName('li');
	var rank_box=document.getElementsByClassName('rank_box')[0];
	rank_box.innerHTML="";
	var str='';
	var cty=rank_lis[0].children[0].getAttribute('country');

	for(var i=0;i<country[cty].length;i++){
		str+='<li class="item clearfix">'+
			'<a href="" class="fl">'+
			'<img src="images/'+cty+'/'+country[cty][i].src+'">'+
			'</a>'+
			'<div class="fr">'+
			'<p class="msg">'+
			'<a href="">整箱红酒中国新疆新天天赐蓝标干红葡萄酒畅享12支装'+
			'</a>'+
			'</p>'+
			'<div class="price">'+
			'<strong>'+country[cty][i].price+'</strong>'+
			'</div>'+
			'</div>'+
			'</li>';
	}
	rank_box.innerHTML=str;
	
	for(var i=0;i<rank_lis.length;i++){
		rank_lis[i].onmouseover=function(){
			var rank_box=document.getElementsByClassName('rank_box')[0];
			for(var i=0;i<rank_lis.length;i++){
				rank_lis[i].children[0].style.color="#666";
			}
			this.children[0].style.color="#cd0100";
			rank_box.innerHTML="";
			var str='';
			var cty=this.children[0].getAttribute('country');

			for(var i=0;i<country[cty].length;i++){
				str+='<li class="item clearfix">'+
					'<a href="" class="fl">'+
						'<img src="images/'+cty+'/'+country[cty][i].src+'">'+
					'</a>'+
					'<div class="fr">'+
						'<p class="msg">'+
							'<a href="">整箱红酒中国新疆新天天赐蓝标干红葡萄酒畅享12支装'+
							'</a>'+
						'</p>'+
						'<div class="price">'+
							'<strong>'+country[cty][i].price+'</strong>'+
						'</div>'+	
					'</div>'+
				'</li>';
			}
			rank_box.innerHTML=str;
		/*	console.log(rank_box.innerHTML)*/
		}
	}



	var brand_title=document.getElementsByClassName('brand_title')[0];
	var brand_Lis=brand_title.getElementsByTagName('li');
	var current=brand_title.getElementsByClassName('current')[0];
	var brand_item=document.getElementsByClassName('brand_item');
	for(var i=0;i<brand_Lis.length;i++){
		brand_Lis[i].index=i;
		brand_Lis[i].onmouseover=function(){
			for(var j=0;j<brand_Lis.length;j++){
				brand_Lis[j].style.color="#555";

				brand_item[j].style.display="none";
			}
			move(current,{'left':this.index*105});
			this.style.color="#dd102e";
			brand_item[this.index].style.display="block";
		}
	}

	var brand_pic=document.getElementsByClassName('brand_pic')[0];
	var brandPic_Lis=brand_pic.getElementsByTagName('li');
	for(var i=0;i<brandPic_Lis.length;i++){
		brandPic_Lis[i].onmouseover=function(){
			move(this.children[0].children[0],{"left":-100});
		}
		brandPic_Lis[i].onmouseout=function(){
			move(this.children[0].children[0],{"left":0});
		}
	}


	/*输入框*/
	var submit=document.getElementsByClassName('submit')[0];
	var btn=submit.getElementsByTagName('input')[0];
	var oSpan=submit.getElementsByTagName('span')[0];
	btn.onfocus=function(){
		oSpan.style.display="none";
	}
	btn.onblur=function(){
		oSpan.style.display="block";
	}

	var server_item=document.getElementsByClassName('server_item')[6];
	var weixin=server_item.getElementsByClassName('weixin')[0];
	var weixinSpan=weixin.getElementsByTagName('span')[0];
	var weixinCode=weixin.getElementsByClassName('code')[0];
	var num=0;
	weixinSpan.onmouseover=function(){
		switch(num%2){
			case 0:
				weixinCode.style.display="block";break;
			case 1:
				weixinCode.style.display="none";break;
		}
	}
	weixinSpan.onmouseout=function(){
		num++;
	}

	var sideBarR=document.getElementsByClassName('sideBarR')[0];
	var sideBar_lis=sideBarR.getElementsByClassName('item');
	for(var i=0;i<sideBar_lis.length;i++){
		sideBar_lis[i].onmouseenter=function(){
			for(var i=0;i<sideBar_lis.length;i++){
				if(sideBar_lis[i].getElementsByClassName('des')[0]) {
					sideBar_lis[i].getElementsByClassName('des')[0].style.display = "none";
				}
			}

			if(this.getElementsByClassName('des')[0]){
				this.getElementsByClassName('des')[0].style.display = "block";
			}
		}
		sideBar_lis[i].onmouseleave=function(){
			for(var i=0;i<sideBar_lis.length;i++){
				if(sideBar_lis[i].getElementsByClassName('des')[0]) {
					sideBar_lis[i].getElementsByClassName('des')[0].style.display = "none";
				}
			}
		}
	}

	var returnTop=sideBarR.getElementsByClassName('return')[0];
	var sideBarL=document.getElementsByClassName('sideBarL')[0];
	var subnav_return=sideBarL.getElementsByClassName('return')[0];
	var returnTimer=null;
	returnTop.onclick=function(){
		returnFun();
	}
	subnav_return.onclick=function(){
		returnFun();
	}
	function returnFun(){
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		returnTimer=setInterval(function(){
			if(document.body.scrollTop){
				document.body.scrollTop=document.body.scrollTop-100;
				if(document.body.scrollTop<=0){
					clearInterval(returnTimer);
				}
			}else{
				document.documentElement.scrollTop=document.documentElement.scrollTop-100;
				if(document.documentElement.scrollTop<=0){
					clearInterval(returnTimer);
				}
			}
		},30)
	}


	var floorTimer=null;
	var currentFloor=0;
	var location=[];
	var floorLink=document.getElementsByClassName('floorLink');
	var floor=document.getElementsByClassName('floor');
	for(var i=0;i<floor.length;i++){
		location.push(floor[i].offsetTop);//获取高度offsetTop
	}

	document.onscroll=scrollFun;
	function scrollFun() {
		var sideBarL = document.getElementsByClassName('sideBarL')[0];
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

		if (scrollTop > 1200) {
			sideBarL.style.opacity = "1";

			var Imgnum = parseFloat(sideBarL.style.transform.substring(7));
			var timer = setInterval(function () {
				Imgnum = Imgnum - 0.1;
				if (Imgnum < 1) {
					clearInterval(timer);
					sideBarL.style.transform = "scaleY(1)";
				} else {
					sideBarL.style.transform = "scaleY(" + Imgnum + ")";
				}
			}, 50);


			var h=floor[0].clientHeight/2;

			if(scrollTop>=location[0]-h&&scrollTop<location[1]-h){
				for(var i=0;i<floorLink.length-1;i++){
					floorLink[i].children[0].style.opacity="0";
				}
				floorLink[0].children[0].style.opacity="1";
				currentFloor=0;
			}else if(scrollTop>=location[1]-h&&scrollTop<location[2]-h){
				for(var i=0;i<floorLink.length-1;i++){
					floorLink[i].children[0].style.opacity="0";
				}
				floorLink[1].children[0].style.opacity="1";
				currentFloor=1;
			}else if(scrollTop>=location[2]-h&&scrollTop<location[3]-h){
				for(var i=0;i<floorLink.length-1;i++){
					floorLink[i].children[0].style.opacity="0";
				}
				floorLink[2].children[0].style.opacity="1";
				currentFloor=2;
			}else if(scrollTop>=location[3]-h&&scrollTop<location[4]-h){
				for(var i=0;i<floorLink.length-1;i++){
					floorLink[i].children[0].style.opacity="0";
				}
				floorLink[3].children[0].style.opacity="1";
				currentFloor=3;
			}else if(scrollTop>=location[4]-h){
				for(var i=0;i<floorLink.length-1;i++){
					floorLink[i].children[0].style.opacity="0";
				}
				floorLink[4].children[0].style.opacity="1";
				currentFloor=4;
			}
		}
		if (scrollTop < 400) {
			sideBarL.style.opacity = "0";
			sideBarL.style.transform = "scaleY(1.5)";
		}
	}



	for(var i=0;i<floorLink.length-1;i++){
		floorLink[i].index=i;
		floorLink[i].onclick=function(){
			for(var i=0;i<floorLink.length-1;i++){
				floorLink[i].children[0].style.opacity="0";
			}

			this.children[0].style.opacity="1";
			floorFun(location[this.index]);
			currentFloor=this.index;

		};
		var delayTimer=null;
		floorLink[i].onmouseover=function(){
			clearTimeout(delayTimer); //如果再次移入，需要再次清除定时器
			for(var i=0;i<floorLink.length-1;i++){
				floorLink[i].children[0].style.opacity="0";
			}

			this.children[0].style.opacity="1";
		}
		floorLink[i].onmouseout=function(){
			for(var i=0;i<floorLink.length-1;i++){
				floorLink[i].children[0].style.opacity="0";
			}
			delayTimer=setTimeout(function(){
				floorLink[currentFloor].children[0].style.opacity="1";
			},200)

		}
	}

	function floorFun(target){
		var floorTimer=null;
		document.onscroll=null;
		floorTimer=setInterval(function(){
			if(document.body.scrollTop){

				if(Math.abs(document.body.scrollTop-target)<100){
					clearInterval(floorTimer);
					document.body.scrollTop=target;
					document.onscroll=scrollFun;
				}else{
					if(document.body.scrollTop<target){
						document.body.scrollTop=document.body.scrollTop+100;
					}else{
						document.body.scrollTop=document.body.scrollTop-100;
					}
				}
			}else{

				if(Math.abs(document.documentElement.scrollTop-target)<100){
					clearInterval(floorTimer);
					document.onscroll=scrollFun;
					document.documentElement.scrollTop=target;
				}else{
					if(document.documentElement.scrollTop<target){
						document.documentElement.scrollTop=document.documentElement.scrollTop+100;
					}else{
						document.documentElement.scrollTop=document.documentElement.scrollTop-100;
					}
				}
			}
		},30);
	}

	var floor=document.getElementsByClassName('floor');
	var str=new Array();
	for(var i=0;i<floor.length;i++){
		var floorName=floor[i].className.split(' ')[0];
		floor[i].getElementsByClassName('frCen_r')[0].innerHTML="";
		str[i]='';
		for(var j=0;j<floorData[floor[i].className.split(' ')[0]].length;j++){

			str[i]+='<li>'+
			'<a href="" title="54°董酒珍酿（20）500ml(双瓶装)+茶具五件套（酒仙会员专享）">'+
				'<img src="images/'+floorName+'/'+floorData[floorName][j].src+'">'+
				'</a>'+
				'<p class="msg">'+
				'<a href="">'+floorData[floorName][j].msg+
			'</a>'+
			'</p>'+
			'<div class="price">'+
				'<span>'+floorData[floorName][j].price+'</span>'+
			'</div>'+
			'</li>';
		}
		floor[i].getElementsByClassName('frCen_r')[0].innerHTML=str[i];

	}

	//跨域搜索框提示信息
	//http://list.jiuxian.com/assKeyWords.htm?callback=fn&wd=茅
	var search_txt=document.getElementsByClassName('search_txt')[0];
	var searchFinal=document.getElementsByClassName('searchFinal')[0];
	var search_ul=searchFinal.getElementsByTagName('ul')[0];



	search_txt.onkeyup=function(){
		if(search_txt.value!='') {
			searchFinal.style.display="block";
			var script = document.createElement('script');
			script.src = "http://list.jiuxian.com/assKeyWords.htm?wd="+this.value+"&callback=fun";
			document.body.appendChild(script);
		}else{
			searchFinal.style.display="none";
		}

	}
	var close_dot=document.getElementsByClassName('close_dot')[0];
	close_dot.onclick=function(){
		searchFinal.style.display="none";
	}



	/*是否登录*/
	sideBarR=document.getElementsByClassName('sideBarR')[0];
	var sidevip=sideBarR.getElementsByClassName('vip')[0];
	if(window.location.hash){
		sidevip.style.display="block";
		sidevip.children[0].children[0].innerHTML=window.location.hash.substring(1)+",你好";
	}


	//百叶窗
	new imgSwitch("imgContainer",{
		Type:1,
		Width:210,
		Height:485,
		Pause:2000,
		Speed:"normal",
		Auto:true,
		Navigate:"numberic",
		NavigatePlace:"outer",
		PicturePosition:"left"})


	//canvas画布
	var canvas=document.getElementById('canvas');
	canvas.width=1000;
	canvas.height=800;
	var context=canvas.getContext("2d");
	for(var i=0;i<20;i++){
		var r=Math.random()*5+5;//5-15
		var x=Math.random()*canvas.width;
		var y=Math.random()*canvas.height*0.65;//天空与大地
		var a=Math.random()*360;
		drawStar(context,x,y,r,a);
	}
	function drawStar(cxt,x,y,R,rot){
		cxt.save();
		cxt.translate(x,y);
		cxt.rotate(rot/180*Math.PI);
		cxt.scale(R,R);
		startPath(cxt);
		cxt.fillStyle="rgba(255,255,255,"+Math.random()+")";
		cxt.fill();
		cxt.restore();

	}
	fillMoon(context,2,100,100,-45,30);

	function startPath(cxt){
		cxt.beginPath();
		for(var i=0;i<10;i++){
			cxt.lineTo(Math.cos((18+i*72)/180*Math.PI),
				-Math.sin((18+i*72)/180*Math.PI));
			cxt.lineTo(Math.cos((54+i*72)/180*Math.PI)*0.5,
				-Math.sin((54+i*72)/180*Math.PI)*0.5);
		}
		cxt.closePath();
	}
	//月亮的绘制
	function fillMoon(cxt,d,x,y,R,rot,fillColor){
		cxt.save();
		cxt.translate(x,y);
		cxt.rotate(rot*Math.PI/180);
		cxt.scale(R,R);
		pathMoon(cxt,d);
		cxt.fillStyle=fillColor||"#fb5";
		cxt.fill();
		cxt.restore();
	}

	//标准的弯月路径
	function pathMoon(cxt,d){
		cxt.beginPath();
		cxt.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
		cxt.moveTo(0,-1);
		//控制点，以及月亮内弧切点的位置
		cxt.arcTo(d,0,0,1,dis(0,-1,d,0)/d);
		cxt.closePath();
	}
	function dis(x1,y1,x2,y2){
		return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
	}

}
function fun(data){ //注意:
	console.log(data);
	var searchFinal=document.getElementsByClassName('searchFinal')[0];
	var search_ul=searchFinal.getElementsByTagName('ul')[0];
	var html="";
	if(this.value!="") {
		for (var i = 0; i < data.resultList.length; i++) {
			html += '<li class="Final_item">' +
				'<a href="http://list.jiuxian.com/search.htm?key='+data.resultList[i].word+'" class="clearfix">' +
				'<span class="fl">'+data.resultList[i].word+'</span>' +
				'<em class="fr">约<b>'+data.resultList[i].count+'</b>件商品</em>' +
				'</a>' +
				'</li>';
		}
		search_ul.innerHTML = html;
		searchFinal.style.display="block";
	}else{
		searchFinal.style.display="none";
	}
}















