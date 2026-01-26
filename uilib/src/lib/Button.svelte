<svelte:options
    customElement={{
        tag: "bt-button",
        shadow: "open",
        props: {
            confirm: {
                attribute: "confirm",
                type: "Boolean",
                reflect: true,
            },
            warning: {
                attribute: "warning",
                type: "Boolean",
                reflect: true,
            },
            size: {
                attribute: "size",
                type: "String",
                reflect: true,
            },
        },
        extend: (customElementConstructor) => {
            return class extends customElementConstructor {
                constructor() {
                    super();
                }

                connectedCallback(args) {
                    super.connectedCallback(args);
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

    const tag = "bt-button";

    interface Props {
        confirm?: boolean;
        warning?: boolean;
        size?: "sm" | "md" | "lg";
        onclick?: () => void;
        children?: Snippet;
    }

    const { confirm, warning, size = "sm", children }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, { confirm, warning, size }),
    );
    const selector = $derived(selectors_create(tag, identifier));

    let size_ = $derived(
        (() => {
            switch (size) {
                case "sm":
                    return "var(--s-1)";
                case "md":
                    return "var(--s0)";
                case "lg":
                    return "var(--s1)";
                default:
                    return size;
            }
        })(),
    );

    //TODO: reeavaluate: this component should always return a button element,
    //reconsider if that is not possible to do as a web component or vanilla
    //svelte component, should make it a purely design thing?
</script>

<svelte:head>
    {#if document && !document.getElementById(identifier)}
        {@html `
    <style id="${identifier}">
        ${selector.nor}, ${selector.ce}  {
            border-radius: .5em;
            overflow: hidden;
            font-size: var(--text-base);
            border: none;
            padding: ${size_};
            background-color: ${confirm ? "var(--color-confirm)" : warning ? "var(--color-warning)" : "var(--color-white)"};
            color: ${confirm ? "var(--color-white)" : warning ? "var(--color-white)" : "var(--color-black)"};
            transition: background-color .1s ease-in, box-shadow .1s ease-in;
        }


        ${selector.nor}:hover, ${selector.ce}:hover  {
            background-color: ${confirm ? "var(--color-confirm-light)" : warning ? "var(--color-warning-light)" : "var(--color-blue-light)"};

            box-shadow: 0px 0px .4em -.4em ${confirm ? "var(--color-confirm-light)" : warning ? "var(--color-warning-light)" : "var(--color-blue-light)"};
        }
    </style>
`
            .replace(/\s\s+/g, "")
            .trim()}
    {/if}
</svelte:head>

{#if children}
    <button data-i={identifier}>
        {@render children()}
    </button>
{:else}
    <button part={identifier}>
        <svelte:element this={"slot"} />
    </button>
{/if}

<style>
    :host,
    button {
        display: inline-block;
        max-width: fit-content;
    }

    button:hover {
        cursor: pointer;
    }
</style>
