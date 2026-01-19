<svelte:options
    customElement={{
        tag: "bt-stack",
        shadow: "open",
        props: {
            space: {
                attribute: "space",
                type: "String",
                reflect: true,
            },
            recursive: {
                attribute: "recursive",
                type: "Boolean",
                reflect: true,
            },
            split_after: {
                attribute: "splitAfter",
                type: "Number",
                reflect: true,
            },
            row: {
                attribute: "row",
                type: "Boolean",
                reflect: true,
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
    import { identifier_create, selectors_create } from "./helpers.ts";

    const tag = "bt-stack";

    interface Props {
        space?: string;
        recursive?: boolean;
        split_after?: number;
        row?: boolean;
        children?: Snippet;
    }

    const {
        space = "var(--s-1)",
        recursive = true,
        split_after = 1,
        row = false,
        children,
    }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, { space, recursive, split_after, row }),
    );

    let selector = $derived(selectors_create(tag, identifier));
</script>

<svelte:head>
    {#if document && !document.getElementById(identifier)}
        {@html `
    <style id="${identifier}">
      ${selector.ce}${recursive ? "" : " >"} * + *, ${selector.sv}${recursive ? "" : " >"} * + * {
        margin-block-start: ${space};
      }
      ${selector.ce}, ${selector.sv} {
        flex-direction: ${row ? "row" : "column"};
        gap: ${space};
      }

        ${
            split_after
                ? `

      ${selector.ce}:only-child, ${selector.sv}:only-child {
          block-size: 100%;
      }

      ${selector.ce} > :nth-child(${split_after}), ${selector.sv} > :nth-child(${split_after}) {
          margin-block-end: auto;
      }`
                : ``
        }

      ${selector.ce} > * + *, ${selector.sv} > * + * {
          margin-block-end: ${space};
      }
    </style>
`
            .replace(/\s\s+/g, "")
            .trim()}
    {/if}
</svelte:head>

<div part={identifier} style:--s1={space}>
    {#if children}
        {@render children()}
    {:else}
        <svelte:element this={"slot"} />
    {/if}
</div>

<style>
    :host {
        display: block;
    }

    div {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    div > * + * {
        margin-block-end: var(--s1);
    }
</style>
