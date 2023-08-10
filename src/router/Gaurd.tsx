/** 路由守卫 */
import { Suspense, FC } from "react"
// import { useNavigate } from 'react-router-dom';

interface PropType {
    Component: FC;
}

const GaurdRouter = ({ Component }: PropType) => {

    // const navigate = useNavigate();

    return <Suspense fallback={<span></span>}>
        <Component />
    </Suspense>
}

export const gaurd = (Component: FC) => {
    return <GaurdRouter Component={Component} />
}