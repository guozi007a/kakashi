import { get, postFile, putForm, del } from "../request";

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
export const queryFileListAPI = (params: FileList) => get('/v1/selectFileList', params)

// 删除文件(设置文件为临时文件，去到回收站)
export const solfDeleteFileAPI = (uid: string) => putForm('/v1/setFileTemp', { uid })

// 获取临时文件列表
export const queryTempFilesAPI = () => get('/v1/queryTempFileList')

// 还原临时文件
export const restitutionTempFilesAPI = (uids: string[]) => putForm('/v1/restitutionFiles', { uids })

// 彻底删除临时文件
export const deleteThoroughTempFilesAPI = (uids: string[]) => del('/v1/deleteThorough', { uids })