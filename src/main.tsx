import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '~/assets/root.css'
import '~/assets/common.css'
import App from '~/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
)
