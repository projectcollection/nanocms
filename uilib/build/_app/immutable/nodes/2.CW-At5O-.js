import{b as pe,d as Re,f as X,a as W}from"../chunks/C22QhxVP.js";import{i as De}from"../chunks/ySAFrBnr.js";import{a as ee,v as Ne,L as q,h as C,D as P,J as ae,n as ge,at as Le,an as Ve,S as je,a5 as me,ag as O,e as D,R as Ce,al as Pe,a3 as _e,c as Ue,aI as I,b as se,s as Oe,N as ke,aE as Qe,aj as ce,aJ as We,aK as Ye,aL as qe,aM as Ge,r as Ee,p as Te,aN as te,ae as Me,ai as Xe,d as Je,y as G,G as Se,aO as Ke,am as Ze,af as $e,ao as et,W as ye,aP as tt,aQ as rt,aR as ot,X as we,_ as at,aS as st,x as it,w as nt,z as lt,A as h,C as f,B as l,a4 as H}from"../chunks/fV96lsui.js";import{s as ct}from"../chunks/jgJiA5nG.js";function re(e,t){return t}function bt(e,t,r){for(var c=[],n=t.length,i,u=t.length,a=0;a<n;a++){let v=t[a];Te(v,()=>{if(i){if(i.pending.delete(v),i.done.add(v),i.pending.size===0){var _=e.outrogroups;ie(ce(i.done)),_.delete(i),_.size===0&&(e.outrogroups=null)}}else u-=1},!1)}if(u===0){var b=c.length===0&&r!==null;if(b){var s=r,p=s.parentNode;Xe(p),p.append(s),e.items.clear()}ie(t,!b)}else i={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(i)}function ie(e,t=!0){for(var r=0;r<e.length;r++)Je(e[r],t)}var xe;function oe(e,t,r,c,n,i=null){var u=e,a=new Map;{var b=e;u=C?q(P(b)):b.appendChild(ee())}C&&ae();var s=null,p=Le(()=>{var m=r();return We(m)?m:m==null?[]:ce(m)}),v,_=!0;function B(){T.fallback=s,dt(T,v,u,t,c),s!==null&&(v.length===0?(s.f&I)===0?Ee(s):(s.f^=I,U(s,null,u)):Te(s,()=>{s=null}))}var o=Ne(()=>{v=ge(p);var m=v.length;let M=!1;if(C){var k=Ve(u)===je;k!==(m===0)&&(u=me(),q(u),O(!1),M=!0)}for(var F=new Set,w=Ue,S=Oe(),E=0;E<m;E+=1){C&&D.nodeType===Ce&&D.data===Pe&&(u=D,M=!0,O(!1));var R=v[E],x=c(R,E),y=_?null:a.get(x);y?(y.v&&_e(y.v,R),y.i&&_e(y.i,E),S&&w.skipped_effects.delete(y.e)):(y=ut(a,_?u:xe??=ee(),R,x,E,n,t,r),_||(y.e.f|=I),a.set(x,y)),F.add(x)}if(m===0&&i&&!s&&(_?s=se(()=>i(u)):(s=se(()=>i(xe??=ee())),s.f|=I)),C&&m>0&&q(me()),!_)if(S){for(const[Q,N]of a)F.has(Q)||w.skipped_effects.add(N.e);w.oncommit(B),w.ondiscard(()=>{})}else B();M&&O(!0),ge(p)}),T={effect:o,items:a,outrogroups:null,fallback:s};_=!1,C&&(u=D)}function dt(e,t,r,c,n){var i=t.length,u=e.items,a=e.effect.first,b,s=null,p=[],v=[],_,B,o,T;for(T=0;T<i;T+=1){if(_=t[T],B=n(_,T),o=u.get(B).e,e.outrogroups!==null)for(const x of e.outrogroups)x.pending.delete(o),x.done.delete(o);if((o.f&I)!==0)if(o.f^=I,o===a)U(o,null,r);else{var m=s?s.next:a;o===e.effect.last&&(e.effect.last=o.prev),o.prev&&(o.prev.next=o.next),o.next&&(o.next.prev=o.prev),z(e,s,o),z(e,o,m),U(o,m,r),s=o,p=[],v=[],a=s.next;continue}if((o.f&te)!==0&&Ee(o),o!==a){if(b!==void 0&&b.has(o)){if(p.length<v.length){var M=v[0],k;s=M.prev;var F=p[0],w=p[p.length-1];for(k=0;k<p.length;k+=1)U(p[k],M,r);for(k=0;k<v.length;k+=1)b.delete(v[k]);z(e,F.prev,w.next),z(e,s,F),z(e,w,M),a=M,s=w,T-=1,p=[],v=[]}else b.delete(o),U(o,a,r),z(e,o.prev,o.next),z(e,o,s===null?e.effect.first:s.next),z(e,s,o),s=o;continue}for(p=[],v=[];a!==null&&a!==o;)(b??=new Set).add(a),v.push(a),a=a.next;if(a===null)continue}(o.f&I)===0&&p.push(o),s=o,a=o.next}if(e.outrogroups!==null){for(const x of e.outrogroups)x.pending.size===0&&(ie(ce(x.done)),e.outrogroups?.delete(x));e.outrogroups.size===0&&(e.outrogroups=null)}if(a!==null||b!==void 0){var S=[];if(b!==void 0)for(o of b)(o.f&te)===0&&S.push(o);for(;a!==null;)(a.f&te)===0&&a!==e.fallback&&S.push(a),a=a.next;var E=S.length;if(E>0){var R=i===0?r:null;bt(e,S,R)}}}function ut(e,t,r,c,n,i,u,a){var b=(u&Ye)!==0?(u&qe)===0?Qe(r,!1,!1):ke(r):null,s=(u&Ge)!==0?ke(n):null;return{v:b,i:s,e:se(()=>(i(t,b??r,s??n,a),()=>{e.delete(c)}))}}function U(e,t,r){if(e.nodes)for(var c=e.nodes.start,n=e.nodes.end,i=t&&(t.f&I)===0?t.nodes.start:r;c!==null;){var u=Me(c);if(i.before(c),c===n)return;c=u}}function z(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Y(e,t,r=!1,c=!1,n=!1){var i=e,u="";G(()=>{var a=Se;if(u===(u=t()??"")){C&&ae();return}if(a.nodes!==null&&(Ke(a.nodes.start,a.nodes.end),a.nodes=null),u!==""){if(C){D.data;for(var b=ae(),s=b;b!==null&&(b.nodeType!==Ce||b.data!=="");)s=b,b=Me(b);if(b===null)throw Ze(),$e;pe(D,s),i=q(b);return}var p=u+"";r?p=`<svg>${p}</svg>`:c&&(p=`<math>${p}</math>`);var v=Re(p);if((r||c)&&(v=P(v)),pe(P(v),v.lastChild),r||c)for(;P(v);)i.before(P(v));else i.before(v)}})}function ht(e,t){et(()=>{var r=e.getRootNode(),c=r.host?r:r.head??r.ownerDocument.head;if(!c.querySelector("#"+t.hash)){const n=document.createElement("style");n.id=t.hash,n.textContent=t.code,c.appendChild(n)}})}function vt(e,t){return e==null?null:String(e)}function j(e,t,r,c){var n=e.__style;if(C||n!==t){var i=vt(t);(!C||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e.__style=t}return c}const ft=Symbol("is custom element"),pt=Symbol("is html");function ne(e,t,r,c){var n=gt(e);C&&(n[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||n[t]!==(n[t]=r)&&(t==="loading"&&(e[rt]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Fe(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function d(e,t,r){var c=at,n=Se;let i=C;C&&O(!1),we(null),ye(null);try{t!=="style"&&(le.has(e.getAttribute("is")||e.nodeName)||!customElements||customElements.get(e.getAttribute("is")||e.tagName.toLowerCase())?Fe(e).includes(t):r&&typeof r=="object")?e[t]=r:ne(e,t,r==null?r:String(r))}finally{we(c),ye(n),i&&O(!0)}}function gt(e){return e.__attributes??={[ft]:e.nodeName.includes("-"),[pt]:e.namespaceURI===ot}}var le=new Map;function Fe(e){var t=e.getAttribute("is")||e.nodeName,r=le.get(t);if(r)return r;le.set(t,r=[]);for(var c,n=e,i=Element.prototype;i!==n;){c=st(n);for(var u in c)c[u].set&&r.push(u);n=tt(n)}return r}const mt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%3e%3cpath%20d='M16%2052V37H26V58'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M44%2037H34V47H44V37Z'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M54%2026V58H6V27.0693H46.4211'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M48%2020V5H41V12.6382'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M2%2030L30%202L58%2030'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/svg%3e",_t="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%3e%3cpath%20d='M24.6696%2036.096H20.018C19.4559%2036.096%2019%2036.5429%2019%2037.0954V38.3236C19%2039.3936%2020.2757%2039.3661%2021.402%2039.5551C20.965%2040.3935%2020.2037%2047.6297%2020.2037%2047.6297C20.2037%2047.797%2020.2037%2056.6833%2020.2037%2056.6833C20.2037%2057.6676%2021.017%2058%2022.0204%2058H24.7933C25.7967%2058%2026.61%2057.6676%2026.61%2056.6833V54.1347H50.4502V56.6831C50.4502%2057.6673%2051.2635%2058%2052.267%2058H55.0398C56.043%2058%2056.8565%2057.6673%2056.8565%2056.6831C56.8565%2056.6831%2056.8565%2047.7968%2056.8565%2047.6295C56.8565%2047.6295%2056.0939%2040.3894%2055.6552%2039.5497C56.765%2039.3635%2058.027%2039.396%2058.027%2038.3232V37.095C58.027%2036.5427%2057.5711%2036.0956%2057.0089%2036.0956H52.3904'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M52.3906%2035.697C52.3906%2037.6703%2050.0933%2038.9853%2047.9237%2038.9853H29.1365C26.9669%2038.9853%2024.6696%2037.6703%2024.6696%2035.697L26.4615%2030.3905C26.8335%2028.5678%2028.2204%2027%2030.3902%2027H46.6704C48.84%2027%2050.2267%2028.5173%2050.5987%2030.3902L52.3906%2035.697Z'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20d='M35%2049H42'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%3e%3c/path%3e%3cpath%20d='M35%2044H42'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%3e%3c/path%3e%3ccircle%20cx='49.4948'%20cy='46.5'%20r='2.5'%20stroke='%233F9FB5'%20stroke-width='3'%3e%3c/circle%3e%3ccircle%20cx='27.5802'%20cy='46.5'%20r='2.5'%20stroke='%233F9FB5'%20stroke-width='3'%3e%3c/circle%3e%3cpath%20d='M36.2937%2030H40.7767'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20d='M56.8568%2054H20.2035'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20d='M9%2028.243C10.4536%2029.2465%2012.695%2030%2014.3128%2030C16.9014%2030%2019%2028.5448%2019%2026.75C19%2024.955%2016.7593%2024.067%2014.3128%2023.5C11.7772%2022.8698%209.62564%2022.0448%209.62564%2020.25C9.62564%2018.4552%2011.7242%2017%2014.3128%2017C16.0559%2017%2017.5767%2017.6596%2018.3843%2018.6387'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%3e%3c/path%3e%3cpath%20d='M14%2015V32'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M26%2017.5H50'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M11.375%2058H2V2H3.27273L11.375%209.0688L19.4773%202H19.9394L28.0417%209.0688L35.8542%202.29938L43.6667%209.0688L51.7689%202H52V21.765'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/svg%3e";var kt=X("<bt-link> </bt-link>",2),yt=X('<bt-box><bt-stack><bt-center><bt-icon><img class="icon"/></bt-icon></bt-center> <bt-center><span>Pay Parking / Traffic Ticket</span></bt-center></bt-stack></bt-box>',2),wt=X(`<bt-box><bt-stack><img src="https://s3.amazonaws.com/baltimorecity.gov.if-us-east-1/s3fs-public/2026-01/programs-initiatives-10-year.png"/> <bt-center><h4>Securing Baltimore's Future: 10-Year Financial Plan</h4> <span style="font-size: var(--text-sm);">A strategy to sustainly balance the City's budget
                            while reinvesting in core services, infrastructure,
                            and tax relief.</span></bt-center></bt-stack></bt-box>`,2),xt=X(`<div style="position: sticky; top:0;"><bt-box><bt-sidebar><bt-cluster><div style="border-radius: 10rem; padding: .5em; border: 1px solid white;">Translate</div> <div>espanol</div> <div>francias</div> <div>chinese</div></bt-cluster> <bt-cluster><div style="border-radius: .5em; padding: .5em; border: 1px solid white;">311 - Report A Problem</div> <bt-box><bt-sidebar><input type="text" placeholder="Search BaltimoreCity.gov" style="border:none; outline:none;"/> <bt-button>search</bt-button></bt-sidebar></bt-box></bt-cluster></bt-sidebar></bt-box> <bt-box><bt-sidebar><bt-cluster><h2 style="margin:0">logo</h2> <span style="font-size: var(--text-sm);">Mayor Brandon M. Scott</span></bt-cluster> <bt-cluster></bt-cluster></bt-sidebar></bt-box></div> <bt-box><h1 style="padding: var(--s3) 0;">Good Evening, Baltimore</h1></bt-box> <bt-box><h2>Popular Services</h2> <bt-cluster></bt-cluster></bt-box> <bt-box><bt-cluster><h3>Easy Access to Baltimore <br/> Help-311 Service</h3> <bt-box><bt-cluster><bt-icon><img class="icon"/></bt-icon> <ul style="font-size: var(--text-sm);"><li>Report a problem</li> <li>Track a request</li> <li>Ask a question, call 311</li></ul></bt-cluster></bt-box> <bt-button><span id="services_text" class="svelte-1uha8ag">View 311 Services</span></bt-button></bt-cluster></bt-box> <bt-box><h2>Programs and Initiatives</h2> <bt-cluster></bt-cluster></bt-box> <h2>Example usage of UI library distributed as Web Components:</h2> <p>Web components are framework independent so it should be easy to distribute
    and use in any web project. The consumer just need to add the css and
    javascript file with the implementation to the head of the webpage, then use
    components like normal html elements.</p> <p>They can accept custom props like <b>React</b> components. Currently implemented
    are layout components that affect how child elements are laid out. These components
    should have as little state as possible and let the "main" framework handle state
    management.</p> <p>Still unsure about the implications on accessibility.</p> <pre>
    <code>
        <!>
    </code>
</pre> <p>The html code above will output:</p> <pre>
    <code>
        <!>
    </code>
</pre> <p>The relevant part is <em>\`data-i\`</em> and <em>\`part\`</em> attributes. They
    are used to apply css for a specific combination of property values. The
    \`::part()\` selector is used for Web components that have a <em>shadow dom</em>.</p> <p>It will append this generated <em>style</em> in the <em>document head</em> when it is mounted and there's no <em>style</em> tag with the same <em>id</em>.</p> <pre>
    <code>
        <!>
    </code>
</pre> <p>Below is the source code for the rough recreation of the <em><b>beta.baltimorecity.gov</b></em> frontpage above.</p> <div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;"><pre>
    <code>
<!>
</code>
</pre></div>`,3);const Ct={hash:"svelte-1uha8ag",code:"body {margin:0;background-color:var(--color-white);}#services_text.svelte-1uha8ag {color:var(--color-white);}#services_text.svelte-1uha8ag:hover {color:var(--color-black);}"};function Ft(e,t){it(t,!1),ht(e,Ct),De();var r=xt(),c=nt(r),n=h(c);d(n,"bg_color","var(--color-purple-dark)"),j(n,"color: var(--color-white); font-size: var(--text-xs)");var i=h(n);d(i,"right",!0),d(i,"content-min-width","40");var u=h(i),a=f(u,2);d(a,"justify_end",!0);var b=f(h(a),2);d(b,"rounded",!0),d(b,"bg_color","var(--color-white)"),d(b,"p0",!0);var s=h(b);d(s,"right",!0);var p=f(h(s),2);d(p,"size","xs"),d(p,"bg-color","var(--color-yellow)"),d(p,"font-size","var(--text-sm)"),l(s),l(b),l(a),l(i),l(n);var v=f(n,2);d(v,"purple",!0);var _=h(v);d(_,"content-min-width","70");var B=h(_),o=f(B,2);d(o,"justify_end",!0),oe(o,4,()=>["Resident","Businesses","Discover","Departments","Work With Us"],re,(L,Z)=>{var g=kt();d(g,"underline",!0),d(g,"animated",!0);var A=h(g,!0);l(g),G(()=>ct(A,Z)),W(L,g)}),l(o),l(_),l(v),l(c);var T=f(c,2),m=f(T,2);d(m,"p1",!0),d(m,"bg-color","var(--color-white-off)");var M=f(h(m),2);oe(M,4,()=>[0,0,0,0,0],re,(L,Z)=>{var g=yt();d(g,"rounded",!0),d(g,"hover",!0),d(g,"bg-color","var(--color-blue-light)");var A=h(g),V=h(A),$=h(V);j($,"font-size: 3rem;");var Be=h($);l($),l(V),f(V,2),l(A),l(g),G(()=>ne(Be,"src",_t)),W(L,g)}),l(M),l(m);var k=f(m,2);d(k,"p1",!0),d(k,"bg-color","var(--color-yellow-pale)");var F=h(k);d(F,"justify-between",!0);var w=f(h(F),2);d(w,"bg-color","var(--color-white-off)");var S=h(w),E=h(S);j(E,"font-size: 3rem;");var R=h(E);l(E),H(2),l(S),l(w);var x=f(w,2);d(x,"bg-color","var(--color-purple)"),l(F),l(k);var y=f(k,2);d(y,"p1",!0),d(y,"bg-color","var(--color-white-off)");var Q=f(h(y),2);oe(Q,4,()=>[0,0,0,0,0],re,(L,Z)=>{var g=wt();d(g,"p0",!0),d(g,"rounded",!0),d(g,"hover",!0),d(g,"bg-color","var(--color-blue-light)");var A=h(g);j(A,"max-inline-size: 15em;");var V=f(h(A),2);j(V,"padding-bottom: var(--s1);"),l(A),l(g),W(L,g)}),l(Q),l(y);var N=f(y,10),be=f(h(N)),He=f(h(be));Y(He,()=>hljs.highlight('<bt-link underscore animated href="#">some link</bt-link>',{language:"html"}).value),H(),l(be),H(),l(N);var J=f(N,4),de=f(h(J)),Ae=f(h(de));Y(Ae,()=>hljs.highlight(`<bt-link class="s-y_bCXRrkrYfP" data-i="bt-link-2oQcUI">
            #shadow-root (open)
            <a href="#" part="bt-link-2oQcUI">
                <slot></slot>
            </a>
            some link
        </bt-link>`,{language:"html"}).value),H(),l(de),H(),l(J);var K=f(J,6),ue=f(h(K)),ze=f(h(ue));Y(ze,()=>hljs.highlight(`<style id="bt-link-2oQcUI">
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
        </style>`,{language:"css"}).value),H(),l(ue),H(),l(K);var he=f(K,4),ve=h(he),fe=f(h(ve)),Ie=f(h(fe));Y(Ie,()=>hljs.highlight(`<div style="position: sticky; top:0;">
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

   `,{language:"html"}).value),H(),l(fe),H(),l(ve),l(he),G(()=>ne(R,"src",mt)),W(e,r),lt()}export{Ft as component};
