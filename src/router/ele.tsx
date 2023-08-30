import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { gaurd } from './Gaurd'

const Home = lazy(() => import('~/pages/home'))
const ProjectDevLogs = lazy(() => import('~/pages/projectDevLogs'))
/** 管理后台 */
const BackstageHome = lazy(() => import('~/pages/backstage/home'))
const StaticResource = lazy(() => import('~/pages/backstage/staticResource'))
const PublishLog = lazy(() => import('~/pages/backstage/devLogs/publishLog'))
const ManageLog = lazy(() => import('~/pages/backstage/devLogs/manageLog'))

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
                path: 'static-resource',
                element: gaurd(StaticResource)
            },
            {
                path: 'dev-log/publish-log',
                element: gaurd(PublishLog)
            },
            {
                path: 'dev-log/manage-log',
                element: gaurd(ManageLog)
            }
        ]
    },
    {
        path: '/project-dev-logs',
        element: gaurd(ProjectDevLogs)
    },
    {
        path: '*',
        element: <div>No Found.</div>
    }
]