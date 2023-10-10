/** 项目开发日志 */
import styles from './index.module.scss'
import { Layout } from "antd"
import { Timeline, FloatButton, Divider, Tag } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';
import { getAllLogsAPI } from '~/apis/backstage/devLogs';
import { useState, useEffect } from 'react';
import { Logo } from '~/components/logo';

const { Header, Content} = Layout

const ProjectDevLogs = () => {

    const [logs, setLogs] = useState<Record<string, any>[]>([])

    useEffect(() => { 
        const getLogs = async () => {
            const res = await getAllLogsAPI()
            if (res.code === '0') {
                const list = res.data ?? []
                const result = list.map((v: Record<string, any>) => {
                    if (v.date) {
                        return {
                            label: <Tag color="#87d068">{v.date}</Tag>,
                            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                            color: 'green',
                        }
                    } else if (v.content) {
                        return {
                            children: v.content,
                        }
                    }
                })
                setLogs(result)
            }
        }
        getLogs()
    }, [])

    return <>
        <Layout>
            <Header className={styles.top_header}>
                <div className={styles.logo_wrap}>
                    <div className={styles.logo_main}>
                        <Logo />
                    </div>
                </div>
            </Header>
            <Content className={styles.dev_log_wrap}>
                <Layout>
                    <Content className={styles.dev_log_cont}>
                        <h1 className={styles.dev_log_title}>项目开发日志</h1>
                        <ul className={styles.desc_ul}>
                            <li>🛠：表示代码重构。</li>
                            <li>💄：表示项目逻辑、结构、体验等的优化。</li>
                            <li>🆕：表示新增全新功能、模块或提供了新的技术支持。</li>
                            <li>🗑：表示废弃了一些功能或模块。</li>
                            <li>🐞：表示修复了一些bug。</li>
                        </ul>
                        <div className={styles.divider}>
                            <Divider />
                        </div>
                        <Timeline
                            style={{
                                width: '90%',
                                margin: 'auto',
                                marginTop: '5rem',
                            }}
                            mode='left'
                            items={logs}
                        />
                    </Content>
                </Layout>
            </Content>
            <FloatButton.BackTop />
        </Layout>
    </>
}

export default ProjectDevLogs