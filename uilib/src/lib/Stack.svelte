<svelte:options
    customElement={{
        tag: "bt-stack",
        shadow: "open",
        props: {
            space: {
                attribute: "space",
                type: "String",
                reflect: true,
            },
            recursive: {
                attribute: "recursive",
                type: "Boolean",
                reflect: true,
            },
            split_after: {
                attribute: "splitAfter",
                type: "Number",
                reflect: true,
            },
            row: {
                attribute: "row",
                type: "Boolean",
                reflect: true,
            },
        },
        extend: (customElementConstructor) => {
            return class extends customElementConstructor {
                constructor() {
                    super();
                    console.log(
                        "the shadow root",
                        super.shadowRoot?.childNodes,
                    );
                }

                connectedCallback() {
                    super.connectedCallback();

                    const root = this.shadowRoot?.host;
                    // const root = this.attachShadow({ mode: "open" });

                    console.log(root);

                    // htmx.process(root);
                }
            };
        },
    }}
/>

<script lang="ts">
    import type { Snippet } from "svelte";
    import { browser } from "$app/environment";

    interface Props {
        space?: string;
        recursive?: boolean;
        split_after?: number;
        row?: boolean;
        shadowRoot?: HTMLElement;
    }

    const {
        space = "var(--space)",
        recursive = true,
        split_after,
        row = false,
        shadowRoot,
    }: Props = $props();

    let data_i = $derived(`stack-${space}-${recursive}-${split_after}`);

    function apply_style(data_i: string) {
        const sroot = shadowRoot || document;

        console.log("the root", sroot);
        if (browser && !sroot.getElementById(data_i)) {
            let style_el = sroot.createElement("style");
            style_el.id = data_i;
            style_el.innerHTML = `
                    [data-i="${data_i}"]${recursive ? "" : " >"} * + * {
                        margin-block-start: ${space};
                    }

                    ${
                        split_after
                            ? `
                    [data-i="${data_i}"]:only-child {
                        block-size: 100%;
                    }

                    [data-i="${data_i}"] > :nth-child(${split_after}) {
                        margin-block-end: auto;
                    }`
                            : ""
                    }

                    ${
                        row
                            ? `
                    [data-i="${data_i}"] {
                        flex-direction: row !important;
                    }`
                            : ""
                    }
                `
                .replace(/\s\s+/g, " ")
                .trim();
            sroot.head.appendChild(style_el);
        }
    }

    $effect(() => {
        apply_style(data_i);
        return () => {};
    });
</script>

<div data-i={data_i}>
    <slot />
</div>

<style>
    @import "./styles.css";

    :host {
        display: block;
    }

    /* -ref- */
    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    div > * + * {
        margin-block-start: var(--space);
    }
</style>
