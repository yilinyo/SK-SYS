window.onload = function () {
    var close = document.querySelector('.close');
    var inputs = document.querySelectorAll('input')
    var flag = 0;
    close.onclick = function () {
        if (flag == 0) {
            inputs[1].type = 'text';
            close.src = 'images/open.png';
            flag = 1;
        } else {
            inputs[1].type = 'password';
            close.src = 'images/close.png';
            flag = 0;
        }
    }
    var btn = document.querySelector('.but')
    var username = document.querySelector('#username')
    var password = document.querySelector('#password')
    var dao = document.querySelector('.tiao')
    btn.addEventListener('click', function () {
        if (username.value == '') {
            alert("请输入管理员帐号!");
            username.focus();
            return;
        }
        if (password.value == '') {
            alert("请输入登录密码!");
            password.focus();
            return;
        }
        $.ajax({
            type:'POST',
            url:'../../api/admin/admin-login.php',
            data:{
                username:username.value,
                password:password.value
            },
            success:function(res){
                if(res =="no"){
                    alert('账户或密码错误！')
                }
                else if(res == "yes"){
                    //var user_value = $('#username').val()
                    // $.cookie('name',username.value,{expires:7,path:'./'});
                    var time = 3
                    dao.style.display = 'block'
                    dao.innerHTML='登陆成功！页面将于'+time+'秒后跳转'
                    setInterval(function(){
                        if(time == 0){
                            window.location.href="admin.html"
                        }
                        else{
                            dao.innerHTML='登陆成功！页面将于'+time+'秒后跳转'
                            time--;
                        }
                    },1000)
                    
                };
            }
        })
    })
    
}
