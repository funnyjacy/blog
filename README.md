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

