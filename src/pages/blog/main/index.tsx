import styles from './index.module.scss'
import { AppUtils } from '~/utils/common'

const BlogMain = () => {
    return <main className={styles.main}>
        <section className={styles.part1}>
            <section className={styles.avatar}>
                <img src={AppUtils.serverImg('')} alt="" />
            </section>
        </section>
        <section className={styles.part2}></section>
        <section className={styles.part3}></section>
    </main>
}

export default BlogMain