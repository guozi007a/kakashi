/** 管理后台-开发日志-管理日志 */
import styles from './index.module.scss'
import type { DatePickerProps } from 'antd';
import { Layout, DatePicker, Button, Space, Empty, List, Input, message } from 'antd'
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { InpItem } from '../publishLog';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type OperStatus = 'add' | 'edit' | ''

type PropsConfig = {
    item: InpItem
    operStatus: OperStatus
    handleOperStatus: (status: OperStatus) => void
    logList: InpItem[]
    handleLogList: (logs: InpItem[]) => void
    operId: string
    handleOperId: (id: string) => void
}

const { Header, Content, Footer } = Layout

const data: InpItem[] = [
    { key: 'logs0', id: 'logs0', content: 'Racing car sprays burning fuel into crowd.' },
    { key: 'logs1', id: 'logs1', content: 'Japanese princess to wed commoner.' },
    { key: 'logs2', id: 'logs2', content: 'Australian walks 100km after outback crash.' },
    { key: 'logs3', id: 'logs3', content: 'Man charged over missing wedding girl.' },
    { key: 'logs4', id: 'logs4', content: 'Los Angeles battles huge wildfires.' },
];

const initLog = (): InpItem[] => {
    const id = uuidv4()
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
    operId,
    handleOperId,
}: PropsConfig) => {

    const [val, setVal] = useState<string>('')

    const handleAdd = (id: string) => {
        const isHasEmpty = logList.some((v) => !v.content)
        if (isHasEmpty) {
            message.warning('添加失败，有输入框未输入内容！')
            return
        }

        handleOperStatus('add')
        
        const list = [...logList]
        const result: InpItem[] = []
        for (const v of list) {
            result.push(v)
            if (v.id === id) {
                const o = initLog()[0]
                result.push(o)
                handleOperId(o.id)
            }
        }
        handleLogList(result)
    }

    const handleDelete = (id: string) => {
        const list = logList.filter(v => v.id !== id)
        handleLogList(list)
    }

    const handleConfirm = (id: string) => {
        if (!val) {
            message.warning('日志内容不能为空哦~')
            return
        }
        const list = logList.map(v => {
            return v.id === id
                ? {
                    ...v,
                    content: val,
                }
                : v
        })
        handleLogList(list)
        handleOperId('')
    }

    const handleCancel = (id: string) => {
        const list = logList.filter(v => v.id !== id)
        handleLogList(list)
        handleOperId('')
    }

    return <>
        <List.Item className={styles.list_item}>
            {
                operId && item.id === operId
                    ? <>
                        <Input
                            allowClear
                            bordered
                            id={item.id}
                            autoFocus
                            autoComplete='off'
                            required
                            value={val}
                            onChange={e => {setVal(e.target.value)}}
                        />
                        <Space>
                            <Button type='primary' className={styles.confirm_btn}
                                onClick={() => {
                                    handleConfirm(item.id)
                                }}
                            >确认</Button>
                            <Button type='primary' danger
                                onClick={() => {
                                    handleCancel(item.id)
                                }}
                            >取消</Button>
                        </Space>
                    </>
                    : <>
                        <span>{item.content}</span>
                        <Space>
                            <Button type='primary'
                                onClick={() => {
                                    handleAdd(item.id)
                                }}
                            >增加</Button>
                            <Button type='primary' danger
                                onClick={() => {
                                    handleDelete(item.id)
                                }}
                            >删除</Button>
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
    const [operId, setOperId] = useState<string>('')

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

    const handleOperId = (id: string) => {
        setOperId(id)
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
                                operId={operId}
                                handleOperId={handleOperId}
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