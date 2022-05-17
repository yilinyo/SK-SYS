window.onload = function () {
    function toDay(times){
            time=times*1000;
            const date = new Date(time)
            
            const Y = date.getFullYear()
            const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
            const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
            const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            const Min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            const S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            const dateTime = Y + '-' + M + '-' + D;
            return dateTime
    }
    function toTime(times) {
            time=times*1000;
            const date = new Date(time)
            
            const Y = date.getFullYear()
            const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
            const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
            const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            const Min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            const S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            const dateTime =H + ':' + Min + ':' + S
            return dateTime
        }
    $.cookie.json = true;
    var data=$.cookie('update');
    var id=data[0].active_id;
    var begin_day=toDay(data[0].time_begin);
    var begin_time=toTime(data[0].time_begin);
    var end_day=toDay(data[0].time_end);
    var end_time=toTime(data[0].time_end);
    $('#time-begin-day').val(begin_day)
    $('#time-begin').val(begin_time)
    $('#time-end-day').val(end_day)
    $('#time-end').val(end_time);
    $('#active-id').val(data[0].active_id);
    $('#active-title').val(data[0].active_title)
    
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
    console.log(jsonobj);
    console.log(id);
    $.get("../../api/admin/editinfo.php",{info:jsonobj,action:"edit",table:"sk_active",id:id},function(date){
        console.log(date)
        if(data){
            $('.model').css('display','block');
                setTimeout(function() {
                    location.href="activity.html"
                }, 1000);
        }
        else{
            $('.notice').text("修改失败，请重新尝试!");
            $('.model').css('display','block');
        }
    });
    // location.href="activity.html"
    })
    $(function () {
        $('.back-btn').click(function () {
            location.href = "activity.html"
        })
        $('.user').mouseover(function () {
            $('.change').stop().slideDown(200);
        })
        $('.user').mouseout(function () {
            $('.change').stop().slideUp(200);
        })
    })
}