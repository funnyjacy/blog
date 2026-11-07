// 全站全局数据, import 后可在任何地方使用

export const SITE_TITLE = 'funnyjacy的博客';
export const SITE_DESCRIPTION = '个人随想与记录';

// giscus 评论配置:在 https://giscus.app/zh-CN 生成后填入,留空则文章页不显示评论
export const GISCUS = {
	repo: 'funnyjacy/blog',
	repoId: 'R_kgDOVlVWjg',
	category: 'Announcements',
	categoryId: 'DIC_kwDOVlVWjs4DKiFO',
	mapping: 'pathname',
	lang: 'zh-CN',
};

// Umami 访问统计:https://cloud.umami.is 注册并添加网站后,把两项填上即可启用,留空则不加载
export const UMAMI = {
	// Umami 网站详情页"跟踪脚本"里取
	src: 'https://cloud.umami.is/script.js',
	websiteId: '953181ca-ca29-43da-8662-0db94cb4c33a',
	// 公开统计页(后台 Share URL 开关生成),留空则页脚不显示
	shareUrl: 'https://cloud.umami.is/share/CzjsTp95q6QCIBB6',
};
