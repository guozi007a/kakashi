/** 管理后台首页 */
import { useState } from "react"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, theme, Breadcrumb } from 'antd'
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

const Home = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate()

    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical"
                        style={{
                            height: '32px',
                            margin: '16px',
                            backgroundColor: 'rgba(255,255,255,.2)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            navigate('/')
                        }}
                    />
                    <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
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
                        }
                    ]}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    </Header>
                    <Breadcrumb
                        style={{
                            margin: '16px 16px 0 16px',
                        }}
                        items={[
                            {
                                title: '当前位置：'
                            },
                            {
                                title: 'Home',
                            },
                            {
                                title: <a href="">List</a>,
                            },
                            {
                                title: <a href="">App</a>,
                            },
                            {
                                title: 'Usage',
                            },
                        ]}
                    />
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <span>Backstage ©2023 Create by github/guozi007a</span>
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default Home