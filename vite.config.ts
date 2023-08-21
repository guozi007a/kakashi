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
        },
        proxy: {
            '/about': 'http://127.0.0.1:4001/v1',
            '/list': 'http://127.0.0.1:4001/v2',
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
    },
    json: {
        // 以编译的形式导入Json文件，提升性能
        stringify: true,
    },
    build: {
        // 小于10Kb的资源将转换为base64编码，减少http请求
        assetsInlineLimit: 1024 * 10,
    }
})
