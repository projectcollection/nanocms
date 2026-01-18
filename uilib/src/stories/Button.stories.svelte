<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import { Button } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Example/Button",
        component: Button,
        tags: ["autodocs"],
        argTypes: {
            backgroundColor: { control: "color" },
            size: {
                control: { type: "select" },
                options: ["small", "medium", "large"],
            },
        },
        args: {
            onclick: fn(),
        },
    });
</script>

<Story name="Primary" args={{}}>button</Story>

<Story name="Secondary" args={{}}>button</Story>

<Story name="Large" args={{}}>button</Story>

<Story name="Small" args={{}}>button</Story>
