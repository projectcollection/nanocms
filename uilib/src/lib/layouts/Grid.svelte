<svelte:options
    customElement={{
        tag: "bt-grid",
        shadow: "none",
        props: {
            min: {
                attribute: "min",
                type: "String",
                reflect: false,
            },
            space: {
                attribute: "space",
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

    const tag = "bt-grid";

    interface Props {
        min?: string; // css selector
        space?: string;
        children?: Snippet;
    }

    const { min = "250px", space = "var(--s2)", children }: Props = $props();

    let identifier = $derived(identifier_create(tag, { min, space }));
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
        ${selector.nor} {
          display: grid;
          grid-gap: ${space};
        }

        @supports (width: min(${min}, 100%)) {
          ${selector.nor} {
            grid-template-columns: repeat(auto-fit, minmax(min(${min}, 100%), 1fr));
          }
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
