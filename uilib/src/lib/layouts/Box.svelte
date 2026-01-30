<svelte:options
    customElement={{
        tag: "bt-box",
        shadow: "none",
        props: {
            rounded: {
                attribute: "rounded",
                type: "Boolean",
                reflect: false,
            },
            p0: {
                attribute: "p-0",
                type: "Boolean",
                reflect: false,
            },
            p1: {
                attribute: "p-1",
                type: "Boolean",
                reflect: false,
            },
            b0: {
                attribute: "b-0",
                type: "Boolean",
                reflect: false,
            },
            b1: {
                attribute: "b-1",
                type: "Boolean",
                reflect: false,
            },
            hover: {
                attribute: "hover",
                type: "Boolean",
                reflect: false,
            },
            purple: {
                attribute: "purple",
                type: "Boolean",
                reflect: false,
            },
            bg_color: {
                attribute: "bg-color",
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

    const tag = "bt-box";

    interface Props {
        rounded?: boolean;
        p0?: boolean;
        p1?: boolean;
        b0?: boolean;
        b1?: boolean;
        hover?: boolean;
        purple?: boolean;
        bg_color?: string;
        children?: Snippet;
    }

    const {
        rounded,
        p0,
        p1,
        b0,
        b1,
        hover,
        purple,
        bg_color,
        children,
    }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, {
            rounded,
            p0,
            p1,
            b0,
            b1,
            hover,
            purple,
            bg_color,
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
        display: block;
        padding: ${p0 ? "0" : p1 ? "var(--s3)" : "var(--s-1)"};
        border: ${b0 ? "var(--border-thin)" : b1 ? "var(--border-thin)" : "var(--border-thin)"} solid;
        ${b0 || b1 ? "border-color: black" : "border: none"};
        ${purple ? "color: var(--color-white);" : "inherit;"}
        background-color: ${
            !hover
                ? `${bg_color ? bg_color : purple ? "var(--color-purple)" : "var(--color-white)"}`
                : "var(--color-white)"
        };
        border-radius: ${rounded ? ".5em" : "unset"};
        transition: background-color .1s ease-in, box-shadow .1s ease-in;
        overflow: hidden;
      }
        
      ${hover ? `${selector.nor}:hover {background-color: ${purple ? "var(--color-purple)" : bg_color ? bg_color : ""};}` : ""}


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
