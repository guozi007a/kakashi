import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { gaurd } from './Gaurd'

const Home = lazy(() => import('~/pages/home'))
const BackstageHome = lazy(() => import('~/pages/backstage/home'))
/** mock start */
const About = lazy(() => import('~/pages/About'))
const List = lazy(() => import('~/pages/List'))
/** mock end */

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
        path: '/a',
        element: gaurd(About),
    },
    {
        path: '/b',
        element: gaurd(List),
    },
    {
        path: '*',
        element: <div>No Found.</div>
    }
]