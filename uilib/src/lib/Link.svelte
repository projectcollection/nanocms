<svelte:options
    customElement={{
        tag: "bt-link",
        shadow: "open",
        props: {
            href: {
                attribute: "href",
                type: "String",
            },
            title: {
                attribute: "title",
                type: "String",
            },
            bold: {
                attribute: "bold",
                type: "Boolean",
            },
            size: {
                attribute: "size",
                type: "String",
            },
            color: {
                attribute: "color",
                type: "String",
            },
            weight: {
                attribute: "weight",
                type: "String",
            },
            underline: {
                attribute: "underline",
                type: "Boolean",
            },
            animated: {
                attribute: "animated",
                type: "Boolean",
            },
            static_: {
                attribute: "static",
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
    import { identifier_create, selectors_create } from "./helpers.ts";

    const tag = "bt-link";
    const underline_height = "calc(var(--text-base) * .2)";

    interface Props {
        href: string;
        title?: string;
        size?: string;
        color?: string;
        bold?: boolean;
        weight?: string;
        underline?: boolean;
        animated?: boolean;
        static_?: boolean;
        children?: Snippet;
    }

    const {
        href = "https://google.com",
        title,
        size = "var(--text-base)",
        bold = false,
        color = "inherit",
        weight = "var(--text-weight-md)",
        underline = false,
        animated = false,
        static_ = false,
        children,
    }: Props = $props();

    let identifier = $derived(
        identifier_create(tag, {
            size,
            bold,
            color,
            underline,
            weight,
            animated,
            static_,
        }),
    );
    let selector = $derived(selectors_create(tag, identifier));

    $effect(() => {
        if (!href) {
            // should this be an alert instead? to make sure it is used properly
            console.error("href missing");
        }
    });

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
        ${selector.nor}, ${selector.ce}  {
            color: ${color};
            display: inline-block;
            font-size: ${size};
            font-weight: ${bold ? `${weight}` : "inherit"};
            line-height: var(--text-height-md);
            position: relative;

            text-decoration: ${underline && !animated ? "underline" : "none"};
            background-image: linear-gradient(var(--color-yellow), var(--color-yellow));
            background-size: 0% ${underline_height};
            background-position: 0 88%;
            background-repeat: no-repeat;
            transition: background-size .2s ease-out;
        }

        ${selector.nor}:hover, ${selector.ce}:hover  {
            cursor: pointer;
            text-decoration: ${(underline && animated) || static_ ? "" : "underline"};

            ${
                underline && animated && !static_
                    ? `
            background-size: 100% ${underline_height};
            transition: background-size .1s ease-in;
        `
                    : ""
            }
        }
    </style>
`
            .replace(/\s\s+/g, "")
            .trim()}
    {/if}
</svelte:head>

{#if children}
    <a {href} {title} data-i={identifier}>
        {@render children()}
    </a>
{:else}
    <a {href} {title} part={identifier}>
        <svelte:element this={"slot"} />
    </a>
{/if}
