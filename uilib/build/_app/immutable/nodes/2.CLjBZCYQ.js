import{b as xe,d as qe,f as Z,a as Q}from"../chunks/BU8LBdIG.js";import{i as Qe}from"../chunks/DZHkpXEk.js";import{a as re,v as Ye,L as G,h as C,D as P,J as ie,n as Ce,an as Ge,ao as Xe,S as Ze,a5 as Te,ag as W,e as N,R as Fe,al as $e,a3 as Ee,c as Je,ap as S,b as ne,s as Ke,N as ze,aq as et,aj as de,ar as tt,as as rt,at as ot,au as at,r as He,p as Se,av as oe,ae as Be,ai as st,d as it,y as X,G as Re,aw as nt,am as lt,af as ct,ax as bt,W as Ie,ay as dt,az as ut,aA as ht,X as Me,_ as vt,aB as pt,x as ft,w as gt,z as mt,A as l,C as h,B as i,a4 as I}from"../chunks/32HbMrYC.js";import{s as _t}from"../chunks/DZDdGhCu.js";function ae(e,t){return t}function kt(e,t,r){for(var d=[],b=t.length,c,v=t.length,a=0;a<b;a++){let p=t[a];Se(p,()=>{if(c){if(c.pending.delete(p),c.done.add(p),c.pending.size===0){var _=e.outrogroups;le(de(c.done)),_.delete(c),_.size===0&&(e.outrogroups=null)}}else v-=1},!1)}if(v===0){var u=d.length===0&&r!==null;if(u){var s=r,f=s.parentNode;st(f),f.append(s),e.items.clear()}le(t,!u)}else c={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(c)}function le(e,t=!0){for(var r=0;r<e.length;r++)it(e[r],t)}var Ae;function se(e,t,r,d,b,c=null){var v=e,a=new Map;{var u=e;v=C?G(P(u)):u.appendChild(re())}C&&ie();var s=null,f=Ge(()=>{var m=r();return tt(m)?m:m==null?[]:de(m)}),p,_=!0;function B(){E.fallback=s,yt(E,p,v,t,d),s!==null&&(p.length===0?(s.f&S)===0?He(s):(s.f^=S,O(s,null,v)):Se(s,()=>{s=null}))}var o=Ye(()=>{p=Ce(f);var m=p.length;let z=!1;if(C){var k=Xe(v)===Ze;k!==(m===0)&&(v=Te(),G(v),W(!1),z=!0)}for(var A=new Set,w=Je,M=Ke(),T=0;T<m;T+=1){C&&N.nodeType===Fe&&N.data===$e&&(v=N,z=!0,W(!1));var R=p[T],x=d(R,T),y=_?null:a.get(x);y?(y.v&&Ee(y.v,R),y.i&&Ee(y.i,T),M&&w.skipped_effects.delete(y.e)):(y=wt(a,_?v:Ae??=re(),R,x,T,b,t,r),_||(y.e.f|=S),a.set(x,y)),A.add(x)}if(m===0&&c&&!s&&(_?s=ne(()=>c(v)):(s=ne(()=>c(Ae??=re())),s.f|=S)),C&&m>0&&G(Te()),!_)if(M){for(const[q,L]of a)A.has(q)||w.skipped_effects.add(L.e);w.oncommit(B),w.ondiscard(()=>{})}else B();z&&W(!0),Ce(f)}),E={effect:o,items:a,outrogroups:null,fallback:s};_=!1,C&&(v=N)}function yt(e,t,r,d,b){var c=t.length,v=e.items,a=e.effect.first,u,s=null,f=[],p=[],_,B,o,E;for(E=0;E<c;E+=1){if(_=t[E],B=b(_,E),o=v.get(B).e,e.outrogroups!==null)for(const x of e.outrogroups)x.pending.delete(o),x.done.delete(o);if((o.f&S)!==0)if(o.f^=S,o===a)O(o,null,r);else{var m=s?s.next:a;o===e.effect.last&&(e.effect.last=o.prev),o.prev&&(o.prev.next=o.next),o.next&&(o.next.prev=o.prev),H(e,s,o),H(e,o,m),O(o,m,r),s=o,f=[],p=[],a=s.next;continue}if((o.f&oe)!==0&&He(o),o!==a){if(u!==void 0&&u.has(o)){if(f.length<p.length){var z=p[0],k;s=z.prev;var A=f[0],w=f[f.length-1];for(k=0;k<f.length;k+=1)O(f[k],z,r);for(k=0;k<p.length;k+=1)u.delete(p[k]);H(e,A.prev,w.next),H(e,s,A),H(e,w,z),a=z,s=w,E-=1,f=[],p=[]}else u.delete(o),O(o,a,r),H(e,o.prev,o.next),H(e,o,s===null?e.effect.first:s.next),H(e,s,o),s=o;continue}for(f=[],p=[];a!==null&&a!==o;)(u??=new Set).add(a),p.push(a),a=a.next;if(a===null)continue}(o.f&S)===0&&f.push(o),s=o,a=o.next}if(e.outrogroups!==null){for(const x of e.outrogroups)x.pending.size===0&&(le(de(x.done)),e.outrogroups?.delete(x));e.outrogroups.size===0&&(e.outrogroups=null)}if(a!==null||u!==void 0){var M=[];if(u!==void 0)for(o of u)(o.f&oe)===0&&M.push(o);for(;a!==null;)(a.f&oe)===0&&a!==e.fallback&&M.push(a),a=a.next;var T=M.length;if(T>0){var R=c===0?r:null;kt(e,M,R)}}}function wt(e,t,r,d,b,c,v,a){var u=(v&rt)!==0?(v&ot)===0?et(r,!1,!1):ze(r):null,s=(v&at)!==0?ze(b):null;return{v:u,i:s,e:ne(()=>(c(t,u??r,s??b,a),()=>{e.delete(d)}))}}function O(e,t,r){if(e.nodes)for(var d=e.nodes.start,b=e.nodes.end,c=t&&(t.f&S)===0?t.nodes.start:r;d!==null;){var v=Be(d);if(c.before(d),d===b)return;d=v}}function H(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Y(e,t,r=!1,d=!1,b=!1){var c=e,v="";X(()=>{var a=Re;if(v===(v=t()??"")){C&&ie();return}if(a.nodes!==null&&(nt(a.nodes.start,a.nodes.end),a.nodes=null),v!==""){if(C){N.data;for(var u=ie(),s=u;u!==null&&(u.nodeType!==Fe||u.data!=="");)s=u,u=Be(u);if(u===null)throw lt(),ct;xe(N,s),c=G(u);return}var f=v+"";r?f=`<svg>${f}</svg>`:d&&(f=`<math>${f}</math>`);var p=qe(f);if((r||d)&&(p=P(p)),xe(P(p),p.lastChild),r||d)for(;P(p);)c.before(P(p));else c.before(p)}})}function xt(e,t){bt(()=>{var r=e.getRootNode(),d=r.host?r:r.head??r.ownerDocument.head;if(!d.querySelector("#"+t.hash)){const b=document.createElement("style");b.id=t.hash,b.textContent=t.code,d.appendChild(b)}})}function Ct(e,t){return e==null?null:String(e)}function U(e,t,r,d){var b=e.__style;if(C||b!==t){var c=Ct(t);(!C||c!==e.getAttribute("style"))&&(c==null?e.removeAttribute("style"):e.style.cssText=c),e.__style=t}return d}const Tt=Symbol("is custom element"),Et=Symbol("is html");function ce(e,t,r,d){var b=zt(e);C&&(b[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||b[t]!==(b[t]=r)&&(t==="loading"&&(e[ut]=r),r==null?e.removeAttribute(t):typeof r!="string"&&De(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function n(e,t,r){var d=vt,b=Re;let c=C;C&&W(!1),Me(null),Ie(null);try{t!=="style"&&(be.has(e.getAttribute("is")||e.nodeName)||!customElements||customElements.get(e.getAttribute("is")||e.tagName.toLowerCase())?De(e).includes(t):r&&typeof r=="object")?e[t]=r:ce(e,t,r==null?r:String(r))}finally{Me(d),Ie(b),c&&W(!0)}}function zt(e){return e.__attributes??={[Tt]:e.nodeName.includes("-"),[Et]:e.namespaceURI===ht}}var be=new Map;function De(e){var t=e.getAttribute("is")||e.nodeName,r=be.get(t);if(r)return r;be.set(t,r=[]);for(var d,b=e,c=Element.prototype;c!==b;){d=pt(b);for(var v in d)d[v].set&&r.push(v);b=dt(b)}return r}const It="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%3e%3cpath%20d='M16%2052V37H26V58'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M44%2037H34V47H44V37Z'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M54%2026V58H6V27.0693H46.4211'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M48%2020V5H41V12.6382'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M2%2030L30%202L58%2030'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/svg%3e",Mt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%3e%3cpath%20d='M24.6696%2036.096H20.018C19.4559%2036.096%2019%2036.5429%2019%2037.0954V38.3236C19%2039.3936%2020.2757%2039.3661%2021.402%2039.5551C20.965%2040.3935%2020.2037%2047.6297%2020.2037%2047.6297C20.2037%2047.797%2020.2037%2056.6833%2020.2037%2056.6833C20.2037%2057.6676%2021.017%2058%2022.0204%2058H24.7933C25.7967%2058%2026.61%2057.6676%2026.61%2056.6833V54.1347H50.4502V56.6831C50.4502%2057.6673%2051.2635%2058%2052.267%2058H55.0398C56.043%2058%2056.8565%2057.6673%2056.8565%2056.6831C56.8565%2056.6831%2056.8565%2047.7968%2056.8565%2047.6295C56.8565%2047.6295%2056.0939%2040.3894%2055.6552%2039.5497C56.765%2039.3635%2058.027%2039.396%2058.027%2038.3232V37.095C58.027%2036.5427%2057.5711%2036.0956%2057.0089%2036.0956H52.3904'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M52.3906%2035.697C52.3906%2037.6703%2050.0933%2038.9853%2047.9237%2038.9853H29.1365C26.9669%2038.9853%2024.6696%2037.6703%2024.6696%2035.697L26.4615%2030.3905C26.8335%2028.5678%2028.2204%2027%2030.3902%2027H46.6704C48.84%2027%2050.2267%2028.5173%2050.5987%2030.3902L52.3906%2035.697Z'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20d='M35%2049H42'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%3e%3c/path%3e%3cpath%20d='M35%2044H42'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%3e%3c/path%3e%3ccircle%20cx='49.4948'%20cy='46.5'%20r='2.5'%20stroke='%233F9FB5'%20stroke-width='3'%3e%3c/circle%3e%3ccircle%20cx='27.5802'%20cy='46.5'%20r='2.5'%20stroke='%233F9FB5'%20stroke-width='3'%3e%3c/circle%3e%3cpath%20d='M36.2937%2030H40.7767'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20d='M56.8568%2054H20.2035'%20stroke='%232F1C3D'%20stroke-width='3'%3e%3c/path%3e%3cpath%20d='M9%2028.243C10.4536%2029.2465%2012.695%2030%2014.3128%2030C16.9014%2030%2019%2028.5448%2019%2026.75C19%2024.955%2016.7593%2024.067%2014.3128%2023.5C11.7772%2022.8698%209.62564%2022.0448%209.62564%2020.25C9.62564%2018.4552%2011.7242%2017%2014.3128%2017C16.0559%2017%2017.5767%2017.6596%2018.3843%2018.6387'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%3e%3c/path%3e%3cpath%20d='M14%2015V32'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M26%2017.5H50'%20stroke='%233F9FB5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='M11.375%2058H2V2H3.27273L11.375%209.0688L19.4773%202H19.9394L28.0417%209.0688L35.8542%202.29938L43.6667%209.0688L51.7689%202H52V21.765'%20stroke='%232F1C3D'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3c/svg%3e";var At=Z("<bt-link> </bt-link>",2),Ft=Z('<bt-box><bt-stack><bt-center><bt-icon><img class="icon"/></bt-icon></bt-center> <bt-center><span>Pay Parking / Traffic Ticket</span></bt-center></bt-stack></bt-box>',2),Ht=Z(`<bt-box><bt-stack><img src="https://s3.amazonaws.com/baltimorecity.gov.if-us-east-1/s3fs-public/2026-01/programs-initiatives-10-year.png"/> <bt-center><h4>Securing Baltimore's Future: 10-Year Financial Plan</h4> <span style="font-size: var(--text-sm);">A strategy to sustainly balance the City's budget
                            while reinvesting in core services, infrastructure,
                            and tax relief.</span></bt-center></bt-stack></bt-box>`,2),St=Z(`<div style="position: sticky; top:0;"><bt-box><bt-sidebar><bt-cluster><div style="border-radius: 10rem; padding: .5em; border: 1px solid white;">Translate</div> <div>espanol</div> <div>francias</div> <div>chinese</div></bt-cluster> <bt-cluster><div style="border-radius: .5em; padding: .5em; border: 1px solid white;">311 - Report A Problem</div> <bt-box><bt-sidebar><input type="text" placeholder="Search BaltimoreCity.gov" style="border:none; outline:none;"/> <bt-button>search</bt-button></bt-sidebar></bt-box></bt-cluster></bt-sidebar></bt-box> <bt-box><bt-sidebar><bt-cluster><h2 style="margin:0">logo</h2> <span style="font-size: var(--text-sm);">Mayor Brandon M. Scott</span></bt-cluster> <bt-cluster></bt-cluster></bt-sidebar></bt-box></div> <bt-box><h1 style="padding: var(--s3) 0;">Good Evening, Baltimore</h1></bt-box> <bt-box><h2>Popular Services</h2> <bt-cluster></bt-cluster></bt-box> <bt-box><bt-cluster><h3>Easy Access to Baltimore <br/> Help-311 Service</h3> <bt-box><bt-cluster><bt-icon><img class="icon"/></bt-icon> <ul style="font-size: var(--text-sm);"><li>Report a problem</li> <li>Track a request</li> <li>Ask a question, call 311</li></ul></bt-cluster></bt-box> <bt-button><span id="services_text" class="svelte-1uha8ag">View 311 Services</span></bt-button></bt-cluster></bt-box> <bt-box><h2>Programs and Initiatives</h2> <bt-cluster></bt-cluster></bt-box> <bt-center><bt-box><h2>Example usage of UI library distributed as Web Components:</h2> <p>I tried exploring the idea of building components as web components.
            Then roughly recreated the front page of <em>beta.baltimorecity.gov</em> using it. <em><b>Web components</b></em> are framework independent so it
            should be easy to distribute and use in any web project. The
            consumer just need to add the css and javascript file with the
            implementation to the head of the webpage, then use components like
            normal html elements. This should be ideal for an organization like
            the <b>City of Baltimore</b> where city websites are built in
            different frameworks. The responsible party don't have to change
            their tech stack to be able to adopt the <em><b>UI library</b></em>. The source code is available on <bt-link>github</bt-link> if you want to check it out.</p> <p>Web components can accept custom props like <b>React</b> components.
            Currently implemented are layout components that affect how child elements
            are laid out. Child elements should be generated by the "host" framework.
            These components should have as little state as possible and let the
            framework handle the app state management. They should also be composable
            so that they can be combined to create new custom components without
            tight integration to a specific framework.</p> <p>Still unsure about the implications on accessibility.</p></bt-box></bt-center> <div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;"><pre>
    <code>
        <!>
    </code>
</pre></div> <bt-center><bt-box><p>The html code above will output:</p></bt-box></bt-center> <div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;"><pre>
    <code>
        <!>
    </code>
</pre></div> <bt-center><bt-box><p>The relevant part is <em>\`data-i\`</em> and <em>\`part\`</em> attributes. They are used to apply css for a specific combination of
            property values. The \`::part()\` selector is used for Web components that
            have a <em>shadow dom</em>.</p> <p>It will append this generated <em>style</em> in the <em>document head</em> when it is mounted and there's no <em>style</em> tag with the same <em>id</em>.</p></bt-box></bt-center> <div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;"><pre>
    <code style="overflow-x: scroll;">
        <!>
    </code>
</pre></div> <bt-center><bt-box><p>This UI library is implemented in <em><b>svelte/sveltekit</b></em> because it has builtin support for building <em><b>web components</b></em>. It should be possible to do this
            with <em><b>React</b></em> but I haven't found a standardized way. We'll have
            to roll out our own solution.</p> <p>Below is the source code for the rough recreation of the <em><b>beta.baltimorecity.gov</b></em> frontpage above. Inline
            styles can still be used so consumers can still adapt it to
            unhandled situations. But this should be used sparingly to keep
            everything thematically consistent or use <em>css variables</em> available in the css file provided as part of
            the UI library.</p></bt-box></bt-center> <div style="border: 2px dashed black; margin: 0 var(--s0); overflow: auto;"><pre>
    <code>
<!>
</code>
</pre></div>`,3);const Bt={hash:"svelte-1uha8ag",code:"body {margin:0;background-color:var(--color-white);}#services_text.svelte-1uha8ag {color:var(--color-white);}#services_text.svelte-1uha8ag:hover {color:var(--color-black);}"};function Vt(e,t){ft(t,!1),xt(e,Bt),Qe();var r=St(),d=gt(r),b=l(d);n(b,"bg_color","var(--color-purple-dark)"),U(b,"color: var(--color-white); font-size: var(--text-xs)");var c=l(b);n(c,"right",!0),n(c,"content-min-width","40");var v=l(c),a=h(v,2);n(a,"justify_end",!0);var u=h(l(a),2);n(u,"rounded",!0),n(u,"bg_color","var(--color-white)"),n(u,"p0",!0);var s=l(u);n(s,"right",!0);var f=h(l(s),2);n(f,"size","xs"),n(f,"bg-color","var(--color-yellow)"),n(f,"font-size","var(--text-sm)"),i(s),i(u),i(a),i(c),i(b);var p=h(b,2);n(p,"purple",!0);var _=l(p);n(_,"content-min-width","70");var B=l(_),o=h(B,2);n(o,"justify_end",!0),se(o,4,()=>["Resident","Businesses","Discover","Departments","Work With Us"],ae,(V,ee)=>{var g=At();n(g,"underline",!0),n(g,"animated",!0);var F=l(g,!0);i(g),X(()=>_t(F,ee)),Q(V,g)}),i(o),i(_),i(p),i(d);var E=h(d,2),m=h(E,2);n(m,"p1",!0),n(m,"bg-color","var(--color-white-off)");var z=h(l(m),2);se(z,4,()=>[0,0,0,0,0],ae,(V,ee)=>{var g=Ft();n(g,"rounded",!0),n(g,"hover",!0),n(g,"bg-color","var(--color-blue-light)");var F=l(g),j=l(F),te=l(j);U(te,"font-size: 3rem;");var We=l(te);i(te),i(j),h(j,2),i(F),i(g),X(()=>ce(We,"src",Mt)),Q(V,g)}),i(z),i(m);var k=h(m,2);n(k,"p1",!0),n(k,"bg-color","var(--color-yellow-pale)");var A=l(k);n(A,"justify-between",!0);var w=h(l(A),2);n(w,"bg-color","var(--color-white-off)");var M=l(w),T=l(M);U(T,"font-size: 3rem;");var R=l(T);i(T),I(2),i(M),i(w);var x=h(w,2);n(x,"bg-color","var(--color-purple)"),i(A),i(k);var y=h(k,2);n(y,"p1",!0),n(y,"bg-color","var(--color-white-off)");var q=h(l(y),2);se(q,4,()=>[0,0,0,0,0],ae,(V,ee)=>{var g=Ht();n(g,"p0",!0),n(g,"rounded",!0),n(g,"hover",!0),n(g,"bg-color","var(--color-blue-light)");var F=l(g);U(F,"max-inline-size: 15em;");var j=h(l(F),2);U(j,"padding-bottom: var(--s1);"),i(F),i(g),Q(V,g)}),i(q),i(y);var L=h(y,2),ue=l(L),he=h(l(ue),2),D=h(l(he),9);n(D,"bold",!0),n(D,"underline",!0),n(D,"animated",!0),n(D,"color","blue"),n(D,"title","github.com/nanocms"),n(D,"href","https://github.com/projectcollection/nanocms/tree/main/uilib/src/lib/layouts"),I(),i(he),I(4),i(ue),i(L);var $=h(L,2),ve=l($),pe=h(l(ve)),Ne=h(l(pe));Y(Ne,()=>hljs.highlight('<bt-link underscore animated href="#">some link</bt-link>',{language:"html"}).value),I(),i(pe),I(),i(ve),i($);var Le=h($,2),J=h(Le,2),fe=l(J),ge=h(l(fe)),Ve=h(l(ge));Y(Ve,()=>hljs.highlight(`<bt-link class="s-y_bCXRrkrYfP" data-i="bt-link-2oQcUI">
            #shadow-root (open)
            <a href="#" part="bt-link-2oQcUI">
                <slot></slot>
            </a>
            some link
        </bt-link>`,{language:"html"}).value),I(),i(ge),I(),i(fe),i(J);var je=h(J,2),K=h(je,2),me=l(K),_e=h(l(me)),Ue=h(l(_e));Y(Ue,()=>hljs.highlight(`<style id="bt-link-2oQcUI">
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
        </style>`,{language:"css"}).value),I(),i(_e),I(),i(me),i(K);var Pe=h(K,2),ke=h(Pe,2),ye=l(ke),we=h(l(ye)),Oe=h(l(we));Y(Oe,()=>hljs.highlight(`<div style="position: sticky; top:0;">
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

   `,{language:"html"}).value),I(),i(we),I(),i(ye),i(ke),X(()=>ce(R,"src",It)),Q(e,r),mt()}export{Vt as component};
