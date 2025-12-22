import { useState } from 'react'
import { Link } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import { PublicForm, Protected } from './components/index'

function App() {
    return (
        <div className="
            w-full m-auto h-screen 
            flex
            flex-col
            justify-center
            items-center
            ">
            <div className='text-white text-3xl font-bold'>nanocms</div>
            <Link to="auth/login" className='text-black bg-green-300 px-3'>login</Link>
        </div>
    )
}

export default App
