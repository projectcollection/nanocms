import { Link, useParams } from 'react-router'
import {
    useEffect,
    useRef, 
    useState } from "react"
import { FormField } from './index.ts'
import { Form, InputType } from '../types.ts'
import type { FormType, InputTypeType } from '../types.ts'

export function EditForm() {
    const { form_id } = useParams()

    const [form, set_form] = useState<FormType | null>(null)
    const [is_edited, set_isedited] = useState<boolean>(false)

    const [new_field_header, set_new_field_header] = useState<string>('')
    const [new_field_detail, set_new_field_detail] = useState<string>('')
    const [selected_field_type, set_selected_field_type] = useState<InputTypeType>('text')

    useEffect(() => {
        async function get_form(id: number) {
            let jwt_token = localStorage.getItem("jwt")

            if (jwt_token) {
                let res = await fetch(`${import.meta.env.VITE_API_URL}/forms?form_id=${id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwt_token}`
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

    function add_field() {
        if (form == null) return

        set_form({
            ...form, data: [...form.data, {
                header: new_field_header,
                details: new_field_detail,
                input_type: selected_field_type
            }]
        })

        set_isedited(true)

        set_new_field_header("")
        set_new_field_detail("")
        set_selected_field_type("text")
    }

    function remove_field(idx: number) {
        if (form == null) return

        set_form({
            ...form,
            data: [...form.data.slice(0, idx), ...form.data.slice(idx + 1)]
        })
    }

    async function update_form() {
        let jwt_token = localStorage.getItem("jwt")

        let put_body = {
            form_id,
            data: form
        }

        if (jwt_token) {
            let res = await fetch(`${import.meta.env.VITE_API_URL}/forms`, {
                body: JSON.stringify(put_body),
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt_token}`
                }
            })

            let res_json = await res.json()

            set_isedited(false)
        } else {
            console.error("jwt token not found")
        }

    }

    if (form === null) {
        return (<></>)
    }

    return (
        <div className="w-lg m-auto">
            <div className="flex flex-row gap-5 items-center">
                <span className="text-3xl font-bold">
                    {form.title}
                </span>
                {
                    is_edited ? 
                        (<button
                            onClick={() => update_form()}
                            className="text-black bg-green-300 my-5 px-3 hover:cursor-pointer"
                        >
                            save changes
                        </button>
                        ) :
                        (<></>)
                }
            </div>

            {/* Field Previews */}

            <div className="flex flex-col gap-5 mb-5 pb-5 border-b-1 border-red-400">
                {form.data.map((field, idx) => {
                    return (
                        <div key={idx}>
                            <button 
                                onClick={() => remove_field(idx)}
                                className="bg-red-400 hover:cursor-pointer"
                            >
                                remove
                            </button>
                            <FormField {...{ ...field, is_preview: true }} />
                        </div>
                    )
                })}
            </div>

            <div
                className="flex flex-col align-center"
            >
                <h3 className="text-lg font-bold">
                    new field options
                </h3>
                <label>
                    header:
                    <input 
                        type="text"
                        value={new_field_header}
                        onChange={e => set_new_field_header(e.target.value)}
                        className="bg-white text-black block"
                    />
                </label>
                <label>
                    detail:
                    <input 
                        type="text"
                        value={new_field_detail}
                        onChange={e => set_new_field_detail(e.target.value)}
                        className="bg-white text-black block"
                    />
                </label>
                <label>
                    type:
                    <select 
                        value={selected_field_type} 
                        onChange={(e) => {
                            try {
                                let input_type = InputType.parse(e.target.value)
                                set_selected_field_type(input_type)
                            } catch (error) {
                                console.error(error)
                            }
                        }}
                        className="bg-white text-black block"
                    >
                        {Object.entries(InputType.enum).map(entry => {
                            const [key, value] = entry

                            if (isNaN(parseInt(key))) {
                                return (
                                    <option key={key}>
                                        {key}
                                    </option>
                                )
                            }
                        })}
                    </select>
                </label>
                <button 
                    className="text-black bg-green-300 my-5 px-3 hover:cursor-pointer"
                    onClick={() => add_field()}
                >
                    add field
                </button>
            </div>
        </div >
    )
}
