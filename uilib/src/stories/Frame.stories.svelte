<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Frame } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Frame",
        component: Frame,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {},
    });
</script>

{#snippet template(args)}
    <Frame {...args}>
        <img src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg" />
    </Frame>
    <bt-frame {...args}>
        <img src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg" />
    </bt-frame>
{/snippet}

<Story name="default" autodocs />
<Story name="landscape" args={{ numerator: 16, denominator: 9 }} />
<Story name="portrait" args={{ numerator: 9, denominator: 16 }} />
