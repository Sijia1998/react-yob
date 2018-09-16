import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios'
import { Form, Input, InputNumber, Select, Radio, Button,message} from 'antd';
// import { type } from 'os';


const FormItem = Form.Item;
const Option = Select.Option;



function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class RegisterForm extends React.Component {

  constructor(){
    super();
    this.state={
      formLayout : 'horizontal',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        
        axios.post('http://localhost:3000/users/addUsers',values)
        .then((res)=>{
          console.log(res)
          if(res.status === '1'){
            message.success('报名成功');
          }else if(res.status === '0'){
            message.error('提交失败')
          }
        })
        //提交成功后清空表单数据
        this.props.form.resetFields();
      }
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;

    return (
      <Form onSubmit={this.handleSubmit}  layout={formLayout}>
        <FormItem
          // {...formItemLayout}
          label="姓名"
        >
          {getFieldDecorator('userName', {
            rules: [{
              required: true, message: '请输入你的姓名!',
            }],
          })(
            <Input  style={{ width: '100%' }} placeholder="例：乔思远"/>
          )}
        </FormItem>
        <FormItem
          // {...formItemLayout}
          label="年龄"
        >
          {getFieldDecorator('userAge', {
            initialValue:18,
            rules: [{
              required: true, message: '请输入你的年龄!',
            }],
          })(
            <InputNumber style={{ width: '25%' }} />
          )}
        </FormItem>
        <FormItem
          // {...formItemLayout}
          label="专业班级" 
        >
          {getFieldDecorator('classesName', {
            rules: [{
              required: true, message: '请填写你的专业班级!',
            }],
          })(
            <Input style={{ width: '100%' }} placeholder="例：电路1604" />
          )}
        </FormItem>
        <FormItem
          // {...formItemLayout}
          label="意向舞种"
        >
          {getFieldDecorator('danceOfchoice', {
            rules: [{ required: true, message: '请选择你意向的舞种!' }],
          })(
            <Radio.Group  defaultValue="Poppin" buttonStyle="solid">
              <Radio.Button value="Poppin">Poppin</Radio.Button>
              <Radio.Button value="Breaking">Breaking</Radio.Button>
              <Radio.Button value="Locking">Locking</Radio.Button>
              <Radio.Button value="Jazz">Jazz</Radio.Button>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem
          // {...formItemLayout}
          label="联系方式"
        >
          {getFieldDecorator('phoneNumber', {
            rules: [{ required: true, message: '请填写你的联系方式!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem  style={{textAlign:'center'}}
        // {...tailFormItemLayout}
        >
          <Button type="primary" htmlType="submit" style={{width:'100%'}}>提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const Register = Form.create()(RegisterForm)

export default Register