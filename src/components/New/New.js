import React, { Component } from 'react'
import './new.css'
import { Upload, message, Button, Icon,Form,Input } from 'antd';
const props = {
name: 'file',
action: '//jsonplaceholder.typicode.com/posts/',
headers: {
  authorization: 'authorization-text',
},
onChange(info) {
  if (info.file.status !== 'uploading') {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === 'done') {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
},
}
const FormItem = Form.Item
class New extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render(){
    return(
      <div className="new">
        <div className="new-header">
          <Upload {...props}>
           <Button className='button'>
             <Icon type="upload" />上传海报
           </Button>
         </Upload>
         <Form onSubmit={this.handleSubmit} className="login-form">
           <FormItem>
               <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="名称" />
           </FormItem>
           <FormItem>
               <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="描述" />
           </FormItem>
           <FormItem>
               <Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 13 }}/>} type="password" placeholder="价格" />
           </FormItem>
           <FormItem>
             <Button type="primary" htmlType="submit" className="login-form-button">
              添加甜点
            </Button>
           </FormItem>
         </Form>
        </div>
      </div>
    )
  }
}

export default New
