# PWA-demo

Just have a try for Progressive Web Application.


# How to start this ?

### Android

安卓系统上的 Chrome、Firefox 最新版都已经支持 PWA 功能，直接在菜单中按下 `添加到桌面` 即可。

### Chrome (Windows/Linux)

- 首先，将你的 Chrome 浏览器升级到较新的版本。
- 如果，你发现在菜单中已经出现 `添加到桌面` 之类的选项，说明功能已经开启，可以跳过以下步骤，否则请继续。
- 然后，在地址栏输入 `chrome://flags`，进入此设置页面。
- 这时，你在此设置页面的搜索中键入`pwa`，你可以看到有一个选项 `#enable-desktop-pwa`，请将其设置成 `Enabled`。
- 最后，你就可以在菜单中看到 `添加到桌面` 的选项了（有的版本可能在菜单的 `更多工具` 中）。

### Firefox (Windows/Linux)

### Edge

微软好像是打算绕个弯子？

让开发者用 pwa builder 来打包网页成他们所谓的 appx 应用，然后在 Microsoft Store 上发布，最后用户需要下载使用。

(目前我只在 Microsoft Store 找到了一个叫 [Bundle Generator](https://www.microsoft.com/zh-cn/store/p/bundle-generator/9nblggh43pmq) 的官方应用，可以用来打包 appx 应用。)

[参考](https://blogs.windows.com/msedgedev/2018/02/06/welcoming-progressive-web-apps-edge-windows-10/#uifT4al7ZkQgfuHf.97)

### Safari


# Sites that support PWA

谷歌、微软的几乎全部网页应用、国内的有道云笔记都支持 PWA，可以用来测试此功能。

(注意：这里的“支持”，主要是指支持这种通过使用 Manifest 文件来定义网页元数据，使用 Service Work 使网页应用可以自动缓存、离线执行，甚至可以进行系统通知功能，的一种渐进式 Web 应用。然而如果网页没有支持 PWA 的功能，此功能将只是简单地将网页链接和图标发送到桌面。)


# [Reference](docs/reference.md)

- [MDN - Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive)
- [移动端应用迎来 WEB 时代：Google/Microsoft/Apple 已全部支持 PWA 技术](https://zhuanlan.zhihu.com/p/34247322)
