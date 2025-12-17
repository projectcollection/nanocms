import { useState } from 'react'
import { Link } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
// import './App.css'

import { PublicForm, Protected } from './components/index'

function App() {
    return (
        <>
            <div className='text-white'>nanocms</div>
            <Link to="auth/login" className='text-black bg-green-300 px-3'>login</Link>
        </>
    )
}

export default App
