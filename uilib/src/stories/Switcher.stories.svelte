<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Switcher } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Switcher",
        component: Switcher,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {
            onclick: fn(),
        },
    });
</script>

{#snippet template(args)}
    <Switcher {...args}>
        <div>div</div>

        <div>div</div>

        <div>div</div>
    </Switcher>
    <bt-switcher {...args}>
        <div>div</div>

        <div>div</div>

        <div>div</div>
    </bt-switcher>
{/snippet}

<Story name="default" autodocs />
<!-- <Story name="split after 1" args={{  }} /> -->
