<svelte:options
    customElement={{
        tag: "bt-icon",
        shadow: "open",
        props: {
            size: {
                attribute: "size",
                type: "String",
            },
            sm: {
                attribute: "sm",
                type: "Boolean",
            },
            lg: {
                attribute: "lg",
                type: "Boolean",
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

    const tag = "bt-icon";

    interface Props {
        size?: string;
        sm?: boolean;
        lg?: boolean;
        children?: Snippet;
    }

    const { size = "var(--text-base)", sm, lg, children }: Props = $props();

    let identifier = $derived(identifier_create(tag, { size, sm, lg }));
    let select = $derived(selectors_create(tag, identifier));

    let size_ = $derived(
        (() => {
            if (sm) return "var(--text-sm)";
            if (lg) return "var(--text-lg)";
            return size;
        })(),
    );
</script>

<svelte:head>
    <!-- prop-dependent styles -->
    {#if document && !document.getElementById(identifier)}
        {@html `
    <style id="${identifier}">
        ${select.ce}, ${select.sv}  {
            width: ${size_};
            height: ${size_};
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
    :host,
    div {
        display: inline-block;
    }
</style>
