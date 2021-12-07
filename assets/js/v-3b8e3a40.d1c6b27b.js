"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[3429],{9494:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-3b8e3a40",path:"/languages/scala.html",title:"Scala",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Install Language Server",slug:"install-language-server",children:[]},{level:2,title:"Configure Lunarvim",slug:"configure-lunarvim",children:[]},{level:2,title:"Supported formatters",slug:"supported-formatters",children:[]}],filePathRelative:"languages/scala.md",git:{updatedTime:1636199576e3,contributors:[{name:"Abouzar Parvan",email:"abzcoding@users.noreply.github.com",commits:3},{name:"kylo252",email:"59826753+kylo252@users.noreply.github.com",commits:2},{name:"Nick Waywood",email:"nick.waywood@zendesk.com",commits:1},{name:"arxra",email:"judoaron@hotmail.com",commits:1}]}}},822:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const e=(0,s(6252).uE)('<h1 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall scala\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2><p>To get scala LSP support working in Lunarvim, first you need to do the prerequisites listed here https://github.com/scalameta/nvim-metals#prerequisites.</p><p>Then use coursier to install the metals language server so that it is available on your PATH:</p><p><code>cs install metals</code></p><h2 id="configure-lunarvim" tabindex="-1"><a class="header-anchor" href="#configure-lunarvim" aria-hidden="true">#</a> Configure Lunarvim</h2><p>Add the following to your <code>config.lua</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>plugins <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">&quot;scalameta/nvim-metals&quot;</span><span class="token punctuation">,</span>\n      config <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">local</span> metals_config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;metals&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bare_config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        metals_config<span class="token punctuation">.</span>on_attach <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">common_on_attach</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">end</span>\n        metals_config<span class="token punctuation">.</span>settings <span class="token operator">=</span> <span class="token punctuation">{</span>\n          showImplicitArguments <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span>\n          showInferredType <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span>\n          excludedPackages <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n        metals_config<span class="token punctuation">.</span>init_options<span class="token punctuation">.</span>statusBarProvider <span class="token operator">=</span> <span class="token keyword">false</span>\n        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;metals&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">initialize_or_attach</span> <span class="token punctuation">{</span> metals_config <span class="token punctuation">}</span>\n      <span class="token keyword">end</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>scala <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;scalafmt&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',12),t={},p=(0,s(3744).Z)(t,[["render",function(n,a){return e}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);