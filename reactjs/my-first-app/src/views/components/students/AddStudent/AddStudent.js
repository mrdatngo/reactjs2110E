import React from 'react'
import { useDispatch } from 'react-redux'

import { Form, Input, Button, Select, TreeSelect } from 'antd';
import { addStudent } from '../../../../redux/actions/studentActions';

const { Option } = Select;
const { TreeNode } = TreeSelect;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

/**
* @author
* @function AddStudent
**/

export const AddStudent = (props) => {

  const [form] = Form.useForm();
  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(addStudent(values))
  };

  // const onReset = () => {
  //   form.resetFields();
  // };

  // const onFill = () => {
  //   form.setFieldsValue({
  //     note: 'Hello world!',
  //     gender: 'male',
  //   });
  // };

  const onChange = value => {
    console.log(value);
  };

  return (
    <div>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="classes" label="Classes" rules={[{ required: true }]}>
          <TreeSelect
            showSearch
            style={{ width: '100%' }}
            // value={this.state.value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            multiple
            treeDefaultExpandAll
            onChange={onChange}
          >
            <TreeNode value="REACTJS" title="REACTJS">
            </TreeNode>
            <TreeNode value="NODEJS" title="NODEJS">
            </TreeNode>
            <TreeNode value="HTML" title="HTML">
            </TreeNode>
          </TreeSelect>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Add Student
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
