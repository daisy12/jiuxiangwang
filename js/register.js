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


    //�����䶯
    var province=document.getElementsByClassName('province')[0];
    var city=document.getElementsByClassName('city')[0];
    var district=document.getElementsByClassName('district')[0];


    var pro=['请选择','贵州','广东','河北','北京'];
    var cty=[[
        '请选择'
    ],[
        '请选择', '贵阳', '安顺', '毕节', '六盘水', '铜仁'
    ],[
        '请选择', "广州市","深圳市","中山市"
    ],[
        '请选择',"石家庄市","保定市","承德市"
    ],[
        '请选择',"朝阳区","海淀区"
    ]];
    var dis=[
        ['请选择'],
        [['请选择'],['请选择',"南明区","云岩区"],['请选择','西秀区','关岭'],['请选择',"毕节市","大方县"],['请选择','钟山区','六枝特区'],['请选择','铜仁市','江口县']],
        [['请选择'],['请选择',"天河区","海珠区"],['请选择',"罗湖区","高新区"],['请选择',"石岐区","小榄镇"]],
        [['请选择'],['请选择',"宜安镇","元氏县","院头镇"],['请选择',"白羊淀","狼牙山"],['请选择',"隆化县","围场县"]],
        [['请选择'],['请选择',"双塔区","凌源市"],['请选择',"温泉镇","苏家坨镇","西北旺镇","上庄镇"]],
    ];
    var str="";
    for(var i=0;i<pro.length;i++){ //��������޸�ά��
        str+="<option value='"+i+"'>"+pro[i]+"</option>";
    }
    province.innerHTML=str;

    province.onchange=function(){
        city.innerHTML="";
        district.innerHTML="<option>请选择</option>";
        var that=this.value;
        for(var j=0;j<cty[that].length;j++){
            city.innerHTML+="<option value='"+j+"'>"+cty[that][j]+"</option>";
        }
        console.log(city.innerHTML)
        city.onchange=function(){
            district.innerHTML="";
            console.log(dis[that][this.value])
            for(var k=0;k<dis[that][this.value].length;k++) {
                district.innerHTML+= "<option>" + dis[that][this.value][k]+ "</option>";
            }
        }
    }
}