import { request } from "../request";
import { InpItem } from "~/pages/backstage/devLogs/publishLog";

// 发布
export const publishLogsAPI = (logs: InpItem[]) => {
    return request('/v1/publishLogs', { logs }, 'post')
}

// 获取单日日志
export const getDateLogsAPI = (date: string) => {
    return request('/v1/getDateLogs', { date })
}

// 获取所有日志
export const getAllLogsAPI = () => {
    return request('/v1/getAllLogs')
}

// 清空当日日志
export const clearDateLogsAPI = (date: string) => {
    return request('/v1/deleteDateLogs', { date }, 'delete')
}

// 清空所有日志
export const clearAllLogsAPI = () => {
    return request('/v1/clearAllLogs', null, 'delete')
}