/** 项目开发日志 */
import styles from './index.module.scss'
import { Layout } from "antd"
import logoImg from '~/assets/images/logo/logo.png'
import { Timeline, FloatButton } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';

const { Header, Content} = Layout

const ProjectDevLogs = () => {
    return <>
        <Layout>
            <Header className={styles.top_header}>
                <div className={styles.logo_wrap}>
                    <a href='/' className={styles.logo}>
                        <img src={logoImg} alt="" />
                        <span>multi-app-blog</span>
                    </a>
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
                        <Timeline
                            style={{
                                width: '90%',
                                margin: 'auto',
                                marginTop: '5rem',
                            }}
                            mode='left'
                            items={[
                                {
                                    label: '2015-09-01',
                                    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                                    color: 'green',
                                },
                                ...new Array(3).fill({
                                    children: 'Technical testingxxx',
                                }),
                                {
                                    label: '2015-09-01 09:12:11',
                                    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                                    color: 'green',
                                },
                                ...new Array(5).fill({
                                    children: 'Solve initial network problems',
                                }),
                                {
                                    children: 'Technical testing',
                                },
                                {
                                    label: '2015-09-01 09:12:11',
                                    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                                    color: 'green',
                                },
                                ...new Array(2).fill({
                                    children: 'Network problems being solved',
                                }),
                            ]}
                        />
                    </Content>
                </Layout>
            </Content>
            <FloatButton.BackTop />
        </Layout>
    </>
}

export default ProjectDevLogs