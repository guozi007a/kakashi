/** 后台管理-开发日志-发布日志 */
import styles from './index.module.scss'
import { Button, Checkbox, Form, Input, Space } from 'antd';


const PublishLog = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    type FieldType = {
        logs?: string;
        logs1?: string;
        logs2?: string;
        logs3?: string;
        confirm?: string;
    };
    
    return <>
        <div className={styles.publish_wrap}>
            <Form
                name="publishLog"
                // labelCol={{ span: 24 }}
                // wrapperCol={{ span: 24 }}
                style={{ width: '100%' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="日志内容"
                    name='logs1'
                    rules={[{ required: true, message: 'Please input logs!' }]}
                >
                    <Space>
                        <Input />
                        <Button type='primary'>新增</Button>
                        <Button type='primary' danger>删除</Button>
                    </Space>
                </Form.Item>
                <Form.Item<FieldType>
                    label="日志内容"
                    // name="logs2"
                    rules={[{ required: true, message: 'Please input logs!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="日志内容"
                    // name="logs3"
                    rules={[{ required: true, message: 'Please input logs!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    name="confirm"
                    valuePropName="checked"
                    wrapperCol={{ span: 24 }}
                    style={{textAlign: 'center'}}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 24 }}
                    style={{textAlign: 'center'}}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
}

export default PublishLog