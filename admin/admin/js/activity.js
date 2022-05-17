window.onload = function () {
    //ajax请求动态添加活动信息
    $.get("../../api/admin/backinfo.php",{table:"sk_active"},function(data){
        var status=[];
        for(let i=0;i<data.length;i++){
            if(data[i].sys_status==0){
                status[i]="待上线";
            }
            else if(data[i].sys_status==1){
                status[i]="已上线";
            }
            else{
                status[i]="已下线";
            }
        }
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
        for(let i=0;i<data.length;i++){
            var begin=toDates(data[i].time_begin)
            var end=toDates(data[i].time_end)
            var tr="<tr><td id='active_id'>"+data[i].active_id+"</td><td>"+data[i].active_title+"</td><td>"+begin+"</td><td>"+end+"</td><td id='state'>"+status[i]+"</td><td><span id='edit'>编辑</span><span id='up'>上线</span><span id='down'>下线</span></td></tr>"
            $(".index-table").append(tr);
        }
        $('td>#up').click(function () {
            var id =$(this).parent('td').siblings('#active_id').text();
            $.get("../../api/admin/status.php",{table:"sk_active",id:id,sys_status:1})
            $(this).parent('td').siblings('#state').text("已上线")
        })
        $('td>#down').click(function () {
            var id =$(this).parent('td').siblings('#active_id').text();
             $.get("../../api/admin/status.php",{table:"sk_active",id:id,sys_status:2})
            $(this).parent('td').siblings('#state').text("已下线")
        })
        $("tr:even").css({backgroundColor:"#f6f6f6"})
        
        $('td>#edit').click(function(){
            //获取当前行的信息
            var trs=document.querySelectorAll('tr');
            for(let i=0;i<trs.length;i++){trs[i].index=i}
            var index=this.parentNode.parentNode.index;
            console.log(index)
            var info=[data[index-1]]
            console.log(info)
            $.cookie.json = true;
            $.cookie('update',info,{path:'./'});
            location.href="update-active.html";
        })
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
    
    let title=[];
    let payOrder=[];
    let totalOrder=[];
    $.get("../../api/admin/echartsinfo.php",{model:"5"},function(data){
        console.log(data);
        for(let obj of data){
            title.push(obj.active_title);
            payOrder.push(obj.paynum);
            totalOrder.push(obj.totalnum*1);
        }
        var chartdom=document.querySelector('.order-charts')
        var order_charts=echarts.init(chartdom)
        option = {
          title: {
            text: '各活动订单量'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data:title,
          },
          series: [
            {
              name: '已支付订单',
              type: 'bar',
              data: payOrder
            },
            {
              name: '总订单',
              type: 'bar',
              data: totalOrder,
            }
          ]
        };
        order_charts.setOption(option);
        })
    
}