<svelte:options
    customElement={{
        tag: "bt-imposter",
        shadow: "none",
        props: {
            fixed: {
                attribute: "fixed",
                type: "Boolean",
                reflect: false,
            },
            margin: {
                attribute: "margin",
                type: "String",
                reflect: false,
            },
        },
        extend: (customElementConstructor) => {
            return class extends customElementConstructor {
                constructor() {
                    super();
                }

                connectedCallback() {
                    super.connectedCallback();
                    htmx_integrate(this);
                }
            };
        },
    }}
/>

<script lang="ts">
    import type { Snippet } from "svelte";
    import {
        identifier_create,
        selectors_create,
        htmx_integrate,
    } from "../helpers.ts";

    const tag = "bt-imposter";

    interface Props {
        fixed?: boolean;
        margin?: string;
        children?: Snippet;
    }

    const { fixed = false, margin = "0px", children }: Props = $props();

    let identifier = $derived(identifier_create(tag, { fixed, margin }));
    let selector = $derived(selectors_create(tag, identifier));

    $effect(() => {
        if ($host()) {
            $host().dataset.i = identifier;
        }
    });
</script>

<svelte:head>
    {#if document && !document.getElementById(identifier)}
        {@html `
    <style id="${identifier}">
        ${selector.nor}, ${selector.ce} {
          position: ${fixed ? "fixed" : "absolute"};
          inset-block-start: 50%;
          inset-inline-start: 50%;
          transform: translate(-50%, -50%);
        }

        ${selector.nor}.contain, ${selector.ce}.contain {
          overflow: auto;
          max-inline-size: calc(100% - (${margin} * 2));
          max-block-size: calc(100% - (${margin} * 2));
        }
    </style>
`
            .replace(/\s\s+/g, "")
            .trim()}
    {/if}
</svelte:head>

{#if children}
    <div data-i={identifier}>
        {@render children()}
    </div>
{/if}
