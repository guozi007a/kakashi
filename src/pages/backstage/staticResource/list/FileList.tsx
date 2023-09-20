/** 文件列表组件 */
import React, { useState, useEffect } from 'react'
import { Layout, Space, Select, Switch, List, Tag, Image, Button, message, Input } from "antd";
import { InfoCircleOutlined, FieldTimeOutlined, DeleteOutlined, EditOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { queryFileListAPI, solfDeleteFileAPI, updateFileAPI } from '~/apis/backstage/source';
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
    temp: boolean
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
    const [isEditing, setIsEditing] = useState(false)
    const [initFile, setInitFile] = useState<FileInfo>({} as FileInfo)
    const [nameVal, setNameVal] = useState('')
    const [descVal, setDescVal] = useState('')

    const handleOptionChange = (value: OptionType) => {
        setOption(value)
    };

    const handleChecked = (checked: boolean) => {
        setChecked(checked)
    }

    const handlePage = (page: number) => {
        setCurrentPage(page)
    }

    const handleSolfDelete = async (uid: string) => {
        await solfDeleteFileAPI(uid)
        message.success('已移至回收站')
        const files = list.filter(v => v.uid != uid)
        setList(files)
        setCount(count - 1)
    }

    const handleStartEdit = (file: FileInfo) => {
        setIsEditing(true)
        setInitFile(file)
        setNameVal(file.name.match(/.*(?=\.\w+$)/)![0])
        setDescVal(file.describe ?? '')
    }

    const handleCancelEdit = () => {
        setIsEditing(false)
        setInitFile({} as FileInfo)
        setNameVal(initFile.name)
        setDescVal(initFile.describe || '暂无描述')
    }

    const handleFinishEdit = async () => {
        if (!nameVal) {
            message.warning('文件名不能为空')
            return
        }
        const editFile: FileInfo = {
            ...initFile,
            name: nameVal +  initFile.name.match(/\.\w+$/)![0],
            describe: descVal,
        }

        await updateFileAPI(editFile)
        setIsEditing(false)
        setInitFile({} as FileInfo)

        setList(preList => preList.map(v => {
            return v.uid == editFile.uid
                ? editFile
                : v
        }))
        
        message.success('修改成功')
    }

    useEffect(() => { 
        const getFileList = async (params: FileList) => {
            const res = await queryFileListAPI(params)
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
                    paddingLeft: '24px',
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
            <Content
                style={{
                    backgroundColor: '#fff',
                }}
            >
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
                                <Button
                                    size='small'
                                    onClick={() => {handleSolfDelete(item.uid)}}
                                >
                                    <IconText icon={DeleteOutlined} text='删除' key="delete-file" />
                                </Button>,
                                <Button
                                    size='small'
                                    disabled={isEditing}
                                    onClick={() => {
                                        !isEditing && handleStartEdit(item)
                                    }}
                                >
                                    <IconText icon={EditOutlined} text='编辑' key="edit-file" />
                                </Button>,
                                isEditing && item.uid == initFile.uid
                                    ? <Button
                                        size='small'
                                        onClick={handleFinishEdit}
                                    >
                                        <IconText icon={CheckCircleOutlined} text='编辑完成' key="edit-file-finish" />
                                    </Button>
                                    : null,
                                isEditing && item.uid == initFile.uid
                                    ? <Button
                                        size='small'
                                        onClick={handleCancelEdit}
                                    >
                                        <IconText icon={CloseCircleOutlined} text='取消编辑' key="edit-file-cancel" />
                                    </Button>
                                    : null,
                            ]}
                            style={{
                                backgroundColor: 'rgba(245, 245, 245, .72)',
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
                                title={<>
                                    {
                                        isEditing && item.uid == initFile.uid
                                            ? <Space
                                                style={{
                                                    width: '100%',
                                                }}
                                                styles={{
                                                    item: {
                                                        minWidth: '50%',
                                                    }
                                                }}
                                            >
                                                <Input
                                                    value={nameVal}
                                                    autoFocus
                                                    onChange={e => {
                                                        setNameVal(e.target.value)
                                                    }}
                                                />
                                                <Tag color='#55acee'>{item.name.match(/\.\w+$/)![0]}</Tag>
                                            </Space>
                                            : <a href={`${import.meta.env.ENV_PREFIX}/static/${category}/${item.name}`} target='_blank'>{item.name}</a>
                                    }
                                </>}
                                description={<>
                                    <Space
                                        style={{
                                            width: '100%',
                                        }}
                                        styles={{
                                            item: {
                                                minWidth: '50%',
                                            }
                                        }}
                                    >
                                        {
                                            isEditing && item.uid == initFile.uid
                                                ? <Input
                                                    value={descVal}
                                                    onChange={e => {setDescVal(e.target.value)}}
                                                />
                                                : <span>{item.describe || '暂无描述'}</span>
                                        }
                                    </Space>
                                </>}
                            />
                        </List.Item>
                    )}
                />
            </Content>
        </Layout>
    </>
}

export default FileList
