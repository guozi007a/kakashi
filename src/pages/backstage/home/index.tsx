/** 管理后台首页 */
import { useState } from "react"
import { Button, ColorPicker, ConfigProvider, theme } from "antd"

const Home = () => {
    const [primary, setPrimary] = useState('#1677ff')
    const [dark, setDark] = useState(false)

    return <div>
        <h3>backstage home.</h3>
        <ColorPicker
            // showText
            value={primary}
            onChangeComplete={(color) => setPrimary(color.toHexString())}
        />
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: primary,
                }
            }}
        >
            <Button type="primary">设置颜色</Button>
        </ConfigProvider>
        <br />
        <ConfigProvider
            theme={{
                algorithm: theme.compactAlgorithm,
            }}
        >
            <Button type="primary">hello, be.</Button>
        </ConfigProvider>
        <br />
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: dark ? '#000' : '#1677ff',
                    colorText: dark ? '#fff' : '#FF5016',
                    motion: false,
                },
            }}
        >
            <Button type="primary" onClick={() => {setDark(!dark)}}>黑白切换</Button>
        </ConfigProvider>
    </div>
}

export default Home