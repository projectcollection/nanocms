import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
// import './App.css'

import { PublicForm, Protected } from './components/index'

function App() {
    const [count, setCount] = useState(0)

    let path = window.location.pathname

    if (path === "/") {
        return (<Protected />)

    } else {
        return (<PublicForm />)
    }
}

export default App
