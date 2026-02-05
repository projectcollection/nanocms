<svelte:options
    customElement={{
        tag: "bt-frame",
        shadow: "none",
        props: {
            numerator: {
                attribute: "numerator",
                type: "Number",
                reflect: false,
            },
            denominator: {
                attribute: "denominator",
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

    const tag = "bt-frame";

    interface Props {
        numerator?: number;
        denominator?: number;
        children?: Snippet;
    }

    const { numerator = 1, denominator = 1, children }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, { numerator, denominator }),
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
          aspect-ratio: ${numerator} / ${denominator};
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        ${selector.nor} > img,
        ${selector.nor} > video {
          inline-size: 100%;
          block-size: 100%;
          object-fit: cover;
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
