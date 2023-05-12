import{_ as s,c as a,o as n,a as l}from"./app.2878b605.js";const F=JSON.parse('{"title":"last","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"arr/last.md"}'),e={name:"arr/last.md"},t=l(`<h1 id="last" tabindex="-1">last <a class="header-anchor" href="#last" aria-hidden="true">#</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">last</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">arr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span></span>
<span class="line"></span></code></pre></div><p>Returns the last item of the array. If the array is empty, returns <em>undefined</em>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">last</span><span style="color:#A6ACCD;">([]) </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">last</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// 6</span></span>
<span class="line"></span></code></pre></div>`,5),o=[t];function p(r,c,i,y,C,A){return n(),a("div",null,o)}const D=s(e,[["render",p]]);export{F as __pageData,D as default};