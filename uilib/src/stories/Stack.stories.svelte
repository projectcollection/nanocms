<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Stack } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Stack",
        component: Stack,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {
            onclick: fn(),
        },
    });
</script>

{#snippet template(args)}
    <Stack {...args}>
        <div>div</div>

        <div>div</div>

        <div>div</div>
    </Stack>
    <bt-stack {...args}>
        <div>div</div>

        <div>div</div>

        <div>div</div>
    </bt-stack>
{/snippet}

<Story name="default" autodocs />
<Story name="split after 1" args={{ split_after: 1, height: "50vh" }} />
