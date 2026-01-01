import { useState } from 'react'
import { Link } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import { Logo } from './components/index'

function App() {
    return (
        <div className="
            w-full m-auto h-screen 
            flex flex-col gap-10
            justify-center items-center
            ">
            <Logo />
            <Link to="auth/login" className='text-black bg-green-300 px-3'>login</Link>
        </div>
    )
}

export default App
