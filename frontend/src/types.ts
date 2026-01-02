import * as z from 'zod'

export const InputType = z.enum(['text', 'textarea'])
export type InputTypeType = z.infer<typeof InputType>

export const FormField = z.object({
    header: z.string(),
    details: z.string(),
    input_type: InputType
})
export type FormFieldType = z.infer<typeof FormField>

export const Form = z.object({
    id: z.number(),
    title: z.string(),
    published: z.boolean(),
    data: z.array(FormField),
    deadline: z.nullable(z.iso.datetime()),
    created_at: z.nullable(z.iso.datetime()),
    updated_at: z.nullable(z.iso.datetime()),
    deleted_at: z.nullable(z.iso.datetime())
})
export type FormType = z.infer<typeof Form>

export const Entry = z.object({
    id: z.number(),
    data: z.any(),
    created_at: z.nullable(z.iso.datetime()),
    updated_at: z.nullable(z.iso.datetime()),
})
export type EntryType = z.infer<typeof Entry>

export const Analytics = z.array(z.number())
export type AnalyticsType = z.infer<typeof Analytics>
