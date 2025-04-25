---
title: 概述
layout: ksio/doc
ksio_asset_css:
  - stylesheets/local/syntax-highlighting
  - stylesheets/local/pages/post
  - stylesheets/local/pages/doc
ksio_asset_js:
  - javascripts/ksio/vendors/jquery.timeago
  - javascripts/ksio/vendors/jquery.timeago.zh-CN
  - javascripts/ksio/initializers/time
  - javascripts/ksio/vendors/jquery.lazyload
  - javascripts/ksio/initializers/lazyload
repo: default/cookbook
permalink: /zh/guides/
---

本主题由[欧雷](https://linxoid.com/ourai/)于 2015 年开始设计与开发，并在个人网站「[欧雷流](https://ourai.ws/)」及个人各种开源软件的文档站上使用多年；在设计时以提高阅读体验和保持简洁风格为最高原则，体现个性在其次。

因而，适用于博客、个人网站、API 文档站等以内容为主的网站。

## 兼容环境

在编写主题代码时，尽可能地使用兼容性高的写法，并适配多种网站构建方式：

| 环境 | 兼容性 |
| --- | --- |
| 浏览器 | 大部分 PC 与移动端现代浏览器 |
| 静态网站生成器 | [Jekyll](https://jekyllrb.com/)、[Hexo](https://hexo.io/) |

## 相关技术

既然你来了解本主题了，那我就假定你已具备 [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)、[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 和 [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 相关知识——无论你通过何种方式使用本主题，它们都是本主题得以在浏览器中呈现效果的基本条件。

为了更好地搭建页面与提供更丰富的使用体验，本主题依赖（并包含）下列库和服务：

| 名称与版本 | 说明 |
| --- | --- |
| [Bootstrap `v3.3.6`](https://getbootstrap.com/docs/3.3/) | 界面交互 |
| [Font Awesome `v4.7`](https://fontawesome.com/v4/icons/) | 字体图标 |
| [LinXoid](https://linxoid.com/) | 链接到互联网名片 |
| [Disqus](https://disqus.com/) | 国外的评论托管服务，因众所周知的缘由而无法正常访问，主题支持通过 [DisqusJS](https://disqusjs.skk.moe/) 为国内用户代理查看评论 |
| [Share.js](https://github.com/overtrue/share.js) | 将页面便捷分享到社交网络 |

若是搭配静态网站生成器使用，除了 [Markdown](https://www.markdownguide.org/) 和 [YAML](https://yaml.org/) 之外，根据你的选择，还需额外了解一些技术：

| 静态网站生成器 | 特定技术 |
| --- | --- |
| Jekyll | [Liquid](https://shopify.dev/docs/api/liquid)、[kramdown](https://kramdown.gettalong.org/) |
| Hexo | [EJS](https://ejs.co/) |

当你想利用主题内的[可复用资源](/zh/apis/html-reuse/)以及打算修改源码或为主题做贡献的话，需要了解下编写源码的语言（方言）：

| 构成部分 | 语言或方言 |
| --- | --- |
| 模板 | [Liquid](https://shopify.dev/docs/api/liquid)（Jekyll）、[EJS](https://ejs.co/)（Hexo） |
| 样式 | [Sass](https://sass-lang.com/)（SCSS） |
| 脚本 | [CoffeeScript](https://coffeescript.org/v1/)（遗留代码，新功能不用） |

## 如何使用

本主题支持多种使用方式，详见《[快速上手](/zh/guides/getting-started/)》。

### 主题署名

虽说本主题源码开放并免费使用，但还是希望能够在使用时保留主题和提供者的名字与来源——

在使用时，默认会在页面底部（即 `footer` 中）的版权声明右边显示主题和提供者的名字与来源相关信息：

<figure>
  <img src="/zh/guides/theme-provider.jpg" alt="主题提供者声明">
  <figcaption>主题提供者声明</figcaption>
</figure>

但这并非是强制的，可通过在[网站配置](/zh/apis/site-config/)文件中将 [`copyright.provider`](/zh/apis/site-config/#copyright) 设为 `false` 以关闭显示；或把 [`footer.partial`](/zh/apis/site-config/#footer) 改为自定义的页脚去覆盖。

如果可以，请不要关闭默认页脚中主题和提供者的名字与来源的显示；如需完全使用自定义页脚文件，也请在页脚加上如下 HTML 代码：

```html
本站主题 <a href="https://lime-theme.github.io" target="_blank" rel="external nofollow">Lime</a> 由 <a href="https://linxoid.com/ourai" target="_blank" rel="external nofollow">欧雷</a> 提供
```

感谢理解与配合！🙏🏼🙏🏼🙏🏼

### 反馈问题

若看遍本站内的文档和 [GitHub Issues](https://github.com/lime-theme/lime/issues) 上的已有问题后仍无法解决所遇到的问题，请尽可能地[详细描述并提交你的问题](https://github.com/lime-theme/lime/issues/new/choose)，我会尽快处理。

或者你有条件帮忙修复，欢迎提 [PR](https://github.com/lime-theme/lime/pulls)！👏🏼👏🏼👏🏼
