window.onload=function() {

    var nav = document.getElementsByClassName('nav')[0];
    var nav_lis = nav.getElementsByTagName('li');
    for (var i = 0; i < nav_lis.length; i++) {
        if (nav_lis[i].getElementsByClassName('nav_des').length != 0) {
            nav_lis[i].onmouseover = function () {
                this.style.backgroundColor = "#fff";
                this.getElementsByClassName('nav_des')[0].style.display = "block";
            }
            nav_lis[i].onmouseout = function () {
                this.style.backgroundColor = "transparent";
                this.getElementsByClassName('nav_des')[0].style.display = "none";
            }
        }

    }

    var categoryItem = document.getElementsByClassName('categoryItem');
    var menuBox = document.getElementsByClassName('menuBox');
    var temp = 0;
    for (var i = 0; i < categoryItem.length; i++) {
        categoryItem[i].index = i;
        menuBox[i].index = i;
        categoryItem[i].onmouseover = function () {
            menuBox[temp].style.display = "none";
            categoryItem[temp].style.borderLeft = "3px solid #fff";
            categoryItem[temp].style.backgroundColor = "#fff";

            this.style.borderLeft = "3px solid #cc0001";
            this.style.backgroundColor = "#f1f1f1";
            menuBox[this.index].style.display = "block";
            temp = this.index;
        }
        categoryItem[i].onmouseout = function () {
            menuBox[this.index].style.display = "none";
            categoryItem[temp].style.borderLeft = "3px solid #fff";
            categoryItem[temp].style.backgroundColor = "#fff";
        }
        menuBox[i].onmouseover = function () {
            this.style.display = "block";
            categoryItem[temp].style.borderLeft = "3px solid #cc0001";
            categoryItem[temp].style.backgroundColor = "#f1f1f1";
        }
        menuBox[i].onmouseout = function () {
            this.style.display = "none";
            categoryItem[temp].style.borderLeft = "3px solid #fff";
            categoryItem[temp].style.backgroundColor = "#fff";
        }
    }


    var menuBox_next = document.getElementsByClassName('menuBox_next')[0];
    var choose = menuBox_next.getElementsByClassName('choose')[0];
    var oP = menuBox_next.getElementsByTagName('p');
    var oA = choose.getElementsByTagName('a');

    var tempA = 0;
    for (var i = 0; i < oA.length; i++) {
        oA[i].index = i;
        oA[i].onmouseover = function () {
            oA[tempA].className = "";
            oA[tempA].children[0].style.display = "none";
            oP[tempA].style.display = "none";

            this.className = "current"
            this.children[0].style.display = "block";
            oP[this.index].style.display = "block";
            tempA = this.index;

        }
    }
    /*�����*/
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
    var returnTimer=null;
    returnTop.onclick=function(){
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

    var categoryMenu=document.getElementsByClassName('categoryMenu')[0];
    categoryMenu.onmouseover=function(){
        this.children[1].style.display="block";
    }
    categoryMenu.onmouseout=function(){
        this.children[1].style.display="none";
    }

    var byPhone=document.getElementsByClassName('byPhone')[0];
    var des=byPhone.getElementsByClassName('des')[0];
    byPhone.onmouseover=function(){

        des.style.boxShadow='0 1px 1px 2px #ccc';
        move(des, {'height':120,'top':0});
    }
    byPhone.onmouseout=function(){
        des.style.boxShadow='none';
        move(des, {'height':0,'top':28});
    }


    /*var pro=['北京','安徽省','福建省','甘肃省','广东省','广西省','贵州省','海南省','河北省',
        '河南省','黑龙江省','湖北省','湖南省','吉林省','江苏省','江西省','辽宁省',
        '内蒙古省','宁夏','青海省','山东省','山西省','陕西省','上海','四川省','天津',
        '西藏','新疆','云南省','浙江省','重庆'];
    var cty=[
        ['北京市'],
        ['广州市','深圳市','潮州市','东莞市','佛山市','河源市','惠州市','江门市','揭阳市',
            '茂名市','梅州市','清远市','汕头市','汕尾市','韶关市','阳江市','云浮市','湛江市',
            '肇庆市','中山市','珠海市','兴宁市'],
        ['福州市','龙岩市','南平市','宁德市','莆田市','泉州市','三明市','厦门市','漳州市'],
        ['甘肃']
    ]
    var province=document.getElementsByClassName('province')[0];
    var str="";
    for(var i=0;i<pro.length;i++){
        str+='<li><a>'+pro[i]+'</a></li>';
    }
    province.innerHTML=str;*/

    //数量
    var buyNum=document.getElementsByClassName('buyNum')[0];
    var chooseTxt=buyNum.getElementsByTagName('input')[0];
    var prev=buyNum.getElementsByClassName('prev')[0];
    var next=buyNum.getElementsByClassName('next')[0];
    prev.onclick=function(){
        if(chooseTxt.value==0){
            chooseTxt.value=0;
        }else{
            chooseTxt.value-=1;
        }
    }
    next.onclick=function(){
        chooseTxt.value=parseInt(chooseTxt.value)+1;
    }

    //图片展示
    var showList=document.getElementsByClassName('showList')[0];
    var showItems=document.getElementsByClassName('showItems')[0];
    var showItemsLi=showItems.getElementsByTagName('li');
    var showPrev=showList.getElementsByClassName('prev')[0];
    var showNext=showList.getElementsByClassName('next')[0];
    var showPic=document.getElementsByClassName('showPic')[0];
    var showImg=showPic.getElementsByTagName('img')[0];

    var num=0;
    showItems.innerHTML+=showItems.innerHTML;
    showItems.style.width=72*showItemsLi.length+'px';

    showPrev.onclick=function(){
        num--;
        if(num<0){
            showItems.style.left=-76*showItemsLi.length/2+"px";
            num=showItemsLi.length/2-1;
            move(showItems,{'left':-76*num});
        }else{
            move(showItems,{'left':-76*num});
        }
    }
    showNext.onclick=function(){
        num++;
        if(num==showItemsLi.length/2) {
            showItems.style.left="0px";
            num=1;
            move(showItems, {'left': -76 * num});
        }else{
            move(showItems, {'left': -76 * num});
        }
    }
    for(var i=0;i<showItemsLi.length;i++){
        showItemsLi[i].index=i;
        showItemsLi[i].onmouseover=function(){
            for(var i=0;i<showItemsLi.length;i++){
                showItemsLi[i].className="";
            }
            this.className="active";
            showItemsLi[this.index+showItemsLi.length/2].className="active";
            showImg.src="images/showBig"+(this.index%(showItemsLi.length/2)+1)+".jpg"
        }
    }

    //放大镜
    //var showPic=document.getElementsByClassName('showPic')[0];
    var small=showPic.getElementsByTagName('img')[0];
    var mask=document.getElementsByClassName('mask')[0];

    var big=document.getElementsByClassName('big')[0];
    var bigImg=document.getElementsByTagName('img')[0];

    var w=mask.offsetWidth;
    var h=mask.offsetHeight;

    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    showPic.onmouseover=function(ev){
        var e=ev||window.event;
        var x= e.clientX;
        var y= e.clientY;

        showPic.onmousemove=function(){
            mask.style.left=x-showPic.offsetLeft-w/2+'px';
            mask.style.top=y-showPic.offsetTop-h/2+scrolltop+'px';
        }
    }
}


var province=document.getElementsByClassName('province')[0];
ajax('GET','city.min.js','',function(data){
    var jsonText=JSON.parse(data);
    console.log(jsonText);
    var str="";
    for(var i=0;i<pro.length;i++){
        str+='<li><a>'+pro[i]+'</a></li>';
    }
    province.innerHTML=str;
})

