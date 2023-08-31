/** 管理后台首页 */
import styles from './index.module.scss'
import { useState, useEffect } from "react"
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
import { BACKSTAGE_ROOT, BACKSTAGE_ROUTE } from '~/config/appRoot';
import { transferSelectedPath } from '~/utils/transferSelectedPath';
import { pathname2OpenPath } from '~/utils/pathname2OpenPath';
import { selectKey2Position } from '~/utils/selectKey2Position';

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
        // console.log('select: ', e.key)
        setSelectedKeys(e.keyPath.reverse())
        navigate(BACKSTAGE_ROOT + e.key.replace(/_/g, '/'))
    }

    const menuOpenChange: MenuProps['onOpenChange'] = (openKeys: string[]) => {
        setOpenKeys(transferOpenPath(openKeys))
    }

    const handleCollapse = () => {
        setCollapsed(!collapsed)
        // 解决菜单被collapse按钮折叠后，openKeys会被清空的问题
        if (collapsed) {
            let timer = 0
            // 增加延时，优化展示效果。官方文档默认subMenuCloseDelay时间是0.1s，所以这里给定时间为100ms，达到同步效果
            timer = window.setTimeout(() => {
                clearTimeout(timer)
                setOpenKeys(JSON.parse(sessionStorage.getItem('collapse') ?? '[]'))
            }, 100)
        } else {
            sessionStorage.setItem('collapse', JSON.stringify(openKeys))
        }
    }

    useEffect(() => {
        // 根路径可能是'/backstage'，这里需要判断后再转换
        const path = location.pathname === BACKSTAGE_ROUTE
            ? location.pathname.replace(BACKSTAGE_ROUTE, '')
            : location.pathname.replace(BACKSTAGE_ROOT, '')
        setSelectedKeys(transferSelectedPath(path))
        setOpenKeys(pathname2OpenPath(path))

    }, [location.pathname])

    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                >
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
                            onClick={handleCollapse}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Breadcrumb
                        style={{
                            margin: '10px 16px 0 16px',
                        }}
                        items={selectedKeys && selectKey2Position(selectedKeys.at(-1))}
                    />
                    <Content
                        style={{
                            margin: '10px 16px 0 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: 4,
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