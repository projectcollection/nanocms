<script lang="ts">
    import {
        Button,
        Stack,
        Link,
        Container,
        Icon,
        Box,
        Cluster,
    } from "$lib/index.js";
    import "$lib/styles.css";
    import house_svg from "$lib/house.svg";
    import ticket from "$lib/ticket.svg";
    import contact_svg from "$lib/contact.svg";
</script>

<div style="position: sticky; top:0;">
    <bt-box
        bg_color="var(--color-purple-dark)"
        style="color: var(--color-white); font-size: var(--text-xs)"
    >
        <bt-sidebar right content-min-width="40">
            <bt-cluster>
                <div
                    style="border-radius: 10rem; padding: .5em; border: 1px solid white;"
                >
                    Translate
                </div>
                <div>espanol</div>
                <div>francias</div>
                <div>chinese</div>
            </bt-cluster>
            <bt-cluster justify_end>
                <div
                    style="border-radius: .5em; padding: .5em; border: 1px solid white;"
                >
                    311 - Report A Problem
                </div>
                <bt-box rounded bg_color="var(--color-white)" p0>
                    <bt-sidebar right>
                        <input
                            type="text"
                            placeholder="Search BaltimoreCity.gov"
                            style="border:none; outline:none;"
                        />
                        <bt-button
                            size="xs"
                            bg-color="var(--color-yellow)"
                            font-size="var(--text-sm)"
                        >
                            search
                        </bt-button>
                    </bt-sidebar>
                </bt-box>
            </bt-cluster>
        </bt-sidebar>
    </bt-box>
    <bt-box purple>
        <bt-sidebar content-min-width="70">
            <bt-cluster>
                <h2 style="margin:0">logo</h2>
                <span style="font-size: var(--text-sm);"
                    >Mayor Brandon M. Scott</span
                >
            </bt-cluster>
            <bt-cluster justify_end>
                {#each ["Resident", "Businesses", "Discover", "Departments", "Work With Us"] as link}
                    <bt-link underline animated> {link} </bt-link>
                {/each}
            </bt-cluster>
        </bt-sidebar>
    </bt-box>
</div>

<bt-box>
    <h1 style="padding: var(--s3) 0;">Good Evening, Baltimore</h1>
</bt-box>

<bt-box p1 bg-color="var(--color-white-off)">
    <h2>Popular Services</h2>
    <bt-cluster>
        {#each [0, 0, 0, 0, 0] as _}
            <bt-box rounded hover bg-color="var(--color-blue-light)">
                <bt-stack>
                    <bt-center>
                        <bt-icon style="font-size: 3rem;">
                            <img src={ticket} class="icon" />
                        </bt-icon>
                    </bt-center>
                    <bt-center>
                        <span> Pay Parking / Traffic Ticket </span>
                    </bt-center>
                </bt-stack>
            </bt-box>
        {/each}
    </bt-cluster>
</bt-box>

<bt-box p1 bg-color="var(--color-yellow-pale)">
    <bt-cluster justify-between>
        <h3>
            Easy Access to Baltimore <br /> Help-311 Service
        </h3>
        <bt-box bg-color="var(--color-white-off)">
            <bt-cluster>
                <bt-icon style="font-size: 3rem;">
                    <img src={house_svg} class="icon" />
                </bt-icon>
                <ul style="font-size: var(--text-sm);">
                    <li>Report a problem</li>
                    <li>Track a request</li>
                    <li>Ask a question, call 311</li>
                </ul>
            </bt-cluster>
        </bt-box>
        <bt-button bg-color="var(--color-purple)">
            <span id="services_text"> View 311 Services </span>
        </bt-button>
    </bt-cluster>
</bt-box>

<bt-box p1 bg-color="var(--color-white-off)">
    <h2>Programs and Initiatives</h2>
    <bt-cluster>
        {#each [0, 0, 0, 0, 0] as _}
            <bt-box p0 rounded hover bg-color="var(--color-blue-light)">
                <bt-stack style="max-inline-size: 15em;">
                    <img
                        src="https://s3.amazonaws.com/baltimorecity.gov.if-us-east-1/s3fs-public/2026-01/programs-initiatives-10-year.png"
                    />
                    <bt-center style="padding-bottom: var(--s1);">
                        <h4>
                            Securing Baltimore's Future: 10-Year Financial Plan
                        </h4>
                        <span style="font-size: var(--text-sm);">
                            A strategy to sustainly balance the City's budget
                            while reinvesting in core services, infrastructure,
                            and tax relief.
                        </span>
                    </bt-center>
                </bt-stack>
            </bt-box>
        {/each}
    </bt-cluster>
</bt-box>

<bt-center>
    <bt-box>
        <h2>Example usage of UI library distributed as Web Components:</h2>
        <p>
            I tried exploring the idea of building components as web components.
            Then roughly recreated the front page of
            <em>beta.baltimorecity.gov</em> using it.
            <em><b>Web components</b></em> are framework independent so it
            should be easy to distribute and use in any web project. The
            consumer just need to add the css and javascript file with the
            implementation to the head of the webpage, then use components like
            normal html elements. This should be ideal for an organization like
            the <b>City of Baltimore</b> where city websites are built in
            different frameworks. The responsible party don't have to change
            their tech stack to be able to adopt the
            <em><b>UI library</b></em>. The source code is available on
            <bt-link
                bold
                underline
                animated
                color="blue"
                title="github.com/nanocms"
                href="https://github.com/projectcollection/nanocms/tree/main/uilib/src/lib/layouts"
            >
                github
            </bt-link> if you want to check it out.
        </p>
        <p>
            Web components can accept custom props like <b>React</b> components.
            Currently implemented are layout components that affect how child elements
            are laid out. Child elements should be generated by the "host" framework.
            These components should have as little state as possible and let the
            framework handle the app state management. They should also be composable
            so that they can be combined to create new custom components without
            tight integration to a specific framework.
        </p>
        <p>Still unsure about the implications on accessibility.</p>
    </bt-box>
</bt-center>

<div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;">
    <pre>
    <code>
        {@html hljs.highlight(
                `<bt-link underscore animated href="#">some link</bt-link>`,
                {
                    language: "html",
                },
            ).value}
    </code>
</pre>
</div>

<bt-center>
    <bt-box>
        <p>The html code above will output:</p>
    </bt-box>
</bt-center>

<div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;">
    <pre>
    <code>
        {@html hljs.highlight(
                `<bt-link class="s-y_bCXRrkrYfP" data-i="bt-link-2oQcUI">
            #shadow-root (open)
            <a href="#" part="bt-link-2oQcUI">
                <slot></slot>
            </a>
            some link
        </bt-link>`,
                {
                    language: "html",
                },
            ).value}
    </code>
</pre>
</div>

<bt-center>
    <bt-box>
        <p>
            The relevant part is <em>`data-i`</em> and <em>`part`</em>
            attributes. They are used to apply css for a specific combination of
            property values. The `::part()` selector is used for Web components that
            have a
            <em>shadow dom</em>.
        </p>
        <p>
            It will append this generated <em>style</em> in the
            <em>document head</em>
            when it is mounted and there's no <em>style</em> tag with the same
            <em>id</em>.
        </p>
    </bt-box>
</bt-center>

<div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;">
    <pre>
    <code style="overflow-x: scroll;">
        {@html hljs.highlight(
                `<style id="bt-link-2oQcUI">
            [data-i=bt-link-2oQcUI], bt-link::part(bt-link-2oQcUI){
                color: inherit;
                display: inline-block;
                font-size: var(--text-base);
                font-weight: inherit;
                line-height: var(--text-height-md);
                position: relative;
                text-decoration: none;
                background-image: linear-gradient(var(--color-yellow), var(--color-yellow));
                background-size: 0% calc(var(--text-base) * .2);
                background-position: 0 88%;
                background-repeat: no-repeat;
                transition: background-size .2s ease-out;
            }

            [data-i=bt-link-2oQcUI]:hover, bt-link::part(bt-link-2oQcUI):hover{
                cursor: pointer;
                text-decoration: ;
                background-size: 100% calc(var(--text-base) * .2);
                transition: background-size .1s ease-in;
            }
        </style>`,
                {
                    language: "css",
                },
            ).value}
    </code>
</pre>
</div>

<bt-center>
    <bt-box>
        <p>
            This UI library is implemented in <em><b>svelte/sveltekit</b></em>
            because it has builtin support for building
            <em><b>web components</b></em>. It should be possible to do this
            with
            <em><b>React</b></em> but I haven't found a standardized way. We'll have
            to roll out our own solution.
        </p>
        <p>
            Below is the source code for the rough recreation of the
            <em><b>beta.baltimorecity.gov</b></em> frontpage above. Inline
            styles can still be used so consumers can still adapt it to
            unhandled situations. But this should be used sparingly to keep
            everything thematically consistent or use
            <em>css variables</em> available in the css file provided as part of
            the UI library.
        </p>
    </bt-box>
</bt-center>

<div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;">
    <pre>
    <code>
{@html hljs.highlight(
                `<div style="position: sticky; top:0;">
        <bt-box
                bg_color="var(--color-purple-dark)"
                style="color: var(--color-white); font-size: var(--text-xs)">
            <bt-sidebar right content-min-width="40">
                <bt-cluster>
                    <div
                            style="border-radius: 10rem; padding: .5em; border: 1px solid white;">
                        Translate
                    </div>
                    <div>espanol</div>
                    <div>francias</div>
                    <div>chinese</div>
                </bt-cluster>
                <bt-cluster justify_end>
                    <div
                            style="border-radius: .5em; padding: .5em; border: 1px solid white;">
                        311 - Report A Problem
                    </div>
                    <bt-box rounded bg_color="var(--color-white)" p0>
                        <bt-sidebar right>
                            <input
                                    type="text"
                                    placeholder="Search BaltimoreCity.gov"
                                    style="border:none; outline:none;"
                                />
                            <bt-button
                                    size="xs"
                                    bg-color="var(--color-yellow)"
                                    font-size="var(--text-sm)">
                                search
                            </bt-button>
                        </bt-sidebar>
                    </bt-box>
                </bt-cluster>
            </bt-sidebar>
        </bt-box>
        <bt-box purple>
            <bt-sidebar content-min-width="70">
                <bt-cluster>
                    <h2>logo</h2>
                    <span style="font-size: var(--text-sm);"
                            >Mayor Brandon M. Scott</span
                        >
                </bt-cluster>
                <bt-cluster justify_end>
                    {#each ["Resident", "Businesses", "Discover", "Departments", "Work With Us"] as link}
                            <bt-link underline animated> {link} </bt-link>
                        {/each}
                </bt-cluster>
            </bt-sidebar>
        </bt-box>
    </div>

    <bt-box>
        <h1 style="padding: var(--s3) 0;">Good Evening, Baltimore</h1>
    </bt-box>

    <bt-box p1 bg-color="var(--color-white-off)">
        <h2>Popular Services</h2>
        <bt-cluster>
            {#each [0, 0, 0, 0, 0] as _}
                    <bt-box rounded hover bg-color="var(--color-blue-light)">
                    <bt-stack>
                        <bt-center>
                            <bt-icon style="font-size: 3rem;">
                                <img src={ticket} class="icon" />
                            </bt-icon>
                        </bt-center>
                        <bt-center>
                            <span> Pay Parking / Traffic Ticket </span>
                        </bt-center>
                    </bt-stack>
                </bt-box>
                {/each}
        </bt-cluster>
    </bt-box>

    <bt-box p1 bg-color="var(--color-yellow-pale)">
        <bt-cluster justify-between>
            <h3>
                Easy Access to Baltimore <br /> Help-311 Service
            </h3>
            <bt-box bg-color="var(--color-white-off)">
                <bt-cluster>
                    <bt-icon style="font-size: 3rem;">
                        <img src={house_svg} class="icon" />
                    </bt-icon>
                    <ul style="font-size: var(--text-sm);">
                        <li>Report a problem</li>
                        <li>Track a request</li>
                        <li>Ask a question, call 311</li>
                    </ul>
                </bt-cluster>
            </bt-box>
            <bt-button bg-color="var(--color-purple)">
                <span id="services_text"> View 311 Services </span>
            </bt-button>
        </bt-cluster>
    </bt-box>

    <bt-box p1 bg-color="var(--color-white-off)">
        <h2>Programs and Initiatives</h2>
        <bt-cluster>
            {#each [0, 0, 0, 0, 0] as _}
                    <bt-box p0 rounded hover bg-color="var(--color-blue-light)">
                    <bt-stack style="max-inline-size: 15em;">
                        <img
                                src="https://s3.amazonaws.com/baltimorecity.gov.if-us-east-1/s3fs-public/2026-01/programs-initiatives-10-year.png"
                            />
                        <bt-center style="padding-bottom: var(--s1);">
                            <h4>
                                Securing Baltimore's Future: 10-Year Financial
                                Plan
                            </h4>
                            <span style="font-size: var(--text-sm);">
                                A strategy to sustainly balance the City's
                                budget while reinvesting in core services,
                                infrastructure, and tax relief.
                            </span>
                        </bt-center>
                    </bt-stack>
                </bt-box>
                {/each}
        </bt-cluster>
    </bt-box>

   `,
                { language: "html" },
            ).value}
</code>
</pre>
</div>

<style>
    :global(body) {
        margin: 0;
        background-color: var(--color-white);
    }

    #services_text {
        color: var(--color-white);
    }
    #services_text:hover {
        color: var(--color-black);
    }
</style>
