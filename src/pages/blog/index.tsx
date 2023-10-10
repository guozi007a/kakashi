/** 博客 */
import styles from './index.module.scss'
import { Logo } from '~/components/logo'
import { Outlet } from 'react-router-dom'

const themeColor = 'var(--pink)'

const Blog = () => {
    return <>
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <Logo fillColor={themeColor} textStyle={{color: themeColor}} />
            </div>
        </header>
        <main className={styles.main} style={{ backgroundColor: themeColor }}>
            <Outlet />
        </main>
        <footer className={styles.footer}>CopyRight ©2023 Author github.guozi007a</footer>
    </>
}

export default Blog