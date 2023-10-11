// 博客首页主体
import styles from './index.module.scss'
import { AppUtils } from '~/utils/common'
import BlogItem from '../item'

const BlogMain = () => {

    return <main className={styles.main}>
        <section className={styles.part1}>
            <section className={styles.avatar}>
                <img src={AppUtils.serverImg('temp-avatar.png')} alt="" />
            </section>
            <p className={styles.nick}>guozi007a(小拽)</p>
        </section>
        <section className={styles.part2}>
            <p className={styles.title}>最新文章(15)</p>
            <section className={styles.articles}>
                <ul className={styles.article_ul}>
                    {
                        new Array(10).fill({}).map((_, i) => {
                            return <BlogItem key={i} />
                        })
                    }
                </ul>
            </section>
        </section>
        <section className={styles.part3}></section>
    </main>
}

export default BlogMain