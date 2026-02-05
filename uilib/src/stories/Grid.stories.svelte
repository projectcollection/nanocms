<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Grid } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Grid",
        component: Grid,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {},
    });
</script>

{#snippet template(args)}
    <Grid {...args}>
        <div>content</div>
        <div>content</div>
        <div>content</div>
    </Grid>
    <bt-grid {...args}>
        <div>content</div>
        <div>content</div>
        <div>content</div>
    </bt-grid>
{/snippet}

<Story name="default" autodocs />
<Story name="big min" args={{ min: "500px" }} />
