import{_ as s,v as a,b as n,R as l}from"./chunks/framework.c933d5cc.js";const i=JSON.parse('{"title":"lazyRange","description":"","frontmatter":{},"headers":[],"relativePath":"num/lazy-range.md","filePath":"num/lazy-range.md"}'),o={name:"num/lazy-range.md"},p=l(`<h1 id="lazyrange" tabindex="-1">lazyRange <a class="header-anchor" href="#lazyrange" aria-label="Permalink to &quot;lazyRange&quot;">​</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lazyRange</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;font-style:italic;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;font-style:italic;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#A6ACCD;font-style:italic;">step</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IterableIterator</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Returns an iterable range from a number to another, respecting the step between each value.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lazyRange</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// []</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lazyRange</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// []</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lazyRange</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [-1, 0, 1, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lazyRange</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5.1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [4, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lazyRange</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [2, 1, 0, -1]</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lazyRange</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10.2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0.2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [10.2, 10, 9.8, 9.6, 9.4, 9.2, 9]</span></span></code></pre></div>`,6),e=[p];function t(c,r,y,C,D,F){return a(),n("div",null,e)}const m=s(o,[["render",t]]);export{i as __pageData,m as default};
