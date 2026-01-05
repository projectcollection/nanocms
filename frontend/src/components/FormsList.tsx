import { Link, useNavigate } from 'react-router'
import {
    useEffect,
    useRef, 
    useState } from "react"

import { Form } from '../types.ts'
import type { FormType } from '../types.ts'

export function FormsList() {
    const navigate = useNavigate()

    const [forms, set_forms] = useState<FormType[]>([])
    const [is_creating_form, set_is_creating_form] = useState<boolean>(false)

    async function create_form(title: string = "new form") {
        let jwt_token = localStorage.getItem("jwt")
        if (jwt_token == null) {
            navigate("/auth/login")
            return 
        }

        let post_body = {
            title,
            fields: []
        }

        let res = await fetch(`${import.meta.env.VITE_API_URL}/forms`, {
            body: JSON.stringify(post_body),
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt_token}`
            }
        })

        let form_json = (await res.json()).data

        let fields_data_as_json = JSON.parse(form_json.data)
        form_json.data = fields_data_as_json
        let new_form = Form.parse(form_json)

        set_forms([new_form, ...forms])
    }

    async function delete_form(idx: number) {
        let jwt_token = localStorage.getItem("jwt")
        if (jwt_token == null) {
            navigate("/auth/login")
            return 
        }
        
        let form_to_delete = forms[idx]

        let confirmed = confirm("confirm form deletion")
        if (confirmed) {
            let post_body = {
                form_id: form_to_delete.id
            }

            try {
                let res = await fetch(`${import.meta.env.VITE_API_URL}/forms`, {
                    body: JSON.stringify(post_body),
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwt_token}`
                    }
                })
            } catch (err) {
                console.error("failed to delete:", err)
            }

            set_forms([...forms.slice(0, idx), ...forms.slice(idx + 1)])
        } else {
            console.error("jwt token not found")
        }
    }

    useEffect(() => {
        async function get_forms() {
            let jwt_token = localStorage.getItem("jwt")
            if (jwt_token == null) {
                navigate("/auth/login")
                return 
            }

            let res = await fetch(`${import.meta.env.VITE_API_URL}/forms`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt_token}`
                }
            })

            if (!res.ok) navigate("/auth/login")

            let res_json = await res.json()
            let form_list = res_json.data.map((form: any) => {
                let data_as_json = JSON.parse(form.data)
                form.data = data_as_json.fields ? data_as_json.fields : data_as_json

                let parsed_form: FormType
                try {
                    parsed_form = Form.parse(form)

                    return parsed_form
                } catch (err) {
                    console.error(err)
                    return 
                }
            })

            set_forms([...forms, ...form_list])
        }

        get_forms()

        return () => {
            return
        }
    }, [])


    return (
        <div className="w-full">
            <div>
                <button 
                    onClick={() => create_form()}
                    className="text-black bg-green-300 my-5 px-3 hover:cursor-pointer">
                    new form
                </button>
            </div>
            <div>
                <ul className="flex flex-col gap-2">
                    {forms.map((form, idx) => {
                        return (
                            <li key={`${form.id} + ${idx}`} className="flex gap-2 justify-between">
                                <div className="flex gap-2">
                                    <Link to={`/forms/${form.id}/edit`}>
                                        <button className="text-black bg-gray-300 px-3 hover:cursor-pointer" >edit</button>
                                    </Link>
                                    <Link>
                                        <button 
                                            className="bg-red-400 px-3 hover:cursor-pointer"
                                            onClick={() => { delete_form(idx) }}
                                        >delete</button>
                                    </Link>
                                    <Link to={`/submit/${form.id}`}>
                                        <button
                                            className="text-black bg-green-300 px-3 hover:cursor-pointer"
                                        >share</button>
                                    </Link>
                                    <Link to={`/forms/${form.id}/entries`}>
                                        <button
                                            className="text-black bg-green-300 px-3 hover:cursor-pointer"
                                        >entries</button>
                                    </Link>
                                    <Link to={`/forms/${form.id}/entries`}>
                                        <span>{form.title} </span>
                                    </Link>
                                </div>
                                <span>
                                    {form.updated_at && (new Date(form.updated_at)).toDateString()}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
