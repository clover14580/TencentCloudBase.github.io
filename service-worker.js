/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019-08-01-share-http-api-transfer/index.html",
    "revision": "705db59ae402fae2361515aff7afd6a5"
  },
  {
    "url": "2019-08-02-share-excel-data/index.html",
    "revision": "74163750c151b0a5c5aa17d2a8ad0202"
  },
  {
    "url": "2019-08-03-share-bbc-news-summary/index.html",
    "revision": "348be56c29c5a579c899071e417adfc3"
  },
  {
    "url": "2019-08-04-share-mini-blog/index.html",
    "revision": "0e92e94b4e295d9481e765e88eaeadc1"
  },
  {
    "url": "2019-08-05-share-mini-microblog/index.html",
    "revision": "4118418ac71e57be7f708407589d2e17"
  },
  {
    "url": "2019-08-06-share-mini-forum/index.html",
    "revision": "2f10e82b95e8bad06e10a0932f7ff4fe"
  },
  {
    "url": "2019-08-07-share-secondhand-book-mall/index.html",
    "revision": "ed98091234517fdb20164a56443158bc"
  },
  {
    "url": "2019-08-08-share-weight-record/index.html",
    "revision": "a1bd78964d39dd2a2644a8c28cc892b0"
  },
  {
    "url": "2019-08-09-share-shared-business-card/index.html",
    "revision": "56e1a1eb9442ffa0877daa1147e279f1"
  },
  {
    "url": "2019-08-10-share-omi-cloud/index.html",
    "revision": "aea4a18b05203e3122811c3aef03d213"
  },
  {
    "url": "2019-08-11-share-today/index.html",
    "revision": "7f58e3e624907df21dd59685934c7138"
  },
  {
    "url": "2019-08-12-share-send-email/index.html",
    "revision": "a56739ac487fb33699268e2a0fe9ed0a"
  },
  {
    "url": "2019-08-13-share-multimedia/index.html",
    "revision": "964fa3c1f3a871c16b13e5fadef373bd"
  },
  {
    "url": "2019-08-14-share-diary/index.html",
    "revision": "ab0ad140d9473795ebb997a66fdada88"
  },
  {
    "url": "2019-08-15-share-ypw/index.html",
    "revision": "12b5ea16394805320a33ed23c9e87dd5"
  },
  {
    "url": "2019-08-16-share-pay/index.html",
    "revision": "8e771056acff0298378a66d0a43e2f40"
  },
  {
    "url": "2019-08-17-share-travelbook/index.html",
    "revision": "84da74dee81be41e7b1f0c0d8a533f2d"
  },
  {
    "url": "2019-08-18-share-yourei-jp/index.html",
    "revision": "b9dba10146669c6ac41a3b515a3d5e7f"
  },
  {
    "url": "2019-08-19-share-best-love/index.html",
    "revision": "b644448cc21b75167ed4f727b4e976d2"
  },
  {
    "url": "2019-08-20-share-doughnut/index.html",
    "revision": "a24c6d5d09484036f07e3efbeabe0764"
  },
  {
    "url": "2019-08-21-share-foodmap/index.html",
    "revision": "185208886477663835aa5283f15cc533"
  },
  {
    "url": "2019-08-22-share-ancient-poetry/index.html",
    "revision": "5fbcd6aa2d7894943daba6c6b2d605b5"
  },
  {
    "url": "2019-08-23-share-motion-circle/index.html",
    "revision": "3098d817ca36775e4e72980c2eb3c1de"
  },
  {
    "url": "2019-08-24-share-keep-in-mind-lite/index.html",
    "revision": "05da161138d7bb02e527782ab415b4b1"
  },
  {
    "url": "2019-08-25-share-check-points/index.html",
    "revision": "de5c87298b8d8e58df48e393c4758b2a"
  },
  {
    "url": "2019-09-03-access-function-by-http/index.html",
    "revision": "4b558e2c54bed24ad68f0fe0b3305503"
  },
  {
    "url": "2019-09-03-cli-api/index.html",
    "revision": "d36a410707c760f89b1ea6578006d3a6"
  },
  {
    "url": "2019-09-03-cli-changelog/index.html",
    "revision": "ba13e8b4df9a8b42f6e6689dddaac0f8"
  },
  {
    "url": "2019-09-03-cli-config/index.html",
    "revision": "738c96d045fd3d59b35370ca7008717a"
  },
  {
    "url": "2019-09-03-cli-env-domain/index.html",
    "revision": "b50b2b3a64813786c33d004250bed237"
  },
  {
    "url": "2019-09-03-cli-env-login/index.html",
    "revision": "46b66df7a30f31b48ffd93aa3d633c3b"
  },
  {
    "url": "2019-09-03-cli-env/index.html",
    "revision": "cf1c0d59271df4aa1fb16af50873ac6d"
  },
  {
    "url": "2019-09-03-cli-faq/index.html",
    "revision": "60f79abffbc73e44c1a4a83f4b796c07"
  },
  {
    "url": "2019-09-03-cli-function-code/index.html",
    "revision": "dfe7b2e8ec3aac8beb9152dd225ef393"
  },
  {
    "url": "2019-09-03-cli-function-config/index.html",
    "revision": "eb5b94cc4493b147091d4e754debf830"
  },
  {
    "url": "2019-09-03-cli-function-log/index.html",
    "revision": "ec0b96fbc4b28c4a183ac9b1ac681229"
  },
  {
    "url": "2019-09-03-cli-function-trigger/index.html",
    "revision": "39ba7426d30f2e4748ab53ee3f87774f"
  },
  {
    "url": "2019-09-03-cli-function/index.html",
    "revision": "ac3ce3bd65c0eb0368d7ff858f0b5cf3"
  },
  {
    "url": "2019-09-03-cli-storage/index.html",
    "revision": "ed003124766efb9dc1315f0b78c04fd5"
  },
  {
    "url": "2019-09-03-cli/index.html",
    "revision": "b312b777b9690c8e09696f6973ccfc5c"
  },
  {
    "url": "2019-09-03-clouddatabase-datatype/index.html",
    "revision": "16c8606051cf7e8c732d690b18463f7e"
  },
  {
    "url": "2019-09-03-clouddatabase-delete/index.html",
    "revision": "537fc05c01cd0e8db4bae9825b0ca170"
  },
  {
    "url": "2019-09-03-clouddatabase-import/index.html",
    "revision": "b75935b5478fcf7ba998f64f46c6fc70"
  },
  {
    "url": "2019-09-03-clouddatabase-index/index.html",
    "revision": "10b14060b41c8c2fcd8b485d90565ab1"
  },
  {
    "url": "2019-09-03-clouddatabase-initialize/index.html",
    "revision": "77fa57f8f5b8b9de955e7855d6a7be04"
  },
  {
    "url": "2019-09-03-clouddatabase-insert/index.html",
    "revision": "898c629b3a5c45ddc1f778c6c9f349e6"
  },
  {
    "url": "2019-09-03-clouddatabase-manage/index.html",
    "revision": "b0f58b30886cbecec164fa768e2b3ca4"
  },
  {
    "url": "2019-09-03-clouddatabase-read/index.html",
    "revision": "0e729c0e759d0db5560dc98d40a3689a"
  },
  {
    "url": "2019-09-03-clouddatabase-search/index.html",
    "revision": "4bdabf363b4fa95061353110a5b5b712"
  },
  {
    "url": "2019-09-03-clouddatabase-summary/index.html",
    "revision": "6422971026aa5203f37b54398d0e909e"
  },
  {
    "url": "2019-09-03-clouddatabase-update/index.html",
    "revision": "ffdf39b9917fccd379208e6578b767ce"
  },
  {
    "url": "2019-09-03-cloudfunction-asynchronous/index.html",
    "revision": "9127cb23ba40d13b2215195be846598c"
  },
  {
    "url": "2019-09-03-cloudfunction-attention/index.html",
    "revision": "119e4b478524c3702d2ffd12f740a9ec"
  },
  {
    "url": "2019-09-03-cloudfunction-call/index.html",
    "revision": "c0f530aec06b5a062cd9a659541571e8"
  },
  {
    "url": "2019-09-03-cloudfunction-create/index.html",
    "revision": "edcbfaab437a6962c852a3175cf5beb9"
  },
  {
    "url": "2019-09-03-cloudfunction-getuserinfo/index.html",
    "revision": "ecfaff0837bda17295ed6538ca9da710"
  },
  {
    "url": "2019-09-03-cloudfunction-manage/index.html",
    "revision": "337e6190eae7729bbc93daebadc5e6ed"
  },
  {
    "url": "2019-09-03-cloudfunction-mechanism/index.html",
    "revision": "b0b2fc578f15caefb907ba2262ce5244"
  },
  {
    "url": "2019-09-03-cloudfunction-npm/index.html",
    "revision": "ff1f1c6934624c2716d76d9b54503493"
  },
  {
    "url": "2019-09-03-cloudfunction-summary/index.html",
    "revision": "c64412bfa720c7c7ba7a2726010e03cf"
  },
  {
    "url": "2019-09-03-cloudfunction-test-log/index.html",
    "revision": "e2edb707ed8ca19754ef68546a688999"
  },
  {
    "url": "2019-09-03-cloudfunction-timingtrigger/index.html",
    "revision": "89d389d3b29890e26e03b7996717c138"
  },
  {
    "url": "2019-09-03-cloudinvoke-apilist/index.html",
    "revision": "52bd5dcbd550b144eaa8fecebf391a9e"
  },
  {
    "url": "2019-09-03-cloudinvoke-summary/index.html",
    "revision": "274a875f65b111715085678e1243980d"
  },
  {
    "url": "2019-09-03-cloudstorage-assembly/index.html",
    "revision": "cf51bd1e1862b1be4dce80129084b3ca"
  },
  {
    "url": "2019-09-03-cloudstorage-delete/index.html",
    "revision": "f6240e7f7f55069cd4af309f25270659"
  },
  {
    "url": "2019-09-03-cloudstorage-download/index.html",
    "revision": "576e5ba8ae7b8fca476f0a154c1d88c9"
  },
  {
    "url": "2019-09-03-cloudstorage-manage/index.html",
    "revision": "089872d0b51681df6e92a5489444f9be"
  },
  {
    "url": "2019-09-03-cloudstorage-summary/index.html",
    "revision": "91d5f83451202b62b61e66f114c6a7bf"
  },
  {
    "url": "2019-09-03-cloudstorage-templink/index.html",
    "revision": "112bfc2f6fe4184cc97128f42b61099c"
  },
  {
    "url": "2019-09-03-cloudstorage-upload/index.html",
    "revision": "99bfac92fc00d3904abc7699b36f18f4"
  },
  {
    "url": "2019-09-03-hosting-nodejs-server/index.html",
    "revision": "0beddca33cba6ee78f5d0e78e04878b0"
  },
  {
    "url": "2019-09-03-PHP-SDK-db/index.html",
    "revision": "bfa536b7783b6a1926ec61f77056fbc6"
  },
  {
    "url": "2019-09-03-PHP-SDK-init/index.html",
    "revision": "7bccc9aa8690f630ba4dde83f6fde6d7"
  },
  {
    "url": "2019-09-03-PHP-SDK-introduction/index.html",
    "revision": "5c6af64029bd61b1b54c8f954d2c0587"
  },
  {
    "url": "2019-09-03-PHP-SDK-scf-write-with-sdk/index.html",
    "revision": "ffda8be9ed3570f0ae400d3bdaf65fc1"
  },
  {
    "url": "2019-09-03-PHP-SDK-scf/index.html",
    "revision": "760ea8078b8e1217c8740e7b9df910de"
  },
  {
    "url": "2019-09-03-PHP-SDK-storage/index.html",
    "revision": "46e339b786449eb5232f29dd942e6a7c"
  },
  {
    "url": "2019-09-03-prod-desc-app/index.html",
    "revision": "b2dfc4d97767625e0f57180751c2fc39"
  },
  {
    "url": "2019-09-03-prod-desc-basic-miniprogram/index.html",
    "revision": "1dd807c20b77ddece5d41a8ec824e204"
  },
  {
    "url": "2019-09-03-prod-desc-basic-web/index.html",
    "revision": "c79a7247629cae6e7a5e6ef2cad0b8ca"
  },
  {
    "url": "2019-09-03-prod-desc-links/index.html",
    "revision": "c38f4fe49a432c864d0590a68ea9d5fb"
  },
  {
    "url": "2019-09-03-prod-desc-overview/index.html",
    "revision": "014208d5f26bff8b8075d52103cdfb32"
  },
  {
    "url": "2019-09-03-share-ai-card/index.html",
    "revision": "a1b6c7d671ef088436b56eafb617d2cf"
  },
  {
    "url": "2019-09-03-share-album/index.html",
    "revision": "2c9bbc998cb2a0d42d32c1e3dc6e7a30"
  },
  {
    "url": "2019-09-03-share-beauty-album/index.html",
    "revision": "8988a50f0f7db452dce7ae0f97df8b51"
  },
  {
    "url": "2019-09-03-share-cat-room/index.html",
    "revision": "c98cccd54bdeb79e28d37d7ffa241a96"
  },
  {
    "url": "2019-09-03-share-e-commerce-features-first/index.html",
    "revision": "942a6bb29af12a59c9e7b9d4faf63c10"
  },
  {
    "url": "2019-09-03-share-e-commerce-features-second/index.html",
    "revision": "df3c3570613f2d2ce4975bf7cc606091"
  },
  {
    "url": "2019-09-03-share-e-commerce-introduction/index.html",
    "revision": "d937440bb7c1d9783de2f24e9270752b"
  },
  {
    "url": "2019-09-03-share-e-commerce-marketing/index.html",
    "revision": "98861917cbee2c9e3105a5a5777ef2d7"
  },
  {
    "url": "2019-09-03-share-e-commerce-personal/index.html",
    "revision": "b1656eaf612cbeb1bd88be0bd298883e"
  },
  {
    "url": "2019-09-03-share-e-commerce-preview/index.html",
    "revision": "ba320a2a6bd5025cdd0706d980b6801f"
  },
  {
    "url": "2019-09-03-share-food-map/index.html",
    "revision": "f26806f1568afe21e29dab8f7b8ee631"
  },
  {
    "url": "2019-09-03-share-forum/index.html",
    "revision": "c844ebff7a0c22036c8c7bf910e3adbf"
  },
  {
    "url": "2019-09-03-share-from-front-to-all/index.html",
    "revision": "aec75f752716e67a2ea0a4fa63eb313d"
  },
  {
    "url": "2019-09-03-share-gomoku/index.html",
    "revision": "d03e8391e1fa8a290149f67a5d9924b3"
  },
  {
    "url": "2019-09-03-share-lexiang-garden/index.html",
    "revision": "a429e0ee1da00a07c60d81349bf95677"
  },
  {
    "url": "2019-09-03-share-maoyan/index.html",
    "revision": "0ee8fb77a670268427c83346cf934e42"
  },
  {
    "url": "2019-09-03-share-minigame-cloud-ad/index.html",
    "revision": "a7571fd8779e39d59ab527616aac21d1"
  },
  {
    "url": "2019-09-03-share-minigame-cloud-basic/index.html",
    "revision": "7561432b346cfe4f403bee2d89cbf90f"
  },
  {
    "url": "2019-09-03-share-minigame-cloud-introduction/index.html",
    "revision": "fab0c7d120609774ddfc28b8791657a7"
  },
  {
    "url": "2019-09-03-share-minigame-cloud-login-register/index.html",
    "revision": "6404c471b2e998aa01a289647d561708"
  },
  {
    "url": "2019-09-03-share-minigame-cloud-pay/index.html",
    "revision": "222eb823e9e1e3bc360ba0c81b77c4dc"
  },
  {
    "url": "2019-09-03-share-minigame-cloud-practice/index.html",
    "revision": "2d248c5a4121131e5cad22816ade89e0"
  },
  {
    "url": "2019-09-03-share-minigame-cloud-share/index.html",
    "revision": "ef03272a9245c67e2944262f78870f4f"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-advanced-bookcase/index.html",
    "revision": "dd4d786bd0e945e24402fd23d88394c5"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-advanced-music-player/index.html",
    "revision": "8c35ee2c6f1e7ec93cc77a062e23e920"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-advanced-wechat-pay/index.html",
    "revision": "ccf74fd39165295bd42fb7dae5892b59"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-api/index.html",
    "revision": "9d61492ce36cbaf19bd4937918d60f9c"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-concept/index.html",
    "revision": "ad349f9ef49653d7e2edee6f3a18ff33"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-cos-storage/index.html",
    "revision": "a5753b14857b21b571ce3bfb090fc36b"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-db-permission/index.html",
    "revision": "f6c9097cfd29cc3e962e72a14834fcb3"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-db/index.html",
    "revision": "bad137f6c838af1766f8033649d988e8"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-learn/index.html",
    "revision": "4b3a5cec73302e686eeebd7bc0286185"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-operation/index.html",
    "revision": "3686bd3c4e688807ea64936d3d982ca3"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-practice-todo/index.html",
    "revision": "d55fe27387f13e6211e38f0a04d80e59"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-scf-db/index.html",
    "revision": "34085d1da00b59fb6260982cbd848020"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-scf-features/index.html",
    "revision": "341ff45c5687f5b2616f22cbc8912478"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-basic-scf-timer/index.html",
    "revision": "4bffa328283550010bc6c606b289bb25"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-middle-cos/index.html",
    "revision": "673e5a9911124b956b97abc6c2a6f1cd"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-middle-db/index.html",
    "revision": "440025008486b02baed86bdcf6db17ef"
  },
  {
    "url": "2019-09-03-share-miniprogram-cloud-middle-scf/index.html",
    "revision": "7910d4a57490694b857a5c200f1d2349"
  },
  {
    "url": "2019-09-03-share-more-articles/index.html",
    "revision": "4662aede416793525e2bee179981ad13"
  },
  {
    "url": "2019-09-03-share-taro-shop/index.html",
    "revision": "6bbf1191f592679f8f1e59824d413f58"
  },
  {
    "url": "2019-09-03-share-tg-idea/index.html",
    "revision": "97631f322048ede9d6f8f594b49a9295"
  },
  {
    "url": "2019-09-03-share-tree-hole/index.html",
    "revision": "a9f8d60a3cc5d373106f1603be64bb1c"
  },
  {
    "url": "2019-09-03-share-wedding/index.html",
    "revision": "aed66aef90d80f691d034a0f18104592"
  },
  {
    "url": "2019-09-03-share-zhuanzhuan/index.html",
    "revision": "359abc07e3e4e2ff5dba2b7965fff554"
  },
  {
    "url": "2019-09-03-value-added-2minute-face-score/index.html",
    "revision": "b90883c30fd6a8586db25399e240e748"
  },
  {
    "url": "2019-09-03-value-added-ai-cutting/index.html",
    "revision": "24eb1e9128fb5019838b46660d03e4cc"
  },
  {
    "url": "2019-09-03-value-added-AI-face-detection-guidelines/index.html",
    "revision": "c2dae60acdbbfb4e03fd09eef2c87f72"
  },
  {
    "url": "2019-09-03-value-added-AI-face-detection-intro/index.html",
    "revision": "b0e794fc04a65bd9a228ca9f0b7c177b"
  },
  {
    "url": "2019-09-03-value-added-AI-face-detection-scenes/index.html",
    "revision": "c0c999c5b59ad0fc8c82607e62f25d69"
  },
  {
    "url": "2019-09-03-value-added-cloud-introduction/index.html",
    "revision": "d3bf96746af0eabb697e7b759ca19306"
  },
  {
    "url": "2019-09-03-value-added-cloud-payment-standard/index.html",
    "revision": "5efd5ebb21bbdde7451513d0aaf878e2"
  },
  {
    "url": "2019-09-03-value-added-face-protect/index.html",
    "revision": "2d2e26a67f306098999def22b86929cf"
  },
  {
    "url": "2019-09-03-value-added-quick-deploy/index.html",
    "revision": "b80108541a88302cf0f1797ff797a1c9"
  },
  {
    "url": "2019-09-03-web-dev-guide-console/index.html",
    "revision": "4495679580d8548f64d2edbfde1023c9"
  },
  {
    "url": "2019-09-03-web-dev-guide-develop/index.html",
    "revision": "cafb3161951e959ffe9e2cf2eacd0ddb"
  },
  {
    "url": "2019-09-03-web-dev-guide-register/index.html",
    "revision": "eef7249ccc46edb5d6ae2500a0a402e6"
  },
  {
    "url": "2019-09-03-web-dev-guide-service/index.html",
    "revision": "61d6959d6c684a52cd149749782c3cdd"
  },
  {
    "url": "2019-09-03-web-dev-guide-summary/index.html",
    "revision": "9b41b357d9096c3dc8e9444a2df7cc35"
  },
  {
    "url": "2019-09-03-wx-clouddatabase-export/index.html",
    "revision": "4ca49555e41dc7713c710c79cb5afbe4"
  },
  {
    "url": "2019-09-03-wx-dev-guide-console/index.html",
    "revision": "d3e0d8e613d8f59c1f2b03af0e543a24"
  },
  {
    "url": "2019-09-03-wx-dev-guide-develop/index.html",
    "revision": "effd9ee0cb342a054f9584dc7e9704b0"
  },
  {
    "url": "2019-09-03-wx-dev-guide-register/index.html",
    "revision": "73c7954646a078ad1b5ae0311a0e0f76"
  },
  {
    "url": "2019-09-03-wx-dev-guide-service/index.html",
    "revision": "c392f04c3b6d3717951684352fba1ebd"
  },
  {
    "url": "2019-09-03-wx-dev-guide-summary/index.html",
    "revision": "1a35f1e5565788cb32d387ece0f50951"
  },
  {
    "url": "2019-09-18-share-SCRM/index.html",
    "revision": "0817bdab9a122aed542f877be93008be"
  },
  {
    "url": "2019-09-26-share-avatar/index.html",
    "revision": "44bf69326d4de9511244fb2f2f379a8d"
  },
  {
    "url": "2019-09-28-MINIPROGRAM-SDK-introduction/index.html",
    "revision": "cbe729c851b32352f2bce15fad9336f0"
  },
  {
    "url": "2019-09-28-NODEJS-SDK-authentication/index.html",
    "revision": "2675a077df1545c5c87c7a2a5440a37b"
  },
  {
    "url": "2019-09-28-NODEJS-SDK-cloudfunction/index.html",
    "revision": "3f33a74fc64b935322d8baa76b7d6c96"
  },
  {
    "url": "2019-09-28-NODEJS-SDK-database/index.html",
    "revision": "c105f867cacfb7b5cef553c391aeb879"
  },
  {
    "url": "2019-09-28-NODEJS-SDK-introduction/index.html",
    "revision": "87c8a150400b2564a27bf8871cc139c6"
  },
  {
    "url": "2019-09-28-NODEJS-SDK-overview/index.html",
    "revision": "83c6144f0e27f888e8ced020f9e3206f"
  },
  {
    "url": "2019-09-28-NODEJS-SDK-storage/index.html",
    "revision": "3f08e46a09e190ee5280c08e5fbb22ff"
  },
  {
    "url": "2019-09-28-WEB-SDK-initialization/index.html",
    "revision": "9263e5cc8e876fc428489e370798d309"
  },
  {
    "url": "2019-09-28-WEB-SDK-overview/index.html",
    "revision": "dd77668c54d9079f84a98090fd192f7f"
  },
  {
    "url": "2019-10-10-sdk-summary/index.html",
    "revision": "6e16fb2da18e38609918bab6864f6020"
  },
  {
    "url": "2019-10-10-what-is-tcb/index.html",
    "revision": "819e7ee4a054a105221588de1947ad3d"
  },
  {
    "url": "2019-10-12-share-nanyuan-guide/index.html",
    "revision": "d7cfc489366bd7dcdeef226f0014604c"
  },
  {
    "url": "2019-10-16-base-feature/index.html",
    "revision": "8fd09459c0465560320d7d79ce54c9c3"
  },
  {
    "url": "2019-10-17-share-circle-of-friends/index.html",
    "revision": "744a3a6e362eef8f14a57e376148cbb0"
  },
  {
    "url": "2019-10-17-share-interactive-punch-card/index.html",
    "revision": "2b945a9c2419d9cfe40b7a5176b6c4fe"
  },
  {
    "url": "2019-10-28-opensource-guidelines/index.html",
    "revision": "1011c3f340cff9210da275511d38075d"
  },
  {
    "url": "2019-11-12-taskcoding-guidelines/index.html",
    "revision": "3612bd9d870a9cd8d49e966c1bc1b24d"
  },
  {
    "url": "2019-11-21-share-customer-demand-collection/index.html",
    "revision": "8eef319d1d514d82eae63f1fda8e9132"
  },
  {
    "url": "2020-01-09-storage-secure-resource/index.html",
    "revision": "739b386bd834d6ca82ad6e1fdd74df7b"
  },
  {
    "url": "2020-01-09-storage-security-rules-started/index.html",
    "revision": "407c93043e44550dfb64778b89ee6331"
  },
  {
    "url": "2020-01-09-storage-security-rules/index.html",
    "revision": "9a7e0fdec352997ede746c5f2c787e41"
  },
  {
    "url": "2020-01-09-storage-user-secure/index.html",
    "revision": "036220e39483f3c5df17abba5c370e4b"
  },
  {
    "url": "2020-02-14-init/index.html",
    "revision": "93d40c5a20a1ffb9ba2ca8f8e435e984"
  },
  {
    "url": "2020-02-14-prepare/index.html",
    "revision": "a63a84c5a468cb351baf4305e4ae496f"
  },
  {
    "url": "2020-02-14-WebDemo-files/index.html",
    "revision": "a3e689abe7fadf8dcd97f081123fde46"
  },
  {
    "url": "2020-02-26-webide/index.html",
    "revision": "d259e9b1805d5a334a4b9012d387cb48"
  },
  {
    "url": "2020-03-19-edu-support/index.html",
    "revision": "7a2d1d987e53f15da285bd23ced656be"
  },
  {
    "url": "2020-03-20-edu-support-component/index.html",
    "revision": "5e7bcd27426834458b96e1a2e6c6b441"
  },
  {
    "url": "2020-03-20-edu-support-ebook/index.html",
    "revision": "b9f19d471792eb4fd3eeda746a256e2d"
  },
  {
    "url": "2020-03-20-edu-support-guide/index.html",
    "revision": "957891dd6070f82144556097756ae2bc"
  },
  {
    "url": "2020-03-20-edu-support-tikcet/index.html",
    "revision": "891102e85ff95a8b5d30a24982b7dd22"
  },
  {
    "url": "2020-03-20-edu-support-video/index.html",
    "revision": "360034d1602fad0d7cc5312f4658aa6f"
  },
  {
    "url": "2020-03-23-diy-camp/index.html",
    "revision": "ee7b7b45e187e5622659c5b6b4aaae7e"
  },
  {
    "url": "2020-03-23-preacher/index.html",
    "revision": "764c45b649479d661659813dceb5d967"
  },
  {
    "url": "2020-03-23-zero-training-camp/index.html",
    "revision": "b9dbea5049c6673c540e7cb82efce51e"
  },
  {
    "url": "2020-03-24-q-and-a/index.html",
    "revision": "b9ac1fd2529deea208952daa8ca19e8d"
  },
  {
    "url": "2020-03-24-third-docs/index.html",
    "revision": "168a5430b8ba741f037f97c7aef68029"
  },
  {
    "url": "2020-04-07-preacher-cfp/index.html",
    "revision": "5fe975d9316dd4a8d7a60949e78ff771"
  },
  {
    "url": "2020-04-07-preacher/index.html",
    "revision": "ac3ebc298a223086d6b7fd8480dae2be"
  },
  {
    "url": "404.html",
    "revision": "ef00655d8c57fc7c1e12abd2b671a480"
  },
  {
    "url": "about/index.html",
    "revision": "fc83d31cc898ff61fe82e4f27765127e"
  },
  {
    "url": "activities/index.html",
    "revision": "c8a474cd18e1a4a3e4d9da969d026b68"
  },
  {
    "url": "activities/wcc/index.html",
    "revision": "67d5fc5ddd51c287a59b90820773d990"
  },
  {
    "url": "assets/css/0.styles.c9918053.css",
    "revision": "4d05ab83e18f817bd7dedfcde0e69b1d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7835a66c.js",
    "revision": "f60bc059157216ecca9a9d73900f7a38"
  },
  {
    "url": "assets/js/100.c25c8c34.js",
    "revision": "8249395d3006e9af3ef51d1417ef9a6e"
  },
  {
    "url": "assets/js/101.8f7915bb.js",
    "revision": "6388f4ffa4405366120d6c05e337cf7e"
  },
  {
    "url": "assets/js/102.a8f273d4.js",
    "revision": "008df3e1c3524defb1d0b5eb559c6432"
  },
  {
    "url": "assets/js/103.324cc2de.js",
    "revision": "bb0938734d7eaca98580b274651afc05"
  },
  {
    "url": "assets/js/104.8a073b13.js",
    "revision": "fbb873e0c1f8b41692443a8c8343170c"
  },
  {
    "url": "assets/js/105.72ca4dce.js",
    "revision": "626b7a45ef13b7ea1e04981e113fc0b1"
  },
  {
    "url": "assets/js/106.457d1d57.js",
    "revision": "ab3dc2e1c1b191a4da4c7b4b13aa36cd"
  },
  {
    "url": "assets/js/107.c66421a8.js",
    "revision": "d534cda713fa0b4e564c147dce6b1f43"
  },
  {
    "url": "assets/js/108.cf4c67c3.js",
    "revision": "db8492d3ce6918e5de293931db9affb5"
  },
  {
    "url": "assets/js/109.4f1a9aa4.js",
    "revision": "4bc9513959a1a9ad56189743baeaeb18"
  },
  {
    "url": "assets/js/11.26a5775e.js",
    "revision": "f97134c0a50416aece12182cf8d72d5f"
  },
  {
    "url": "assets/js/110.676bd8e6.js",
    "revision": "473fe9d94aeb164aaf8d86be2255821b"
  },
  {
    "url": "assets/js/111.5ab0231d.js",
    "revision": "c5679396ecec0b7ececd7ccaa0f6d3bb"
  },
  {
    "url": "assets/js/112.80e02474.js",
    "revision": "3cb1cd451caa4fe357556cac77a94e4f"
  },
  {
    "url": "assets/js/113.b1df0a58.js",
    "revision": "807e5f4f4821e9343f226b94b94684e0"
  },
  {
    "url": "assets/js/114.2206a321.js",
    "revision": "ddf04f23fc5d22783d05ab35761a015b"
  },
  {
    "url": "assets/js/115.880dbc82.js",
    "revision": "6821ea9cffe83e75921a10f2ef4dc5db"
  },
  {
    "url": "assets/js/116.09d16701.js",
    "revision": "fd24d8c365e60b0c8ebf8df71d2ecb70"
  },
  {
    "url": "assets/js/117.fce822ab.js",
    "revision": "ee344bce8d79adf761b6211b593d4f07"
  },
  {
    "url": "assets/js/118.e5bb95b1.js",
    "revision": "b4540686e1e076d7403826dfbf7d9959"
  },
  {
    "url": "assets/js/119.dd260974.js",
    "revision": "7107b177993a3988169dee0670116197"
  },
  {
    "url": "assets/js/12.e7d9cd53.js",
    "revision": "bb377b586e67a327470c4f299a11a353"
  },
  {
    "url": "assets/js/120.6b905814.js",
    "revision": "ed1d3d89c0ab3fa03bdd74058d04a459"
  },
  {
    "url": "assets/js/121.1450c04f.js",
    "revision": "a2953d1426ca02e6fcf7a65bcbd63222"
  },
  {
    "url": "assets/js/122.47404103.js",
    "revision": "3ee8aae983d4ec250c07e64e8eec18b6"
  },
  {
    "url": "assets/js/123.c3bdf3d0.js",
    "revision": "ddab13a16c813b8e629fd72fde81574a"
  },
  {
    "url": "assets/js/124.a42e1284.js",
    "revision": "533a14d39ffdb3e930c2afb54dd82bc3"
  },
  {
    "url": "assets/js/125.cc4f1a01.js",
    "revision": "447ab0273ee2a09874ad26a9bc2de21a"
  },
  {
    "url": "assets/js/126.7140e48b.js",
    "revision": "44ddf78cbb7c58c52bdc5827eb1f882b"
  },
  {
    "url": "assets/js/127.94fee69f.js",
    "revision": "7dc764e44fe7119c40caa8d99afdbd78"
  },
  {
    "url": "assets/js/128.bf63660e.js",
    "revision": "a74209c22b7210a1821fe9ca1ce19aeb"
  },
  {
    "url": "assets/js/129.b162f141.js",
    "revision": "74ac353548f9363ec4c8eef26e32fdea"
  },
  {
    "url": "assets/js/13.a9e1e099.js",
    "revision": "c5cc6d3e37606e1e7e753a4c63b3eee2"
  },
  {
    "url": "assets/js/130.f0543b4d.js",
    "revision": "039d4addbc1a5cae98f04f6f3a9cd22a"
  },
  {
    "url": "assets/js/131.adc91cdc.js",
    "revision": "8fcc5f8406eb39b4b2d98e74cf792482"
  },
  {
    "url": "assets/js/132.11644c20.js",
    "revision": "f7472c740fb1cc81ad777aded4b3000c"
  },
  {
    "url": "assets/js/133.21eb4899.js",
    "revision": "6cedb1f1409be532d24505a06fd6884b"
  },
  {
    "url": "assets/js/134.041dfed6.js",
    "revision": "3f44023a412966b87ddceee266744dc6"
  },
  {
    "url": "assets/js/135.be2cab87.js",
    "revision": "07862af0ad7c8ecb973c4860a4c8426b"
  },
  {
    "url": "assets/js/136.603372b0.js",
    "revision": "374b5b89da3ece91cfa653592f3bd6b0"
  },
  {
    "url": "assets/js/137.d215b3aa.js",
    "revision": "e0a7729ad1277f3ab421ec0efe2a6737"
  },
  {
    "url": "assets/js/138.223cd26e.js",
    "revision": "dbe5939cd9575b19eabf5d2edde50819"
  },
  {
    "url": "assets/js/139.3d1a61d2.js",
    "revision": "00634ade6f2bfe1ed55b90a27a438d8c"
  },
  {
    "url": "assets/js/14.00819d3d.js",
    "revision": "1e91d6de192a8e711c21d540f2f18fb3"
  },
  {
    "url": "assets/js/140.b2c292c6.js",
    "revision": "08e5fabf4f8df7120e0e1ecd643223b0"
  },
  {
    "url": "assets/js/141.9c9c28e5.js",
    "revision": "ee6e36bae1513fbf594c719a7090ada9"
  },
  {
    "url": "assets/js/142.aa24da5f.js",
    "revision": "f70b830d17220c7f61f324dc953857b1"
  },
  {
    "url": "assets/js/143.aa7ab106.js",
    "revision": "55dab3c6324bf3088e10ea04780288c6"
  },
  {
    "url": "assets/js/144.59d2f7a7.js",
    "revision": "8419a7f8801d049aa80e17ce40e9842b"
  },
  {
    "url": "assets/js/145.00bc3c89.js",
    "revision": "a655f885fbc9dca946e96ba48bcfb60f"
  },
  {
    "url": "assets/js/146.870e043f.js",
    "revision": "a54132360752598a37bb0fd15dee9a83"
  },
  {
    "url": "assets/js/147.bba2ae71.js",
    "revision": "e670c7a0bdfbea3a8a2bb7dcd606bc2d"
  },
  {
    "url": "assets/js/148.96cb8daa.js",
    "revision": "0c2c75321fbf9137179ee775d722998f"
  },
  {
    "url": "assets/js/149.f7075132.js",
    "revision": "6b95b741767ab74e38db67b47b875f60"
  },
  {
    "url": "assets/js/15.6dccd018.js",
    "revision": "74b6215132af5da9b06299a981ff387f"
  },
  {
    "url": "assets/js/150.a84fd4f8.js",
    "revision": "b472eed5f3b69cf1c13bec0f52054d14"
  },
  {
    "url": "assets/js/151.50818b4a.js",
    "revision": "1c4850fde764495c1ef23c547453a14f"
  },
  {
    "url": "assets/js/152.ea873b64.js",
    "revision": "f844900817391ac291f72008e3d9c816"
  },
  {
    "url": "assets/js/153.a874580c.js",
    "revision": "815c08a4a9ecb3612f9a8bbe5f2a7b6e"
  },
  {
    "url": "assets/js/154.c2d1c90a.js",
    "revision": "deb355b2671b058256bde26016b7d028"
  },
  {
    "url": "assets/js/155.e3b2aaca.js",
    "revision": "ca424f48d71056ed4aa6db8507d84e8f"
  },
  {
    "url": "assets/js/156.46722f7a.js",
    "revision": "e41b2fca15fbf28cc00d582078219106"
  },
  {
    "url": "assets/js/157.1dee356b.js",
    "revision": "28dedd298782677ca22b260e53799854"
  },
  {
    "url": "assets/js/158.0d60d19a.js",
    "revision": "2395f4a182c5f385f441eba5526431b7"
  },
  {
    "url": "assets/js/159.52f63f30.js",
    "revision": "7e7fbd5dba18c722c3296a24afcaa08c"
  },
  {
    "url": "assets/js/16.593db609.js",
    "revision": "a54b9c53b7448b11c2d000eea41a171f"
  },
  {
    "url": "assets/js/160.075fddb5.js",
    "revision": "bb8f432de4f7838e7680e918016e60ca"
  },
  {
    "url": "assets/js/161.2f602001.js",
    "revision": "203ab32edb856bee9a0a79b7330609fd"
  },
  {
    "url": "assets/js/162.d15dc70a.js",
    "revision": "a28724037261cec18e0b9315e468994a"
  },
  {
    "url": "assets/js/163.3e1a23ea.js",
    "revision": "cf9dd0d058df19da0bb326513e71d51c"
  },
  {
    "url": "assets/js/164.1c5bc3f4.js",
    "revision": "6f70361ccbe1b4176a2d9f97597af01a"
  },
  {
    "url": "assets/js/165.b431792e.js",
    "revision": "067a3517611baf153b43bba95cb2e1b4"
  },
  {
    "url": "assets/js/166.5d58f178.js",
    "revision": "c7c8174bf72f50b4daabc90fff9b72d0"
  },
  {
    "url": "assets/js/167.01de76bc.js",
    "revision": "9a20170807c17504306a9d108f07e684"
  },
  {
    "url": "assets/js/168.ff7cc2a1.js",
    "revision": "96e46c43060006708697e8ed9b8385a8"
  },
  {
    "url": "assets/js/169.b667e25d.js",
    "revision": "68c60add890e94a94b1a6ac125a7e570"
  },
  {
    "url": "assets/js/17.22d99d1f.js",
    "revision": "76f88551590b205d9c8643270f1ba2f7"
  },
  {
    "url": "assets/js/170.3918d613.js",
    "revision": "5073ec0dc8dddd2943add8f89f0f2ad2"
  },
  {
    "url": "assets/js/171.b8856e59.js",
    "revision": "3fe272647ab9a7b8f2bb4687240bf6a7"
  },
  {
    "url": "assets/js/172.06cff577.js",
    "revision": "08386cc50f4cfe37c492aa309d517096"
  },
  {
    "url": "assets/js/173.a5990a8b.js",
    "revision": "16d299494df0662a9e1a744c3d504489"
  },
  {
    "url": "assets/js/174.4715c481.js",
    "revision": "7afeb6fb3a522787316300456db573ae"
  },
  {
    "url": "assets/js/175.5fb77435.js",
    "revision": "709c53de029b298f4c2c557330713fbd"
  },
  {
    "url": "assets/js/176.c61a3f40.js",
    "revision": "74da07bee74c4f0e8467567e7d3ff825"
  },
  {
    "url": "assets/js/177.b2e5b363.js",
    "revision": "e8851f90418c734180c5f8f806020e84"
  },
  {
    "url": "assets/js/178.c924522e.js",
    "revision": "c71de93d0fd7edeaaa30ec94ce7abc74"
  },
  {
    "url": "assets/js/179.147ac77c.js",
    "revision": "62725f91153ba3b8412509cefd485593"
  },
  {
    "url": "assets/js/18.a6834717.js",
    "revision": "0c3bfe7b1f987be3e3991ef9bb8f2885"
  },
  {
    "url": "assets/js/180.1a6adc64.js",
    "revision": "827579c7346014edf25a060f7d07b6a6"
  },
  {
    "url": "assets/js/181.62e246cb.js",
    "revision": "29c4d3b1bdf249726cac762438973056"
  },
  {
    "url": "assets/js/182.92564a35.js",
    "revision": "52c08a45d76f9b7e8fefedd0de1333b4"
  },
  {
    "url": "assets/js/183.c23dfa2c.js",
    "revision": "b3442d1f9aadf15bd25ba6fee55ed6e6"
  },
  {
    "url": "assets/js/184.77017f2f.js",
    "revision": "574f1a1b4191ffc09cf84068667a9dee"
  },
  {
    "url": "assets/js/185.85dff076.js",
    "revision": "a89f8c37787930221e0a2fb45ed3a953"
  },
  {
    "url": "assets/js/186.35bcae4b.js",
    "revision": "184af48361c7a1e628ec4edb1cab8285"
  },
  {
    "url": "assets/js/187.cf7f539b.js",
    "revision": "ba413f7599a1625dc4a5cdb7fe272fcd"
  },
  {
    "url": "assets/js/188.2accadf2.js",
    "revision": "7b8bc2199ca62839c57cbca7a2a4719a"
  },
  {
    "url": "assets/js/189.0a944970.js",
    "revision": "17012f042eb53e9bd342166371bd6862"
  },
  {
    "url": "assets/js/19.dced53ee.js",
    "revision": "f98fec2d7d6369302c10e308e8e34e9b"
  },
  {
    "url": "assets/js/190.51f24fd3.js",
    "revision": "71af641f175d0171a811ca49ded26f8c"
  },
  {
    "url": "assets/js/191.89964f32.js",
    "revision": "dd181daf76d45d0a2bd83d9514f7b385"
  },
  {
    "url": "assets/js/192.6283545d.js",
    "revision": "5fb1e98cc8f41d3e4d2cfe6676064e79"
  },
  {
    "url": "assets/js/193.c4c82e72.js",
    "revision": "fa312cd21511885319ba81f013570f2c"
  },
  {
    "url": "assets/js/194.29038c9b.js",
    "revision": "05131360ca24d4df71fed7d45cb44ed8"
  },
  {
    "url": "assets/js/195.8586ec6d.js",
    "revision": "bd41d48a707f9f044481b746db26e9a2"
  },
  {
    "url": "assets/js/196.d75797e1.js",
    "revision": "f84c887c66405a418e46922eed2cf100"
  },
  {
    "url": "assets/js/197.14587c1b.js",
    "revision": "fdbb0dd0a3f99ba8d7cf45959e8c4e60"
  },
  {
    "url": "assets/js/198.9160c552.js",
    "revision": "432eb6dc327570f617966c85b5efd471"
  },
  {
    "url": "assets/js/199.6457eb34.js",
    "revision": "b5093e79f90c9c47710b1e0ff31323d1"
  },
  {
    "url": "assets/js/2.633ad409.js",
    "revision": "7f216d5e8f1322d53251ff74e08b7aed"
  },
  {
    "url": "assets/js/20.67a23c24.js",
    "revision": "db681f83c1fce2c18e8c5d951e64878b"
  },
  {
    "url": "assets/js/200.c42d4e04.js",
    "revision": "69f54e72aa22fd0e2b5afe2a9e22f06b"
  },
  {
    "url": "assets/js/201.82b59132.js",
    "revision": "91e53552dd4928dd9d0a3e9e58bae3cc"
  },
  {
    "url": "assets/js/202.df6a631d.js",
    "revision": "b0139e530e99ec6dd3b7ac4a27123c0d"
  },
  {
    "url": "assets/js/203.04ddcc2c.js",
    "revision": "3af62877006fc07538157e340d7d3b9f"
  },
  {
    "url": "assets/js/204.47162888.js",
    "revision": "040469aa371ed06db627d78439f17bf1"
  },
  {
    "url": "assets/js/205.fb91cb3b.js",
    "revision": "0b3db8be9cf084b62ebc48f430b3d652"
  },
  {
    "url": "assets/js/206.6d4c993a.js",
    "revision": "063230efad6dfe32a1fdf5222859c8c8"
  },
  {
    "url": "assets/js/207.ad7a23d6.js",
    "revision": "9c7f4438a0a41e2e82ee7c4aecf339ce"
  },
  {
    "url": "assets/js/208.f3a2aa30.js",
    "revision": "f99886f8c4651f882a4813a86e707710"
  },
  {
    "url": "assets/js/209.225ce8c0.js",
    "revision": "0b509e6aa3b0aed32ed547c0c6dfae3a"
  },
  {
    "url": "assets/js/21.b762c8ca.js",
    "revision": "7f770acbe1ee3e0493601b4a6d26cc7b"
  },
  {
    "url": "assets/js/210.b2c90df1.js",
    "revision": "b9b5c2da246b0ffffa5aa6de0122d203"
  },
  {
    "url": "assets/js/211.fd2936c5.js",
    "revision": "29f96e5ac25d3819509d3adf362b69fc"
  },
  {
    "url": "assets/js/212.fc1418cd.js",
    "revision": "afd75d9b3c504b7bd9f1f04b0a0b5356"
  },
  {
    "url": "assets/js/213.44ebc89b.js",
    "revision": "dad9b3dcb6d448280b1877cb73d25d3b"
  },
  {
    "url": "assets/js/214.09e10719.js",
    "revision": "d6ae4cc6abc2980c4d65169bc0191483"
  },
  {
    "url": "assets/js/215.f202d12b.js",
    "revision": "b3c5af7ab0ed29329facac39d8c550ce"
  },
  {
    "url": "assets/js/216.55848856.js",
    "revision": "c17685c150a822bd3fb895e991e54f8d"
  },
  {
    "url": "assets/js/217.cc6a38e8.js",
    "revision": "1ae104d96fa209f6de08b2d6e0192552"
  },
  {
    "url": "assets/js/218.15c77201.js",
    "revision": "8aa868aba7a84aba7dcd73eaa56e5160"
  },
  {
    "url": "assets/js/219.312d78e5.js",
    "revision": "dac0e00fbd6851d442deab7468dc99a4"
  },
  {
    "url": "assets/js/22.edc2e3b7.js",
    "revision": "eae556629131a1a1eca37e637dca4fc9"
  },
  {
    "url": "assets/js/220.0d6b55ac.js",
    "revision": "e790db90bb0fce8dd14f22f2a314826a"
  },
  {
    "url": "assets/js/221.0a5b84e5.js",
    "revision": "1ad04b08d2aef6aa7ea09862b929fe4f"
  },
  {
    "url": "assets/js/222.84f631bd.js",
    "revision": "3d1cb107aa9bfadcbf5aea83e621dc3a"
  },
  {
    "url": "assets/js/223.407eb3e8.js",
    "revision": "452eba0a0b57bb08effeb841bcd7866c"
  },
  {
    "url": "assets/js/224.27169763.js",
    "revision": "66f7d668883c4a69b04a3c1a19d669bc"
  },
  {
    "url": "assets/js/225.ab9d71f3.js",
    "revision": "54d84bc5bbc40bee5dcb140902bc85cd"
  },
  {
    "url": "assets/js/226.4df23489.js",
    "revision": "976ce4f6c9aafcfb49adff49e081b66c"
  },
  {
    "url": "assets/js/227.3a1b1442.js",
    "revision": "a7f2ee88522254f8d6a7825c137bcd4b"
  },
  {
    "url": "assets/js/228.b703667e.js",
    "revision": "5e6e9a279261b102cc2c5713652a8a60"
  },
  {
    "url": "assets/js/229.6678328a.js",
    "revision": "2b1a33559e0d058082fbfff809e44f92"
  },
  {
    "url": "assets/js/23.f55d76a9.js",
    "revision": "d4bf9bcc05801f76fbc4f607a3d75dcd"
  },
  {
    "url": "assets/js/230.4ac01687.js",
    "revision": "ee6622a918bdf0c1328412c40d25c650"
  },
  {
    "url": "assets/js/231.334cb74a.js",
    "revision": "384793cb71c07383b433604d6c4e15a9"
  },
  {
    "url": "assets/js/232.c75d6546.js",
    "revision": "f1861b12035bd87aa45decc9e38dbf50"
  },
  {
    "url": "assets/js/233.5636030f.js",
    "revision": "d6ff1436080679704c7c18d0443b3aa3"
  },
  {
    "url": "assets/js/234.63d3dcc1.js",
    "revision": "75d98db251c5f8dfa3ca095746695064"
  },
  {
    "url": "assets/js/235.a5099ec5.js",
    "revision": "75a2cc8155d388d912658532f3133693"
  },
  {
    "url": "assets/js/24.fb2ce093.js",
    "revision": "1440351cee60d8694f8b1cf6638b02ee"
  },
  {
    "url": "assets/js/25.1308efe0.js",
    "revision": "46d0c97e24dac3aa60d6fff1807aff1d"
  },
  {
    "url": "assets/js/26.46c35484.js",
    "revision": "b19a8d8d256c2bcbd7bb2cfc9c1c524f"
  },
  {
    "url": "assets/js/27.2fa23e2f.js",
    "revision": "a74529291b73a479ac57fb7ebfcf0fb5"
  },
  {
    "url": "assets/js/28.2c3e2691.js",
    "revision": "948c7a4d68f69c1b8b1b25fc53ff3659"
  },
  {
    "url": "assets/js/29.72850142.js",
    "revision": "72e925f52c47c9b5a2c50ab74207abe6"
  },
  {
    "url": "assets/js/3.c53e7137.js",
    "revision": "bb7f860c90dcc5d71f1d1c4091e43a1b"
  },
  {
    "url": "assets/js/30.a3711c43.js",
    "revision": "d5d3749604f570a9701fb3c362d37f04"
  },
  {
    "url": "assets/js/31.72f075c0.js",
    "revision": "eea16b169800f16d226f633a6fdd87ce"
  },
  {
    "url": "assets/js/32.492fb8b7.js",
    "revision": "5bf63da43ed8540ca8324d39ca22ab14"
  },
  {
    "url": "assets/js/33.e5160512.js",
    "revision": "9d2ee817f20dd5fb39071ddb4125d9e1"
  },
  {
    "url": "assets/js/34.97b40320.js",
    "revision": "02abb7e4c3c07fca00c7fe7dd7e76cc3"
  },
  {
    "url": "assets/js/35.bcc0fc81.js",
    "revision": "d34b48c49d25e860ee56d8d86e743486"
  },
  {
    "url": "assets/js/36.6abe06dd.js",
    "revision": "e3d8ad9654897010420ae68f80309463"
  },
  {
    "url": "assets/js/37.ae44b05e.js",
    "revision": "e560db192f38c1ccb4ce8aded3ac3a81"
  },
  {
    "url": "assets/js/38.e963088a.js",
    "revision": "9e252680b5b8d06423a8c9841052e5bc"
  },
  {
    "url": "assets/js/39.d4dba94f.js",
    "revision": "548475c58f1d41c9a73c4e9a83781db6"
  },
  {
    "url": "assets/js/4.1f58cf85.js",
    "revision": "19db864e8c4601bff6d53f8f55356b76"
  },
  {
    "url": "assets/js/40.1ff42f42.js",
    "revision": "7612616e4fe49386e8cbf0019c139b2d"
  },
  {
    "url": "assets/js/41.8edd6b16.js",
    "revision": "87c2ee85c9c7a6502a061562b48dcb41"
  },
  {
    "url": "assets/js/42.f56c90c2.js",
    "revision": "f721ab21a26c2106f49567b9131ce213"
  },
  {
    "url": "assets/js/43.9e7cf8bf.js",
    "revision": "2e71ad6f09d93aecba0aaf49d989c969"
  },
  {
    "url": "assets/js/44.fc5bab21.js",
    "revision": "8fdc93d5774e737bebb3bb3253fe6de5"
  },
  {
    "url": "assets/js/45.34ee6430.js",
    "revision": "25b94dae9f0f0ae0b5af9763112b7896"
  },
  {
    "url": "assets/js/46.be509df6.js",
    "revision": "a1a2a124cc6a05f3b042e19fa67c0373"
  },
  {
    "url": "assets/js/47.dfb5b86c.js",
    "revision": "475142b1c91063076513da3f7afa2728"
  },
  {
    "url": "assets/js/48.a3d7ddf1.js",
    "revision": "f94e46683fa6bfe9c3c2f108533c9161"
  },
  {
    "url": "assets/js/49.31ea3c0b.js",
    "revision": "fcbb4fd84a31dad4f4bac3af2955b08b"
  },
  {
    "url": "assets/js/5.fbbd7676.js",
    "revision": "381d3d7cae93fbf46dc836176f7f1ca6"
  },
  {
    "url": "assets/js/50.7b923139.js",
    "revision": "37ac40eee8ec39bfcf1e34609c040b8a"
  },
  {
    "url": "assets/js/51.876075bb.js",
    "revision": "11700dea5424637b77cd5185210e9c24"
  },
  {
    "url": "assets/js/52.83a1ff06.js",
    "revision": "17faf58be160ab80298ce37582887889"
  },
  {
    "url": "assets/js/53.c97e1e82.js",
    "revision": "7c4a2ce4abd131411ba2ebef9fc37d6d"
  },
  {
    "url": "assets/js/54.f817ff4a.js",
    "revision": "96cf4c147b9489248286528815353936"
  },
  {
    "url": "assets/js/55.9a82226b.js",
    "revision": "499364ed62bd976e014ec9e6d76f0bfb"
  },
  {
    "url": "assets/js/56.df6266aa.js",
    "revision": "d770f90797fae05a086437f95428c637"
  },
  {
    "url": "assets/js/57.6eea1419.js",
    "revision": "695b1a85183e096118c349e137a4bc66"
  },
  {
    "url": "assets/js/58.4597b19f.js",
    "revision": "1d25d7ef00fc412293a0769df88649e3"
  },
  {
    "url": "assets/js/59.527c4b49.js",
    "revision": "1c87c0bc4cd60554d254992dd5e127da"
  },
  {
    "url": "assets/js/6.db496812.js",
    "revision": "6c64903a6c0c90c218bbef6f79a8dbc4"
  },
  {
    "url": "assets/js/60.b83a5818.js",
    "revision": "912a65f9d2b215cd4cf2bd0f2919d966"
  },
  {
    "url": "assets/js/61.828c8ff0.js",
    "revision": "37aa76d4139ba9301ae09faf115b1fe0"
  },
  {
    "url": "assets/js/62.1844a6b3.js",
    "revision": "8152bdccccab470558972b6b478bd4e9"
  },
  {
    "url": "assets/js/63.4a1897e6.js",
    "revision": "aa7fb2c0d86d3c6b3cfb1c76e1e3f59a"
  },
  {
    "url": "assets/js/64.e2f1bb9e.js",
    "revision": "8325aa96467942584f596ee6d06cea43"
  },
  {
    "url": "assets/js/65.fbc981ed.js",
    "revision": "f92d110b8a04039ce079771d4c7653d6"
  },
  {
    "url": "assets/js/66.a79d661a.js",
    "revision": "f7530abbf5d398ebe50133fa74d2e2a3"
  },
  {
    "url": "assets/js/67.a7abd390.js",
    "revision": "79fa27531e4add08b3db6e3fc6782b01"
  },
  {
    "url": "assets/js/68.54050464.js",
    "revision": "f07236b492ba57412c5ea3aab4052573"
  },
  {
    "url": "assets/js/69.4c0c3a3e.js",
    "revision": "c4fe69c1d51533fae3a01f09dbbd612c"
  },
  {
    "url": "assets/js/7.30efd180.js",
    "revision": "90b35502b322c4f44b9c38801bac179d"
  },
  {
    "url": "assets/js/70.90ee7afc.js",
    "revision": "537140284dcf452f4fdb965ec3fd0e08"
  },
  {
    "url": "assets/js/71.a881c3a5.js",
    "revision": "8fd0f3742baab38506991e94eb31a024"
  },
  {
    "url": "assets/js/72.f97a8baa.js",
    "revision": "489df9cca50db7f9b09932db60269509"
  },
  {
    "url": "assets/js/73.727b2106.js",
    "revision": "d6a9095e2b50549d961929fe5d0e1d90"
  },
  {
    "url": "assets/js/74.f749e7bb.js",
    "revision": "0f2b54690c40d29892fd7c7abf3d46b6"
  },
  {
    "url": "assets/js/75.69cae158.js",
    "revision": "6898907e1385ad732f3f565cd807ac75"
  },
  {
    "url": "assets/js/76.1126d572.js",
    "revision": "03d0617a05a50a12ea6d977513c6868b"
  },
  {
    "url": "assets/js/77.be41246a.js",
    "revision": "5b38903638048e04dae74b9e476b0884"
  },
  {
    "url": "assets/js/78.38188e4d.js",
    "revision": "ab7cf2c8db2f2f38fef5a9aa5ab122fc"
  },
  {
    "url": "assets/js/79.1666db29.js",
    "revision": "185925ba43e8c75f19801b825ba5a0de"
  },
  {
    "url": "assets/js/8.fee51c2e.js",
    "revision": "a9ee76847ddd3e3ca932cff0c4449df9"
  },
  {
    "url": "assets/js/80.6cd67bf2.js",
    "revision": "c2bf8e95d859756387c33d2d2ce5ea3f"
  },
  {
    "url": "assets/js/81.3be4f3ad.js",
    "revision": "95b9c4367c6c684b595cc3bf18f9a5ce"
  },
  {
    "url": "assets/js/82.884215d9.js",
    "revision": "5a384b0fa24aa39a3569a266fe753edc"
  },
  {
    "url": "assets/js/83.0192e9a8.js",
    "revision": "7b7c3b8aa09751468ff8b113f38321f2"
  },
  {
    "url": "assets/js/84.8969c4c6.js",
    "revision": "cec1712aeb79d0d6be878fea8943fe81"
  },
  {
    "url": "assets/js/85.3d019898.js",
    "revision": "4675a1b2939299468bf34515a6f7325e"
  },
  {
    "url": "assets/js/86.f7d19979.js",
    "revision": "01fd97fa0bb865533ffd08001f00b534"
  },
  {
    "url": "assets/js/87.55b22713.js",
    "revision": "acdf8e1e2417c455f2e29d2a1c1a27d0"
  },
  {
    "url": "assets/js/88.9f711ca3.js",
    "revision": "0cde4997c3536b42dd0c344f7ec707c7"
  },
  {
    "url": "assets/js/89.e2039a3a.js",
    "revision": "77b92f9663f2cde356ba6c099ad75eea"
  },
  {
    "url": "assets/js/9.8a9e20ca.js",
    "revision": "7af7c6e5ca183426dccad868daa4874a"
  },
  {
    "url": "assets/js/90.88cbea83.js",
    "revision": "5f80518d8f86b77f1c79ff1f4d3453eb"
  },
  {
    "url": "assets/js/91.d6d77cbc.js",
    "revision": "5df454337fc682ac51c7b018490568f1"
  },
  {
    "url": "assets/js/92.c2a61065.js",
    "revision": "d78292c09a102478affb64af05d8cf9e"
  },
  {
    "url": "assets/js/93.19bcd04e.js",
    "revision": "752f59fac17d6da8966ba9a40204d225"
  },
  {
    "url": "assets/js/94.68bf65e3.js",
    "revision": "321ff1820ef2b9b00cf551c88d1fb5a7"
  },
  {
    "url": "assets/js/95.27a50a43.js",
    "revision": "80ae71ad29c0a0086d0e89620871b49b"
  },
  {
    "url": "assets/js/96.8a0f0fcd.js",
    "revision": "d995c0c794283716beb1cd32429fd849"
  },
  {
    "url": "assets/js/97.d58e3f8f.js",
    "revision": "20e96e789b1d2eac5553a8388ccfa3a9"
  },
  {
    "url": "assets/js/98.7b5a66c9.js",
    "revision": "a3cce124e63d5c809ec5ca439500c362"
  },
  {
    "url": "assets/js/99.115a36f0.js",
    "revision": "75361415c41e95db5dc09acac9844861"
  },
  {
    "url": "assets/js/app.d354b57d.js",
    "revision": "503f419fadc8496b5b09a06ec02e4859"
  },
  {
    "url": "docs/产品介绍/扩展能力解决方案/AI人脸特征分析与检测/AI人脸特征分析与检测使用指引.html",
    "revision": "e1b5f81605b454de2a6c676041c60a0c"
  },
  {
    "url": "docs/产品介绍/扩展能力解决方案/AI人脸特征分析与检测/AI人脸特征检测与分析介绍.html",
    "revision": "f552a402536250b7709410b59af863cd"
  },
  {
    "url": "docs/产品介绍/扩展能力解决方案/AI人脸特征分析与检测/AI人脸特征检测与分析使用场景.html",
    "revision": "a03128dd02711832c483836c8b79cf38"
  },
  {
    "url": "docs/产品介绍/扩展能力解决方案/AI人脸特征分析与检测/使用案例/2 分钟完成颜值打分小程序.html",
    "revision": "22bd6f8404e109b6ef876044ea4f802d"
  },
  {
    "url": "docs/产品介绍/扩展能力解决方案/AI人脸特征分析与检测/使用案例/人脸隐私保护.html",
    "revision": "c113d35196782bbb507ef3958007af07"
  },
  {
    "url": "docs/产品介绍/扩展能力解决方案/AI人脸特征分析与检测/使用案例/智能裁剪.html",
    "revision": "dc7e12959424dbe080ac997deec9a4f7"
  },
  {
    "url": "docs/产品介绍/扩展能力解决方案/一键部署介绍.html",
    "revision": "c8ded410344bbd294689e17e557bb5b5"
  },
  {
    "url": "docs/产品介绍/扩展能力解决方案/云开发扩展能力简介.html",
    "revision": "ea6c13d8244bddeacdd2a301099f9deb"
  },
  {
    "url": "docs/产品介绍/扩展能力解决方案/云开发扩展能力计费方式.html",
    "revision": "366127f35a818f9e212c6d74070eb6d8"
  },
  {
    "url": "docs/开发文档/2.云开发能力/开发简介.html",
    "revision": "db184c66225c1a78b14fa2ea084ac887"
  },
  {
    "url": "docs/开发文档/3.SDK文档/1.客户端SDK/1.JS SDK/2.登录授权.html",
    "revision": "589f2ad291728365eca231026c5c7643"
  },
  {
    "url": "docs/开发文档/3.SDK文档/1.客户端SDK/1.JS SDK/3.数据库.html",
    "revision": "5310e9cad1ad9acd168486682123c3e6"
  },
  {
    "url": "docs/开发文档/3.SDK文档/1.客户端SDK/1.JS SDK/4.文件存储.html",
    "revision": "106a987687fbc7380eb3b142b7c210fc"
  },
  {
    "url": "docs/开发文档/3.SDK文档/1.客户端SDK/1.JS SDK/5.云函数.html",
    "revision": "cf49dc304e3eafb5824898098cd745eb"
  },
  {
    "url": "docs/开发文档/3.SDK文档/1.客户端SDK/2.FLUTTER SDK/0.概述.html",
    "revision": "88b8610bebd4d81b50e33dbdbe394487"
  },
  {
    "url": "docs/开发文档/3.SDK文档/1.客户端SDK/2.FLUTTER SDK/1.初始化.html",
    "revision": "aedfe50cb2eb0c591ef2b09dac1fb08c"
  },
  {
    "url": "docs/开发文档/3.SDK文档/1.客户端SDK/2.FLUTTER SDK/2.登录授权.html",
    "revision": "bcc725c0f89e118066dec9c984d4bde1"
  },
  {
    "url": "docs/开发文档/3.SDK文档/1.客户端SDK/2.FLUTTER SDK/3.文件存储.html",
    "revision": "c4906d2e59e302fe9032a4a982c7481a"
  },
  {
    "url": "docs/开发文档/3.SDK文档/1.客户端SDK/2.FLUTTER SDK/4.云函数.html",
    "revision": "f32d7c7bcd20ef0a5891714ff6368471"
  },
  {
    "url": "docs/开发者工具/3.云函数/5.本地运行.html",
    "revision": "96f37e76970c44a179acfd35d2260183"
  },
  {
    "url": "docs/开发者工具/5.静态网站.html",
    "revision": "14e099d9934a2c37d665ee4a0239408e"
  },
  {
    "url": "docs/开发者工具/6.HTTP service.html",
    "revision": "8b814dd7f24e95c9e31fd293799018b9"
  },
  {
    "url": "docs/开发者活动/训练营/小程序与JavaScript/点击事件.html",
    "revision": "2030d0f3c766d6cd4b8beb98e4b5e9c5"
  },
  {
    "url": "docs/开发者活动/训练营/小程序云开发/1.云开发快速入门.html",
    "revision": "f4516101b94fdd1bf881c5389b4e1a78"
  },
  {
    "url": "docs/开发者活动/训练营/小程序云开发/云开发快速入门.html",
    "revision": "a277c9db01832ea20fbc8c5b8cb3311b"
  },
  {
    "url": "docs/开发者活动/训练营/小程序开发/小程序开发入门.html",
    "revision": "d0be321c58a38bcbcce10ef3de730d5a"
  },
  {
    "url": "docs/案例教学/index.html",
    "revision": "42911d6c0d8c6bc31627bc49acaf44f7"
  },
  {
    "url": "faq/index.html",
    "revision": "c8951459f059d5e3caca5d1f54a32c0b"
  },
  {
    "url": "favicon.png",
    "revision": "32e3d00a2ce5746cd0b4e53d1d8c6ed3"
  },
  {
    "url": "feedback/index.html",
    "revision": "e163d3daaffefd681a553a8653a8dd46"
  },
  {
    "url": "flutter/auth/1.png",
    "revision": "c116514771d346bc0c1f672081236150"
  },
  {
    "url": "flutter/env/1.png",
    "revision": "419886fbd4ced846c50a9babfa98afe0"
  },
  {
    "url": "flutter/env/2.png",
    "revision": "86fbc3072dd1e5d6f0050802d80fff90"
  },
  {
    "url": "flutter/wxauth/1.png",
    "revision": "bd21852b433d43fa544f202e951e2a06"
  },
  {
    "url": "flutter/wxauth/2.png",
    "revision": "45eca591ed265ec7bf6794627e3a4bd0"
  },
  {
    "url": "flutter/wxauth/3.png",
    "revision": "93cbf25832fc9dce7d39b6780c463632"
  },
  {
    "url": "flutter/wxauth/4.png",
    "revision": "26e742d08c3f0d04d78ddfc89e5590bc"
  },
  {
    "url": "flutter/wxauth/5.png",
    "revision": "55852edc79eed1577089c0dacabf51e1"
  },
  {
    "url": "flutter/wxauth/6.png",
    "revision": "8e287953603053d9edd32b55082a0dde"
  },
  {
    "url": "flutter/wxauth/7.png",
    "revision": "5695798715bfe44b1a3ac1db4ebaeeeb"
  },
  {
    "url": "guide/index.html",
    "revision": "c20fd41e6839429a4f6020709cf13168"
  },
  {
    "url": "index.html",
    "revision": "49387c4550b2d5338ece37b335ed03dd"
  },
  {
    "url": "log/index.html",
    "revision": "b9734c82c3ae7b356bde42641eb37a1e"
  },
  {
    "url": "logo.png",
    "revision": "3428490f386bff929c3f2d797c002c73"
  },
  {
    "url": "qrcode.png",
    "revision": "82a5b042af7e14ed908e09a10b55135d"
  },
  {
    "url": "scripts/baidu-analytics.js",
    "revision": "0171daa370865fb8cf35cacb9d27d5c6"
  },
  {
    "url": "scripts/mta-analytics.js",
    "revision": "3ca248e161b40b13324ee873dbf49604"
  },
  {
    "url": "scripts/redirect.js",
    "revision": "f085a85d9c1941bfe732c50ad91b7794"
  },
  {
    "url": "start/index.html",
    "revision": "9fec23bcebe69d78db39550c259c508e"
  },
  {
    "url": "together/index.html",
    "revision": "2f4ca0c5d259847cfa40a1766b5af123"
  },
  {
    "url": "云开发架构.png",
    "revision": "7b6264ca43595668ad8c9b6b8b5eb50c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
