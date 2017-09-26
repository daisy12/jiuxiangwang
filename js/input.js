window.onload=function(){
    var help=document.getElementsByClassName('help')[0];
    var title=help.getElementsByClassName('title')[0];
    var des=help.getElementsByClassName('des')[0];
    title.onmouseover=function(){
        this.parentNode.style.border="1px solid #ccc";
        this.parentNode.children[1].style.display="block";
    }
    title.onmouseout=function(){
        this.parentNode.style.border="1px solid #fff";
        this.parentNode.children[1].style.display="none";
    }
    des.onmouseover=function(){
        this.parentNode.style.border="1px solid #ccc";
        this.style.display="block";
    }
    des.onmouseout=function(){
        this.parentNode.style.border="1px solid #fff";
        this.style.display="none";
    }

    var telReg=/^1[0-9]{10}/;
    var login_type=document.getElementsByClassName('login_type')[0];
    var  input_items=login_type.getElementsByClassName('input_item');
    for(var i=0;i<input_items.length;i++){
        input_items[i].onfocus=function(){
            this.parentNode.getElementsByClassName('placeholder')[0].style.display="none";

            this.parentNode.getElementsByClassName('validate')[0].style.display = "none";
            this.className="input_item";
            if(this.parentNode.getElementsByClassName('judgeDel')[0]) {
                this.parentNode.getElementsByClassName('judgeDel')[0].style.display = "none";
                this.parentNode.getElementsByClassName('judge')[0].style.display = "block";
            }
        }

        input_items[i].onblur=function(){
            this.parentNode.getElementsByClassName('placeholder')[0].style.display="block";
            if(this.value=='') {
                this.parentNode.getElementsByClassName('validate')[0].style.display = "block";
                this.className="input_item active";
                if(this.parentNode.getElementsByClassName('judgeDel')[0]) {
                    this.parentNode.getElementsByClassName('judgeDel')[0].style.display = "block";
                    this.parentNode.getElementsByClassName('judge')[0].style.display = "none";
                }
                if(this.parentNode.getAttribute('class').substring(6)=='test'){
                    this.parentNode.getElementsByClassName('validate')[0].innerHTML='请输入验证码';

                }
                if(this.parentNode.getAttribute('class').substring(6)=='tel') {
                    this.parentNode.getElementsByClassName('validate')[0].innerHTML='请输入用户名/邮箱/手机号';
                }
            }else{
                this.parentNode.getElementsByClassName('placeholder')[0].style.display="none";
                this.className="input_item";

                if (this.parentNode.getElementsByClassName('judgeDel')[0]) {
                    this.parentNode.getElementsByClassName('judgeDel')[0].style.display = "none";
                    this.parentNode.getElementsByClassName('judge')[0].style.display = "none";
                }
                if(this.parentNode.getAttribute('class').substring(6)=='test'){
                    var a=this.value.toLowerCase();
                    var b=this.parentNode.getElementsByClassName('indentify')[0].innerText.toLowerCase();
                    if(a!==b){
                        this.parentNode.getElementsByClassName('validate')[0].style.display = "block";
                        this.parentNode.getElementsByClassName('validate')[0].innerText="验证码输入错误";
                    }
                }
                if(this.parentNode.getAttribute('class').substring(6)=='tel'){
                    if(!/^1[0-9]{10}/.test(this.value)){
                        this.parentNode.getElementsByClassName('validate')[0].style.display = "block";
                        this.parentNode.getElementsByClassName('validate')[0].innerText="格式错误，请重新输入";
                        this.parentNode.getElementsByClassName('judgeDel')[0].style.display = "block";
                        this.parentNode.getElementsByClassName('judge')[0].style.display = "none";
                    }
                }
            }
        }
    }


    //随机生成验证码
    var indentify=document.getElementsByClassName('indentify');
    console.log(indentify)
    var str= 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var len=str.length;


    for(var i=0;i<indentify.length;i++){
        indentify[i].index=i;
        indentify[i].onclick=function(){
            var test="";
            for(var i=0;i<4;i++){
                test+=str.charAt(Math.floor(Math.random()*len));
            }
            this.innerHTML=test;
        }
    }

    for(var i=0;i<indentify.length;i++) {
        var testStart="";
        for(var j=0;j<len;j++){
            testStart+=str.charAt(Math.floor(Math.random()*len));
            if(testStart.length==4){
                break;
            }
        }
        indentify[i].innerText=testStart;

    }

    //手机验证码
    var loginMobile=document.getElementsByClassName('loginMobile')[0];
    var getNum=loginMobile.getElementsByClassName('getNum')[0];
    var testTimer=null;
    getNum.onclick=function(){
        var that=this;
        clearInterval(testTimer);
        this.setAttribute("disabled",false);
        var dateLine=59;
        getNum.innerHTML='重新发送 59';
        testTimer=setInterval(function(){
            dateLine--;
            if(dateLine==0){
                clearInterval(testTimer);
                that.setAttribute('disabled',true);

                getNum.innerHTML = "重新发送";
                var shadeCode=document.getElementsByClassName('shadeCode')[0];
                shadeCode.style.display="block";
                var test="";
                for(var i=0;i<4;i++){
                    test+=str.charAt(Math.floor(Math.random()*len));
                }
                shadeCode.getElementsByClassName('code')[0].innerText=test;
            }else {
                getNum.innerHTML = "重新发送 "+dateLine;
            }
        },1000)
    }

    var shadeCode=document.getElementsByClassName('shadeCode')[0];
    var close=shadeCode.getElementsByClassName('close')[0];
    var shadeBtn=shadeCode.getElementsByTagName('button')[0];
    var num_item=document.getElementsByClassName('num_item')[0];
    close.onclick=function(){
        shadeCode.style.display="none";
    }
    shadeBtn.onclick=function(){
        shadeCode.style.display="none";
        num_item.value=shadeCode.getElementsByClassName('code')[0].innerText;
    }



    //登录
    var submit=document.getElementsByClassName('submit')[0];
    var sub_btn=submit.getElementsByTagName('button')[0];
    var tel_item=document.getElementsByClassName('tel_item')[0];
    var pass_item=document.getElementsByClassName('pass_item')[0];

    var test=document.getElementsByClassName('test')[0];
    var testValidate=test.getElementsByClassName('validate')[0];

    console.log(sub_btn)
    sub_btn.onclick=function(){

        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        } else {
            var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }


        xhr.open('GET','php/user.php?tel='+tel_item.value+'&password='+pass_item.value,true);
        xhr.send();
        xhr.onreadystatechange=function(){
            if (xhr.readyState === 4 && xhr.status === 200){

                console.log(JSON.parse(xhr.responseText))
                console.log(xhr.responseText)
                var data=JSON.parse(xhr.responseText)

                if(data.success){
                        localStorage.setItem('name',tel_item.value);
                        document.location.href="index.html?#"+data.name;

                }else{
                    testValidate.style.display="block";
                    testValidate.innerHTML=data.msg;
                }
            }else{
                console.log('error');
            }
        }
    }

    if(localStorage.getItem('name')){
        document.getElementsByClassName('placeholder')[0].style.display="none";
        document.getElementsByClassName('tel_item')[0].value=localStorage.getItem('name');
    }


    var login_con=document.getElementsByClassName('login-con')[0];
    var parner=document.getElementsByClassName('parner')[0];
    var parner_lis=parner.getElementsByTagName('li');
    for(var i=0;i<parner_lis.length;i++){
        parner_lis[i].index=i;
        parner_lis[i].children[0].style.backgroundPosition=-i*51+"px -34px";
        parner_lis[i].onmouseover=function(){
            this.children[0].style.backgroundPosition=-this.index*51+"px -85px";
        }
        parner_lis[i].onmouseout=function(){
            this.children[0].style.backgroundPosition=-this.index*51+"px -34px";
        }
    }

    var parner1=document.getElementsByClassName('parner')[1];
    var parner_lis1=parner1.getElementsByTagName('li');
    for(var i=0;i<parner_lis1.length;i++){
        parner_lis1[i].index=i;
        parner_lis1[i].children[0].style.backgroundPosition=-i*51+"px -34px";
        parner_lis1[i].onmouseover=function(){
            this.children[0].style.backgroundPosition=-this.index*51+"px -85px";
        }
        parner_lis1[i].onmouseout=function(){
            this.children[0].style.backgroundPosition=-this.index*51+"px -34px";
        }
    }


    var scanImg=document.getElementsByClassName('scanImg')[0];
    var phoneImg=document.getElementsByClassName('phoneImg')[0];
    var scan_box=document.getElementsByClassName('scan_box')[0];
    var num=0;
    scanImg.onmouseover=function(){
        num++;
        if(num%2==0) {
            move(this, {'left': -20});
            setTimeout(function () {
                move(phoneImg, {'opacity': 100});
            }, 400);
        }else{
            var that=this;
            move(phoneImg, {'opacity': 0})
            setTimeout(function() {
                move(that,{'left':60});
            },400);
        }

    }

    var changeBy=document.getElementsByClassName('changeBy')[0];
    var login_cons=document.getElementsByClassName('login-con');
    var clickNum=0;
    changeBy.onclick=function(){
        clickNum++;
        if(clickNum%2==1) {
            this.style.backgroundPosition = "-80px -230px";
            login_cons[1].style.display="block";
            login_cons[0].style.display="none";
        }else{
            this.style.backgroundPosition = "0 -230px";
            login_cons[0].style.display="block";
            login_cons[1].style.display="none";
        }
    }

    var login_top=document.getElementsByClassName('login_top')[0];
    var a_type=login_top.getElementsByTagName('a');
    var type_item=document.getElementsByClassName('type_item');
    for(var i=0;i<a_type.length;i++){
        a_type[i].index=i;
        a_type[i].onclick=function(){
            for(var i=0;i<a_type.length;i++){
                type_item[i].style.display="none";
                a_type[i].className="";
            }
            type_item[this.index].style.display="block";
            a_type[this.index].className="active";
        }
        a_type[i].onmouseover=function(){
            if(this.className==""){
                this.className="current";
            }else{
                this.style.textDecoration="underline";
            }
        }
        a_type[i].onmouseout=function(){
            if(this.className==""){
                this.className="";
            }else{
                this.style.textDecoration="none";
            }
        }
    }

    var arr=[];
    var flag=0;
    for(var i=20;i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);
    var i=-1;
    var input_box=document.getElementsByClassName('input-box')[0];
    input_box.onmouseover=function() {
        if(flag==0) {
            shakemove(input_box, "right", 10, function () {
                shakemove(input_box, "top", 20, function () {
                });
            })
        }
        flag++;
    }

}