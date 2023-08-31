/**
 * 菜单栏当前访问的路由转换为当前位置
 * 'a_b_c' -> [label, label, label]
 */
import { items } from "~/pages/backstage/home/menuConfig"
import type { MenuItemConfig } from "~/pages/backstage/home/menuConfig"

export interface PositionConfig {
    title?: React.ReactNode
}

export const selectKey2Position = (path?: string): PositionConfig[] => {
    if (!path) return []
    const pathArr = path.split('_').filter(Boolean)
    const result: PositionConfig[] = []
    let num = 0
    
    const findLabel = (itemArr?: MenuItemConfig[], path?: string) => {
        if (!itemArr || !path) return
        
        for (const v of itemArr) {
            if (v.real === path) {
                result.push({ title: v.label })
                if (!v.children) return
                num++
                findLabel(v.children, pathArr[num])
                return
            }
        }
    }

    findLabel(items, pathArr[0])

    return [
        { title: '当前位置：' },
        ...result
    ]
}