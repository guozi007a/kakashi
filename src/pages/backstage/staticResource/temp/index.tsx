/** 管理后台-静态资源管理-临时资源 */
import React, { useState, useEffect } from 'react'
import { Table, Tag, Button, Space, Layout, message } from "antd"
import type { ColumnsType } from 'antd/es/table';
import { transferFileSize } from "~/utils/transferFileSize";
import dayjs from 'dayjs'
import { queryTempFilesAPI, restitutionTempFilesAPI, deleteThoroughTempFilesAPI } from '~/apis/backstage/source';
import type { TempType as DataType } from '~/apis/backstage/source';

const { Header } = Layout

const cateColors: Record<string, string> = {
    'image': '#87d068',
    'av': '#2db7f5',
    'other': '#3b5999',
}

const ResourceTemp = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [selectedRows, setSelectedRows] = useState<DataType[]>([])
    const [tempFiles, setTempFiles] = useState<DataType[]>([])
    const [count, setCount] = useState(0)

    const columns: ColumnsType<DataType> = [
        {
            title: '文件名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <span>{text}</span>,
        },
        {
            title: '描述',
            dataIndex: 'describe',
            key: 'describe',
            render: (text) => <span>{text || '暂无描述'}</span>,
        },
        {
            title: '大小',
            dataIndex: 'size',
            key: 'size',
            render: (text) => <span>{transferFileSize(text)}</span>,
        },
        {
            title: '时间',
            dataIndex: 'date',
            key: 'date',
            render: (text) => <span>{dayjs(text).format("YYYY-MM-DD HH:mm:ss")}</span>,
        },
        {
            title: '类别',
            dataIndex: 'category',
            key: 'category',
            render: (text) => <Tag color={cateColors[text]}>{text}</Tag>,
        },
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: () => <Space>
                <Button type="primary" size="small" onClick={() => {restitution(selectedRowKeys as string[])}}>还原</Button>
                <Button danger size="small" onClick={() => {deleteTemp(selectedRows)}}>删除</Button>
            </Space>,
        },
    ]

    const reSelect = () => {
        setSelectedRowKeys([]);
        setSelectedRows([])
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        // console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
        // console.log('selectedRows: ', selectedRows)
        setSelectedRows(selectedRows)
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        columnWidth: 0.3, // 设置选择框这一列的宽度，改小一点
    };

    const restitution = async (uids: string[]) => {
        if (!uids || !uids.length) {
            message.warning('请先选择')
            return
        }
        await restitutionTempFilesAPI(uids)

        setCount(count - uids.length)

        const list: DataType[] = []

        for (const item of tempFiles) {
            if (!uids.includes(item.uid)) {
                list.push(item)
            }
        }
        setTempFiles(list)

        message.success('还原成功!')

        // 要重置一次，不然会报错
        reSelect()
    }

    const deleteTemp = async (temps: DataType[]) => {
        if (!temps || !temps.length) {
            message.warning('请先选择')
            return
        }

        await deleteThoroughTempFilesAPI(temps)

        setCount(count - temps.length)

        const list: DataType[] = []

        for (const item of tempFiles) {
            if (!temps.some(v => v.uid == item.uid)) {
                list.push(item)
            }
        }
        setTempFiles(list)

        message.success('清除成功!')

        // 要重置一次，不然会报错
        reSelect()
    }

    useEffect(() => { 
        const getTempFiles = async () => {
            const res = await queryTempFilesAPI()
            setTempFiles(res.data.fileList)
            setCount(res.data.count)
        }
        getTempFiles()
    }, [])

    return <>
        <Layout>
            <Header
                style={{
                    backgroundColor: '#fff',
                    paddingLeft: 0,
                }}
            >
                <Space>
                    <h3>批量操作：</h3>
                    <Button onClick={reSelect} disabled={!selectedRowKeys.length}>重新选择</Button>
                    <Button type="primary" onClick={() => {restitution(selectedRowKeys as string[])}}>一键还原</Button>
                    <Button danger onClick={() => {deleteTemp(selectedRows)}}>一键清理</Button>
                    <Tag color='#87d068'>临时文件总数：{count}</Tag>
                    <Tag color='#55acee'>已选择数量：{selectedRowKeys.length}</Tag>
                </Space>
            </Header>
        </Layout>
        <Table
            bordered
            rowSelection={rowSelection}
            columns={columns}
            dataSource={tempFiles}
            pagination={false}
            // virtual // antd@5.91新增，有bug
            // virtual
            // scroll={{
            //     x: '100%',
            //     y: 750,
            // }}
            rowKey={(record) => record.uid}
        />
    </>
}

export default ResourceTemp