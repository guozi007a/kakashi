// 博客列表
import styles from './index.module.scss'
import BlogItem from '../item'

const BlogList = () => {
    return <>
        <section className={styles.list_main}>
            <ul className={styles.blog_list}>
                {
                    [1, 2, 3, 4, 5].map((_, i) => {
                        return <BlogItem key={i} />
                    })
                }
            </ul>
        </section>
    </>
}

export default BlogList