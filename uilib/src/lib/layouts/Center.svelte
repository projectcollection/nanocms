<svelte:options
    customElement={{
        tag: "bt-center",
        shadow: "none",
        props: {
            padding: {
                attribute: "padding",
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

    const tag = "bt-center";

    interface Props {
        padding?: string;
        children?: Snippet;
    }

    const { padding, children }: Props = $props();

    let identifier = $derived(identifier_create(tag, { padding }));
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
          display: block;
          box-sizing: content-box;
          margin-inline: auto;
          max-inline-size: var(--measure);
          padding-inline-start: ${padding ? padding : "var(--s0)"};
          padding-inline-end: ${padding ? padding : "var(--s0)"};
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
