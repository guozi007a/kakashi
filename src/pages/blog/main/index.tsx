import styles from './index.module.scss'
import { AppUtils } from '~/utils/common'
import AliIcon from '~/components/aliIcon'
import { Tag } from 'antd'

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
                            return <li key={i} className={styles.article_li}>
                                <div className={styles.article_content}>
                                    <header className={styles.article_header}>
                                        <Tag color='blue'>html</Tag>
                                        <p className={styles.article_title}>怎么写一个html页面？怎么写一个html页面？怎么写一个html页面？怎么写一个html页面？怎么写一个html页面？怎么写一个html页面？</p>
                                    </header>
                                    <article className={styles.article_desc}>文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述</article>
                                </div>
                                <footer className={styles.article_footer}>
                                    <section className={styles.thumb_up} title='点赞数'>
                                        <AliIcon icon='icon-icon' />
                                        <span>2333</span>
                                    </section>
                                    <section className={styles.thumb_down} title='差评数'>
                                        <AliIcon icon='icon-chaping' />
                                        <span>666</span>
                                    </section>
                                    <section className={styles.collect} title='收藏数'>
                                        <AliIcon icon='icon-shoucang' />
                                        <span>888</span>
                                    </section>
                                    <section className={styles.talk} title='评论数'>
                                        <AliIcon icon='icon-pinglun' />
                                        <span>11.4k</span>
                                    </section>
                                    <section className={styles.date} title='发布时间'>
                                        <AliIcon icon='icon-shijian' />
                                        <span>2023-10-10 19:02:23</span>
                                    </section>
                                </footer>
                            </li>
                        })
                    }
                </ul>
            </section>
        </section>
        <section className={styles.part3}></section>
    </main>
}

export default BlogMain