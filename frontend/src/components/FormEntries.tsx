import { Link, useParams } from 'react-router'
import {
    useEffect,
    useRef, 
    useState } from "react"
import type { Entry, Form } from '../types.ts'

export function FormEntries() {
    const [form, set_form] = useState<Form | null>(null)
    const [entries, set_entries] = useState<Entry[]>([])
    const { form_id } = useParams()

    useEffect(() => {
        set_entries([{
            id: 123,
            data: [
                {
                    input_type: 'text',
                    value: 'hello'
                },
                {
                    input_type: 'text',
                    value: 'testing'
                }
            ],
        },
        {
            id: 125,
            data: [
                {
                    input_type: 'text',
                    value: 'hello'
                }
            ],
        },
        {
            id: 126,
            data: [
                {
                    input_type: 'text',
                    value: 'hello'
                }
            ],
        }])

        return () => {
            return
        }
    }, [])


    return (
        <div className="w-screen outline-1 outline-solid outline-red-600">
            <div>
                <h1 className="text-3xl font-bold">
                    Entries for: {form_id}
                </h1>
            </div>
            <div>
                <ul className="flex flex-col gap-2">
                    {entries.map((form, idx) => {
                        return (
                            <li key={`${form.id} + ${idx}`} className="flex gap-2">
                                <button className="bg-red-400 px-3 hover:cursor-pointer">delete</button>

                                <Link to={`/forms/${form.id}/entries`}>
                                    <span>{form.title} some entry</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
