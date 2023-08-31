/** 后台管理-开发日志-发布日志 */
import styles from './index.module.scss'
import { Button, Checkbox, Form, Input, Space, message } from 'antd';
import { useState } from 'react';

interface InpItem {
    key: React.Key
    id: string
    content?: React.ReactNode
}

type FieldType = {
    confirm?: string
};

let COUNT = 0
const initVal: InpItem[] = [{
    key: `logs${COUNT}`,
    id: `logs${COUNT}`,
    content: '',
}]

const PublishLog = () => {
    const [inpList, setInpList] = useState<InpItem[]>(initVal)

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (changedValues: Record<string, string>, allValues: Record<string, string>) => {
        console.log('changedValues: ', changedValues)
        console.log('allValues: ', allValues)
    }

    const handleInsert = (id: string) => {
        const isHasEmptyInp = inpList.some(v => !v.content)
        console.log('isHasEmptyInp: ', isHasEmptyInp)
        if (isHasEmptyInp) {
            message.warning('添加失败，有输入框未输入内容！')
            return
        }
        const list: InpItem[] = []
        for (const v of list) {
            list.push(v)
            if (v.id === id) {
                COUNT++
                list.push({
                    key: `logs${COUNT}`,
                    id: `logs${COUNT}`,
                    content: '',
                })
            }
        }
    }

    const handleDelete = (id: string) => {
        if (inpList.length <= 1) {
            message.warning('删除失败,请至少保留一个输入框！')
            return
        }
        setInpList(inpList.filter(v => v.id !== id))
        message.success('删除成功！')
    }
    
    return <>
        <div className={styles.publish_wrap}>
            <Form
                name="publishLog"
                style={{ width: '100%' }}
                initialValues={{ confirm: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                onValuesChange={handleChange}
            >
                {
                    inpList.map((v) => {
                        return (
                            <Form.Item
                                key={v.key}
                                label="日志内容"
                                name={v.id}
                                rules={[{ required: true, message: 'Please input logs!' }]}
                            >
                                {/* classNames通过item属性，会为Space中的每一个子元素的wrap添加一个类名 */}
                                <Space className={styles.space} classNames={{item: styles.space_item}}>
                                    <Input />
                                    <Button type='primary'
                                        onClick={() => {
                                            handleInsert(v.id)
                                        }}
                                    >新增</Button>
                                    <Button type='primary' danger
                                        onClick={() => {
                                            handleDelete(v.id)
                                        }}
                                    >删除</Button>
                                </Space>
                            </Form.Item>
                        )
                    })
                }

                <Form.Item<FieldType>
                    name="confirm"
                    valuePropName="checked"
                    wrapperCol={{ span: 24 }}
                    style={{textAlign: 'center'}}
                >
                    <Checkbox>我已写好日志内容，确认发布</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 24 }}
                    style={{textAlign: 'center'}}
                >
                    <Button type="primary" htmlType="submit">
                        发布日志
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
}

export default PublishLog