<svelte:options
    customElement={{
        tag: "bt-container",
        shadow: "open",
        props: {
            color: {
                attribute: "color",
                type: "String",
                reflect: true,
            },
            purple: {
                attribute: "purple",
                type: "Boolean",
                reflect: true,
            },
            purple_light: {
                attribute: "purple-light",
                type: "Boolean",
                reflect: true,
            },
        },
        extend: (customElementConstructor) => {
            return class extends customElementConstructor {
                constructor() {
                    super();
                }

                connectedCallback() {
                    super.connectedCallback();

                    const root = this.shadowRoot?.host;

                    htmx.process(root);
                }
            };
        },
    }}
/>

<script lang="ts">
    import type { Snippet } from "svelte";
    import { selectors_create, identifier_create } from "./helpers.ts";

    const tag = "bt-container";

    interface Props {
        color?: string;
        purple?: boolean;
        purple_light?: boolean;
        children?: Snippet;
    }

    const { color, purple, purple_light, children }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, { color, purple, purple_light }),
    );

    let select = $derived(selectors_create(tag, identifier));
    // ${purple_light ? "var(--color-white)" : "inherit"}
</script>

<svelte:head>
    <!-- prop-dependent styles -->
    {#if document && !document.getElementById(identifier)}
        {@html `
    <style id="${identifier}">
        ${select.ce}, ${select.sv}  {
            background-color: ${color ? color : purple ? "var(--color-purple)" : purple_light ? "var(--color-purple-light)" : "inherit"};
            padding: var(--text-sm);
        }
    </style>
`
            .replace(/\s\s+/g, "")
            .trim()}
    {/if}
</svelte:head>

<div part={identifier}>
    {#if children}
        {@render children()}
    {:else}
        <svelte:element this={"slot"} />
    {/if}
</div>

<!-- reserved for static styles -->
<style>
    :host {
        display: block;
    }
</style>
