/** 上传文件 */
import { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload, Layout, Switch, Space, message, Progress, Tag } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import { uploadDirectAPI, preUploadFileAPI, uploadChunkAPI, mergeChunksAPI } from '~/apis/backstage/source';
import { POINT_100KB, POINT_1M, CHUNKSIZE_100KB, CHUNKSIZE_1MB } from './uploadConfig';

const { Header } = Layout

const UploadFile = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    // Upload组件默认是选择文件后自动发送上传请求的，但是实际情况下，并不需要这么做。
    // 一般的，我们选择文件后，都会点击上传按钮后才开始发送上传请求。
    // 所以我们通过return false来阻止自动发送上传请求的行为。
    const handleBeforUpload = () => {
        return false
    }
    
    const handleFilesChange: UploadProps['onChange'] = (info) => {
        let newFileList = [...info.fileList];

        // 2. Read from response and show file link
        newFileList = newFileList.map((file) => {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
          }
          return file;
        });
    
        setFileList(newFileList);
    };

    const handleSwitchChange = (checked: boolean) => {
        setChecked(checked)
        checked
            ? message.success('已开启上传目录功能')
            : message.warning('已关闭上传目录功能')
    }

    const handleRemove = (file: UploadFile) => {
        message.success(`${file.name}已移除！`)
    }

    const handleRemoveAllDone = () => {
        const list = fileList.filter(v => v.percent != 100)
        setFileList(list)
    }

    // 预传
    const handlePreUpload = async (file: UploadFile) => {
        if (file.percent == 100) return
        const formData = new FormData()
        formData.append("file", file.originFileObj!)
        formData.append("uid", file.uid)
        formData.append("type", file.type!)
        await preUploadFileAPI(formData)
        await new Promise((resolve) => setTimeout(resolve, 60))
        handleChunkUpload(file)
    }

    // 分片上传
    const handleChunkUpload = async (file: UploadFile) => {
        let CHUNK_SIZE: number

        const size = file.size!
        const newFile = file.originFileObj!

        if (size <= POINT_1M) {
            CHUNK_SIZE = CHUNKSIZE_100KB
        } else {
            CHUNK_SIZE = CHUNKSIZE_1MB
        }

        const TOTAL = Math.ceil(size / CHUNK_SIZE)
        let currentChunk = 1 // 切片序号

        while (currentChunk <= TOTAL) {
            const formData = new FormData()
            let chunkData

            // 如果是最后一个切片，就按照切片的实际大小传递给后端。因为最后一个切片的实际大小通常会小于CHUNK_SIZE
            // 这样传递的数据更精确，也更节省资源
            if (currentChunk == TOTAL) {
                chunkData = newFile.slice(CHUNK_SIZE * (TOTAL - 1))
            } else {
                chunkData = newFile.slice(CHUNK_SIZE * (currentChunk - 1), CHUNK_SIZE * currentChunk)
            }

            formData.append("chunk", chunkData)
            formData.append("currentChunk", currentChunk + "")

            const res = await uploadChunkAPI(formData)
            
            setFileList(preFileList => preFileList.map(v => {
                return v.uid == res.data.uid
                    ? {
                        ...v,
                        percent: Math.floor(res.data.sort / TOTAL * 100)
                    }
                    : v
            }))
            
            await new Promise((resolve) => setTimeout(resolve, 50))

            // 全部切片上传完成后，开始合并切片
            if (currentChunk == TOTAL) {
                message.success('上传完成，开始合并')
                const res = await mergeChunksAPI()
                setFileList(preFileList => preFileList.map(v => {
                    return v.uid == res.data.uid
                        ? {
                            ...v,
                            percent: 100,
                            url: res.data.path,
                        }
                        : v
                }))
                message.success('完成合并，上传成功')
                return
            }

            currentChunk++
        }
    }

    // 上传列表中的文件
    const handleUpload = async (fileList: UploadFile[]): Promise<void> => {
        if (!fileList || !fileList.length) return
        fileList = fileList.filter(v => v.percent != 100)
        if (!fileList.length) {
            message.warning('选择的文件都已完成上传！')
            return
        }
        for (const file of fileList) {
            // 如果文件小于断点值，就直接上传，不做分片上传。
            if (file.size as number <= POINT_100KB) {
                // 创建直传参数
                const formData = new FormData()
                formData.append("file", file.originFileObj!)
                formData.append("uid", file.uid)
                formData.append("type", file.type!)
                // 开始直传
                const res = await uploadDirectAPI(formData)
                message.success('上传完成！')
                const { uid, path, progress } = res.data
                // 使用函数式更新，确保每次可以即时更新为最新的上传进度
                setFileList((preFileList: UploadFile[]) => preFileList.map((v, _) => {
                    return v.uid === uid
                        ? { ...v, url: path,  percent: progress, }
                        : v
                }))

                // 当前请求完成后，过120ms再进行下一个请求。因为for...of会等待Promise执行完毕，再继续执行。
                // 在这里插入Promise语句，该语句过120ms后才会执行，上面的请求成功后，先等待了120ms
                await new Promise((resolve) => setTimeout(resolve, 120))
            } else {
                handlePreUpload(file)
            }
        }
    }
    
    return <>
        <Layout>
            <Header
                style={{
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    padding: 0,
                }}
            >
                <h2>上传文件</h2>
                <Space>
                    <span style={{fontSize: '12px'}}>我要上传文件夹：</span>
                    <Switch
                        checkedChildren="开启"
                        unCheckedChildren="关闭"
                        defaultChecked={false}
                        onChange={handleSwitchChange}
                    />
                </Space>
            </Header>
        </Layout>
        <Upload
            name='upfile'
            multiple
            onChange={handleFilesChange}
            fileList={fileList}
            directory={checked}
            listType='picture'
            beforeUpload={handleBeforUpload}
            // beforeUpload被return false阻止后，Upload组件自带进度条就无效了，此处自定义一个进度条显示进度
            itemRender={(originNode: React.ReactElement, file: UploadFile) => {
                return <>
                    {originNode}
                    <Progress
                        percent={file.percent ?? 0}
                        status={file.percent! < 100 ? 'active' : 'success'}
                    />
                </>
            }}
            onRemove={handleRemove}
        >
            <Space>
                <Button icon={<UploadOutlined />}>选择文件</Button>
                <Space
                    onClick={(e) => {
                        // 解决点击标签也会触发打开上传弹框的bug
                        e.preventDefault()
                        e.stopPropagation()
                    }}
                >
                    <Tag color="#2db7f5">已选择：{fileList.length}个</Tag>
                    <Tag color="#87d068">已完成：{fileList.filter(v => v.percent == 100).length}个</Tag>
                    {
                        fileList.some(v => v.percent == 100)
                            ? <Button type='primary' onClick={handleRemoveAllDone}>一键移除已上传</Button>
                            : null
                    }
                </Space>
            </Space>
        </Upload>
        <Layout
            style={{
                backgroundColor: '#fff',
                paddingTop: '24px',
            }}
        >
            <Header
                style={{
                    backgroundColor: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {
                    fileList && fileList.length
                        ? <Button type='primary' onClick={() => {handleUpload(fileList)}}>开始上传</Button>
                        : null
                }
            </Header>
        </Layout>
    </>
}

export default UploadFile