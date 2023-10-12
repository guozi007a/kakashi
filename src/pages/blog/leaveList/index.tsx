// 留言列表
import styles from './index.module.scss'
import Item from './Item'
import { useNavigate } from 'react-router-dom'

const BlogLeaveList = () => {
    const navigate = useNavigate()

    return <>
        <section className={styles.list}>
            <section className={styles.to_publish}
                onClick={() => {
                    navigate(`${import.meta.env.ENV_BASE}blog/leave-publish`)
                }}
            >我要留言</section>
            <ul className={styles.list_ul}>
                {
                    [1, 2, 3].map((_, i) => {
                        return <Item key={i} />
                    })
                }
            </ul>
        </section>
    </>
}

export default BlogLeaveList