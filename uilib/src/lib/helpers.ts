export function selectors_create(tag: string, identifier: string) {
    return {
        nor: `[data-i=${identifier}]`,
        ce: `${tag}::part(${identifier})`
    }
}

export function identifier_create(tag: string, props: {}) {
    let id = `${tag}-`.concat(Object.entries(props).map(v => String(v[1])))
    return id.replace(/[\(\),]+/g, "")
}
