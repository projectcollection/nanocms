<svelte:options
    customElement={{
        tag: "bt-container",
        shadow: "none",
        props: {
            name: {
                attribute: "name",
                type: "String",
                reflect: false,
            },
            color: {
                attribute: "color",
                type: "String",
                reflect: false,
            },
            purple: {
                attribute: "purple",
                type: "Boolean",
                reflect: false,
            },
            purple_light: {
                attribute: "purple-light",
                type: "Boolean",
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

    const tag = "bt-container";

    interface Props {
        name?: string;
        color?: string;
        purple?: boolean;
        purple_light?: boolean;
        children?: Snippet;
    }

    const { name, color, purple, purple_light, children }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, { name, color, purple, purple_light }),
    );

    let selector = $derived(selectors_create(tag, identifier));

    $effect(() => {
        if ($host()) {
            $host().dataset.i = identifier;
        }
    });
</script>

<svelte:head>
    <!-- prop-dependent styles -->
    {#if document && !document.getElementById(identifier)}
        {@html `
    <style id="${identifier}">
        ${selector.nor}  {
            display: block;
            background-color: ${color ? color : purple ? "var(--color-purple)" : purple_light ? "var(--color-purple-light)" : "inherit"};
            padding: var(--text-sm);
            container-name: ${name};
            container-type: inline-size;
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
