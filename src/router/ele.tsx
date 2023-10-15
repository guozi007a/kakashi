import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { gaurd } from './Gaurd'

const Home = lazy(() => import('~/pages/home'))
const ProjectDevLogs = lazy(() => import('~/pages/projectDevLogs'))
/** 管理后台 */
const BackstageHome = lazy(() => import('~/pages/backstage/home'))
const ResourceUpload = lazy(() => import('~/pages/backstage/staticResource/upload'))
const ResourceTemp = lazy(() => import('~/pages/backstage/staticResource/temp'))
const ResourConfig = lazy(() => import('~/pages/backstage/staticResource/config'))
const ResourceImages = lazy(() => import('~/pages/backstage/staticResource/list/images'))
const ResourceVideo = lazy(() => import('~/pages/backstage/staticResource/list/video'))
const ResourceOther = lazy(() => import('~/pages/backstage/staticResource/list/other'))

const PublishLog = lazy(() => import('~/pages/backstage/devLogs/publishLog'))
const ManageLog = lazy(() => import('~/pages/backstage/devLogs/manageLog'))

const Blog = lazy(() => import('~/pages/blog'))
const BlogMain = lazy(() => import('~/pages/blog/main'))
const BlogPage = lazy(() => import('~/pages/blog/page'))
const BlogList = lazy(() => import('~/pages/blog/list'))
const BlogLeaveList = lazy(() => import('~/pages/blog/leaveList'))
const LeavePublish = lazy(() => import('~/pages/blog/leaveList/publish'))
const LeaveSuccess = lazy(() => import('~/pages/blog/leaveList/success'))
const MsgCenter = lazy(() => import('~/pages/blog/msg'))
const MsgComment = lazy(() => import('~/pages/blog/msg/comment'))
const MsgSystem = lazy(() => import('~/pages/blog/msg/system'))
const MsgMail = lazy(() => import('~/pages/blog/msg/mail'))
const MsgSetting = lazy(() => import('~/pages/blog/msg/setting'))

export const ele: RouteObject[] = [
    {
        path: '/',
        element: gaurd(Home)
    },
    {
        path: '/backstage/',
        element: gaurd(BackstageHome),
        children: [
            {
                path: 'static-resource/upload',
                element: gaurd(ResourceUpload)
            },
            {
                path: 'static-resource/list/images',
                element: gaurd(ResourceImages)
            },
            {
                path: 'static-resource/list/video',
                element: gaurd(ResourceVideo)
            },
            {
                path: 'static-resource/list/other',
                element: gaurd(ResourceOther)
            },
            {
                path: 'static-resource/temp-keep',
                element: gaurd(ResourceTemp)
            },
            {
                path: 'static-resource/config',
                element: gaurd(ResourConfig)
            },
            {
                path: 'dev-log/publish-log',
                element: gaurd(PublishLog)
            },
            {
                path: 'dev-log/manage-log',
                element: gaurd(ManageLog)
            },
        ]
    },
    {
        path: '/project-dev-logs',
        element: gaurd(ProjectDevLogs)
    },
    {
        path: '/blog',
        element: gaurd(Blog),
        children: [
            {
                path: 'main',
                element: gaurd(BlogMain),
            },
            {
                path: 'page/:id',
                element: gaurd(BlogPage),
            },
            {
                path: 'list/:id',
                element: gaurd(BlogList),
            },
            {
                path: 'leave-list',
                element: gaurd(BlogLeaveList),
            },
            {
                path: 'leave-publish',
                element: gaurd(LeavePublish),
            },
            {
                path: 'leave-success',
                element: gaurd(LeaveSuccess),
            },
            {
                path: 'msg-center',
                element: gaurd(MsgCenter),
                children: [
                    {
                        path: 'comment',
                        element: gaurd(MsgComment),
                    },
                    {
                        path: 'system',
                        element: gaurd(MsgSystem),
                    },
                    {
                        path: 'mail',
                        element: gaurd(MsgMail),
                    },
                ]
            },
            {
                path: 'msg-center/setting',
                element: gaurd(MsgSetting),
            }
        ]
    },
    {
        path: '*',
        element: <div>No Found.</div>
    }
]