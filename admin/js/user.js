window.onload=function(){
    function setData(data){
        for(let i=0;i<data.length;i++){
            if(data[i].user_status=="0"){
                var status="正常";
            }
            else{
                var status="黑名单";
            }
            if(data[i].sex=="male"){
                var sex="男";
            }
            else{
                var sex="女"
            }
        var tr="<tr><td id='user_id'>"+data[i].user_id+"</td><td>"+data[i].username+"</td><td>"+sex+"</td><td>"+data[i].age+"</td><td>"+data[i].credit+"</td><td id='status'>"+status+"</td><td><span id='delete'>取消黑名单</span><span id='sure'>设为黑名单</span></td></tr>"
        $('.user-table').append(tr);
    }
    $("tr:even").css({backgroundColor:"#f6f6f6"})
    }
    // $.get("../../api/admin/backinfo.php",{table:"sk_user"},function(data){
    //     console.log(data);
    //     var tbody=document.querySelector('tbody')
    //     setData(data);
    //     $('td>#delete').click(function(){
    //         var id=$(this).parent('td').siblings('#user_id').text();
    //         $(this).parent('td').siblings('#status').text("正常");
    //         $.get("../../api/admin/status.php",{table:"sk_user",id:id,sys_status:0})
    //     })
    //     $('td>#sure').click(function(){
    //         var id=$(this).parent('td').siblings('#user_id').text();
    //         $(this).parent('td').siblings('#status').text("黑名单");
    //         $.get("../../api/admin/status.php",{table:"sk_user",id:id,sys_status:1},function(data){
    //             console.log(data)
    //         })
    //     })
    //     $('.select-btn').click(function(value){
    //         var arr=[];
    //         if($('#select-input').val()==''){
    //             setData(data);
    //             return;
    //         }
    //         data.some(function(value){
    //             if(value.user_id==$('#select-input').val()){
    //                 arr.push(value);
    //                 $('.nouser').css('display','none')
    //                 return true;
    //             }
    //             else{
    //                 $('.nouser').css('display','block')
    //             }
    //         })
    //         tbody.innerHTML='';
    //         setData(arr);
    //     })
        
    // })
    // var selectPage=0;
    $.get("../../api/admin/backinfo.php", { table: "sk_user" }, function (data) {
        let status = [];
        let sex = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].user_status == "0") {
                status[i] = "正常";
            }
            else {
                status[i] = "黑名单";
            }
            if (data[i].sex == "male") {
                sex[i] = "男";
            }
            else {
                sex[i] = "女"
            }
        }
        //表头
        let head = `<thead>
                    <th>用户ID</th>
                    <th>用户名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>信用值</th>
                    <th>用户权限</th>
                    <th>操作</th>
                </thead>
                <tbody>`
        //表内容
        let pageData = [];
        for (let i = 0; i < data.length; i++) {
            var tr = "<tr><td id='user_id'>" + data[i].user_id + "</td><td>" + data[i].username + "</td><td>" + sex[i] + "</td><td>" + data[i].age + "</td><td>" + data[i].credit + "</td><td id='status'>" + status[i] + "</td><td><span id='delete'>取消黑名单</span><span id='sure'>设为黑名单</span></td></tr>";
            pageData.push(tr);
        }
        //表尾
        let end = '</tbody>';
        $(function () {
            var Count = pageData.length;//记录条数  
            var PageSize = 20;//设置每页示数目  
            var PageCount = Math.ceil(Count / PageSize);//计算总页数  
            var currentPage = 1;//当前页，默认为1。  
            //造个简单的分页按钮  
            $('#page').append('共');
            // for (var i = 1; i <= PageCount; i++) {
            //     var pageN = '<a href="#" selectPage="' + i + '" >' + i + '</a>';
            //     $('#page').append(pageN);
            // }
            $('#page').append(PageCount);
            $('#page').append('页');
            
            function set(){
                $('.user-table').empty().append(head);
                for (i = (currentPage - 1) * PageSize; i < PageSize * currentPage; i++) {
                    $('.user-table').append(pageData[i]);
                }
                $('.user-table').append(end);
                $('#now-page').text("当前第 "+currentPage+" 页")
                $('td>#delete').click(function () {
                    var id = $(this).parent('td').siblings('#user_id').text();
                    $(this).parent('td').siblings('#status').text("正常");
                    $.get("../../api/admin/status.php", { table: "sk_user", id: id, sys_status: 0 })
                })
                $('td>#sure').click(function () {
                    var id = $(this).parent('td').siblings('#user_id').text();
                    $(this).parent('td').siblings('#status').text("黑名单");
                    $.get("../../api/admin/status.php", { table: "sk_user", id: id, sys_status: 1 }, function (data) {
                        console.log(data)
                    })
                })
                var tbody=document.querySelector('tbody')
                $('.select-btn').click(function(value){
                    var arr=[];
                    data.some(function(value){
                        if(value.user_id==$('#select-input').val()){
                            arr.push(value);
                            $('.nouser').css('display','none')
                            return true;
                        }
                        else{
                            $('.nouser').css('display','block')
                        }
                    })
                    tbody.innerHTML='';
                    setData(arr);
                })
            }
            
            //显示默认页（第一页）  
            set();

            
            //跳转指定页面
            $('#gopage').click(function () {
                var selectPage = $('#page-input').val();
                currentPage=selectPage;
                console.log(currentPage)
                if (selectPage <= 0 || selectPage > PageCount) {
                    alert('您输入的页面不存在哦！请重新输入');
                    return;
                }
                $('.user-table').html('');
                set();
            })
            
            //上一页下一页跳转
            $('#pre-page').click(function(){
                currentPage=currentPage==1?1:currentPage-1;
                $('.user-table').html('');
                set();
            })
            $('#next-page').click(function(){
                currentPage=currentPage==PageCount?PageCount:currentPage*1+1;
                $('.user-table').html('');
                set();
            })
            //搜索指定用户
            var tbody=document.querySelector('tbody')
            $('.select-btn').click(function(value){
                var arr=[];
                data.some(function(value){
                    if(value.user_id==$('#select-input').val()){
                        arr.push(value);
                        $('.nouser').css('display','none')
                        return true;
                    }
                    else{
                        $('.nouser').css('display','block')
                    }
                })
                tbody.innerHTML='';
                setData(arr);
            })
        })
    })
        //修改密码模块下拉上滑功能
    $(function () {
        $('.user').mouseover(function () {
            $('.change').stop().slideDown(200);
        })
        $('.user').mouseout(function () {
            $('.change').stop().slideUp(200);
        })
    })
}