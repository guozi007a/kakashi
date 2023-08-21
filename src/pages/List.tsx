/** 测试 列表 */
import { request } from "~/apis/request"
import { useEffect } from "react"

const List = () => {

    useEffect(() => { 
        const listMsg = async () => {
            const res = await request('/list', null, 'post', null)
            console.log(res)
        }
        listMsg()
    }, [])

    return <div>列表</div>
}

export default List