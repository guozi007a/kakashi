// 博客首页主体
import styles from './index.module.scss'
import { AppUtils } from '~/utils/common'
import BlogItem from '../item'
import { useBlogThemeColorStore } from '~/store/useBlogThemeColorStore'
import { blogCate } from '../config'
import Scrollbars from 'react-custom-scrollbars-2'
import AliIcon from '~/components/aliIcon'

const BlogMain = () => {
    const themeColor = useBlogThemeColorStore(state => state.blogThemeColor)

    return <main className={styles.main}>
        <section className={styles.part1}>
            <section className={styles.avatar}>
                <img src={AppUtils.serverImg('temp-avatar.png')} alt="" />
            </section>
            <p className={styles.nick}>guozi007a(小拽)</p>
            <p className={styles.give_msg} style={{backgroundColor: themeColor}}>建议留言</p>
        </section>
        <section className={styles.part2}>
            <p className={styles.title}>最新文章(15)</p>
            <section className={styles.articles}>
                <ul className={styles.article_ul}>
                    {
                        new Array(10).fill({}).map((_, i) => {
                            return <BlogItem key={i} />
                        })
                    }
                </ul>
            </section>
        </section>
        <section className={styles.part3}>
            <section className={styles.article_cate}>
                <section className={styles.cate_text}>
                    <AliIcon icon='icon-fenlei' />
                    <span>文章分类</span>
                </section>
                <section className={styles.cate_main}>
                    <Scrollbars autoHide>
                        <ul className={styles.cate_ul}>
                            {
                                blogCate.map((v) => {
                                    return <li key={v.id} className={styles.cate_li}>
                                        <p className={styles.cate}>
                                            <span>{v.cate}</span>
                                            <span>{v.count}</span>
                                        </p>
                                    </li>
                                })
                            }
                        </ul>
                    </Scrollbars>
                </section>
            </section>
            <section className={styles.corperation}>
                <section className={styles.corp_text}>
                    <AliIcon icon='icon-hezuo' />
                    <span>商务合作</span>
                </section>
            </section>
        </section>
    </main>
}

export default BlogMain