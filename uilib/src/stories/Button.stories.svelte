<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Button } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Component/Button",
        component: Button,
        render: template,
        tags: ["autodocs"],
        argTypes: {
            size: {
                control: { type: "select" },
                options: ["sm", "md", "lg"],
            },
        },
        args: {
            onclick: fn(),
        },
    });
</script>

{#snippet template(args)}
    <Button {...args}>default</Button>
    <bt-button {...args} data-testid>default</bt-button>
{/snippet}

<Story name="default" autodocs />

<Story name="confirm" args={{ confirm: true }} />
<Story name="warning" args={{ warning: true }} />
