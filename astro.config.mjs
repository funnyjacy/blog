// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeKatex from 'rehype-katex';
import remarkImgattr from 'remark-imgattr';
import remarkMath from 'remark-math';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages 项目站:https://funnyjacy.github.io/blog/
	site: 'https://funnyjacy.github.io',
	base: '/blog',
	// 视口预取:进入首屏的站内链接全部提前拉取,点导航必命中缓存,零等待
	prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkImgattr, remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
