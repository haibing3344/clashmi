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
						{ label: '机场推荐', link: '/airport' },
					],
				},
				{
					label: '常见问题',
					items: [
						{ label: 'FAQ', link: '/faq' },
					],
				},
				{
					label: '⭐️科学上网梯子加速器机场推荐',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '🚀优信云', badge: { text: 'IEPL/IPLC 高速专线', variant: 'success' },link: 'https://a.suola.link/youxinyun' },
						{ label: '🚀扬帆云', badge: { text: '老牌机场分站', variant: 'note' },link: 'https://a.suola.link/yfy' },
						{ label: '🚀疾风云', badge: { text: '可做备用机场', variant: 'tip' },link: 'https://a.suola.link/jifeng' },
						{ label: '🚀尔湾云', badge: { text: '性价比高', variant: 'danger' },link: 'https://a.suola.link/erwan' },
						{ label: '🚀网际快车', badge: { text: '性价比高', variant: 'caution' },link: 'https://a.suola.link/wjkc' },
					],
				},
				{
					label: '其它代理客户端',
					items: [
						{ label: ' Shadowrocket(小火箭)', badge: { text: 'iOS专业网络工具', variant: 'success' }, link: 'https://shadowrocket.uk' },
						{ label: ' ClashMetaForAndroid', badge: { text: 'Android专业网络工具', variant: 'note' }, link: 'https://clashmeta.bid' },
						{ label: ' ClashForWindows', badge: { text: 'Windows平台代理工具', variant: 'tip' }, link: 'https://clashverge.uk' },
						{ label: ' ClashMi', badge: { text: '基于ClashMeta的跨平台代理客户端', variant: 'danger' }, link: 'https://clashmi.uk' },
						{ label: ' Flclash', badge: { text: '基于ClashMeta的多平台代理客户端', variant: 'caution' }, link: 'https://flclash.men' },
						{ label: ' Karing', badge: { text: '新一代网络代理工具,免费', variant: 'tip' }, link: 'https://karings.org' },
						{ label: ' Stash', badge: { text: '简单且强大的网络工具', variant: 'success' }, link: 'https://stashapp.uk' },
						{ label: ' Loon', badge: { text: 'iOS平台最强大的网络代理工具', variant: 'tip' }, link: 'https://nsloon.uk' },
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
				
				// SEO Meta Tags
				{ tag: 'meta', attrs: { name: 'description', content: 'ClashMi是一款基于Mihomo(Clash Meta)内核的移动端代理工具，完全免费且开源。' } },
				{ tag: 'meta', attrs: { name: 'keywords', content: 'ClashMi,ClashMi官网,ClashMi下载地址,Clash,Mihomo,代理工具,免费代理,开源代理' } },
				
				// Open Graph
				{ tag: 'meta', attrs: { property: 'og:title', content: 'ClashMi官网 - 免费开源的移动端代理工具' } },
				{ tag: 'meta', attrs: { property: 'og:description', content: 'ClashMi是一款基于Mihomo(Clash Meta)内核的移动端代理工具，完全免费且开源。' } },
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:url', content: 'https://clashmi.uk' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://clashmi.uk/clashmi-logo.png' } },
				
				// Twitter Card
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:title', content: 'ClashMi官网 - 免费开源的移动端代理工具' } },
				{ tag: 'meta', attrs: { name: 'twitter:description', content: 'ClashMi是一款基于Mihomo(Clash Meta)内核的移动端代理工具，完全免费且开源。' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://clashmi.uk/clashmi-logo.png' } },
				
				// Canonical URL
				{ tag: 'link', attrs: { rel: 'canonical', href: 'https://clashmi.uk' } },
				
				// Structured Data
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						"name": "ClashMi",
						"description": "ClashMi是一款基于Mihomo(Clash Meta)内核的移动端代理工具，完全免费且开源。",
						"url": "https://clashmi.uk",
						"applicationCategory": "NetworkingApplication",
						"operatingSystem": ["iOS", "Android", "Windows", "HarmonyOS"],
						"offers": {
							"@type": "Offer",
							"price": "0",
							"priceCurrency": "USD"
						},
						"author": {
							"@type": "Organization",
							"name": "ClashMi Team"
						}
					})
				},
			],
		}),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
