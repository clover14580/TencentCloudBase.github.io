(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{388:function(t,a,s){"use strict";s.r(a);var e=s(10),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"身份验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#身份验证"}},[t._v("#")]),t._v(" 身份验证")]),t._v(" "),s("p",[t._v("云存储安全规则与 cloudbase 用户管理相结合，可以实现基于用户的安全身份验证。当 C 端用户登录后，安全规则中 "),s("code",[t._v("auth")]),t._v(" 变量会变成一个包含该用户唯一 ID（"),s("code",[t._v("auth.uid")]),t._v("）和登录方式（"),s("code",[t._v("auth.loginType")]),t._v("）的对象。反之用户未登录，则"),s("code",[t._v("auth")]),t._v("的值为 null。通过 "),s("code",[t._v("auth")]),t._v(" 规则可以实现对每个用户的数据访问控制。")]),t._v(" "),s("h2",{attrs:{id:"授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权"}},[t._v("#")]),t._v(" 授权")]),t._v(" "),s("p",[t._v("识别用户身份只是安全工作的一部分。在知道用户的身份后，开发者需要一种方法来控制该用户对云存储中的文件的访问权限。\n云存储支持存储桶级别的授权规则，通过设置安全规则可以对桶内的所有文件的读写操作进行限制。例如，所有用户可读，管理员及所有者可写权限可以通过如下规则得到：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"read"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"write"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resource.openid == auth.uid"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("开发者可在云存储权限管理中选择安全规则自定义管理存储桶权限。")])])}),[],!1,null,null,null);a.default=r.exports}}]);