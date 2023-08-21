/** 测试 关于我 */
import { request } from "~/apis/request"
import { useEffect } from "react"

const About = () => {

    useEffect(() => { 
        const aboutMsg = async () => {
            const res = await request('/about')
            console.log(res)
        }
        aboutMsg()
    }, [])

    return <div>我</div>
}

export default About