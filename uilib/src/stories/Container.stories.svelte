<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Container } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Container",
        component: Container,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {},
    });
</script>

{#snippet template(args)}
    <Container {...args}>
        <div style="color: white;">container content</div>
    </Container>
    <bt-container {...args}>
        <div style="color: white;">container content</div>
    </bt-container>
{/snippet}

<Story name="default" autodocs />
<Story name="purple" args={{ purple: true }} />
