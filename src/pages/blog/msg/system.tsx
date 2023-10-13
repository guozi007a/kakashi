import styles from './system.module.scss'
import MsgSystemItem from './systemItem'

const MsgSystem = () => {
    return <div className={styles.system}>
        <ul className={styles.system_ul}>
            {
                [1, 2, 3, 4].map((_, i) => {
                    return <MsgSystemItem key={i} />
                })
            }
        </ul>
    </div>
}

export default MsgSystem