# 项目说明

官方构建参考@AGENTS.md

个人博客(Astro),部署在 https://funnyjacy.github.io/blog/ 。日常使用规则见 README.md。

## 开发规则
- 一定要坚持Astro的静态，快速，简洁原则，如果解决方案会引入大量js负担必须向用户警告

## Git 提交规则(重要)

- **任何 git commit / git push 必须先向用户确认,得到明确同意后才能执行**
- 默认只做本地验证(npm run build + pagefind + 本地预览),验证通过即停,不主动提交
- 项目中有可能会有还未commit的文章或者自己的修改，Claude Code完成任务后要询问作者是否要一并把作者自己的修改和自己的修改一起commit，绝对不要自己擅自全部commit！！！
- 用户说"上线"/"发布"时才推送到远端
- **推送后必须检查 GitHub Actions 构建结果**(`gh run list --repo funnyjacy/blog --limit 1`,失败用 `gh run view <run-id> --log-failed` 看日志),不能推完就当成功——本地构建通过不代表 CI 通过(如 CI 上会构建本地未提交的文章)

## 已踩过的坑

- satteri 0.11.6 没发布 Windows 二进制,已用 `overrides` 钉在 0.11.5;pagefind 钉在 1.5.2(1.6.0 的 linux-arm64/windows-arm64 可选包未发布,会让 npm 装包时炸出 `Invalid Version:`)。升级这两个包前先确认上游平台包齐全。
- astro.config 里 `base: '/blog'` 的 BASE_URL 不带尾斜杠,拼接资源路径时注意。
- base('/blog') 下的路由注意:pages/blog/[...slug].astro 会让文章出现在 dist/blog/<slug>/(服务为 /blog/blog/<slug>),与站内 /blog/<slug> 链接对不上导致 404。路由文件已移到 pages/[...slug].astro。astro 本地 preview 对 URL 与 base 的映射是严格的,出现 404 别当怪癖忽略——它往往就是真问题(python -m http.server 直接 serve dist 会掩盖这类 base 映射错误)。
