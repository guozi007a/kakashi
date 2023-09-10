import { get, post, put, del } from "../request";
import { InpItem } from "~/pages/backstage/devLogs/publishLog";

// 发布
export const publishLogsAPI = (logs: InpItem[]) => post('/v1/publishLogs', { logs })

// 获取单日日志
export const getDateLogsAPI = (date: string) => get('/v1/getDateLogs', { date })

// 获取所有日志
export const getAllLogsAPI = () => get('/v1/getAllLogs')

// 清空当日日志
export const clearDateLogsAPI = (date: string) => del('/v1/deleteDateLogs', { date })

// 清空所有日志
export const clearAllLogsAPI = () => del('/v1/clearAllLogs')

// 更新
export const updateDateLogsAPI = (date: string, logs: InpItem[]) => put('/v1/updateDateLogs', { date, logs })