import{r as e,o as c,c as B,b as n,w as l,a as s,F as i,e as o,d as a}from"./app.eb9008f4.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=o('<h1 id="\u7518\u7279\u56FE-vue-\u7248-dhtmlx-gantt" tabindex="-1"><a class="header-anchor" href="#\u7518\u7279\u56FE-vue-\u7248-dhtmlx-gantt" aria-hidden="true">#</a> \u7518\u7279\u56FE vue \u7248\uFF08dhtmlx-gantt\uFF09</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="\u4E00\u3001\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u4E0B\u8F7D\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u4E0B\u8F7D\u5305" aria-hidden="true">#</a> \u4E00\u3001\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u4E0B\u8F7D\u5305</h3>',3),F=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#282c34"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"npm install dhtmlx-gantt")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),b=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#282c34"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"yarn add dhtmlx-gantt")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),A=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#282c34"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"pnpm add dhtmlx-gantt")]),a(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1),m=o(`<h3 id="\u4E8C\u3001\u5728\u9879\u76EE\u4E2D\u5F15\u5165-\u5305\u542B-js-\u548C-css" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5728\u9879\u76EE\u4E2D\u5F15\u5165-\u5305\u542B-js-\u548C-css" aria-hidden="true">#</a> \u4E8C\u3001\u5728\u9879\u76EE\u4E2D\u5F15\u5165\uFF0C\u5305\u542B js \u548C css</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">gantt</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;dhtmlx-gantt&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;dhtmlx-gantt/codebase/dhtmlxgantt.css&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4E09\u3001\u521D\u59CB\u5316\u7518\u7279\u56FE\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u521D\u59CB\u5316\u7518\u7279\u56FE\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001\u521D\u59CB\u5316\u7518\u7279\u56FE\u914D\u7F6E</h3><h4 id="_1-\u51C6\u5907\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u51C6\u5907\u5BB9\u5668" aria-hidden="true">#</a> 1.\u51C6\u5907\u5BB9\u5668</h4><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">ref</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;gantt&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;container&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2-\u914D\u7F6E\u521D\u59CB\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u521D\u59CB\u6570\u636E" aria-hidden="true">#</a> 2.\u914D\u7F6E\u521D\u59CB\u6570\u636E</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">tasks</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;\u9879\u76EE1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">start_date</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;2020-01-17&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">duration</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">progress</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0.6</span><span style="color:#ABB2BF;">,                                   </span><span style="color:#7F848E;font-style:italic;">//\u5F53\u524D\u8FDB\u5EA6\u767E\u5206\u6BD4</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;\u9879\u76EE2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">start_date</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;2020-01-20&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">duration</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">progress</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0.4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">      ],</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">links</span><span style="color:#ABB2BF;">: [{ </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">source</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;0&quot;</span><span style="color:#ABB2BF;"> }], </span><span style="color:#7F848E;font-style:italic;">//\u4ECEsource\u6307\u5411target\u7684\u8FDE\u63A5\u7EBF</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">},</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="_3-\u521D\u59CB\u5316\u548C\u914D\u7F6E\u7518\u7279\u56FE\u53C2\u6570-\u5E76\u901A\u8FC7-ref-\u7ED1\u5B9A\u5230\u5BB9\u5668\u4E0A-\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u521D\u59CB\u5316\u548C\u914D\u7F6E\u7518\u7279\u56FE\u53C2\u6570-\u5E76\u901A\u8FC7-ref-\u7ED1\u5B9A\u5230\u5BB9\u5668\u4E0A-\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> 3.\u521D\u59CB\u5316\u548C\u914D\u7F6E\u7518\u7279\u56FE\u53C2\u6570\uFF0C\u5E76\u901A\u8FC7 ref \u7ED1\u5B9A\u5230\u5BB9\u5668\u4E0A\uFF08\u57FA\u672C\u914D\u7F6E\uFF09</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#61AFEF;">mounted</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">gantt</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">xml_date</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;%Y-%m-%d&quot;</span><span style="color:#ABB2BF;">;  </span><span style="color:#7F848E;font-style:italic;">//\u53C2\u6570</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">gantt</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">init</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">$refs</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">gantt</span><span style="color:#ABB2BF;">);        </span><span style="color:#7F848E;font-style:italic;">//\u901A\u8FC7ref\u7ED1\u5B9A\u5230\u5BB9\u5668\u4E0A</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">gantt</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">tasks</span><span style="color:#ABB2BF;">);             </span><span style="color:#7F848E;font-style:italic;">//\u5C06\u4E0A\u65B9\u7684\u6570\u636E\u4F20\u5165</span></span>
<span class="line"><span style="color:#ABB2BF;">},</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4EE5\u4E0A\u7518\u7279\u56FE\u5F15\u5165\u5B8C\u6BD5\uFF0C\u4F60\u5E94\u8BE5\u53EF\u4EE5\u770B\u5230\u6700\u57FA\u672C\u7684\u7518\u7279\u56FE\u4E86</p><h2 id="\u53EF\u9009\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u914D\u7F6E" aria-hidden="true">#</a> \u53EF\u9009\u914D\u7F6E</h2>`,11),h=a("\u8FD9\u91CC\u53EA\u4ECB\u7ECD\u4E00\u4E9B\u5E38\u7528\u7684\u914D\u7F6E\uFF0C\u66F4\u591A\u7684\u914D\u7F6E\u8BF7\u770B"),C={href:"https://docs.dhtmlx.com/gantt/desktop__task_bars.html",target:"_blank",rel:"noopener noreferrer"},E=a("\u5B98\u7F51\u6587\u6863"),g=o(`<h3 id="\u53EA\u8BFB\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53EA\u8BFB\u6A21\u5F0F" aria-hidden="true">#</a> \u53EA\u8BFB\u6A21\u5F0F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#E5C07B;">gantt</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">readonly</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u4E0D\u53EF\u9009\u53D6" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u53EF\u9009\u53D6" aria-hidden="true">#</a> \u4E0D\u53EF\u9009\u53D6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#E5C07B;">gantt</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">select_task</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5DE6\u4FA7\u5217\u8868\u76F8\u5173\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u4FA7\u5217\u8868\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a> \u5DE6\u4FA7\u5217\u8868\u76F8\u5173\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#E5C07B;">gantt</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">columns</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;text&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">label</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;\u540D\u5B57&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">280</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">template</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">obj</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`\u540D\u5B57\u662F\uFF1A</span><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">text</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">//\u901A\u8FC7 template \u56DE\u8C03\u53EF\u4EE5\u6307\u5B9A\u8FD4\u56DE\u5185\u5BB9\u503C</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;start_date&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">label</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;\u5F00\u59CB\u65F6\u95F4&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;duration&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">label</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;\u65F6\u957F&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="tooltips" tabindex="-1"><a class="header-anchor" href="#tooltips" aria-hidden="true">#</a> Tooltips</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//\u81EA\u5B9A\u4E49Tooltips\u6837\u5F0F\uFF08\u53EF\u9009\uFF09</span></span>
<span class="line"><span style="color:#E5C07B;">gantt</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">templates</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">tooltip_text</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">start</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">end</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">task</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">t</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">gantt</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">output</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`</span></span>
<span class="line"><span style="color:#98C379;">&lt;b&gt;\u91CC\u7A0B\u7891\uFF1A&lt;/b&gt;</span></span>
<span class="line"><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">task</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">text</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#98C379;">&lt;br /&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;b&gt;\u8BA1\u5212\u5F00\u59CB\u65F6\u95F4\uFF1A&lt;/b&gt;</span></span>
<span class="line"><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">t</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">templates</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">tooltip_date_format</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">start</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">}</span></span>
<span class="line"><span style="color:#98C379;">&lt;br /&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;b&gt;\u8BA1\u5212\u7ED3\u675F\u65F6\u95F4\uFF1A&lt;/b&gt;</span></span>
<span class="line"><span style="color:#C678DD;">\${</span><span style="color:#E5C07B;">t</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">templates</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">tooltip_date_format</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">end</span><span style="color:#ABB2BF;">)</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">output</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}; </span><span style="color:#7F848E;font-style:italic;">//\u5F00\u542FTooltips</span></span>
<span class="line"><span style="color:#E5C07B;">gantt</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">plugins</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">tooltip</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,8);function _(v,f){const p=e("CodeGroupItem"),t=e("CodeGroup"),r=e("ExternalLinkIcon");return c(),B(i,null,[u,n(t,null,{default:l(()=>[n(p,{title:"npm"},{default:l(()=>[F]),_:1}),n(p,{title:"yarn"},{default:l(()=>[b]),_:1}),n(p,{title:"pnpm"},{default:l(()=>[A]),_:1})]),_:1}),m,s("p",null,[h,s("a",C,[E,n(r)])]),g],64)}var k=y(d,[["render",_]]);export{k as default};