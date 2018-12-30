import React, { Component } from 'react';
import { Button, Drawer, Form, Input, Row, Col } from 'antd';

const EditAppForm = Form.create()(
    // eslint-disable-next-line
    class extends React.Component {
      render() {
        const {
          form,
          item
        } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Form layout="vertical">
                <Row gutter={8}>
                    <Col span={12}>
                    <Form.Item label="App Name:">
                        {getFieldDecorator('app_name', {
                        initialValue: item.app_name,
                        rules: [{ required: true, message: 'Please input a name!' }],
                        })(
                        <Input />
                        )}
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item label="Description">
                        {
                            getFieldDecorator('app_description', {
                                initialValue: item.app_description,
                            })(<Input type="textarea" />)
                        }
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
      }
    }
  );
  
export default class AppMoreOptions extends Component 
{   

    constructor(props)
    {
        super(props);
        this.saveFormRef = this.saveFormRef.bind(this);
        this.editApp = this.editApp.bind(this);
    }

    editApp()
    {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
              return;
            }
            form.resetFields();
            this.props.closeEditAppDrawer();
            this.props.editApp(this.props.editingItem._id, values);
        });
    }

    saveFormRef(form)
    {
        this.formRef = form;
    }

    render()
    {
        return (
                <Drawer
                title={this.props.editingItem.app_name || "N.A"}
                width="100vw"
                height="100vh"
                placement="bottom"
                closable={true}
                onClose={this.props.closeEditAppDrawer}
                visible={this.props.edit_apps_drawer_visible}>
                    <EditAppForm 
                    wrappedComponentRef={this.saveFormRef}
                    item={this.props.editingItem}/>

                    <div
                        style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e9e9e9',
                        padding: '10px 16px',
                        background: '#fff',
                        textAlign: 'right',
                        }}
                    >
                        <Button onClick={this.props.closeEditAppDrawer} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button type="primary" onClick={this.editApp}>
                            Submit
                        </Button>
                    </div>
                </Drawer>
        );
    }
}