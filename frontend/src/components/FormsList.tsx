import { Link } from 'react-router'
import {
    useEffect,
    useRef, 
    useState } from "react"

import { Form } from '../types.ts'
import type { FormType } from '../types.ts'

export function FormsList() {
    const [forms, set_forms] = useState<FormType[]>([])
    const [is_creating_form, set_is_creating_form] = useState<boolean>(false)

    async function create_form(title: string = "new form") {
        let jwt_token = localStorage.getItem("jwt")

        if (jwt_token) {
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
            
            set_forms([...forms, new_form])
        } else {
            console.error("jwt token not found")
        }
    }

    async function delete_form(idx: number) {
        let jwt_token = localStorage.getItem("jwt")
        let form_to_delete = forms[idx]

        if (jwt_token) {
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

            if (jwt_token) {
                let res = await fetch(`${import.meta.env.VITE_API_URL}/forms`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwt_token}`
                    }
                })

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
                        console.log(data_as_json)
                        return 
                    }
                })

                set_forms([...forms, ...form_list])
            } else {
                console.error("jwt token not found")
            }
        }

        get_forms()

        return () => {
            return
        }
    }, [])


    return (
        <div className="w-screen outline-1 outline-solid outline-red-600">
            <div>
                <h1 className="text-3xl font-bold">
                    Your forms:
                </h1>
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
                            <li key={`${form.id} + ${idx}`} className="flex gap-2">
                                <Link to={`/forms/${form.id}/edit`}>
                                    <button className="text-black bg-gray-300 px-3 hover:cursor-pointer" >edit</button>
                                </Link>
                                <button 
                                    className="bg-red-400 px-3 hover:cursor-pointer"
                                    onClick={() => { delete_form(idx) }}
                                >delete</button>

                                <Link to={`/forms/${form.id}/entries`}>
                                    <span>{form.title} </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
