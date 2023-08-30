/** 管理后台首页 */
import styles from './index.module.scss'
import React, { useState, useEffect } from "react"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button, theme, Breadcrumb } from 'antd'
import type { MenuProps } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import logoImg from '~/assets/images/logo/logo.png'
import { items } from './menuConfig';
import { transferOpenPath } from '~/utils/transferOpenPath';
import { BACKSTAGE_ROOT } from '~/config/appRoot';
import { transferSelectedPath } from '~/utils/transferSelectedPath';
import { pathname2OpenPath } from '~/utils/pathname2OpenPath';

const { Header, Sider, Content, Footer } = Layout;

const Home: React.FC = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState<string[]>()
    const [selectedKeys, setSelectedKeys] = useState<string[]>()

    const menuSelect: MenuProps['onSelect'] = (e) => {
        console.log('select: ', e.keyPath)
        setSelectedKeys(e.keyPath)
        navigate(BACKSTAGE_ROOT + e.key.replace(/_/g, '/'))
    }

    const menuOpenChange: MenuProps['onOpenChange'] = (openKeys: string[]) => {
        setOpenKeys(transferOpenPath(openKeys))
    }

    useEffect(() => {
        const path = location.pathname.replace(BACKSTAGE_ROOT, '')
        setSelectedKeys(transferSelectedPath(path))

        // console.log(pathname2OpenPath(path))
        setOpenKeys(pathname2OpenPath(path))

    }, [location.pathname])

    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className={styles.logo_img} title='Multi-App-blog'>
                        <a href="/" className={styles.logo}>
                            <img src={logoImg} alt="logo" />
                            {
                                collapsed ? null : <span className={styles.logo_text}>Multi-App-blog</span>
                            }
                        </a>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        items={items}
                        openKeys={openKeys}
                        selectedKeys={selectedKeys}
                        onSelect={menuSelect}
                        onOpenChange={menuOpenChange}
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