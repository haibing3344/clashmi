// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://clashmi.uk',
	integrations: [
		starlight({
			title: 'ClashMi官网',
			locales: {
                root: {
                  label: '简体中文',
                  lang: 'zh-CN',
                },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/KaringX/clashmi' },
			],
			sidebar: [
				{
					label: '介绍',
					items: [
						{ label: '关于ClashMi', link: '/' },
					],
				},
				{
					label: '下载',
					items: [
						{ label: '立即下载', link: '/download' },
					],
				},
				{
					label: '教程',
					items: [
						{ label: '使用教程', link: '/tutorial' },
					],
				},
				{
					label: '机场推荐',
					items: [
						{ label: '机场推荐', link: 'https://jichangtuijian.uk' },
					],
				},
				{
					label: '常见问题',
					items: [
						{ label: 'FAQ', link: '/faq' },
					],
				},
				{
					label: '⭐️机场推荐',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '🚀优信云', badge: { text: 'IEPL/IPLC 高速专线', variant: 'success' },link: 'https://c.jichangs.com/youxinyun' },
						{ label: '🚀扬帆云', badge: { text: '老牌机场分站', variant: 'note' },link: 'https://c.jichangs.com/yfy' },
						{ label: '🚀疾风云', badge: { text: '可做备用机场', variant: 'tip' },link: 'https://c.jichangs.com/jifeng' },
						{ label: '🚀尔湾云', badge: { text: '性价比高', variant: 'danger' },link: 'https://c.jichangs.com/erwan' },
						{ label: '🚀网际快车', badge: { text: '性价比高', variant: 'caution' },link: 'https://c.jichangs.com/wjkc' },
					],
				},
			],
			head: [
				// Google AdSense
				{ 
					tag: 'script', 
					attrs: { 
						async: true, 
						src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2394457707130437',
						crossorigin: 'anonymous'
					} 
				},	
			],
		}),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
