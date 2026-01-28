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
