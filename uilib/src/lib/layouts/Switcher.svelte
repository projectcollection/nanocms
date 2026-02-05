<svelte:options
    customElement={{
        tag: "bt-switcher",
        shadow: "none",
        props: {
            space: {
                attribute: "space",
                type: "String",
                reflect: false,
            },
            threshold: {
                attribute: "threshold",
                type: "String",
                reflect: false,
            },
            limit: {
                attribute: "limit",
                type: "Number",
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

    const tag = "bt-switcher";

    interface Props {
        space?: string;
        threshold?: string;
        limit?: number;
        children?: Snippet;
    }

    const {
        space = "var(--s-1)",
        threshold = "var(--measure)",
        limit = 5,
        children,
    }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, { space, threshold, limit }),
    );
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
          flex-wrap: wrap;
          gap: ${space};
        }

        ${selector.nor} > * {
          flex-grow: 1;
          flex-basis: calc(( ${threshold} - 100%) * 999);
        }

        ${selector.nor} > :nth-last-child(n+ ${parseInt(limit) + 1} ),
        ${selector.nor} > :nth-last-child(n+ ${parseInt(limit) + 1}) ~ * {
          flex-basis: 100%;
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
