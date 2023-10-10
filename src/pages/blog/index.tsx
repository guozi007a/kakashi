/** 博客 */
import styles from './index.module.scss'
import { Logo } from '~/components/logo'

const Blog = () => {
    return <>
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <Logo />
            </div>
        </header>
        <main>内容主体</main>
        <footer className={styles.footer}>CopyRight ©2023 Author github.guozi007a</footer>
    </>
}

export default Blog