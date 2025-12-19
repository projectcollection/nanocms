import { Link, useParams } from 'react-router'
import {
    useEffect,
    useRef, 
    useState } from "react"
import { FormField } from './index.ts'
import { InputType, Form } from '../types.ts'
import type { FormType } from '../types.ts'

export function PublicForm() {
    const { form_id } = useParams()
    const [form, set_form] = useState<FormType | null>(null)

    async function handle_sumbit(form_data: FormData) {
        let data = [...form_data.entries()].map(entry => entry[1])

        let post_body = {
            form_id,
            data
        }

        let res = await fetch(`${import.meta.env.VITE_API_URL}/forms/entry`, {
            body: JSON.stringify(post_body),
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    useEffect(() => {
        async function get_form(id: number) {
            let jwt_token = localStorage.getItem("jwt")

            if (jwt_token) {
                let res = await fetch(`${import.meta.env.VITE_API_URL}/forms?form_id=${id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                let res_json = await res.json()
                let form_json = res_json.data[0]
                form_json.data = JSON.parse(form_json.data)
                let form = Form.parse(form_json)

                set_form(form)
            } else {
                console.error("jwt token not found")
            }
        }

        if (form_id) {
            get_form(parseInt(form_id))
        }

        return () => { }
    }, [form_id])

    if (form === null) {
        return (<></>)
    }

    return (
        <div className="w-lg m-auto text-white">
            <div>
                <span className="text-3xl font-bold">
                    {form ? form.title : 'new form'}
                </span>
            </div>
            <div className="flex flex-col gap-5 mb-5 pb-5">
                <form action={handle_sumbit}>
                    {form.data.map((field, idx) => {
                        return (
                            <FormField {...field} key={idx} />
                        )
                    })}
                    <button
                        type="submit"
                        className="text-black bg-green-300 my-5 px-3 hover:cursor-pointer"
                    >
                        submit
                    </button>
                </form>
            </div>
        </div>
    )
}
