window.onload = function () {
    var nums=function(table,info){
        $.get("../../api/admin/backinfo.php",{table:table},function(data){
        var nums=data.length;
        $(info).html(nums);
    })
    }
    nums("sk_goods","#goods_nums");
    nums("sk_active","#active_nums");
    
    let activity_echarts_data=[];
    var sale=function(model){
        $.get("../../api/admin/echartsinfo.php",{model:model},function(data){
            if(model=="1"){
                $("#total-price").html(data[0].account);
                return;
            }
            if(model=="8"){
                $('#user_nums').text(data[0].num)
            }
            if(model=="9"){
                console.log(data);
                $('#order_nums').text(data[0].num)
            }
            if(model=="6"){
                $("#pre-trade-nums").html(data.num);
                $("#pre-trade-price").html(data.totalprice);
                return;
            }
            if(model=="7"){
                $("#now-trade-nums").html(data.num);
                $("#now-trade-price").html(data.totalprice)
                return;
            }
            if(model=="2"){
                console.log(data);
                for(let i=0;i<data.length;i++){
                    var obj=new Object();
                    obj.value=data[i].num*1;
                    obj.name=data[i].active_title;
                    activity_echarts_data.push(obj);
                }
                var myChart = echarts.init(document.querySelector('.active-info'));
                const rc = 'images/nav_menu.png'
                const img = new Image();
                img.src = rc;
                // 指定图表的配置项和数据
                option = {
                    title: {
                        text: '各活动对应商品数量',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'right'
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: '50%',
                            data:activity_echarts_data,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                console.log(activity_echarts_data)
            }
        })
    }
    sale("1");
    sale("6");
    sale("7");
    sale("2");
    sale("8");
    sale("9")
    $(function () {
        $('.user').mouseover(function () {
            $('.change').stop().slideDown(200);
        })
        $('.user').mouseout(function () {
            $('.change').stop().slideUp(200);
        })
    })
    
    $.get("../../api/admin/echartsinfo.php",{model:10},function(data){
        console.log(data)
        $('#blackUsernum').text(data.LimitAge);
        $('#errorUsernum').text(data.LimitCredit);
        var user=document.querySelector('.user-charts')
        var user_charts=echarts.init(user)
    var    user_option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
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
              data: ['黑名单用户','异常用户','总用户人数'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: 'Direct',
              type: 'bar',
              barWidth: '60%',
              data: [
                  {
                    value:data.BlackUsernum,
                    itemStyle:{
                        color:'#000000'
                    }
                  }
                  , 
                  {
                    value: data.ErrorUsernum,
                    itemStyle: {
                    color: '#a90000'
                  }
                }, data.TotalUsernum]
            }
          ]
        };
        user_charts.setOption(user_option)
    })

}