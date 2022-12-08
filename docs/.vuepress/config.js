const base = process.env.NODE_ENV === 'development' ? '' : '/wind-ui-pro-docs/'
module.exports = {
	base,
	dest: './dist',
	title: 'wind-ui-pro',
	description: 'wind-ui-pro组件库文档。',
	themeConfig: {
		nav: [
		  // 一级导航
		  { text: '组件', link: '/component/' },
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
			'/component/': [
				['', '介绍'], // '' 等价于 /guide/
				{
					title: '组件',
					collapsable: false,
					children: [
						['../component/AppContainer.md', 'AppContainer 布局容器'],
						['../component/BarCode.md', 'BarCode 条形码'],
						['../component/Select.md', 'Select 选择框'],
						['../component/SelectTab.md', 'SelectTab 分页选择框'],
						['../component/SelectCycle.md', 'SelectCycle 周期选择框'],
						['../component/Icon.md', 'Icon 图标'],
						['../component/Loading.md', 'Loading 加载'],
						['../component/Popover.md', 'Popover 弹出框'],
						['../component/Input.md', 'Input 输入框'],
						['../component/Image.md', 'Image 图片'],
						['../component/QrCode.md', 'QrCode 二维码'],
						['../component/Tag.md', 'Tag 标签'],
						['../component/TreeVirtual.md', 'TreeVirtual 虚拟渲染树'],
						['../component/Conifrm.md', 'Confirm 确认框'],
						['../component/Message.md', 'Message 消息提示'],
						['../component/ImagePreview.md', 'ImagePreview 图片预览'],
						['../component/Upload.md', 'Upload 上传文件']
					]
				}
			]
		}
	},
	plugins: ['demo-container']
}
