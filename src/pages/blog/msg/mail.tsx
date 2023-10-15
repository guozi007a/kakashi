// 站内信
import styles from './mail.module.scss'
import { useState, useEffect, useRef } from 'react'
import { AppUtils } from '~/utils/common'
import AliIcon from '~/components/aliIcon'
import Scrollbars from 'react-custom-scrollbars-2'

const MsgMail = () => {
    const fileRef = useRef<HTMLInputElement>(null)
    const [top, setTop] = useState(false)
    const [black, setBlack] = useState(false)
    const [notDisturb, setNotDisturb] = useState(false)
    const [isOperVisible, setIsOperVisible] = useState(false)
    const [content, setContent] = useState('')
    const [isEmojiVisible, setIsEmojiVisible] = useState(false)

    useEffect(() => { 
        const handleHide = () => {
            setIsOperVisible(false)
            setIsEmojiVisible(false)
        }
        document.addEventListener('click', handleHide)

        return () => {
            document.removeEventListener('click', handleHide)
        }
    }, [])

    return <div className={styles.mail_wrap}>
        <div className={styles.mail}>
            <div className={styles.friends}>
                <div className={styles.friends_main}>
                    <Scrollbars autoHide>
                        {
                            new Array(12).fill({}).map((_, i) => {
                                return <div key={i} className={styles.friend}>
                                    <div className={styles.friend_main}>
                                        <div className={styles.avatar}>
                                            <img src={AppUtils.serverImg('temp-avatar.png')} alt="" />
                                        </div>
                                        <div className={styles.friend_data}>
                                            <div className={styles.nick_wrap}>
                                                <p className={styles.nick}>这是聊天用户的一个昵称啊</p>
                                                <p className={styles.tag}>官方</p>
                                            </div>
                                            <div className={styles.desc}>这是一段聊天的内容，具体聊了什么呢？</div>
                                        </div>
                                    </div>
                                    <div className={styles.date_wrap}>
                                        <p className={styles.date}>2023-10-15</p>
                                        <div className={styles.shield}>
                                            <AliIcon icon='icon-jiacupingbixiaoxi' />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </Scrollbars>
                </div>
            </div>
            <div className={styles.chat}>
                <header className={styles.header}>
                    <p className={styles.nick}>这是聊天用户的一个昵称啊</p>
                    <div className={styles.oper}
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsOperVisible(!isOperVisible)
                        }}
                    >
                        <AliIcon icon='icon-gf-ellipsis' />
                    </div>
                    <div className={`${styles.oper_wrap} ${isOperVisible ? styles.active : ''}`}
                        onClick={(e) => {e.stopPropagation()}}
                    >
                        <main className={styles.oper_main}>
                            <ul className={styles.oper_ul}>
                                <li className={styles.oper_li}>
                                    <p className={styles.oper_item}>置顶聊天</p>
                                    <div className={`${styles.switch} ${top ? styles.active : ''}`} onClick={() => {setTop(!top)}}>
                                        <div className={styles.btn}></div>
                                    </div>
                                </li>
                                <li className={styles.oper_li}>
                                    <p className={styles.oper_item}>加入黑名单</p>
                                    <div className={`${styles.switch} ${black ? styles.active : ''}`} onClick={() => {setBlack(!black)}}>
                                        <div className={styles.btn}></div>
                                    </div>
                                </li>
                                <li className={styles.oper_li}>
                                    <p className={styles.oper_item}>消息免打扰</p>
                                    <div className={`${styles.switch} ${notDisturb ? styles.active : ''}`} onClick={() => {setNotDisturb(!notDisturb)}}>
                                        <div className={styles.btn}></div>
                                    </div>
                                </li>
                            </ul>
                        </main>
                    </div>
                </header>
                <main className={styles.chat_main}></main>
                <div className={styles.edit}>
                    <div className={styles.tool_bar}>
                        <header className={styles.emoji} title='表情'
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsEmojiVisible(!isEmojiVisible)
                            }}
                        >
                            <AliIcon icon='icon-biaoqing-xue' iconStyle={{ width: '100%', height: '100%' }} />
                        </header>
                        <div className={`${styles.menu} ${isEmojiVisible ? styles.active : ''}`}
                            onClick={(e) => {
                                e.stopPropagation()
                            }}
                        >
                            <div className={styles.menu_main}>
                                <Scrollbars autoHide>
                                    <ul className={styles.menu_ul}>
                                        {
                                            new Array(72).fill(0).map((_, i) => {
                                                return <li key={i} className={styles.menu_li}
                                                    onClick={() => {
                                                        setIsEmojiVisible(false)
                                                    }}
                                                >
                                                    <img src={`https://g.csdnimg.cn/static/face/emoji/${String(i + 1).padStart(3, '0')}.png`} alt="" />
                                                </li>
                                            })
                                        }
                                    </ul>
                                </Scrollbars>
                            </div>
                        </div>
                        <div className={styles.img} title='图片'
                            onClick={() => {
                                fileRef.current?.click()
                            }}
                        >
                            <AliIcon icon='icon-tupian' iconStyle={{ width: '100%', height: '100%' }} />
                            <input type="file" className={styles.inp} ref={fileRef} />
                        </div>
                    </div>
                    <div className={styles.edit_area}>
                        <textarea className={styles.content}
                            placeholder='编辑消息'
                            maxLength={500}
                            value={content}
                            onChange={(e) => {setContent(e.target.value)}}
                        ></textarea>
                    </div>
                    <footer className={styles.send_wrap}>
                        <p className={styles.text_count}>0/500</p>
                        <div className={styles.send_btn} title='按Enter发送'>
                            <AliIcon icon='icon-fasong' />
                            <span>发送</span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </div>
}

export default MsgMail