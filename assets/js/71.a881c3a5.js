(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{560:function(t,_,v){"use strict";v.r(_);var s=v(10),a=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("该功能需开发者工具 1.02.1811270 及以上版本方可使用。")])]),t._v(" "),v("p",[t._v("如果云函数需要定时/定期执行，即定时触发，您可以使用云函数定时触发器。已配置定时触发器的云函数，会在相应时间点被自动触发，函数的返回结果不会返回给调用方。")]),t._v(" "),v("p",[t._v("在需要添加触发器的云函数目录下新建文件 "),v("code",[t._v("config.json")]),t._v("，格式如下：")]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// triggers 字段是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"triggers"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name: 触发器的名字，规则见下方说明")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myTrigger"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type: 触发器类型，目前仅支持 timer （即定时触发器）")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timer"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见下方说明")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0 2 1 * * *"')]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("h3",{attrs:{id:"字段规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字段规则"}},[t._v("#")]),t._v(" 字段规则")]),t._v(" "),v("ul",[v("li",[t._v("定时触发器名称（name） ：最大支持 60 个字符，支持 "),v("code",[t._v("a-z")]),t._v(", "),v("code",[t._v("A-Z")]),t._v(", "),v("code",[t._v("0-9")]),t._v(", "),v("code",[t._v("-")]),t._v(" 和 "),v("code",[t._v("_")]),t._v("。必须以字母开头，且一个函数下不支持同名的多个定时触发器。")]),t._v(" "),v("li",[t._v("定时触发器触发周期 （config）：指定的函数触发时间。填写自定义标准的 Cron 表达式来决定何时触发函数。有关 Cron 表达式的更多信息，请参考以下内容。")])]),t._v(" "),v("h3",{attrs:{id:"cron-表达式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cron-表达式"}},[t._v("#")]),t._v(" Cron 表达式")]),t._v(" "),v("p",[t._v("Cron 表达式有七个必需字段，按空格分隔。其中，每个字段都有相应的取值范围：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("排序")]),t._v(" "),v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("值")]),t._v(" "),v("th",[t._v("通配符")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("第一位")]),t._v(" "),v("td",[t._v("秒")]),t._v(" "),v("td",[t._v("0 - 59 的整数")]),t._v(" "),v("td",[t._v(", - * /")])]),t._v(" "),v("tr",[v("td",[t._v("第二位")]),t._v(" "),v("td",[t._v("分钟")]),t._v(" "),v("td",[t._v("0 - 59 的整数")]),t._v(" "),v("td",[t._v(", - * /")])]),t._v(" "),v("tr",[v("td",[t._v("第三位")]),t._v(" "),v("td",[t._v("小时")]),t._v(" "),v("td",[t._v("0 - 23 的整数")]),t._v(" "),v("td",[t._v(", - * /")])]),t._v(" "),v("tr",[v("td",[t._v("第四位")]),t._v(" "),v("td",[t._v("日")]),t._v(" "),v("td",[t._v("1 - 31 的整数（需要考虑月的天数）")]),t._v(" "),v("td",[t._v(", - * /")])]),t._v(" "),v("tr",[v("td",[t._v("第五位")]),t._v(" "),v("td",[t._v("月")]),t._v(" "),v("td",[t._v("1 - 12 的整数或 JAN、FEB、MAR、APR、MAY、JUN、JUL、AUG、SEP、OCT、NOV 和 DEC")]),t._v(" "),v("td",[t._v(", - * /")])]),t._v(" "),v("tr",[v("td",[t._v("第六位")]),t._v(" "),v("td",[t._v("星期")]),t._v(" "),v("td",[t._v("0 - 6 的整数或 MON、TUE、WED、THU、FRI、SAT 和 SUN，其中 0 指星期一，1 指星期二，以此类推")]),t._v(" "),v("td",[t._v(", - * /")])]),t._v(" "),v("tr",[v("td",[t._v("第七位")]),t._v(" "),v("td",[t._v("年")]),t._v(" "),v("td",[t._v("1970 - 2099 的整数")]),t._v(" "),v("td",[t._v(", - * /")])])])]),t._v(" "),v("h3",{attrs:{id:"通配符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[t._v("#")]),t._v(" 通配符")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("通配符")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("，（逗号）")]),t._v(" "),v("td",[t._v("代表取用逗号隔开的字符的并集。例如：在“小时”字段中 1，2，3 表示 1 点、2 点和 3 点")])]),t._v(" "),v("tr",[v("td",[t._v("- （短横线）")]),t._v(" "),v("td",[t._v("包含指定范围的所有值。例如：在“日”字段中，1 - 15 包含指定月份的 1 号到 15 号")])]),t._v(" "),v("tr",[v("td",[t._v("* （星号）")]),t._v(" "),v("td",[t._v("表示所有值。在“小时”字段中，* 表示每个小时")])]),t._v(" "),v("tr",[v("td",[t._v("/ （正斜杠）")]),t._v(" "),v("td",[t._v("指定增量。在“分钟”字段中，输入 1/10 以指定从第一分钟开始的每隔十分钟重复。例如，第 11 分钟、第 21 分钟和第 31 分钟，以此类推")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("在 Cron 表达式中的“日”和“星期”字段同时指定值时，两者为“或”关系，即两者的条件均生效。")])]),t._v(" "),v("h3",{attrs:{id:"示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),v("p",[t._v("下面列举一些 Cron 表达式和相关含义：")]),t._v(" "),v("ul",[v("li",[t._v("_/5 _ * * * * * 表示每 5 秒触发一次")]),t._v(" "),v("li",[t._v("_0 0 2 1 _ * * 表示在每月的 1 日的凌晨 2 点触发")]),t._v(" "),v("li",[t._v("0 15 10 * _ MON-FRI _ 表示在周一到周五每天上午 10:15 触发")]),t._v(" "),v("li",[t._v("0 0 10,14,16 * * * * 表示在每天上午 10 点，下午 2 点，下午 4 点触发")]),t._v(" "),v("li",[t._v("0 _/30 9-17 _ * * * 表示在每天上午 9 点到下午 5 点内每半小时触发")]),t._v(" "),v("li",[t._v("0 0 12 * _ WED _ 表示在每个星期三中午 12 点触发")])])])}),[],!1,null,null,null);_.default=a.exports}}]);