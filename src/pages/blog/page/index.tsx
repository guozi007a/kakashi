// 单篇博客页面
import styles from './index.module.scss'
import { Tag } from 'antd'
import AliIcon from '~/components/aliIcon'
import BlogItemFooter from '../itemFooter'

const BlogPage = () => {
    return <>
        <section className={styles.page}>
            <p className={styles.title}>这是一个标题</p>
            <section className={styles.article_msg}>
                <Tag>html</Tag>
                <section className={styles.modify} title='最近修改时间'>
                    <AliIcon icon='icon-shijian1' />
                    <span>2023-10-11 15:01:23</span>
                </section>
            </section>
            <article>
                这是文章内容
            </article>
            <BlogItemFooter />
        </section>
    </>
}

export default BlogPage