/** 将菜单栏Menu的打开路径填充完整 */
import { items } from "~/pages/backstage/home/menuConfig"
import type { MenuProps } from 'antd';

const findPath = (item: MenuProps['items'], path: string) => {
    if(!item || !path) return ''
    // const itemHasChildren = item.map((v) => v?.children && v?.children?.length > 0 && v)
}

export const completeMenuOpenPath = (openPath: string[]): string[] => {
    const result: string[] = []

    if (!openPath || !openPath.length) return result
    


    return result
}