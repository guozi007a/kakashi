import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { gaurd } from './Gaurd'

const Home = lazy(() => import('~/pages/home'))
const BackstageHome = lazy(() => import('~/pages/backstage/home'))
const StaticResource = lazy(() => import('~/pages/backstage/staticResource'))
const ProjectDevLogs = lazy(() => import('~/pages/projectDevLogs'))

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