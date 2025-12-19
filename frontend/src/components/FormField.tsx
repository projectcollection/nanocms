import { InputType } from "../types.ts"
import type { FormFieldType } from "../types.ts"

export function FormField({
    header,
    details,
    input_type,
    is_preview = false
}: FormFieldType & { is_preview?: boolean }) {
    return (<div>
        <h2>{header}</h2>
        <p>{details}</p>
        {(() => {
            switch (input_type) {
                case InputType.enum.text:
                    return (
                        <input 
                            name={header.toLowerCase()}
                            type={input_type} 
                            disabled={is_preview}
                            className="w-full bg-white text-black"
                        />)
                case InputType.enum.textarea:
                    return (
                        <textarea
                            name={header.toLowerCase()}
                            disabled={is_preview}
                            className="w-full bg-white text-black"
                        />)
                default:
                    return <></>
            }
        })()
        }
    </div>)
}
