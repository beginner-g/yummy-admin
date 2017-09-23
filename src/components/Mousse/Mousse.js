import React, { Component } from 'react'
import './mousse.css'
import { Table } from 'antd';
const columns = [{
title: '海报',
key:1
}, {
title: '菜品名称',
key:2
}, {
title: '描述',
key:3
}, {
title: '价格',
key:4
}, {
title: '操作',
key:5
}]
class Mousse extends Component {
  render(){
    return(
      <div className="mousse">
        <div className="mousse-header">
          <div className="mousse-poster">
            <div className="zero">共0条</div>
            <Table columns={columns} size="middle" />
          </div>
        </div>
      </div>
    )
  }
}

export default Mousse
