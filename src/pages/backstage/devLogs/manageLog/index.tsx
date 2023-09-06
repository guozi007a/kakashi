/** 管理后台-开发日志-管理日志 */
import styles from './index.module.scss'
import type { DatePickerProps } from 'antd';
import { Layout, DatePicker, Button, Space, Empty, List, Input, message, Popconfirm, Tooltip } from 'antd'
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { InpItem } from '../publishLog';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDateLogsAPI, clearDateLogsAPI, clearAllLogsAPI, updateDateLogsAPI } from '~/apis/backstage/devLogs';


type PropsConfig = {
    item: InpItem
    logList: InpItem[]
    handleLogList: (logs: InpItem[]) => void
    operId: string
    handleOperId: (id: string) => void
}

const { Header, Content, Footer } = Layout

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
        setVal('')
        message.success('开始新增日志~')
    }

    const handleDelete = (id: string) => {
        const list = logList.filter(v => v.id !== id)
        handleLogList(list)
        message.success('删除成功~')
        id === operId && handleOperId('')
    }

    const handleEdit = (id: string) => {
        const isHasEmpty = logList.some((v) => !v.content)
        if (isHasEmpty) {
            message.error('存在空输入框，请不要进行编辑操作！')
            return
        }
        handleOperId(id)
        const o: InpItem = logList.find(v => v.id === id) ?? ({} as InpItem)
        setVal(o.content as string)
        message.success('开始编辑日志~')
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
        message.success('操作成功~')
    }

    const handleCancel = (id: string) => {
        const list = logList.filter(v => v.id !== id)
        handleLogList(list)
        handleOperId('')
        message.success('成功取消更新日志~')
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
                            <Button type='primary' className={styles.edit_btn}
                                onClick={() => {
                                    handleEdit(item.id)
                                }}
                            >编辑</Button>
                        </Space>
                    </>
            }
        </List.Item>
    </>
}

const ManageLog = () => {

    const [logList, setLogList] = useState<InpItem[]>([])
    const [operId, setOperId] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const onChange: DatePickerProps['onChange'] = (_, dateString) => {
        setDate(dateString)
    };

    const handleReset = async () => {
        const res = await getDateLogsAPI(date)
        setLogList(res.data)
        setOperId('')
        if (res.data.length) {
            message.success('日志列表已重置')
        } else {
            message.success('该日没有日志哦~')
        }
    }


    const handleLogList = (logs: InpItem[]) => {
        setLogList(logs)
    }

    const handleOperId = (id: string) => {
        setOperId(id)
    }

    const handleClearEmpty = async () => {
        if (!date) {
            message.warning('日期不能为空')
            return
        }
        await clearDateLogsAPI(date)
        message.success('当日日志已清空')
        setLogList([])
        operId && setOperId('')
    }

    const handleRemoveAllLogs = async () => {
        await clearAllLogsAPI()
        setLogList([])
        message.success('已清空所有日志')
        operId && setOperId('')
    }

    const handleSearch = async () => {
        if (!date) {
            message.warning('缺少参数: date')
            return
        }
        const res = await getDateLogsAPI(date)
        setLogList(res.data)
        if (res.data.length) {
            message.success('查询成功')
        } else {
            message.success('该日没有日志哦~')
        }
    }

    const submitUpdate = async () => {
        if (!(date && logList && logList.length)) {
            message.warning('缺少必要参数')
            return
        }
        if (operId) {
            message.warning('新增或编辑中，无法提交更新~')
            return
        }
        await updateDateLogsAPI(date, logList)
        message.success('更新成功~')
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
                    <Button type='primary'
                        onClick={handleSearch}
                    >查询</Button>
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
                                logList={logList}
                                handleLogList={handleLogList}
                                operId={operId}
                                handleOperId={handleOperId}
                            />}
                            rowKey={(item) => item.key}
                        />
                        : <Empty />
                }
            </Content>
            {
                logList && logList.length
                    ? <>
                        <Footer className={styles.footer}>
                            <Space>
                                <Tooltip
                                    placement="topRight"
                                    title="在将增加、删除、编辑等操作提交更新之前，都可以通过重置列表来让列表恢复到修改前的状态"
                                >
                                    <Button type='primary' onClick={handleReset}>重置列表</Button>
                                </Tooltip>
                                <Button type='primary' onClick={handleClearEmpty}>清空列表</Button>
                                <Popconfirm
                                    title="*注意"
                                    description="删除全部日志的操作，将会清除所有项目的全部开发日志记录，你确定要继续吗？"
                                    onConfirm={handleRemoveAllLogs}
                                    // onCancel={cancel}
                                    okText="确定"
                                    cancelText="取消"
                                >
                                    <Button type='primary' danger>删除全部日志</Button>
                                </Popconfirm>
                            </Space>
                        </Footer>
                        <Footer className={`${styles.footer} ${styles.summit_wrap}`}>
                            <Tooltip
                                placement="bottom"
                                title="增加、删除、编辑等三种方式，都需要提交更新，以完成最终操作"
                            >
                        <Button type='primary' className={styles.submit} onClick={submitUpdate}>提交更新</Button>
                        </Tooltip>
                        </Footer>
                    </>
                    : null
            }
        </Layout>
    </>
}

export default ManageLog