<script lang="ts">
    import { Button, Stack, Link, Container, Icon } from "$lib/index.js";
    import "$lib/styles.css";
    import house_svg from "$lib/house.svg";
</script>

<h1>uilib</h1>

<div id="cont">
    <div>
        <h1>custom element</h1>
        <div style="display: flex; flex-direction: column;  gap: var(--s-1);">
            <span>composition</span>
            <bt-button size="sm">
                <div
                    style="display: flex; align-items: center; gap: var(--s-1); border: none;"
                >
                    <bt-icon lg>
                        <img src={house_svg} />
                    </bt-icon>
                    <bt-link
                        size="var(--text-sm)"
                        underline
                        href="https://beta.baltimorecity.gov/dhcd/our-work/permits-inspections/building-permits"
                    >
                        Building Permits
                    </bt-link>
                </div>
            </bt-button>

            <span style="width: 15rem;">
                <bt-button size="0px">
                    <div
                        style="border: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 5px;"
                    >
                        <span style="aspect-ratio: 16/9; overflow: hidden;">
                            <img
                                style="object-fit: cover;"
                                src="https://s3.amazonaws.com/baltimorecity.gov.if-us-east-1/s3fs-public/2024-07/fsk-bridge%20%281%29.jpeg"
                            />
                        </span>
                        <span style="padding: var(--space-sm); height: 10rem;">
                            <h2
                                style="font-size: var(--text-md); font-weight: 400; text-align: left; line-height: 2em;"
                            >
                                Key Bridge Action Plan
                            </h2>
                            <p
                                style="font-size: var(--text-sm); text-align: left;line-height: 1.5em;"
                            >
                                We're taking vital steps to respond to the Key
                                Bridge Collapse and offer help to city
                                residents. Review the action plan in detail.
                            </p>
                        </span>
                    </div>
                </bt-button>
            </span>
        </div>

        <div>
            <span>icon</span>
            <bt-icon sm><img src={house_svg} /></bt-icon>
            <bt-icon><img src={house_svg} /></bt-icon>
            <bt-icon lg><img src={house_svg} /></bt-icon>
        </div>

        <div>
            <span>containers</span>
            <div>
                <span>no bg color</span>
                <bt-container>
                    <p>normal</p>
                </bt-container>
            </div>

            <div>
                <span>purple</span>
                <bt-container purple>
                    <p style="color: white;">normal</p>
                </bt-container>
            </div>

            <div>
                <span>purple light</span>
                <bt-container purple-light>
                    <p>normal</p>
                </bt-container>
            </div>
        </div>
        <div>
            <h1>links</h1>
            <bt-link title="underline ? yeah" underline>underlined</bt-link>
            <bt-link size="var(--text-sm)" animated>small</bt-link>
            <bt-link>underline on hover</bt-link>
            <bt-link bold>bold</bt-link>
            <bt-link bold weight="300">semi bold</bt-link>
            <bt-link size="3rem" underline>big link</bt-link>
            <bt-link size="3rem" underline animated>animated</bt-link>
            <bt-link size="3rem" underline animated static>static link</bt-link>
        </div>
        <div>
            <span>buttons</span>
            <div>
                <span>default</span>
                <bt-button confirm>ok</bt-button>
                <bt-button>nav</bt-button>
                <bt-button warning>cancel</bt-button>
            </div>
            <div>
                <span> with onclick </span>
                <bt-button
                    on:keydown={() => {}}
                    tabindex="0"
                    role="button"
                    on:click={() => console.log("clicked button")}
                >
                    button
                </bt-button>

                <bt-button
                    on:keydown={() => {}}
                    tabindex="0"
                    role="button"
                    on:click={() => console.log("clicked button")}
                >
                    with click handler
                </bt-button>
            </div>
        </div>
        <div>
            <span>stacks</span>
            <div>
                <span>default</span>
                <bt-stack>
                    <bt-button>button</bt-button>
                    <bt-button>button</bt-button>
                    <bt-button>button</bt-button>
                    <bt-button>button</bt-button>
                </bt-stack>
            </div>
            <div>
                <span>row</span>
                <bt-stack split_after={2} row space="1rem">
                    <bt-button>button</bt-button>
                    <bt-button>button</bt-button>
                    <bt-button>button</bt-button>
                    <bt-button>button</bt-button>
                </bt-stack>
            </div>
        </div>
    </div>
    <div>
        <h1>svelte component</h1>

        <div>
            <span>icon</span>
            <Icon sm><img src={house_svg} /></Icon>
            <Icon><img src={house_svg} /></Icon>
            <Icon lg><img src={house_svg} /></Icon>
        </div>
        <div>
            <span>containers</span>
            <div>
                <span>no bg color</span>
                <Container>
                    <p>normal</p>
                </Container>
            </div>

            <div>
                <span>purple</span>
                <Container purple>
                    <p style="color: white;">normal</p>
                </Container>
            </div>

            <div>
                <span>purple light</span>
                <Container purple_light>
                    <p>normal</p>
                </Container>
            </div>
        </div>
        <div>
            <h1>links</h1>
            <Link href="#" title="underline ? yeah" underline>underlined</Link>
            <Link href="#" size="var(--text-sm)">small</Link>
            <Link href="#">underline on hover</Link>
            <Link href="#" bold>bold</Link>
            <Link href="#" bold weight="400">semi bold</Link>
            <Link href="#" size="3rem" underline>big link</Link>
            <Link href="#" size="3rem" underline animated>animated</Link>
            <Link href="#" size="3rem" underline animated static_
                >static link</Link
            >
        </div>

        <div>
            <span> buttons </span>
            <Button>button child</Button>
            <Button>button child</Button>
        </div>

        <div>
            <span>stacks</span>
            <div>
                <span>default</span>
                <Stack>
                    <Button>button</Button>
                    <Button>button</Button>
                    <Button>button</Button>
                    <Button>button</Button>
                    <Button>button</Button>
                </Stack>
            </div>

            <div>
                <span>row</span>
                <Stack split_after={2} row space="1rem">
                    <Button>button</Button>
                    <Button>button</Button>
                    <Button>button</Button>
                    <Button>button</Button>
                    <Button>button</Button>
                </Stack>
            </div>
        </div>
    </div>
</div>

<style>
    :global(body) {
        background-color: wheat;
    }
    span {
        display: block;
        color: var(--color-black);
    }
    #cont {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        & div {
            border: 1px solid black;
            padding: 1rem;
            margin: 1rem 0 1rem 0;
        }
    }
</style>
