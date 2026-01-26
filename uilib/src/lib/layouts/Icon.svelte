<svelte:options
    customElement={{
        tag: "bt-icon",
        shadow: "none",
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
    import { identifier_create, selectors_create } from "$lib/helpers.ts";

    const tag = "bt-icon";

    interface Props {
        children?: Snippet;
    }

    const { children }: Props = $props();

    let identifier = $derived(identifier_create(tag, {}));
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
            display: inline-flex;
            align-items: baseline;
            font-size: inherit;
        }

        ${selector.nor} > .icon {
            width: 0.75em;
            width: 1cap;
            height: 0.75em;
            height: 1cap;
        }

        ${selector.nor} > .icon {
            margin-inline-end: 1rem;
        }
    </style>
`
            .replace(/\s\s+/g, "")
            .trim()}
    {/if}
</svelte:head>

{#if children}
    <span data-i={identifier}>
        {@render children()}
    </span>
{/if}
