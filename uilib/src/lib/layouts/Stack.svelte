<svelte:options
    customElement={{
        tag: "bt-stack",
        shadow: "none",
        props: {
            space: {
                attribute: "space",
                type: "String",
                reflect: false,
            },
            split_after: {
                attribute: "split-after",
                type: "Number",
                reflect: false,
            },
            height: {
                attribute: "height",
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

                    const root = this.shadowRoot?.host;

                    htmx.process(root);
                }
            };
        },
    }}
/>

<script lang="ts">
    import type { Snippet } from "svelte";
    import { identifier_create, selectors_create } from "$lib/helpers.ts";

    const tag = "bt-stack";

    interface Props {
        space?: string;
        split_after?: number;
        height?: string;
        children?: Snippet;
    }

    const {
        space = "var(--s-1)",
        split_after,
        height,
        children,
    }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, { space, split_after, height }),
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
        justify-content: flex-start;
        flex-direction: column;
        height: ${height};
      }

      ${selector.nor} > * {
        margin-block: 0;
      }

      ${selector.nor} > * + * {
        margin-block-start: ${space};
      }
      ${selector.nor}:only-child {
        block-size: 100%;
      }

      ${selector.nor} > :nth-child(${split_after}) {
        margin-block-end: auto;
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
