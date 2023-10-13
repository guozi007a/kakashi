// 消息总数和清空
import styles from './totalCount.module.scss'

const MsgTotalCount = () => {
    return <div className={styles.msg_total}>
        <p className={styles.count}>共<span>999</span>条内容</p>
        <p className={styles.clear}>清空所有内容</p>
    </div>
}

export default MsgTotalCount