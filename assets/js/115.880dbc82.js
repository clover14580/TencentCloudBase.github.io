(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{506:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("h2",{attrs:{id:"当前文档已迁移到新的文档站点，此内容不再维护！"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前文档已迁移到新的文档站点，此内容不再维护！"}},[a._v("#")]),a._v(" 当前文档已迁移到新的"),t("a",{attrs:{href:"https://docs.cloudbase.net/cli/intro.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("文档站点"),t("OutboundLink")],1),a._v("，此内容不再维护！")])]),a._v(" "),t("h1",{attrs:{id:"安全域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全域名"}},[a._v("#")]),a._v(" 安全域名")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("⚠️注意事项")]),a._v(" "),t("p",[a._v("所有 CloudBase CLI 命令均在配置文件所在目录执行。")])]),a._v(" "),t("p",[a._v("当您需要在网页应用中使用云开发的身份验证服务时，您需要将您的网站的域名（发起请求的页面的域名）加入安全域名名单中。安全域名是云开发服务认可的用户请求来源域名，所有来自非安全域名名单中的请求都不会被响应。")]),a._v(" "),t("h2",{attrs:{id:"查看安全域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看安全域名"}},[a._v("#")]),a._v(" 查看安全域名")]),a._v(" "),t("p",[a._v("使用下面的命令查看所有配置的安全域名")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase env:domain:list\n")])])]),t("p",[a._v("您会得到类似下面的输出")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("┌────────────────────────────────────┬────────────────┬─────────────────────┬────────┐\n│              Domain Id             │     Domain     │     CreateTime      │ Status │\n├────────────────────────────────────┼────────────────┼─────────────────────┼────────┤\n│ 953e45d7-e182-475b-8320-xxxxxxxxxx │    xxxxx.com   │ "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-06-21 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(":04:00 │  启用中 │\n├────────────────────────────────────┼────────────────┼─────────────────────┼────────┤\n│ 7a6ddc78-b81b-4542-83a4-xxxxxxxxxx │    xxxx.com    │ "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),a._v("-07-11 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(":14:08 │  启用中 │\n└────────────────────────────────────┴────────────────┴─────────────────────┴────────┘\n")])])]),t("h2",{attrs:{id:"新增安全域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新增安全域名"}},[a._v("#")]),a._v(" 新增安全域名")]),a._v(" "),t("p",[a._v("您可以使用下面的命令添加新的安全域名：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase env:domain:create "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("domian"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("您需要指定被添加的域名 domain，当需要添加多个域名时，需要以 "),t("code",[a._v("/")]),a._v(" 分隔，如 "),t("code",[a._v("abc.com/def.com")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加一个域名")]),a._v("\ncloudbase env:domain:create www.xxx.com\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加多个域名")]),a._v("\ncloudbase env:domain:create www.domain1.com/www.domain2.com/www.domain3.com\n")])])]),t("h2",{attrs:{id:"删除安全域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除安全域名"}},[a._v("#")]),a._v(" 删除安全域名")]),a._v(" "),t("p",[a._v("您可以使用下面的命令删除安全域名：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("cloudbase env:domain:delete\n")])])]),t("p",[a._v("回车后，CloudBase CLI 会拉取您配置的所有安全域名，您可以选择删除指定的域名。")])])}),[],!1,null,null,null);s.default=r.exports}}]);