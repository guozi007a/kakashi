/** 首页  */
import styles from './index.module.scss'
import backstageImg from '~/assets/images/window-backstage.jpg'
import { useNavigate } from 'react-router-dom'

const windowIcons = [
    { id: 'backstage', name: '管理后台', url: backstageImg, path: '/backstage/home' },
]

const Home = () => {
    const navigate = useNavigate()

    return <div className={styles.home}>
        <div className={styles.bg}></div>
        <div className={styles.main}>
            <ul className={styles.home_ul}>
                {
                    windowIcons.map(v => {
                        return <li key={v.id} className={styles.home_li}>
                            <div className={styles.win_img}
                                onDoubleClick={() => {
                                    navigate(v.path)
                                }}
                            >
                                <img src={v.url} alt="" />
                            </div>
                            <p className={styles.win_name}>{v.name}</p>
                        </li>
                    })
                }
            </ul>
        </div>
        <div style={{position: 'relative'}}>
            <h3 onClick={()=>{navigate('/about')}}>关于我</h3>
            <h3 onClick={()=>{navigate('/list')}}>列表页</h3>
        </div>
    </div>
}

export default Home