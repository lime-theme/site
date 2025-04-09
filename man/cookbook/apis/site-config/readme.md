在网站配置文件中声明的用于控制主题预置渲染逻辑的配置项，整体是个多层嵌套的对象，在本文档中的表现形式为：

1. 一级属性会作为三级标题，然后紧接着是对其的简单说明；
2. 二级属性列在表格中，若需要更为详细的解释，则会另起四级标题；
3. 三级及以下层级的属性会以 TypeScript 的类型定义的方式呈现。

由于不同静态网站生成器所支持功能之间的差异性，为适配本身不支持或支持得不完善的功能的配置项，会在相应的网站配置文件中挂在 `ksio` 这个「命名空间」下：

```yaml
ksio:
  # 本页所列举的配置
```

即便如此，并非所有配置项都要挂在 `ksio` 下，要视情况而定。另外，上面说的「一级属性」等是不包含 `ksio` 这一层的，即从 `ksio` 的下一层开始算起。

为方便查找，以下内容按字母顺序排列——

## 模板

当配置项「值类型」有 `Link` 字样的，代表 `Link` 是一个描述链接信息的对象：

```typescript
interface Link {
  text: string;
  url?: string;
  children?: Link[];
}
```

### `brand`

品牌相关配置，主要控制页头左上角的链接与文本。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `color` | `string` | - | 品牌主题色，[详见下方](#color) |
| `icon` | `string` | `'ksio/favicon.ico'` | 品牌图标，[详见下方](#icon) |
| `parent` | `Link` | - | 当前网站的父品牌，指定后会在当前网站品牌的左边显示 |
| `text` | `string` | 网站标题 | 当前网站品牌所要显示的文本，不指定则显示网站标题 |

#### `color`

设置之后，会在 `<head>` 标签内生成 [`<meta name="theme-color" content="指定主题色">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color)。

#### `icon`

除了会通过 `<link rel="icon" href="指定图标">` 显示在网页浏览器标签中以外，还会用于 SEO 等其他信息中。

### `copyright`

网站版权声明。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `fragments` | `string` | - | 显示在版权声明右侧的额外信息，[详见下方](#fragments) |
| `owner` | `Link` | - | 版权所有人，默认使用网站标题与地址 |
| `period` | `CopyrightPeriod` | - | 有效期间，[详见下方](#period) |
| `provider` | `boolean` | `true` | 是否显示主题与提供者声明 |

#### `fragments`

值是可以包含 HTML 的字符串，最好每段内容都包含在 `<p>` 标签中，相邻的 `<p>` 标签之间会显示一个垂直的分隔符。

若 `provider` 没设为 `false`，整个内容会显示在主题与提供者声明右侧。

#### `period`

```typescript
interface CopyrightPeriod {
  start?: Date | string | number;  // 起始时间，一般只有年份，默认使用网站构建时间
}
```

### `footer`

页面底部。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `links` | `Link[]` | - | 页面底部链接 |
| `partial` | `string` | `'ksio/partials/footer.html'` | 预置布局模板中页脚部分，可指定自定义的替换主题预置的 |

### `header`

页面头部。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `navbar` | `HeaderNavBar` | - | 页头导航栏，[详见下方](#navbar) |
| `navs` | `Link[]` | - | 页面头部导航，最多 3 层 |
| `partial` | `string` | `'ksio/partials/header.html'` | 预置布局模板中页头部分，可指定自定义的替换主题预置的 |

#### `navbar`

```typescript
interface HeaderNavBar {
  placement?: 'left' | 'right'; // 导航菜单显示位置，默认为 `'left'`
}
```

### `master`

站长信息。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `name` | `string` | - | 站长名称，[详见下方](#name) |

#### `name`

在使用 Jekyll 时，一般会在网站配置文件中定义一个 `author`，因此在 Jekyll 中使用本主题时若没指定 `name` 则会使用 `site.author.name`。

### `meta`

网站信息。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `url` | `string` | - | 网站发布后的访问链接 |

### `seo`

SEO 相关配置。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `suffix` | `boolean` | `true` | 是否在 `<title>` 中将站名作为后缀拼接 |

### `social`

社交相关功能的开关与配置。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `comment` | `SocialComment` | - | 评论功能，[详见下方](#comment) |
| `feed` | `SocialFeed` | - | feed 订阅功能，[详见下方](#feed) |
| `share` | `boolean` | `true` | 是否启用将页面分享到其他 SNS 的按钮 |

#### `comment`

```typescript
interface SocialComment {
  // Disqus
  disqus?: {
    shortname: string;  // Disqus 上注册的网站名
    // 以下几个配置项是在无法加载 Disqus 的情况下的代理，
    // 默认为 DisqusJS（详见 https://disqusjs.skk.moe/）
    proxy?: {
      endpoint: string; // 用于 DisqusJS 的 `api` 配置项
      key: string;  // 用于 DisqusJS 的 `apikey` 配置项
    };
    username?: string;  // 用于 DisqusJS 的 `admin` 配置项
    label?: string; // 用于 DisqusJS 的 `adminLabel` 配置项
  };
  // 多说
  duoshuo?: {
    shortname?: string;
  };
}
```

#### `feed`

```typescript
interface SocialFeed {
  rss?: boolean;  // 是否生成 RSS feed，默认为 `false`，会用到 `meta.url`
  atom?: boolean; // 是否生成 Atom feed，默认为 `false`
}
```

### `analytics`

数据统计相关配置，待补充。

## 插件

为兼容不同静态网站生成器之间的差异性或增强功能而编写的插件的配置。

### `defaults`

设置 Front Matter 的默认值。模拟 Jekyll 的 [Front Matter Defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/)，仅在 Hexo 中有效。

| 属性名 | 值类型/可选值 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `layout` | `Record<string, FrontMatterDefaults>` | - | 布局的默认值 |
| `page` | `FrontMatterDefaults[]` | - | 页面的默认值 |

其中，`FrontMatterDefaults` 的定义为：

```typescript
interface FrontMatterDefaults {
  values?: Record<string, any>; // Front Matter 默认值，详见「页面配置」文档
  extends?: string; // `values` 的值继承自其他布局，只在为布局（`layout`）设置默认值时有效
  scope?: { // `values` 的生效范围，只在为页面（`page`）设置默认值时有效
    type: string; // 页面类型（集合），即在 `source` 文件夹下的子文件夹名字
  };
}
```

在生效时，页面的默认值会与其对应的布局的默认值相合并或覆盖；`page` 中相同匹配范围的页面，后来者的默认值会与先前的相合并或覆盖。

若想为 `source/_posts` 中的文件设置默认值，需将 `scope.type` 的值设为 `posts`。
