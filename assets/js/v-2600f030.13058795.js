"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[1789],{8833:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-2600f030",path:"/languages/python.html",title:"Python",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Supported language servers",slug:"supported-language-servers",children:[]},{level:2,title:"Supported formatters",slug:"supported-formatters",children:[]},{level:2,title:"Supported linters",slug:"supported-linters",children:[]},{level:2,title:"LSP Settings",slug:"lsp-settings",children:[]},{level:2,title:"Debugger",slug:"debugger",children:[]}],filePathRelative:"languages/python.md",git:{updatedTime:1636199576e3,contributors:[{name:"abzcoding",email:"abzcoding@gmail.com",commits:4},{name:"christianchiarulli",email:"chrisatmachine@gmail.com",commits:2},{name:"kylo252",email:"59826753+kylo252@users.noreply.github.com",commits:2},{name:"Pasi Bergman",email:"pasi.bergman@iki.fi",commits:1}]}}},5247:(n,a,s)=>{s.r(a),s.d(a,{default:()=>l});const e=(0,s(6252).uE)('<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall <span class="token keyword">python</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="supported-language-servers" tabindex="-1"><a class="header-anchor" href="#supported-language-servers" aria-hidden="true">#</a> Supported language servers</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>python <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;jedi_language_server&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pylsp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pyright&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>python <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;autopep8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;isort&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;reorder-python-imports&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yapf&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="supported-linters" tabindex="-1"><a class="header-anchor" href="#supported-linters" aria-hidden="true">#</a> Supported linters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>python <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;flake8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pylint&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>NlspConfig pyright\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> Debugger</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>DIInstall <span class="token keyword">python</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- ~/.config/lvim/ftplugin/python.lua</span>\n<span class="token keyword">local</span> dap_install <span class="token operator">=</span> require <span class="token string">&quot;dap-install&quot;</span>\ndap_install<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',14),t={},l=(0,s(3744).Z)(t,[["render",function(n,a){return e}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);