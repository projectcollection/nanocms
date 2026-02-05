<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Cover } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Cover",
        component: Cover,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {
            main: "h1",
        },
    });
</script>

{#snippet template(args)}
    <Cover {...args}>
        <div>head content</div>

        <h1 id="center-element" class="center-element">Main Content</h1>

        <div>footer content</div>
    </Cover>
    <bt-cover {...args}>
        <div>head content</div>

        <h1 id="center-element" class="center-element">Main Content</h1>

        <div>footer content</div>
    </bt-cover>
{/snippet}

<Story name="default" autodocs />
<Story name="center by id" args={{ main: "#center-element" }} />
<Story name="center by class" args={{ main: ".center-element" }} />
