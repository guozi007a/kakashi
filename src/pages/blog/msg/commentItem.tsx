import styles from './commentItem.module.scss'
import AliIcon from '~/components/aliIcon'

const MsgCommentItem = () => {
    return <li className={styles.comment_item}>
        <div className={styles.part1}>
            <div className={styles.avatar_wrap}>
                <div className={styles.avatar}>
                    <img src={import.meta.env.ENV_IMAGE_PATH + 'temp-avatar.png'} alt="" />
                </div>
            </div>
            <main className={styles.item_main}>
                <p className={styles.comment_user}>
                    <span>谁回复的评论</span>
                    <strong>回复了你的评论</strong>
                    {/* <strong>评论了你的文章</strong> */}
                </p>
                <p className={styles.comment_content}>
                    <strong>回复了什么内容</strong>
                </p>
                <p className={styles.comment_relative}>在哪篇文章下回复的</p>
            </main>
        </div>
        <div className={styles.part2}>
            <div className={styles.del_wrap}>
                <div className={styles.del}>
                    <AliIcon icon='icon-shanchu' />
                </div>
            </div>
            <p className={styles.date}>2023-10-13 17:29:53</p>
        </div>
    </li>
}

export default MsgCommentItem