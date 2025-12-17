import { useFormStatus } from "react-dom"
import { useNavigate } from 'react-router'
import {
    useEffect,
    useRef, 
    useState } from "react"
import type { Ref, RefObject } from "react"

type UserCredentials = {
    username: string,
    password: string
}

type LoginResponse = {
    jwt: string
}

export function Login() {
    const { pending: is_pending } = useFormStatus()
    const form_ref = useRef<HTMLFormElement | null>(null)

    const navigate = useNavigate()

    async function handle_form_submission(form_data: FormData) {
        const username = form_data.get("username")
        const password = form_data.get("password")

        if (typeof username === "string" &&
            username.length > 3 &&
            typeof password === "string" &&
            password.length > 4) {
            const user_creds: UserCredentials = {
                username,
                password
            }

            try {
                let res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                    method: "POST",
                    body: JSON.stringify(user_creds),
                })
                let res_json: LoginResponse = await res.json()

                localStorage.setItem("jwt", res_json.jwt)
                navigate("/forms")
            } catch (err) {
                console.error("login request failed", err)
            }

        } else {
            console.error("invalid credentials");
        }
    }

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
                if (res.ok) {
                    navigate("/forms")
                }
            })
        }

        return () => {
            return
        }
    }, [])


    return (
        <div className="bg-blue-300">
            <form ref={form_ref} onSubmit={(e) => {
                e.preventDefault()

                if (form_ref != null && form_ref.current != null) {
                    const form_data = new FormData(form_ref.current)
                    handle_form_submission(form_data)
                }
            }}>
                <label>
                    login
                </label>
                <input name="username" />
                <input name="password" type="password" />
                <input type="submit" value="login" disabled={is_pending} />
            </form>
        </div>
    )
}
