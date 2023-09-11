/** 上传文件 */
import { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload, Layout, Switch, Space, message, Progress, Tag } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import { uploadDirect } from '~/apis/backstage/source';
import { POINT } from './uploadConfig';

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

        console.log('info: ', info)
    
    
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

    const handleUpload = async (fileList: UploadFile[]): Promise<void> => {
        if (!fileList || !fileList.length) return
        for (const file of fileList) {
            // 如果文件小于断点值，就直接上传，不做分片上传。
            if (file.size as number <= POINT) {
                const params = { uid: file.uid, }
                const res = await uploadDirect(file, params)
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
                        // success表示已经完成的进度
                        success={{ percent: file.percent ?? 0, strokeColor: '#52c41a' }}
                    />
                </>
            }}
            onRemove={handleRemove}
        >
            <Space>
                <Button icon={<UploadOutlined />}>选择文件</Button>
                <Tag color="#2db7f5">已选择：{fileList.length}个</Tag>
                <Tag color="#87d068">已完成：{fileList.filter(v => v.percent == 100).length}个</Tag>
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