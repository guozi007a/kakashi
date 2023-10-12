// 留言发布成功
import styles from './success.module.scss'
import AliIcon from '~/components/aliIcon'

const LeaveSuccess = () => {
    return <>
        <section className={styles.success}>
            <AliIcon icon='icon-success' iconStyle={{ width: '12rem', height: '12rem', color: 'var(--green-1)', margin: 'auto' }} />
            <section className={styles.oper}>
                <p className={styles.again}>再发一条</p>
                <p className={styles.look}>查看留言</p>
                <p className={styles.reedit}>重新编辑</p>
            </section>
        </section>
    </>
}

export default LeaveSuccess