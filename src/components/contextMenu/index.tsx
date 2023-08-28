/** 首页右键弹框 */
import styles from './index.module.scss'

export interface Position {
    x?: number
    y?: number
}

type PropConfig = {
    position?: Position
}

const ContextMenu = ({
    position
}: PropConfig) => {
    return <div className={styles.context_menu}
        style={{
            left: position?.x ?? 0,
            top: position?.y ?? 0,
        }}
    >
        <ul className={styles.menu_ul}>
            {
                [1, 2, 3].map((v, i) => {
                    return <li key={i} className={styles.menu_li}>进入页面</li>
                })
            }
        </ul>
    </div>
}

export default ContextMenu