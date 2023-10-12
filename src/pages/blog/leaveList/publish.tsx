// 发布建议留言
import styles from './publish.module.scss'
import { useState } from 'react'
import { MdEditor } from 'md-editor-rt';
import { useNavigate } from 'react-router-dom';

const LeavePublish = () => {
    const navigate = useNavigate()
    const [text, setText] = useState('');

    return <>
        <section className={styles.publish}>
            <p className={styles.back} onClick={() => {navigate(-1)}}>返回列表</p>
            <header className={styles.title}>
                <input type="text"
                    className={styles.inp}
                    placeholder='留言标题，限制在100字以内'
                    maxLength={100}
                    autoComplete='off'
                />
            </header>
            <article className={styles.content}>
                <MdEditor
                    modelValue={text}
                    onChange={setText}
                    maxLength={1000}
                    autoDetectCode
                    placeholder='留言内容，限制在1000字以内'
                    toolbarsExclude={['save', 'fullscreen', 'htmlPreview', 'github']}
                />
            </article>
            <p className={styles.submit}>提交</p>
        </section>
    </>
}

export default LeavePublish