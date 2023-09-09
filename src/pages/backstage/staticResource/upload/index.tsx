/** 管理后台-静态资源管理-资源上传 */
import styles from './index.module.scss'
import { List } from 'antd';
import { supportData } from './supportConfig';

const ResourceUpload = () => {

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
    </>
}

export default ResourceUpload