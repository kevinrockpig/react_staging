import React, { Component } from 'react'
import { Button, DatePicker, ConfigProvider } from 'antd'
import { PieChartOutlined, AreaChartOutlined } from '@ant-design/icons'
// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale
// 确保还导入相关的 dayjs 文件，否则所有文本的区域设置都不会更改（例如范围选择器月份）
import locale from 'antd/locale/zh_TW';
import dayjs from 'dayjs';
dayjs.locale('zh-tw');


export default class App extends Component {
  render() {
    return (
      <div>
        App....
        <button>點擊</button>
        <Button type="primary">Primary Button</Button>
        <Button type="">Default Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="text">Text Button</Button>
        <br/>
        <PieChartOutlined />
        <AreaChartOutlined />
        <DatePicker />
        <ConfigProvider locale={locale}>
          <DatePicker />
        </ConfigProvider>
      </div>
    )
  }
}
