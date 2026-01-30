<svelte:options
    customElement={{
        tag: "bt-sidebar",
        shadow: "none",
        props: {
            right: {
                attribute: "right",
                type: "Boolean",
                reflect: false,
            },
            gap: {
                attribute: "gap",
                type: "String",
                reflect: false,
            },
            content_min_width: {
                attribute: "content-min-width",
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

    const tag = "bt-sidebar";

    interface Props {
        right?: boolean;
        gap?: string;
        content_min_width?: number;
        children?: Snippet;
    }

    const {
        right,
        gap = "var(--s1)",
        content_min_width = 50,
        children,
    }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, {
            right,
            gap,
            content_min_width,
        }),
    );

    const selector = $derived(selectors_create(tag, identifier));

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
        gap: ${gap};
      }

      ${selector.nor} > :${right ? "last" : "first"}-child {
        flex-grow: 1;
        max-inline-size: none;
      }
      ${selector.nor} > :${right ? "first" : "last"}-child {
        flex-basis: 0;
        flex-grow: 999;
        min-inline-size: ${content_min_width}%;
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
