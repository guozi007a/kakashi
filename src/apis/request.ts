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

type MethodType = 'get' | 'post' | 'put' | 'delete'

// 这里添加返回类型Promise<ResType>,并在.then中的resolve参数改为res.data，以解决类型报错。
const commonReq = (config: Record<string, any>): Promise<ResType> => {
    return new Promise((resolve, reject) => {
        const promise = instance(config)

        promise
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

const pureConfig = (url: string, method: MethodType, params?: Record<string, any>) => ({
    url,
    method,
    params,
})

const jsonConfig = (url: string, method: MethodType, params?: Record<string, any>) => ({
    url,
    method,
    data: params ? JSON.stringify(params) : '', // 当content-type为json时，传输数据为json字符串
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
})

const formConfig = (url: string, method: MethodType, params?: Record<string, any>) => {
    let transferMsg = ''

    if (params) {
        for (const [k, v] of Object.entries(params)) {
            if (v === null || v === undefined || v === '') {
                continue
            }
            transferMsg = transferMsg
                ? (transferMsg + `&${k}=${encodeURIComponent(v)}`)
                : `${k}=${encodeURIComponent(v)}`
        }
    }

    return {
        url,
        method,
        data: transferMsg, // 当content-type为x-www-form-urlencoded时，传输数据要拼接为平行键值对。仅用于传输简单数据类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
    }
}

export const get = (url: string, params?: Record<string, any>) => commonReq(pureConfig(url, 'get', params))

export const del = (url: string, params?: Record<string, any>) => commonReq(pureConfig(url, 'delete', params))

export const post = (url: string, params?: Record<string, any>) => commonReq(jsonConfig(url, 'post', params))

export const put = (url: string, params?: Record<string, any>) => commonReq(jsonConfig(url, 'put', params))

export const postForm = (url: string, params?: Record<string, any>) => commonReq(formConfig(url, 'post', params))

export const putForm = (url: string, params?: Record<string, any>) => commonReq(formConfig(url, 'put', params))