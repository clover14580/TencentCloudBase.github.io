(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{441:function(t,a,s){"use strict";s.r(a);var v=s(10),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在此之前我们先了解下小程序的运行机制。")]),t._v(" "),s("p",[t._v("小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。")]),t._v(" "),s("blockquote",[s("p",[t._v("「热启动」\n假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动。\n「冷启动」\n用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("                                    『 对于小程序版本更新的思考 』\n")])])]),s("p",[t._v("小程序冷启动时，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。")]),t._v(" "),s("blockquote",[s("p",[t._v("在小程序的开发过程中，我们经常会遇到一种情况，当修复一个紧急 bug 或者上线一种新功能时，产品希望用户打> 开小程序的时候就是最新版。")])]),t._v(" "),s("p",[t._v("或许你想到了用 wx.getUpdateManager 这个 API，在小程序启动的时候监听有无版本更新，并且能够强制小程序重启并使用新版本。")]),t._v(" "),s("p",[t._v("但是这会导致一个用户体验问题，每次有新版本包时都会提示用户更新，对于需求迭代更新速度快的小程序特别不友好，非常打扰用户。")]),t._v(" "),s("p",[t._v("转转是一个日活几百万的小程序，业务线分了好多条，每天都有可能会发布新版本甚至不止一个。迫切需要实现版本更新管理。")]),t._v(" "),s("p",[t._v("我们就想着可以通过接口获取需要更新的版本信息，根据返回结果再判断是否需要重启使用新包。")]),t._v(" "),s("p",[t._v("鉴于转转有多条业务线，希望当用户不进入某条需要更新的业务线时就不用强制更新，只想实现以页面为粒度判断是否需要更新。下图是我们设计的思路：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://ask.qcloudimg.com/draft/4744530/fp3lvakk0y.jpeg",alt:""}})]),t._v(" "),s("p",[t._v("但是这就涉及到需要 RD 帮我们存储数据、提供接口获取数据。当时快年底了 RD 资源很紧张，所以就想着不用 RD，前端能不能自己做？")]),t._v(" "),s("p",[t._v("于是，云开发，正式登场......")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("                                      『 云开发提供的能力：数据库 』\n")])])]),s("p",[t._v("云开发提供了一个 JSON 数据库，让我们可以在控制台创建一个版本信息的集合，在里面插入需要更新的版本信息")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://ask.qcloudimg.com/draft/4744530/xyngvql9hs.jpeg",alt:""}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("                                      『 云开发提供的能力：云函数 』\n")])])]),s("p",[t._v("云函数让我们能够自己写函数实现读取数据库的功能。每次请求时，我们只返回前三条记录，3 条记录的版本都高于小程序自带版本的话，说明用户也很久没打开过小程序了，直接提示用户更新。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://ask.qcloudimg.com/draft/4744530/22xc7mud64.jpeg",alt:""}})]),t._v(" "),s("p",[t._v("一开始我们的设计思路是每个页面打开时都去调云函数判断是否需要更新当前页，转转的页面打开次数每天都是千万级别，当时还比较担心云开发能否顶住压力。")]),t._v(" "),s("p",[s("strong",[t._v("『 经过验证，云开发的抗压能力杠杠的，完全没问题，点赞！！！』")])]),t._v(" "),s("p",[t._v("就这样，不依赖 RD，完美解决版本更新的问题，当然设计思路还有待改进，但云开发让我们没有了后顾之忧。而且我们还推进公司别的小程序采用我们这套方案，大家都认为不错。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("                                         『 总  结 』\n")])])]),s("p",[t._v("自从团队用了云开发，有三点印象非常深刻：")]),t._v(" "),s("p",[s("strong",[t._v("1、让前端不再依赖后端，大大提高人力资源利用率。")])]),t._v(" "),s("p",[s("strong",[t._v("2、控制台编辑数据库数据非常方便。")])]),t._v(" "),s("p",[t._v("**3、高可用高并发高性能。**转转二手交易网云函数调用次数日均千万级别、运行时间仅有 22.722ms。")])])}),[],!1,null,null,null);a.default=e.exports}}]);