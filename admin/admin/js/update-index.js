window.onload=function(){
    //获取当前行的已有信息
    $.cookie.json = true;
    var data=$.cookie('update');
    var goods_id=data[0].goods_id;
    console.log(goods_id)
    //设置
    $('#index-act-id').val(data[0].active_id);
    $('#index-title').val(data[0].goods_title);
    $('#index-rate').val(data[0].goods_rate);
    $('#index-term').val(data[0].goods_term);
    $('#index-normal-price').val(data[0].goods_price_normal);
    $('#index-discount-price').val(data[0].goods_price_discount);
    $('#nums-user').val(data[0].num_user);
    $('.add-btn').click(function(){
        $.fn.serializeObject = function() {  
            var o = {};  
            var a = this.serializeArray();  
        $.each(a, function() {  
            if (o[this.name]) {  
                if (!o[this.name].push) {  
                    o[this.name] = [o[this.name]];  
            }  
            o[this.name].push(this.value || '');  
            } else {  
            o[this.name] = this.value || '';  
            }  
        });  
  return o;  
};
        var jsonobj=$('#add-form').serializeObject();
        var id=document.querySelector('#index-act-id').value;
        var title=document.querySelector('#index-title').value;
        var rate=document.querySelector('#index-rate').value;
        var term=document.querySelector('#index-term').value;
        var nums=document.querySelector('#index-nums').value;
        var normal=document.querySelector('#index-normal-price').value;
        var discount=document.querySelector('#index-discount-price').value;
        var user=document.querySelector('#nums-user').value;
        if(id==null||id==""){
            $('#error-id').html("商品id不能为空")
            $('#error-id').css("display","inline-block");
            return;
        }
        else{$('#error-id').css("display","none");}
        
        if(title==null||title==""){
             $('#error-title').css("display","inline-block");
             return;
        }
        else{$('#error-title').css("display","none")}
        
        //利率块
        if(rate==null||rate==""){
            $('#error-rate').text("商品利率不能为空")
            $('#error-rate').css("display","inline-block");
            return;
        }
        else{$('#error-rate').css("display","none")}
        if(rate<=0){
            $('#error-rate').text("商品利率必须大于0")
            $('#error-rate').css("display","inline-block");
            return;
        }
        else{$('#error-rate').css("display","none")}
        
        //存期块
        if(term==null||term==""){
            $('#error-term').text("商品存期不能为空")
            $('#error-term').css("display","inline-block");
            return;
        }
        else{$('#error-term').css("display","none");}
        if(term<=0||term%1!=0){
            $('#error-term').text("商品存期必须为正整数")
            $('#error-term').css("display","inline-block");
            return;
        }
        else{$('#error-term').css("display","none")}
        
        //商品数量块
        if(nums==null||nums==""){
            $('#error-nums').text("商品更改数量不能为空")
            $('#error-nums').css("display","inline-block");
            return;
        }
        else{ $('#error-nums').css("display","none");}
        if(nums%1!=0){
            $('#error-nums').text("商品更改数量必须为整数")
            $('#error-nums').css("display","inline-block");
            return;
        }
        else{ $('#error-nums').css("display","none");}
        
        //价格块
        if(normal==null||normal==""){
            $('#error-normal').text("商品原价不能为空")
            $('#error-normal').css("display","inline-block");
            return;
        }
        else{$('#error-normal').css("display","none");}
        if(normal<=0||normal%1!=0){
            $('#error-normal').text("商品原价必须为正整数")
            $('#error-normal').css("display","inline-block");
            return;
        }
        else{$('#error-normal').css("display","none")}
        
        
        if(discount==null||discount==""){
            $('#error-discount').text("商品秒杀价不能为空")
            $('#error-discount').css("display","inline-block");
            return;
        }
        else{$('#error-discount').css("display","none");}
        if(discount<=0||discount%1!=0){
            $('#error-discount').text("商品秒杀价必须为正整数")
            $('#error-discount').css("display","inline-block");
            return;
        }
        else{$('#error-discount').css("display","none")}
        
        
        if(user==null||user==""){
            $('#error-user').text("单个用户限购数量不能为空")
            $('#error-user').css("display","inline-block");
            return;
        }
        else{$('#error-user').css("display","none");}
        if(user<=0||user%1!=0){
            $('#error-user').text("单个用户限购数量必须为正整数")
            $('#error-user').css("display","inline-block");
            return;
        }
        else{$('#error-user').css("display","none")}
        
        // var info=[jsonobj]
        console.log(jsonobj)
        console.log(goods_id)
        $.get('../../api/admin/editinfo.php',{info:jsonobj,action:"edit",table:"sk_goods",id:goods_id},function(data){
                console.log(data)
                if(data!='000'){
                    $('.model').css('display','block');
                    setTimeout(function() {
                        location.href="index.html"
                    }, 1000);
                }
                else{
                    $('.notice').text("修改失败，请重新尝试!");
                    $('.model').css('display','block');
                }
        });
        // location.href="index.html"
    })
    $(function () {
            $('.back-btn').click(function(){
        location.href="index.html"
    })
        $('.user').mouseover(function () {
            $('.change').stop().slideDown(200);
        })
        $('.user').mouseout(function () {
            $('.change').stop().slideUp(200);
        })
    })
}