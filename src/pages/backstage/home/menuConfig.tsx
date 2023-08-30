/** 侧边栏菜单配置 */
import type { MenuProps } from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'


export const items: MenuProps['items'] = [
    {   
        key: 'static-resource',
        icon: <VideoCameraOutlined />,
        label: '静态资源管理',
        children: [
            {   
                key: 'static-resource_upload',
                icon: <UploadOutlined />,
                label: '资源上传',
            },
            {
                key: 'static-resource_list',
                icon: <UserOutlined />,
                label: '资源列表',
                children: [
                    {
                        key: 'static-resource_list_images',
                        icon: <UploadOutlined />,
                        label: '图片',
                    },
                    {
                        key: 'static-resource_list_video',
                        icon: <UploadOutlined />,
                        label: '音频',
                    },
                    {
                        key: 'static-resource_list_other',
                        icon: <UploadOutlined />,
                        label: '其他资源'
                    },
                ]
            },
            {
                key: 'static-resource_temp-keep',
                icon: <UserOutlined />,
                label: '临时资源',
                children: [
                    {
                        key: 'static-resource_temp-keep_test1',
                        icon: <UploadOutlined />,
                        label: '测试路由1'
                    },
                    {
                        key: 'static-resource_temp-keep_test2',
                        icon: <UploadOutlined />,
                        label: '测试路由2'
                    },
                ]
            },
            {
                key: 'static-resource_config',
                icon: <UserOutlined />,
                label: '资源配置',
            }
        ]
    },
    {
        key: 'dev-log',
        icon: <UserOutlined />,
        label: '开发日志',
        children: [
            {
                key: 'dev-log_publish-log',
                icon: <UserOutlined />,
                label: '发布日志',
            },
            {
                key: 'dev-log_manage-log',
                icon: <UserOutlined />,
                label: '日志管理',
            },
            // {
            //     key: 'dev-log_log-leave-message',
            //     icon: <UserOutlined />,
            //     label: '日志留言',
            // }
        ]
    },
]