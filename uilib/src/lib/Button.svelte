<svelte:options
    customElement={{
        tag: "bt-button",
        shadow: "open",
        props: {},
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

    interface Props {
        primary?: boolean;
        backgroundColor?: string;
        size?: "small" | "medium" | "large";
        label?: string;
        onclick?: () => void;
        children?: Snippet;
    }

    const {
        primary = false,
        backgroundColor,
        size = "medium",
        label,
        children,
    }: Props = $props();
</script>

<button type="button" class="text:sm">
    {#if children}
        {@render children()}
    {:else}
        <svelte:element this={"slot"} />
    {/if}
</button>

<style>
    @import "./styles.css";

    :host {
        display: inline-block;
        max-width: fit-content;
    }

    button {
        color: yellow;
    }
    button:hover {
        outline: 1px solid red;
        cursor: pointer;
    }
</style>
