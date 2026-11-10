---
title: Better Claude Code
description: 我的 Claude Code 增强技巧：模型选用、Skill 与插件工具，持续更新
pubDate: 2026-11-10
---

我不是一个优秀的程序员，几乎不会手写代码（古法编程）。但用了这么久的 Agent 之后，我确实攒下一些自己的心得——这些技巧实实在在地增强了 Agent 的能力，我相信它们也能帮到别人。

![Better Claude Code](./2026-11-10-Better-Claude-Code.assets/hero-gpt.png)

## 目录

1. [模型选用](#一模型选用)
2. [Skill](#二skill)
3. [Plugin 和外部工具 Tool](#三plugin-和外部-tool)
4. [全局 CLAUDE.md](#四全局-claudemd)

用好 Agent 主要在三个方面：模型选用、Skill、插件和工具。

可能有人疑惑我为什么不谈 Agent 该怎么选——Claude Code、Codex、DeepSeek Harness、Cursor、Qoder 这么多。原因很简单：这里面只有一个断档领先的选手，就是 Claude Code。Anthropic 是一家以编程为核心目标的公司，Agent 也是他们最先做出来的，模型和 Agent 都是断档式领先，这点应该没人否认。从我的使用体验看，其他 Agent 只能达到 Claude Code 六成的水平，所以默认我只选 Claude Code。当然，你更喜欢别的 Agent 完全没问题——哪个用起来最顺手，哪个就是最好的。

## 一、模型选用

模型是最关键的选择。一个聪明的模型会自我增强，懂得调用一切能用的工具——可以说，选好模型是成败的关键。

Agent 玩家不是只和大模型聊天——我们要的是让它干活（打工），比如编程、做 PPT、写 Word。所以选 Agent 模型，最该关注的是干活能力，而不是对话能力。干活速度快、质量高、废话少，这是三大要求。

因此我只推荐两家公司的模型：有 💰 的选手上 Claude Opus，平价选手上 GLM。

Anthropic 和智谱都是以编程为训练目标的公司，它们的模型完美符合上面三个要求。

> 大模型做不成六边形战士，每家都有自己的侧重点。比如 Claude 编程能力强；Gemini 对话体验好，说话有人味，前端审美好；GPT 自称六边形战士，但事实上每个方面都不精通。

我推荐 GLM-5.3-flash。当初选它纯粹是因为最便宜，结果发现效果非常好。官网价格是 0.8 元每百万输入，中转站一般还能更便宜。

吐槽：GPT 和 DeepSeek 废话都很多。DeepSeek 还傻，工具基本不会用，唯一的优点是说话挺礼貌。

## 二、Skill

Skill 就是 Prompt。我只推荐一个 Skill——/grill-me。

想出这个 Skill 的人绝对是个天才。下面是它的 SKILL.md全文：

```
name: grill-me

description: Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases (e.g. "grill me", "拷问我", "poke holes in my plan").

Interview me relentlessly about every aspect of this until we reach a shared understanding. Walk down each branch of the decision tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time, waiting for feedback on each question before continuing. Asking multiple questions at once is bewildering.

If a *fact* can be found by exploring the environment (filesystem, tools, etc.), look it up rather than asking me. The *decisions*, though, are mine — put each one to me and wait for my answer.

Do not act on it until I confirm we have reached a shared understanding.
```

AI 的生成是概率结果，方案没提前定好，很容易得到不想要的结果。这个技能正好解决「方案选择」的问题——比如做这个博客时，它就逐项问我：技术方案选 Astro / Hugo / WordPress？域名自购还是用 GitHub Pages？

如今 AI 的设计趋势，是用更少的提示词构建更准确的结果，每一次 Claude 迭代都在简化全局提示词。我一开始也做了一大堆 Skill，用得多，后来基本都放着吃灰了——只有 grill-me 还会用。

## 三、Plugin 和外部 Tool

Claude Code 内置了不少工具，比如读 PPT 和 Word、网络搜索等，但都不算好用，所以开发者圈子一直在插件和外部工具这块努力。

推荐几个插件和工具，都在实时解决 Claude Code 本身的痛点。

Claude 内置搜索 → 换成 [exa](https://exa.ai/)（要登录使用）

Claude 内置搜索质量很差，经常搜到过时的、没用的内容，所以要换成 exa——它的搜索非常全面。

![exa 搜索界面](./2026-11-10-Better-Claude-Code.assets/image-20261110165446678.png)

Claude 调用操作浏览器 → 换成 Vercel 家的 agent-browser

Claude 内置的浏览器只支持小项目。如果需要真实打开 Chrome、用到用户的登录状态，就用 Vercel 家的 agent-browser——Rust 构建，也没有 chrome-devtools 那种 MCP 的时间和 token 开销。

**[agent-browser](https://github.com/vercel-labs/agent-browser)**

![agent-browser](./2026-11-10-Better-Claude-Code.assets/image-20261110165647928.png)

前端调试开发 → chrome-devtools（现在已改成 plugin）

chrome-devtools 主要用来辅助前端开发，但比较慢，token 开销也大。

**[chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)**

![chrome-devtools-mcp](./2026-11-10-Better-Claude-Code.assets/image-20261110170214258.png)

## 四、全局 CLAUDE.md

工具装上之后，Claude 还是会偏向使用自己内置的工具，所以要在全局提示词里强制指定。这是我的部分 CLAUDE.md 全局设置：

```md
网络搜索优先使用 **exa MCP 工具**（`mcp__plugin_exa_exa__web_search_exa`），而不是内置的 `web_search`。exa 的搜索结果质量更高、提供的 highlights 更有价值，适合深度研究和复杂查询。只有在 exa 不可用或明确不适合时，才退回 `web_search`。

  - 默认一律用 agent-browser CLI（走 Bash），不要用 chrome-devtools MCP：它一条 Bash 能批量串多个动作（`batch` 子命令），避开 MCP 每个动作一次模型往返的开销，实测 token 开销低约 10 倍。
  - 只在四个场景切回 chrome-devtools MCP（agent-browser 没有这些）：性能追踪 Insight 解读（performance_start_trace）、Lighthouse 审计（lighthouse_audit）、CSS 级联检查（get_css_styles，能看被覆盖规则）、堆快照（take_heapsnapshot）。
  - agent-browser 独有而 chrome-devtools MCP 没有的，需要时直接用：网络 mock（`network route`）、HAR 录制、视频录制（`record`）、多会话并行、Core Web Vitals（`vitals`）、axe-core 无障碍审计（`a11y`）。
```

## 更新日志

- 2026-11-10 初版

我的分享就到这里，会持续更新。如果对你有用，欢迎点个赞或者 star 一下 😁
