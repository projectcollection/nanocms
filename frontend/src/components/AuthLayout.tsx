import { Outlet } from 'react-router'
export function AuthLayout() {
    return (
        <div>
            <h1>Enter your Credentials</h1>
            <Outlet />
        </div>
    )
}
