# 项目说明

个人博客(Astro),部署在 https://funnyjacy.github.io/blog/ 。日常使用规则见 README.md。

## Git 提交规则(重要)

- **任何 git commit / git push 必须先向用户确认,得到明确同意后才能执行**
- 默认只做本地验证(npm run build + pagefind + 本地预览),验证通过即停,不主动提交
- 用户说"上线"/"发布"时才推送到远端

## 已踩过的坑

- satteri 0.11.6 没发布 Windows 二进制,已用 `overrides` 钉在 0.11.5;pagefind 钉在 1.5.2(1.6.0 的 linux-arm64/windows-arm64 可选包未发布,会让 npm 装包时炸出 `Invalid Version:`)。升级这两个包前先确认上游平台包齐全。
- astro.config 里 `base: '/blog'` 的 BASE_URL 不带尾斜杠,拼接资源路径时注意。
- base('/blog') 下的路由注意:pages/blog/[...slug].astro 会让文章出现在 dist/blog/<slug>/(服务为 /blog/blog/<slug>),与站内 /blog/<slug> 链接对不上导致 404。路由文件已移到 pages/[...slug].astro。astro 本地 preview 对 URL 与 base 的映射是严格的,出现 404 别当怪癖忽略——它往往就是真问题(python -m http.server 直接 serve dist 会掩盖这类 base 映射错误)。
