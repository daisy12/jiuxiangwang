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
    var big=showPic.getElementsByClassName('big')[0];
    var bigImg=big.getElementsByTagName('img')[0];

    var small=showPic.getElementsByClassName('small')[0];
    var mask=small.getElementsByClassName('mask')[0];



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
    /*alert(showItemsLi.length) 12*/
    for(var i=0;i<showItemsLi.length;i++){
        showItemsLi[i].index=i;
        showItemsLi[i].onmouseover=function(){
            for(var i=0;i<showItemsLi.length;i++){
                showItemsLi[i].className="";
            }
            this.className="active";
            showItemsLi[this.index+showItemsLi.length/2].className="active";
           /* alert(this.index)
            alert(this.index%(showItemsLi.length/2)+1)*/
            showImg.src="images/showBig"+(this.index%(showItemsLi.length/2)+1)+".jpg";
            bigImg.src="images/showBig"+(this.index%(showItemsLi.length/2)+1)+".jpg";
        }
    }

    //放大镜:  遮罩层高度与宽度  滚动高度
    small.onmouseover=function(ev){
        var e=ev||window.event;
        mask.style.display="block";
        big.style.display="block";

        var w=mask.offsetWidth;
        var h=mask.offsetHeight;
        var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;

        mask.style.left= e.clientX-showPic.offsetLeft-w/2+'px';
        mask.style.top= e.clientY-(showPic.offsetTop-scrolltop)-h/2+'px';

        mask.onmousemove=function(ev){
            var e=ev||window.event;
            var disX= e.clientX-showPic.offsetLeft-w/2;
            var disY= e.clientY-showPic.offsetTop+scrolltop-h/2;
            console.log(e.clientY);

            if(disX<0){
                disX=0;
            }else if(disX>small.offsetWidth-mask.offsetWidth){
                disX=small.offsetWidth-mask.offsetWidth;
            }
            if(disY<0){
                disY=0;
            }else if(disY>small.offsetHeight-mask.offsetHeight){
                disY=small.offsetHeight-mask.offsetHeight;
            }

            mask.style.left=disX+10+'px';
            mask.style.top=disY+10+'px';

            var x=mask.offsetLeft/(small.offsetWidth-mask.offsetWidth);/*距离div左边/div大小*/
            var y=mask.offsetTop/(small.offsetHeight-mask.offsetHeight);

            bigImg.style.left = -x*(bigImg.offsetWidth-big.offsetWidth) + "px";
            bigImg.style.top = -y*(bigImg.offsetHeight-big.offsetHeight) + "px";
        }
        small.onmouseout=function(){
            mask.style.display="none";
            big.style.display="none";
        }
    }




    //省市区
    var city=document.getElementsByClassName('city')[0];
    var final=city.getElementsByClassName('final')[0];
    var cityDes=document.getElementsByClassName('cityDes')[0];

    var selectTit=document.getElementsByClassName('selectTit')[0];
    var titLis=selectTit.getElementsByTagName('li');
    var province=document.getElementsByClassName('province')[0];
    var town=document.getElementsByClassName('town')[0];
    var district=document.getElementsByClassName('district')[0];

    var selectBody = document.getElementsByClassName('selectBody')[0];
    var selectBody_ul = selectBody.getElementsByTagName('ul');

    var cityClick=0;
    final.onclick=function() {

        if(cityDes.style.display =="block") {
            cityDes.style.display = "none";
        }
        else{
            cityDes.style.display = "block";
        }


        for (var k = 0; k < titLis.length; k++) {
            titLis[k].className = "";
            selectBody_ul[k].style.display = "none";
        }
        titLis[0].className = "active";
        selectBody_ul[0].style.display="block";

        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        } else {
            var xhr = new ActiveXObject('Microsoft.XMLHTTP')
        }
        xhr.open('GET', 'js/city.js', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            //初始化省加载
            if (xhr.readyState === 4 && xhr.status === 200) {

                console.log(JSON.parse(xhr.responseText));
                var data = JSON.parse(xhr.responseText);
                var html = "";
                for (var i = 0; i < data.citylist.length; i++) {
                    html += '<li><a>' + data.citylist[i].p + '</a></li>';
                }
                province.innerHTML = html;
            }

            //市
            var pro_lis = province.getElementsByTagName('li');
            for (var i = 0; i < pro_lis.length; i++) {
                pro_lis[i].index = i;
                pro_lis[i].onclick = function () {
                    for (var k = 0; k < titLis.length; k++) {
                        titLis[k].className = "";
                        selectBody_ul[k].style.display = "none";
                    }
                    titLis[0].innerHTML = this.children[0].innerHTML;
                    titLis[1].className = "active";

                    province.style.display = "none";
                    selectBody_ul[1].style.display="block";

                    var htmlT = "";
                    if (data.citylist[this.index].c) {
                        for (var j = 0; j < data.citylist[this.index].c.length; j++) {
                            htmlT += '<li><a>' + data.citylist[this.index].c[j].n + '</a></li>';
                        }
                        town.innerHTML = htmlT;
                    }
                    var that = this.index;

                    //区
                    var town_lis = town.getElementsByTagName('li');
                    for (var i = 0; i < town_lis.length; i++) {
                        town_lis[i].index = i;
                        town_lis[i].onclick = function () {

                            for (var k = 0; k < titLis.length; k++) {
                                titLis[k].className = "";
                                selectBody_ul[k].style.display = "none";
                            }
                            titLis[1].innerHTML = this.children[0].innerHTML;
                            titLis[2].className = "active";
                            selectBody_ul[2].style.display="block";

                            var htmlD = "";
                            if (data.citylist[that].c[this.index].a) {
                                titLis[2].className = "active";
                                titLis[2].innerHTML = data.citylist[that].c[this.index].a[0].s;
                                for (var x = 0; x < data.citylist[that].c[this.index].a.length; x++) {
                                    htmlD += '<li><a>' + data.citylist[that].c[this.index].a[x].s + '</a></li>';
                                }
                            } else {
                                titLis[2].innerHTML = "";
                                titLis[2].className = "";
                                cityDes.style.display = "none";
                                var bs = city.getElementsByTagName('b');
                                for (var y = 0; y < bs.length; y++) {
                                    bs[y].innerText = titLis[y].innerText;
                                }
                            }
                            district.innerHTML = htmlD;


                            var dis_lis = district.getElementsByTagName('li');

                            for (var n = 0; n < dis_lis.length; n++) {
                                dis_lis[n].onclick = function () {
                                    cityDes.style.display = "none";

                                    titLis[2].innerHTML = this.children[0].innerHTML;
                                    var bs = city.getElementsByTagName('b');
                                    for (var y = 0; y < bs.length; y++) {
                                        bs[y].innerText = titLis[y].innerText;
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
        for (var k = 0; k < titLis.length; k++) {
            titLis[k].index = k;
            titLis[k].onclick = function () {
                for (var k = 0; k < titLis.length; k++) {
                    titLis[k].className = "";
                    selectBody_ul[k].style.display = "none";
                }
                titLis[this.index].className = "active";
                selectBody_ul[this.index].style.display="block";
            }
        }

    }

    //排行榜
    var rank_title=document.getElementsByClassName('rank_title')[0];
    var rank_title_lis=rank_title.getElementsByTagName('li');
    var rank_con=document.getElementsByClassName('rank_con')[0];
    var tempAct=0;

    if(window.XMLHttpRequest){
        var xhr=new XMLHttpRequest();
    }else{
        var xhr=new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.open('get','js/rank.json',true); //这里需要注意：json文件里面都是双引号的，且不能在里面添加注释，非常严谨的数据格式
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&xhr.status===200){
            var obj=JSON.parse(xhr.responseText);

            var htmlStart="";
            for(var k=0;k<obj['price'].length;k++){
                htmlStart+='<li>'+
                    '<div class="pic fl">'+
                    '<a href=""><img src="'+obj['price'][k].src+'"></a>'+
                    '</div>'+
                    '<div class="fl msg">'+
                    '<p>'+obj['price'][k].info+'</p>'+
                    '</div>'+
                    '<span class="price">'+obj['price'][k].price+'</span>'+
                    '<i class="currentRink">'+(k+1)+'</i>'+
                    '</li>';
            }
            rank_con.innerHTML=htmlStart;


            for(var i=0;i<rank_title_lis.length;i++){
                 rank_title_lis[i].index=i;
                 rank_title_lis[i].onclick=function(){
                     rank_title_lis[tempAct].className="";
                     this.className="active";
                     tempAct=this.index;

                     var html="";
                     var n=this.getAttribute('data');
                     //数据渲染

                     for(var k=0;k<obj[n].length;k++){
                         html+='<li>'+
                             '<div class="pic fl">'+
                             '<a href=""><img src="'+obj[n][k].src+'"></a>'+
                             '</div>'+
                             '<div class="fl msg">'+
                             '<p>'+obj[n][k].info+'</p>'+
                             '</div>'+
                             '<span class="price">'+obj[n][k].price+'</span>'+
                             '<i class="currentRink">'+(k+1)+'</i>'+
                             '</li>';
                     }
                     rank_con.innerHTML=html;

                 }
             }
        }
    }

    //右边详情
    var msgR_title=document.getElementsByClassName('msgR_title')[0];
    var msgR_title_li=msgR_title.getElementsByTagName('li');
    var tab_item=document.getElementsByClassName('tab_item');

    for(var i=0;i<msgR_title_li.length;i++){
        msgR_title_li[i].index=i;
        msgR_title_li[i].onclick=function(){
            for(var i=0;i<msgR_title_li.length;i++){
                msgR_title_li[i].className="";
                tab_item[i].style.display="block";
            }
            this.className="active";

            var num=this.index;
            for(var j=0;j<num;j++){
                tab_item[j].style.display="none";
            }
        }
    }


    //吸顶
    var productMsg_r=document.getElementsByClassName('productMsg_r fr')[0];
    var msgR_title=productMsg_r.getElementsByClassName('msgR_title')[0];

    var detailCode=msgR_title.getElementsByClassName('detailCode')[0];
    var addCar=msgR_title.getElementsByClassName('addCar')[0];

    var footer=document.getElementsByClassName('footer')[0];

    var product_offsetTop=productMsg_r.offsetTop;
    console.log(product_offsetTop);

    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    document.onscroll=function() {
        scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        //console.log(scrollTop);
        if (scrollTop>product_offsetTop-100&&scrollTop<footer.offsetTop) {
            detailCode.style.display="none";
            addCar.style.display="block";
            msgR_title.className="msgR_title current";

        }else{
            detailCode.style.display="block";
            addCar.style.display="none";
            msgR_title.className="msgR_title";
        }
    }


    var consultTit=document.getElementsByClassName('consultTit')[0];
    var consultTit_li=consultTit.getElementsByTagName('li');
    for(var i=0;i<consultTit_li.length;i++){
        consultTit_li[i].index=i;
        consultTit_li[i].onclick=function(){
            for(var i=0;i<consultTit_li.length;i++) {
                consultTit_li[i].className="";
            }
            this.className="active";
            if(this.index==0){
                decorate(1);
                refresh();
            }else {
                decorateItem(1, this.index - 1);
                refreshItem(this.index - 1);
            }
        }
    }


    //提交问题
    var publishBox=document.getElementsByClassName('publishBox')[0];
    var pubTexa=publishBox.getElementsByTagName('textarea')[0];
    var pubBtn=publishBox.getElementsByTagName('button')[0];
    var radioBtn= publishBox.getElementsByTagName('input');
    var problem=document.getElementsByClassName('problem')[0];

    var str=['商品提问','促销活动','库存及物流提问','售后提问'];
    var pages = 0;
    var crumbTemp=1;
    var crumbTemp1=1;
    refresh();
    function refresh() {
        var consultCrumb = document.getElementsByClassName('consultCrumb')[0];
        var crumb = consultCrumb.getElementsByClassName('crumb')[0];
        var listnum = 0;
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.substring(0, 3) == 'pro') {
                listnum++;
            }
        }
        page = Math.ceil(listnum / 4);
        //alert(page)
        crumb.innerHTML = '<a class="prev">上一页</a>';
        var k=0;
        for (k = 1; k<=page; k++) {
            if (k==4) {
                crumb.innerHTML += '<span>...</span>'+'<a>' +page+ '</a>';
                break;
            }else if(k==1) {
                crumb.innerHTML += '<a class="current">' + k + '</a>';
            }else{
                crumb.innerHTML += '<a>' + k + '</a>';
            }
        }
        crumb.innerHTML += '<a class="next">下一页</a>';


        var crumbA=crumb.getElementsByTagName('a');

        for(var i=1;i<crumbA.length-1;i++){

            crumbA[i].onclick=function(){
                //alert(1)
                for(var i=1;i<crumbA.length-1;i++){
                    crumbA[i].className="";
                }
                this.className="current";
                decorate(parseInt(this.innerText));
                crumbTemp=parseInt(this.innerText)+1;
            }
        }

        crumbA[0].onclick=function(){ //prev
            crumbTemp=crumbTemp-1;
            console.log(crumbTemp)
            if(crumbTemp<1){
                crumbTemp=page;
            }
            decorate(crumbTemp);
        }
        crumbA[crumbA.length-1].onclick=function(){ //next
            crumbTemp=crumbTemp+1;
            console.log(crumbTemp)
            if(crumbTemp>page){
                crumbTemp=1;
            }
            decorate(crumbTemp);
        }
    }


    function refreshItem(value) {
        var consultCrumb = document.getElementsByClassName('consultCrumb')[0];
        var crumb = consultCrumb.getElementsByClassName('crumb')[0];
        var listnum = 0;
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var objJson=JSON.parse(localStorage.getItem(key));
            if (key.substring(0, 3) == 'pro'&&objJson.type==value) {
                listnum++;
            }
        }

        page = Math.ceil(listnum / 4);
      /*  alert(page) 页数*/

        //alert(page)
        crumb.innerHTML = '<a class="prev">上一页</a>';
        var k=0;
        for (k = 1; k<=page; k++) {
            if (k==4) {
                crumb.innerHTML += '<span>...</span>'+'<a>' +page+ '</a>';
                break;
            }else if(k==1) {
                crumb.innerHTML += '<a class="current">' + k + '</a>';
            }else{
                crumb.innerHTML += '<a>' + k + '</a>';
            }
        }
        crumb.innerHTML += '<a class="next">下一页</a>';


        var crumbA=crumb.getElementsByTagName('a');

        for(var i=1;i<crumbA.length-1;i++){

            crumbA[i].onclick=function(){
                //alert(1)
                for(var i=1;i<crumbA.length-1;i++){
                    crumbA[i].className="";
                }
                this.className="current";
                decorateItem(parseInt(this.innerText),value);
                crumbTemp1=parseInt(this.innerText)+1;
            }
        }
        crumbA[0].onclick=function(){ //prev
            crumbTemp1=crumbTemp1-1;
            console.log(crumbTemp1)
            if(crumbTemp1<1){
                crumbTemp1=page;
            }
            decorateItem(crumbTemp1,value);
        }
        crumbA[crumbA.length-1].onclick=function(){ //next
            crumbTemp1=crumbTemp1+1;
            console.log(crumbTemp1)
            if(crumbTemp1>page){
                crumbTemp1=1;
            }
            decorateItem(crumbTemp1,value);
        }
    }
    function decorateItem(target,value){
        var localhtml = "";
        var count=0;
        for(var i=localStorage.length-4*(target-1)-1;i>=0;i--){

            var key=localStorage.key(i);//localStorage.getItem(key)
            var objJson=JSON.parse(localStorage.getItem(key));
            if(key.substring(0,3)=='pro'&&objJson.type==value){
                console.log(objJson)
                if(count==4){
                    break;

                }
                localhtml='<li>'+
                    '<div class="user">'+
                    '<span>****</span>'+
                    '<p>'+objJson.user+'</p>'+
                    '</div>'+
                    '<div class="saler">'+
                    '<span>酒仙网客服回复：</span>'+
                    '<p>尊敬的酒仙会员，'+objJson.sale+'</p>'+
                    '</div>'+
                    '<time>'+objJson.time+'</time>'+
                    '</li>'+localhtml;
                //console.log(localhtml);
                count++;
            }
        }
        console.log(localhtml);
        problem.innerHTML=localhtml;

    }


    decorate(1);
    function decorate(target){
        var localhtml = "";
        var count=0;
        for(var i=localStorage.length-4*(target-1)-1;i>=0;i--){

            var key=localStorage.key(i);//localStorage.getItem(key)
            console.log(localStorage.getItem(key))
            if(key.substring(0,3)=='pro'){
                if(count==4){
                    break;

                }
                var objJson=JSON.parse(localStorage.getItem(key));
                localhtml='<li>'+
                    '<div class="user">'+
                    '<span>****</span>'+
                    '<p>'+objJson.user+'</p>'+
                    '</div>'+
                    '<div class="saler">'+
                    '<span>酒仙网客服回复：</span>'+
                    '<p>尊敬的酒仙会员，'+objJson.sale+'</p>'+
                    '</div>'+
                    '<time>'+objJson.time+'</time>'+
                    '</li>'+localhtml;
                //console.log(localhtml);
                count++;
            }
        }
        console.log(localhtml);
        problem.innerHTML=localhtml;

    }

    for(var i=0;i<radioBtn.length;i++) {
        radioBtn[i].onclick=function(){
            for(var i=0;i<radioBtn.length;i++){
                radioBtn[i].removeAttribute('checked');
            }
            this.setAttribute('checked','true');
        }
    }
    pubBtn.onclick=function(){
        if(pubTexa.value!=''){
            var textValue=pubTexa.value;
            problem=document.getElementsByClassName('problem')[0];
            var html="";
            var str="";
            for(var i=0;i<radioBtn.length;i++){
                console.log(radioBtn[i].value)
                if(radioBtn[i].getAttribute('checked')=='true'){
                    console.log(radioBtn[i].value)
                    var date=new Date();
                    str=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+
                        " "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                    html='<li>'+
                        '<div class="user">'+
                        '<span>****</span>'+
                        '<p>'+textValue+'</p>'+
                        '</div>'+
                        '<div class="saler">'+
                        '<span>酒仙网客服回复：</span>'+
                        '<p>尊敬的酒仙会员，请稍等</p>'+
                        '</div>'+
                        '<time>'+str+'</time>'+
                        '</li>';
                    problem.innerHTML+=html;

                    var salerValue="请稍等";
                    var objJson={
                        "time":str,
                        "user":textValue,
                        "type":radioBtn[i].value,
                        "sale":salerValue
                    }
                    //类型
                    var stringJson=JSON.stringify(objJson);
                    localStorage.setItem('pro'+str,stringJson);
                    refresh();
                }
            }
           /* console.log(html);*/

            //本地存储：

        }else{
            alert('发送失败，请输入发送内容！');
        }
        pubTexa.value="";

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

}
function fun(data){ //注意
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






