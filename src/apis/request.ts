/** 封装axios */
import axios from "axios"

const instance = axios.create({
    baseURL: import.meta.env.ENV_PREFIX,
    timeout: 20000,
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

interface ResType {
    code: string
    message: string
    data: any
}

// 这里添加返回类型Promise<ResType>,并在.then中的resolve参数改为res.data，以解决类型报错。
export const request = (url: string, params?: Record<string, any> | null | undefined, method = 'get'): Promise<ResType> => {
    return new Promise((resolve, reject) => {

        let config: Record<string, any> = {}

        if (method === 'get' || method === 'delete') {
            config = {
                url,
                method,
                params,
            }
        } else if (method === 'post' || method === 'put') {
            // 参数要单独处理，data要转换成json形式，headers要用x-www-form-urlencoded
            const result: Record<string, any> = {}
            if (params) {
                for (const k in params) {
                    result[k] = JSON.stringify(params[k])
                }
            }
            config = {
                url,
                method,
                data: result,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                },
            }
        }
        const promise = instance(config)

        promise
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}