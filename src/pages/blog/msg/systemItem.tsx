import styles from './systemItem.module.scss'
import AliIcon from '~/components/aliIcon'

const MsgSystemItem = () => {
    return <li className={styles.system_item}>
        <header className={styles.sys_header}>
            <div className={styles.title}>
                <p className={styles.tag}>系统消息</p>
                <p className={styles.title_mas}>这是一条系统消息的标题</p>
            </div>
            <div className={styles.others}>
                <p className={styles.date}>2023-10-13 18:06:18</p>
                <div className={styles.del}>
                    <AliIcon icon='icon-shanchu' />
                </div>
            </div>
        </header>
        <main className={styles.system_main}>系统消息详细内容~</main>
    </li>
}

export default MsgSystemItem