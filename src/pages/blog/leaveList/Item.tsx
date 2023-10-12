import styles from './item.module.scss'
import { AppUtils } from '~/utils/common'
import AliIcon from '~/components/aliIcon'
import { leaveMsgState } from '../config'

const Item = () => {
    return <li className={styles.item}>
        <header className={styles.title}>这是一个留言标题</header>
        <section className={styles.user_msg}>
            <section className={styles.person}>
                <section className={styles.avatar}>
                    <img src={AppUtils.serverImg('temp-avatar.png')} alt="" />
                </section>
                <p className={styles.nick}>谁发布的建议留言</p>
            </section>
            <section className={styles.date} title='留言时间'>
                <AliIcon icon='icon-shijian1' iconStyle={{width: '2.2rem', height: '2.2rem'}} />
                <span>2023-10-12 14:36:42</span>
            </section>
        </section>
        <article className={styles.content}>这是留言内容，这里最多显示两行</article>
        <footer className={styles.leave_state}>
            <section className={styles.prog}>
                <p className={styles.support} title='赞成数0'></p>
                <p className={styles.oppose} title='反对数0'></p>
            </section>
            <section className={styles.vote}>
                <p className={styles.support}>我赞成</p>
                <p className={styles.oppose}>我反对</p>
            </section>
        </footer>
        <section className={styles.resolve_state} style={{color: leaveMsgState[0].color}}>
            <AliIcon icon={leaveMsgState[0].icon} iconStyle={{width: '100%', height: '100%'}} />
        </section>
    </li>
}

export default Item