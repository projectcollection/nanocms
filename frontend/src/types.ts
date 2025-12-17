import * as z from 'zod'

export const InputType = z.enum(['text', 'textarea'])
export type InputType = z.infer<typeof InputType>

export const FormField = z.object({
    header: z.string(),
    details: z.string(),
    input_type: InputType
})
export type FormField = typeof FormField


export const Form = z.object({
    id: z.number(),
    title: z.string(),
    published: z.boolean(),
    data: z.array(FormField),
    deadline: z.iso.date(),
    created_at: z.iso.date(),
    updated_at: z.iso.date(),
    deleted_at: z.iso.date()
})
export type Form = z.infer<typeof Form>

export const Entry = z.object({
    id: z.number(),
    data: z.any()
})
export type Entry = z.infer<typeof Entry>
