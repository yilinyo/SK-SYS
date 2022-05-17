window.onload=function(){
    $('.add-btn').click(function(){
        //对于表单填写的数据进行进行检验
        if($('#active-id').val()==null||$('#active-id').val()==""){
            $('#error-id').html("活动id不能为空")
            $('#error-id').css("display","inline-block");
            return;
        }
        else{$('#error-id').css("display","none");}
        
        if($('#active-title').val()==null||$('#active-title').val()==""){
            $('#error-title').html("活动名称不能为空")
            $('#error-title').css("display","inline-block");
            return;
        }
        else{$('#error-title').css("display","none");}
        
        if($('#time-begin').val()==null||$('#time-begin').val()==""||$('#time-begin-day').val()==null){
            $('#error-begin').html("活动开始时间不能为空")
            $('#error-begin').css("display","inline-block");
            return;
        }
        else{$('#error-begin').css("display","none");}
        
        if($('#time-end').val()==null||$('#time-end').val()==""||$('#time-end-day').val()==null){
            $('#error-end').html("活动结束时间不能为空")
            $('#error-end').css("display","inline-block");
            return;
        }
        else{$('#error-end').css("display","none");}
            //得到json数据
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
    //将时间转换为时间戳
    var begin_time=jsonobj.time_begin_day+' '+jsonobj.time_begin
    var begin=+new Date(begin_time);
    jsonobj.time_begin=begin/1000;
    var end_time=jsonobj.time_end_day+' '+jsonobj.time_end
    var end=+new Date(end_time);
    jsonobj.time_end=end/1000;
    $.get("../../api/admin/editinfo.php",{info:jsonobj,action:"set",table:"sk_active"});
    location.href="activity.html"
    })
    //修改密码模块
    $(function () {
        $('.user').mouseover(function () {
            $('.change').stop().slideDown(200);
        })
        $('.user').mouseout(function () {
            $('.change').stop().slideUp(200);
        })
    })
}