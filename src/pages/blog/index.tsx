/** 博客 */
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import { Logo } from '~/components/logo'
import { Outlet } from 'react-router-dom'
import { useBlogThemeColorStore } from '~/store/useBlogThemeColorStore'
import AliIcon from '~/components/aliIcon'
import { BACK_TOP_POINT } from './config'

const Blog = () => {
    const themeColor = useBlogThemeColorStore(state => state.blogThemeColor)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => { 
        let doc = document.documentElement
        let top = doc.scrollTop
        setIsVisible(top >= BACK_TOP_POINT)

        const handleScroll = () => {
            doc = document.documentElement
            top = doc.scrollTop
            setIsVisible(top >= BACK_TOP_POINT)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return <>
        <header className={styles.header}>
            <div className={styles.logo_wrap}>
                <Logo fillColor={themeColor} textStyle={{color: themeColor}} />
            </div>
            <div className={styles.search_wrap}>
                <input type="text"
                    className={styles.inp}
                    placeholder='搜索'
                />
                <div className={styles.search_icon}>
                    <AliIcon icon='icon-sousuo' iconStyle={{width: '60%', height: '60%'}} />
                </div>
            </div>
            <div className={styles.others}></div>
        </header>
        <main className={styles.main} style={{ backgroundColor: themeColor }}>
            <Outlet />
        </main>
        <footer className={styles.footer}>CopyRight ©2023 Author github.guozi007a</footer>
        <div className={`${styles.back_top} ${isVisible ? '' : styles.hide}`}
            onClick={() => {
                document.documentElement.scrollTo(0, 0)
            }}
        >
            <AliIcon icon='icon-xiangshang' iconStyle={{width: '60%', height: '60%', color: themeColor}} />
        </div>
    </>
}

export default Blog