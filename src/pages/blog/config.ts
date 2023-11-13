
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

// 作品
export const myWorks = [
    {
        id: '001',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '拖动贝塞尔曲线的点位',
        url: 'https://github.com/guozi007a/custom-bezier',
        href: 'https://guozi007a.github.io/custom-bezier/',
        describe: '拖动不同的控制点，使用三次贝塞尔曲线画出不同的曲线图形。',
    },
    {
        id: '002',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '日地月运行模拟',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/solar-system/',
        describe: '使用canvas简易模拟日地月圆周绕行',
    },
    {
        id: '003',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '五子棋',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/gobang/',
        describe: '实现单机版五子棋玩法，可以回溯本局下棋过程，可以截图保存。已适配web端和手机端。',
    },
    {
        id: '004',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '笛卡尔爱心',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/descartes-heart/',
        describe: '使用笛卡尔公式，画一个爱心形状。这是使用canvas画爱心的方法之一。',
    },
    {
        id: '005',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '时钟',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/clock/',
        describe: '实现了一个挂壁时钟，从该项目开始，提升了画布的清晰度。',
    },
    {
        id: '006',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '拖尾效果',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/tail/',
        describe: '这是canvas实现的经典效果，一种类似于流星的拖尾效果。拖尾的细节需要处理得当，容易出现残影痕迹。',
    },
    {
        id: '007',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '流星雨',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/ms2/',
        describe: '使用拖尾效果生成一个流星雨的画面。',
    },
    {
        id: '008',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '七彩流光',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/meteor-shower/',
        describe: '同样是拖尾效果的应用，不过这个颜色是七彩的，有一点残影。',
    },
    {
        id: '009',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '颜色选择器',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/color-picker/',
        describe: '这同样是canvas的一个经典功能。',
    },
    {
        id: '010',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '圆形图片',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/arc-img/',
        describe: 'canvas的drawImage可以画一个矩形图片，该项目给出了画一个圆形图片的示例。',
    },
    {
        id: '011',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '裁剪头像',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/clip-avatar/',
        describe: 'canvas可以通过drawImage实现裁剪头像，这是其中的一种裁剪形式。',
    },
    {
        id: '012',
        logo: import.meta.env.ENV_IMAGE_PATH + 'canvas-logo.png',
        title: '小宝学写字',
        url: 'https://github.com/guozi007a/canvas-case',
        href: 'https://guozi007a.github.io/canvas-case/follow-write/',
        describe: '适配了web端和手机端，可以在屏幕上写字，擦除，搜索，盖章截图等。',
    },
]