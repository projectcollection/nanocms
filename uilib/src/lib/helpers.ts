import short_hash from 'shorthash2'

export function selectors_create(tag: string, identifier: string) {
    return {
        nor: `[data-i=${identifier}]`,
        ce: `${tag}::part(${identifier})`
    }
}

export function identifier_create(tag: string, props: {}) {
    let stringified_keys = "".concat(Object.entries(props).map(v => String(v[1])))
    let hash = short_hash(stringified_keys)
    return `${tag}-${hash}`
}

//@ts-ignore
//not sure what the type of custom_element is
export function htmx_integrate(custom_element) {
    const root = custom_element.shadowRoot?.host || custom_element;

    //@ts-ignore
    if (typeof htmx != 'undefined') {
        //@ts-ignore
        htmx.process(root);
    }
}
