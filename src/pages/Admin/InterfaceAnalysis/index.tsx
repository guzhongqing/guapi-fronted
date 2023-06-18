import { listTopInvokeInterfaceInfoUsingGET } from '@/services/guapi-backend/analysisController';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';

/**
 * 接口分析
 * @constructor
 */
const InterfaceAnalysis: React.FC = () => {
  const [data, setData] = useState<API.InterfaceInfoVO[]>([]);

  useEffect(() => {
    try {
      // 发送请求，从后端获取数据

      listTopInvokeInterfaceInfoUsingGET().then((res) => {
        if (res.data) {
          setData(res.data);
        }
      });
    } catch (e: any) {}
  }, []);

  // 映射：{ value: 1048, name: 'Search Engine' },
  const chartData = data.map((item) => {
    return {
      name: item.name,
      value: item.totalNum,
    };
  });

  const option = {
    title: {
      text: '调用次数最多的接口TOP8',
      left: 'center',
    },

    tooltip: {
      trigger: 'item',
    },

    legend: {
      bottom: 'bottom',
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [25, 250],
        center: 'center',
        roseType: 'area',
        itemStyle: {
          borderRadius: 7,
        },
        data: chartData,
      },
    ],
  };

  return (
    <PageContainer>
      <Card></Card>
      <ReactECharts option={option} style={{ height: '600px' }} />
      <Card></Card>
    </PageContainer>
  );
};
export default InterfaceAnalysis;
