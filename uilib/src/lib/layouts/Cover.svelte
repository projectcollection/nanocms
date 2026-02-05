<svelte:options
    customElement={{
        tag: "bt-cover",
        shadow: "none",
        props: {
            main: {
                attribute: "main",
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

    const tag = "bt-cover";

    interface Props {
        main?: string; // css selector
        space?: string;
        children?: Snippet;
    }

    const { main, space = "var(--s-1)", children }: Props = $props();

    let identifier = $derived(identifier_create(tag, { main, space }));
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
          display: flex;
          flex-direction: column;
          min-block-size: 100vh;
          padding: ${space};
        }

        ${selector.nor} > * {
          margin-block: ${space};
        }

        ${selector.nor} > :first-child:not(${main}) {
          margin-block-start: 0;
        }

        ${selector.nor} > :last-child:not(${main}) {
          margin-block-end: 0;
        }

        ${selector.nor} > ${main} {
          margin-block: auto;
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
