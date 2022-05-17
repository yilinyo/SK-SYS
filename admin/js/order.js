window.onload = function () {
    function toDates(times) {
            time=times*1000;
            const date = new Date(time)
            
            const Y = date.getFullYear()
            const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
            const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
            const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            const Min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            const S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            const dateTime = Y + '年' + M + '月' + D + '日' + H + '时' + Min + '分' + S + '秒'
            return dateTime
        }
        
    $.get("../../api/admin/backinfo.php",{table:"sk_trade"},function(data){
        console.log(data)
        var status=[];
        for(let i=0;i<data.length;i++){
            if(data[i].sys_status==0){
                status[i]="待处理"
            }
            else if(data[i].sys_status==1){
                status[i]="待支付"
            }
            else if(data[i].sys_status==2){
                status[i]="已支付"
            }
            else if(data[i].sys_status==3){
                status[i]="管理员已确认"
            }
            else if(data[i].sys_status==4){
                status[i]="已取消"
            }
        }
        //动态创建数据的函数
        //表头  
    var head = '<thead><th>ID</th><th>用户名</th><th>订单活动名称</th><th>订单商品名称</th><th>商品详情<span style="color:#999;font-size:12px;">（利率/存期）</span></th><th>购买数量</th><th>订单金额<span style="color:#999;font-size:12px;">(秒杀价)</span></th><th>订单时间</th><th>创建时间</th><th>订单状态</th><th>操作</th></thead><tbody>'
    //表内容
    var pageData = [];
    for (let i = 0; i < data.length; i++) {
        var pay =data[i].time_pay!=0? toDates(data[i].time_pay):"无数据";
        var cancel =data[i].time_cancel!=0? toDates(data[i].time_cancel):"无数据";
        var dateline =data[i].sys_dateline!=0? toDates(data[i].sys_dateline):"无数据";
        var confirm =data[i].time_confirm!=0? toDates(data[i].time_confirm):"无数据"
        var tr = "<tr><td id='trade_id'>" + data[i].trade_id + "</td><td>" + data[i].username + "</td><td>" + data[i].active_title + "</td><td>" + data[i].goods_title + "</td><td>" + data[i].goods_rate + "/" + data[i].goods_term + "</td><td>" + data[i].num_total + "</td><td>" + data[i].price_total + "</td><td>确认时间:<br>" + confirm + "<br>支付时间：<br>" + pay + "<br>取消时间：<br>" + cancel + "</td><td>" + dateline + "</td><td id='state'>" + status[i] + "</td><td><span id='delete'>取消</span><span id='sure'>确认</span></td></tr>"
        pageData.push(tr);
    }
    //表尾
    function setData(data){
        for(let i=0;i<data.length;i++){
        var tr="<tr><td id='trade_id'>" + data[i].trade_id + "</td><td>" + data[i].username + "</td><td>" + data[i].active_title + "</td><td>" + data[i].goods_title + "</td><td>" + data[i].goods_rate + "/" + data[i].goods_term + "</td><td>" + data[i].num_total + "</td><td>" + data[i].price_total + "</td><td>确认时间:<br>" + confirm + "<br>支付时间：<br>" + pay + "<br>取消时间：<br>" + cancel + "</td><td>" + dateline + "</td><td id='state'>" + status[i] + "</td><td><span id='delete'>取消</span><span id='sure'>确认</span></td></tr>";
        $('.order-table').append(tr);
        }
    }
    var end = '</tbody>';
    $(function () {
        var Count = pageData.length;//记录条数  
        var PageSize = 5;//设置每页示数目  
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
            $('.order-table').empty().append(head);
            for (i = (currentPage - 1) * PageSize; i < PageSize * currentPage; i++) {
                $('.order-table').append(pageData[i]);
            }
            $('.order-table').append(end);
            $('#now-page').text("当前第 "+currentPage+" 页")
            $("td>#delete").click(function(){
            var id=$(this).parent('td').siblings('#trade_id').text();
            $.get("../../api/admin/status.php",{table:"sk_trade",id:id,sys_status:4})
            $(this).parent('td').siblings('#state').text("已取消")
            })
            $("td>#sure").click(function(){
            var id=$(this).parent('td').siblings('#trade_id').text();
            $.get("../../api/admin/status.php",{table:"sk_trade",id:id,sys_status:3})
            $(this).parent('td').siblings('#state').text("管理员已确认")
            })
            
            var tbody=document.querySelector('tbody')
            $('.select-btn').click(function(value){
                var arr=[];
                data.some(function(value){
                    if(value.trade_id==$('#select-input').val()){
                        arr.push(value);
                        $('.noorder').css('display','none')
                        return true;
                    }
                    else{
                        $('.noorder').css('display','block')
                    }
                })
                tbody.innerHTML='';
                setData(arr);
            })
        }
        
        //显示默认页（第一页）  
        set();
        //显示选择页的内容  
        // $('a').click(function () {
        //     var selectPage = $(this).attr('selectPage');
        //     $('.order-table').html('');
        //     $('.order-table').append(head);
        //     for (i = (selectPage - 1) * PageSize; i < PageSize * selectPage; i++) {
        //         $('.order-table').append(pageData[i]);
        //     }
        //     $('.order-table').append(end);
        //     $("td>#delete").click(function(){
        //     var id=$(this).parent('td').siblings('#trade_id').text();
        //     $.get("../../api/admin/status.php",{table:"sk_trade",id:id,sys_status:4})
        //     $(this).parent('td').siblings('#state').text("已取消")
        // })
        // $("td>#sure").click(function(){
        //     var id=$(this).parent('td').siblings('#trade_id').text();
        //     $.get("../../api/admin/status.php",{table:"sk_trade",id:id,sys_status:3})
        //     $(this).parent('td').siblings('#state').text("管理员已确认")
        // })
        // });
        $('#gopage').click(function(){
            var selectPage=$('#page-input').val();
            currentPage=selectPage;
            if(selectPage<=0||selectPage>PageCount){
                alert('您输入的页面不存在哦！请重新输入');
                return;
            }
            set();
        })
        //上一页下一页跳转
        $('#pre-page').click(function(){
            currentPage=currentPage==1?1:currentPage-1;
            $('.order-table').html('');
            set();
        })
        $('#next-page').click(function(){
            currentPage=currentPage==PageCount?PageCount:currentPage*1+1;
            $('.order-table').html('');
            set();
        })
    });
        
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
    
    $.get("../../api/admin/echartsinfo.php",{model:4},function(data){
        console.log(data)
        let numData=[0];
        numData.push(data.time6);
        numData.push(data.time12);
        numData.push(data.time18);
        numData.push(data.time24);
        console.log(numData)
        
        var myChart=echarts.init(document.querySelector('.order-charts'));
        option = {
            title: {
            text: '订单增长量',
            left:'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['0点', '6点', '12点', '18点', '24点']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Order',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: numData
        }
      ]
            };
    
        option && myChart.setOption(option);
    })
    
}