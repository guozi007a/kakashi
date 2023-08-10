import { useRoutes } from 'react-router-dom'
import { ele } from './ele'

const App = () => {
    const routes = useRoutes(ele)

    return routes
}

export default App