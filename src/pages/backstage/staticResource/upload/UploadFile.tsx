/** 上传文件 */
import { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload, Layout, Switch, Space, message } from 'antd';
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

    const handleUpload = async () => {
        if (!fileList || fileList.length > 1) return
        const file = fileList[0]
        if (file.size as number <= POINT) {
            const params = {
                uid: file.uid,
            }
            const res = await uploadDirect(file, params)
            console.log('data: ', res.data)
            const { uid, path, progress } = res.data
            const list = fileList.map((v, _) => {
                return v.uid === uid
                    ? {
                        ...v,
                        url: path,
                        percent: progress,
                        status: 'done',
                    }
                    : v
            })
            console.log('list: ', list)
            setFileList(list as UploadFile[])
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
        >
            <Button icon={<UploadOutlined />}>选择文件</Button>
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
                        ? <Button type='primary' onClick={handleUpload}>开始上传</Button>
                        : null
                }
            </Header>
        </Layout>
    </>
}

export default UploadFile