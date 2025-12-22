import { useFormStatus } from "react-dom"
import { useNavigate, Outlet, NavLink } from "react-router"
import {
    useEffect,
    useRef, 
    useState } from "react"
import { FormsList } from "./index.ts"

import type { Ref, RefObject } from "react"
import type { FormField, Form } from '../types.ts'


export function Protected() {
    const navigate = useNavigate()

    useEffect(() => {
        let jwt_token = localStorage.getItem("jwt")

        if (jwt_token) {
            fetch(`${import.meta.env.VITE_API_URL}/validate_jwt`, {
                body: JSON.stringify({ jwt: jwt_token }), 
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => {
                if (!res.ok) {
                    navigate("/auth/login")
                }
            })
        } else {
            navigate("/auth/login")
        }

        return () => {
            return
        }
    }, [])


    return (
        <div className="text-white mx-10 mb-10">
            <nav>
                <NavLink to="/forms">
                    <h1 className="text-2xl font-bold">
                        nanocms
                    </h1>
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
