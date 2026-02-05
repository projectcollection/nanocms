<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Reel } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Reel",
        component: Reel,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {},
    });
</script>

{#snippet template(args)}
    <div>
        <Reel {...args}>
            <img
                src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg"
            />
            <img
                src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg"
            />
            <img
                src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg"
            />
            <img
                src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg"
            />
            <img
                src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg"
            />
        </Reel>
    </div>
    <bt-reel {...args}>
        <img src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg" />
        <img src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg" />
        <img src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg" />
        <img src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg" />
        <img src="https://wips.art/_app/immutable/assets/bgm-1-46c1cd11.jpg" />
    </bt-reel>
{/snippet}

<Story name="default" autodocs />
