/** 管理后台首页 */
import styles from './index.module.scss'
import { useState, useEffect, useRef } from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Menu, Button, theme, Breadcrumb, ConfigProvider } from 'antd'
import type { MenuProps } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import { items } from './menuConfig';
import { transferOpenPath } from '~/utils/transferOpenPath';
import { BACKSTAGE_ROOT, BACKSTAGE_ROUTE, BACKSTAGE_PATH } from '~/config/appRoot';
import { transferSelectedPath } from '~/utils/transferSelectedPath';
import { pathname2OpenPath } from '~/utils/pathname2OpenPath';
import { selectKey2Position } from '~/utils/selectKey2Position';
import Scrollbars from 'react-custom-scrollbars-2'
import zhCN from 'antd/locale/zh_CN';
import { AppUtils } from '~/utils/common';

const { Header, Sider, Content, Footer } = Layout;

const Home: React.FC = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState<string[]>()
    const [selectedKeys, setSelectedKeys] = useState<string[]>()
    const scrollRef = useRef<Scrollbars>(null)
    const [backupVisible, setBackupVisible] = useState(false)

    const menuSelect: MenuProps['onSelect'] = (e) => {
        setSelectedKeys(e.keyPath.reverse())
        navigate(BACKSTAGE_PATH + e.key.replace(/_/g, '/'))
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
        const pathname = location.pathname
        const path = pathname === BACKSTAGE_ROUTE
            ? pathname.replace(BACKSTAGE_ROUTE, '')
            : pathname.replace(BACKSTAGE_ROOT, '')
        setSelectedKeys(transferSelectedPath(path))
        setOpenKeys(pathname2OpenPath(path))

    }, [location.pathname])

    return (
        <ConfigProvider locale={zhCN}>
            <Layout
                style={{
                    height: '100%',
                    minHeight: '100vh',
                }}
            >
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                >
                    <div className={styles.logo_img} title='Multi-App-blog'>
                        <a href={import.meta.env.ENV_BASE} className={styles.logo}>
                            <img src={AppUtils.serverImg('logo.png')} alt="logo" />
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
                            margin: '0 16px',
                            height: '32px',
                            lineHeight: '32px',
                        }}
                        items={selectedKeys && selectKey2Position(selectedKeys.at(-1))}
                    />
                    <div className={styles.show_main}>
                        <Scrollbars
                            autoHide
                            ref={scrollRef}
                            onScroll={() => {
                                if (scrollRef.current) {
                                    const { scrollTop } = scrollRef.current.getValues();
                                    setBackupVisible(scrollTop >= 300)
                                }
                            }}
                        >
                            <Content
                                style={{
                                    margin: '0 16px',
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
                        </Scrollbars>
                        <div className={`${styles.back_up} ${backupVisible ? styles.active : ''}`} title='回到顶部'
                            onClick={() => {
                                scrollRef.current && scrollRef.current.scrollToTop()
                            }}
                        >
                            <img src={AppUtils.serverImg('back-up.jpg')} alt="" />
                        </div>
                    </div>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}

export default Home