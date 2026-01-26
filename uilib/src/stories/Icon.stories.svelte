<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Icon } from "../lib/index.ts";
    import house_svg from "$lib/house.svg";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Icon",
        component: Icon,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {
            onclick: fn(),
        },
    });
</script>

{#snippet template(args)}
    {#if args.font_size}
        <div style:font-size={args.font_size}>
            <Icon {...args}
                ><img src={house_svg} class="icon" alt="icon" />House</Icon
            >
            <bt-icon {...args}
                ><img src={house_svg} class="icon" alt="icon" />House</bt-icon
            >
        </div>
    {:else}
        <Icon {...args}
            ><img src={house_svg} class="icon" alt="icon" />House</Icon
        >
        <bt-icon {...args}
            ><img src={house_svg} class="icon" alt="icon" />House</bt-icon
        >
    {/if}
{/snippet}

<Story name="default" autodocs />
<Story name="bigger font" args={{ font_size: "3rem" }} />
