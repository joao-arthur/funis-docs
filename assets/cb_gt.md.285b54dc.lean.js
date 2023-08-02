import{_ as s,v as a,b as l,R as n}from"./chunks/framework.c933d5cc.js";const F=JSON.parse('{"title":"gt","description":"","frontmatter":{},"headers":[],"relativePath":"cb/gt.md","filePath":"cb/gt.md"}'),t={name:"cb/gt.md"},o=n('<h1 id="gt" tabindex="-1">gt <a class="header-anchor" href="#gt" aria-label="Permalink to &quot;gt&quot;">​</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> gt</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">val2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">val1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span></code></pre></div><p>Returns a function that compares val1 &gt; val2.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">gt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">gt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre></div>',6),p=[o];function e(c,r,C,i,y,A){return a(),l("div",null,p)}const d=s(t,[["render",e]]);export{F as __pageData,d as default};
