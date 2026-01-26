<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Box } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Box",
        component: Box,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {},
    });
</script>

{#snippet template(args)}
    <Box {...args}>
        <div>div</div>

        <div>div</div>

        <div>div</div>
    </Box>
    <bt-box {...args}>
        <div>div</div>

        <div>div</div>

        <div>div</div>
    </bt-box>
{/snippet}

<Story name="default" autodocs />

<Story name="padding 0" args={{ p0: true }} />
<Story name="purple" args={{ purple: true }} />
<Story
    name="rounded"
    args={{ rounded: true, bg_color: "var(--color-purple-light)" }}
/>

<Story
    name="hover"
    args={{ rounded: true, bg_color: "var(--color-purple-light)", hover: true }}
/>
