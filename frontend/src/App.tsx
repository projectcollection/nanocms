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
            <Link to="auth/login">
                <bt-button size="xs" font-size="var(--text-sm)" confirm rounded>
                    login
                </bt-button>
            </Link>
        </div>
    )
}

export default App
