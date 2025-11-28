enum InputType {
    text,
    textarea
}

export type FormField = {
    header: string,
    details: string,
    input_type: InputType
}
