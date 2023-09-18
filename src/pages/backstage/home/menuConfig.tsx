/** 侧边栏菜单配置 */
// import type { MenuProps } from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'

export interface MenuItemConfig {
    key: React.Key
    real?: string
    icon?: React.ReactNode
    label?: React.ReactNode
    children?: MenuItemConfig[]
}

export const items: MenuItemConfig[] = [
    {   
        key: 'static-resource',
        real: 'static-resource',
        icon: <VideoCameraOutlined />,
        label: '静态资源管理',
        children: [
            {   
                key: 'static-resource_upload',
                real: 'upload',
                icon: <UploadOutlined />,
                label: '资源上传',
            },
            {
                key: 'static-resource_list',
                real: 'list',
                icon: <UserOutlined />,
                label: '资源列表',
                children: [
                    {
                        key: 'static-resource_list_images',
                        real: 'images',
                        icon: <UploadOutlined />,
                        label: '图片资源',
                    },
                    {
                        key: 'static-resource_list_video',
                        real: 'video',
                        icon: <UploadOutlined />,
                        label: '音频资源',
                    },
                    {
                        key: 'static-resource_list_other',
                        real: 'other',
                        icon: <UploadOutlined />,
                        label: '其他资源'
                    },
                ]
            },
            {
                key: 'static-resource_temp-keep',
                real: 'temp-keep',
                icon: <UserOutlined />,
                label: '资源回收站',
            },
            {
                key: 'static-resource_config',
                real: 'config',
                icon: <UserOutlined />,
                label: '资源配置',
            }
        ]
    },
    {
        key: 'dev-log',
        real: 'dev-log',
        icon: <UserOutlined />,
        label: '开发日志',
        children: [
            {
                key: 'dev-log_publish-log',
                real: 'publish-log',
                icon: <UserOutlined />,
                label: '发布日志',
            },
            {
                key: 'dev-log_manage-log',
                real: 'manage-log',
                icon: <UserOutlined />,
                label: '日志管理',
            },
            // {
            //     key: 'dev-log_log-leave-message',
            //     real: 'log-leave-message',
            //     icon: <UserOutlined />,
            //     label: '日志留言',
            // }
        ]
    },
]