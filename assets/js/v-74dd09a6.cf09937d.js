"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[3190],{9251:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-74dd09a6",path:"/languages/",title:"Overview",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"At a glance",slug:"at-a-glance",children:[]},{level:2,title:"LSP support",slug:"lsp-support",children:[{level:3,title:"Installing and updating a server",slug:"installing-and-updating-a-server",children:[]},{level:3,title:"Server override",slug:"server-override",children:[]},{level:3,title:"Server setup",slug:"server-setup",children:[]},{level:3,title:"Server settings",slug:"server-settings",children:[]}]},{level:2,title:"Formatting",slug:"formatting",children:[{level:3,title:"Custom arguments",slug:"custom-arguments",children:[]},{level:3,title:"Multi languages per formatter",slug:"multi-languages-per-formatter",children:[]},{level:3,title:"Multi formatters per language",slug:"multi-formatters-per-language",children:[]},{level:3,title:"Lazy-loading the formatter setup",slug:"lazy-loading-the-formatter-setup",children:[]},{level:3,title:"Formatting on save",slug:"formatting-on-save",children:[]}]},{level:2,title:"Linting",slug:"linting",children:[{level:3,title:"Custom arguments",slug:"custom-arguments-1",children:[]},{level:3,title:"Multi linters per language",slug:"multi-linters-per-language",children:[]},{level:3,title:"Multi languages per linter",slug:"multi-languages-per-linter",children:[]},{level:3,title:"Lazy-loading the linter setup",slug:"lazy-loading-the-linter-setup",children:[]}]}],filePathRelative:"languages/README.md",git:{updatedTime:1638812187e3,contributors:[{name:"kylo252",email:"59826753+kylo252@users.noreply.github.com",commits:15},{name:"rebuilt",email:"memoryman51@hotmail.com",commits:6},{name:"christianchiarulli",email:"chrisatmachine@gmail.com",commits:3},{name:"Pasi Bergman",email:"pasi.bergman@iki.fi",commits:2},{name:"Binx-Codes",email:"Devchou2008@gmail.com",commits:1},{name:"Chris",email:"chris@macbook.local",commits:1},{name:"Florian Hennig",email:"flo.hennig@gmail.com",commits:1},{name:"Tran Phuc",email:"glupstar312@gmail.com",commits:1},{name:"William Boman",email:"william@redwill.se",commits:1}]}}},8604:(n,s,a)=>{a.r(s),a.d(s,{default:()=>vn});var e=a(6252);const t=(0,e._)("h1",{id:"overview",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),(0,e.Uk)(" Overview")],-1),l=(0,e.Uk)("LunarVim strives to have support for all major languages. The is made possible by utilizing some of the great plugins in Neovim's ecosystem. Such plugins are "),p={href:"https://github.com/neovim/nvim-lspconfig",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("nvim-lspconfig"),i=(0,e.Uk)(", for LSP support, and "),r={href:"https://github.com/jose-elias-alvarez/null-ls.nvim",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("Null-ls"),c=(0,e.Uk)(" to provide support for handling external formatters, such as "),d={href:"https://github.com/prettier/prettier",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("prettier"),k=(0,e.Uk)(" and "),g={href:"https://github.com/eslint/eslint",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("eslint"),b=(0,e.Uk)(". Furthermore, LunarVim integrates with "),f={href:"https://github.com/nvim-treesitter/nvim-treesitter",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Uk)("nvim-treesitter"),y=(0,e.Uk)(" to provider rich syntax highlighting and other language parsing magic."),q=(0,e._)("p",null,"If your language is not supported please check the following links and file a ticket so we can",-1),w=(0,e.Uk)("Check if LSP support is available in the lspconfig "),_={href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",target:"_blank",rel:"noopener noreferrer"},x=(0,e.Uk)("repo"),U=(0,e.Uk)("Check if your linter or formatter is available in the null-ls "),L={href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md",target:"_blank",rel:"noopener noreferrer"},I=(0,e.Uk)("repo"),N=(0,e.Uk)("Check if your syntax is supported in the treesitter "),C={href:"https://github.com/nvim-treesitter/nvim-treesitter",target:"_blank",rel:"noopener noreferrer"},S=(0,e.Uk)("repo"),A=(0,e._)("h2",{id:"at-a-glance",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#at-a-glance","aria-hidden":"true"},"#"),(0,e.Uk)(" At a glance")],-1),R=(0,e._)("p",null,"You can use the following commands to check some information about any language servers that you have configured.",-1),E=(0,e.uE)("<li><p><code>:LvimInfo</code></p><ul><li>Contains information about all the servers attached to the buffer you are editing and their current capabilities, such as formatting and go-to definition support. It also includes information related to any linters and formatters that are, or can be, configured.</li><li>keybind: <code>&lt;leader&gt;Li</code></li></ul></li><li><p><code>:LspInfo</code></p><ul><li>Contains basic information about all the servers that are running.</li><li>keybind: <code>&lt;leader&gt;li</code></li></ul></li>",2),W=(0,e._)("p",null,[(0,e._)("code",null,":LspInstallInfo")],-1),M=(0,e.Uk)("Contains information about all the servers that you can manage with "),V={href:"https://github.com/williamboman/nvim-lsp-installer",target:"_blank",rel:"noopener noreferrer"},z=(0,e.Uk)("nvim-lsp-installer"),P=(0,e.Uk)("."),F=(0,e._)("li",null,[(0,e.Uk)("keybind: "),(0,e._)("code",null,"<leader>lI")],-1),T=(0,e.uE)('<h2 id="lsp-support" tabindex="-1"><a class="header-anchor" href="#lsp-support" aria-hidden="true">#</a> LSP support</h2><h3 id="installing-and-updating-a-server" tabindex="-1"><a class="header-anchor" href="#installing-and-updating-a-server" aria-hidden="true">#</a> Installing and updating a server</h3><h4 id="automatic-server-installation" tabindex="-1"><a class="header-anchor" href="#automatic-server-installation" aria-hidden="true">#</a> Automatic server installation</h4><p>By default, most supported language servers will get automatically installed once you open the supported file-type, e.g, opening a Python file for the first time will install <code>Pyright</code> and configure it automatically for you.</p><ul><li>configuration option</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>automatic_servers_installation <span class="token operator">=</span> <span class="token keyword">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),B=(0,e.Uk)("Please refer to "),O={href:"https://github.com/williamboman/nvim-lsp-installer",target:"_blank",rel:"noopener noreferrer"},j=(0,e.Uk)("nvim-lsp-installer"),D=(0,e.Uk)(" to see the updated full list of currently available servers."),G=(0,e.uE)('<p>To install a supported language server:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:LspInstall <span class="token code-snippet code keyword">`&lt;your_language_server&gt;`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can also toggle <code>&lt;:LspInstallInfo&gt;</code> and interactively choose which servers to install.</p><h3 id="server-override" tabindex="-1"><a class="header-anchor" href="#server-override" aria-hidden="true">#</a> Server override</h3><p><code>lvim.lsp.override</code> contains a list of servers that will <strong>not</strong> be automatically configured by default, for example only <code>tsserver</code> is allowed for JS-family languages, and when a language has more than one server available, then the most popular one is usually chosen.</p><div class="custom-container tip"><p class="custom-container-title">Notice</p><p>Overriding a server will completely bypass the lsp-installer, so you would have to manage the installation for any of those servers manually.</p></div><p>See the current list</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>override<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>See the default list</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.config&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>override<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Notice</p><p>Any changes to <code>lvim.lsp.override</code> <strong>must</strong> be followed by <code>:LvimCacheReset</code> to take effect.</p></div><h3 id="server-setup" tabindex="-1"><a class="header-anchor" href="#server-setup" aria-hidden="true">#</a> Server setup</h3>',12),Y=(0,e.Uk)("LunarVim uses "),$=(0,e.Uk)("filetype plugins"),H=(0,e.Uk)(" to enable lazy-loading the setup of a language server. A template generator is used to create "),Z=(0,e._)("code",null,"ftplugin",-1),J=(0,e.Uk)(" files and populate them with the setup call."),K=(0,e.uE)('<ul><li>configuration option</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>templates_dir <span class="token operator">=</span> <span class="token function">join_paths</span><span class="token punctuation">(</span><span class="token function">get_runtime_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;after&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ftplugin&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>A typical setup call with default arguments</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- edit this file by running `:lua vim.cmd(&quot;edit &quot; .. lvim.lsp.templates_dir .. &quot;/lua.lua&quot;))`</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.manager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token string">&quot;sumneko_lua&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can quickly find these files by running <code>&lt;leader&gt;Lf</code> -&gt; &quot;Find LunarVim Files&quot;</p></div><h4 id="overriding-the-default-setup-options" tabindex="-1"><a class="header-anchor" href="#overriding-the-default-setup-options" aria-hidden="true">#</a> Overriding the default setup options</h4><p>Add the server you wish to configure manually to <code>lvim.lsp.override</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span><span class="token function">list_extend</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>override<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;pyright&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',8),Q=(0,e.Uk)("Now you can set it up manually using the builtin "),X={href:"https://github.com/LunarVim/LunarVim/blob/rolling/lua/lvim/lsp/manager.lua",target:"_blank",rel:"noopener noreferrer"},nn=(0,e.Uk)("lsp-manager"),sn=(0,e.uE)('<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">--- list of options that should take predence over any of LunarVim&#39;s defaults</span>\n<span class="token comment">--- check the lspconfig documentation for a list of all possible options</span>\n<span class="token keyword">local</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.manager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token string">&quot;pyright&quot;</span><span class="token punctuation">,</span> opts<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Alternatively, set it up using the <code>lspconfig</code> API directly</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">--- check the lspconfig documentation for a list of all possible options</span>\n<span class="token keyword">local</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lspconfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;pyright&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span>opts<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="server-settings" tabindex="-1"><a class="header-anchor" href="#server-settings" aria-hidden="true">#</a> Server settings</h3><p>To set a setting for your language server:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>NlspConfig <span class="token operator">&lt;</span>TAB<span class="token operator">&gt;</span>\n<span class="token punctuation">:</span>NlspConfig <span class="token operator">&lt;</span>NAME_OF_LANGUAGE_SERVER<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',6),an=(0,e.Uk)("This will create a file in "),en=(0,e._)("code",null,"$LUNARVIM_CONFIG_DIR/lsp-settings",-1),tn=(0,e.Uk)(", to enable persistent changes. Refer to the documentation of "),ln={href:"https://github.com/tamago324/nlsp-settings.nvim/blob/main/schemas/README.md",target:"_blank",rel:"noopener noreferrer"},pn=(0,e.Uk)("nlsp-settings"),on=(0,e.Uk)(" for a full updated list of supported language servers."),rn=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Make sure to install <code>jsonls</code> for autocompletion.</p></div><h2 id="formatting" tabindex="-1"><a class="header-anchor" href="#formatting" aria-hidden="true">#</a> Formatting</h2><p>Set a formatter, this will override the language server formatting capabilities (if it exists)</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>\nformatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;black&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--print-width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescriptreact&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><em>Note: Formatters&#39; installation is not managed by LunarVim. Refer to the each tool&#39;s respective manual for installation steps.</em></p><h3 id="custom-arguments" tabindex="-1"><a class="header-anchor" href="#custom-arguments" aria-hidden="true">#</a> Custom arguments</h3><p>It&#39;s also possible to add custom arguments for each formatter.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>\nformatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">---@usage arguments to pass to the formatter</span>\n    <span class="token comment">-- these cannot contain whitespaces, options such as `--line-width 80` become either `{&#39;--line-width&#39;, &#39;80&#39;}` or `{&#39;--line-width=80&#39;}`</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--print-width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><em>Note: remember that arguments cannot contains spaces, options such as <code>--line-width 80</code> become either <code>{&#39;--line-width&#39;, &#39;80&#39;}</code> or <code>{&#39;--line-width=80&#39;}</code>.</em></p><h3 id="multi-languages-per-formatter" tabindex="-1"><a class="header-anchor" href="#multi-languages-per-formatter" aria-hidden="true">#</a> Multi languages per formatter</h3><p>By default a formatter will attach to all the filetypes it supports.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>\nformatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">---@usage specify which filetypes to enable. By default a providers will attach to all the filetypes it supports.</span>\n    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescriptreact&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><em>Note: removing the <code>filetypes</code> argument will allow the formatter to attach to all the default filetypes it supports.</em></p><h3 id="multi-formatters-per-language" tabindex="-1"><a class="header-anchor" href="#multi-formatters-per-language" aria-hidden="true">#</a> Multi formatters per language</h3><p>There are no restrictions on setting up multiple formatters per language</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>\nformatters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;isort&quot;</span><span class="token punctuation">,</span> filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="lazy-loading-the-formatter-setup" tabindex="-1"><a class="header-anchor" href="#lazy-loading-the-formatter-setup" aria-hidden="true">#</a> Lazy-loading the formatter setup</h3>',17),un=(0,e.Uk)("By default, all null-ls providers are checked on startup. If you want to avoid that or want to only set up the provider when you opening the associated file-type, then you can use "),cn=(0,e.Uk)("filetype plugins"),dn=(0,e.Uk)(" for this purpose."),mn=(0,e.uE)('<p>Let&#39;s take <code>markdown</code> as an example:</p><ol><li>create a file called <code>markdown.lua</code> in the <code>$LUNARVIM_CONFIG_DIR/after/ftplugin</code> folder</li><li>add the following snippet</li></ol><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> formatters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.formatters&quot;</span>\nformatters<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">{</span>exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> filetypes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;markdown&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="formatting-on-save" tabindex="-1"><a class="header-anchor" href="#formatting-on-save" aria-hidden="true">#</a> Formatting on save</h3><p>You can disable auto-command and is to true by default.</p><ul><li>configuration option</li></ul><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>format_on_save <span class="token operator">=</span> <span class="token keyword">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="linting" tabindex="-1"><a class="header-anchor" href="#linting" aria-hidden="true">#</a> Linting</h2><p>Set additional linters</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>\nlinters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;flake8&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;shellcheck&quot;</span><span class="token punctuation">,</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--severity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;warning&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;codespell&quot;</span><span class="token punctuation">,</span>\n    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><em>Note: linters&#39; installation is not managed by LunarVim. Refer to the each tool&#39;s respective manual for installation steps.</em></p><h3 id="custom-arguments-1" tabindex="-1"><a class="header-anchor" href="#custom-arguments-1" aria-hidden="true">#</a> Custom arguments</h3><p>It&#39;s also possible to add custom arguments for each linter.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>\nlinters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;shellcheck&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">---@usage arguments to pass to the formatter</span>\n    <span class="token comment">-- these cannot contain whitespaces, options such as `--line-width 80` become either `{&#39;--line-width&#39;, &#39;80&#39;}` or `{&#39;--line-width=80&#39;}`</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;--severity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;warning&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><em>Note: remember that arguments cannot contains spaces, options such as <code>--line-width 80</code> become either <code>{&#39;--line-width&#39;, &#39;80&#39;}</code> or <code>{&#39;--line-width=80&#39;}</code>.</em></p><h3 id="multi-linters-per-language" tabindex="-1"><a class="header-anchor" href="#multi-linters-per-language" aria-hidden="true">#</a> Multi linters per language</h3><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>\nlinters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;flake8&quot;</span><span class="token punctuation">,</span> filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;codespell&quot;</span><span class="token punctuation">,</span> filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="multi-languages-per-linter" tabindex="-1"><a class="header-anchor" href="#multi-languages-per-linter" aria-hidden="true">#</a> Multi languages per linter</h3><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>\nlinters<span class="token punctuation">.</span><span class="token function">setup</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;codespell&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">---@usage specify which filetypes to enable. By default a providers will attach to all the filetypes it supports.</span>\n    filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Removing the <code>filetypes</code> argument will allow the linter to attach to all the default filetypes it supports.</p></div><h3 id="lazy-loading-the-linter-setup" tabindex="-1"><a class="header-anchor" href="#lazy-loading-the-linter-setup" aria-hidden="true">#</a> Lazy-loading the linter setup</h3>',21),kn=(0,e.Uk)("By default, all null-ls providers are checked on startup. If you want to avoid that or want to only set up the provider when you opening the associated file-type, then you can use "),gn=(0,e.Uk)("filetype plugins"),hn=(0,e.Uk)(" for this purpose."),bn=(0,e.uE)('<p>Let&#39;s take <code>python</code> as an example:</p><ol><li>create a file called <code>python.lua</code> in the <code>$LUNARVIM_CONFIG_DIR/after/ftplugin</code> folder</li><li>add the following snippet</li></ol><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> linters <span class="token operator">=</span> require <span class="token string">&quot;lvim.lsp.null-ls.linters&quot;</span>\nlinters<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">{</span>exe <span class="token operator">=</span> <span class="token string">&quot;flake8&quot;</span><span class="token punctuation">,</span> filetypes <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',3),fn={},vn=(0,a(3744).Z)(fn,[["render",function(n,s){const a=(0,e.up)("OutboundLink"),fn=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[l,(0,e._)("a",p,[o,(0,e.Wm)(a)]),i,(0,e._)("a",r,[u,(0,e.Wm)(a)]),c,(0,e._)("a",d,[m,(0,e.Wm)(a)]),k,(0,e._)("a",g,[h,(0,e.Wm)(a)]),b,(0,e._)("a",f,[v,(0,e.Wm)(a)]),y]),q,(0,e._)("ul",null,[(0,e._)("li",null,[w,(0,e._)("a",_,[x,(0,e.Wm)(a)])]),(0,e._)("li",null,[U,(0,e._)("a",L,[I,(0,e.Wm)(a)])]),(0,e._)("li",null,[N,(0,e._)("a",C,[S,(0,e.Wm)(a)])])]),A,R,(0,e._)("ul",null,[E,(0,e._)("li",null,[W,(0,e._)("ul",null,[(0,e._)("li",null,[M,(0,e._)("a",V,[z,(0,e.Wm)(a)]),P]),F])])]),T,(0,e._)("p",null,[B,(0,e._)("a",O,[j,(0,e.Wm)(a)]),D]),G,(0,e._)("p",null,[Y,(0,e.Wm)(fn,{to:"/configuration/07-ftplugin.html"},{default:(0,e.w5)((()=>[$])),_:1}),H,Z,J]),K,(0,e._)("p",null,[Q,(0,e._)("a",X,[nn,(0,e.Wm)(a)])]),sn,(0,e._)("p",null,[an,en,tn,(0,e._)("a",ln,[pn,(0,e.Wm)(a)]),on]),rn,(0,e._)("p",null,[un,(0,e.Wm)(fn,{to:"/configuration/07-ftplugin.html"},{default:(0,e.w5)((()=>[cn])),_:1}),dn]),mn,(0,e._)("p",null,[kn,(0,e.Wm)(fn,{to:"/configuration/07-ftplugin.html"},{default:(0,e.w5)((()=>[gn])),_:1}),hn]),bn],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);