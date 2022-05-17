window.onload = function () {
    let indexData=[];
    let indexNumData=[];
    //ajax更新后台商品信息
    $.get("../../api/admin/backinfo.php",{table:"sk_goods"},function(data){
        if(data!=0){
            $('.index-notice').css("display","none")
        }
        console.log(data);
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
            indexData.push(data[i].goods_title);
            indexNumData.push(data[i].num_left);
        }
        for(let i=0;i<data.length;i++){
            var tr="<tr><td id='goods_id'>"+data[i].goods_id+"</td><td>"+data[i].active_id+"</td><td>"+data[i].goods_title+"</td><td>"+data[i].goods_rate + "%/" + data[i].goods_term+"月"+"</td><td>"+data[i].num_left+"/"+data[i].num_total+"</td><td>"+data[i].goods_price_normal+"/"+data[i].goods_price_discount+"</td><td>"+data[i].num_user+"</td><td id='state'>"+status[i]+"</td><td><span id='update'>编辑</span><span id='up'>上线</span><span id='down'>下线</span></td></tr>"
            $(".index-table").append(tr);
        }
        $('td>#up').click(function () {
            var id =$(this).parent('td').siblings('#goods_id').text();
            $.get("../../api/admin/status.php",{table:"sk_goods",id:id,sys_status:1})
            $(this).parent('td').siblings('#state').text("已上线")
        })
        $('td>#down').click(function () {
            var id =$(this).parent('td').siblings('#goods_id').text();
             $.get("../../api/admin/status.php",{table:"sk_goods",id:id,sys_status:2})
            $(this).parent('td').siblings('#state').text("已下线")
        })
        $("tr:even").css({backgroundColor:"#f6f6f6"})
            //点击编辑按钮，获取当前按钮行的数据传给编辑页面，做一个初始化
        $('td>#update').click(function(){
            //获取当前行的信息
            var trs=document.querySelectorAll('tr');
            for(let i=0;i<trs.length;i++){trs[i].index=i}
            var index=this.parentNode.parentNode.index;
            console.log(index)
            var info=[data[index-1]]
            console.log(info)
            $.cookie.json = true;
            $.cookie('update',info,{path:'./'});
            location.href="update-index.html"
        })
        var myChart=echarts.init(document.querySelector(".index-charts"))
    let yMax = 500;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }
    option = {
      title: {
          left:'center',
        text: '各商品剩余数量',
        subtext: '滑动滚轮可自动缩放'
      },
      xAxis: {
        data: indexData,
        // data: dataAxis,
        axisLabel: {
          inside: true,
          color: '#fff'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#999'
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          type: 'bar',
          showBackground: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
              ])
            }
          },
          data: indexNumData
        }
      ]
    };
    // Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    });
    
    option && myChart.setOption(option);
    })
    //修改密码模块下拉上滑
    $(function () {
        $('.user').mouseover(function () {
            $('.change').stop().slideDown(200);
        })
        $('.user').mouseout(function () {
            $('.change').stop().slideUp(200);
        })
    })
// prettier-ignore
// prettier-ignore
    
}