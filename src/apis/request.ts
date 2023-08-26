/** 封装axios */
import axios from "axios"

type MethodType = 'get' | 'post' | 'put' | 'delete'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
    }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response?.data;
    }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export const request = (
    url: string,
    params: Record<string, any> | null = {},
    method: MethodType = 'get',
    config: Record<string, any> | null = {}
) => {

    const reqConfig = {
        baseURL: import.meta.env.ENV_PREFIX,
        url,
        method,
        params: {},
        data: {},
        timeout: 10000,
        ...config,
    }
    if (method === 'get' || method === 'delete') {
        params && (reqConfig.params = params)
    } else if (method === 'post' || method === 'put') {
        params && (reqConfig.data = params)
    }

    return new Promise((resolve, reject) => {
        const promise = axios(reqConfig)

        promise
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}