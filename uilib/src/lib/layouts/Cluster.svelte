<svelte:options
    customElement={{
        tag: "bt-cluster",
        shadow: "none",
        props: {
            justify_center: {
                attribute: "justify-center",
                type: "Boolean",
                reflect: false,
            },
            justify_end: {
                attribute: "justify-end",
                type: "Boolean",
                reflect: false,
            },
            justify_between: {
                attribute: "justify-between",
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

                    const root = this.shadowRoot?.host || this;

                    htmx.process(root);
                }
            };
        },
    }}
/>

<script lang="ts">
    import type { Snippet } from "svelte";
    import { identifier_create, selectors_create } from "../helpers.ts";

    const tag = "bt-cluster";

    interface Props {
        justify_center?: boolean;
        justify_end?: boolean;
        justify_between?: boolean;
        children?: Snippet;
    }

    const { justify_center, justify_end, justify_between, children }: Props =
        $props();

    let identifier = $derived(
        identifier_create(tag, {
            justify_center,
            justify_end,
            justify_between,
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
        gap: var(--s0);
        justify-content: ${justify_center ? "center" : justify_between ? "space-between" : justify_end ? "flex-end" : "flex-start"};
        align-items: center;
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
