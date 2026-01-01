import { Link, useParams, useNavigate } from 'react-router'
import {
    useEffect,
    useRef, 
    useState } from "react"
import { Entry, Form } from '../types.ts'
import type { FormType, EntryType } from '../types.ts'

export function FormEntries() {
    const navigate = useNavigate()

    const { form_id } = useParams()
    const [form, set_form] = useState<FormType | null>(null)
    const [entries, set_entries] = useState<EntryType[]>([])

    useEffect(() => {
        async function get_entries() {
            let jwt_token = localStorage.getItem("jwt")
            if (jwt_token == null) {
                navigate('/auth/login')
                return
            }
            let res = await fetch(`${import.meta.env.VITE_API_URL}/forms/entry?form_id=${form_id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt_token}`
                }
            })
            let res_json = await res.json()
            let entries: EntryType[] = res_json['data'].map((entry: any) => Entry.parse(entry))

            set_entries(entries)
        }


        get_entries()
        return () => { }
    }, [form_id])

    useEffect(() => {
        async function get_form(id: number) {
            let jwt_token = localStorage.getItem("jwt")
            if (jwt_token == null) {
                navigate('/auth/login')
                return
            }

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
        }

        if (form_id) {
            get_form(parseInt(form_id))
        }
        return () => { }

    }, [form_id])

    return (
        <div className="w-full mt-10">
            <div>
                <h1 className="text-3xl font-bold">
                    {form && form.title}
                </h1>
            </div>
            <div>
                {form && form.data.length === 0 && (<span className="text-red-500">no fields please <Link to={`/forms/${form_id}/edit`} className="text-blue-500">edit</Link></span>)}
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th></th>
                            {form && form.data.map((column, idx) => {
                                return (
                                    <th key={column.header} className="p-2 text-left">
                                        {column.header}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry, idx) => {
                            let entry_data = JSON.parse(entry.data)

                            return (
                                <tr key={`${entry.id} + ${idx}`}>
                                    <td className="p-2">{entry.updated_at && (new Date(entry.updated_at).toDateString())}</td>
                                    {entry_data.map((column: string, idx: number) => {
                                        return (
                                            <td 
                                                key={column + idx}
                                                className="p-2"
                                            >{column}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
