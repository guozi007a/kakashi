// 博客主题色
import { create } from "zustand";

export interface BlogThemeColor {
    blogThemeColor: string
    setBlogThemeColor: (blogThemeColor?: string) => void
}

export const useBlogThemeColorStore = create<BlogThemeColor>()(
    (set) => ({
        blogThemeColor: localStorage.getItem('blogThemeColor') || 'var(--pink)',
        setBlogThemeColor: (blogThemeColor?: string) => set({ blogThemeColor: blogThemeColor || 'var(--pink)' })
    })
)