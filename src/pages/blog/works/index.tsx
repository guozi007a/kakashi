// 我的作品
import styles from './index.module.scss'
import { myWorks } from '../config'

const Works = () => {
    return <div className={styles.works}>
        <main className={styles.works_main}>
            <ul className={styles.works_ul}>
                {
                    myWorks.map((v) => {
                        return <li key={v.id} className={styles.work}>
                            <div className={styles.work_logo}>
                                <img src={v.logo} alt="" />
                            </div>
                            <div className={styles.work_content}>
                                <p className={styles.work_title}>
                                    <span>{v.title}</span>
                                    <a href={v.url} target='_blank' title='项目地址' className={styles.to_work}>
                                        <img src={import.meta.env.ENV_IMAGE_PATH + 'github-mini-logo.png'} alt="" />
                                    </a>
                                </p>
                                <p className={styles.desc}>{v.describe}</p>
                                <a href={v.href} className={styles.to_page} target='_blank'>进入页面</a>
                            </div>
                        </li>
                    })
                }
            </ul>
        </main>
    </div>
}

export default Works