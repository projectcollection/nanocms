<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Link } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Link",
        component: Link,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {
            onclick: fn(),
        },
    });
</script>

{#snippet template(args)}
    <Link {...args}>a link</Link>
    <bt-link {...args}>a link</bt-link>
{/snippet}

<Story name="default" autodocs />
<Story name="underline" args={{ href: "#", underline: true }} />
<Story name="small" args={{ href: "#", size: "var(--text-sm)" }} />
<Story name="md" args={{ href: "#", size: "var(--text-md)" }} />
<Story name="lg" args={{ href: "#", size: "var(--text-lg)" }} />
<Story
    name="lg bold"
    args={{ href: "#", size: "var(--text-lg)", bold: true }}
/>
<Story name="animated" args={{ href: "#", animated: true, underline: true }} />
