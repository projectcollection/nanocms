<script lang="ts">
    // import "../lib/index.ts";
    import Button from "../lib/Button.svelte";
    import Stack from "../lib/Stack.svelte";
</script>

<svelte:head>
    <script
        src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js"
        integrity="sha384-/TgkGk7p307TH7EXJDuUlgG3Ce1UVolAOFopFekQkkXihi5u/6OCvVKyz1W+idaz"
        crossorigin="anonymous"
    ></script>
</svelte:head>

<div id="cont">
    <div id="sc">
        <span> svelte component: </span>
        <Button>button child</Button>
        <Button>button child</Button>
    </div>

    <div id="bt">
        <span> web component: </span>
        <bt-button
            hx-get="/"
            hx-trigger="click"
            hx-select="#bt"
            hx-target="#bt"
            hx-swap="innerHTML"
        >
            web component
        </bt-button>
    </div>

    <div id="btclick">
        <span> web component: with onclick </span>
        <bt-button
            on:keydown={() => {}}
            tabindex="0"
            role="button"
            on:click={() => console.log("clicked button")}
        >
            web component testing
        </bt-button>

        <bt-button
            on:keydown={() => {}}
            tabindex="0"
            role="button"
            on:click={() => console.log("clicked button")}
        >
            web component testing
        </bt-button>
    </div>

    <div>
        <span>stack</span>
        <bt-stack>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
        </bt-stack>

        <h1>custom element stack</h1>
        <bt-stack row split_after={2}>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
        </bt-stack>

        <Stack>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
        </Stack>

        <h1>svelte component stack</h1>
        <Stack row split_after={2}>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
            <bt-button>button</bt-button>
        </Stack>
    </div>
</div>

<h1>Welcome to your library project</h1>
<p>
    Create your package using @sveltejs/package and preview/shobtase your work
    with SvelteKit
</p>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>

<style>
    span {
        display: block;
        color: white;
    }
    #cont {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
</style>
