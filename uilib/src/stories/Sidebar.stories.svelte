<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Sidebar } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Sidebar",
        component: Sidebar,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {},
    });
</script>

{#snippet template(args)}
    <Sidebar {...args}>
        <div>sidebar div is smaller</div>
        <div>than the content div</div>
    </Sidebar>
    <bt-sidebar {...args}>
        <div>sidebar div is smaller</div>
        <div>than the content div</div>
    </bt-sidebar>
{/snippet}

<Story name="default" autodocs />
<Story name="right" args={{ right: true }} />
