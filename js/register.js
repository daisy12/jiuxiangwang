window.onload=function() {
    var help = document.getElementsByClassName('help')[0];
    var title = help.getElementsByClassName('title')[0];
    var des = help.getElementsByClassName('des')[0];
    title.onmouseover = function () {
        this.parentNode.style.border = "1px solid #ccc";
        this.parentNode.children[1].style.display = "block";
    }
    title.onmouseout = function () {
        this.parentNode.style.border = "1px solid #fff";
        this.parentNode.children[1].style.display = "none";
    }
    des.onmouseover = function () {
        this.parentNode.style.border = "1px solid #ccc";
        this.style.display = "block";
    }
    des.onmouseout = function () {
        this.parentNode.style.border = "1px solid #fff";
        this.style.display = "none";
    }


    var register_btn=document.getElementsByClassName('register_btn')[0];
    var register_a=register_btn.getElementsByTagName('a');
    var changeStatus=document.getElementsByClassName('changeStatus')[0];
    var statusItems=changeStatus.getElementsByClassName('item');
    for(var i=0;i<register_a.length;i++){
        register_a[i].index=i;
        register_a[i].onclick=function(){
            for(var i=0;i<register_a.length;i++) {
                register_a[i].className="";
                statusItems[i].style.display="none";
            }
            this.className="active";
            statusItems[this.index].style.display="block";
        }
    }



    var province=document.getElementsByClassName('province')[0];
    var city=document.getElementsByClassName('city')[0];
    var district=document.getElementsByClassName('district')[0];



    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xhr.open('GET', 'js/city.js', true);
    xhr.send();
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {

            console.log(JSON.parse(xhr.responseText));
            var data = JSON.parse(xhr.responseText);//json
            var str="";
            for(var i=0;i<data.citylist.length;i++){
                str+="<option value='"+i+"'>"+data.citylist[i].p+"</option>";
            }
            province.innerHTML+=str;
            province.onchange=function(){
                var that=this.value;
                district.innerHTML="<option>"+decodeURI('请选择')+"</option>";
                city.innerHTML="<option>"+decodeURI('请选择')+"</option>";
                for(var j=0;j<data.citylist[this.value].c.length;j++){
                    city.innerHTML+="<option value='"+j+"'>"+data.citylist[this.value].c[j].n+"</option>";
                }

                var that = this.value;
                city.onchange=function(){
                    if(data.citylist[that].c[this.value].a) {
                        for (var x = 0; x < data.citylist[that].c[this.value].a.length; x++) {
                            district.innerHTML += "<option>" + data.citylist[that].c[this.value].a[x].s + "</option>";
                        }
                    }

                }
            }

        }
    }

    var  input_items=document.getElementsByClassName('input_item');
    for(var i=0;i<input_items.length;i++){
        input_items[i].onfocus=function(){
            if(this.parentNode.getElementsByClassName('msg')[0]) {
                this.parentNode.getElementsByClassName('msg')[0].style.display = "block";
            }
            this.parentNode.getElementsByClassName('validate')[0].style.display = "none";
            this.style.border="1px solid #dcdcdc";
            if(this.parentNode.getElementsByClassName('judgeDel')[0]) {
                this.parentNode.getElementsByClassName('judgeDel')[0].style.display = "none";
                this.parentNode.getElementsByClassName('judge')[0].style.display = "block";
            }


        }
        input_items[i].onblur=function(){

            if(this.value=='') {
                if(this.parentNode.getElementsByClassName('msg')[0]) {
                    this.parentNode.getElementsByClassName('msg')[0].style.display = "none";
                }
                this.parentNode.getElementsByClassName('validate')[0].style.display = "block";
                this.style.border="1px solid #d63f3f";
                if(this.parentNode.getElementsByClassName('judgeDel')[0]) {
                    this.parentNode.getElementsByClassName('judgeDel')[0].style.display = "block";
                    this.parentNode.getElementsByClassName('judge')[0].style.display = "none";
                }
            }else{
                if(this.parentNode.getElementsByClassName('msg')[0]) {
                    this.parentNode.getElementsByClassName('msg')[0].style.display = "none";
                }
                this.parentNode.getElementsByClassName('validate')[0].style.display = "none";
                this.style.border="1px solid #dcdcdc";
                if(this.parentNode.getElementsByClassName('judgeDel')[0]) {
                    this.parentNode.getElementsByClassName('judgeDel')[0].style.display = "none";
                    this.parentNode.getElementsByClassName('judge')[0].style.display = "none";
                }
            }
        }
    }

    var register=document.getElementsByClassName('submit')[0];
    var reg_Btn=register.getElementsByTagName('a')[0];

    reg_Btn.onclick=function(){
        var telValue=document.getElementsByClassName('tel_item')[0].value;
        var pass_itemValue=document.getElementsByClassName('pass_item')[0].value;

        alert(telValue+' '+pass_itemValue);
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        } else {
            var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        var data="tel="+telValue+"&password="+pass_itemValue;
        xhr.open('POST','php/user.php',true);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(data);

        xhr.onreadystatechange=function(){
            if (xhr.readyState === 4 && xhr.status === 200){

                console.log(xhr.responseText);

                var data=JSON.parse(xhr.responseText)

                if(data.success){
                    alert('注册成功');
                }else{

                }
            }else{
                console.log('error');
            }
        }
    }

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

}

