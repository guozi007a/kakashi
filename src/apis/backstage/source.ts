import { get, postFile } from "../request";

// 直接上传
export const uploadDirectAPI = (formData: FormData) => postFile('/v1/uploadDirect', formData)

// 文件预传
export const preUploadFileAPI = (formData: FormData) => postFile('/v1/preUpload', formData)

// 上传切片
export const uploadChunkAPI = (formData: FormData) => postFile('/v1/chunkUpload', formData)

// 合并切片
export const mergeChunksAPI = () => get('/v1/mergeChunks')

// 获取文件列表
export interface FileList {
    category: string
    option: string
    sortType: boolean
    pageSize: number
    start: number
}
export const queryFileList = (params: FileList) => get('/v1/selectFileList', params)