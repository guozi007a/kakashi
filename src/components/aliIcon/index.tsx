import styles from './index.module.scss'

type PropTypes = {
    iconStyle?: React.CSSProperties
    fillColor?: string // 通过iconStyle中的color属性或该属性，均可以设置图标颜色。不过设置前一定要去色，不然无效哦
    icon: string
}

const AliIcon = ({ iconStyle, fillColor, icon }: PropTypes) => {
    return <section className={styles.aliIcon} style={iconStyle}>
        <svg className={styles.icon} aria-hidden="true" style={{fill: fillColor}}>
            <use xlinkHref={`#${icon}`}></use>
        </svg>
    </section>
}

export default AliIcon