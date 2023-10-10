import styles from './index.module.scss'
import { LogoSvg } from './LogoSvg'
import type { FillStyle } from './LogoSvg'

type PropTypes = {
    linkStyle?: React.CSSProperties
    svgStyle?: React.CSSProperties
    textStyle?: React.CSSProperties
}

export const Logo = ({ linkStyle, svgStyle, textStyle, fillColor }: PropTypes & FillStyle) => {
    return <>
        <a href={import.meta.env.ENV_BASE} className={styles.logo} title='multi-app-blog' style={linkStyle}>
            <div className={styles.svg} style={svgStyle}>
                <LogoSvg fillColor={fillColor} />
            </div>
            <span className={styles.text} style={textStyle}>multi-app-blog</span>
        </a>
    </>
}