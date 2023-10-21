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
                            <div className={styles.work_iframe}>
                                <iframe src={v.src} scrolling='no' id={v.id}></iframe>
                            </div>
                            <p className={styles.work_name}>{v.name}</p>
                            <a href={v.src} target='_blank' className={styles.mask}></a>
                        </li>
                    })
                }
            </ul>
        </main>
    </div>
}

export default Works