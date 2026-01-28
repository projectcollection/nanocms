import{b as ce,d as Ee,f as G,a as W}from"../chunks/C22QhxVP.js";import{i as Me}from"../chunks/ySAFrBnr.js";import{a as X,v as Fe,L as Y,h as C,D as I,J as te,n as be,at as He,an as Se,S as Ae,a5 as ue,ag as O,e as N,R as ge,al as Te,a3 as de,c as ze,aI as z,b as re,s as Be,N as fe,aE as De,aj as ie,aJ as Ne,aK as Re,aL as Le,aM as Ve,r as _e,p as me,aN as Z,ae as ke,ai as Ie,d as Pe,y as U,G as xe,aO as Oe,am as je,af as qe,ao as We,W as ve,aP as Ye,aQ as Ue,aR as Ge,X as he,_ as Je,aS as Ke,x as Xe,w as Ze,z as $e,A as h,C as _,B as f,a4 as $}from"../chunks/fV96lsui.js";import{s as Qe}from"../chunks/jgJiA5nG.js";function Q(e,t){return t}function et(e,t,r){for(var l=[],n=t.length,i,u=t.length,s=0;s<n;s++){let d=t[s];me(d,()=>{if(i){if(i.pending.delete(d),i.done.add(d),i.pending.size===0){var m=e.outrogroups;oe(ie(i.done)),m.delete(i),m.size===0&&(e.outrogroups=null)}}else u-=1},!1)}if(u===0){var c=l.length===0&&r!==null;if(c){var a=r,v=a.parentNode;Ie(v),v.append(a),e.items.clear()}oe(t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(i)}function oe(e,t=!0){for(var r=0;r<e.length;r++)Pe(e[r],t)}var pe;function ee(e,t,r,l,n,i=null){var u=e,s=new Map;{var c=e;u=C?Y(I(c)):c.appendChild(X())}C&&te();var a=null,v=He(()=>{var g=r();return Ne(g)?g:g==null?[]:ie(g)}),d,m=!0;function B(){M.fallback=a,tt(M,d,u,t,l),a!==null&&(d.length===0?(a.f&z)===0?_e(a):(a.f^=z,P(a,null,u)):me(a,()=>{a=null}))}var o=Fe(()=>{d=be(v);var g=d.length;let F=!1;if(C){var k=Se(u)===Ae;k!==(g===0)&&(u=ue(),Y(u),O(!1),F=!0)}for(var S=new Set,y=ze,H=Be(),E=0;E<g;E+=1){C&&N.nodeType===ge&&N.data===Te&&(u=N,F=!0,O(!1));var D=d[E],w=l(D,E),x=m?null:s.get(w);x?(x.v&&de(x.v,D),x.i&&de(x.i,E),H&&y.skipped_effects.delete(x.e)):(x=rt(s,m?u:pe??=X(),D,w,E,n,t,r),m||(x.e.f|=z),s.set(w,x)),S.add(w)}if(g===0&&i&&!a&&(m?a=re(()=>i(u)):(a=re(()=>i(pe??=X())),a.f|=z)),C&&g>0&&Y(ue()),!m)if(H){for(const[j,q]of s)S.has(j)||y.skipped_effects.add(q.e);y.oncommit(B),y.ondiscard(()=>{})}else B();F&&O(!0),be(v)}),M={effect:o,items:s,outrogroups:null,fallback:a};m=!1,C&&(u=N)}function tt(e,t,r,l,n){var i=t.length,u=e.items,s=e.effect.first,c,a=null,v=[],d=[],m,B,o,M;for(M=0;M<i;M+=1){if(m=t[M],B=n(m,M),o=u.get(B).e,e.outrogroups!==null)for(const w of e.outrogroups)w.pending.delete(o),w.done.delete(o);if((o.f&z)!==0)if(o.f^=z,o===s)P(o,null,r);else{var g=a?a.next:s;o===e.effect.last&&(e.effect.last=o.prev),o.prev&&(o.prev.next=o.next),o.next&&(o.next.prev=o.prev),T(e,a,o),T(e,o,g),P(o,g,r),a=o,v=[],d=[],s=a.next;continue}if((o.f&Z)!==0&&_e(o),o!==s){if(c!==void 0&&c.has(o)){if(v.length<d.length){var F=d[0],k;a=F.prev;var S=v[0],y=v[v.length-1];for(k=0;k<v.length;k+=1)P(v[k],F,r);for(k=0;k<d.length;k+=1)c.delete(d[k]);T(e,S.prev,y.next),T(e,a,S),T(e,y,F),s=F,a=y,M-=1,v=[],d=[]}else c.delete(o),P(o,s,r),T(e,o.prev,o.next),T(e,o,a===null?e.effect.first:a.next),T(e,a,o),a=o;continue}for(v=[],d=[];s!==null&&s!==o;)(c??=new Set).add(s),d.push(s),s=s.next;if(s===null)continue}(o.f&z)===0&&v.push(o),a=o,s=o.next}if(e.outrogroups!==null){for(const w of e.outrogroups)w.pending.size===0&&(oe(ie(w.done)),e.outrogroups?.delete(w));e.outrogroups.size===0&&(e.outrogroups=null)}if(s!==null||c!==void 0){var H=[];if(c!==void 0)for(o of c)(o.f&Z)===0&&H.push(o);for(;s!==null;)(s.f&Z)===0&&s!==e.fallback&&H.push(s),s=s.next;var E=H.length;if(E>0){var D=i===0?r:null;et(e,H,D)}}}function rt(e,t,r,l,n,i,u,s){var c=(u&Re)!==0?(u&Le)===0?De(r,!1,!1):fe(r):null,a=(u&Ve)!==0?fe(n):null;return{v:c,i:a,e:re(()=>(i(t,c??r,a??n,s),()=>{e.delete(l)}))}}function P(e,t,r){if(e.nodes)for(var l=e.nodes.start,n=e.nodes.end,i=t&&(t.f&z)===0?t.nodes.start:r;l!==null;){var u=ke(l);if(i.before(l),l===n)return;l=u}}function T(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function ot(e,t,r=!1,l=!1,n=!1){var i=e,u="";U(()=>{var s=xe;if(u===(u=t()??"")){C&&te();return}if(s.nodes!==null&&(Oe(s.nodes.start,s.nodes.end),s.nodes=null),u!==""){if(C){N.data;for(var c=te(),a=c;c!==null&&(c.nodeType!==ge||c.data!=="");)a=c,c=ke(c);if(c===null)throw je(),qe;ce(N,a),i=Y(c);return}var v=u+"";r?v=`<svg>${v}</svg>`:l&&(v=`<math>${v}</math>`);var d=Ee(v);if((r||l)&&(d=I(d)),ce(I(d),d.lastChild),r||l)for(;I(d);)i.before(I(d));else i.before(d)}})}function st(e,t){We(()=>{var r=e.getRootNode(),l=r.host?r:r.head??r.ownerDocument.head;if(!l.querySelector("#"+t.hash)){const n=document.createElement("style");n.id=t.hash,n.textContent=t.code,l.appendChild(n)}})}function at(e,t){return e==null?null:String(e)}function V(e,t,r,l){var n=e.__style;if(C||n!==t){var i=at(t);(!C||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e.__style=t}return l}const it=Symbol("is custom element"),nt=Symbol("is html");function se(e,t,r,l){var n=lt(e);C&&(n[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||n[t]!==(n[t]=r)&&(t==="loading"&&(e[Ue]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ye(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function b(e,t,r){var l=Je,n=xe;let i=C;C&&O(!1),he(null),ve(null);try{t!=="style"&&(ae.has(e.getAttribute("is")||e.nodeName)||!customElements||customElements.get(e.getAttribute("is")||e.tagName.toLowerCase())?ye(e).includes(t):r&&typeof r=="object")?e[t]=r:se(e,t,r==null?r:String(r))}finally{he(l),ve(n),i&&O(!0)}}function lt(e){return e.__attributes??={[it]:e.nodeName.includes("-"),[nt]:e.namespaceURI===Ge}}var ae=new Map;function ye(e){var t=e.getAttribute("is")||e.nodeName,r=ae.get(t);if(r)return r;ae.set(t,r=[]);for(var l,n=e,i=Element.prototype;i!==n;){l=Ke(n);for(var u in l)l[u].set&&r.push(u);n=Ye(n)}return r}const ct="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%3e%3cpath%20d='M16%2052V37H26V58'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M44%2037H34V47H44V37Z'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M54%2026V58H6V27.0693H46.4211'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M48%2020V5H41V12.6382'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M2%2030L30%202L58%2030'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/svg%3e",bt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%3e%3cpath%20d='M24.6696%2036.096H20.018C19.4559%2036.096%2019%2036.5429%2019%2037.0954V38.3236C19%2039.3936%2020.2757%2039.3661%2021.402%2039.5551C20.965%2040.3935%2020.2037%2047.6297%2020.2037%2047.6297C20.2037%2047.797%2020.2037%2056.6833%2020.2037%2056.6833C20.2037%2057.6676%2021.017%2058%2022.0204%2058H24.7933C25.7967%2058%2026.61%2057.6676%2026.61%2056.6833V54.1347H50.4502V56.6831C50.4502%2057.6673%2051.2635%2058%2052.267%2058H55.0398C56.043%2058%2056.8565%2057.6673%2056.8565%2056.6831C56.8565%2056.6831%2056.8565%2047.7968%2056.8565%2047.6295C56.8565%2047.6295%2056.0939%2040.3894%2055.6552%2039.5497C56.765%2039.3635%2058.027%2039.396%2058.027%2038.3232V37.095C58.027%2036.5427%2057.5711%2036.0956%2057.0089%2036.0956H52.3904'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M52.3906%2035.697C52.3906%2037.6703%2050.0933%2038.9853%2047.9237%2038.9853H29.1365C26.9669%2038.9853%2024.6696%2037.6703%2024.6696%2035.697L26.4615%2030.3905C26.8335%2028.5678%2028.2204%2027%2030.3902%2027H46.6704C48.84%2027%2050.2267%2028.5173%2050.5987%2030.3902L52.3906%2035.697Z'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20d='M35%2049H42'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%3e%3c/path%3e%3cpath%20d='M35%2044H42'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%3e%3c/path%3e%3ccircle%20cx='49.4948'%20cy='46.5'%20r='2.5'%20stroke='%233F9FB5'%20stroke-width='3'%3e%3c/circle%3e%3ccircle%20cx='27.5802'%20cy='46.5'%20r='2.5'%20stroke='%233F9FB5'%20stroke-width='3'%3e%3c/circle%3e%3cpath%20d='M36.2937%2030H40.7767'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20d='M56.8568%2054H20.2035'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20d='M9%2028.243C10.4536%2029.2465%2012.695%2030%2014.3128%2030C16.9014%2030%2019%2028.5448%2019%2026.75C19%2024.955%2016.7593%2024.067%2014.3128%2023.5C11.7772%2022.8698%209.62564%2022.0448%209.62564%2020.25C9.62564%2018.4552%2011.7242%2017%2014.3128%2017C16.0559%2017%2017.5767%2017.6596%2018.3843%2018.6387'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%3e%3c/path%3e%3cpath%20d='M14%2015V32'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M26%2017.5H50'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M11.375%2058H2V2H3.27273L11.375%209.0688L19.4773%202H19.9394L28.0417%209.0688L35.8542%202.29938L43.6667%209.0688L51.7689%202H52V21.765'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/svg%3e";var ut=G("<bt-link> </bt-link>",2),dt=G('<bt-box><bt-stack><bt-center><bt-icon><img class="icon"/></bt-icon></bt-center> <bt-center><span>Pay Parking / Traffic Ticket</span></bt-center></bt-stack></bt-box>',2),ft=G(`<bt-box><bt-stack><img src="https://s3.amazonaws.com/baltimorecity.gov.if-us-east-1/s3fs-public/2026-01/programs-initiatives-10-year.png"/> <bt-center><h4>Securing Baltimore's Future: 10-Year Financial Plan</h4> <span style="font-size: var(--text-sm);">A strategy to sustainly balance the City's budget
                            while reinvesting in core services, infrastructure,
                            and tax relief.</span></bt-center></bt-stack></bt-box>`,2),vt=G(`<div style="position: sticky; top:0;"><bt-box><bt-sidebar><bt-cluster><div style="border-radius: 10rem; padding: .5em; border: 1px solid white;">Translate</div> <div>espanol</div> <div>francias</div> <div>chinese</div></bt-cluster> <bt-cluster><div style="border-radius: .5em; padding: .5em; border: 1px solid white;">311 - Report A Problem</div> <bt-box><bt-sidebar><input type="text" placeholder="Search BaltimoreCity.gov" style="border:none; outline:none;"/> <bt-button>search</bt-button></bt-sidebar></bt-box></bt-cluster></bt-sidebar></bt-box> <bt-box><bt-sidebar><bt-cluster><h2 style="margin:0;">logo</h2> <span style="font-size: var(--text-sm);">Mayor Brandon M. Scott</span></bt-cluster> <bt-cluster></bt-cluster></bt-sidebar></bt-box></div> <bt-box><h1 style="padding: var(--s3) 0;">Good Evening, Baltimore</h1></bt-box> <bt-box><h2>Popular Services</h2> <bt-cluster></bt-cluster></bt-box> <bt-box><bt-cluster><h3>Easy Access to Baltimore <br/> Help-311 Service</h3> <bt-box><bt-cluster><bt-icon><img class="icon"/></bt-icon> <ul style="font-size: var(--text-sm);"><li>Report a problem</li> <li>Track a request</li> <li>Ask a question, call 311</li></ul></bt-cluster></bt-box> <bt-button><span id="services_text" class="svelte-1uha8ag">View 311 Services</span></bt-button></bt-cluster></bt-box> <bt-box><h2>Programs and Initiatives</h2> <bt-cluster></bt-cluster></bt-box> <h2>The html source code using Web Components:</h2> <div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;"><pre><code>
<!>
</code>
</pre></div>`,3);const ht={hash:"svelte-1uha8ag",code:"body {margin:0;background-color:var(--color-white);}#services_text.svelte-1uha8ag {color:var(--color-white);}#services_text.svelte-1uha8ag:hover {color:var(--color-black);}"};function kt(e,t){Xe(t,!1),st(e,ht),Me();var r=vt(),l=Ze(r),n=h(l);b(n,"bg_color","var(--color-purple-dark)"),V(n,"color: var(--color-white); font-size: var(--text-xs)");var i=h(n);b(i,"right",!0),b(i,"content-min-width","40");var u=h(i),s=_(u,2);b(s,"justify_end",!0);var c=_(h(s),2);b(c,"rounded",!0),b(c,"bg_color","var(--color-white)"),b(c,"p0",!0);var a=h(c);b(a,"right",!0);var v=_(h(a),2);b(v,"size","xs"),b(v,"bg-color","var(--color-yellow)"),b(v,"font-size","var(--text-sm)"),f(a),f(c),f(s),f(i),f(n);var d=_(n,2);b(d,"purple",!0);var m=h(d);b(m,"content-min-width","70");var B=h(m),o=_(B,2);b(o,"justify_end",!0),ee(o,4,()=>["Resident","Businesses","Discover","Departments","Work With Us"],Q,(R,J)=>{var p=ut();b(p,"underline",!0),b(p,"animated",!0);var A=h(p,!0);f(p),U(()=>Qe(A,J)),W(R,p)}),f(o),f(m),f(d),f(l);var M=_(l,2),g=_(M,2);b(g,"p1",!0),b(g,"bg-color","var(--color-white-off)");var F=_(h(g),2);ee(F,4,()=>[0,0,0,0,0],Q,(R,J)=>{var p=dt();b(p,"rounded",!0),b(p,"hover",!0),b(p,"bg-color","var(--color-blue-light)");var A=h(p),L=h(A),K=h(L);V(K,"font-size: 3rem;");var Ce=h(K);f(K),f(L),_(L,2),f(A),f(p),U(()=>se(Ce,"src",bt)),W(R,p)}),f(F),f(g);var k=_(g,2);b(k,"p1",!0),b(k,"bg-color","var(--color-yellow-pale)");var S=h(k);b(S,"justify-between",!0);var y=_(h(S),2);b(y,"bg-color","var(--color-white-off)");var H=h(y),E=h(H);V(E,"font-size: 3rem;");var D=h(E);f(E),$(2),f(H),f(y);var w=_(y,2);b(w,"bg-color","var(--color-purple)"),f(S),f(k);var x=_(k,2);b(x,"p1",!0),b(x,"bg-color","var(--color-white-off)");var j=_(h(x),2);ee(j,4,()=>[0,0,0,0,0],Q,(R,J)=>{var p=ft();b(p,"p0",!0),b(p,"rounded",!0),b(p,"hover",!0),b(p,"bg-color","var(--color-blue-light)");var A=h(p);V(A,"max-inline-size: 15em;");var L=_(h(A),2);V(L,"padding-bottom: var(--s1);"),f(A),f(p),W(R,p)}),f(j),f(x);var q=_(x,4),ne=h(q),le=h(ne),we=_(h(le));ot(we,()=>hljs.highlight(`<div style="position: sticky; top:0;">
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

   `,{language:"html"}).value),$(),f(le),$(),f(ne),f(q),U(()=>se(D,"src",ct)),W(e,r),$e()}export{kt as component};
