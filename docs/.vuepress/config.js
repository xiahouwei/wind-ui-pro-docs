const base = process.env.NODE_ENV === 'development' ? '' : '/wind-ui-pro-docs/'
module.exports = {
	base,
	dest: './dist',
	title: 'wind-ui-pro',
	description: 'wind-ui-pro组件库文档。',
	themeConfig: {
		nav: [
		  // 一级导航
		  { text: '指南', link: '/guide/' },
		  // 下拉列表导航
		  {
			text: '了解更多',
			items: [
			  { text: 'github', link: 'https://github.com/ShuQingX/vue-comp-test', target: '_blank' },
			  { text: 'preview', link: 'https://shuqingx.github.io/vue-comp-test/', target: '_blank' }
			]
		  }
		],
		sidebar: {
			'/guide/': [
				['', '介绍'], // '' 等价于 /guide/
				{
					title: '组件',
					collapsable: false,
					children: [
						['../guide/Button.md', 'Button'],
						['../guide/Card.md', 'Card'],
						['../guide/AppContainer.md', 'AppContainer 布局容器'],
						['../guide/BarCode.md', 'BarCode 条形码'],
						['../guide/Select.md', 'Select 选择框'],
						['../guide/SelectTab.md', 'SelectTab 分页选择框'],
						['../guide/SelectCycle.md', 'SelectCycle 周期选择框'],
						['../guide/Image.md', 'Image 图片'],
						['../guide/QrCode.md', 'QrCode 二维码'],
						['../guide/Tag.md', 'Tag 标签']
					]
				}
			]
		}
	},
	plugins: ['demo-container']
}
