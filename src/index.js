import React from "react";
import ReactDom from 'react-dom/client'
import './style/sass/index.scss'

const root = ReactDom.createRoot( document.getElementById('root'))

const App = () => {

    return <div className="body_box">
        <div>头部</div>
        <div>
            <div className="arrow_top"></div>
            底部
        </div>
        
    </div>
}


root.render(<App />)