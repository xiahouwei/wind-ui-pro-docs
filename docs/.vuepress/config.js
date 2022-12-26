const base = process.env.NODE_ENV === 'development' ? '' : '/wind-ui-pro-docs/'
module.exports = {
	base,
	dest: './dist',
	title: 'wind-ui-pro',
	description: 'wind-ui-pro组件库文档。',
	themeConfig: {
		nav: [
		  { text: '组件', link: '/component/installation.html' }
		],
		sidebar: {
			'/component/': [
				{
					title: '开发指南',
					collapsable: false,
					children: [
						['../component/installation.md', '安装'],
						['../component/quickstart.md', '快速上手'],
					]
				},
				{
					title: '组件',
					collapsable: false,
					children: [
						{
							title: 'Layout',
							collapsable: false,
							children: [
								['../component/AppContainer.md', 'AppContainer 布局容器'],
								['../component/Collapse.md', 'Collapse 折叠面板']
							]
						},
						{
							title: 'Basic',
							collapsable: false,
							children: [
								['../component/Icon.md', 'Icon 图标'],
								['../component/Loading.md', 'Loading 加载'],
								['../component/Popover.md', 'Popover 弹出框']
							]
						},
						{
							title: 'Form',
							collapsable: false,
							children: [
								['../component/Select.md', 'Select 选择框'],
								['../component/SelectTab.md', 'SelectTab 分页选择框'],
								['../component/SelectCycle.md', 'SelectCycle 周期选择框'],
								['../component/Input.md', 'Input 输入框'],
								['../component/InputNumber.md', 'InputNumber 输入框'],
								['../component/Switch.md', 'Switch 开关'],
							]
						},
						{
							title: 'View',
							collapsable: false,
							children: [
								['../component/BarCode.md', 'BarCode 条形码'],
								['../component/QrCode.md', 'QrCode 二维码'],
								['../component/Image.md', 'Image 图片'],
								['../component/Tag.md', 'Tag 标签'],
								['../component/TreeVirtual.md', 'TreeVirtual 虚拟渲染树']
							]
						},
						{
							title: 'Action',
							collapsable: false,
							children: [
								['../component/Conifrm.md', 'Confirm 确认框'],
								['../component/Message.md', 'Message 消息提示'],
								['../component/ImagePreview.md', 'ImagePreview 图片预览'],
								['../component/Upload.md', 'Upload 上传文件']
							]
						},
						{
							title: 'Navigation',
							collapsable: false,
							children: [
								['../component/Link.md', 'Link 文字链接']
							]
						}
					]
				}
			]
		}
	},
	plugins: ['demo-container']
}
