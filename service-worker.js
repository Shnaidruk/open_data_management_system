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
    "url": "404.html",
    "revision": "5cb3ce6590b30106b4e4d26cf1c2b0d3"
  },
  {
    "url": "assets/css/0.styles.42f13bf0.css",
    "revision": "fd4cbd29757ef8db5de2f18316e19754"
  },
  {
    "url": "assets/img/data.cb882bb6.png",
    "revision": "cb882bb6dac047c08f147ff127881f3c"
  },
  {
    "url": "assets/img/databyname.fa72c4b2.png",
    "revision": "fa72c4b2ca6ee86f54096ae3824b1491"
  },
  {
    "url": "assets/img/databyname2.a778a2b6.png",
    "revision": "a778a2b6253b7ec66e5fc912549ce02f"
  },
  {
    "url": "assets/img/databyname3.789bf6a9.png",
    "revision": "789bf6a9814e6b3bb130369a954e37c9"
  },
  {
    "url": "assets/img/datacreate.5a9d8e80.png",
    "revision": "5a9d8e80fbae228702058b1562b0c69a"
  },
  {
    "url": "assets/img/datadelete.8fccc1c1.png",
    "revision": "8fccc1c1415749189a34c9520781ba8b"
  },
  {
    "url": "assets/img/dataupdate.4cc859bf.png",
    "revision": "4cc859bf5435ac9ff08d800b6e22a406"
  },
  {
    "url": "assets/img/getallusers.60cb1e5f.png",
    "revision": "60cb1e5ff0fa7c3b3c617dc0400c123d"
  },
  {
    "url": "assets/img/group.3f3475d3.png",
    "revision": "3f3475d3167bf645400c424724f5ee85"
  },
  {
    "url": "assets/img/permission.3d00b82e.png",
    "revision": "3d00b82e23f2b3231cb64de9334ed647"
  },
  {
    "url": "assets/img/rel.9e127c8a.png",
    "revision": "9e127c8acf01f2615b7928b167b142b2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/usbyid.c840801e.png",
    "revision": "c840801ec49f8c2c7691284c0279e113"
  },
  {
    "url": "assets/img/usbyid1.6648f433.png",
    "revision": "6648f43350b61272b36d7c1493c8fd5e"
  },
  {
    "url": "assets/img/uscreate.245a4450.png",
    "revision": "245a4450e4f8de9a558f5d71e1b58662"
  },
  {
    "url": "assets/img/uscreate1.5e114675.png",
    "revision": "5e114675990883c3c0ace5e938271bba"
  },
  {
    "url": "assets/img/userdelete.887ffff9.png",
    "revision": "887ffff9aa9c68e6336fe6be68cabd93"
  },
  {
    "url": "assets/img/usupdate.8ca38aba.png",
    "revision": "8ca38aba7a922ae48c8222dcf7f48181"
  },
  {
    "url": "assets/js/10.6e2d7b26.js",
    "revision": "04a2d21322f5f843593d6d397b254183"
  },
  {
    "url": "assets/js/11.b3c33f10.js",
    "revision": "130644cbd99072a9fb82722d6a65eee6"
  },
  {
    "url": "assets/js/12.a3171245.js",
    "revision": "cc6d83db0072a03f92c1b37982a65479"
  },
  {
    "url": "assets/js/13.70eb2ced.js",
    "revision": "0cd3e7272ffba1d951e7238c7501eac9"
  },
  {
    "url": "assets/js/14.9d1431a4.js",
    "revision": "7bc0507e413d56e8c97d99ac7d6b552b"
  },
  {
    "url": "assets/js/15.13569df5.js",
    "revision": "b349e9f27aa0637cc8359f51c7843368"
  },
  {
    "url": "assets/js/16.48e8e6d9.js",
    "revision": "b7d84411b4dc8affc392c246c71a074a"
  },
  {
    "url": "assets/js/17.673289ce.js",
    "revision": "3bfcc4d8241b266d79d234531427df51"
  },
  {
    "url": "assets/js/18.1dc446b7.js",
    "revision": "dea5550033130b92aa6df8d61e367e9b"
  },
  {
    "url": "assets/js/19.1e078b5b.js",
    "revision": "0c60a74fa4d4931ef8783582318ee667"
  },
  {
    "url": "assets/js/2.2ff77d63.js",
    "revision": "7cc14d779a8fd040d0a9db1bd024de1b"
  },
  {
    "url": "assets/js/20.12fc5fe8.js",
    "revision": "ea180305e5bd983c008c837c6055d227"
  },
  {
    "url": "assets/js/21.69b90a07.js",
    "revision": "587ae04df2dced236c61a6f997e368b1"
  },
  {
    "url": "assets/js/22.1c2e82e7.js",
    "revision": "ddbf8965d2ef658a9fb4b04dc479e9fd"
  },
  {
    "url": "assets/js/23.ce7ee692.js",
    "revision": "12024ab6e769454b5694d1f94d16821b"
  },
  {
    "url": "assets/js/24.390ff56b.js",
    "revision": "889a749a79428f78f1e262e9140806d9"
  },
  {
    "url": "assets/js/26.d4420a7c.js",
    "revision": "1e186a7439ba927e6e7f5b83eacb8afe"
  },
  {
    "url": "assets/js/3.0d793b50.js",
    "revision": "b85eaabd0923b0f9d588a8db86581ac8"
  },
  {
    "url": "assets/js/4.f4e3418f.js",
    "revision": "552a2580fd25b4140ef34bd0b282972c"
  },
  {
    "url": "assets/js/5.009de7c3.js",
    "revision": "dc584098e4f29321b75c07a9133a1bde"
  },
  {
    "url": "assets/js/6.07aa3cab.js",
    "revision": "ba150191fb00442608de2b7eae5996d8"
  },
  {
    "url": "assets/js/7.bc58ede0.js",
    "revision": "d52066b3266975461561da369e2d077a"
  },
  {
    "url": "assets/js/8.887a42a3.js",
    "revision": "307f582f7dd7b50a2f21f7b04341a15b"
  },
  {
    "url": "assets/js/9.064b84aa.js",
    "revision": "09fb2259fcb3b4603a71226b7c15866d"
  },
  {
    "url": "assets/js/app.846bef6e.js",
    "revision": "8b4e37df620a7305d629d338ede7a732"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ba51cb8f5d98ee40bd00aaf014e3db4b"
  },
  {
    "url": "design/index.html",
    "revision": "5eb034845a0893604593bfaebb54b68f"
  },
  {
    "url": "index.html",
    "revision": "fa9b0333fe4b8f4da90867b63f12347a"
  },
  {
    "url": "intro/index.html",
    "revision": "b91cddbb3beb1ea59514efa09ed97ea5"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "26da23710811abc134ac812e2215b2d1"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "00f346f3d06391cf68226d93b5ab6ae8"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c6d18710d7f14a7001eb847364328853"
  },
  {
    "url": "software/index.html",
    "revision": "a714a164fe601fbfedd32cd19ea66acc"
  },
  {
    "url": "test/index.html",
    "revision": "c3d8057f2593a31887f773d39cfc4622"
  },
  {
    "url": "use cases/index.html",
    "revision": "8667c2986d81966a50125683285140e0"
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
