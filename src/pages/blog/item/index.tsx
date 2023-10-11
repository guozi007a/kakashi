// 博客列表展示的单项
import styles from './index.module.scss'
import { Tag } from 'antd'
import BlogItemFooter from '../itemFooter'

const BlogItem = () => {

    const handleOpen = (id: string) => {
        window.open(`${import.meta.env.ENV_BASE}blog/page/${id}`, '_blank', 'noopener,noreferrer')
    }

    return <li className={styles.article_li}>
        <div className={styles.article_content}
            onClick={() => {
                handleOpen('111')
            }}
        >
            <header className={styles.article_header}>
                <Tag color='blue'>html</Tag>
                <p className={styles.article_title}>怎么写一个html页面？怎么写一个html页面？怎么写一个html页面？怎么写一个html页面？</p>
            </header>
            <article className={styles.article_desc}>文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述文章简要描述</article>
        </div>
        <BlogItemFooter />
    </li>
}

export default BlogItem