/** 管理后台-静态资源管理-资源上传 */
import styles from './index.module.scss'
import { useState } from 'react';
import { List, Tabs, Divider, Button, Upload } from 'antd';
import type { UploadProps } from 'antd';
import { AndroidOutlined, AppleOutlined, UploadOutlined } from '@ant-design/icons';
import { supportData, supportType } from './supportConfig';
import type { UploadFile } from 'antd/es/upload/interface';

const ResourceUpload = () => {

    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'http://www.baidu.com/xxx.png',
        },
    ]);

    const handleChange: UploadProps['onChange'] = (info) => {
        let newFileList = [...info.fileList];
    
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        newFileList = newFileList.slice(-2);
    
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

    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange: handleChange,
        multiple: true,
    };
    
    return <>
        <List
            className={styles.ant_list}
            header={<div>同时支持如下基础上传功能：</div>}
            bordered
            dataSource={supportData}
            renderItem={(item) => (
                <List.Item>
                    <ul className={styles.custom_ul}>
                        <li>{item}</li>
                    </ul>
                </List.Item>
            )}
        />
        <Divider />
        <Tabs
            className={styles.tabs}
            defaultActiveKey="1"
            items={[AppleOutlined, AndroidOutlined, AppleOutlined].map((Icon, i) => {
                const id = String(i + 1);

                return {
                    label: (
                    <span>
                        <Icon />
                        {supportType[i]}
                    </span>
                    ),
                    key: id,
                    children: <Upload {...props} fileList={fileList}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    ,
                };
            })}
        />
    </>
}

export default ResourceUpload