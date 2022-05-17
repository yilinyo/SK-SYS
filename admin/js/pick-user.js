window.onload=function(){
    $('.add-btn').click(function(){
        if($('#user-age').val()==null||$('#user-age').val()==""){
            $('#error-id').html("用户最小年龄限制不能为空")
            $('#error-id').css("display","inline-block");
            return;
        }
        else{$('#error-id').css("display","none");}
        
        if($('#user-age').val()<16||$('#user-age').val()>20){
            $('#error-id').html("用户最小年龄限制需在16到20之间")
            $('#error-id').css("display","inline-block");
            return;
        }
        else{$('#error-id').css("display","none");}
        
        if($('#user-credit').val()==null||$('#user-credit').val()==""){
            $('#error-credit').html("用户最小信用度限制不能为空")
            $('#error-credit').css("display","inline-block");
            return;
        }
        else{$('#error-credit').css("display","none");}
        
        if($('#user-credit').val()<0||$('#user-credit').val()>100){
            $('#error-credit').html("用户最小信用度限制需在0到100之间")
            $('#error-credit').css("display","inline-block");
            return;
        }
        else{$('#error-credit').css("display","none");}
        var age=$('#user-age').val();
        var credit=$('#user-credit').val();
        $.get("../../api/admin/buy_check.php",{age:age,credit:credit},function(data){
            console.log(data)
        })
        location.href="user.html"
    })
    
    $(function () {
        $('.user').mouseover(function () {
            $('.change').stop().slideDown(200);
        })
        $('.user').mouseout(function () {
            $('.change').stop().slideUp(200);
        })
    })
}