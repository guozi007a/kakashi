/**
 * 转换菜单选中路径
 * 'a_b_c'或者'a/b/c'转换为['a', 'a_b', 'a_b_c']
 */

export const transferSelectedPath = (path?: string, tag = '/'): string[] => {
    if (!path) return []
    if (!path.includes(tag)) return [path]
    const pathArr = path.split(tag)
    return pathArr.map((v, i) => i === 0 ? v : pathArr.slice(0, i + 1).join('_'))
}