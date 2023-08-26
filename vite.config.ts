import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// 环境变量前缀，默认是VITE_
const envPrefix = 'ENV_'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

    // 获取环境变量对象env
    const env = loadEnv(mode, process.cwd(), envPrefix)
    // console.log(env)

    return {
        plugins: [react()],
        base: env.ENV_BASE,
        // 环境变量前缀
        envPrefix,
        server: {
            // 端口号
            port: 3001,
            // 严格匹配端口
            strictPort: true,
            hmr: {
                // 禁止报错信息覆盖屏幕
                overlay: false,
            },
            // 请求代理
            // proxy: {
            //     '/about': `${env.ENV_PREFIX}/v1`,
            //     '/list': `${env.ENV_PREFIX}/v2`,
            // }
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
    }
})
