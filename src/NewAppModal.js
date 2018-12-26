import React from 'react';
import { Button, Modal, Form, Input, Row, Col } from 'antd';

const CollectionCreateForm = Form.create()(
    // eslint-disable-next-line
    class extends React.Component {
      render() {
        const {
          visible, onCancel, onCreate, form,
        } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="Create a new App"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="App Name:">
                {getFieldDecorator('app_name', {
                  rules: [{ required: true, message: 'Please input a name!' }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="Description">
                {getFieldDecorator('app_description')(<Input type="textarea" />)}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
    }
  );
  

export default class NewAppModal extends React.Component 
{

    state = {
        visible: false,
    };
    
    showModal = () => {
        this.setState({ visible: true });
    }
    
    handleCancel = () => {
        this.setState({ visible: false });
    }
    
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
              return;
            }
            form.resetFields();
            this.setState({ visible: false });
            this.props.saveApp(values);
        });
    }
    
    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() 
    {
        return (
            <div>
                <Row>
                  <Col span={3} offset={21}>
                    <Button type="primary" onClick={this.showModal}>Create New App</Button>
                  </Col>
                </Row>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}