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
    import "$lib/reset.css";
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
                <h2 style="margin:0;">logo</h2>
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

<h2>The html source code using Web Components:</h2>

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
