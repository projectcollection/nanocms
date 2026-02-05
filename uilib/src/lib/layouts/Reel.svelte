<svelte:options
    customElement={{
        tag: "bt-reel",
        shadow: "none",
        props: {
            itemwidth: {
                attribute: "itemwidth",
                type: "String",
                reflect: false,
            },
            space: {
                attribute: "space",
                type: "String",
                reflect: false,
            },
            height: {
                attribute: "height",
                type: "String",
                reflect: false,
            },
            trackcolor: {
                attribute: "trackcolor",
                type: "String",
                reflect: false,
            },
            thumbcolor: {
                attribute: "thumbcolor",
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

    const tag = "bt-reel";

    interface Props {
        itemwidth?: string;
        space?: string;
        height?: string;
        trackcolor?: string;
        thumbcolor?: string;
        children?: Snippet;
    }

    const {
        itemwidth = "auto",
        space = "var(--s1)",
        height = "auto",
        trackcolor = "#000",
        thumbcolor = "#fff",
        children,
    }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, {
            itemwidth,
            space,
            height,
            trackcolor,
            thumbcolor,
        }),
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
          block-size: ${height};
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-color: #fff #000;
        }

        ${selector.nor}::-webkit-scrollbar {
          block-size: 1rem;
        }

        ${selector.nor}::-webkit-scrollbar-track {
          background-color: #000;
        }

        ${selector.nor}::-webkit-scrollbar-thumb {
          background-color: var(--color-purple);
          background-image: linear-gradient(${trackcolor} 0, ${trackcolor} 0.25rem, ${thumbcolor} 0.25rem, ${thumbcolor} 0.75rem, ${trackcolor} 0.75rem);
        }

        ${selector.nor} > * {
          flex: 0 0 ${itemwidth};
        }


        ${selector.nor} > img {
          block-size: 100%;
          flex-basis: auto;
          width: auto;
        }

        ${selector.nor} > * + * {
          margin-inline-start: ${space};
        }

        ${selector.nor}.overflowing {
          padding-block-end: ${space};
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
