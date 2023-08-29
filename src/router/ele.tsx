import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { gaurd } from './Gaurd'

const Home = lazy(() => import('~/pages/home'))
const BackstageHome = lazy(() => import('~/pages/backstage/home'))
const StaticResource = lazy(() => import('~/pages/backstage/staticResource'))

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
        path: '*',
        element: <div>No Found.</div>
    }
]