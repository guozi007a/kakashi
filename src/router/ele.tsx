import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { gaurd } from './Gaurd'

const Home = lazy(() => import('~/pages/home'))
const BackstageHome = lazy(() => import('~/pages/backstage/home'))

export const ele: RouteObject[] = [
    {
        path: '/',
        element: gaurd(Home)
    },
    {
        path: '/backstage/',
        children: [
            {
                path: 'home',
                element: gaurd(BackstageHome)
            }
        ]
    },
    {
        path: '*',
        element: <div>No Found.</div>
    }
]