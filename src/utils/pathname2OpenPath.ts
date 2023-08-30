/**
 * pathname转换成菜单栏的openPath
 * 即a/b/c转换成['x', 'xx']
 * 这里不一定是['a', 'a_b', 'a_b_c']，因为a, b, c并不全是SubMenu
 * 规律是如果它在items中存在children，那么它一定是SubMenu
 */
import { BACKSTAGE_ROOT } from "~/config/appRoot"
import { items } from "~/pages/backstage/home/menuConfig"
import { MenuItemConfig } from "~/pages/backstage/home/menuConfig"

export const pathname2OpenPath = (pathname?: string): string[] => {
    if (!pathname || pathname === BACKSTAGE_ROOT) return []
    const path = pathname.replace(BACKSTAGE_ROOT, '')
    const pathArr = path.split('/').filter(Boolean)

    const result: string[] = []
    const len = pathArr.length
    let currentIndex = 0
    
    const findPath = (itemArr: MenuItemConfig[], path: string) => {
        if (!itemArr || !path || currentIndex >= len) return result
        for (const v of itemArr) {
            if (v.real === path) {
                if (!v.children) return result
                result.length ? result.push(result.join('_') + '_' + path) : result.push(path)
                currentIndex++
                findPath(v.children, pathArr[currentIndex])
            }
        }
    }

    findPath(items, pathArr[0])

    return result
}