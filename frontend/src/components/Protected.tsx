import { useFormStatus } from "react-dom"
import {
    useEffect,
    useRef, 
    useState } from "react"
import type { Ref } from "react"
import type { FormField } from '../types.ts'

export function Protected() {
    return (
        <AuthPage />
    )
}

type UserCredentials = {
    username: string,
    password: string
}

type LoginResponse = {
    jwt: string
}


function AuthPage() {
    const [is_authed, set_is_authed] = useState(false)

    const { pending: is_pending } = useFormStatus()
    const form_ref: Ref<HTMLFormElement> = useRef(null)

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
                let res = await fetch("http://localhost:8000/login", {
                    method: "POST",
                    body: JSON.stringify(user_creds),
                })
                let res_json: LoginResponse = await res.json()

                localStorage.setItem("jwt", res_json.jwt)
                set_is_authed(true)
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
                    set_is_authed(true)
                }
            })
        }

        return () => {
            return
        }
    }, [])

    if (is_authed) {
        return (
            <div className="w-screen bg-red-500">
                <div>
                    <h1 className="text-3xl font-bold underline text-teal-200">
                        Your forms:
                    </h1>
                    <button>
                        new form
                    </button>
                </div>
                <div>
                    <ul>
                        <li>
                            test entry
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <>
            <form ref={form_ref} onSubmit={(e) => {
                e.preventDefault()

                if (form_ref.current != null) {
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
        </>
    )
}
