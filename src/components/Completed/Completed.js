import React, { Component } from 'react'
import './completed.css'
import { Table } from 'antd';
const columns = [{
title: '菜品名称',
dataIndex: 'goods'
}, {
title: '下单时间',
dataIndex: 'time'
}, {
title: '顾客名',
dataIndex: 'name'
}, {
title: '操作',
dataIndex: '',
render: () => <a href="#">操作</a>
}]
const data = [{
key: '1',
goods: '黑森林',
time: '2017-09-23 21:33:10',
name: 'happypeter'
}, {
key: '2',
goods: '提拉米苏',
time: '2017-09-23 21:33:10',
name: 'billie'

}]
class Completed extends Component {
  render(){
    return(
      <div className="completed">
        <div className="completed-header">
        </div>
        <div className="completed-list">
          <div className="other">共2条订单</div>
          <div className="table">
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
        </div>
      </div>
    )
  }
}

export default Completed
