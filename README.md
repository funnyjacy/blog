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

## 正文图片大小

- **默认**:全站正文图片自动缩到内容区的 80%(居中),在 `src/layouts/BlogPost.astro` 的 `.prose img` 里调整。
- **单图控制**:在 md 里图片语法后跟第二对括号(不要有空格),由 remark-imgattr 插件解析:

  ```markdown
  ![说明](./xxx.assets/图.png)(width: 400)
  ![说明](./xxx.assets/图.png)(style: max-width: 50%)
  ![说明](./xxx.assets/图.png)(quality: 80)
  ```

  `width` 会按该尺寸生成更小的优化图(省流量),`style` 只影响显示。不加括号就是默认居中、80% 宽。
- **对齐**:默认居中;想让图片靠左或靠右、或不缩小占满整栏,用 `class`:

  ```markdown
  ![说明](./xxx.assets/图.png)(class: align-left)    <!-- 靠左 -->
  ![说明](./xxx.assets/图.png)(class: align-right)   <!-- 靠右 -->
  ![说明](./xxx.assets/图.png)(class: full)          <!-- 占满整栏 -->
  ```

  可与其他属性组合:`(width: 400, class: align-left)`。
- **注意**:改 `astro.config.mjs` 后 dev server 必须重启才能看到效果,生产构建不受影响。

## 本地预览

```sh
npm run dev        # 开发服务器,搜索页不可用(索引是构建时生成的)
npm run build && npx pagefind --site dist && npm run preview   # 完整预览(含搜索)
```

