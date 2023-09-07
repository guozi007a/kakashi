/** 
 * 开发日志生成图片快捷键
 */

const shortCutKeys = {
    "#cg": "🛠",
    "#yh": "💄",
    "#xz": "🆕",
    "#fq": "🗑",
    "#xf": "🐞",
}

export const shortCutKeys2LogIcon = (content?: string): string => {
    if (!content) return ''
    for (const [k, v] of Object.entries(shortCutKeys)) {
        if (content.startsWith(k)) {
            return content.replace(k, v)
        }
    }
    return content
}