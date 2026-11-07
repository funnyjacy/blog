# funnyjacy的博客

个人随想博客,部署在 https://funnyjacy.github.io/blog/ 。Astro 官方 blog 模板 + 暗色模式 + pagefind 全文搜索 + giscus 评论。

## 日常写一篇

1. 在 `src/content/blog/` 新建 `.md` 文件(文件名即 URL,建议 `YYYY-MM-DD-标题.md`):

   ```yaml
   ---
   title: 标题
   description: 一句话摘要(可省)
   pubDate: 2026-11-06
   ---
   正文随便写 Markdown
   ```

2. `git add -A && git commit -m "..." && git push`,约 3 分钟后线上生效。

## 本地预览

```sh
npm run dev        # 开发服务器,搜索页不可用(索引是构建时生成的)
npm run build && npx pagefind --site dist && npm run preview   # 完整预览(含搜索)
```

## 已踩过的坑

- satteri 0.11.6 没发布 Windows 二进制,已用 `overrides` 钉在 0.11.5;pagefind 钉在 1.5.2(1.6.0 的 linux-arm64/windows-arm64 可选包未发布,会让 npm 装包时炸出 `Invalid Version:`)。升级这两个包前先确认上游平台包齐全。
- astro.config 里 `base: '/blog'` 的 BASE_URL 不带尾斜杠,拼接资源路径时注意。
- base('/blog') 下的路由注意:pages/blog/[...slug].astro 会让文章出现在 dist/blog/<slug>/(服务为 /blog/blog/<slug>),与站内 /blog/<slug> 链接对不上导致 404。路由文件已移到 pages/[...slug].astro。astro 本地 preview 对 URL 与 base 的映射是严格的,出现 404 别当怪癖忽略——它往往就是真问题(python -m http.server 直接 serve dist 会掩盖这类 base 映射错误)。
