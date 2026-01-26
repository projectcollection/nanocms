<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Center } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Center",
        component: Center,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {
            onclick: fn(),
        },
    });

    const lorem_ipsum =
        "div risent oreis ntriesn toiaerns toiaresn taiersn tioaernst aresnt oiaer snteiarns tearn stiearns teran stiorans tiares ntearn storaen steran stearnsteiarnst earnsteari nsteinra stenar stoienars toena rsteiarsteinarsto ear nsteari st";
</script>

{#snippet template(args)}
    <Center {...args}>
        <div>{lorem_ipsum}</div>
        <div>{lorem_ipsum}</div>
        <div>{lorem_ipsum}</div>
    </Center>
    <bt-center {...args}>
        <div>{lorem_ipsum}</div>
        <div>{lorem_ipsum}</div>
        <div>{lorem_ipsum}</div>
    </bt-center>
{/snippet}

<Story name="default" autodocs />
<Story name="big padding" args={{ padding: "5rem" }} />
