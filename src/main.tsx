import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '~/assets/root.css'
import '~/assets/common.css'
import App from '~/router'

console.log(import.meta.env.ENV_BASE)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={import.meta.env.ENV_BASE}>
        <App />
    </BrowserRouter>,
)
