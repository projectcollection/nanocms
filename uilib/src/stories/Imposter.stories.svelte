<script module>
    import { defineMeta, Meta, Template } from "@storybook/addon-svelte-csf";
    import { Imposter } from "../lib/index.ts";
    import { fn } from "storybook/test";

    const { Story } = defineMeta({
        title: "Layout/Imposter",
        component: Imposter,
        render: template,
        tags: ["autodocs"],
        argTypes: {},
        args: {},
    });
</script>

{#snippet template(args)}
    <div style="position: relative">
        <p>static content</p>
        <Imposter {...args}>
            <p>
                roesnt oraiesnt aoiersnt aoiersntaiersnt ioaersnt oiarestn
                aoirsetn aoriestn aroisetn aoirestn aeriosnt aoirstnar
            </p>
        </Imposter>
    </div>
    <div style="position: relative">
        <p>static content</p>
        <bt-imposter {...args}>
            <p>
                roesnt oraiesnt aoiersnt aoiersntaiersnt ioaersnt oiarestn
                aoirsetn aoriestn aroisetn aoirestn aeriosnt aoirstnar
            </p>
        </bt-imposter>
    </div>
{/snippet}

<Story name="default" autodocs />
