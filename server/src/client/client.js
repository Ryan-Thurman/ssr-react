// Start for the client side app
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { BrowerRouter } from 'react-router-dom'

ReactDOM.hydrate(
    <BrowerRouter>
        <Routes />
    </BrowerRouter>
    , document.querySelector('#root'))