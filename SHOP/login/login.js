window.onload=function(){
        let username=document.getElementById('username');
        let password=document.getElementById("password");
        let button=document.getElementById("button");
        let form=document.getElementById("form");
        let number=document.getElementById("number");
        let notice=document.getElementById("notice");
        button.onclick=function(){
              if(form.username.value=='') {
                    alert("请输入用户帐号!");
                    form.username.focus();
                    return false;
              }
              if(form.password.value==''){
                    alert("请输入登录密码!");
                    form.password.focus();
                    return false;
                }
                $.ajax({
                      type:'POST',
                      url:'../../api/shop/login.php',
                      data:{
                          username:username.value,
                          password:password.value
                      },
                      success:function(res){
                          var jsonData = JSON.parse(res)
                          if(jsonData.status=='102')
                          alert("登录名或密码错误");
                          else if(jsonData.status=='101'){
                              localStorage.setItem('usermsg',username.value);
                              localStorage.setItem("userid",jsonData.user_id)
                              localStorage.setItem("password",password.value);
                              notice.style.display='block';
                              setTimeout(function() {
                                  window.location.href='../dist/index.html'
                              }, 5000);
                          }
                      }
                });
               
        }
    }