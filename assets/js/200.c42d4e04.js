(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{428:function(t,a,p){"use strict";p.r(a);var n=p(10),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,p=t._self._c||a;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("p",[t._v("传送门：\n"),p("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/000ceae09288489c0e9886e6c59c13",target:"_blank",rel:"noopener noreferrer"}},[t._v("借助小程序云开发实现小程序支付功能"),p("OutboundLink")],1)]),t._v(" "),p("p",[t._v("先看效果图")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837241131_6c337r4dalj.png/0",alt:""}})]),t._v(" "),p("p",[t._v("我们实现这个支付功能完全是借助小程序云开发实现的，不用搭建自己的服务器，不用买域名，不用备案域名，不用支持https。只需要一个简单的云函数，就可以轻松的实现微信小程序支付功能。\n核心代码就下面这些：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837471927_3yh8t93wktm.png/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"一、创建一个云开发小程序"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#一、创建一个云开发小程序"}},[t._v("#")]),t._v(" 一、创建一个云开发小程序")]),t._v(" "),p("p",[t._v("关于如何创建云开发小程序，这里我就不再做具体讲解。不知道怎么创建云开发小程序的同学，可以去翻看腾讯云云开发公众号内菜单【技术交流-视频教程】中的教学视频。")]),t._v(" "),p("h4",{attrs:{id:"创建云开发小程序有几点注意的"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#创建云开发小程序有几点注意的"}},[t._v("#")]),t._v(" 创建云开发小程序有几点注意的")]),t._v(" "),p("p",[t._v("1.一定不要忘记在app.js里初始化云开发环境。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837371000_tgpyohxn2kh.png/0",alt:""}})]),t._v(" "),p("p",[t._v("2.创建完云函数后，一定要记得上传")]),t._v(" "),p("h1",{attrs:{id:"二、创建支付的云函数"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#二、创建支付的云函数"}},[t._v("#")]),t._v(" 二、创建支付的云函数")]),t._v(" "),p("p",[t._v("1.创建云函数pay")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837514995_xwrk0lq6jxp.png/0",alt:""}})]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837549213_suob76gwpqe.png/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"三、引入三方依赖tenpay"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#三、引入三方依赖tenpay"}},[t._v("#")]),t._v(" 三、引入三方依赖tenpay")]),t._v(" "),p("p",[t._v("我们这里引入三方依赖的目的，是创建我们支付时需要的一些参数。我们安装依赖是使用里npm 而npm必须安装node,关于如何安装node，我这里不做讲解，百度一下，网上一大堆。")]),t._v(" "),p("h4",{attrs:{id:"_1-首先右键pay，然后选择在终端中打开"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先右键pay，然后选择在终端中打开"}},[t._v("#")]),t._v(" 1.首先右键pay，然后选择在终端中打开")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837597850_v9soh10maw.png/0",alt:""}})]),t._v(" "),p("h4",{attrs:{id:"_2-我们使用npm来安装这个依赖。"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_2-我们使用npm来安装这个依赖。"}},[t._v("#")]),t._v(" 2.我们使用npm来安装这个依赖。")]),t._v(" "),p("p",[t._v("在命令行里执行  npm i tenpay")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837634003_fibvkbvhrkh.png/0",alt:""}})]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565838407431_frsvtt3nzii.png/0",alt:""}})]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837746715_9mifw2xbw8c.png/0",alt:""}})]),t._v(" "),p("p",[t._v("安装完成后，我们的pay云函数会多出一个package.json 文件")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837789232_48qnoxtzbnn.png/0",alt:""}})]),t._v(" "),p("p",[t._v("到这里我们的tenpay依赖就安装好了。")]),t._v(" "),p("h1",{attrs:{id:"四、编写云函数pay"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#四、编写云函数pay"}},[t._v("#")]),t._v(" 四、编写云函数pay")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837821318_o81vdagb1x.png/0",alt:""}})]),t._v(" "),p("p",[t._v("完整代码如下")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("//云开发实现支付\nconst cloud = require('wx-server-sdk')\ncloud.init()\n\n//1，引入支付的三方依赖\nconst tenpay = require('tenpay');\n//2，配置支付信息\nconst config = {\n  appid: '你的小程序appid', \n  mchid: '你的微信商户号',\n  partnerKey: '微信支付安全密钥', \n  notify_url: '支付回调网址,这里可以先随意填一个网址', \n  spbill_create_ip: '127.0.0.1' //这里填这个就可以\n};\n\nexports.main = async(event, context) => {\n  const wxContext = cloud.getWXContext()\n  let {\n    orderid,\n    money\n  } = event;\n  //3，初始化支付\n  const api = tenpay.init(config);\n\n  let result = await api.getPayParams({\n    out_trade_no: orderid,\n    body: '商品简单描述',\n    total_fee: money, //订单金额(分),\n    openid: wxContext.OPENID //付款用户的openid\n  });\n  return result;\n}\n")])])]),p("h3",{attrs:{id:"一定要注意把appid，mchid，partnerkey换成你自己的。"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#一定要注意把appid，mchid，partnerkey换成你自己的。"}},[t._v("#")]),t._v(" 一定要注意把appid，mchid，partnerKey换成你自己的。")]),t._v(" "),p("p",[t._v("到这里我们获取小程序支付所需参数的云函数代码就编写完成了。")]),t._v(" "),p("p",[t._v("不要忘记上传这个云函数。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837848866_z6ovap7yvp.png/0",alt:""}})]),t._v(" "),p("p",[t._v("出现下图就代表上传成功")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837952946_3998xg3u5wt.png/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"五、写一个简单的页面，用来提交订单，调用pay云函数。"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#五、写一个简单的页面，用来提交订单，调用pay云函数。"}},[t._v("#")]),t._v(" 五、写一个简单的页面，用来提交订单，调用pay云函数。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565837982811_0wdu3ca9udlg.png/0",alt:""}})]),t._v(" "),p("p",[t._v("这个页面很简单：")]),t._v(" "),p("p",[t._v("1.自己随便编写一个订单号（这个订单号要大于6位）")]),t._v(" "),p("p",[t._v("2.自己随便填写一个订单价（单位是分）")]),t._v(" "),p("p",[t._v("3.点击按钮，调用pay云函数。获取支付所需参数。")]),t._v(" "),p("p",[t._v("下图是官方支付api所需要的一些必须参数。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565838007448_a2cxy1thwkv.png/0",alt:""}})]),t._v(" "),p("p",[t._v("下图是我们调用pay云函数获取的参数，和上图所需要的是不是一样。")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565838049492_xakuvfj4hii.png/0",alt:""}})]),t._v(" "),p("h1",{attrs:{id:"六、调用wx-requestpayment实现支付"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#六、调用wx-requestpayment实现支付"}},[t._v("#")]),t._v(" 六、调用wx.requestPayment实现支付")]),t._v(" "),p("p",[t._v("下图是官方的示例代码：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565838099166_66h09n5vtau.png/0",alt:""}})]),t._v(" "),p("p",[t._v("这里不在做具体讲解了，把完整代码给大家贴出来")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v('// pages/pay/pay.js\nPage({\n  //提交订单\n  formSubmit: function(e) {\n    let that = this;\n    let formData = e.detail.value\n    console.log(\'form发生了submit事件，携带数据为：\', formData)\n    wx.cloud.callFunction({\n      name: "pay",\n      data: {\n        orderid: "" + formData.orderid,\n        money: formData.money\n      },\n      success(res) {\n        console.log("提交成功", res.result)\n        that.pay(res.result)\n      },\n      fail(res) {\n        console.log("提交失败", res)\n      }\n    })\n  },\n\n  //实现小程序支付\n  pay(payData) {\n    //官方标准的支付方法\n    wx.requestPayment({\n      timeStamp: payData.timeStamp,\n      nonceStr: payData.nonceStr,\n      package: payData.package, //统一下单接口返回的 prepay_id 格式如：prepay_id=***\n      signType: \'MD5\',\n      paySign: payData.paySign, //签名\n      success(res) {\n        console.log("支付成功", res)\n      },\n      fail(res) {\n        console.log("支付失败", res)\n      },\n      complete(res) {\n        console.log("支付完成", res)\n      }\n    })\n  }\n})\n')])])]),p("p",[t._v("到这里，云开发实现小程序支付的功能就完整实现了。")]),t._v(" "),p("h1",{attrs:{id:"实现效果"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#实现效果"}},[t._v("#")]),t._v(" 实现效果")]),t._v(" "),p("h3",{attrs:{id:"_1-调起支付键盘"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_1-调起支付键盘"}},[t._v("#")]),t._v(" 1.调起支付键盘")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565838151154_twz3oor68yn.png/0",alt:""}})]),t._v(" "),p("h3",{attrs:{id:"_2-支付完成"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_2-支付完成"}},[t._v("#")]),t._v(" 2.支付完成")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565838174464_oickwx554h.png/0",alt:""}})]),t._v(" "),p("h3",{attrs:{id:"_3-log日志，可以看出不同支付状态的回调"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_3-log日志，可以看出不同支付状态的回调"}},[t._v("#")]),t._v(" 3.log日志，可以看出不同支付状态的回调")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565838207202_rc1lkh5alej.png/0",alt:""}})]),t._v(" "),p("p",[t._v("上图是支付成功的回调，我们可以在支付成功回调时，改变订单支付状态。")]),t._v(" "),p("p",[t._v("下图是支付失败的回调：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565838240140_qob32hjrda.png/0",alt:""}})]),t._v(" "),p("p",[t._v("下图是支付完成的状态：")]),t._v(" "),p("p",[p("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190815_1565838286449_bxtsayes45k.png/0",alt:""}})]),t._v(" "),p("p",[t._v("到这里我们就轻松的实现了微信小程序的支付功能了，是不是很简单啊。")]),t._v(" "),p("h1",{attrs:{id:"源码地址："}},[p("a",{staticClass:"header-anchor",attrs:{href:"#源码地址："}},[t._v("#")]),t._v(" 源码地址：")]),t._v(" "),p("p",[p("a",{attrs:{href:"https://github.com/qiushi123/cloud-pay",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/qiushi123/cloud-pay"),p("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);