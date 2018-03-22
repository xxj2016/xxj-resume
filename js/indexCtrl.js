angular.module('myApp', []).
controller('IndexCtrl', function ($scope) {
	$scope.ui = {
		userInfo: {
			name: '许徐杰', // 姓名
			logo: './img/resume.jpg', // 头像
			job: '前端工程师', // 求职意向
			nation: '汉族', // 民族
			status: '中共党员', // 政治面貌
			birthday: '1994年05月01日', // 生日
			birthplace: '广东揭阳揭东', // 籍贯
			nowLivesIn: '广东珠海', // 现居
			phone: '13726224979', // 电话
			email: '451450538@qq.com', // 邮箱
			qrcode: './img/qrcode.jpg' // 微信二维码
		},
		selfEvaluation: { // 自我评价
			content: '工作认真谨慎，有较强的责任感及学习新知识的能力，对前端发展和前沿技术具有浓厚的兴趣和学习精神，良好的沟通表达能力与团队合作能力、能够承受压力、能够服从公司安排。(2016.1主动离开学校，申请校外实习，迅速掌握前端开发技能，随后转正从事web前端开发，一直工作到现在)熟练使用前端技术Bootstrap、Angular.js、Angular、ionic进行pc端、webapp、Cordova快速开发,掌握小程序开发技能。目前使用angular2和ionic2开发前端项目, 个人最近在学习ng-zorro-antd（Angular5.0+Ant Design）。'
		},
		skill: [ // 专业技能
			{
				name: '专业技能',
				content: '前端方面熟练使用gulp、Bootstrap、Angular.js、Angular、Ionic、Css、JavaSctipt、Html、Jquery技术, 熟练开发 pc 和 app 。项目管理方面熟练使用Git+Sourcetree进行版本管理，个人 github(https://github.com/xxj2016)。'
			},
			{
				name: '办公技能',
				content: '熟练使用Office办公软件。'
			},
			{
				name: '輔助技能',
				content: '熟练使用Photoshop软件。'
			}
		],
		education: [ // 教育背景
			{
				date: '2013.09 - 2016.06',
				school: '广东科学技术职业学院',
				profession: '游戏软件',
				subject: 'Web技术课程、Android应用开发、IOS应用开发、Unity 3D、数据结构与算法......'
			}
		],
		works: [ // 工作经验
			{
				date: '2016.1 - 至今',
				company: '珠海市思捷先行信息技术有限公司',
				job: 'web前端开发工程师',
				workDescription: [
					'1、参与产品的需求分析和功能设计过程。 ',
					'2、参与公司项目的原型设计，界面设计。',
					'3、根据产品需求，分析并给出最优的页面前端架构解决方案。',
					'4、定期维护并更新前端开发规范。',
					'5、负责前端开发工作，不断优化用户体验，提升产品的兼容性和易用性。',
					'6、根据产品需求，运用Angular2／ionic2／Bootstrap／HTML5／CSS／JS等前端技术开发PC、手机、平板等终端设备上的web应用和app。',
				]
			}
		],
		projects: [ // 项目经验
			{
				name: '香洲区森林防火动态监控预警系统',
				date: '2017/6 - 2017/11',
				post: 'Web前端开发',
				company: '珠海市思捷先行信息技术有限公司',
				description: '香洲区森林防火动态监控预警系统产品属于应用于森林防火、大型储油企业防火、仓储业、粮库防火及其它防火行业的应用软件；其运行依托于“森林防火动态监控预警系统”服务器。软件包含网页版本和app(林警通)版本，都已上线。其含有后台管理、预警推送、实时监控、监控回放、地图概览、数据统计等多个功能模块。',
				dutys: [
					'1、参与产品的需求分析和功能设计过程。',
					'2、项目管理使用Git+Sourcetree进行版本管理。前端页面主要使Bbootstrap、Angular2; app开发使用了ionic2技术。 ',
					'3、根据产品设计原型开发完成前端核心代码，并和后端开发工程师进行协作实现产品的页面交互和数据逻辑展示。'
				],
				performance: '目前使用有 香洲区森林防火'
			},
			{
				name: '电商管理ERP系统',
				date: '2016/6 - 2016/11',
				post: 'Web前端开发',
				company: '珠海市思捷先行信息技术有限公司',
				description: '电商管理ERP系统属于应用于香港HKMOMALL电商网站，进行库存控制、调动价格、查看销售报表、资产查阅的管理系统。产品包含网页版本和webApp(Leader)版本，都已被公司应用。其含有仓储管理、销售管理、财务管理、销售管理、用户管理等多个功能模块。',
				dutys: [
					'1、参与产品的需求分析和功能设计过程。',
					'2、项目管理使用Git+Sourcetree进行版本管理。前端页面主要使用Bootstrap、Angular.js; webApp使用ionic1技术。 ',
					'3、根据产品设计原型开发完成前端核心代码，并和后端开发工程师进行协作实现产品的页面交互和数据逻辑展示。'
				],
				performance: '目前使用有 HKMOMALL'
			}
		],
		moreProjects: [
			'1、文华书城微信应用',
			'2、蜜悦法式烘焙'
		],
		hobby: '徒步、表演、口琴。' // 兴趣爱好
	}
})