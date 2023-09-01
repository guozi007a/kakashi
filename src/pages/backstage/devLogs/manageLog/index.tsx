/** 管理后台-开发日志-管理日志 */
import styles from './index.module.scss'
import type { DatePickerProps } from 'antd';
import { Layout, DatePicker, Button, Space, Empty, List, Input, message } from 'antd'
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { InpItem } from '../publishLog';
import { useState, useId } from 'react';

type OperStatus = 'add' | 'edit' | ''

type PropsConfig = {
    item: InpItem
    operStatus: OperStatus
    handleOperStatus: (status: OperStatus) => void
    logList: InpItem[]
    handleLogList: (logs: InpItem[]) => void
}

const { Header, Content, Footer } = Layout

const data: InpItem[] = [
    { key: 'logs0', id: 'logs0', content: 'Racing car sprays burning fuel into crowd.' },
    { key: 'logs1', id: 'logs1', content: 'Japanese princess to wed commoner.' },
    { key: 'logs2', id: 'logs2', content: 'Australian walks 100km after outback crash.' },
    { key: 'logs3', id: 'logs3', content: 'Man charged over missing wedding girl.' },
    { key: 'logs4', id: 'logs4', content: 'Los Angeles battles huge wildfires.' },
];

const initLog = () => {
    const id = useId()
    return [{
        key: id,
        id,
        content: '',
    }]
}

const ListItem = ({
    item,
    operStatus,
    handleOperStatus,
    logList,
    handleLogList,
}: PropsConfig) => {

    const handleAdd = (id: string) => {
        const isHasEmpty = logList.some((v) => !v.content)
        if (isHasEmpty) {
            message.warning('添加失败，有输入框未输入内容！')
            return
        }

        handleOperStatus('add')
        
        const list = [...logList]
        const index = list.findIndex(v => v.id === id)
        const result = [...list.slice(0, index), ...initLog(), ...list.slice(index)]
        handleLogList(result)
    }

    return <>
        <List.Item className={styles.list_item}>
            {
                !item.content
                    ? <>
                        <Input
                            allowClear
                            bordered
                            id={item.id}
                            autoFocus
                            autoComplete='off'
                            required
                            value={''}
                        />
                        <Button type='primary' className={styles.confirm_btn}>确认</Button>
                    </>
                    : <>
                        <span>{item.content}</span>
                        <Space>
                            <Button type='primary'
                                onClick={() => {
                                    handleAdd(item.id)
                                }}
                            >增加</Button>
                            <Button type='primary' danger>删除</Button>
                            <Button type='primary' className={styles.edit_btn}>编辑</Button>
                        </Space>
                    </>
            }
        </List.Item>
    </>
}

const ManageLog = () => {

    const [logList, setLogList] = useState<InpItem[]>(data)
    const [operStatus, setOperStatus] = useState<OperStatus>('')

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const handleReset = () => {
        setLogList(data)
    }

    const handleOperStatus = (status: OperStatus) => {
        setOperStatus(status)
    }

    const handleLogList = (logs: InpItem[]) => {
        setLogList(logs)
    }

    return <>
        <Layout className={styles.manage_wrap}>
            <Header className={styles.header}>
                <Space>
                    <div>
                        根据日期搜索：
                        <DatePicker
                            locale={locale}
                            onChange={onChange}
                        />
                    </div>
                    <Button type='primary'>查询</Button>
                </Space>
            </Header>
            <Content className={styles.content}>
                {
                    logList && logList.length
                        ? <List
                            size="large"
                            bordered
                            dataSource={logList}
                            renderItem={(item) => <ListItem
                                item={item}
                                operStatus={operStatus}
                                handleOperStatus={handleOperStatus}
                                logList={logList}
                                handleLogList={handleLogList}
                            />}
                            // loading
                            rowKey={(item) => item.key}
                        />
                        : <Empty />
                }
            </Content>
            {
                logList && logList.length
                    ? <Footer className={styles.footer}>
                        <Space>
                            <Button type='primary' onClick={handleReset}>重置</Button>
                            <Button type='primary'>提交更新</Button>
                        </Space>
                    </Footer>
                    : null
            }
        </Layout>
    </>
}

export default ManageLog