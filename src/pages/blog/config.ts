// 博客属性配置相关
export const blogCate = [
    {
        id: 'html',
        cate: 'html',
        count: 0,
    },
    {
        id: 'css',
        cate: 'css',
        count: 0,
    },
    {
        id: 'js',
        cate: 'js',
        count: 0,
    },
    {
        id: 'tools',
        cate: '工具插件',
        count: 0,
    },
    {
        id: 'github',
        cate: 'github',
        count: 0,
    },
    {
        id: 'prod&design',
        cate: '产品设计',
        count: 0,
    },
    {
        id: 'base-computer',
        cate: '计算机基础',
        count: 0,
    },
    {
        id: 'compatibility',
        cate: '兼容性',
        count: 0,
    },
    {
        id: 'applet',
        cate: '小程序',
        count: 0,
    },
    {
        id: 'study-materials',
        cate: '学习资源',
        count: 0,
    },
    {
        id: 'bug',
        cate: 'bug',
        count: 0,
    },
    {
        id: 'chat-gpt',
        cate: 'chatGPT',
        count: 0,
    },
    {
        id: 'docker',
        cate: 'Docker',
        count: 0,
    },
    {
        id: 'echarts',
        cate: 'Echarts',
        count: 0,
    },
    {
        id: 'eslint',
        cate: 'Eslint',
        count: 0,
    },
    {
        id: 'gin',
        cate: 'Gin',
        count: 0,
    },
    {
        id: 'go',
        cate: 'Golang',
        count: 0,
    },
    {
        id: 'gorm',
        cate: 'Gorm',
        count: 0,
    },
    {
        id: 'mysql',
        cate: 'MySQL',
        count: 0,
    },
    {
        id: 'nextjs',
        cate: 'Nextjs',
        count: 0,
    },
    {
        id: 'nginx',
        cate: 'Nginx',
        count: 0,
    },
    {
        id: 'prettier',
        cate: 'prettier',
        count: 0,
    },
    {
        id: 'react',
        cate: 'React',
        count: 0,
    },
    {
        id: 'vite',
        cate: 'Vite',
        count: 0,
    },
    {
        id: 'svg',
        cate: 'SVG',
        count: 0,
    },
    {
        id: 'zustand',
        cate: 'zustand',
        count: 0,
    }
]

// 建议留言的状态
export const leaveMsgState = [
    {
        state: 1,
        icon: 'icon-daishenhe',
        text: '等待博主查看该留言~',
        color: 'var(--gold-1)',
    },
    {
        state: 2,
        icon: 'icon-daichuli2',
        text: '博主已查看该留言~',
        color: 'var(--pink)',
    },
    {
        state: 3,
        icon: 'icon-yijujue',
        text: '该留言未被采纳~',
        color: 'var(--red-1)',
    },
    {
        state: 4,
        icon: 'icon-adopted',
        text: '该留言已被采纳!',
        color: 'var(--green-1)',
    },
]

// 设置backTop显示的断点位置
export const BACK_TOP_POINT = 400

// 不同的消息类型
export const msgCates = [
    { id: 'comment', text: '评论', icon: 'icon-aite', },
    { id: 'mail', text: '站内信', icon: 'icon-zhanneixin', },
    { id: 'system', text: '系统消息', icon: 'icon-xitongtongzhi', },
]