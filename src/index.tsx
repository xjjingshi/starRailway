import React from 'react'
import ReactDom from 'react-dom/client'
import './style/sass/index.scss'
import Center from './component/center'
import { Provider } from 'react-redux'
const root = ReactDom.createRoot( document.getElementById('root') as HTMLElement)
import store from './redux'

const App = () => {

    return <div className="body_box">
        <div>头部</div>
       <Center />
        <div>
            <div className="arrow_top"></div>
            底部
        </div>
        
    </div>
}


root.render(

    <Provider store={store}>
        <App />
    </Provider>
)