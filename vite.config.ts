import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // 端口号
        port: 3001,
        // 严格匹配端口
        strictPort: true,
        hmr: {
            // 禁止报错信息覆盖屏幕
            overlay: false,
        }
    },
    resolve: {
        // 设置别名
        alias: {
            "~": "/src",
        }
    },
    css: {
        // 开启sourcemap
        devSourcemap: true,
    }
})
