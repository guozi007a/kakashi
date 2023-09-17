/** 文件列表组件 */
import React, { useState, useEffect } from 'react'
import { Layout, Space, Select, Switch, List, Tag, Image, Button } from "antd";
import { InfoCircleOutlined, FieldTimeOutlined, DeleteOutlined } from '@ant-design/icons';
import { queryFileList } from '~/apis/backstage/source';
import type { FileList } from '~/apis/backstage/source';
import { transferFileSize } from '~/utils/transferFileSize';
import dayjs from 'dayjs';

type OptionType = 'date' | 'size'

interface PropsType {
    category: string
}

interface FileInfo {
    id: number
    uid: string
    name: string
    date: number
    category: string
    size: number
    describe: string
}

const { Header, Content } = Layout

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space
        style={{
            fontSize: '12px',
        }}
    >
      {React.createElement(icon)}
      {text}
    </Space>
);

const FileList = ({ category }: PropsType) => {
    const [option, setOption] = useState<OptionType>('date')
    const [checked, setChecked] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)
    const [list, setList] = useState<FileInfo[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)

    const handleOptionChange = (value: OptionType) => {
        setOption(value)
    };

    const handleChecked = (checked: boolean) => {
        setChecked(checked)
    }

    const handlePage = (page: number) => {
        setCurrentPage(page)
        console.log('page: ', page)
    }

    useEffect(() => { 
        const getFileList = async (params: FileList) => {
            const res = await queryFileList(params)
            setCount(res.data.count ?? 0)
            setList(res.data.fileList ?? [])
        }
        const params = {
            category,
            option,
            sortType: checked,
            pageSize: 20,
            start: (currentPage - 1) * 20, // 搜索是从0开始的
        }
        getFileList(params)
    }, [option, checked, currentPage])
    
    return <>
        <Layout>
            <Header
                style={{
                    backgroundColor: '#fff',
                }}
            >
                <Space
                    size={20}
                >
                    <h3>列表规则：</h3>
                    <Select
                        value={option}
                        style={{ width: 120 }}
                        onChange={handleOptionChange}
                        options={[
                            { value: 'date', label: '按上传时间' },
                            { value: 'size', label: '按文件大小' },
                        ]}
                    />
                    <Switch
                        checkedChildren="升序"
                        unCheckedChildren="降序"
                        checked={checked}
                        onChange={handleChecked}
                    />
                    <Tag color="#87d068">共{count}条</Tag>
                </Space>
            </Header>
            <Content>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: handlePage,
                        pageSize: 20,
                        align: 'center',
                        current: currentPage,
                        hideOnSinglePage: true,
                    }}
                    style={{
                        backgroundColor: '#fff',
                    }}
                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item
                            key={item.uid}
                            actions={[
                                <IconText icon={InfoCircleOutlined} text={`${transferFileSize(item.size)}`} key="list-vertical-like-o" />,
                                <IconText icon={FieldTimeOutlined} text={`${dayjs(item.date).format('YYYY-MM-DD HH:mm:ss')}`} key="list-vertical-message" />,
                                <Button>
                                    <IconText icon={DeleteOutlined} text='删除' key="delete-file" />
                                </Button>
                            ]}
                            style={{
                                backgroundColor: 'var(--gray-3)',
                                marginBottom: '10px',
                                borderRadius: '6px',
                            }}
                            extra={
                                category == 'image' ?
                                <Image
                                        src={`${import.meta.env.ENV_PREFIX}/static/${category}/${item.name}`}
                                        style={{
                                            maxWidth: 128,
                                            maxHeight: 128,
                                            borderRadius: '6px',
                                        }}
                                /> : ''
                            }
                        >
                            <List.Item.Meta
                                title={<a href={`${import.meta.env.ENV_PREFIX}/static/${category}/${item.name}`} target='_blank'>{item.name}</a>}
                                description={item.describe || '暂无描述'}
                            />
                        </List.Item>
                    )}
                />
            </Content>
        </Layout>
    </>
}

export default FileList