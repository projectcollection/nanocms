import { Link } from 'react-router'
import {
    useEffect,
    useRef, 
    useState } from "react"
import type { Form } from '../types.ts'

export function FormsList() {
    const [forms, set_forms] = useState<Form[]>([])
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

            console.log(res)

            let res_json: Form = await res.json()
            set_forms([...forms, res_json])
        } else {
            console.error("jwt token not found")
        }
    }

    useEffect(() => {
        set_forms([{
            id: 123,
            title: "placeholder form",
            published: true,
            data: [{
                header: "test form",
                details: "trying things out",
                input_type: "text"
            }],
            deadline: new Date(Date.now()),
            created_at: new Date(Date.now()),
            updated_at: new Date(Date.now()),
            deleted_at: new Date(Date.now()) 
        },
        {
            id: 125,
            title: "placeholder form",
            published: true,
            data: [{
                header: "test form",
                details: "trying things out",
                input_type: "text"
            }],
            deadline: new Date(Date.now()),
            created_at: new Date(Date.now()),
            updated_at: new Date(Date.now()),
            deleted_at: new Date(Date.now()) 
        },
        {
            id: 126,
            title: "placeholder form",
            published: true,
            data: [{
                header: "test form",
                details: "trying things out",
                input_type: "text"
            }],
            deadline: new Date(Date.now()),
            created_at: new Date(Date.now()),
            updated_at: new Date(Date.now()),
            deleted_at: new Date(Date.now()) 
        }])

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
                                <button className="bg-red-400 px-3 hover:cursor-pointer">delete</button>

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
