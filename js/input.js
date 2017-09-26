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
            }else{
                this.parentNode.getElementsByClassName('placeholder')[0].style.display="none";

                this.className="input_item";
                if(this.parentNode.getElementsByClassName('judgeDel')[0]) {
                    this.parentNode.getElementsByClassName('judgeDel')[0].style.display = "none";
                    this.parentNode.getElementsByClassName('judge')[0].style.display = "none";
                }
            }
        }
    }

    /*var submit=document.getElementsByClassName('submit')[0];
    var sub_btn=submit.getElementsByTagName('button')[0];

    var telReg=/^1[0-9]{10}/;
    var emailReg=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
    var userReg=/^[\u4e00-\u9fa5]{2,4}$/;
    sub_btn.onclick=function(){

        alert(1)
        var telVal=document.getElementsByClassName('tel_item')[0].value;
        var passVal=document.getElementsByClassName('pass_item')[0].value;
        var testVal=document.getElementsByClassName('test_item')[0].value;
        alert(telVal)

        if(telReg.test(telVal)&&emailReg.test(telVal)&&userReg.test(telVal)){
            this.parentNode.getElementsByClassName('validate')[0].innerText="输入错误，请重新输入";
        }
    }*/

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
    arr.push(0);//最后添加一个0
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