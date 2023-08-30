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
                key: 'upload',
                icon: <UploadOutlined />,
                label: '资源上传',
            },
            {
                key: 'list',
                icon: <UserOutlined />,
                label: '资源列表',
                children: [
                    {
                        key: 'images',
                        icon: <UploadOutlined />,
                        label: '图片',
                    },
                    {
                        key: 'video',
                        icon: <UploadOutlined />,
                        label: '音频',
                    },
                    {
                        key: 'other',
                        icon: <UploadOutlined />,
                        label: '其他资源'
                    },
                ]
            },
            {
                key: 'temp-keep',
                icon: <UserOutlined />,
                label: '临时资源',
                children: [
                    {
                        key: 'test1',
                        icon: <UploadOutlined />,
                        label: '测试路由1'
                    },
                    {
                        key: 'test2',
                        icon: <UploadOutlined />,
                        label: '测试路由2'
                    },
                ]
            },
            {
                key: 'config',
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
                key: 'publish-log',
                icon: <UserOutlined />,
                label: '发布日志',
            },
            {
                key: 'manage-log',
                icon: <UserOutlined />,
                label: '日志管理',
            },
            // {
            //     key: 'log-leave-message',
            //     icon: <UserOutlined />,
            //     label: '日志留言',
            // }
        ]
    },
]