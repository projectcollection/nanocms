import { Link, useParams } from 'react-router'
import {
    useEffect,
    useRef, 
    useState } from "react"
import { InputType } from '../types.ts'
import type { Form } from '../types.ts'

export function EditForm() {
    const { form_id } = useParams()

    const [form, set_form] = useState<Form | null>(null)
    const [fake_data, set_fake_data] = useState<{ header: string, details: string, input_type: string }[]>([])
    const [new_field_header, set_new_field_header] = useState<string>('')
    const [new_field_detail, set_new_field_detail] = useState<string>('')
    const [selected_field_type, set_selected_field_type] = useState<string>('text')

    useEffect(() => {
        //TODO: fetch form based on id

        return () => { }
    }, [form_id])

    function add_field() {
        set_fake_data([...fake_data, {
            header: new_field_header,
            details: new_field_detail,
            input_type: selected_field_type
        }])

        set_new_field_header("")
        set_new_field_detail("")
        set_selected_field_type("text")


        // if (form == null) return
        //
        // console.log(form.data)
        //
        // set_form({
        //     ...form, data: [...form.data, {
        //         header: new_field_header,
        //         details: new_field_detail,
        //         input_type: selected_field_type
        //     }]
        // })
    }

    function remove_field(idx: number) {
        let current = [...fake_data]
        current.splice(idx, 1)
        set_fake_data(current)
    }

    // if (form === null) {
    //     return (<></>)
    // }

    return (
        <div className="w-lg m-auto">
            <div>
                <span className="text-3xl font-bold">
                    {form ? form.title : 'new form'}
                </span>
            </div>

            {/* Field Previews */}

            <div className="flex flex-col gap-5 mb-5 pb-5 border-b-1 border-red-400">
                {fake_data.map((data, idx) => {

                    const { header, details, input_type } = data

                    return (
                        <div key={idx}>
                            <button 
                                onClick={() => remove_field(idx)}
                                className="bg-red-400 hover:cursor-pointer"
                            >
                                remove
                            </button>
                            <h2>{header}</h2>
                            <p>{details}</p>
                            {(() => {
                                switch (input_type) {
                                    case InputType.enum.text:
                                        return (
                                            <input 
                                                type={data.input_type} 
                                                className="w-full bg-white text-black"
                                                disabled
                                            />)
                                    case InputType.enum.textarea:
                                        return (
                                            <textarea
                                                className="w-full bg-white text-black"
                                                disabled
                                            />)
                                    default:
                                        return <></>
                                }
                            })()
                            }
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
                        onChange={(e) => set_selected_field_type(e.target.value)}
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
        </div>
    )
}
