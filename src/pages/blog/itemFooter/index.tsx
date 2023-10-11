// 博客列表展示的单项的底部操作项，如点赞，收藏等
import { useState } from 'react'
import styles from './index.module.scss'
import AliIcon from '~/components/aliIcon'
import { useBlogThemeColorStore } from '~/store/useBlogThemeColorStore'

const BlogItemFooter = () => {
    const themeColor = useBlogThemeColorStore(state => state.blogThemeColor)
    const [isLike, setIsLike] = useState(false)
    const [likeState, setLikeState] = useState<number>(-1)

    return <footer className={styles.article_footer}>
        <section className={styles.thumb_up} title='点赞数'>
            <section
                onClick={() => {
                    setIsLike(!isLike)
                    setLikeState(Number(!isLike))
                }}
            >
                <AliIcon icon={isLike ? 'icon-dianzan' : 'icon-icon'} fillColor={isLike ? themeColor : ''} />
            </section>
            <span>2333</span>
            <p className={`${styles.add} ${likeState === 1 ? styles.active : ''}`}>+ 1</p>
            <p className={`${styles.decr} ${likeState === 0 ? styles.active : ''}`}>- 1</p>
        </section>
        <section className={styles.thumb_down} title='差评数'>
            <section>
                <AliIcon icon='icon-chaping' />
            </section>
            <span>666</span>
        </section>
        <section className={styles.collect} title='收藏数'>
            <section>
                <AliIcon icon='icon-shoucang' />
            </section>
            <span>888</span>
        </section>
        <section className={styles.talk} title='评论数'>
            <section>
                <AliIcon icon='icon-pinglun' />
            </section>
            <span>11.4k</span>
        </section>
        <section className={styles.date} title='发布时间'>
            <section>
                <AliIcon icon='icon-shijian' />
            </section>
            <span>2023-10-10 19:02:23</span>
        </section>
    </footer>
}

export default BlogItemFooter