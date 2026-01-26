<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Cluster } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Cluster",
        component: Cluster,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {
            onclick: fn(),
        },
    });
</script>

{#snippet template(args)}
    <Cluster {...args}>
        <div>tag</div>
        <div>longer tag</div>
        <div>short tag</div>
        <div>a very long tag for some reason</div>
    </Cluster>
    <bt-cluster {...args}>
        <div>tag</div>
        <div>longer tag</div>
        <div>short tag</div>
        <div>a very long tag for some reason</div>
    </bt-cluster>
{/snippet}

<Story name="default" autodocs />
<Story name="center" args={{ justify_center: true }} />
<Story name="end" args={{ justify_end: true }} />
<Story name="between" args={{ justify_between: true }} />
