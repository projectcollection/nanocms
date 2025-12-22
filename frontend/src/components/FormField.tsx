import { InputType } from "../types.ts"
import type { FormFieldType } from "../types.ts"

export function FormField({
    header,
    details,
    input_type,
    is_preview = false
}: FormFieldType & { is_preview?: boolean }) {
    return (
        <div>
            <h1 className="text-xl font-bold">{header}</h1>
            <p className="mb-3">{details}</p>
            {(() => {
                switch (input_type) {
                    case InputType.enum.text:
                        return (
                            <input 
                                name={header.toLowerCase()}
                                type={input_type} 
                                disabled={is_preview}
                                className="w-full bg-white disabled:bg-gray-300 text-black"
                            />)
                    case InputType.enum.textarea:
                        return (
                            <textarea
                                name={header.toLowerCase()}
                                disabled={is_preview}
                                className="w-full bg-white disabled:bg-gray-300 text-black"
                            />)
                    default:
                        return <></>
                }
            })()
            }
        </div>
    )
}
