/**
 * pathname转换成菜单栏的openPath
 * 即a/b/c转换成['x', 'xx']
 * 这里不一定是['a', 'a_b', 'a_b_c']，因为a, b, c并不全是SubMenu
 * 规律是如果它在items中存在children，那么它一定是SubMenu
 */
import { BACKSTAGE_ROOT } from "~/config/appRoot"
import { items } from "~/pages/backstage/home/menuConfig"
import { MenuItemConfig } from "~/pages/backstage/home/menuConfig"

const result: string[] = []

const findPath = (itemArr: MenuItemConfig[], path: string) => {
    if (!itemArr || !path) return result
    for (const v of itemArr) {
        if (v.real === path) {
            if (!v.children) return result
            result.length ? result.push(result.join('_') + '_' + path) : result.push(path)
            findPath(v.children, path)
        }
    }
}

export const pathname2OpenPath = (pathname?: string): string[] => {
    if (!pathname || pathname === BACKSTAGE_ROOT) return []
    const path = pathname.replace(BACKSTAGE_ROOT, '')
    const pathArr = path.split('/')
    

    return result
}