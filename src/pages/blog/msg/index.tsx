// 消息中心
import styles from './index.module.scss'
import { useState } from 'react'
import AliIcon from '~/components/aliIcon'
import { Outlet, useNavigate } from 'react-router-dom'
import { msgCates } from '../config'
import MsgTotalCount from './totalCount'

const MsgCenter = () => {
    const navigate = useNavigate()
    const [cateKey, setCateKey] = useState(0)

    return <div className={styles.msg_center}>
        <div className={styles.msg_main}>
            <header className={styles.msg_header}>
                <p className={styles.title}>消息中心</p>
                <div className={styles.set}>
                    <AliIcon icon='icon-xiaoxishezhi' />
                    <span>消息设置</span>
                </div>
            </header>
            <main className={styles.content}>
                <ul className={styles.cate_ul}>
                    {
                        msgCates.map((v, i) => {
                            return <li key={v.id} className={`${styles.cate_li} ${cateKey === i ? styles.active : ''}`}
                                onClick={() => {
                                    setCateKey(i)
                                    navigate(`${import.meta.env.ENV_BASE}blog/msg-center/${v.id}`)
                                }}
                            >
                                <AliIcon icon={v.icon} />
                                <span>{v.text}</span>
                            </li>
                        })
                    }
                </ul>
                {
                    cateKey == 1 ? null : <MsgTotalCount />
                }
                <Outlet />
            </main>
        </div>
    </div>
}

export default MsgCenter