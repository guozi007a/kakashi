/** 
 * 转换openPath 确保菜单栏中，要么都关闭，要么同时只有一组菜单被打开，不存在同时打开多组菜单的情况
 * ['a']不做转换，原样输出
 * ['a_b']转换为[]
 * ['xxx', 'a_b_c']转换为['a', 'a_b', 'a_b_c']
 */

export const transferOpenPath = (pathArr?: string[]): string[] => {
    // openKey是undefined或['']
    if (!pathArr || !pathArr.filter(Boolean).length) return []
    // openKey有一个元素
    if (pathArr.length === 1) {
        const path = pathArr[0]
        // openKey是['a']，说明只打开了一个第一级菜单，原值返回即可
        if (!path.includes('_')) return pathArr
        // openKey是['a_b_c']的情况，说明父菜单都关闭的，所以应该变成全部关闭
        return []
    }
    // 当openKey中有多个元素，取最后一个元素进行判断
    const path = pathArr.at(-1)
    // 如果不存在，就返回空
    if (!path) return []
    // 如果是'a'的情况，就返回原值
    if (!path.includes('_')) return [path]
    // openKey是['xx', 'xx_xxx_xx', 'xx_xx_x']这种正常情况，就拼接出整条路径
    const arr = path.split('_')
    return arr.map((v, i) => i === 0 ? v : arr.slice(0, i + 1).join('_'))
}
