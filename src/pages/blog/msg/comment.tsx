// 评论
import styles from './comment.module.scss'
import MsgCommentItem from './commentItem'

const MsgComment = () => {
    return <div className={styles.comment}>
        <ul className={styles.comment_ul}>
            {
                [1, 2, 3, 4, 5].map((_, i) => {
                    return <MsgCommentItem key={i} />
                })
            }
        </ul>
    </div>
}

export default MsgComment