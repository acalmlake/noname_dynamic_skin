'use strict';
decadeModule.import(function(lib, game, ui, get, ai, _status){
	/*
	十周年UI动皮使用说明：
	- 首先打开动态皮肤的开关，直接替换原有武将皮肤显示；
	- 目前不支持动态皮肤的切换功能；
	- 动态皮肤参数表在线文档链接：https://docs.qq.com/sheet/DS2Vaa0ZGWkdMdnZa；可以在群在线文档提供你设置好的参数
	- 所有相关的文件请放到	十周年UI/assets/dynamic目录下；
	- 关于格式请参考下面示例：
		武将名:{
			皮肤名:{
				name: "xxx",	//	必★填	骨骼名称，一般是yyy.skel，注意xxx不带后缀名.skel；
				action: "xxx",	//	可删掉	播放动作，xxx 一般是 DaiJi，目前手杀的骨骼文件需要填；
				x: [10, 0.5],	//	可删掉	[10, 0.5]相当于 left: calc(10px + 50%)，不填默认为[0, 0.5]；
				y: [10, 0.5],	//	可删掉	[10, 0.5]相当于 bottom: calc(10px + 50%)，不填默认为[0, 0.5]；
				scale: 0.5,		//	可删掉	缩放大小，不填默认为1；
				angle: 0,		//	可删掉	旋转角度，不填默认为0；
				speed: 1,		//	可删掉	播放速度，不填默认为1；
				hideSlots: ['隐藏的部件'],	// 隐藏不需要的部件，想知道具体部件名称请使用SpineAltasSplit工具查看
				clipSlots: ['裁剪的部件'],	// 剪掉超出头的部件，仅针对露头动皮，其他勿用
				background: "xxx.jpg",	//	可删掉	背景图片，注意后面要写后缀名，如.jpg .png等 
			}
		},
	- 为了方便得到动皮的显示位置信息，请在游戏选将后，用控制台或调试助手小齿轮执行以下代码(没用到的属性请删掉以免报错):
		game.me.stopDynamic();
		game.me.playDynamic({
			name: 'xxxxxxxxx',		// 勿删
			action: undefined,
			//speed: 1,
			loop: true,				// 勿删
			x: [0, 0.5],
			y: [0, 0.5],
			scale: 0.5,
			angle: 0,
			hideSlots: ['隐藏的部件'],	// 隐藏不需要的部件，想知道具体部件名称请使用SpineAltasSplit工具查看
			clipSlots: ['裁剪的部件'],	// 剪掉超出头的部件，仅针对露头动皮，其他勿用
		});
		// 这里可以改成  }, true);  设置右将动皮
	*/
	
	decadeUI.dynamicSkin = {
		dc_bailingyun: {//柏灵筠
            粽香馥郁: {
				name: '柏灵筠/粽香馥郁/zhujiemian_bolinjun1',
				x: [0,1.79],
				y: [0,-0.02],
				scale: 0.5,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '柏灵筠/粽香馥郁/zhujiemian_bolinjun2',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.47]
				},
			},
		},
		baosanniang: {//鲍三娘
            虎年七夕:{
				name: '鲍三娘/虎年七夕/XingXiang',
				x: [0,0.46],
				y: [0,0.36],
				scale: 0.42,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '鲍三娘/虎年七夕/BeiJing',
					scale: 0.4,
					x: [0, 0.69],
					y: [0, 0.5]
				},
			},
			柳娇桃艳:{
				name: '鲍三娘/柳娇桃艳/XingXiang',
				x: [0,0.43],
				y: [0,0.05],
				scale: 0.5,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '鲍三娘/柳娇桃艳/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.47]
				},
			},
			漫花剑俏: {
				name: '鲍三娘/漫花剑俏/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.32],
				y: [0, 0.44],
				scale: 0.96,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '鲍三娘/漫花剑俏/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '鲍三娘/漫花剑俏/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '鲍三娘/漫花剑俏/beijing',
					x: [0, 0.29],
					y: [0, 0.48],
					scale: 0.4,
				},
			},
            兔娇春浓: {
				name: '鲍三娘/兔娇春浓/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.07],
				y: [0, 0.23],
				scale: 1.3,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '鲍三娘/兔娇春浓/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '鲍三娘/兔娇春浓/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '鲍三娘/兔娇春浓/beijing',
					x: [0, 0.29],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '鲍三娘/兔娇春浓/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '鲍三娘/兔娇春浓/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
			嫣然一笑:{
				name: '鲍三娘/嫣然一笑/XingXiang',
				x: [0,-0.46],
				y: [0,0.16],
				scale: 0.45,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '鲍三娘/嫣然一笑/BeiJing',
					x: [0, 0.5],
					y: [0, 0.47],
					scale: 0.4,
				},
			},
        },
        beimihu: {//卑弥呼
			呼风唤雨:{
				name: '卑弥呼/呼风唤雨/XingXiang',
				x: [0,1],
				y: [0,-0.03],
				scale: 0.6,
				angle: -20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '卑弥呼/呼风唤雨/BeiJing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
					angle: -20,
				},
			},
            鬼渊蝶引:{
				name: '卑弥呼/鬼渊蝶引/XingXiang',
				x: [0,0.43],
				y: [0,0.02],
				scale: 0.64,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '卑弥呼/鬼渊蝶引/BeiJing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			缘法耀世: {
				name: '卑弥呼/缘法耀世/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.44],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '卑弥呼/缘法耀世/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '卑弥呼/缘法耀世/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '卑弥呼/缘法耀世/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			秘镜幽幻:{
				name: '卑弥呼/秘镜幽幻/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.02],
				y: [0,-0.09],
				angle: 22,
				scale: 1.04,
				shizhounian: true,
                //speed: 1,
				beijing: {
					name: '卑弥呼/秘镜幽幻/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
            逐鹿天下: {
				name: '卑弥呼/逐鹿天下/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.43],
				y: [0, 0.47],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '卑弥呼/逐鹿天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '卑弥呼/逐鹿天下/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '卑弥呼/逐鹿天下/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			忘却凡尘:{
				name: '卑弥呼/忘却凡尘/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.08],
				y: [0,0.26],
				scale: 0.8,
				angle: 5,
                //speed: 1,
				beijing: {
					name: '卑弥呼/忘却凡尘/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		ol_bianfuren: {//卞夫人
			玉露清辉:{
				name: '卞夫人/玉露清辉/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.43],
				y: [0,0.43],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '卞夫人/玉露清辉/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '卞夫人/玉露清辉/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '卞夫人/玉露清辉/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},
		bianxi: {//卞喜
			夺关袭寨: {
				name: '卞喜/夺关袭寨/daiji2',
				x: [0, 0.62],
				y: [0, 0.43],
				scale: 0.95,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '卞喜/夺关袭寨/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '卞喜/夺关袭寨/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '卞喜/夺关袭寨/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        bulianshi: {//步练师
			慈媛戏涧:{
				name: '步练师/慈媛戏涧/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1],
				y: [0,0.25],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '步练师/慈媛戏涧/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			绘鸢黛情:{
				name: '步练师/绘鸢黛情/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,-0.494],
				y: [0,0.362],
				scale: 1.17,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '步练师/绘鸢黛情/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			鸾凤和鸣: {
				name: '步练师/鸾凤和鸣/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '步练师/鸾凤和鸣/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '步练师/鸾凤和鸣/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '步练师/鸾凤和鸣/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			牛年七夕:{
				name: '步练师/牛年七夕/XingXiang',
				x: [0,0.35],
				y: [0,0.16],
				scale: 0.7,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '步练师/牛年七夕/BeiJing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            清神畅情: {
				name: '步练师/清神畅情/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.39],
				y: [0, 0.4],
				scale: 1.14,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '步练师/清神畅情/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '步练师/清神畅情/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '步练师/清神畅情/beijing',
					x: [0, 0.09],
					y: [0, 0.35],
					scale: 0.4,
				},
			},
			缘后雅志: {
				name: '步练师/缘后雅志/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.47],
				y: [0, 0.47],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '步练师/缘后雅志/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '步练师/缘后雅志/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '步练师/缘后雅志/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战场绝版: {
				name: '步练师/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.51],
				y: [0, 0.59],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '步练师/战场绝版/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '步练师/战场绝版/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '步练师/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        buzhi: {//步骘
			鸿笔丽藻:{
				name: '步骘/鸿笔丽藻/XingXiang',
				x: [0,0.11],
				y: [0,0.31],
				scale: 0.37,
				angle: 8,
                //speed: 1,
				//action: 'DaiJi',
				gongji: 'ChuChang',
				beijing: {
					name: '步骘/鸿笔丽藻/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
            踏海拓疆: {
				name: '步骘/踏海拓疆/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.33],
				y: [0, 0.54],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '步骘/踏海拓疆/chuchang',
					scale: 1.3,
					action: 'play',
				},
				gongji: {
					name: '步骘/踏海拓疆/chuchang',
					scale: 1.4,
					action: 'play',
				},
				beijing: {
					name: '步骘/踏海拓疆/beijing',
					x: [0, 0.5],
					y: [0, 0.3],
					scale: 0.6,
				},
			},
        },
        caifuren: {//蔡夫人
			计上心来: {
				name:'蔡夫人/计上心来/XingXiang',
				x: [0, 0.68],
				y: [0, 0.44],
				scale: 1,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '蔡夫人/计上心来/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			金玉熏心: {
				name: '蔡夫人/金玉熏心/daiji2',
				x: [0, 0.68],
				y: [0, 0.44],
				scale: 1,
				angle: 25,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡夫人/金玉熏心/chuchang',
					scale: 0.5,
					action: 'play',
				},
				gongji: {
					name: '蔡夫人/金玉熏心/chuchang',
					scale: 0.6,
					action: 'play',
				},
				beijing: {
					name: '蔡夫人/金玉熏心/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            名门妖媛: {
				name: '蔡夫人/名门妖媛/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.52],
				y: [0, 0.55],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡夫人/名门妖媛/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '蔡夫人/名门妖媛/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '蔡夫人/名门妖媛/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            柔情钰露: {
                name: '蔡夫人/柔情钰露/daiji',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.34],
				y: [0,0.2],
				scale: 0.8,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡夫人/柔情钰露/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '蔡夫人/柔情钰露/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '蔡夫人/柔情钰露/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "柔情钰露"
            },
			绮丽繁花:{
				name: '蔡夫人/绮丽繁花/xingxiang',
				version:"4.0",
				x: [0,1.12],
				y: [0,0.5],
				scale: 0.7,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '蔡夫人/绮丽繁花/beijing',
					version:"4.0",
					scale: 0.7,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},			
        },
        caiwenji: {//蔡文姬
			爆料皮肤:{
				name: '蔡文姬/爆料皮肤/XingXiang',
				x: [0,0.71],
				y: [0,0.11],
				scale: 0.55,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '蔡文姬/爆料皮肤/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            才颜双绝: {
				name: '蔡文姬/才颜双绝/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.35],
				y: [0, 0.55],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡文姬/才颜双绝/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '蔡文姬/才颜双绝/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '蔡文姬/才颜双绝/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			春晓明媚: {
                name: "蔡文姬/春晓明媚/xingxiang",
				x: [0,0.81],
				y: [0,0.44],
				scale: 0.9,
                speed: 1,	
				json: true, 
				version:"4.0",
                gongji: {  
					name:"蔡文姬/春晓明媚/jineng01",		          
					x: [0,0.71],
					y: [0,0.4],
					scale: 1,
					version:"4.0",
					json: true  
               	},      
                zhishixian: {
			   		name: '蔡文姬/春晓明媚/jineng02',  
					scale: 0.8,
					speed: 0.5,
					delay: 0.5,  
					version:"4.0",json: true,  
					effect: {  
						name: '蔡文姬/春晓明媚/jineng02', 
						scale: 0.6,
						speed: 0.7,
						delay: 0.2,
						version:"4.0",json: true  
					}                
				}  ,               
               	beijing: {
					name: '蔡文姬/春晓明媚/beijing',
					x: [0,1.72],
					y: [0,0.43],
					scale: 0.6,
					version:"4.0",json: true  
				},
         	},
            抚弦绘黛: {
                name: '蔡文姬/抚弦绘黛/daiji',
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.9],
                y: [0, 0.2],
                scale: 0.5,
                angle: -5,
                shizhounian: true,
                chuchang: {
					name: '蔡文姬/抚弦绘黛/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '蔡文姬/抚弦绘黛/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '蔡文姬/抚弦绘黛/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },                      		
			冠绝天下:{
				name: '蔡文姬/冠绝天下/XingXiang',
				x: [0,0.71],
				y: [0,0.11],
				scale: 0.55,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '蔡文姬/冠绝天下/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			红月悲歌: {
				name: '蔡文姬/红月悲歌/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.3],
				y: [0, 0.5],
				scale: 0.92,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡文姬/红月悲歌/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '蔡文姬/红月悲歌/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '蔡文姬/红月悲歌/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			花好月圆: {
				name: '蔡文姬/花好月圆/daiji2',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡文姬/花好月圆/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '蔡文姬/花好月圆/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '蔡文姬/花好月圆/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '蔡文姬/花好月圆/JiSha',
						x: [0, 0.54],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			泪捻琵琶:{
				name: '蔡文姬/泪捻琵琶/XingXiang',
				x: [0,0.6],
				y: [0,0.35],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '蔡文姬/泪捻琵琶/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			离乡思浓: {
				name: '蔡文姬/离乡思浓/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.15],
				y: [0, 0.5],
				scale: 0.85,
				angle: -30,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡文姬/离乡思浓/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '蔡文姬/离乡思浓/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '蔡文姬/离乡思浓/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			漫月思故: {
                name: "蔡文姬/漫月思故/daiji",
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.1],
                y: [0, 0.25],
                scale: 0.5,
                angle: 5,
                shizhounian: true,
				chuchang: {
					name: '蔡文姬/漫月思故/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '蔡文姬/漫月思故/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '蔡文姬/漫月思故/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },
			兔年冬日:{
				name: '蔡文姬/兔年冬日/XingXiang',
				x: [0,0.51],
				y: [0,0.36],
				angle: 11,
				scale: 0.43,
				gongji: 'TeShu',
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '蔡文姬/兔年冬日/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			婉娩流逸: {
				name: '蔡文姬/婉娩流逸/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.45],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡文姬/婉娩流逸/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '蔡文姬/婉娩流逸/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '蔡文姬/婉娩流逸/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战场绝版: {
                name: '蔡文姬/战场绝版/daiji',
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.35],
                y: [0, 0.3],
                scale: 0.5,
                angle: 10,
                shizhounian: true,
                chuchang: {
					name: '蔡文姬/战场绝版/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '蔡文姬/战场绝版/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '蔡文姬/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },
			战场荣耀: {
				teshu: 'play2',
				shan: 'play3',
				name: '蔡文姬/战场荣耀/daiji2',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡文姬/战场荣耀/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '蔡文姬/战场荣耀/chuchang',
					x: [0,0.5],
					y: [0,0.5],
					scale: 1,	
					action: 'play',
				},
				beijing: {
					name: '蔡文姬/战场荣耀/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '蔡文姬/战场荣耀/shouji2',
					scale: 0.5,
					speed: 1.2,
					delay: 0.3,
					effect: {
						name: '蔡文姬/战场荣耀/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.35,
					},
				},
			},   
      	},
        caiyong: {//蔡邕
            博学绘法: {//出场
				name: '蔡邕/博学绘法/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.28],
				y: [0, 0.44],
				scale: 0.88,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蔡邕/博学绘法/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '蔡邕/博学绘法/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '蔡邕/博学绘法/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		caizhenji:{
			兔年冬日:{
				name: '蔡贞姬/兔年冬日/XingXiang',
				x: [0,0.51],
				y: [0,0.36],
				angle: 11,
				scale: 0.43,
				gongji: 'TeShu',
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '蔡贞姬/兔年冬日/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
		},
        caoang: {//曹昂
            竭战鳞伤:{
				name: '曹昂/竭战鳞伤/XingXiang',
				x: [0,-0.27],
				y: [0,0.38],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹昂/竭战鳞伤/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			醉玉颓山: {
				name: '曹昂/醉玉颓山/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.32],
				y: [0, 0.48],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹昂/醉玉颓山/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '曹昂/醉玉颓山/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '曹昂/醉玉颓山/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        caocao: {//曹操
			/*临渊观海:{
				name: '曹操/临渊观海/XingXiang',
				x: [0,0.5],
				y: [0,0],
				scale: 0.55,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹操/逐鹿天下/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},*/
			魏武东临: {
				name: '曹操/魏武东临/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.46],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹操/魏武东临/chuchang',
					scale: 0.4,
					action: 'play',
				},
				gongji: {
					name: '曹操/魏武东临/chuchang',
					scale: 0.5,
					action: 'play',
				},
				beijing: {
					name: '曹操/魏武东临/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '曹操/魏武东临/jisha',
						scale: 0.6,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			雄吞天下:{
				name: '曹操/雄吞天下/XingXiang',
				x: [0,0.11],
				y: [0,0.19],
				scale: 0.62,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹操/雄吞天下/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			英杰会聚: {
				name: '曹操/英杰会聚/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.44],
				y: [0, 0.44],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹操/英杰会聚/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '曹操/英杰会聚/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '曹操/英杰会聚/beijing',
					x: [0, 0.18],
					y: [0, 0.34],
					scale: 0.4,
				},
			},
			逐鹿天下:{
				name: '曹操/逐鹿天下/XingXiang',
				x: [0,0.5],
				y: [0,0],
				scale: 0.55,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹操/逐鹿天下/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        caochong: {//曹冲
            五陵英少:{
				name: '曹冲/五陵英少/XingXiang',
				x: [0,1],
				y: [0,-0.22],
				scale: 0.84,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹冲/五陵英少/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			猪年春节:{
				name: '曹冲/猪年春节/XingXiang',
				x: [0,0.75],
				y: [0,0.53],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹冲/猪年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.4]
				},
			},
			资优神童: {
				name: '曹冲/资优神童/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.3],
				y: [0, 0.53],
				scale: 0.9,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹冲/资优神童/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '曹冲/资优神童/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '曹冲/资优神童/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        caochun: {//曹纯
            虎年春节:{
				name: '曹纯/虎年春节/XingXiang',
				x: [0,0.55],
				y: [0,0.33],
				scale: 0.45,
				angle: 8,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹纯/虎年春节/BeiJing',
					scale: 0.4,
					x: [0, -0.3],
					y: [0, 0.45]
				},
			},
			险棋激战: {
				name: '曹纯/险棋激战/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.34],
				y: [0, 0.54],
				scale: 0.94,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹纯/险棋激战/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '曹纯/险棋激战/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '曹纯/险棋激战/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			长坂败备:{
				name: '曹纯/长坂败备/XingXiang',
				x: [0,1.1],
				y: [0,-0.17],
				scale: 0.7,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹纯/长坂败备/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			虎啸龙渊: {
				name: '曹纯/虎啸龙渊/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.5],
				y: [0, 0.45],
				scale: 1.14,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹纯/虎啸龙渊/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '曹纯/虎啸龙渊/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '曹纯/虎啸龙渊/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '曹纯/虎啸龙渊/shouji2',
					scale: 0.7,
					speed: 0.8,
					delay: 0.3,
					effect: {
						name: '曹纯/虎啸龙渊/shouji',
						scale: 0.65,
						speed: 0.6,
						delay: 0.4,
					},
				},
				special: {
					变身: {
						hp: 2,
						name: 'caochun/虎啸龙渊2',
					},
					condition: {
						lowhp: {
							transform: ['变身'],
							recover: false,
						},
					},
				},
			},
			虎啸龙渊2: {
				name: '曹纯/虎啸龙渊2/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.5],
				y: [0, 0.35],
				scale: 1.14,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹纯/虎啸龙渊2/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '曹纯/虎啸龙渊2/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '曹纯/虎啸龙渊2/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '曹纯/虎啸龙渊2/shouji2',
					scale: 0.6,
					speed: 0.6,
					delay: 0.3,
					effect: {
						name: '曹纯/虎啸龙渊2/shouji',
						scale: 0.6,
						speed: 0.8,
						delay: 0.4,
					},
				},
			},
        },
        caohong: {//曹洪
			疾驰救援:{
				name: '曹洪/疾驰救援/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.25],
				y: [0,0.15],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '曹洪/疾驰救援/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			众剑鞘厉: {
				name: '曹洪/众剑鞘厉/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.34],
				y: [0, 0.5],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹洪/众剑鞘厉/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '曹洪/众剑鞘厉/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '曹洪/众剑鞘厉/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		caohua: {//曹华
			彩蝶恋花: {
				name: '曹华/彩蝶恋花/daiji2',
				shan: 'play3',
				x: [0, 0.52],
				y: [0, 0.41],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹华/彩蝶恋花/chuchang',
					action: 'play',
					scale: 0.75,
				},
				gongji: {
					name: '曹华/彩蝶恋花/chuchang2',
					action: 'gongji',
					scale: 0.6,
				},
				teshu: {
					name: '曹华/彩蝶恋花/chuchang2',
					action: 'jineng',
					scale: 0.6,
				},
				beijing: {
					name: '曹华/彩蝶恋花/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '曹华/彩蝶恋花/shouji2',
					scale: 0.5,
					speed: 0.6,
					delay: 0.1,
					effect: {
						name: '曹华/彩蝶恋花/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.3,
					},
				},
			},
        },
        caojie: {//曹节
			凰梦汉回: {
				name: '曹节/凰梦汉回/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.34],
				y: [0, 0.5],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹节/凰梦汉回/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '曹节/凰梦汉回/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '曹节/凰梦汉回/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            凤历迎春: {
                name: '曹节/凤历迎春/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.3],
				y: [0, 0.4],
				scale: 0.9,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹节/凤历迎春/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '曹节/凤历迎春/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '曹节/凤历迎春/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "凤历迎春"
            },			
			战场绝版: {
				name: '曹节/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.3],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹节/战场绝版/chuchang',
					scale: 0.85,
					action: 'play',
				},
				gongji: {
					name: '曹节/战场绝版/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '曹节/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			派药治伤:{
				name: '曹节/派药治伤/xingxiang',
				version:"4.0",
				x: [0,0.6],
				y: [0,0.4],
				scale: 0.9,
				angle: 20,
                //speed: 1,
				beijing: {
					name: '曹节/派药治伤/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			猪年大雪:{
				name: '曹节/猪年大雪/XingXiang',
				x: [0,0.91],
				y: [0,0.05],
				scale: 0.6,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹节/猪年大雪/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        caojinyu: {//曹金玉
			惊鸿倩影: {//无出场
				name: '曹金玉/惊鸿倩影/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.21],
				y: [0, 0.45],
				scale: 0.92,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹金玉/惊鸿倩影/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '曹金玉/惊鸿倩影/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '曹金玉/惊鸿倩影/beijing',
					x: [0, 0.1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			瓷语青花: {
				name: '曹金玉/瓷语青花/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.42],
				y: [0,0.34],
				angle: 14,
				scale: 1.13,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹金玉/瓷语青花/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '曹金玉/瓷语青花/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.85,
				},
				beijing: {
					name: '曹金玉/瓷语青花/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '曹金玉/瓷语青花/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.2,
					effect: {
						name: '曹金玉/瓷语青花/shouji',
						scale: 0.5,
						speed: 1,
						delay: 0.4,
					},
				},
			},
			惊鸿倩影经典版: {
				name: '曹金玉/惊鸿倩影/daiji',
				teshu: 'play2',
				shan: 'play3',
				x: [0, -0.1],
				y: [0, 0.35],
				scale: 0.55,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                // chuchang: {
					// name: '曹金玉/惊鸿倩影/chuchang',
					// scale: 0.8,
					// action: 'play',
				// },
				// gongji: {
					// name: '曹金玉/惊鸿倩影/chuchang',
					// scale: 1,
					// action: 'play',
				// },
				beijing: {
					name: '曹金玉/惊鸿倩影/原版背景/beijing',
					x: [0, -0.1],
					y: [0, 0.35],
					scale: 0.55,
					speed: 1.1,
				},
			},
			瑞雪纷华: {
				name: '曹金玉/瑞雪纷华/daiji2',
				x: [0, 0.4],
				y: [0, 0.43],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹金玉/瑞雪纷华/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '曹金玉/瑞雪纷华/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '曹金玉/瑞雪纷华/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        caopi: {//曹丕
			爆料皮肤:{
				name: '曹丕/爆料皮肤/XingXiang',
				x: [0,0.02],
				y: [0,0.2],
				angle: 10,
				scale: 0.4,
                speed: 1.5,
				//action: 'DaiJi',
				beijing: {
					name: '曹丕/爆料皮肤/BeiJing',
					scale: 0.3,
					x: [0, 1.7],
					y: [0, 0.5]
				},
			},
            牛年清明:{
				name: '曹丕/牛年清明/XingXiang',
				x: [0,0.6],
				y: [0,0.07],
				scale: 0.65,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹丕/牛年清明/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			魏王称帝: {
				name: '曹丕/魏王称帝/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.37],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹丕/魏王称帝/chuchang',
					scale: 0.95,
					action: 'play',
				},
				gongji: {
					name: '曹丕/魏王称帝/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '曹丕/魏王称帝/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			月夜情满: {
				name: '曹丕/月夜情满/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.39],
				y: [0, 0.49],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹丕/月夜情满/chuchang',
					scale: 0.95,
					action: 'play',
				},
				gongji: {
					name: '曹丕/月夜情满/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '曹丕/月夜情满/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			猪年端午:{
				name: '曹丕/猪年端午/XingXiang',
				x: [0,0.3],
				y: [0,0.25],
				scale: 0.6,
				angle: -5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹丕/猪年端午/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        caoren: {//曹仁
			国之柱石:{
				name: '曹仁/国之柱石/XingXiang',
				x: [0,0.06],
				y: [0,0.52],
				scale: 0.32,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹仁/国之柱石/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
            坚石铁壁: {
				name: '曹仁/坚石铁壁/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.38],
				y: [0, 0.55],
				scale: 0.72,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹仁/坚石铁壁/chuchang',
					scale: 1.05,
					action: 'play',
				},
				gongji: {
					name: '曹仁/坚石铁壁/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '曹仁/坚石铁壁/beijing',
					x: [0,0.73],
					y: [0,1.27],
					scale: 0.6,	
				},
			},
        },
        caorui: {//曹叡
            睥睨天下:{
				name: '曹叡/睥睨天下/XingXiang',
				x: [0,1.3],
				y: [0,0],
				scale: 0.7,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹叡/睥睨天下/BeiJing',
					scale: 0.4,
					x: [0, -0.8],
					y: [0, 0.5]
				},
			},
			情意相投: {
				name: '曹叡/情意相投/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.5],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹叡/情意相投/chuchang',
					scale: 1.05,
					action: 'play',
				},
				gongji: {
					name: '曹叡/情意相投/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '曹叡/情意相投/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			玺握天下: {
				name: '曹叡/玺握天下/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹叡/玺握天下/chuchang',
					scale: 1.05,
					action: 'play',
				},
				gongji: {
					name: '曹叡/玺握天下/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '曹叡/玺握天下/beijing',
					x: [0, 1.08],
					y: [0, 0.4],
					scale: 0.4,
				},
			},
			月夜情满: {
				name: '曹叡/月夜情满/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.35],
				y: [0, 0.5],
				scale: 0.82,
				angle: -5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹叡/月夜情满/chuchang',
					scale: 0.65,
					action: 'play',
				},
				gongji: {
					name: '曹叡/月夜情满/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '曹叡/月夜情满/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战场绝版: {
				name: '曹叡/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.35],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹叡/战场绝版/chuchang',
					scale: 1.05,
					action: 'play',
				},
				gongji: {
					name: '曹叡/战场绝版/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '曹叡/战场绝版/beijing',
					x: [0, 0.1],
					y: [0, 0.52],
					scale: 0.4,
				},
			},
        },
		caoshuang: {//曹爽
            受诏专权: {
                name: '曹爽/受诏专权/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.67],
				y: [0,0.29],
				scale: 0.91,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '曹爽/受诏专权/jineng01',
					version:"4.0",
				    json: true,
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '曹爽/受诏专权/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '曹爽/受诏专权/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '曹爽/受诏专权/jineng02',
					version:"4.0",
				    json: true,
					scale: 0.6,
					speed: 0.6,
					delay: 0.4,
				},
                skinName: "受诏专权"
            },
        },
		caosong: {//曹嵩
			宴迎高朋:{
				name: '曹嵩/宴迎高朋/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.52],
				y: [0,0.23],
				scale: 1.25,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '曹嵩/宴迎高朋/jineng01',
					version:"4.0",
				    json: true,
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '曹嵩/宴迎高朋/jineng01',
					version:"4.0",
				    json: true,
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '曹嵩/宴迎高朋/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '曹嵩/宴迎高朋/jineng02',
					version:"4.0",
				    json: true,
					scale: 0.6,
					speed: 0.7,
					delay: 0.4,
				},
			},
        },
		caoxiancaohua: {//曹宪曹华
			娇媚芙蓉:{
				name: '曹宪曹华/娇媚芙蓉/xingxiang',
				version:"4.0",
				//json: true,
				x: [0,1.25],
				y: [0,0.31],
				scale: 0.7,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '曹宪曹华/娇媚芙蓉/beijing',
					version:"4.0",
					json: true,
					scale: 0.5,
					x: [0, 0.3],
					y: [0, 0.5]
				},
			},
        },
        caoxing: {//曹性
            横马张弓: {
				name: '曹性/横马张弓/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.65],
				y: [0, 0.35],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹性/横马张弓/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '曹性/横马张弓/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '曹性/横马张弓/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		caoxiu: {//曹休
            骁勇金衔: {
				name: '曹休/骁勇金衔/daiji2',
				shan: 'play3',
				x: [0, 0.6],
				y: [0, 0.4],
				scale: 1.1,
				angle: -5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹休/骁勇金衔/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '曹休/骁勇金衔/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '曹休/骁勇金衔/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '曹休/骁勇金衔/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '曹休/骁勇金衔/shouji2',
					scale: 0.6,
					speed: 0.5,
					delay: 0.4,
					effect: {
						name: '曹休/骁勇金衔/shouji',
						scale: 0.6,
						speed: 0.5,
						delay: 0.5,
					},
				},
			},
        },
        caoying: {//曹婴
			锋芒毕露:{
				name: '曹婴/锋芒毕露/XingXiang',
				x: [0,0.4],
				y: [0,-0.1],
				scale: 0.7,
				angle: 5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹婴/锋芒毕露/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            巾帼花武: {
                name: '曹婴/巾帼花武/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.5],
                y: [0, 0.38],
                scale: 1.05,
                angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹婴/巾帼花武/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '曹婴/巾帼花武/chuchang',
					scale: 1.4,
					action: 'play',
				},
				beijing: {
					name: '曹婴/巾帼花武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },			
			水清濯缨:{
				name: '曹婴/水清濯缨/XingXiang',
				x: [0,-0.93],
				y: [0,0.3],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹婴/水清濯缨/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			兔年春节:{
				name: '曹婴/兔年春节/XingXiang',
				x: [0,0.61],
				y: [0,0.19],
				scale: 0.55,
				angle: -15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹婴/兔年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			魏缨凤鸣: {
				name: '曹婴/魏缨凤鸣/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.18],
				y: [0, 0.45],
				scale: 0.95,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹婴/魏缨凤鸣/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '曹婴/魏缨凤鸣/chuchang',
					scale: 1.4,
					action: 'play',
				},
				beijing: {
					name: '曹婴/魏缨凤鸣/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		caozhang: {//曹彰
			神勇壮猛:{
				name: '曹彰/神勇壮猛/xingxiang',
				x: [0,1.07],
				y: [0,0.27],
				angle: -5,
				scale: 0.74,
				version:"4.0",
				json:true,
				gongji:{
					name: '曹彰/神勇壮猛/xingxiang',
					x: [0,0.62],
					y: [0,0.42],
					angle: -5,
					scale: 0.74,
					version:"4.0",
					json:true,
				},
				beijing: {
					name: '曹彰/神勇壮猛/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json:true,
				},	
			},
		},
        caozhen: {//曹真
			虎年春节:{
				name: '曹真/虎年春节/XingXiang',
				x: [0,0.36],
				y: [0,-0.05],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹真/虎年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.3],
					y: [0, 0.5]
				},
			},
			勋业盖世: {
				name: '曹真/勋业盖世/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.45],
				y: [0, 0.43],
				scale: 0.88,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹真/勋业盖世/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '曹真/勋业盖世/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '曹真/勋业盖世/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			骁勇金衔: {
				name: '曹真/骁勇金衔/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.45],
				y: [0, 0.43],
				scale: 0.88,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹真/骁勇金衔/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '曹真/骁勇金衔/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '曹真/骁勇金衔/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '曹真/骁勇金衔/shouji2',
					scale: 0.4,
					speed: 0.5,
					delay: 0.3,
					effect: {
						name: '曹真/骁勇金衔/shouji',
						scale: 0.5,
						speed: 0.6,
						delay: 0.3,
					},
				},
			},
        },
        caozhi: {//曹植
			七步绝章: {
				name: '曹植/七步绝章/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.3],
				y: [0, 0.51],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '曹植/七步绝章/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '曹植/七步绝章/chuchang',
					scale: 0.75,
					action: 'play',
				},
				beijing: {
					name: '曹植/七步绝章/beijing',
					x: [0, -0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            虚拟天团: {
             
					name: '曹植/虚拟天团/daiji2',
					teshu: 'play2',
					shan: 'play3',
					x: [0, 0.45],
					y: [0, 0.4],
					scale: 1,
					angle: 0,
					//speed: 1,
					shizhounian: true,
					chuchang: {
						name: '曹植/虚拟天团/chuchang',
						scale: 0.6,
						action: 'play',
					},
					gongji: {
						name: '曹植/虚拟天团/chuchang',
						scale: 0.75,
						action: 'play',
					},
					beijing: {
						name: '曹植/虚拟天团/beijing',
						x: [0, -0.5],
						y: [0, 0.5],
						scale: 0.4,
					},
				
                skinName: "虚拟天团"
            },			
			鼠年端午:{
				name: '曹植/鼠年端午/XingXiang',
				x: [0,0.52],
				y: [0,0.22],
				scale: 0.72,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '曹植/鼠年端午/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			玉露清辉:{
				name: '曹植/玉露清辉/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.57],
				y: [0,0.37],
				scale: 1.05,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '曹植/玉露清辉/jineng01',
					version:"4.0",
				    json: true,
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '曹植/玉露清辉/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '曹植/玉露清辉/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		chendao:{
			白毦当先:{
				name: '陈到/白毦当先/xingxiang',
				x: [0,1.08],
				y: [0,0.25],
				angle: 0,
				scale: 1,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"陈到/白毦当先/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					version:"4.0",
					json: true  
				   },    
				beijing: {
					name: '陈到/白毦当先/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale: 0.6,
				},

			}
		},
		chendeng:{//陈登
			举樽贺穗:{
				name: '陈登/举樽贺穗/xingxiang',
				x: [0,0.65],
				y: [0,0.2],
				scale: 1,
				angle: 0,
				version: '4.0',  
				json: true,   
				shizhounian: true,
				gongji: {  
					name:"陈登/举樽贺穗/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					version:"4.0",
					json: true ,
					speed:2,
				}, 
				beijing: {
					name: '陈登/举樽贺穗/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale:0.6
				},

			},

		},
        chengong: {//陈宫
			一战而就: {
				name: '陈宫/一战而就/daiji2',
				x: [0, 0.44],
				y: [0, 0.49],
				scale: 0.75,
				angle: -15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陈宫/一战而就/chuchang',
					scale: 0.85,
					action: 'play',
				},
				gongji: {
					name: '陈宫/一战而就/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '陈宫/一战而就/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        chenlin: {//陈琳
			笔篆凌云: {
				name: '陈琳/笔篆凌云/daiji2',
				x: [0, 0.35],
				y: [0, 0.45],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陈琳/笔篆凌云/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '陈琳/笔篆凌云/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '陈琳/笔篆凌云/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			重阳闲趣: {
				name: '陈琳/重阳闲趣/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.44],
				y: [0, 0.45],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陈琳/重阳闲趣/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '陈琳/重阳闲趣/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '陈琳/重阳闲趣/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		chenqun: {//陈群
			贵雅清丽:{
				name: '陈群/贵雅清丽/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.38],
				y: [0,0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '陈群/贵雅清丽/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        chengyu: {//程昱
			腹蕴千军: {
				name: '程昱/腹蕴千军/daiji2',
				x: [0, 0.64],
				y: [0, 0.57],
				scale: 0.6,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '程昱/腹蕴千军/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '程昱/腹蕴千军/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '程昱/腹蕴千军/beijing',
					x: [0, 0.29],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			泰山捧日:{
				name: '程昱/泰山捧日/XingXiang',
				x: [0,0.6],
				y: [0,0.05],
				scale: 0.6,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '程昱/泰山捧日/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			
        },
        daqiao: {//大乔
			花好月圆: {
				name: '大乔/花好月圆/daiji2',
				x: [0, 0.5],
				y: [0, 0.5],
				scale: 0.8,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '大乔/花好月圆/chuchang',
					//version:"4.0",
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '大乔/花好月圆/chuchang',
					//version:"4.0",
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '大乔/花好月圆/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '大乔/花好月圆/JiSha',
						x: [0, 0.54],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			绝世之姿:{
				name: '大乔/绝世之姿/XingXiang',
				x: [0,0.44],
				y: [0,0.23],
				scale: 0.5,
				angle: 12,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '大乔/绝世之姿/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			清萧清丽: {
				name: '大乔/清萧清丽/daiji2',
				x: [0, 0.47],
				y: [0, 0.33],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '大乔/清萧清丽/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '大乔/清萧清丽/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '大乔/清萧清丽/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			软语香花: {
				name: '大乔/软语香花/daiji2',
				x: [0, 0.28],
				y: [0, 0.52],
				scale: 1.65,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '大乔/软语香花/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '大乔/软语香花/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '大乔/软语香花/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			鼠年春分:{
				name: '大乔/鼠年春分/XingXiang',
				x: [0,-1.3],
				y: [0,0.19],
				scale: 0.58,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '大乔/鼠年春分/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			衣垂绿川:{
				name: '大乔/衣垂绿川/XingXiang',
				x: [0,1],
				y: [0,0.25],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '大乔/衣垂绿川/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			战场绝版: {
				name: '大乔/战场绝版/daiji2',
				x: [0, 0.55],
				y: [0, 0.47],
				scale: 0.92,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '大乔/战场绝版/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '大乔/战场绝版/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '大乔/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			猪年七夕:{
				name: '大乔/猪年七夕/XingXiang',
				x: [0,-0.01],
				y: [0,0.03],
				scale: 0.56,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '大乔/猪年七夕/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        daxiaoqiao: {//大小乔
			娇卧佳黛: {
				name: '大小乔/娇卧佳黛/daiji2',
				x: [0, 0.45],
				y: [0, 0.55],
				scale: 0.7,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '大小乔/娇卧佳黛/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '大小乔/娇卧佳黛/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '大小乔/娇卧佳黛/beijing',
					x: [0, 1.4],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			战场绝版: {
				name: '大小乔/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.53],
				scale: 0.7,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '大小乔/战场绝版/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '大小乔/战场绝版/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '大小乔/战场绝版/beijing',
					x: [0, 0.29],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        dengai: {//邓艾
			神兵天降:{
				name: '邓艾/神兵天降/XingXiang',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.71],
				y: [0,0.27],
				scale: 0.62,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '邓艾/神兵天降/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			五谷蕃盛: {
				name: '邓艾/五谷蕃盛/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.48],
				y: [0, 0.39],
				scale: 0.92,
				angle: 12,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '邓艾/五谷蕃盛/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '邓艾/五谷蕃盛/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '邓艾/五谷蕃盛/beijing',
					x: [0, -0.29],
					y: [0, 0.65],
					scale: 0.4,
				},
			},
			虚拟天团: {
				name: '邓艾/虚拟天团/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.53],
				y: [0,0.34],
				scale: 1,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '邓艾/虚拟天团/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '邓艾/虚拟天团/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '邓艾/虚拟天团/beijing',
					x: [0, -0.29],
					y: [0, 0.65],
					scale: 0.4,
				},
			},
			援崖冒矢:{
				name: '邓艾/援崖冒矢/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.6],
				y: [0,0.2],
				scale: 1.15,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '邓艾/援崖冒矢/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		dengzhi:{//邓芝
			洞若观龙:{
				name: '邓芝/洞若观龙/xingxiang',
				x: [0,-0.45],
				y: [0,0.17],
				angle: 4,
				scale: 1,
				version: '4.0',  
				json: true,   
				gongji: {
					name: '邓芝/洞若观龙/xingxiang',
					version: '4.0',  
					json: true,
					speed:2.5,
				},
				beijing: {
					name: '邓芝/洞若观龙/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
				},
			}

		},
        dianwei: {//典韦
			武动乾坤: {
				name: '典韦/武动乾坤/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.32],
				y: [0, 0.55],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '典韦/武动乾坤/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '典韦/武动乾坤/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '典韦/武动乾坤/beijing',
					x: [0, -0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '典韦/武动乾坤/JiSha',
						x: [0, 0.45],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
            怒目迫视: {
                name: "典韦/怒目迫视/daiji",
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.65],
                y: [0, 0.0],
                scale: 0.5,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '典韦/怒目迫视/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '典韦/怒目迫视/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '典韦/怒目迫视/beijing',
					x: [0, -0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },			
        },
        diaochan: {//貂蝉
			舞惑群心:{
				name: '貂蝉/舞惑群心/XingXiang',
				alpha: true,
				x: [0,-0.78],
				y: [0,0.35],
				scale: 0.5,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '貂蝉/舞惑群心/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			花好月圆: {
				name: '貂蝉/花好月圆/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.64],
				y: [0, 0.53],
				scale: 0.94,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '貂蝉/花好月圆/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '貂蝉/花好月圆/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '貂蝉/花好月圆/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '貂蝉/花好月圆/JiSha',
						x: [0, 0.52],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 1.7,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
            战场绝版: {
                name: "貂蝉/战场绝版/daiji2",
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.42],
                y: [0, 0.38],
                scale: 1.1,
                angle: 0,
                //speed: 1,
                shizhounian: true,
				chuchang: {
					name: '貂蝉/战场绝版/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '貂蝉/战场绝版/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '貂蝉/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },			
			绝世倾城:{
				name: '貂蝉/绝世倾城/XingXiang',
				x: [0,0.42],
				y: [0,0.16],
				scale: 0.52,
				angle: -15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '貂蝉/绝世倾城/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			鼠年七夕:{
				name: '貂蝉/鼠年七夕/XingXiang',
				x: [0,0.44],
				y: [0,0.22],
				scale: 0.62,
				angle: 8,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '貂蝉/鼠年七夕/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			文和乱武: {
				name: '貂蝉/文和乱武/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.35],
				y: [0, 0.57],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '貂蝉/文和乱武/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '貂蝉/文和乱武/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '貂蝉/文和乱武/beijing',
					x: [0, 1.11],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '貂蝉/文和乱武/JiSha',
						x: [0, 0.48],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			新春鑫舞: {
				name: '貂蝉/新春鑫舞/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.35],
				y: [0, 0.43],
				scale: 1.08,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '貂蝉/新春鑫舞/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '貂蝉/新春鑫舞/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '貂蝉/新春鑫舞/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			忧君难寐:{
				name: '貂蝉/忧君难寐/XingXiang',
				x: [0,0.4],
				y: [0,0.21],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '貂蝉/忧君难寐/BeiJing',
					scale: 0.4,
					x: [0, 1.11],
					y: [0, 0.5]
				},
			},
			玉蝉仙子: {
				name: '貂蝉/玉蝉仙子/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.26],
				y: [0, 0.5],
				scale: 0.85,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '貂蝉/玉蝉仙子/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '貂蝉/玉蝉仙子/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '貂蝉/玉蝉仙子/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '貂蝉/玉蝉仙子/jisha',
						scale: 0.6,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			驭魂千机:{
				name: '貂蝉/驭魂千机/XingXiang',
				x: [0,0.54],
				y: [0,0.23],
				scale: 0.6,
				angle: 15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '貂蝉/驭魂千机/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
		},
		dingfeng: {//丁奉
			雪虐风饕: {
				name: '丁奉/雪虐风饕/xingxiang',
				x: [0,0.86],
				y: [0,0.55],
				angle: -5,
				scale: 0.75,
				version:"4.0",
				gongji:{
					name: '丁奉/雪虐风饕/xingxiang',
					x: [0,0.74],
					y: [0,0.28],
					scale: 0.7,	
					speed:1.8,
					version:"4.0",
				},
				beijing: {
					name: '丁奉/雪虐风饕/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
				skinName:"雪虐风饕"
			},

		},
		dingshangwan: { //丁尚涴
			夜阑扰梦: {
				name: '丁尚涴/夜阑扰梦/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.26],
				y: [0, 0.5],
				scale: 0.85,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '丁尚涴/夜阑扰梦/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '丁尚涴/夜阑扰梦/chuchang',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '貂蝉/玉蝉仙子/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
		},
        dingyuan: { //丁原
        	龙腾寰宇: {            
                name: "丁原/龙腾寰宇/xingxiang",
				x: [0,0.51],
				y: [0,0.4],
				angle: 5,
				scale: 0.9,
                speed: 1,	json: true, version:"4.0",
                gongji: {  
					name:"丁原/龙腾寰宇/jineng01",		          
            		x: [0,0.7],
					y: [0,0.42],
					scale: 1.1,	version:"4.0",json: true  
               	},                     
            	beijing: {
					name: '丁原/龙腾寰宇/beijing',
					x: [0,1.65],
					y: [0,0.45],
					scale: 0.6,
					version:"4.0",json: true  
				},
				zhishixian: {
					name: '丁原/龙腾寰宇/jineng02',  
					scale: 0.8,
					speed: 0.5,
					delay: 0.5,  
					version:"4.0",json: true,  
					effect: {  
						name: '丁原/龙腾寰宇/jineng02', 
						scale: 0.6,
						speed: 0.7,
						delay: 0.2,
						version:"4.0",json: true  
					}                
				},
            },
            长乐未央: {
                name: "丁原/长乐未央/daiji2",
                x: [0, 0.45],
                y: [0, 0.2],
                scale: 0.9,
                angle: 5,
                shizhounian: true,
				chuchang: {
					name: '丁原/长乐未央/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '丁原/长乐未央/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '丁原/长乐未央/beijing',
					x: [0, -0.57],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "长乐未央"
            },          
        },
		dongbai: {//董白
			娇巧伶俐: {
				name: '董白/娇巧伶俐/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.34],
				y: [0, 0.56],
				scale: 0.88,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '董白/娇巧伶俐/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '董白/娇巧伶俐/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '董白/娇巧伶俐/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			长乐未央: {
				name: '董白/长乐未央/daiji2',
				x: [0, 0.42],
				y: [0, 0.62],
				scale: 0.75,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '董白/长乐未央/chuchang',
					scale: 0.4,
					action: 'play',
				},
				gongji: {
					name: '董白/长乐未央/chuchang',
					scale: 0.5,
					action: 'play',
				},
				beijing: {
					name: '董白/长乐未央/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			猪年春节:{
				name: '董白/猪年春节/XingXiang',
				x: [0,0.67],
				y: [0,0.47],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '董白/猪年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
		dongcheng:{//董承
			长乐未央: {
				name: '董承/长乐未央/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.75],
				y: [0,0.29],
				scale: 1.16,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '董承/长乐未央/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '董承/长乐未央/chuchang',
					action: 'play',
					scale: 0.7,
				},
				beijing: {
					name: '董承/长乐未央/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
		},
        dongguiren: {//董贵人
			春殿踏水: {
				name: '董贵人/春殿踏水/daiji2',
				x: [0, 0.4],
				y: [0, 0.28],
				scale: 1.3,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '董贵人/春殿踏水/chuchang',
					scale: 0.8,
					action: 'play',
				},
				
				gongji: {
					name: '董贵人/春殿踏水/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '董贵人/春殿踏水/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			金露饯月: {
				name: '董贵人/金露饯月/daiji2',			
				shan: 'play3',
				x: [0,0.7],
				y: [0,0.55],
				angle: -10,
				scale: 1,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '董贵人/金露饯月/chuchang',
					action: 'play',
					scale: 0.75,
				},
				gongji: {
					name: '董贵人/金露饯月/chuchang2',
					action: 'gongji',
					scale: 0.65,
				},
				teshu: {
					name: '董贵人/金露饯月/chuchang2',
					action: 'jineng',
					scale: 0.65,
				},
				beijing: {
					name: '董贵人/金露饯月/beijing',
				    x: [0,0.5],
				    y: [0,0.5],
				    scale: 0.3,
				},
				zhishixian: {
					name: '董贵人/金露饯月/shouji2',
					scale: 0.75,
					speed: 0.8,
					delay: 0.55,
					effect: {
						name: '董贵人/金露饯月/shouji',
						scale: 0.75,
						speed: 0.8,
						delay: 0.55,
					},
				},
			},
			经典形象:{
				name: '董贵人/祈福/SF_qifu_eff_dongguiren',
				x: [0,2.38],
				y: [0,0],
				scale: 0.62,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '董贵人/春殿踏水/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		dongyun:{//董允
			忠驱虎狼: {
				name: '董允/忠驱虎狼/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.4],
				y: [0,0.12],
				scale: 1.3,
				angle: 0,
				//speed: 1,
				gongji: {
					name: '董允/忠驱虎狼/xingxiang',
					version:"4.0",
					json: true,
					scale: 0.6,
				},
				beijing: {
					name: '董允/忠驱虎狼/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},
		
		ol_dongzhao: {//董昭
			夜阑山河: {
				name: '董昭/夜阑山河/xingxiang',
				x: [0, 0.25],
				y: [0, 0.3],
				scale: 0.5,
				angle: 7,
				json:true,
				version:'4.0',
				gongji: {
					name:'董昭/夜阑山河/xingxiang',
					json:true,
					version:'4.0',
					scale: 0.5,
					angle: 7,
				},
				beijing:{
					name:'董昭/夜阑山河/beijing',
					x: [0, 0.25],
					y: [0, 0.3],
					scale: 0.5,
					angle: 7,
					json:true,
					version:'4.0',
				},
			},
		},
        //董卓
        dongzhuo: {
            /*文和乱武: {
                name: "skin_Decennial_DongZhuo_WenHeLuanWu",
                x: [0, 0.25],
                y: [0, 0.3],
                scale: 0.5,
                angle: 7,
                speed: 1,
                background: "skin_Decennial_DongZhuo_WenHeLuanWu_bg.png",
                skinName: "文和乱武"
            },*/
			文和乱武: {
				name: '董卓/文和乱武/daiji',
				x: [0, 0.25],
                y: [0, 0.3],
                scale: 0.5,
                angle: 7,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '董卓/文和乱武/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '董卓/文和乱武/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '董卓/文和乱武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },  
        dufuren: {//杜夫人
			清茶盼君:{
				name: '杜夫人/清茶盼君/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.6],
				y: [0,0.36],
				scale: 0.8,
				angle: -5,
                //speed: 1,
				beijing: {
					name: '杜夫人/清茶盼君/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			瑞雪纷华: {
				name: '杜夫人/瑞雪纷华/daiji2',
				x: [0, 0.52],
				y: [0, 0.35],
				scale: 1,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '杜夫人/瑞雪纷华/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '杜夫人/瑞雪纷华/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '杜夫人/瑞雪纷华/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			战场绝版: {
				name: '杜夫人/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.35],
				y: [0, 0.42],
				scale: 1.02,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '杜夫人/战场绝版/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '杜夫人/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '杜夫人/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.6],
					scale: 0.4,
				},
				zhishixian: {
					name: '杜夫人/战场绝版/shouji2',
					scale: 0.7,
					speed: 0.6,
					delay: 0.3,
					effect: {
						name: '杜夫人/战场绝版/shouji',
						scale: 0.7,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
        },
		duji: {//杜畿
            踞城缚蟒: {
				name: '杜畿/踞城缚蟒/daiji2',
				x: [0, 0.52],
				y: [0, 0.48],
				scale: 0.9,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '杜畿/踞城缚蟒/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '杜畿/踞城缚蟒/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '杜畿/踞城缚蟒/beijing',
					x: [0, 0.29],
					y: [0, 0.48],
					scale: 0.4,
				},
			},
		},
		duyu: {//杜预
			弼朝博虬:{
				name: '杜预/弼朝博虬/XingXiang',
				x: [0,0.49],
				y: [0,0.55],
				scale: 0.31,

                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '杜预/弼朝博虬/BeiJing',
					x: [0,0.47],
					y: [0,0.41],
					scale: 0.3,
				},
				gongji: {
					x: [0, 0.5],
					y: [0, 0.5],
					scale:1.3,
				},
				audio: {
					skill: '杜预/弼朝博虬/audio',
					card: '杜预/弼朝博虬/audio',
				},
				special: {
					觉醒: {
						name: 'duyu/弼朝博虬2',
					},
					condition: {
						juexingji: {
							transform: "觉醒",
							effect: 'shaohui',
							//play: 'play',
						},
					},
				},
			},
			弼朝博虬2:{
				name: '杜预/弼朝博虬2/XingXiang',
				x: [0,0.48],
				y: [0,0.23],
				gongji: {
					x: [0, 0.4],
					y: [0, 0.6],
				},
				scale: 0.53,
				angle: 3,
                //speed: 1,
				//action: 'DaiJi',
				audio: {
					skill: '杜预/弼朝博虬2/audio',
					card: '杜预/弼朝博虬2/audio',
				},
				beijing: {
					name: '杜预/弼朝博虬2/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			龙吟破竹:{
				name: '杜预/龙吟破竹/XingXiang',
				x: [0,0.82],
				y: [0,0.24],
				scale: 0.55,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '杜预/龙吟破竹/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
            鹊夜同心: {
            	name: '杜预/鹊夜同心/xingxiang',
            	x: [-10,0.43],
				y: [-40,0.57],
				scale: 0.75,
				version:"4.0",json: true,
            	gongji: {  
					name:"杜预/鹊夜同心/jineng01",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	version:"4.0",json: true  
               	},      
            	zhishixian: {
					name: '杜预/鹊夜同心/jineng02',  
					scale: 0.8,
					speed: 0.5,
					delay: 0.5,  
					version:"4.0",json: true,  
					effect: {  
						name: '杜预/鹊夜同心/jineng02', 
						scale: 0.6,
						speed: 0.7,
						delay: 0.2,
						version:"4.0",json: true  
					},               
				} ,               
               	beijing: {
					name: '杜预/鹊夜同心/beijing',
					x: [0,0.75],
					y: [0,0.3],
					scale: 0.5,
					version:"4.0",json: true  
				},
                skinName: "鹊夜同心"
            },
			威兵袭吴:{
				name: '杜预/威兵袭吴/xingxiang',
            	x: [-10,0.43],
				y: [-40,0.57],
				scale: 0.75,
				version:"4.0",json: true,
            	gongji: {  
					name:"杜预/威兵袭吴/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	version:"4.0",json: true  
               	},                   
               	beijing: {
					name: '杜预/威兵袭吴/beijing',
					x: [0,0.75],
					y: [0,0.3],
					scale: 0.5,
					version:"4.0",json: true  
				},
			},
        },
		duanwei: {//段煨
            骁勇金衔: {
				name: '段煨/骁勇金衔/daiji2',
				shan: 'play3',
				x: [0, 0.52],
				y: [0, 0.42],
				scale: 0.95,
				angle: 20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '段煨/骁勇金衔/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '段煨/骁勇金衔/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '段煨/骁勇金衔/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '段煨/骁勇金衔/beijing',
					x: [0, 1.22],
					y: [0, 0.62],
					scale: 0.3,
				},
				zhishixian: {
					name: '段煨/骁勇金衔/shouji2',
					scale: 0.6,
					speed: 0.8,
					delay: 0.3,
					effect: {
						name: '段煨/骁勇金衔/shouji',
						scale: 0.5,
						speed: 0.6,
						delay: 0.1,
					},
				},
			},
			执剑昆吾: {
				name: '段煨/执剑昆吾/daiji2',
				x: [0, 0.5],
				y: [0, 0.5],
				scale: 0.9,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '段煨/执剑昆吾/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '段煨/执剑昆吾/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '段煨/执剑昆吾/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        fazheng: {//法正
			恩山怨海:{
				name: '法正/恩山怨海/XingXiang',
				x: [0,0.5],
				y: [0,0.3],
				scale: 0.45,
				angle: -5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '法正/恩山怨海/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			恩怨如火: {
				name: '法正/恩怨如火/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.39],
				y: [0, 0.46],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '法正/恩怨如火/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '法正/恩怨如火/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '法正/恩怨如火/beijing',
					x: [0, 0.45],
					y: [0, 0.18],
					scale: 0.4,
				},
			},
            戡律定科: {
                name: '法正/戡律定科/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.53],
				y: [0,0.48],
				scale: 0.85,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '法正/戡律定科/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '法正/戡律定科/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '法正/戡律定科/beijing',
					x: [0, 0.45],
					y: [0, 0.18],
					scale: 0.7,
				},
                skinName: "戡律定科"
            },			
        },
		fanchou: {//樊稠
			文和乱武: {
				name: '樊稠/文和乱武/daiji2',
				x: [0, 0.43],
				y: [0, 0.38],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '樊稠/文和乱武/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '樊稠/文和乱武/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '樊稠/文和乱武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        fanyufeng: {//樊玉凤
			落花醺微: {
				name: '樊玉凤/落花醺微/daiji2',
				x: [0, 0.4],
				y: [0, 0.49],
				scale: 1,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '樊玉凤/落花醺微/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '樊玉凤/落花醺微/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '樊玉凤/落花醺微/beijing',
					x: [0, 1.34],
					y: [0, 0.45],
					scale: 0.4,
				},
			},
			斟酒入情: {
				name: '樊玉凤/斟酒入情/daiji2',
				x: [0, 0.41],
				y: [0, 0.43],
				scale: 1.15,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '樊玉凤/斟酒入情/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '樊玉凤/斟酒入情/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '樊玉凤/斟酒入情/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		feiyi: {//费祎
            安民护祚:{
				name: '费祎/安民护祚/XingXiang',
				x: [0,0.96],
				y: [0,0.17],
				angle: 3,
				scale: 0.48,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '费祎/安民护祚/BeiJing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
		},
        fengfangnv: {//冯妤
			韶颜雅容: {
				name: '冯妤/韶颜雅容/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.9,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '冯妤/韶颜雅容/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '冯妤/韶颜雅容/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '冯妤/韶颜雅容/beijing',
					x: [0, 0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			丹唇点绛:{
				name: '冯妤/丹唇点绛/xingxiang',
				x: [0,0.62],
				y: [0,0.42],
				angle: -5,
				scale: 0.74,
				version:"4.0",
				beijing: {
					name: '冯妤/丹唇点绛/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
			}
        },
        fuhuanghou: {//伏皇后
			万福千灯: {
				name: '伏皇后/万福千灯/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.47],
				y: [0, 0.55],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '伏皇后/万福千灯/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '伏皇后/万福千灯/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '伏皇后/万福千灯/beijing',
					x: [0, -0.1],
					y: [0, 0.46],
					scale: 0.4,
				},
			},
            战场绝版: {
                name: '伏皇后/战场绝版/daiji',
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.55],
                y: [0, 0.25],
                scale: 0.5,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '伏皇后/战场绝版/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '伏皇后/战场绝版/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '伏皇后/战场绝版/beijing',
					x: [0, -0.1],
					y: [0, 0.46],
					scale: 0.4,
				},
                skinName: "战场绝版"
            },
            长乐未央: {
                name: '伏皇后/长乐未央/daiji',
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.4],
                y: [0, 0.1],
                scale: 0.6,
                angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '伏皇后/长乐未央/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '伏皇后/长乐未央/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '伏皇后/长乐未央/beijing',
					x: [0, -0.1],
					y: [0, 0.46],
					scale: 0.4,
				},
                skinName: "长乐未央"
            },			
        },
        ganfuren: {//甘夫人
			为君担忧:{
				name: '甘夫人/为君担忧/XingXiang',
				x: [0,0.25],
				y: [0,0.42],
				scale: 0.44,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				gongji: 'TeShu',
				beijing: {
					name: '甘夫人/为君担忧/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			为君担忧2:{
				name: '甘夫人/为君担忧2/XingXiang',
				x: [0,0.25],
				y: [0,0.42],
				scale: 0.44,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				gongji: 'TeShu',
				beijing: {
					name: '甘夫人/为君担忧2/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        ganning: {//甘宁
			劈舟斩浪:{
				name: '甘宁/劈舟斩浪/XingXiang',
				x: [0,0.32],
				y: [0,0.27],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '甘宁/劈舟斩浪/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			海沸波涌: {
				name: '甘宁/海沸波涌/xingxiang',
				x: [0,0.62],
				y: [0,0.42],
				angle: -5,
				scale: 0.74,
				version:"4.0",
				beijing: {
					name: '甘宁/海沸波涌/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},

			},
			肝胆相照:{//还没真动
				name: '甘宁/肝胆相照/XingXiang',
				x: [0,0.61],
				y: [0,-0.3],
				scale: 0.75,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				gongji: 'TeShu',
				beijing: {
					name: '甘宁/肝胆相照/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			锦帆游侠:{
				name: '甘宁/锦帆游侠/XingXiang',
				x: [0,1.1],
				y: [0,0.24],
				scale: 0.45,
				angle: -30,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '甘宁/锦帆游侠/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			披星踏浪: {
				name: '甘宁/披星踏浪/daiji2',
				x: [0, 0.5],
				y: [0, 0.44],
				scale: 0.9,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '甘宁/披星踏浪/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '甘宁/披星踏浪/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '甘宁/披星踏浪/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			虚拟天团: {
              	name: "甘宁/虚拟天团/daiji2",
				x: [0,0.4],
				y: [0,0.51],
				angle: 20,
				scale: 0.6,
                shizhounian: true,
                chuchang: {
					name: '甘宁/虚拟天团/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '甘宁/虚拟天团/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '甘宁/虚拟天团/beijing_1',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			武动乾坤: {
				name: '甘宁/武动乾坤/daiji2',
				x: [0, 0.45],
				y: [0, 0.55],
				scale: 0.8,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '甘宁/武动乾坤/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '甘宁/武动乾坤/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '甘宁/武动乾坤/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		gaolan: {//高览	
            威显官渡:{
				name: '高览/威显官渡/XingXiang',
				x: [0,1.01],
				y: [0,-0.04],
				scale: 0.69,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '高览/威显官渡/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},
		gaoshun:{//高顺
        	每战必克: {
				name: '高顺/每战必克/XingXiang',
				x: [0,0.31],
				y: [0,0.29],
				angle: 18,
				scale: 0.46,
				//speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '高顺/每战必克/BeiJing',
					scale: 0.3,
					x: [0, 0.2],
					y: [0, 0.5]
				},
			},
		},
		gexuan:{//葛玄
			鹤唳九霄:{
				name: '葛玄/鹤唳九霄/daiji2',
				x: [0, 0.44],
				y: [0, 0.52],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '葛玄/鹤唳九霄/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '葛玄/鹤唳九霄/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '葛玄/鹤唳九霄/beijing',
					x: [0, 0.9],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
		},
        gongsunyuan: {//公孙渊
			逐鹿天下: {
				name: '公孙渊/逐鹿天下/daiji2',
				x: [0, 0.44],
				y: [0, 0.52],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '公孙渊/逐鹿天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '公孙渊/逐鹿天下/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '公孙渊/逐鹿天下/beijing',
					x: [0, 0.9],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		gongsunzan: {//公孙瓒
			武才趫猛:{
				name: '公孙瓒/武才趫猛/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.3],
				y: [0,0.3],
				scale: 0.8,
				angle: 5,
                //speed: 1,
				beijing: {
					name: '公孙瓒/武才趫猛/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        guyong: {//顾雍
			匡弼辅正: {
				name: '顾雍/匡弼辅正/daiji2',
				x: [0, 0.4],
				y: [0, 0.38],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '顾雍/匡弼辅正/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '顾雍/匡弼辅正/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '顾雍/匡弼辅正/beijing',
					x: [0, -1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        guanping: {//关平
            忠武鏖战: {
                name: "关平/忠武鏖战/daiji2",
                x: [0, 0.45],
                y: [0, 0.45],
                scale: 0.8,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '关平/忠武鏖战/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '关平/忠武鏖战/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '关平/忠武鏖战/beijing',
					x: [0, 0.37],
					y: [0, 0.5],
					scale: 0.23,
				},
                skinName: "忠武鏖战"
            },
        },
		     
        guansuo: {//关索
			依心缱绻:{
				name: '关索/依心缱绻/XingXiang',
				x: [0,0.5],
				y: [0,0.3],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '关索/依心缱绻/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			承父武志: {
				name: '关索/承父武志/xingxiang',
				x: [0,0.17],
				y: [0,0.44],
				angle: 3,
				scale: 0.85,
				version:"4.0",
				beijing: {
					name: '关索/承父武志/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
			},
			虎年七夕:{
				name: '关索/虎年七夕/XingXiang',
				x: [0,0.73],
				y: [0,0.41],
				scale: 0.42,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '关索/虎年七夕/BeiJing',
					scale: 0.4,
					x: [0, 0.69],
					y: [0, 0.5]
				},
			},
			鼠年中秋:{
				name: '关索/鼠年中秋/XingXiang',
				x: [0,-0.39],
				y: [0,-0.22],
				scale: 0.76,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '关索/鼠年中秋/BeiJing',
					scale: 0.4,
					x: [0, 1.1],
					y: [0, 0.4]
				},
			},
			兔娇春浓: {
				name: '关索/兔娇春浓/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.3],
				scale: 1.2,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '关索/兔娇春浓/chuchang',
					action: 'play',
					scale: 0.6,
				},
				gongji: {
					name: '关索/兔娇春浓/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.75,
				},
				beijing: {
					name: '关索/兔娇春浓/beijing',
					x: [0, 0.29],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '关索/兔娇春浓/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '关索/兔娇春浓/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
			万花簇威: {
				name: '关索/万花簇威/daiji2',
				x: [0, 0.44],
				y: [0, 0.57],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '关索/万花簇威/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '关索/万花簇威/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '关索/万花簇威/beijing',
					x: [0, 0.37],
					y: [0, 0.5],
					scale: 0.23,
				},
			},
        },
		guanzhang: {//关兴张苞
			同心并力: {
				name: '关兴张苞/同心并力/daiji2',
				x: [0, 0.48],
				y: [0, 0.55],
				scale: 0.7,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '关兴张苞/同心并力/chuchang',
					scale: 0.65,
					action: 'play',
				},
				gongji: {
					name: '关兴张苞/同心并力/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '关兴张苞/同心并力/beijing',
					x: [0, -1.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		
        guanyinping: {//关银屏
			虎年端午:{
				name: '关银屏/虎年端午/XingXiang',
				x: [0,0.4],
				y: [0,0.3],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '关银屏/虎年端午/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            巾帼花武: {
                name: '关银屏/巾帼花武/daiji2',
				x: [0, 0.3],
				y: [0, 0.5],
				scale: 0.8,
				angle: -20,	
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '关银屏/巾帼花武/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '关银屏/巾帼花武/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '关银屏/巾帼花武/beijing',
					x: [0, -0.68],
					y: [0, 0.33],
					scale: 0.4,
				},
            },		
			鼠年中秋:{
				name: '关银屏/鼠年中秋/XingXiang',
				x: [0,1.21],
				y: [0,0.36],
				scale: 0.54,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '关银屏/鼠年中秋/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			兔年春节:{
				name: '关银屏/兔年春节/XingXiang',
				x: [0,0.58],
				y: [0,0.21],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '关银屏/兔年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			战场绝版: {
				name: '关银屏/战场绝版/daiji2',
				x: [0, 0.43],
				y: [0, 0.52],
				scale: 0.88,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '关银屏/战场绝版/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '关银屏/战场绝版/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '关银屏/战场绝版/beijing',
					x: [0, -0.68],
					y: [0, 0.33],
					scale: 0.4,
				},
			},
        },
        guanyu: {//关羽
			飞龙在天: {
				name: '关羽/飞龙在天/daiji2',
				x: [0, 0.39],
				y: [0, 0.43],
				scale: 0.82,
				angle: -5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '关羽/飞龙在天/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '关羽/飞龙在天/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '关羽/飞龙在天/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			明良千古:{
				name: '关羽/明良千古/XingXiang',
				x: [0,0.27],
				y: [0,0.17],
				angle: -3,
				scale: 0.48,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '关羽/明良千古/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			武动乾坤: {
				name: '关羽/武动乾坤/daiji2',
				x: [0, 0.26],
				y: [0, 0.58],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '关羽/武动乾坤/chuchang',
					scale: 1.3,
					action: 'play',
				},
				gongji: {
					name: '关羽/武动乾坤/chuchang',
					scale: 1.5,
					action: 'play',
				},
				beijing: {
					name: '关羽/武动乾坤/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			啸风从龙:{
				name: '关羽/啸风从龙/XingXiang',
				x: [0,0.08],
				y: [0,0.37],
				scale: 0.44,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '关羽/啸风从龙/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
		guanning: {//管宁
            墨韵荷香: {
				name: '管宁/墨韵荷香/daiji2',
				shan: 'play3',
				x: [0, 0.43],
				y: [0, 0.4],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '管宁/墨韵荷香/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '管宁/墨韵荷香/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '管宁/墨韵荷香/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '管宁/墨韵荷香/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '管宁/墨韵荷香/shouji2',
					scale: 0.8,
					speed: 1,
					delay: 0.5,
					effect: {
						name: '管宁/墨韵荷香/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.6,
					},
				},
			},
        },
		
        jin_guohuai: {//郭槐
			芙若槐香:{
				name: '郭槐/芙若槐香/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.38],
				y: [0,0.34],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '郭槐/芙若槐香/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			笑映花语:{
				name: '郭槐/笑映花语/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.85],
				y: [0,0.3],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '郭槐/笑映花语/jineng01',
					version:"4.0",
				    json: true,
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '郭槐/笑映花语/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '郭槐/笑映花语/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		guanqiujian:{
			威重忠义:{
				name: '毌丘俭/威重忠义/xingxiang',
				x: [0,1.08],
				y: [0,0.25],
				angle: 0,
				scale: 1,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"毌丘俭/威重忠义/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					version:"4.0",
					json: true  
				},    
				beijing: {
					name: '毌丘俭/威重忠义/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale: 0.6,
				},

			}

		} , 
        guohuanghou: {//郭皇后
			情意相投: {
				name: '郭皇后/情意相投/daiji2',
				x: [0, 0.33],
				y: [0, 0.5],
				scale: 0.88,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郭皇后/情意相投/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '郭皇后/情意相投/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '郭皇后/情意相投/beijing',
					x: [0, 1],
					y: [0, 0.36],
					scale: 0.4,
				},
			},
            战场绝版: {
                name: "郭皇后/战场绝版/daiji",
                x: [0, 0.45],
                y: [0, 0.25],
                scale: 0.5,
                angle: 5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郭皇后/战场绝版/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '郭皇后/战场绝版/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '郭皇后/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "战场绝版"
            },			
			心系君魂: {
				name: '郭皇后/心系君魂/daiji2',
				x: [0, 0.29],
				y: [0, 0.51],
				scale: 0.85,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郭皇后/心系君魂/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '郭皇后/心系君魂/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '郭皇后/心系君魂/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },   
        guojia: {//郭嘉
			谋定天下: {
				name: '郭嘉/谋定天下/daiji2',
				x: [0, 0.38],
				y: [0, 0.51],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郭嘉/谋定天下/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '郭嘉/谋定天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '郭嘉/谋定天下/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            暗香疏影:{
				name: '郭嘉/暗香疏影/XingXiang',
				x: [0,0.98],
				y: [0,0.38],
				scale: 0.4,
				angle: 0,
                speed: 1.6,
				//action: 'DaiJi',
				beijing: {
					name: '郭嘉/暗香疏影/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            风雅清韵: {
                name: "郭嘉/风雅清韵/daiji2",
				x: [0,0.41],
				y: [0,0.4],
				scale: 0.9,       
                //speed: 1,
                shizhounian: true,
				chuchang: {
					name: '郭嘉/风雅清韵/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '郭嘉/风雅清韵/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '郭嘉/风雅清韵/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },			
			十胜十败:{
				name: '郭嘉/十胜十败/XingXiang',
				x: [0,0.12],
				y: [0,-0.03],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '郭嘉/十胜十败/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			以身证道:{
				name: '郭嘉/以身证道/XingXiang',
				x: [0,-0.06],
				y: [0,0.51],
				scale: 0.45,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '郭嘉/以身证道/BeiJing',
					x: [0, 0.5],
					y: [0, 0.47],
					scale: 0.3,
				},
			},
			一世风华: {
				name: '郭嘉/一世风华/daiji2',
				x: [0, 0.42],
				y: [0, 0.47],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郭嘉/一世风华/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '郭嘉/一世风华/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '郭嘉/一世风华/beijing',
					x: [0, -0.1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		guosi: {//郭汜
            文和乱武: {
                name: '郭汜/文和乱武/daiji2',
				x: [0, 0.42],
				y: [0, 0.48],
				scale: 0.82,
				angle: 8,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郭汜/文和乱武/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '郭汜/文和乱武/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '郭汜/文和乱武/beijing',
					x: [0, -0.07],
					y: [0, 0.66],
					scale: 0.4,
				},
            },
			鸷狠诡戾:{
				name: '郭汜/鸷狠诡戾/xingxiang',
				version:"4.0",
				x: [0,0.45],
				y: [0,0.45],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '郭汜/鸷狠诡戾/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },  
        guozhao: {//郭照
			瓷语青花: {
				name: '郭照/瓷语青花/daiji2',
				shan: 'play3',
				x: [0, 0.47],
				y: [0, 0.42],
				scale: 1.1,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郭照/瓷语青花/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '郭照/瓷语青花/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '郭照/瓷语青花/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				beijing: {
					name: '郭照/瓷语青花/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '郭照/瓷语青花/shouji2',
					scale: 0.5,
					speed: 1.5,
					delay: 0.3,
					effect: {
						name: '郭照/瓷语青花/shouji',
						scale: 0.5,
						speed: 0.9,
						delay: 0.6,
					},
				},
			},
			缱绻潋夏: {
				name: '郭照/缱绻潋夏/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.64],
				y: [0, 0.42],
				scale: 1.14,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郭照/缱绻潋夏/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '郭照/缱绻潋夏/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.9,
				},
				beijing: {
					name: '郭照/缱绻潋夏/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '郭照/缱绻潋夏/shouji2',
					scale: 0.7,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '郭照/缱绻潋夏/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
			雍容尊雅: {
				name: '郭照/雍容尊雅/daiji2',
				x: [0, 0.47],
				y: [0, 0.53],
				scale: 0.8,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郭照/雍容尊雅/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '郭照/雍容尊雅/chuchang',
					scale: 1.05,
					action: 'play',
				},
				beijing: {
					name: '郭照/雍容尊雅/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        haozhao: {//郝昭
			攻防抗蜀:{
				name: '郝昭/攻防抗蜀/xingxiang',
				version:"4.0",
				x: [0,0.55],
				y: [0,0],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '郝昭/攻防抗蜀/beijing',
					version:"4.0",
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			死守陈仓:{
				name: '郝昭/死守陈仓/XingXiang',
				x: [0,0.52],
				y: [0,0.12],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '郝昭/死守陈仓/BeiJing',
					scale: 0.4,
					x: [0, 1.32],
					y: [0, 0.52]
				},
			},
            万军之拒: {
                name: '郝昭/万军之拒/daiji',
                x: [0, 0.3],
                y: [0, 0.4],
                scale: 0.5,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '郝昭/万军之拒/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '郝昭/万军之拒/chuchang',
					scale: 1.05,
					action: 'play',
				},
				beijing: {
					name: '郝昭/万军之拒/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "万军之拒"
            },			
        },
        hetaihou: {//何太后
			蛇蝎为心:{
				name: '何太后/蛇蝎为心/XingXiang',
				x: [0,-0.74],
				y: [0,0.13],
				scale: 0.6,
				angle: 3,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '何太后/蛇蝎为心/BeiJing',
					scale: 0.4,
					x: [0, 0.38],
					y: [0, 0.5]
				},
			},
            耀紫迷幻: {
                name: '何太后/耀紫迷幻/daiji2',
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.6],
                y: [0, 0.4],
                scale: 0.9,
                angle: 20,
                shizhounian: true,
                chuchang: {
					name: '何太后/耀紫迷幻/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '何太后/耀紫迷幻/chuchang',
					action: 'play',
					scale: 0.8,
				},
				beijing: {
					name: '何太后/耀紫迷幻/beijing',
					x: [0, -0.36],
					y: [0, 0.38],
					scale: 0.4,
				},
                skinName: "耀紫迷幻"
            },			
			战场绝版: {
				name: '何太后/战场绝版/daiji2',
				shan: 'play3',
				x: [0, 0.75],
				y: [0, 0.45],
				scale: 1.05,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '何太后/战场绝版/chuchang',
					action: 'play',
					scale: 0.8,
				},
				teshu: {
					name: '何太后/战场绝版/chuchang2',
					action: 'jineng',
					scale: 0.75,
				},
				gongji: {
					name: '何太后/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.75,
				},
				beijing: {
					name: '何太后/战场绝版/beijing',
					x: [0, -0.36],
					y: [0, 0.38],
					scale: 0.4,
				},
				zhishixian: {
					name: '何太后/战场绝版/shouji2',
					scale: 0.6,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '何太后/战场绝版/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
			鸩毒除患: {
				name: '何太后/鸩毒除患/daiji2',
				x: [0, 0.38],
				y: [0, 0.55],
				scale: 0.82,
				angle: -15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '何太后/鸩毒除患/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '何太后/鸩毒除患/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '何太后/鸩毒除患/beijing',
					x: [0, 1.57],
					y: [0, 0.26],
					scale: 0.4,
				},
			},
        },
		heyan:{//何晏
			忆梦慕蝶: {
				teshu: 'play2',
				shan: 'play3',
				name: '何晏/忆梦慕蝶/daiji2',
				x: [0, 0.4],
				y: [0, 0.28],
				scale: 1.2,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '何晏/忆梦慕蝶/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '何晏/忆梦慕蝶/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '何晏/忆梦慕蝶/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},

		},
		heqi: {//贺齐
			津南救援: {
				name: '贺齐/津南救援/xingxiang',
				x: [0,0.33],
				y: [0,0.3],
				angle: -5,
				scale: 1,
				version:"4.0",
				/*shizhounian: true,
				gongji:{
					name: '贺齐/津南救援/chuchang',
					scale: 0.7,
					version:"4.0",
				},*/
				beijing: {
					name: '贺齐/津南救援/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
				skinName:"津南救援"
			},
		},
        hujinding: {//胡金定
			金粉福颜: {
				name: '胡金定/金粉福颜/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.7],
				y: [0, 0.37],
				scale: 1.16,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '胡金定/金粉福颜/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '胡金定/金粉福颜/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '胡金定/金粉福颜/beijing',
					x: [0, 1.7],
					y: [0, 0.37],
					scale: 0.4,
				},
				zhishixian: {
					name: '胡金定/金粉福颜/shouji2',
					scale: 0.6,
					speed: 1.1,
					delay: 0.3,
					effect: {
						name: '胡金定/金粉福颜/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.35,
					},
				},
			},
			明良千古:{
				name: '胡金定/明良千古/XingXiang',
				x: [0,0.41],
				y: [0,-0.34],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '胡金定/明良千古/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        huaman: {//花蔓
			依心缱绻:{
				name: '花鬘/依心缱绻/XingXiang',
				x: [0,0.5],
				y: [0,0.3],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '花鬘/依心缱绻/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			锋丽鬘影:{
				name: '花鬘/锋丽鬘影/xingxiang',
				version:"4.0",
				//json: true,
				x: [0,1.05],
				y: [0,0.46],
				scale: 0.48,
				angle: 20,
                //speed: 1,
				gongji:{
					name: '花鬘/锋丽鬘影/xingxiang',
					version:"4.0",
					x: [0,1.05],
					y: [0,0.46],
					scale: 0.48,

				},
				beijing: {
					name: '花鬘/锋丽鬘影/beijing',
					version:"4.0",
					//json: true,
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			花谷烂漫:{
				name: '花鬘/花谷烂漫/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.88],
				y: [0,0.54],
				scale: 0.65,
				angle: -5,
                //speed: 1,
				chuchang: {
					name: '花鬘/花谷烂漫/jineng01',
					version:"4.0",
				    json: true,
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '花鬘/花谷烂漫/jineng01',
					version:"4.0",
				    json: true,
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '花鬘/花谷烂漫/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			花俏蛮娇: {
				name: '花鬘/花俏蛮娇/daiji2',
				x: [0, 0.43],
				y: [0, 0.41],
				scale: 1.04,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '花鬘/花俏蛮娇/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '花鬘/花俏蛮娇/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '花鬘/花俏蛮娇/beijing',
					x: [0, -0.57],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			蛮帼英飒: {
				name: '花鬘/蛮帼英飒/daiji2',
				x: [0, 0.4],
				y: [0, 0.35],
				scale: 1.1,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '花鬘/蛮帼英飒/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '花鬘/蛮帼英飒/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '花鬘/蛮帼英飒/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			沙场蛮花:{
				name: '花鬘/沙场蛮花/XingXiang',
				x: [0,0.75],
				y: [0,0.24],
				scale: 0.45,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '花鬘/沙场蛮花/BeiJing',
					x: [0, 0.5],
					y: [0, 0.47],
					scale: 0.3,
				},
			},
			虚拟天团: {
				name: '花鬘/虚拟天团/daiji2',
				x: [0, 0.5],
				y: [0, 0.45],
				scale: 1,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '花鬘/虚拟天团/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '花鬘/虚拟天团/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '花鬘/虚拟天团/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			战场荣耀: {
				name: '花鬘/战场荣耀/daiji2',			
				shan: 'play3',
				x: [0,0.45],
				y: [0,0.53],
				scale: 1,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '花鬘/战场荣耀/chuchang',
					action: 'play',
					scale: 0.6,
				},
				gongji: {
					name: '花鬘/战场荣耀/chuchang2',
					action: 'gongji',
					scale: 0.55,
				},
				teshu: {
					name: '花鬘/战场荣耀/chuchang2',
					action: 'jineng',
					scale: 0.55,
				},
				beijing: {
					name: '花鬘/战场荣耀/beijing',
				    x: [0,0.5],
				    y: [0,0.5],
				    scale: 0.3,
				},
				zhishixian: {
					name: '花鬘/战场荣耀/shouji2',
					scale: 0.5,
					speed: 0.9,
					delay: 0.4,
					effect: {
						name: '花鬘/战场荣耀/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.4,
					},
				},
			},
		 },
		
        //华雄
        huaxiong: {
			百战沙场:{
				name: '华雄/百战沙场/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.26],
				y: [0,0.33],
				scale: 0.6,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '华雄/百战沙场/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
            斩将攫石: {
                name: "华雄/斩将攫石/daiji",
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.5],
                y: [0, 0.25],
                scale: 0.5,
                angle: 23,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '华雄/斩将攫石/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '华雄/斩将攫石/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '华雄/斩将攫石/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },
        },            
        huatuo: {//华佗
			仙山游医: {
				name: '华佗/仙山游医/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.45],
				y: [0, 0.43],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '华佗/仙山游医/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '华佗/仙山游医/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '华佗/仙山游医/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			五禽操戏:{
				name: '华佗/五禽操戏/xingxiang',
				x: [0,1.03],
				y: [0,0.33],
				scale: 1,
				angle: 0,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"华佗/五禽操戏/xingxiang",		          
					x: [0,0.81],
					y: [0,0.33],
					scale: 0.88,	
					version:"4.0",
					json: true  
				   },    
				beijing: {
					name: '华佗/五禽操戏/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.79],
					y: [0,0.47],
					scale: 0.6,
	
				},
			}
        },
		huangfusong: {//皇甫嵩
			沙场点兵: {
				name: '皇甫嵩/沙场点兵/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.36],
				y: [0, 0.45],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '皇甫嵩/沙场点兵/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '皇甫嵩/沙场点兵/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '皇甫嵩/沙场点兵/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		huangchengyan:{
			夜占吉凶:{
				name: '黄承彦/夜占吉凶/xingxiang',
				x: [0,1.03],
				y: [0,0.33],
				scale: 1,
				angle: 0,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"黄承彦/夜占吉凶/xingxiang",		          
					x: [0,0.81],
					y: [0,0.33],
					scale: 0.88,	
					version:"4.0",
					json: true  
				   },    
				beijing: {
					name: '黄承彦/夜占吉凶/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.79],
					y: [0,0.47],
					scale: 0.6,
	
				},
			}

		},
        huanggai: {//黄盖
			鏖战赤壁:{
				name: '黄盖/鏖战赤壁/XingXiang',
				x: [0,0.63],
				y: [0,0.39],
				scale: 0.52,
				angle: -12,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '黄盖/鏖战赤壁/BeiJing',
					scale: 0.4,
					x: [0, 1.37],
					y: [0, 0.5]
				},
			},
			破天焚舰: {
				name: '黄盖/破天焚舰/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.28],
				y: [0, 0.51],
				scale: 0.8,
				angle: -12,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '黄盖/破天焚舰/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '黄盖/破天焚舰/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '黄盖/破天焚舰/beijing',
					x: [0, 1.02],
					y: [0, 0.54],
					scale: 0.4,
				},
			},
			武动乾坤: {
				name: '黄盖/武动乾坤/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.3],
				y: [0, 0.5],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '黄盖/武动乾坤/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '黄盖/武动乾坤/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '黄盖/武动乾坤/beijing',
					x: [0, -0.26],
					y: [0, 0.46],
					scale: 0.4,
				},
			},
			炙链困敌:{
				name: '黄盖/炙链困敌/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.35],
				y: [0,0.3],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '黄盖/炙链困敌/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			兔年端午:{
				name: '黄盖/兔年端午/XingXiang',
				x: [0,0.57],
				y: [0,0.6],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '黄盖/兔年端午/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		xf_huangquan: {//黄权
			镇城坚守:{
				name: '黄权/镇城坚守/xingxiang',
				version:"4.0",
				x: [0,0.8],
				y: [0,0.35],
				scale: 1,
				angle: 5,
                //speed: 1,
				beijing: {
					name: '黄权/镇城坚守/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0],
					y: [0, 0.5]
				},
			},
        },
        huangyueying: {//黄月英
			智心巧手:{
				name: '黄月英/智心巧手/xingxiang',
				x: [0,0.33],
				y: [0,0.32],
				angle: 5,
				scale: 0.9,
				version:"4.0",
				beijing: {
					name: '黄月英/智心巧手/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
			},
			持智思耀: {
				name: '黄月英/持智思耀/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '黄月英/持智思耀/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '黄月英/持智思耀/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '黄月英/持智思耀/beijing',
					x: [0, -0.1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            明智春馨: {
                name: '黄月英/明智春馨/daiji',
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.8],
                y: [0, 0.3],
                scale: 0.6,
                angle: -3,
                shizhounian: true,
                chuchang: {
					name: '黄月英/明智春馨/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '黄月英/明智春馨/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '黄月英/明智春馨/beijing',
					x: [0, -0.1],
					y: [0, 0.5],
					scale: 0.4,
				},
            },			
			虎年中秋:{
				name: '黄月英/虎年中秋/XingXiang',
				x: [0,0.47],
				y: [0,0.06],
				scale: 0.78,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '黄月英/虎年中秋/BeiJing',
					scale: 0.4,
					x: [0, 0.42],
					y: [0, 0.2]
				},
			},
			花好月圆: {
				name: '黄月英/花好月圆/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.43],
				y: [0, 0.53],
				scale: 0.84,
				angle: -5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '黄月英/花好月圆/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '黄月英/花好月圆/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '黄月英/花好月圆/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			林隐拾逸:{
				name: '黄月英/林隐拾逸/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.37],
				y: [0,0.3],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '黄月英/林隐拾逸/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, -0.5],
					y: [0, 0.5]
				},
			},
			明良千古:{
				name: '黄月英/明良千古/XingXiang',
				x: [0,-0.3],
				y: [0,0.2],
				scale: 0.46,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '黄月英/明良千古/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			木牛流马:{
				name: '黄月英/木牛流马/XingXiang',
				x: [0,0.21],
				y: [0,0.21],
				scale: 0.62,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '黄月英/木牛流马/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			七窍玲珑: {
				name: '黄月英/七窍玲珑/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.32],
				y: [0, 0.43],
				scale: 0.88,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '黄月英/七窍玲珑/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '黄月英/七窍玲珑/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '黄月英/七窍玲珑/beijing',
					x: [0, 0.5],
					y: [0, 0.4],
					scale: 0.4,
				},
			},
			鼠年春节:{
				name: '黄月英/鼠年春节/XingXiang',
				x: [0,0.97],
				y: [0,0.2],
				scale: 0.56,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '黄月英/鼠年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.68],
					y: [0, 0.58]
				},
			},
        },
        huangzhong: {//黄忠
			摧锋斩将:{
				name: '黄忠/摧锋斩将/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.42],
				y: [0,0.5],
				scale: 0.85,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '黄忠/摧锋斩将/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			横空烈贲: {
				name: '黄忠/横空烈贲/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				action: 'play2',
				teshu: 'play3',
				chuchang: {action: 'play4', scale: 1},
				gongji: {action: 'play5', scale: 1},
				x: [0, 0.6],
				y: [0, 0.12],
				scale: 1.2,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '黄忠/横空烈贲/beijing',
					version:"4.0",
				    json: true,
				    action: 'play2',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.6,
				},
			},
			没金饮羽: {
				name: '黄忠/没金饮羽/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.36],
				y: [0, 0.46],
				scale: 0.84,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '黄忠/没金饮羽/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '黄忠/没金饮羽/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '黄忠/没金饮羽/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '黄忠/没金饮羽/jisha',
						scale: 0.6,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			明良千古:{
				name: '黄忠/明良千古/XingXiang',
				x: [0,0.44],
				y: [0,0.4],
				scale: 0.46,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '黄忠/明良千古/BeiJing',
					scale: 0.4,
					x: [0, 1.5],
					y: [0, 0.39]
				},
			},
			武动乾坤: {
				name: '黄忠/武动乾坤/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.32],
				y: [0, 0.52],
				scale: 0.78,
				angle: -8,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '黄忠/武动乾坤/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '黄忠/武动乾坤/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '黄忠/武动乾坤/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			佻身飞镞: {
				name: '黄忠/佻身飞镞/daiji2',
				x: [0, 0.55],
				y: [0, 0.45],
				scale: 1,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '黄忠/佻身飞镞/chuchang',
					scale: 0.5,
					action: 'play',
				},
				gongji: {
					name: '黄忠/佻身飞镞/chuchang',
					scale: 0.7,
					action: 'play',
				},
				beijing: {
					name: '黄忠/佻身飞镞/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		huangzu: {//黄祖
			簇箭伏波:{
				name: '黄祖/簇箭伏波/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.85],
				y: [0,0.25],
				scale: 0.95,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '黄祖/簇箭伏波/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},
        huojun: {//霍峻
			狭路奋勇:{
				name: '霍峻/狭路奋勇/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.5],
				y: [0,0.5],
				scale: 0.7,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '霍峻/狭路奋勇/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},
		jiachong: {//贾充
			执手同欢:{
				name: '贾充/执手同欢/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.52],
				y: [0,0.37],
				scale: 1.0,
				angle: 15,
				//speed: 1,
				beijing: {
					name: '贾充/执手同欢/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			见匕降龙:{
				name: '贾充/见匕降龙/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.34],
				y: [0,-0.02],
				scale: 1.22,
				angle: 15,
                //speed: 1,
				beijing: {
					name: '贾充/见匕降龙/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},		
		},
        jiaxu: {//贾诩
			爆料皮肤:{
				name: '贾诩/爆料皮肤/XingXiang',
				x: [0,0.2],
				y: [0,0.17],
				scale: 0.5,
				angle: 10,
                speed: 1.5,
				//action: 'DaiJi',
				beijing: {
					name: '贾诩/爆料皮肤/BeiJing',
					scale: 0.3,
					x: [0, 1.7],
					y: [0, 0.5]
				},
			},
			谋定天下: {
				name: '贾诩/谋定天下/daiji',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.43],
				y: [0, 0.61],
				scale: 0.62,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '贾诩/谋定天下/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '贾诩/谋定天下/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '贾诩/谋定天下/beijing',
					x: [0, 0.43],
					y: [0, 0.25],
					scale: 0.4,
				},
			},
            控魂驱魄: {
                name: "贾诩/控魂驱魄/daiji2",
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.4],
				y: [0,0.37],
				angle: -7,
				scale: 1,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '贾诩/控魂驱魄/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '贾诩/控魂驱魄/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '贾诩/控魂驱魄/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },			
			文和乱武: {
				name: '贾诩/文和乱武/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.38],
				y: [0, 0.58],
				scale: 0.85,
				angle: -12,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '贾诩/文和乱武/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '贾诩/文和乱武/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '贾诩/文和乱武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '贾诩/文和乱武/JiSha',
						x: [0, 0.5],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
        },
        jiangwei: {//姜维
			护国麒麟: {
				name: '姜维/护国麒麟/daiji2',
				x: [0, 0.4],
				y: [0, 0.42],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '姜维/护国麒麟/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '姜维/护国麒麟/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '姜维/护国麒麟/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			守毅无疆:{
				name: '姜维/守毅无疆/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.08],
				y: [0,0.26],
				scale: 0.8,
				angle: 5,
                //speed: 1,
				beijing: {
					name: '姜维/守毅无疆/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			妙算神谟: {
				name: '姜维/妙算神谟/xingxiang',
				x: [0,0.46],
				y: [0,0.45],
				angle: 2,
				scale: 0.89,
				version:"4.0",
				json:true,
				gongji:{
					name: '姜维/妙算神谟/xingxiang',
					x: [0,0.62],
					y: [0,0.42],
					angle: -5,
					scale: 0.74,
					version:"4.0",
					json:true,
				},
				beijing: {
					name: '姜维/妙算神谟/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json:true,
				},	
			},
			烽火乱世: {
				name: '姜维/烽火乱世/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.44],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '姜维/烽火乱世/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '姜维/烽火乱世/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '姜维/烽火乱世/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},				
			护战天水: {
				name: '姜维/护战天水/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.44],
				y: [0, 0.56],
				scale: 0.74,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '姜维/护战天水/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '姜维/护战天水/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '姜维/护战天水/beijing',
					x: [0, 1.13],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			星河麒麟:{
				name: '姜维/星河麒麟/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.4],
				y: [0,0.3],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '姜维/星河麒麟/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        jianggan: {//蒋干
            千帆征战: {
                name: "蒋干/千帆征战/daiji2",
				teshu:'play2',
				shan:'play3',
				x: [0,0.43],
				y: [0,0.3],
				angle: 5,
				scale: 1.05,
                speed: 1,
				shizhounian:true,
				chuchang:{
					name:'蒋干/千帆征战/chuchang',
					x: [0, 0.8],
                	y: [0, 0.4],
                	scale: 0.6,
				},
				gongji:{
					name:'蒋干/千帆征战/chuchang',
					x: [0, 0.8],
                	y: [0, 0.4],
                	scale: 0.6,
				},
                beijing:{
					name:'蒋干/千帆征战/beijing',
					x: [0, 0.8],
                	y: [0, 0.4],
                	scale: 0.6,
				},
                skinName: "千帆征战"
            },
			千帆征战decade: {
				name: '蒋干/千帆征战decade/daiji2',
				x: [0, 0.38],
				y: [0, 0.41],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蒋干/千帆征战decade/chuchang',
					scale: 0.5,
					action: 'play',
				},
				gongji: {
					name: '蒋干/千帆征战decade/chuchang',
					scale: 0.7,
					action: 'play',
				},
				beijing: {
					name: '蒋干/千帆征战decade/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			千帆征战ol:{
				name: '蒋干/千帆征战ol/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.28],
				y: [0,0.23],
				scale: 1.05,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '蒋干/千帆征战ol/beijing',
					version:"4.0",
					json: true,
					scale: 0.5,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },   
		jianyong: {//简雍
           夜幕独饮: {
				name: '简雍/夜幕独饮/daiji2',
				x: [0, 0.3],
				y: [0, 0.48],
				scale: 0.9,
				angle: -30,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '简雍/夜幕独饮/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '简雍/夜幕独饮/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '简雍/夜幕独饮/beijing',
					x: [0, 0.29],
					y: [0, 0.48],
					scale: 0.4,
				},
			},
		},
        kongrong: {//孔融
			重阳闲趣: {
				name: '孔融/重阳闲趣/daiji2',
				teshu:'play2',
				shan:'play3',
				x: [0, 0.46],
				y: [0, 0.4],
				scale: 0.92,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孔融/重阳闲趣/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '孔融/重阳闲趣/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孔融/重阳闲趣/beijing',
					x: [0, 0.1],
					y: [0, 0.4],
					scale: 0.4,
				},
			},
        },    
		leitong: {//雷铜
			玄盾溃敌: {
				name: '雷铜/玄盾溃敌/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.55],
				y: [0, 0.4],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '雷铜/玄盾溃敌/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '雷铜/玄盾溃敌/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '雷铜/玄盾溃敌/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },    
        licaiwei: {//李采薇
            琼蕊清涧: {
				name: '李采薇/琼蕊清涧/daiji2',
				x: [0, 0.54],
				y: [0, 0.35],
				scale: 1.1,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '李采薇/琼蕊清涧/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '李采薇/琼蕊清涧/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '李采薇/琼蕊清涧/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        lifeng: {//李丰
			仓箱可期:{
				name: '李丰/仓箱可期/XingXiang',
				x: [0,0.6],
				y: [0,0.6],
				scale: 0.56,
				angle: 6,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '李丰/仓箱可期/BeiJing',
					scale: 0.4,
					x: [0, -0.34],
					y: [0, 0.67]
				},
			},
        },
        lijue: {//李傕
			雕悍狼戾: {
				name: '李傕/雕悍狼戾/daiji2',
				x: [0, 0.4],
				y: [0, 0.44],
				scale: 0.84,
				angle: 0,
				//speed: 1,
				shizhounian: true,
				chuchang: {
					name: '李傕/雕悍狼戾/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '李傕/雕悍狼戾/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '李傕/雕悍狼戾/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			文和乱武: {
				name: '李傕/文和乱武/daiji2',
				x: [0, 0.42],
				y: [0, 0.48],
				scale: 0.82,
				angle: 8,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '李傕/文和乱武/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '李傕/文和乱武/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '李傕/文和乱武/beijing',
					x: [0, -0.07],
					y: [0, 0.66],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '李傕/文和乱武/JiSha',
						x: [0, 0.46],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
        },
        liru: {//李儒
			酆都鬼使: {
                name: "李儒/酆都鬼使/Liru_XingXiang",
                version:"4.0",
  				x: [0,0.51],
				y: [0,0.54],
				angle: 5,
				scale: 0.67,
               speed: 1, //action: "DaiJi",
                background: "李儒/酆都鬼使/beijing.png"
            },
			烈火焚城: {
				name: '李儒/烈火焚城/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.51],
				scale: 0.72,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '李儒/烈火焚城/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '李儒/烈火焚城/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '李儒/烈火焚城/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			业火毒计:{
				name: '李儒/业火毒计/XingXiang',
				x: [0,0.76],
				y: [0,0.36],
				angle: -19,
				scale: 0.33,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '李儒/业火毒计/BeiJing',
					scale: 0.3,
					x: [0, 1.7],
					y: [0, 0.5]
				},
			},
			鸩杀少帝:{
				name: '李儒/鸩杀少帝/XingXiang',
				x: [0,0.2],
				y: [0,0.17],
				scale: 0.5,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '李儒/鸩杀少帝/BeiJing',
					scale: 0.4,
					x: [0, 1.7],
					y: [0, 0.5]
				},
			},
        },
		litong: {//李通
			豫州扬威:{
				name: '李通/豫州扬威/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.4],
				y: [0,0.3],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '李通/豫州扬威/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},
		liwan:{//李婉
            执手同欢:{
				name: '李婉/执手同欢/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.61],
				y: [0,0.37],
				scale: 1.0,
				angle: 15,
                //speed: 1,
				beijing: {
					name: '李婉/执手同欢/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},
        liangxing: {//梁兴
            骁勇金衔: {
				name: '梁兴/骁勇金衔/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.5],
				y: [0, 0.37],
				scale: 1.1,
				angle: 8,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '梁兴/骁勇金衔/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '梁兴/骁勇金衔/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '梁兴/骁勇金衔/beijing',
					x: [0, 1.22],
					y: [0, 0.62],
					scale: 0.4,
				},
				zhishixian: {
					name: '梁兴/骁勇金衔/shouji2',
					scale: 0.5,
					speed: 0.6,
					delay: 0.4,
					effect: {
						name: '梁兴/骁勇金衔/shouji',
						scale: 0.7,
						speed: 0.6,
						delay: 0.3,
					},
				},
			},
        },
        lingju: {//灵雎
			霜刃绚练:{
				name: '灵雎/霜刃绚练/XingXiang',
				x: [0,0.1],
				y: [0,-0.15],
				scale: 0.7,
				angle: 15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '灵雎/霜刃绚练/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			巾帼花武: {
                name: "灵雎/巾帼花武/daiji2",
				teshu: 'play2',
				shan: 'play3',
                x: [0,0.43],
				y: [0,0.6],
				angle: -10,
				scale: 0.72,
                shizhounian: true,  // 标明这是十周年的骨骼, 出场位置和出框默认会在原地, 并且返回也不是位移
                chuchang: {  // 第一回合出场
                	name: "灵雎/巾帼花武/chuchang",
                	action: "play",
                	scale: 0.45
                },
                beijing: {
					name: '灵雎/巾帼花武/beijing',
					x: [0,-1.75],
					y: [0,0.19],
					scale: 0.5,
				},
                skinName: "巾帼花武"
            },
			魂牵梦萦:{
				name: '灵雎/魂牵梦萦/XingXiang',
				x: [0,1.4],
				y: [0,0],
				scale: 0.67,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '灵雎/魂牵梦萦/BeiJing',
					scale: 0.4,
					x: [0, 0.95],
					y: [0, 0.5]
				},
			},
			舞魅蛊心: {//无出场
				name: '灵雎/舞魅蛊心/daiji2',
				x: [0, 0.5],
				y: [0, 0.5],
				scale: 0.95,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                // chuchang: {
					// name: '灵雎/舞魅蛊心/chuchang',
					// scale: 0.7,
					// action: 'play',
				// },
				// gongji: {
					// name: '灵雎/舞魅蛊心/chuchang',
					// scale: 0.9,
					// action: 'play',
				// },
				beijing: {
					name: '灵雎/舞魅蛊心/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        lingcao: {//凌操
			破贼校尉:{
				name: '凌操/破贼校尉/XingXiang',
				x: [0,0.44],
				y: [0,0.27],
				scale: 0.6,
				angle: -20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '凌操/破贼校尉/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        lingtong: {//凌统
			战场荣耀: {
				name: '凌统/战场荣耀/daiji2',			
				shan: 'play3',
				x: [0,0.43],
				y: [0,0.45],
				angle: 0,
				scale: 0.95,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '凌统/战场荣耀/chuchang',
					action: 'play',
					scale: 0.6,
				},
				gongji: {
					name: '凌统/战场荣耀/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '凌统/战场荣耀/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				beijing: {
					name: '凌统/战场荣耀/beijing',
				    x: [0,0.5],
				    y: [0,0.5],
				    scale: 0.3,
				},
				zhishixian: {
					name: '凌统/战场荣耀/shouji2',
					scale: 0.5,
					speed: 0.9,
					delay: 0.7,
					effect: {
						name: '凌统/战场荣耀/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.7,
					},
				},
			},
			/*转战回击:{
				name: '凌统/转战回击/15505',
				x: [0,-0.22],
				y: [0,-0.14],
				scale: 0.62,
				angle: 12,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '凌统/长风破浪/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},*/
			长风破浪:{
				name: '凌统/长风破浪/XingXiang',
				x: [0,-0.22],
				y: [0,-0.14],
				scale: 0.62,
				angle: 12,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '凌统/长风破浪/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            乘帆破浪: {
                name: "凌统/乘帆破浪/daiji2",
				teshu:'play2',
				shan: "play3", // 闪
				x: [0,0.38],
				y: [0,0.38],
				scale: 0.8,
                angle: 0,
                shizhounian: true,
				chuchang: {
					name: '凌统/乘帆破浪/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '凌统/乘帆破浪/chuchang',
					scale: 0.7,
					action: 'play',
				},
				beijing: {
					name: '凌统/乘帆破浪/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "乘帆破浪"
            },	
			索魂夺命: {
				name: "凌统/索魂夺命/daiji2",
				x: [0, 0.5],
				y: [0, 0.4],
				scale: 1.1,
				angle: 0,
				shizhounian: true,  // 标明这是十周年的骨骼, 出场位置和出框默认会在原地, 并且返回也不是位移
				teshu: {
					x: [0, 0.75],
					y: [0, 0.3],
					scale: 0.4,
					name: "凌统/索魂夺命/daiji2",
					action:["play2"]
				},// 触发非攻击
				shan: "play3", // 只有是shizhounian为true时才会播放出闪的动画. 默认play3
				chuchang: {
					name: "凌统/索魂夺命/chuchang",
					action: "play",
					scale: 0.45
				},
				gongji: {
					x: [0, 0.72],
					y: [0, 0.4],
					scale: 0.5,
					name: "凌统/索魂夺命/chuchang",
				},
				beijing: {
					name: '凌统/索魂夺命/beijing',
					scale: 0.4,
					x: [0, 1.2],
					y: [0, 0.5]
				},
				skinName: "索魂夺命",
				zhishixian: {
					name: '凌统/索魂夺命/shouji2',  // 指示线
					scale: 0.6,
					speed: 0.8,
					delay: 0.4,
					effect: {  // 爆炸特效 一般是shouji
						name: '凌统/索魂夺命/shouji',  // 指示线
						scale: 0.6,
						speed: 0.7,
						delay: 0.3,
					}
				}
			},
			炼狱锁魂: {
				name: "凌统/炼狱锁魂/daiji2",
				x: [0, 0.5],
				y: [0, 0.4],
				scale: 1.1,
				angle: 0,
				speed: 1,
				shizhounian: true,  // 标明这是十周年的骨骼, 出场位置和出框默认会在原地, 并且返回也不是位移
				shan: "play3",
				teshu: {
					x: [0, 0.75],
					y: [0, 0.3],
					scale: 0.4,
					name: "凌统/炼狱锁魂/daiji2",
					action:["play2"]
				},// 触发非攻击
				gongji: {
					x: [0, 0.72],
					y: [0, 0.4],
					scale: 0.85,
					name: "凌统/炼狱锁魂/chuchang",
				},
				chuchang: {
					x: [0, 0.72],
					y: [0, 0.4],
					scale: 0.85,
					name: "凌统/炼狱锁魂/chuchang",
				},
				beijing: {
					name: '凌统/炼狱锁魂/beijing',
					scale: 0.4,
					x: [0, 1.2],
					y: [0, 0.5],
				},
				skinName: "炼狱锁魂",
			},
        },
        liubei: {//刘备
			ol大厅:{
				name: '刘备/ol大厅/dating_zhutui02',
				version:"4.0",
				x: [0,1.52],
				y: [0,0.22],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '刘备/ol大厅/dating_zhutui01',
					version:"4.0",
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			六星耀帝: {
				name: '刘备/六星耀帝/daiji2',
				x: [0, 0.44],
				y: [0, 0.48],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘备/六星耀帝/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '刘备/六星耀帝/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '刘备/六星耀帝/beijing',
					x: [0, 0.45],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
			龙骧麟振:{
				name: '刘备/龙骧麟振/XingXiang',
				x: [0,0.36],
				y: [0,0.3],
				scale: 0.46,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '刘备/龙骧麟振/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			明良千古:{
				name: '刘备/明良千古/XingXiang',
				x: [0,1.18],
				y: [0,0.22],
				scale: 0.48,
				angle: 8,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '刘备/明良千古/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			英杰会聚: {
				name: '刘备/英杰会聚/daiji2',
				x: [0, 0.38],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘备/英杰会聚/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '刘备/英杰会聚/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '刘备/英杰会聚/beijing',
					x: [0, 1.28],
					y: [0, 0.45],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '刘备/英杰会聚/JiSha',
						x: [0, 0.48],
						version:"4.0",
						scale: 0.8,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			龙御天下:{
				name: '刘备/龙御天下/XingXiang',
				x: [0,1.5],
				y: [0,0.2],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '刘备/龙御天下/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			猪年圣诞:{
				name: '刘备/猪年圣诞/XingXiang',
				x: [0,0.15],
				y: [0,0.35],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '刘备/猪年圣诞/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        liubian: {//刘辩
			彼岸幽霜:{
				name: '刘辩/彼岸幽霜/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.35],
				y: [0,0.33],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '刘辩/彼岸幽霜/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '刘辩/彼岸幽霜/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '刘辩/彼岸幽霜/beijing',
					version:"4.0",
					json: true,
					scale: 1.2,
					x: [0, 0.47],
					y: [0, 0.32]
				},
				zhishixian: {
					name: '刘辩/彼岸幽霜/jineng02',
					version:"4.0",
				    json: true,
					scale: 0.6,
					speed: 0.6,
					delay: 0.4,
				},
			},
			福泽金蕊: {
				name: '刘辩/福泽金蕊/daiji2',
				x: [0, 0.43],
				y: [0, 0.4],
				scale: 1.05,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘辩/福泽金蕊/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '刘辩/福泽金蕊/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '刘辩/福泽金蕊/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			鹊乐织欣:{
				name: '刘辩/鹊乐织欣/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.25],
				y: [0,0.42],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '刘辩/鹊乐织欣/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			少帝龙威: {
				name: '刘辩/少帝龙威/daiji2',
				x: [0, 0.43],
				y: [0, 0.53],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘辩/少帝龙威/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '刘辩/少帝龙威/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '刘辩/少帝龙威/beijing',
					x: [0, 0.49],
					y: [0, 0.28],
					scale: 0.4,
				},
			},      
        },        
        liubiao: { //刘表
            柔情钰露: {
				name: '刘表/柔情钰露/daiji2',
				x: [0, 0.43],
				y: [0, 0.42],
				scale: 1.05,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘表/柔情钰露/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '刘表/柔情钰露/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '刘表/柔情钰露/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },       
        
        liushan: {//刘禅
			流马闹市:{
				name: '刘禅/流马闹市/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.5],
				y: [0,0.44],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '刘禅/流马闹市/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			猪年端午:{
				name: '刘禅/猪年端午/XingXiang',
				x: [0,0.5],
				y: [0,0.28],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '刘禅/猪年端午/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},	
			虚拟天团: {
                name: '刘禅/虚拟天团/daiji2',
				x: [0,0.52],
				y: [0,0.5],
				angle: -17,
				scale: 0.78,
				//speed:1,
				shizhounian: true,
				chuchang:{
					name:'刘禅/虚拟天团/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji:{
					name:'刘禅/虚拟天团/chuchang',
					scale: 0.75,
					action: 'play',
				},
				beijing: {
					name:'刘禅/虚拟天团/beijing_1',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},

            },		
        },
        liucheng: {//刘赪
			明良千古:{
				name: '刘赪/明良千古/XingXiang',
				x: [0,1.11],
				y: [0,-0.02],
				scale: 0.54,
				angle: -12,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '刘赪/明良千古/BeiJing',
					scale: 0.4,
					x: [0, -0.9],
					y: [0, 0.5]
				},
			},
        },
        liufeng: {//刘封
			立嗣陷危: {
				name: '刘封/立嗣陷危/daiji2',
				x: [0, 0.5],
				y: [0, 0.69],
				scale: 0.88,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘封/立嗣陷危/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '刘封/立嗣陷危/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '刘封/立嗣陷危/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			焰魂锁身:{
				name: '刘封/焰魂锁身/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.52],
				y: [0,0.18],
				scale: 1,
				angle: 5,
                //speed: 1,
				beijing: {
					name: '刘封/焰魂锁身/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		liuhong: {//刘宏
			俪觞妙舞:{
				name: '刘宏/俪觞妙舞/xingxiang',
				version:"4.0",
				json: true,
				x: [0,2.65],
				y: [0,-0.1],
				scale: 1.1,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '刘宏/俪觞妙舞/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			长乐未央: {
				name: '刘宏/长乐未央/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.75],
				y: [0,0.29],
				scale: 1.16,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘宏/长乐未央/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '刘宏/长乐未央/chuchang',
					action: 'play',
					scale: 0.7,
				},
				beijing: {
					name: '刘宏/长乐未央/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
		},
        liuxie: {//刘协
			汉末龙裔: {
				name: '刘协/汉末龙裔/daiji2',
				x: [0, 0.41],
				y: [0, 0.47],
				scale: 0.82,
				angle: -8,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘协/汉末龙裔/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '刘协/汉末龙裔/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '刘协/汉末龙裔/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
            困龙欲出: {
                name: "刘协/困龙欲出/daiji2",
                x: [0, 0.4],
                y: [0, 0.3],
                scale: 0.9,
                angle: 0,
                shizhounian: true,
				chuchang: {
					name: '刘协/困龙欲出/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '刘协/困龙欲出/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '刘协/困龙欲出/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
                skinName: "困龙欲出"
            },
             凤历迎春: {
                name: "刘协/凤历迎春/daiji2",
                x: [0, 0.65],
                y: [0, 0.4],
                scale: 0.8,
                angle: 20,
                shizhounian: true,
				chuchang: {
					name: '刘协/凤历迎春/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '刘协/凤历迎春/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '刘协/凤历迎春/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
                skinName: "凤历迎春"
            },           			
			龙困于渊:{
				name: '刘协/龙困于渊/XingXiang',
				x: [0,-0.14],
				y: [0,0.13],
				scale: 0.8,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '刘协/龙困于渊/BeiJing',
					scale: 0.1,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			困龙犹斗:{
				name: '刘协/困龙犹斗/XingXiang',
				x: [0,0.31],
				y: [0,0.43],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '刘协/困龙犹斗/BeiJing',
					scale: 0.1,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			万福千灯: {
				name: '刘协/万福千灯/daiji2',
				x: [0, 0.39],
				y: [0, 0.5],
				scale: 0.85,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘协/万福千灯/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '刘协/万福千灯/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '刘协/万福千灯/beijing',
					x: [0, -0.1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        liuyan: {//刘焉
            秋霜金枫: {
				name: '刘焉/秋霜金枫/daiji2',
				shan: 'play3',
				x: [0, 0.31],
				y: [0, 0.37],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘焉/秋霜金枫/chuchang',
					action: 'play',
					scale: 0.75,
				},
				gongji: {
					name: '刘焉/秋霜金枫/chuchang2',
					action: 'gongji',
					scale: 0.65,
				},
				teshu: {
					name: '刘焉/秋霜金枫/chuchang2',
					action: 'jineng',
					scale: 0.65,
				},
				beijing: {
					name: '刘焉/秋霜金枫/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '刘焉/秋霜金枫/shouji2',
					scale: 0.5,
					speed: 0.5,
					delay: 0.4,
					effect: {
						name: '刘焉/秋霜金枫/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
			雄踞益州:{
				name: '刘焉/雄踞益州/XingXiang',
				x: [0,0.5],
				y: [0,0.11],
				scale: 0.56,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '刘焉/雄踞益州/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			异心显露: {
				name: '刘焉/异心显露/daiji2',
				x: [0, 0.36],
				y: [0, 0.47],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘焉/异心显露/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '刘焉/异心显露/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '刘焉/异心显露/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			逐鹿天下: {
				name: '刘焉/逐鹿天下/daiji2',
				x: [0, 0.4],
				y: [0, 0.52],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘焉/逐鹿天下/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '刘焉/逐鹿天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '刘焉/逐鹿天下/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        liuyao: {//刘繇
			雨凄悲流: {
				name: '刘繇/雨凄悲流/daiji2',
				x: [0, 0.36],
				y: [0, 0.39],
				scale: 0.9,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘繇/雨凄悲流/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '刘繇/雨凄悲流/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '刘繇/雨凄悲流/beijing',
					x: [0, 0.3],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        liuyong: {//刘永
			砺剑忾仇: {
				name: '刘永/砺剑忾仇/daiji2',
				x: [0, 0.44],
				y: [0, 0.43],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘永/砺剑忾仇/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '刘永/砺剑忾仇/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '刘永/砺剑忾仇/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			仗剑诛邪: {
				name: '刘永/仗剑诛邪/daiji2',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '刘永/仗剑诛邪/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '刘永/仗剑诛邪/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '刘永/仗剑诛邪/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        liuzan: {//留赞
			抗音而歌:{
				name: '留赞/抗音而歌/XingXiang',
				x: [0,0.45],
				y: [0,-0.2],
				scale: 0.68,
				angle: -5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '留赞/抗音而歌/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            高歌陷陈: {
                name: '留赞/高歌陷陈/daiji2',
				x: [0,0.23],
				y: [0,0.51],
				angle: -21,
				scale: 0.85,
                shizhounian:true,
				chuchang:{
					name:'留赞/高歌陷陈/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '留赞/高歌陷陈/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '留赞/高歌陷陈/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				
            },			
			灵魂歌王:{
				name: '留赞/灵魂歌王/XingXiang',
				x: [0,-0.43],
				y: [0,-0.06],
				scale: 0.54,
				angle: 15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '留赞/灵魂歌王/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            新春歌王: {
                name: "skin_liuzan_xinchungewang",
                x: [0, -0.2],
                y: [0, -0.05],
                scale: 0.5,
                angle: 20,
                speed: 1,
				beijing: {
					name: '留赞/灵魂歌王/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
                //background: "skin_liuzan_xinchungewang_bg",
                skinName: "新春歌王"
            },			
        },
		lushi: {//卢氏
			蝶恋清幔:{
				name: '卢氏/蝶恋清幔/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.3],
				y: [0,0.3],
				scale: 0.85,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '卢氏/蝶恋清幔/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			金桂月华:{
				name: '卢氏/金桂月华/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.2],
				y: [0,0.35],
				scale: 0.9,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '卢氏/金桂月华/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		luyi:{//卢弈
			瑶颜如玉: {
				name: '卢弈/瑶颜如玉/daiji2',
				x: [0, 0.5],
				y: [0, 0.35],
				scale: 1.1,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '卢弈/瑶颜如玉/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '卢弈/瑶颜如玉/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '卢弈/瑶颜如玉/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			姝丽风华: {
				name: '卢弈/姝丽风华/daiji2',
				x: [0, 0.5],
				y: [0, 0.35],
				scale: 1.1,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '卢弈/姝丽风华/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '卢弈/姝丽风华/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '卢弈/姝丽风华/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			祈福:{
				name: '卢弈/祈福/SF_qifu_eff_luyi',
				x: [0,2.39],
				y: [0,0.08],
				angle: -2,
				scale: 0.62,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '董贵人/春殿踏水/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
				
		},
        yl_luzhi: {//卢植
			抒墨谏策: {
				name: '卢植/抒墨谏策/daiji2',
				x: [0, 0.4],
				y: [0, 0.57],
				scale: 0.75,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '卢植/抒墨谏策/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '卢植/抒墨谏策/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '卢植/抒墨谏策/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        ol_lusu: {//鲁肃
			缔造联盟: {
				name: '鲁肃/缔造联盟/daiji2',
				x: [0, 0.41],
				y: [0, 0.42],
				scale: 0.92,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '鲁肃/缔造联盟/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '鲁肃/缔造联盟/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '鲁肃/缔造联盟/beijing',
					x: [0, -0.4],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			联刘抗曹:{
				name: '鲁肃/联刘抗曹/XingXiang',
				x: [0,0.46],
				y: [0,-0.1],
				scale: 0.62,
				angle: -15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '鲁肃/联刘抗曹/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			谋定天下: {
				name: '鲁肃/谋定天下/daiji2',
				x: [0, 0.4],
				y: [0, 0.49],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '鲁肃/谋定天下/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '鲁肃/谋定天下/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '鲁肃/谋定天下/beijing',
					x: [0, 0.5],
					y: [0, 0.45],
					scale: 0.4,
				},
			},
			周济万民: {
				name: '鲁肃/周济万民/daiji2',
				x: [0, 0.32],
				y: [0, 0.55],
				scale: 0.8,
				angle: -15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '鲁肃/周济万民/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '鲁肃/周济万民/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '鲁肃/周济万民/beijing',
					x: [0, 0.6],
					y: [0, 0.45],
					scale: 0.4,
				},
			},
        },
		luzhi: {//鲁芝
			斩关赴难:{
				name: '鲁芝/斩关赴难/xingxiang',
				version:"4.0",
				x: [0,0.3],
				y: [0,0.18],
				scale: 1.2,
				angle: 0,
                //speed: 1,
				gongji: 'play',
				beijing: {
					name: '鲁芝/斩关赴难/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        luji: {//陆绩
			橘暖星河: {
				name: '陆绩/橘暖星河/xingxiang',
				x: [0,0.4],
				y: [0,0.3],
				angle: -5,
				scale: 0.93,
				version:"4.0",
				json:'true',
				gongji:{
					name: '陆绩/橘暖星河/xingxiang',
					x: [0,0.62],
					y: [0,0.42],
					angle: -5,
					scale: 0.74,
					version:"4.0",
					json:'true',
				},
				beijing: {
					name: '陆绩/橘暖星河/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json:'true',
				},
				skinName: '橘暖星河',
			},
			星熠心移: {
				name: '陆绩/星熠心移/daiji2',
				x: [0, 0.27],
				y: [0, 0.42],
				scale: 0.9,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陆绩/星熠心移/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '陆绩/星熠心移/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '陆绩/星熠心移/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            玉桂月满: {
                name: "陆绩/玉桂月满/daiji2",
                x: [0, 0.5],
                y: [0, 0.3],
                scale: 0.9,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陆绩/玉桂月满/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '陆绩/玉桂月满/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '陆绩/玉桂月满/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "玉桂月满"
            },			
        },
        lukang: {//陆抗
			端茂劲争:{
				name: '陆抗/端茂劲争/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.48],
				y: [0,0.45],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '陆抗/端茂劲争/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			毁堰破晋: {
				name: '陆抗/毁堰破晋/daiji2',
				x: [0, 0.4],
				y: [0, 0.54],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陆抗/毁堰破晋/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '陆抗/毁堰破晋/chuchang',
					scale: 1.3,
					action: 'play',
				},
				
				beijing: {
					name: '陆抗/毁堰破晋/beijing',
					x: [0, 0.4],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            /*父志秉承: {
                name: "skin_Decennial_LuKang_FuZhiBingCheng",
                x: [0, 1.3],
                y: [0, 0.5],
                scale: 0.7,
                angle: -5,
                speed: 1,
                background: "skin_Decennial_LuKang_FuZhiBingCheng_bg.png",
                skinName: "父志秉承"
            },	*/
			父志秉承:{
				name: '陆抗/父志秉承/xingxiang',
				x: [0,1.58],
				y: [0,0.5],
				scale: 0.84,
				angle: 0,
				version: '4.0',  
				json: true,   
				shizhounian: true,
				gongji: {  
					name:"陆抗/父志秉承/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					version:"4.0",
					json: true ,
					speed:2, 
				},				
				beijing: {
					name: '陆抗/父志秉承/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale:0.6
				},
				effect: {  
					name: '陆抗/父志秉承/xingxiang_2', 
					scale: 0.6,
					speed: 0.7,
					delay: 0.2,
					version:"4.0",json: true  
				}, 

			},		
			月兔琼香: {
				name: '陆抗/月兔琼香/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.65],
				y: [0, 0.28],
				scale: 1.2,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陆抗/月兔琼香/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '陆抗/月兔琼香/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '陆抗/月兔琼香/beijing',
					x: [0, 0.5],
					y: [0, 0.44],
					scale: 0.45,
				},
				zhishixian: {
					name: '陆抗/月兔琼香/shouji2',
					scale: 0.5,
					speed: 1,
					delay: 0.4,
					effect: {
						name: '陆抗/月兔琼香/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.6,
					},
				},
			},
        },
                
        luxun: {//陆逊
			烈火炽天:{
				name: '陆逊/烈火炽天/XingXiang',
				x: [0,-0.78],
				y: [0,0.22],
				scale: 0.55,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '陆逊/烈火炽天/BeiJing',
					scale: 0.4,
					x: [0, 0.76],
					y: [0, 0.5]
				},
			},
			谋定天下: {
				name: '陆逊/谋定天下/daiji2',
				x: [0, 0.4],
				y: [0, 0.46],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陆逊/谋定天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '陆逊/谋定天下/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '陆逊/谋定天下/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			清雨踏春: {
				name: '陆逊/清雨踏春/daiji2',
				x: [0, 0.5],
				y: [0, 0.63],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陆逊/清雨踏春/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '陆逊/清雨踏春/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '陆逊/清雨踏春/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			娴雅清乐:{
				name: '陆逊/娴雅清乐/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.9],
				y: [0,0.3],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '陆逊/娴雅清乐/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			猪年圣诞:{
				name: '陆逊/猪年圣诞/XingXiang',
				x: [0,0.3],
				y: [0,-0.15],
				scale: 0.7,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '陆逊/猪年圣诞/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        luyusheng: {//陆郁生
			楚楚菁华: {
				name: '陆郁生/楚楚菁华/daiji2',
				x: [0, 0.4],
				y: [0, 0.34],
				scale: 1.05,
				angle: -25,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陆郁生/楚楚菁华/chuchang',
					scale: 0.65,
					action: 'play',
				},
				gongji: {
					name: '陆郁生/楚楚菁华/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '陆郁生/楚楚菁华/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			玉桂月满: {
				name: '陆郁生/玉桂月满/daiji2',
				x: [0, 0.4],
				y: [0, 0.38],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陆郁生/玉桂月满/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '陆郁生/玉桂月满/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '陆郁生/玉桂月满/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战场绝版: {
				name: '陆郁生/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.36],
				scale: 1.12,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '陆郁生/战场绝版/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '陆郁生/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.7,
				},
				beijing: {
					name: '陆郁生/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '陆郁生/战场绝版/shouji2',
					scale: 0.5,
					speed: 1.2,
					delay: 0.3,
					effect: {
						name: '陆郁生/战场绝版/shouji',
						scale: 0.6,
						speed: 0.6,
						delay: 0.7,
					},
				},
			},
        },
        lvbu: {//吕布
			盖世无双:{
				name: '吕布/盖世无双/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.56],
				y: [0,0.47],
				scale: 0.8,
				angle: 5,
                //speed: 1,
				beijing: {
					name: '吕布/盖世无双/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			盖世无双2: {
				name: '吕布/盖世无双2/daiji2',
				teshu: 'play2',
				x: [0,0.48],
				y: [0,0.41],
				angle: 11,
				scale: 0.74,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕布/盖世无双2/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '吕布/盖世无双2/chuchang',
					x: [0, 0.5],
					y: [0, 0.4],
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '吕布/盖世无双2/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			傲睨万物:{
				name: '吕布/傲睨万物/XingXiang',
				x: [0,0.28],
				y: [0,0.34],
				scale: 0.52,
				angle: 15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '吕布/傲睨万物/BeiJing',
					scale: 0.4,
					x: [0, 0.18],
					y: [0, 0.41]
				},
			},
			傲睨万物2:{
				name: '吕布/傲睨万物2/XingXiang',
				x: [0,0.28],
				y: [0,0.34],
				scale: 0.52,
				angle: 15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '吕布/傲睨万物2/BeiJing',
					scale: 0.4,
					x: [0, 0.18],
					y: [0, 0.41]
				},
			},
            文和乱武: {
                name: '吕布/文和乱武/daiji2',
				teshu: 'play2',
                x: [0, 0.85],
                y: [0, 0.1],
                scale: 0.9,
                angle: -20,
                 //speed: 1,
				 shizhounian: true,
				 chuchang: {
					 name: '吕布/文和乱武/chuchang',
					 scale: 0.8,
					 action: 'play',
				 },
				 gongji: {
					 name: '吕布/文和乱武/chuchang',
					 scale: 1,
					 action: 'play',
				 },
				 beijing: {
					 name: '吕布/文和乱武/beijing',
					 x: [0, 0.5],
					 y: [0, 0.5],
					 scale: 0.4,
				 },
                skinName: "文和乱武"
            },			
			鼠年七夕:{
				name: '吕布/鼠年七夕/XingXiang',
				x: [0,0.46],
				y: [0,0.23],
				scale: 0.5,
				angle: 5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '吕布/鼠年七夕/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			武动乾坤: {
				name: '吕布/武动乾坤/daiji2',
				teshu: 'play2',
				x: [0, 0.21],
				y: [0, 0.54],
				scale: 0.82,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕布/武动乾坤/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '吕布/武动乾坤/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '吕布/武动乾坤/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '吕布/武动乾坤/JiSha',
						x: [0, 0.4],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			虓虎之勇:{
				name: '吕布/虓虎之勇/XingXiang',
				x: [0,0.44],
				y: [0,0.3],
				scale: 0.56,
				angle: 0,
                speed: 1.5,
				gongji: 'ChuChang',
				//action: 'DaiJi',
				beijing: {
					name: '吕布/虓虎之勇/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			
			新春鑫舞: {
				name: '吕布/新春鑫舞/daiji2',
				teshu: 'play2',
				x: [0, 0.36],
				y: [0, 0.53],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕布/新春鑫舞/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '吕布/新春鑫舞/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '吕布/新春鑫舞/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        lvdai: {//吕岱
			交趾震威: {
				name: '吕岱/交趾震威/daiji2',
				x: [0, 0.6],
				y: [0, 0.5],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕岱/交趾震威/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '吕岱/交趾震威/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '吕岱/交趾震威/beijing',
					x: [0, 0.77],
					y: [0, 0.47],
					scale: 0.4,
				},
			},
        },
        lvkai: {//吕凯
			逐鹿天下: {
				name: '吕凯/逐鹿天下/daiji2',
				x: [0, 0.43],
				y: [0, 0.57],
				scale: 0.76,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕凯/逐鹿天下/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '吕凯/逐鹿天下/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '吕凯/逐鹿天下/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		lvkuanglvxiang: {//吕旷吕翔
			扶危挽澜:{
				name: '吕旷吕翔/扶危挽澜/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.68],
				y: [0,0.45],
				scale: 0.45,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '吕旷吕翔/扶危挽澜/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        lvlingqi: {//吕玲绮
			繁华彩鸢: {
				name: '吕玲绮/繁华彩鸢/daiji2',
				x: [0, 0.42],
				y: [0, 0.35],
				scale: 1.15,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕玲绮/繁华彩鸢/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '吕玲绮/繁华彩鸢/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '吕玲绮/繁华彩鸢/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			盖世无双2: {
				name: '吕玲绮/盖世无双2/daiji2',
				x: [0, 0.4],
				y: [0, 0.44],
				scale: 1,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕玲绮/盖世无双2/chuchang',
					scale: 0.55,
					action: 'play',
				},
				gongji: {
					name: '吕玲绮/盖世无双2/chuchang',
					scale: 0.75,
					action: 'play',
				},
				beijing: {
					name: '吕玲绮/盖世无双2/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			战场绝版: {
				name: '吕玲绮/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.26],
				y: [0, 0.41],
				scale: 1.2,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕玲绮/战场绝版/chuchang',
					action: 'play',
					scale: 1.1,
				},
				gongji: {
					name: '吕玲绮/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.9,
				},
				beijing: {
					name: '吕玲绮/战场绝版/beijing',
					x: [0, 0.3],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '吕玲绮/战场绝版/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '吕玲绮/战场绝版/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
			绝版改色: {
				name: '吕玲绮/绝版改色/daiji2',  // 可以直接文件夹带名字
				x: [0, 0.16],
				y: [0, 0.43],
				scale: 1.2,
				gongji: {
					name: '吕玲绮/绝版改色/chuchang2',
					scale: 0.7,
					action: ['gongji', 'jineng'],  // 现在可以直接填写多个攻击标签, 这样会随机使用一个攻击动作播放
				},
				teshu: 'play2',  // 特殊标签刚刚写错了
				beijing: {
					name: '吕玲绮/绝版改色/beijing',
					scale: 0.4,
					x: [0, 1.2],
					y: [0, 0.5]
				},
				chuchang: {
					name: '吕玲绮/绝版改色/chuchang',
					scale: 0.8,
					action: 'play'
				},
				shizhounian: true,
				// 十周年指示线特效包括shouji和shouji2
				zhishixian: {
					name: '吕玲绮/绝版改色/shouji2',  // 指示线
					scale: 0.8,
					speed: 0.5,
					delay: 0.5,  // 指示线在攻击多久后出现, 区间[0, 1], 默认0
					effect: {  // 爆炸特效 一般是shouji
						name: '吕玲绮/绝版改色/shouji',  // 指示线
						scale: 0.6,
						speed: 0.7,
						delay: 0.2,
					}
				}
			},
			炽焱流金1: {
                name: "skin_Decennial_LvLingQi_ChiYanLiuJin",
                x: [0, 1.25],
                y: [0, 0.2],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_LvLingQi_ChiYanLiuJin_bg.png",
                skinName: "炽焱流金1"
            },
            炽焱流金: {
                name: '吕玲绮/炽焱流金/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.5],
				y: [0,0.42],
				scale: 0.85,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕玲绮/炽焱流金/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '吕玲绮/炽焱流金/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '吕玲绮/炽焱流金/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "炽焱流金"
            },			
        },
		lvmeng: {//吕蒙
			剑起惊澜:{
				name: '吕蒙/剑起惊澜/XingXiang',
				x: [0,0.54],
				y: [0,0.35],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '吕蒙/剑起惊澜/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			清雨踏春: {
				name: '吕蒙/清雨踏春/daiji2',
				x: [0, 0.52],
				y: [0, 0.42],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕蒙/清雨踏春/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '吕蒙/清雨踏春/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '吕蒙/清雨踏春/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			天江锋刃:{
				name: '吕蒙/天江锋刃/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.58],
				y: [0,0.28],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '吕蒙/天江锋刃/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			携粽濯荷: {
				name: '吕蒙/携粽濯荷/xingxiang',
				x: [0, 0.40],
				y: [0, 0.14],
				teshu: 'HuDong',
				scale: 1,
				speed: 1,
				json: true,
				version: "4.0",
				action: 'DaiJi',
				chuchang: {
					name: '吕蒙/携粽濯荷/qianjing',
					x: [0, 0.64],
					y: [0, 0.39],
					scale: 0.92,
					action: 'ChuChang',
					json: true,
					version: "4.0",
					//speed: 2,
				},
				gongji: {
					name: '吕蒙/携粽濯荷/xingxiang',
					x: [0, 0.64],
					y: [0, 0.39],
					scale: 0.92,
					action: ['GongJi','JiNeng'],
					json: true,
					version: "4.0",
				},
				beijing: {
					name: '吕蒙/携粽濯荷/beijing',
					action:'DaiJi',
					x: [0, 0.2],
					y: [0, 0.53],
					scale: 0.51,
					speed: 1,
					json: true,
					version: "4.0",
				},
			},
        },
        lvqian: {//吕虔
			佩刀显威: {
				name: '吕虔/佩刀显威/daiji2',
				x: [0, 0.46],
				y: [0, 0.51],
				scale: 0.8,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吕虔/佩刀显威/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '吕虔/佩刀显威/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '吕虔/佩刀显威/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		
        machao: {//马超  
			炽火流焰: {
				name: '马超/炽火流焰/xingxiang',
				x: [0, -0.17],
				y: [0, 0.35],
				teshu: 'HuDong',
				scale: 1,
				speed: 1,
				json: true,
				version: "4.0",
				action: 'DaiJi',
				ss_jinchang: 'ChuChang',
				chuchang: {
					name: '马超/炽火流焰/qianjing',
					x: [0, 0.64],
					y: [0, 0.39],
					scale: 0.92,
					action: 'ChuChang',
					json: true,
					version: "4.0",
					//speed: 2,
				},
				gongji: {
					name: '马超/炽火流焰/xingxiang',
					x: [0, 0.64],
					y: [0, 0.39],
					scale: 0.92,
					action: ['GongJi','JiNeng'],
					json: true,
					version: "4.0",
				},
				beijing: {
					name: '马超/炽火流焰/beijing',
					action:'DaiJi',
					ss_jinchang: 'ChuChang',
					x: [0, 0.2],
					y: [0, 0.53],
					scale: 0.51,
					speed: 1,
					json: true,
					version: "4.0",
				},
			},       			
			明良千古:{
				name: '马超/明良千古/XingXiang',
				x: [0,0.4],
				y: [0,0.32],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马超/明良千古/BeiJing',
					scale: 0.4,
					x: [0, -0.8],
					y: [0, 0.5]
				},
			},
			铁骑烈焰:{
				name: '马超/铁骑烈焰/xingxiang',
				version:"4.0",
				x: [0,1.24],
				y: [0,0.2],
				scale: 1.2,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '马超/铁骑烈焰/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, -0.3],
					y: [0, 0.5]
				},
			},
			武动乾坤: {
				name: '马超/武动乾坤/daiji2',
				x: [0, 0.48],
				y: [0, 0.5],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '马超/武动乾坤/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '马超/武动乾坤/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '马超/武动乾坤/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			西凉雄狮:{
				name: '马超/西凉雄狮/XingXiang',
				x: [0,0.58],
				y: [0,0.2],
				scale: 0.65,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马超/西凉雄狮/BeiJing',
					scale: 0.24,
					x: [0, 0.46],
					y: [0, 0.39]
				},
			},
			新桃迎卯:{
				name: '马超/新桃迎卯/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-1.1],
				y: [0,0.4],
				scale: 0.9,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '马超/新桃迎卯/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			星夜袭曹:{
				name: '马超/星夜袭曹/XingXiang',
				x: [0,1],
				y: [0,0.13],
				angle: -12,
				scale: 0.43,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马超/星夜袭曹/BeiJing',
					scale: 0.4,
					x: [0, 0.8],
					y: [0, 0.5]
				},
			},
			虚拟天团: {
                name: "马超/虚拟天团/daiji2",
				x: [0,0.36],
				y: [0,0.39],
				scale: 0.9,
                angle: 0,
                shizhounian: true,
                chuchang: {
					name: '马超/虚拟天团/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '马超/虚拟天团/chuchang',
					scale: 1.0,
					action: 'play',
				},
				beijing: {
					name: '马超/虚拟天团/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "虚拟天团"
            },
			折花心动:{
				name: '马超/折花心动/xingxiang',
				version:"4.0",
				x: [0,1.32],
				y: [0,0.4],
				scale: 1,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '马超/折花心动/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			壮志凌云: {
                name: "skin_Mobile_MaChao_ZhuangZhiLingYun",
                x: [0, 1.05],
                y: [0, 0.42],
                scale: 0.45,
                angle: 0,
                speed: 1,
                //action: "DaiJi",
                background: "skin_Mobile_MaChao_ZhuangZhiLingYun_bg.png",
                skinName: "壮志凌云"
            }, 
			虎年冬至:{
				name: '马超/虎年冬至/XingXiang',
				x: [0,0.7],
				y: [0,0.55],
				scale: 0.43,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马超/虎年冬至/BeiJing',
					scale: 0.4,
					x: [0, 0.36],
					y: [0, 0.58]
				},
			},
			牛年春节:{
				name: '马超/牛年春节/XingXiang',
				x: [0,1.57],
				y: [0,0.24],
				scale: 0.85,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马超/牛年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        madai: { //马岱
            一合而斩: {
                name: "skin_Decennial_MaDai_YiHeErZhan",
                x: [0, 0.7],
                y: [0, 0],
                scale: 0.5,
                angle: 5,
                speed: 1,
				shizhounian:true,
				chuchang: {
					name: 'madai',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: 'madai',
					scale: 1.3,
					action: 'play',
				},
                background: "skin_Decennial_MaDai_YiHeErZhan_bg.png",
                skinName: "一合而斩"
            },
        },       
        majun: {//马钧
			能工巧匠:{
				name: '马钧/能工巧匠/XingXiang',
				x: [0,0.3],
				y: [0,0.2],
				scale: 0.48,
				angle: -5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马钧/能工巧匠/BeiJing',
					scale: 0.4,
					x: [0, -0.8],
					y: [0, 0.4]
				},
			},
        },
		maliang: {//马良
			千计卷来:{
				name: '马良/千计卷来/xingxiang',
				x: [0,0.62],
				y: [0,0.42],
				angle: -5,
				scale: 0.74,
				version:"4.0",
				gongji:{
					name: '马良/千计卷来/xingxiang',
					x: [0,0.62],
					y: [0,0.42],
					angle: -5,
					scale: 0.74,
					version:"4.0",
				},
				beijing: {
					name: '马良/千计卷来/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
				skinName:"千计卷来"
			},
        },
		masu: {//马谡
			勘策惊涛:{
				name: '马谡/勘策惊涛/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.15],
				y: [0,0.28],
				scale: 1,
				angle: -40,
                //speed: 1,
				beijing: {
					name: '马谡/勘策惊涛/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        mayunlu: {//马云騄
			花海舞枪:{
				name: '马云騄/花海舞枪/XingXiang',
				x: [0,-0.05],
				y: [0,-0.26],
				scale: 0.85,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马云騄/花海舞枪/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            战场绝版: {
                name: '马云騄/战场绝版/daiji2',
				x: [0,0.42],
				y: [0,0.52],
				scale: 0.79,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '马云騄/战场绝版/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '马云騄/战场绝版/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '马云騄/战场绝版/beijing',
					x: [0, 0.36],
					y: [0, 0.5],
				}
					
            },
            巾帼花武: {
                name: '马云騄/巾帼花武/daiji2',
				x: [0,0.57],
				y: [0,0.46],
				scale: 0.73,
				angle: 0, 
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '马云騄/巾帼花武/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '马云騄/巾帼花武/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '马云騄/巾帼花武/beijing',
					x: [0, 0.36],
					y: [0, 0.5],
					scale: 0.4,
				},
            },           			
			花好月圆: {
				name: '马云騄/花好月圆/daiji2',
				x: [0, 0.6],
				y: [0, 0.54],
				scale: 0.88,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '马云騄/花好月圆/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '马云騄/花好月圆/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '马云騄/花好月圆/beijing',
					x: [0, 0.36],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			明良千古:{
				name: '马云騄/明良千古/XingXiang',
				x: [0,1.1],
				y: [0,0.35],
				scale: 0.5,
				angle: 20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马云騄/明良千古/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			舐伤伴君: {
				name: '马云騄/舐伤伴君/daiji2',
				x: [0, 0.47],
				y: [0, 0.6],
				scale: 0.78,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '马云騄/舐伤伴君/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '马云騄/舐伤伴君/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '马云騄/舐伤伴君/beijing',
					x: [0, 0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			新桃迎卯:{
				name: '马云騄/新桃迎卯/xingxiang',
				version:"4.0",
				json: true,
				x: [0,2.7],
				y: [0,0.2],
				scale: 1.2,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '马云騄/新桃迎卯/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			烟绚繁星: {
				name: '马云騄/烟绚繁星/daiji2',
				x: [0, 0.33],
				y: [0, 0.5],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '马云騄/烟绚繁星/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '马云騄/烟绚繁星/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '马云騄/烟绚繁星/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			桃灼鹊跃: {
				name: '马云禄/桃灼鹊跃/MaYunLu_XingXiang2',
				version: '4.0',
				//alpha: true,
				x: [0,0.68],
				y: [0,0.64],
				scale: 0.33,
				background: '马云禄/桃灼鹊跃/beijing.png',
			},
			凤舞迎春: {
				name: '马云禄/凤舞迎春/XingXiang',
				version: '4.0',
				//alpha: true,
				x: [0,0.5],
				y: [0,0.39],
				scale: 0.58,
				background: '马云禄/凤舞迎春/beijing.png',
			},
			牛年春节:{
				name: '马云騄/牛年春节/XingXiang',
				x: [0,0.66],
				y: [0,-0.02],
				scale: 0.8,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马云騄/牛年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			猪年大雪:{
				name: '马云騄/猪年大雪/XingXiang',
				x: [0,0.1],
				y: [0,0.1],
				scale: 0.7,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '马云騄/猪年大雪/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
		dc_mengda: {//孟达
			蛇心吞象: {
				name: '孟达/蛇心吞象/daiji2',
				x: [0, 0.55],
				y: [0, 0.39],
				scale: 1,
				angle: -15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孟达/蛇心吞象/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '孟达/蛇心吞象/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孟达/蛇心吞象/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
		menghuo:{
			斧过城摧:{
				name: '孟获/斧过城摧/xingxiang',
				x: [0,1.2],
				y: [0,0.19],
				angle: -16,
				scale: 0.8,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"孟获/斧过城摧/xingxiang",		          
					x: [0,0.77],
					y: [0,0.39],
					scale: 0.65,		
					version:"4.0",
					json: true  
				   },    
				beijing: {
					name: '孟获/斧过城摧/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale: 0.6,
				},

			},
			祸崇南疆:{
				name: '孟获/祸崇南疆/XingXiang',
				x: [0,0.2],
				y: [0,0.45],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孟获/祸崇南疆/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
		},
        miheng: {//祢衡
			龙威虎震: {
				name: '祢衡/龙威虎震/daiji2',
				x: [0, 0.86],
				y: [0, 0.52],
				scale: 0.9,
				angle: 25,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '祢衡/龙威虎震/chuchang',
					scale: 0.5,
					action: 'play',
				},
				gongji: {
					name: '祢衡/龙威虎震/chuchang',
					scale: 0.6,
					action: 'play',
				},
				beijing: {
					name: '祢衡/龙威虎震/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			击鼓骂曹:{
				name: '祢衡/击鼓骂曹/XingXiang',
				x: [0,0.19],
				y: [0,0.19],
				scale: 0.65,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '祢衡/击鼓骂曹/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        sp_mifuren: {//糜夫人
			香消玉殒: {
				name: '糜夫人/香消玉殒/daiji2',
				x: [0, 0.2],
				y: [0, 0.6],
				scale: 0.78,
				angle: -30,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '糜夫人/香消玉殒/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '糜夫人/香消玉殒/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '糜夫人/香消玉殒/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		mizhu:{//糜竺
			金奁玉宝:{
				name: '糜竺/金奁玉宝/xingxiang',
				x: [0,0.69],
				y: [0,0.3],
				angle: 11,
				scale: 0.9,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"糜竺/金奁玉宝/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					version:"4.0",
					json: true  
				   },    
				beijing: {
					name: '糜竺/金奁玉宝/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale: 0.6,
				},
			}

		},
        nanhualaoxian: {//南华老仙
			烽火连天: {
				name: '南华老仙/烽火连天/daiji2',
				shan: 'play3',
				version: "3.6",
				x: [0, 0.53],
				y: [0, 0.44],
				scale: 1.0,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '南华老仙/烽火连天/chuchang',
					version: "3.6",
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '南华老仙/烽火连天/chuchang2',
					version: "3.6",
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '南华老仙/烽火连天/chuchang2',
					version: "3.6",
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '南华老仙/烽火连天/beijing',
					version: "3.6",
					x: [0, 0.29],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '南华老仙/烽火连天/shouji2',
					version: "3.6",
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '南华老仙/烽火连天/shouji',
						version: "3.6",
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
			丰年映雪: {
				name: '南华老仙/丰年映雪/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.8],
				y: [0, 0.4],
				scale: 1.1,
				angle: 20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '南华老仙/丰年映雪/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '南华老仙/丰年映雪/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '南华老仙/丰年映雪/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '南华老仙/丰年映雪/shouji2',
					scale: 0.7,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '南华老仙/丰年映雪/shouji',
						scale: 0.5,
						speed: 1,
						delay: 0.4,
					},
				},
			},
			悟道三才: {
				name: '南华老仙/悟道三才/daiji2',
				x: [0, 0.42],
				y: [0, 0.4],
				scale: 1.1,
				angle: -15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '南华老仙/悟道三才/chuchang',
					scale: 0.5,
					action: 'play',
				},
				gongji: {
					name: '南华老仙/悟道三才/chuchang',
					scale: 0.7,
					action: 'play',
				},
				beijing: {
					name: '南华老仙/悟道三才/beijing',
					x: [0, 0.9],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			野鹤闲云:{
				name: '南华老仙/野鹤闲云/XingXiang',
				x: [0,2.06],
				y: [0,-0.12],
				scale: 0.62,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '南华老仙/野鹤闲云/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        panfeng: {//潘凤
           /* 摧锋挽澜: {
                name: "skin_Decennial_PanFeng_CuiFengWanLan",
                x: [0, 0.6],
                y: [0, 0.1],
                scale: 0.6,
                angle: -35,
                speed: 1,
                shizhounian: true,
                background: 
                "skin_Decennial_LvLingQi_ChiYanLiuJin_bg.png",
                skinName: "摧锋挽澜",    
                teshu: {
                  name:"teshu_panfeng",
                 },
                gongji: {
                  name:"gongji_panfeng",					        
				  action: 'play',
                  scale:1.1,
                },
				},*/
			摧锋挽澜: {
                name: "潘凤/摧锋挽澜/daiji2",
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.12],
				y: [0,0.49],
				angle: -35,
				scale: 0.9,
                speed: 1,
                shizhounian: true,
				chuchang: {
					name: '潘凤/摧锋挽澜/chuchang',
					scale:0.9,
					action:'play',
				},
				gongji: {
					name: '潘凤/摧锋挽澜/chuchang',
					scale:0.9,
					action:'play',
				},
				beijing:{
					name:'潘凤/摧锋挽澜/beijing',
					x:[0,0.5],
					y:[0,0.5],
					scale:0.4,
				},
			},	
        },
        panshu: {//潘淑
			江东锦绣:{
				name: '潘淑/江东锦绣/xingxiang',
				version:"4.0",
				shizhounian: true,
				x: [0,0.38],
				y: [0,0.22],
				scale: 1.2,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '潘淑/江东锦绣/jineng01',
					version:"4.0",
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '潘淑/江东锦绣/jineng01',
					version:"4.0",
					scale: 0.7,
					action: 'play',
				},
				beijing: {
					name: '潘淑/江东锦绣/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '潘淑/江东锦绣/jineng02',
					version:"4.0",
					scale: 0.5,
					speed: 0.8,
					delay: 0.3,
				},
			},
			繁囿引芳: {
				name: '潘淑/繁囿引芳/daiji2',
				x: [0,0.43],
				y: [0,0.42],
				angle: -3,
				scale: 0.9,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '潘淑/繁囿引芳/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '潘淑/繁囿引芳/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '潘淑/繁囿引芳/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            /*繁囿引芳: {
                name: "skin_Decennial_PanShu_FanYouYinFang",
                x: [0, 1.4],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_PanShu_FanYouYinFang_bg.png",
                skinName: "繁囿引芳"
            },*/

        },      
        pangdegong: {//庞德公
			鹿鸣丹枫: {
				name: '庞德公/鹿鸣丹枫/daiji2',
				shan: 'play3',
				x: [0, 0.47],
				y: [0, 0.39],
				scale: 1.2,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '庞德公/鹿鸣丹枫/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '庞德公/鹿鸣丹枫/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '庞德公/鹿鸣丹枫/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '庞德公/鹿鸣丹枫/beijing',
					x: [0, 0.29],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '庞德公/鹿鸣丹枫/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '庞德公/鹿鸣丹枫/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
			超脱于世:{
				name: '庞德公/超脱于世/XingXiang',
				x: [0,0.5],
				y: [0,0.03],
				scale: 0.7,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '庞德公/超脱于世/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			超脱于世2:{//激光版
				name: '庞德公/超脱于世2/XingXiang',
				x: [0,0.5],
				y: [0,0.03],
				scale: 0.7,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '庞德公/超脱于世2/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        pangtong: {//庞统
			龙跃凤鸣:{
				name: '庞统/龙跃凤鸣/XingXiang',
				x: [0,1.],
				y: [0,0.39],
				scale: 0.55,
				angle: 15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '庞统/龙跃凤鸣/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			谋定天下: {
				name: '庞统/谋定天下/daiji2',
				x: [0, 0.22],
				y: [0, 0.54],
				scale: 0.85,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '庞统/谋定天下/chuchang',
					scale: 0.95,
					action: 'play',
				},
				gongji: {
					name: '庞统/谋定天下/chuchang',
					scale: 1.15,
					action: 'play',
				},
				beijing: {
					name: '庞统/谋定天下/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        puyuan: {//蒲元
			战场绝版: {
				name: '蒲元/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.41],
				y: [0, 0.34],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '蒲元/战场绝版/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '蒲元/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '蒲元/战场绝版/beijing',
					x: [0, 0.98],
					y: [0, 0.4],
					scale: 0.4,
				},
				zhishixian: {
					name: '蒲元/战场绝版/shouji2',
					scale: 0.5,
					speed: 0.6,
					delay: 0.3,
					effect: {
						name: '蒲元/战场绝版/shouji',
						scale: 0.6,
						speed: 0.8,
						delay: 0.5,
					},
				},
			},
            百炼神器: {
                name: '蒲元/百炼神器/daiji2',
				x: [0,0.39],
				y: [0,0.48],
				angle: -15,
				scale: 0.9,
                shizhounian: true,
				chuchang: {
					name: '蒲元/百炼神器/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '蒲元/百炼神器/chuchang',
					action: 'play',
					scale: 0.9,
				},
				beijing: {
					name: '蒲元/百炼神器/beijing',
					x: [0, 0.98],
					y: [0, 0.4],
					scale: 0.4,
				},
            },			
        },
        qinmi: {//秦宓
            冠绝天下:{
				name: '秦宓/冠绝天下/XingXiang',
				x: [0,0.5],
				y: [0,0.53],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '秦宓/冠绝天下/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            战场绝版: {
				name: '秦宓/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.5],
				y: [0, 0.38],
				scale: 1.14,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '秦宓/战场绝版/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '秦宓/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '秦宓/战场绝版/beijing',
					x: [0, 0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '秦宓/战场绝版/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.3,
					effect: {
						name: '秦宓/战场绝版/shouji',
						scale: 0.5,
						speed: 1,
						delay: 0.5,
					},
				},
			},
			恬淡浩然: {
                name: '秦宓/恬淡浩然/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.5],
				y: [0, 0.38],
				scale: 1.14,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '秦宓/恬淡浩然/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '秦宓/恬淡浩然/chuchang',
					action: 'play',
					scale: 0.7,
				},
				beijing: {
					name: '秦宓/恬淡浩然/beijing',
					x: [0, 0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "恬淡浩然"
            },
			笔出千策:{
				name: '秦宓/笔出千策/xingxiang',
				version:"4.0",
				x: [0,-0.4],
				y: [0,0.34],
				scale: 1,
				angle: 5,
                //speed: 1,
				beijing: {
					name: '秦宓/笔出千策/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
            /*恬淡浩然: {
                name: "skin_Decennial_QinMi_TianDanHaoRan",
                x: [0, 0.35],
                y: [0, 0.3],
                scale: 0.5,
                angle: 5,
                speed: 1,
                background: "skin_Decennial_QinMi_TianDanHaoRan_bg.png",
                skinName: "恬淡浩然"
            },	*/		
        },
		qinghegongzhu: {//清河公主
			荷怜清盈:{
				name: '清河公主/荷怜清盈/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.45],
				y: [0,0.3],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '清河公主/荷怜清盈/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			瑞雪芳梅: {
				  name: "清河公主/瑞雪芳梅/xingxiang",
			   x: [0,0.51],
			   y: [0,0.42],
			   angle: 0,
			   scale: 0.7,
			   speed: 1,	json: true, version:"4.0",
			   gongji: {  
				   name:"清河公主/瑞雪芳梅/jineng01",		          
				   x: [0,0.64],
				   y: [0,0.44],
				   scale: 1.2,	version:"4.0",json: true  
				  },      
			   zhishixian: {
				   name: '清河公主/瑞雪芳梅/jineng02',  
				   scale: 0.8,
				   speed: 0.5,
				   delay: 0.5,  
				   version:"4.0",json: true,  
				   effect: {  
					   name: '清河公主/瑞雪芳梅/jineng02', 
					   scale: 0.6,
					   speed: 0.7,
					   delay: 0.2,
					   version:"4.0",json: true  
				   }                
			   },               
				  beijing: {
				   name: '清河公主/瑞雪芳梅/beijing',
				   x: [0,1.47],
				   y: [0,0.45],
				   angle:0,
				   scale: 0.55,
				   version:"4.0",json: true  
			   },
			   skinName: "瑞雪芳梅"
		   },
		},
		quyi: {//麹义
			扬威立刀:{
                name: '麴义/扬威立刀/XingXiang',
				x: [0,0.87],
				y: [0,0.11],
				angle: -11,
				scale: 0.5,
                beijing: {
					name: '麴义/扬威立刀/BeiJing',
				x: [0,0.87],
				y: [0,0.11],
				angle: -11,
				scale: 0.5,
				},
                skinName: "扬威立刀"
        	},
			磐河对峙: {
				name: '麹义/磐河对峙/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.54],
				y: [0,0.46],
				scale: 0.87,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '麹义/磐河对峙/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '麹义/磐河对峙/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '麹义/磐河对峙/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			竞驹伏骊:{
				name: '麴义/竞驹伏骊/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.25],
				y: [0,0.35],
				scale: 0.95,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '麴义/竞驹伏骊/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		quancong: {//全琮
			宵靥谜君: {
				name: '全琮/宵靥谜君/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '全琮/宵靥谜君/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '全琮/宵靥谜君/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '全琮/宵靥谜君/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			福国利民:{
				name: '全琮/福国利民/xingxiang',
				version:"4.0",
				json: true,
				x: [0, 1.7],
				y: [0, 0.2],
				scale: 1,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '全琮/福国利民/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        }, 
        ruanyu: {//阮瑀
            墨卷浩瀚: {
                /*name: "skin_Decennial_RuanYu_MoJuanHaoHan",
                x: [0, 0.6],
                y: [0, 0.3],
                scale: 0.5,
                angle: -10,
                speed: 1,
                background: "skin_Decennial_RuanYu_MoJuanHaoHan_bg.png",
                skinName: "墨卷浩瀚"*/
				name: "阮瑀/墨卷浩瀚/daiji2",
				teshu: 'play2',
				shan: 'play3',
                x: [0, 1.0],
                y: [0, 0.45],
                scale: 0.5,
                angle: 0,
				shizhounian:true,
				chuchang:{
					name:'阮瑀/墨卷浩瀚/chuchang',
					x: [0, 0.8],
                	y: [0, 0.4],
                	scale: 0.6,
				},
				gongji:{
					name:'阮瑀/墨卷浩瀚/chuchang',
					x: [0, 0.8],
                	y: [0, 0.4],
                	scale: 0.6,
				},
                beijing:{
					name:'阮瑀/墨卷浩瀚/beijing',
					x: [0, 0.8],
                	y: [0, 0.4],
                	scale: 0.6,
				},
            },
        },
		ruiji: {//芮姬
			玉芮花意:{
				name: '芮姬/玉芮花意/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,1.12],
				y: [0,0.32],
				scale: 0.95,
				angle: -10,
                //speed: 1,
				chuchang: {
					name: '芮姬/玉芮花意/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.3,
					action: 'play',
				},
				gongji: {
					name: '芮姬/玉芮花意/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.5,
					action: 'play',
				},
				beijing: {
					name: '芮姬/玉芮花意/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '芮姬/玉芮花意/jineng02',
					version:"4.0",
				    json: true,
					scale: 0.5,
					speed: 0.4,
					delay: 0.4,
				},
			},
        },
		shamoke: {//沙摩柯
			爆料皮肤:{
				name: '沙摩柯/爆料皮肤/XingXiang',
				x: [0,0.2],
				y: [0,0.17],
				scale: 0.5,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '沙摩柯/爆料皮肤/BeiJing',
					scale: 0.3,
					x: [0, 1.7],
					y: [0, 0.5]
				},
			},
            狂喜胜战: {
                name: '沙摩柯/狂喜胜战/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.49],
				y: [0,0.49],
				scale: 0.7,
                //speed: 1,
				shizhounian:true,
				gongji: {
					name: '沙摩柯/狂喜胜战/chuchang',
					scale: 0.8,
					action: 'play',
				},
				chuchang: {
					name: '沙摩柯/狂喜胜战/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing:{
					name:'沙摩柯/狂喜胜战/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                //background: "skin_Decennial_ShaMoKe_KuangXiShengZhan_bg.png",
                skinName: "狂喜胜战"
            },
			骁勇金衔: {
				name: '沙摩柯/骁勇金衔/daiji2',
				shan: 'play3',
				x: [0, 0.53],
				y: [0, 0.33],
				scale: 1.1,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '沙摩柯/骁勇金衔/chuchang',
					action: 'play',
					scale: 0.5,
				},
				gongji: {
					name: '沙摩柯/骁勇金衔/chuchang2',
					action: 'gongji',
					scale: 0.5,
				},
				teshu: {
					name: '沙摩柯/骁勇金衔/chuchang2',
					action: 'jineng',
					scale: 0.5,
				},
				beijing: {
					name: '沙摩柯/骁勇金衔/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '沙摩柯/骁勇金衔/shouji2',
					scale: 0.4,
					speed: 0.6,
					delay: 0.3,
					effect: {
						name: '沙摩柯/骁勇金衔/shouji',
						scale: 0.6,
						speed: 0.6,
						delay: 0.3,
					},
				},
			},
			蛮王奋击:{
				name: '沙摩柯/蛮王奋击/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.25],
				y: [0,0.15],
				scale: 0.9,
				angle: 40,
                //speed: 1,
				beijing: {
					name: '沙摩柯/蛮王奋击/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			应号出征:{
				name: '沙摩柯/应号出征/xingxiang',
				version:"4.0",
				//json: true,
				x: [0,0.87],
				y: [0,0.42],
				scale: 1.12,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '沙摩柯/应号出征/beijing',
					version:"4.0",
					//json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			
        },         
        shen_caocao: {//神曹操
			玄天通冥:{
				name: '神曹操/玄天通冥/XingXiang',
				x: [0,0.8],
				y: [0,-0.2],
				scale: 0.78,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神曹操/玄天通冥/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			一统江山: {
				name: '神曹操/一统江山/daiji',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.34],
				scale: 0.48,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神曹操/一统江山/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '神曹操/一统江山/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '神曹操/一统江山/beijing',
					x: [0, 0.42],
					y: [0, 0.48],
					scale: 0.25,
				},
			},
        },
		shen_dengai: {//神邓艾
			遏川制泽: {
				name: '神邓艾/遏川制泽/daiji2',
				x: [0, 0.36],
				y: [0, 0.48],
				scale: 1.1,
				angle: 5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神邓艾/遏川制泽/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '神邓艾/遏川制泽/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '神邓艾/遏川制泽/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
		shen_diaochan:{
			欢杀貂蝉: {
				name: '神貂蝉/欢杀貂蝉/daiji',
				version: '4.0',
        		//alpha: true,				
				x: [0,0.47],
				y: [0,0.34],
				angle: 3,
				scale: 0.43,
				gongji: 'play',
        		background: '神貂蝉/欢杀貂蝉/beijing.png',
        	},

		},
        shen_ganning: {//神甘宁
			万人辟易:{
				name: '神甘宁/万人辟易/XingXiang',
				x: [0,0.17],
				y: [0,0.23],
				scale: 0.44,
				angle: 15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神甘宁/万人辟易/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        	神威如芒:{
        		name: "神甘宁/神威如芒/xingxiang",
				x: [0,0.47],
				y: [0,0.36],
				angle: 0,
				scale: 0.6,
                speed: 1,	
				json: true, version:"4.0",                
               	beijing: {
					name: '神甘宁/神威如芒/beijing',
					x: [0,1.65],
					y: [0,0.39],
					angle: 0,
					scale: 0.6,
					version:"4.0",json: true  
			  }, 
            },
        },
		shen_guanyu: {//神关羽
			链狱鬼神: {
				name: '神关羽/链狱鬼神/daiji2',
				x: [0, 0.42],
				y: [0, 0.46],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神关羽/链狱鬼神/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '神关羽/链狱鬼神/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '神关羽/链狱鬼神/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        shen_guojia: {//神郭嘉
			虎年清明:{
				name: '神郭嘉/虎年清明/XingXiang',
				x: [0,1.75],
				y: [0,0.6],
				scale: 0.55,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神郭嘉/虎年清明/BeiJing',
					scale: 0.25,
					x: [0, 0.6],
					y: [0, 0.6]
				},
			},
			//不适配皮肤切换
			/*倚星折月: {
				name: "神郭嘉/倚星折月/XingXiang",
				x: [0, -0.15],
				y: [0, 0.44],
				scale: 0.42,
				pos: {
				  "x": [0, 0.7],
				  "y": [0, 0.5]
				},
				useCardAudio: true,
				transform: {
				  juexingji: "decadeUI.dynamicSkin.shen_guojia.倚星折月2",
				},
				dynamicBackground: "神郭嘉/倚星折月/BeiJing"
			  },
			  倚星折月2: {
				name: "神郭嘉/倚星折月2/XingXiang-1",
				x: [0, -0.15],
				y: [0, 0.44],
				scale: 0.42,
				pos: {
				  "x": [0, 0.7],
				  "y": [0, 0.5]
				},
				useCardAudio: true,
				dynamicBackground: "神郭嘉/倚星折月2/BeiJing-1"
			  },*/
			  /*
			倚星折月: {
				name: "神郭嘉/倚星折月/XingXiang",
				x: [0,-0.21],
				y: [0,0.42],
				scale: 0.43,
				pos: {
					"x":[0,0.7],
					"y":[0,0.45]
				},
    			useCardAudio: true,
				chuchang: {
				  name: '神郭嘉/倚星折月/XingXiang',
				scale: 0.4,
				x: [0,0.7],
				y: [0,0.6],
				action: 'TeShu',
				//speed: 2,
				},
				gongji: {
				   name: '神郭嘉/倚星折月/XingXiang',
				x: [0,0.67],
				y: [0,0.65],
				scale: 0.41,
				   action: 'GongJi',
				   },
				beijing: {
					"name":"神郭嘉/倚星折月/BeiJing",
					"scale":0.43
				},
				special: {
					变身: {
						name: 'shen_guojia/倚星折月至臻', // 不同骨骼, 不填写表示同一个骨骼, 填写的话格式为 'hetaihou/战场绝版'  角色名+皮肤名称
					},
					condition: {
						juexingji: {
							transform: "变身",  // 设置血量需要变换的骨骼
						},
					},
				},
			},
			倚星折月至臻: {
				name: "神郭嘉/倚星折月至臻/XingXiang1",
				x: [0,-0.21],
				y: [0,0.42],
				scale: 0.43,
				pos: {
					"x":[0,0.7],
					"y":[0,0.45],
				},
				useCardAudio: true,
				chuchang: {
				   name: '神郭嘉/倚星折月至臻/XingXiang1',
				   scale: 0.4,
				   x: [0,0.7],
				   y: [0,0.6],
				   action: 'TeShu',
				   //speed: 2,
				   },
				gongji: {
				   name: '神郭嘉/倚星折月至臻/XingXiang1',
				x: [0,0.67],
				y: [0,0.57],
				scale: 0.5,
				   action: 'GongJi',
				   },
				beijing: {
					"name":"神郭嘉/倚星折月至臻/BeiJing1",
					"scale":0.43
				},
			},*/
			//群里曹纯和郭嘉懒人包
			/*倚星折月1: {
				name: "神郭嘉/倚星折月/XingXiang",
				x: [0,-0.21],
				y: [0,0.42],
				scale: 0.43,
				gongji: {
					x: [0, 0.7],
					y: [0, 0.45]
				},
				beijing: {
					"name":"神郭嘉/倚星折月/BeiJing",
					"scale":0.43
				},
				audio: {  // 语音
					skill: '神郭嘉/audio/skill',  // 填写技能语音的路径
					card: '神郭嘉/audio/card',   // 填写专属卡牌语音的路径
				},
				special: {
					变身: {
						name: 'shen_guojia/倚星折月', // 不同骨骼, 不填写表示同一个骨骼, 填写的话格式为 'hetaihou/战场绝版'  角色名+皮肤名称
					},
					playxiandingji: {
						name: '神郭嘉/倚星折月/XingXiang',
						action: 'GongJi',
						x: [0, 0.8],
						y: [0, 0.4],
						scale: 0.6,
						speed: 1.05,
					},
					此处可以任意名字: {
						name: '神郭嘉/特殊特效/LR_eff_gongming',  // 特效name
						x: [0, 0.5],
						y: [0, 0.5],
						scale: 2,
						speed: 0.8,
						json: true,
					},
					condition: {
						// 觉醒变身
						juexingji: {
							transform: "变身",  // 设置血量需要变换的骨骼
							audio: '神郭嘉/audio/victory', // 触发限定技时候播放的语音
						},
						xiandingji: {
							//transform: "变身",  // 设置血量需要变换的骨骼
							play: 'playxiandingji',
							audio: '神郭嘉/audio/其他/zhugeliang_WuHouCi', // 触发限定技时候播放的语音
						},
						// 每种条件都可以播放一段动画或者播放语音或者变身, 例如下面就是添加击杀后只播放一段胜利语音
						jisha: {
							play: '此处可以任意名字',  // 和上面定义的对应就行
							audio: '神郭嘉/audio/skill/victory'
						},
						// 受伤时机
						// damage: {
						// 	// transform: '变身',
						// 	audio: '神郭嘉/audio/其他/zhugeguo_XianChiQiWu'
						// }
					}
				}
			},

			倚星折月: {
				name: "神郭嘉/倚星折月1/XingXiang1",
				x: [0,-0.21],
				y: [0,0.42],
				scale: 0.43,
				gongji: {
					"x":[0,0.7],
					"y":[0,0.45]
				},
				beijing: {
					"name":"神郭嘉/倚星折月1/BeiJing1",
					"scale":0.43
				},
				audio: {  // 语音
					skill: '神郭嘉/audio/skill',  // 填写技能的路径
					card: '神郭嘉/audio/card',   // 填写基本牌的路径
				},
			},*/
			//群里@四系乃
			/*倚星折月: {
				name: "神郭嘉/倚星折月/XingXiang",
				action: "DaiJi",
				x: [0,-0.2],
				y: [0,0.37],
				scale: 0.54,
				mirror: true,
				gongji: {
				"name":"神郭嘉/倚星折月/XingXiang",	
				action: "GongJi",
				x: [0,0.77],
				y: [0,0.51],
				scale: 0.44,
				flipX: true,
				},
				beijing: {
				"name":"神郭嘉/倚星折月/BeiJing",
				x: [0,-0.15],
				y: [0,0.44],
				scale: 0.42,
				},
				skinName: "倚星折月",
				special: {
				变身: {
				name: 'shen_guojia/倚星折月2',
				},
				condition: {
				juexingji: {
				transform: "变身",
				play: 'juexing',
				},
				},
				},
				},
				
				倚星折月2: {
				name: "神郭嘉/倚星折月2/XingXiang1",
				action: "DaiJi",
				x: [0,-0.2],
				y: [0,0.37],
				scale: 0.54,
				mirror: true,
				gongji: {
				"name":"神郭嘉/倚星折月2/XingXiang1",	
				action: "GongJi",
				x: [0,0.77],
				y: [0,0.51],
				scale: 0.44,
				flipX: true,
				},
				beijing: {
				"name":"神郭嘉/倚星折月2/BeiJing1",
				x: [0,-0.15],
				y: [0,0.44],
				scale: 0.42,
				},
				skinName: "倚星折月2",
				},
				
			*/
			//和epicf觉醒技特效不兼容，带参数神郭嘉觉醒限定双变身（1）
			
			倚星折月1: {
                name: "神郭嘉/倚星折月/XingXiang",
				x: [0,0.09],
				y: [0,0.6],
				angle: 0,
				scale: 0.41,
                speed: 1,
				audio: {  
                    skill: '神郭嘉/audio/skill/倚星折月至臻',  // 填写专属技能语音的路径
                    card: '神郭嘉/audio/card',   // 填写专属卡牌语音的路径
                },
                beijing:{
					name:"神郭嘉/倚星折月/BeiJing",
					scale:0.22
				},
                special: {
                    变身1: {
                        name: 'shen_guojia/倚星折月至臻', // 不同骨骼, 不填写表示同一个骨骼, 填写的话格式为 'hetaihou/战场绝版'  角色名+皮肤名称
                        effect: true, // 预留, 选择更换骨骼的特效 , 目前只有曹纯一个, 全部默认播放曹纯的换肤骨骼
                    },
                    // 这时定义觉醒时候播放的动画
                    天翊: {
                        name: '神郭嘉/倚星折月至臻/XingXiang1',
                        x: [0,0.45],
                        y: [0,0.6],
                        angle: 0,
                        scale: 0.4,
                        speed: 1,
                        action:"GongJi",
                        delay: 0,  // 单位秒
                    },
                    变身2: {
                        name: 'shen_guojia/倚星折月至尊', // 不同骨骼, 不填写表示同一个骨骼, 填写的话格式为 'hetaihou/战场绝版'  角色名+皮肤名称
                        effect: true, // 预留, 选择更换骨骼的特效 , 目前只有曹纯一个, 全部默认播放曹纯的换肤骨骼
                    },
                    // 这时定义限定技时候播放的动画
                    辉逝: {
                        name: '神郭嘉/倚星折月/改色/XingXiang1',
                        x: [0,0.45],
                        y: [0,0.6],
                        angle: 0,
                        scale: 0.4,
                        speed: 1,
                        action:"GongJi",
                        delay: 0,  // 单位秒
                    },
                    condition: {
                        juexingji: {
                            transform: "变身1",  // 设置觉醒时候需要变换的骨骼
                            play: '天翊',  // 觉醒后可以设置播放的动画
                            audio: '神郭嘉/audio/skill/victory', // 触发限定技时候播放的语音
                        },
                        xiandingji: {
                            transform: '变身2',  // 触发限定技可以播放骨骼. 
                            play: '辉逝',  // 也可以选择播放一段动画  
                            audio: '神郭嘉/audio/skill/victory', // 触发限定技时候播放的语音   
                        },   
                    },
                },
            },
            倚星折月至臻: {
                name: "神郭嘉/倚星折月/XingXiang-1",
                x: [0,0.09],
                y: [0,0.6],
                angle: 0,
                scale: 0.41,
                speed: 1,
                beijing:{name:"神郭嘉/倚星折月/BeiJing-1",scale: 0.25},
                audio: {  
                    skill: '神郭嘉/audio/skill/倚星折月至臻',  // 填写专属技能语音的路径
                    card: '神郭嘉/audio/card',   // 填写专属卡牌语音的路径
                },
                //zhishixian:{name:"dddd万能受击/2/effect_skill0",scale: 0.5,delay: 0.5,speed: 0.75},
            },
            倚星折月至尊: {
                name: "神郭嘉/倚星折月/改色/XingXiang1",
                x: [0,0.09],
                y: [0,0.6],
                angle: 0,
                scale: 0.41,
                speed: 1,
                beijing:{name:"神郭嘉/倚星折月/改色/BeiJing1",scale: 0.25},
                audio: {  
                    skill: '神郭嘉/audio/skill/倚星折月至臻',  // 填写专属技能语音的路径
                    card: '神郭嘉/audio/card',   // 填写专属卡牌语音的路径
                },
                //zhishixian:{name:"dddd万能受击/effect_skill0_hit",scale: 1,delay: 0.5,speed: 1},
            }
        },
         //神刘备
        shen_liubei: {
            昭烈怒火: {
				name: '神刘备/昭烈怒火/daiji2',
				x: [0, 0.55],
				y: [0, 0.5],
				scale: 0.9,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神刘备/昭烈怒火/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '神刘备/昭烈怒火/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '神刘备/昭烈怒火/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },       
        shen_luxun: {//神陆逊
			绽焰摧枯:{
				name: '神陆逊/绽焰摧枯/XingXiang',
				x: [0,0.43],
				y: [0,0.43],
				scale: 0.6,
				angle: -5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神陆逊/绽焰摧枯/BeiJing',
					scale: 0.4,
					x: [0, -0.2],
					y: [0, 0.5]
				},
			},
            连天烽火: {
                name: '神陆逊/连天烽火/daiji2',
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.5],
                y: [0, 0.3],
                scale: 0.9,
                angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神陆逊/连天烽火/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '神陆逊/连天烽火/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '神陆逊/连天烽火/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "连天烽火"
            },			
        },
        shen_lvbu: {//神吕布
			盖世无双: {
				name: '神吕布/盖世无双/daiji2',
				x: [0, 0.5],
				y: [0, 0.45],
				scale: 1,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神吕布/盖世无双/chuchang',
					scale: 0.65,
					action: 'play',
				},
				gongji: {
					name: '神吕布/盖世无双/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '神吕布/盖世无双/beijing',
					x: [0, 0.8],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			冠绝天下:{
				name: '神吕布/冠绝天下/XingXiang',
				x: [0,0.71],
				y: [0,0.23],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神吕布/冠绝天下/BeiJing',
					scale: 0.4,
					x: [0, 0.2],
					y: [0, 0.4]
				},
			},
			监兵噬魅:{
				name: '神吕布/监兵噬魅/XingXiang',
				x: [0,0.32],
				y: [0,-0.4],
				scale: 0.85,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神吕布/监兵噬魅/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			神愤天威:{
				name: '神吕布/神愤天威/xingxiang',
				version:"4.0",
				x: [0,0.5],
				y: [0,0.55],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '神吕布/神愤天威/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        shen_lvmeng: {//神吕蒙
			兼资文武:{
				name: '神吕蒙/兼资文武/XingXiang',
				x: [0,0.04],
				y: [0,0.36],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神吕蒙/兼资文武/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
		shen_machao: {//神马超
			迅骛惊雷: {
				name: '神马超/迅骛惊雷/daiji2',
				shan: 'play3',
				x: [0, 0.46],
				y: [0, 0.38],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神马超/迅骛惊雷/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '神马超/迅骛惊雷/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '神马超/迅骛惊雷/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '神马超/迅骛惊雷/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '神马超/迅骛惊雷/shouji2',
					scale: 0.5,
					speed: 0.6,
					delay: 0.3,
					effect: {
						name: '神马超/迅骛惊雷/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.4,
					},
				},
			},
        },
        shen_simayi: {//神司马懿
			鉴往知来:{
				name: '神司马懿/鉴往知来/XingXiang',
				x: [0,0.46],
				y: [0,0.07],
				scale: 0.58,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神司马懿/鉴往知来/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        shen_sunce: {//神孙策
			霸王再世:{
				name: '神孙策/霸王再世/XingXiang',
				x: [0,0.2],
				y: [0,0.52],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神孙策/霸王再世/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
		shen_taishici: {//神太史慈
			勇撼日月:{
				name: '神太史慈/勇撼日月/XingXiang',
				x: [0,0.25],
				y: [0,0.45],
				scale: 0.4,
				angle: 20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神太史慈/勇撼日月/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        shen_xunyu: {//神荀彧
			匡汉延祚:{
                name: '神荀彧/匡汉延祚/XingXiang',
				x: [0,0.55],
				y: [0,0.3],
				scale: 0.4,
                beijing: {
					name: '神荀彧/匡汉延祚/BeiJing',
					x: [0,0.55],
					y: [0,0.3],
					scale: 0.4,
				},
                skinName: "匡汉延祚"
        	},
			欢杀荀彧: {
				name: '神荀彧/欢杀荀彧/daiji',
				version: '4.0',
        		//alpha: true,				
				x: [0,0.47],
				y: [0,0.34],
				angle: 3,
				scale: 0.43,
				gongji: 'play',
        		background: '神荀彧/欢杀荀彧/beijing.png',
        	},
			虎年清明:{
				name: '神荀彧/虎年清明/XingXiang',
				x: [0,0.5],
				y: [0,0.28],
				scale: 0.52,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神荀彧/虎年清明/BeiJing',
					scale: 0.4,
					x: [0, 1.2],
					y: [0, 0.4]
				},
			},
        },
        shen_zhaoyun: {//神赵云
			今吾往矣:{
				name: '神赵云/今吾往矣/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.7],
				y: [0,0.3],
				scale: 0.85,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '神赵云/今吾往矣/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			御龙在天: {
				name: '神赵云/御龙在天/ShenZhaoYun_XingXiang',
				version: '4.0',
				x: [0,0.55],
				y: [0,-0.13],
				angle: 2,
				scale: 0.57,				
				background: '神赵云/御龙在天/beijing.png',
			},
			金甲破阵: {
				name: '赵云/金甲破阵/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.07],
				y: [0, 0.23],
				scale: 0.8,
				angle: 0,
				//speed: 1,
				shizhounian: true,
				chuchang: {
					name: '神赵云/金甲破阵/chuchang',
					action: 'play',
					filpX: true,
					scale: 0.88,
				},
				gongji: {
					name: '深赵云/金甲破阵/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
					filpX: true,
				},
				beijing: {
					name: '深赵云/金甲破阵/beijing',
					x: [0, 0.29],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '深赵云/金甲破阵/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '深赵云/金甲破阵/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
			百战金甲: {
                name: "神赵云/百战金甲/xingxiang",
                x: [0, 0.86],
                y: [0, 0.30],
                scale: 0.90,
                version: '4.0',
                json:true,
                //shan:'HuDong',
                shizhounian: true,
                chuchang: {
					name: "神赵云/百战金甲/xingxiang",
					x: [0, 0.62],
                    y: [0, 0.54],
                    scale: 0.95,
                    speed: 2.5,
                    showTime: 5,
                    json:true,
					action: 'ChuChang',
				},
				gongji: {
					name: "神赵云/百战金甲/xingxiang",
					x: [0, 0.77],
                    y: [0, 0.55],
                    scale: 0.95,
                    json:true,
					action: ['GongJi', 'JiNeng'],
				},
				teshu: {
					name: "神赵云/百战金甲/xingxiang",
					//x: [0, 0.86],
                    //y: [0, 0.30],
                    scale: 0.90,
                    json:true,
					action: 'HuDong',
				},
                beijing: {
                    "name": "神赵云/百战金甲/beijing",
                    x: [0, 0.69],
                    y: [0, 0.42],
                    version: '4.0',
                    json:true,
                    "scale": 0.82,
                },
                special: {
					变身: {
					 hp: 1,  // 如果血量低于等于2, 则会触发变身效果
					 name: 'shen_zhaoyun/百战金甲2', // 不同骨骼, 格式为 角色名+皮肤名称
					 //audio: 'baorubianshen', // 触发变身, 可以播放语音
					        },
					play: {
					 name: "神赵云/百战金甲2/ChuChang",// 触发时播放的动画
					 //audio: 'baorubianshen', // 触发时播放的语音
					 "scale": 0.73,
					         },
					condition: {
					 lowhp: {
					  transform: ['变身'],  // 设置血量需要变换的骨骼
					  recover: true,  // 恢复血量是否变回原来的骨骼,
					  effect: 'shaohui', // 不想用这个特效, 手动指定其他变身特效
					  play: 'play',  // 设置触发低血量触发的动画
					             },
					                  },
				                },
            },
            百战金甲2: {
                name: "神赵云/百战金甲2/xingxiang",
                x: [0, 0.44],
                y: [0, 0.47],
                scale: 0.90,
                version: '4.0',
                json:true,
                //shan:'HuDong',
                shizhounian: true,
                chuchang: {
					name: "神赵云/百战金甲2/xingxiang",
					x: [0, 0.62],
                    y: [0, 0.54],
                    scale: 0.95,
                    //speed: 2.5,
                    //showTime: 5,
                    json:true,
					action: 'ChuChang',
				},
				gongji: {
					name: "神赵云/百战金甲2/xingxiang",
					x: [0, 0.63],
                    y: [0, 0.45],
                    scale: 0.94,
                    json:true,
					action: ['GongJi', 'JiNeng'],
				},
				teshu: {
					name: "神赵云/百战金甲2/xingxiang",
					x: [0, 0.63],
                    y: [0, 0.45],
                    scale: 0.94,
                    json:true,
					action: 'HuDong',
				},
                beijing: {
                    "name": "神赵云/百战金甲2/beijing",
                    x: [0, 0.69],
                    y: [0, 0.42],
                    version: '4.0',
                    json:true,
                    "scale": 0.82,
                },
            },
			神龙佑主: {
				name: '神赵云/神龙佑主/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.52],
				scale: 0.8,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神赵云/神龙佑主/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '神赵云/神龙佑主/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '神赵云/神龙佑主/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战龙在野:{
				name: '神赵云/战龙在野/XingXiang',
				x: [0,0.5],
				y: [0,0.2],
				scale: 0.76,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神赵云/战龙在野/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        shen_zhouyu: {//神周瑜
			合纵抗曹: {
				name: '神周瑜/合纵抗曹/XingXiang',
				version: '4.0',
				x: [0,0.85],
				y: [0,0.45],
				angle: 2,
				scale: 0.73,
				background: '神周瑜/合纵抗曹/beijing.png',
			},
			红莲业火: {
				name: '神周瑜/红莲业火/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神周瑜/红莲业火/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '神周瑜/红莲业火/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '神周瑜/红莲业火/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			陵光引灵:{
				name: '神周瑜/陵光引灵/XingXiang',
				x: [0,0.34],
				y: [0,-0.18],
				scale: 0.76,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神周瑜/陵光引灵/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			焰腾麒麟:{
				name: '神周瑜/焰腾麒麟/XingXiang',
				x: [0,0.23],
				y: [0,0.59],
				angle: -18,
				scale: 0.23,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神周瑜/焰腾麒麟/BeiJing',
					x: [0,0.43],
					y: [0,0.59],
					scale: 0.28,	
				},
			},
        },
        shen_zhugeliang: {//神诸葛亮
			合纵破曹: {
				name: '神诸葛亮/合纵破曹/XingXiang',
				version: '4.0',
				x: [0,0.48],
				y: [0,0.13],
				angle: 8,
				scale: 0.73,
				background: '神诸葛亮/合纵破曹/beijing.png',
			},
			风舞魔鸟:{
				name: '神诸葛亮/风舞魔鸟/XingXiang',
				x: [0,-0.7],
				y: [0,0],
				scale: 0.64,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神诸葛亮/风舞魔鸟/BeiJing',
					scale: 0.25,
					x: [0, 0.7],
					y: [0, 0.5]
				},
			},
			剑祭通天:{
				name: '神诸葛亮/剑祭通天/XingXiang',
				x: [0,0.8],
				y: [0,0.03],
				scale: 0.58,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神诸葛亮/剑祭通天/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			孟章诛邪:{
				name: '神诸葛亮/孟章诛邪/XingXiang',
				x: [0,0.32],
				y: [0,-0.28],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '神诸葛亮/孟章诛邪/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
      		赤壁唤风2:{
        		name: 'skin_shenzhugeliang_ChiBiHuanFeng2',
        		x: [0, 0.45],
        		y: [0, 0.44],
        		scale: 0.95,
        		background: 'skin_shenzhugeliang_ChiBiHuanFeng_bg.png',	
        	},
           赤壁唤风1:{
        		name: 'skin_shenzhugeliang_ChiBiHuanFeng1',
        		x: [0, 0.55],
        		y: [0, -0.06],
        		scale: 0.75,
        		angle:-15,
        		background: 'skin_shenzhugeliang_ChiBiHuanFeng_bg.png',	
        	},
			赤壁唤风:{
				name: '神诸葛亮/赤壁唤风/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.45],
        		y: [0, 0.44],
        		scale: 0.95,
				shizhounian: true,
                chuchang: {
					name: '神诸葛亮/赤壁唤风/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '神诸葛亮/赤壁唤风/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '神诸葛亮/赤壁唤风/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			}
        },
		shixie:{//士燮
			雄长一州:{
				name: '士燮/雄长一州/xingxiang',
				x: [0,0.3],
				y: [0,0.3],
				scale: 0.8,
				angle: 0,
				version:"4.0",
				beijing:{
					name: '士燮/雄长一州/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.5,
				},
			},
		},
        simahui: {//司马徽
			教诲不倦: {
				name: '司马徽/教诲不倦/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.52],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '司马徽/教诲不倦/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '司马徽/教诲不倦/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '司马徽/教诲不倦/beijing',
					x: [0, 0.25],
					y: [0, 0.48],
					scale: 0.4,
				},
			},
			坐隐乾坤:{
				name: '司马徽/坐隐乾坤/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.44],
				y: [0,0.38],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '司马徽/坐隐乾坤/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        simashi: {//司马师
			牛年中秋:{
				name: '司马师/牛年中秋/XingXiang',
				x: [0,-0.09],
				y: [0,0.23],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '司马师/牛年中秋/BeiJing',
					scale: 0.25,
					x: [0, 0.1],
					y: [0, 0.5]
				},
			},
			桀骜睥睨:{
				name: '司马师/桀骜睥睨/xingxiang',
				version:"4.0",
				x: [0,-0.16],
				y: [0,0.23],
				scale: 0.95,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '司马师/桀骜睥睨/ChuChang',
					version:"4.0",
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '司马师/桀骜睥睨/ChuChang',
					version:"4.0",
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '司马师/桀骜睥睨/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '司马师/桀骜睥睨/JiSha',
						x: [0, 0.45],
						version:"4.0",
						scale: 0.85,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			目痛欲狂:{
				name: '司马师/目痛欲狂/XingXiang',
				x: [0,0.69],
				y: [0,0.43],
				angle: -21,
				scale: 0.38,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '司马师/目痛欲狂/BeiJing',
					scale: 0.25,
					x: [0, 0.1],
					y: [0, 0.5]
				},
			},
			勇夺魁首:{
				name: '司马师/勇夺魁首/xingxiang',
				x: [0,0.65],
				y: [0,0.3],
				angle: 18,
				scale: 1.01,
				version:"4.0",
				json:true,
				gongji:{
					x: [0,0.65],
					y: [0,0.3],
					angle: 18,
					scale: 1.01,
					version:"4.0",
					json:true,
				},
				beijing: {
					name: '司马师/勇夺魁首/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json:true,
				},
			},
        },
        simayi: {//司马懿
			重张区宇:{
				name: '司马懿/重张区宇/XingXiang',
				x: [0,0.10],
				y: [0,0.08],
				scale: 0.45,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '司马懿/重张区宇/BeiJing',
					x: [0, 0.5],
					y: [0, 0.47],
					scale: 0.3,
				},
			},
			红梅迎春:{
				name: '司马懿/红梅迎春/xingxiang',
				version:"4.0",
				shizhounian: true,
				x: [0,0.22],
				y: [0,0.3],
				scale: 1,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '司马懿/红梅迎春/jineng01',
					version:"4.0",
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '司马懿/红梅迎春/jineng01',
					version:"4.0",
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '司马懿/红梅迎春/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '司马懿/红梅迎春/jineng02',
					version:"4.0",
					scale: 0.5,
					speed: 0.6,
					delay: 0.3,
				},
			},
			佳期若梦: {
				name: '司马懿/佳期若梦/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.36],
				y: [0, 0.5],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '司马懿/佳期若梦/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '司马懿/佳期若梦/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '司马懿/佳期若梦/beijing',
					x: [0, 1.25],
					y: [0, 0.53],
					scale: 0.4,
				},
			},
            月夜逐华1: {
                name: "skin_Decennial_SiMaYi_YueYeZhuHua",
                x: [0, 1.93],
                y: [0, 0.27],
                scale: 0.7,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_SiMaYi_YueYeZhuHua_bg.png",
                skinName: "月夜逐华1"
            },	
			月下逐华: {
				name: '司马懿/月下逐华/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 1.93],
                y: [0, 0.27],
                scale: 0.7,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '司马懿/月下逐华/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '司马懿/月下逐华/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '司马懿/月下逐华/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			谋定天下: {
				name: '司马懿/谋定天下/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.33],
				y: [0, 0.46],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '司马懿/谋定天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '司马懿/谋定天下/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '司马懿/谋定天下/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			牛年立冬:{
				name: '司马懿/牛年立冬/XingXiang',
				x: [0,0],
				y: [0,0.04],
				scale: 0.68,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '司马懿/牛年立冬/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			鹰视狼顾:{
				name: '司马懿/鹰视狼顾/XingXiang',
				x: [0,0.46],
				y: [0,0.02],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '司马懿/鹰视狼顾/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			月下瑶情:{
				name: '司马懿/月下瑶情/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.48],
				y: [0,0.19],
				scale: 1.05,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '司马懿/月下瑶情/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        simazhao: {//司马昭
			温情良缘:{
				name: '司马昭/温情良缘/xingxiang',
				version:"4.0",
				x: [0,0.48],
				y: [0,0.23],
				scale: 1,
				angle: -5,
                //speed: 1,
				beijing: {
					name: '司马昭/温情良缘/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			勇夺魁首:{
				name: '司马昭/勇夺魁首/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.52],
				y: [0,0.23],
				scale: 1.15,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '司马昭/勇夺魁首/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			鼠年冬至:{
				name: '司马昭/鼠年冬至/XingXiang',
				x: [0,0.72],
				y: [0,-0.18],
				scale: 0.65,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '司马昭/鼠年冬至/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        xf_sufei: {//苏飞
			肝胆相照:{
				name: '苏飞/肝胆相照/XingXiang',
				x: [0,0.82],
				y: [0,0.02],
				scale: 0.66,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '苏飞/肝胆相照/BeiJing',
					scale: 0.25,
					x: [0, 0],
					y: [0, 0.5]
				},
			},
        },
        sunce: {//孙策
			波翻浪涌:{
				name: '孙策/波翻浪涌/xingxiang',
				version:"4.0",
				x: [0,0.35],
				y: [0,0.2],
				scale: 1.2,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙策/波翻浪涌/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			策马扬鞭: {
				name: '孙策/策马扬鞭/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.44],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙策/策马扬鞭/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '孙策/策马扬鞭/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '孙策/策马扬鞭/beijing',
					x: [0, 0.4],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
			虎踞江东:{
				name: '孙策/虎踞江东/XingXiang',
				x: [0,0.3],
				y: [0,0.18],
				scale: 0.5,
				angle: -5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙策/虎踞江东/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			擂鼓扬旗: {
				name: '孙策/擂鼓扬旗/SunCe_XingXiang',
				version: '4.0',
				x: [0,0.62],
				y: [0,-0.14],
				angle: 1,
				scale: 0.98,
				//background: '孙策/兔年清明/1_.png',	
			},
			誓不成佛:{
				name: '孙策/誓不成佛/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.4],
				y: [0,0.4],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙策/誓不成佛/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			长沙桓王:{
				name: '孙策/长沙桓王/XingXiang',
				x: [0,0.06],
				y: [0,0.25],
				scale: 0.55,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙策/长沙桓王/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			兔年清明:{
				name: '孙策/兔年清明/XingXiang',
				x: [0,0.87],
				y: [0,0.15],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙策/兔年清明/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			兔年中秋:{
				name: '孙策/兔年中秋/XingXiang',
				x: [0,0.5],
				y: [0,0.28],
				scale: 0.5,
				angle: -15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙策/兔年中秋/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			猪年七夕:{
				name: '孙策/猪年七夕/XingXiang',
				x: [0,0.84],
				y: [0,0.12],
				scale: 0.62,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙策/猪年七夕/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        sundeng: {//孙登
			鹊星夕情: {
				name: '孙登/鹊星夕情/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.44],
				y: [0, 0.56],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙登/鹊星夕情/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '孙登/鹊星夕情/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孙登/鹊星夕情/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			深达治国:{
				name: '孙登/深达治国/xingxiang',
				version:"4.0",
				x: [0,0.24],
				y: [0,0.2],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙登/深达治国/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		sunhanhua: {//孙寒华
			莲华熠熠:{
				name: '孙寒华/莲华熠熠/XingXiang',
				x: [0,-0.38],
				y: [0,0.2],
				scale: 0.55,
				angle: -15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙寒华/莲华熠熠/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			威灵尽显: {
				name: '孙寒华/威灵尽显/XingXiang',
				x: [0,0.4],
				y: [0, 0.3],
				scale: 0.55,
				angle: -15,
				//speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙寒华/威灵尽显/BeiJing',
					scale: 0.3,
					x: [0, 0.2],
					y: [0, 0.5]
				},
			},
			涟漪清荷: {
				name: '孙寒华/涟漪清荷/daiji2',
				shan: 'play3',
				x: [0, 0.24],
				y: [0, 0.38],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙寒华/涟漪清荷/chuchang',
					action: 'play',
					scale: 0.55,
				},
				gongji: {
					name: '孙寒华/涟漪清荷/chuchang2',
					action: 'gongji',
					scale: 0.6,
				},
				teshu: {
					name: '孙寒华/涟漪清荷/chuchang2',
					action: 'jineng',
					scale: 0.6,
				},
				beijing: {
					name: '孙寒华/涟漪清荷/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '孙寒华/涟漪清荷/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.5,
					effect: {
						name: '孙寒华/涟漪清荷/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.35,
					},
				},
			},
        },
        sunhao: {//孙皓
			暴戾恣睢:{
				name: '孙皓/暴戾恣睢/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.5],
				y: [0,0.32],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙皓/暴戾恣睢/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			翠琉金阙: {
				name: '孙皓/翠琉金阙/daiji',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙皓/翠琉金阙/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '孙皓/翠琉金阙/chuchang',
					scale: 1,
					action: 'play',
				},
				background: "孙皓/翠琉金阙/beijing.png",
			},
			皓露沁兰: {
				name: '孙皓/皓露沁兰/daiji2',
				shan: 'play3',
				x: [0, 0.6],
				y: [0, 0.4],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙皓/皓露沁兰/chuchang',
					action: 'play',
					scale: 0.55,
				},
				gongji: {
					name: '孙皓/皓露沁兰/chuchang2',
					action: 'gongji',
					scale: 0.65,
				},
				teshu: {
					name: '孙皓/皓露沁兰/chuchang2',
					action: 'jineng',
					scale: 0.65,
				},
				beijing: {
					name: '孙皓/皓露沁兰/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '孙皓/皓露沁兰/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '孙皓/皓露沁兰/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.3,
					},
				},
			},
        },
		sunjian: {//孙坚
			傲视江东:{
				name: '孙坚/傲视江东/xingxiang',
				version:"4.0",
				x: [0,0.55],
				y: [0,0.08],
				scale: 1.3,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙坚/傲视江东/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			鹰扬疆场:{
				name: '孙坚/鹰扬疆场/xingxiang',
				x: [0,0.73],
				y: [0,0.19],
				angle: -5,
				scale: 0.9,
				version:"4.0",
				json:true,
				gongji:{
					name: '孙坚/鹰扬疆场/xingxiang',
					x: [0,0.62],
					y: [0,0.42],
					angle: -5,
					scale: 0.74,
					version:"4.0",
					json:true,
					speed:2,
				},
				beijing: {
					name: '孙坚/鹰扬疆场/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json:true,
				},	
			},
		},
        sunliang: {//孙亮
			诡谲困玺: {
				name: '孙亮/诡谲困玺/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.3],
				y: [0, 0.4],
				scale: 0.92,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙亮/诡谲困玺/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '孙亮/诡谲困玺/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孙亮/诡谲困玺/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		sunlingluan: {//孙翎鸾
			// 经典形象:{//骨骼有问题
				// name: '孙翎鸾/祈福/SF_qifu_eff_sunlingluan',
				// x: [0,2.38],
				// y: [0,0],
				// scale: 0.62,
				// angle: 0,
                // //speed: 1,
				// //action: 'DaiJi',
				// background: "孙翎鸾/祈福/beijing.png"
			// },
			鸾心初动: {
				name: '孙翎鸾/鸾心初动/daiji2',
				x: [0, 0.57],
				y: [0, 0.35],
				scale: 1.1,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙翎鸾/鸾心初动/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '孙翎鸾/鸾心初动/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '孙翎鸾/鸾心初动/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        sunluban: {//孙鲁班
			金枝玉叶:{
				name: '孙鲁班/金枝玉叶/xingxiang',
				version:"4.0",
				x: [0,0.32],
				y: [0,-0.05],
				scale: 0.85,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙鲁班/金枝玉叶/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			牛年端午:{
				name: '孙鲁班/牛年端午/XingXiang',
				x: [0,0.65],
				y: [0,0.18],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙鲁班/牛年端午/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
            沅茝香兰1: {
                name: "skin_Decennial_SunLuBan_YuanChaiXiangLan",
                x: [0, 0.5],
                y: [0, 0.2],
                scale: 0.5,
                angle: -5,
                speed: 1,
                background: "skin_Decennial_SunLuBan_YuanChaiXiangLan_bg.png",
                skinName: "沅茝香兰1"
            },	
			沅茝香兰: {
                name: "孙鲁班/沅茝香兰/daiji2",
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.5],
                y: [0, 0.2],
                scale: 0.5,
                angle: -5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙鲁班/沅茝香兰/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '孙鲁班/沅茝香兰/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孙鲁班/沅茝香兰/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "沅茝香兰"
            },			
			宵靥谜君: {
				name: '孙鲁班/宵靥谜君/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.46],
				y: [0, 0.46],
				scale: 0.9,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙鲁班/宵靥谜君/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '孙鲁班/宵靥谜君/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孙鲁班/宵靥谜君/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			倚虎弄权: {
				name: '孙鲁班/倚虎弄权/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.48],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙鲁班/倚虎弄权/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '孙鲁班/倚虎弄权/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孙鲁班/倚虎弄权/beijing',
					x: [0, 0.72],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
			战场荣耀: {
				name: '孙鲁班/战场荣耀/daiji2',			
				shan: 'play3',
				x: [0,0.3],
				y: [0,0.35],
				angle: 0,
				scale: 1.1,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙鲁班/战场荣耀/chuchang',
					action: 'play',
					scale: 0.6,
				},
				gongji: {
					name: '孙鲁班/战场荣耀/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '孙鲁班/战场荣耀/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				beijing: {
					name: '孙鲁班/战场荣耀/beijing',
				    x: [0,0.5],
				    y: [0,0.5],
				    scale: 0.3,
				},
				zhishixian: {
					name: '孙鲁班/战场荣耀/shouji2',
					scale: 0.6,
					speed: 0.4,
					delay: 0.45,
					effect: {
						name: '孙鲁班/战场荣耀/shouji',
						scale: 0.6,
						speed: 0.6,
						delay: 0.4,
					},
				},
			},
        },
        sunluyu: {//孙鲁育
			慈媛戏涧:{
				name: '孙鲁育/慈媛戏涧/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.3],
				y: [0,0.65],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙鲁育/慈媛戏涧/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			娇巧伶俐: {
				name: '孙鲁育/娇巧伶俐/daiji2',
				x: [0, 0.4],
				y: [0, 0.41],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙鲁育/娇巧伶俐/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '孙鲁育/娇巧伶俐/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '孙鲁育/娇巧伶俐/beijing',
					x: [0, 1.2],
					y: [0, 0.39],
					scale: 0.4,
				},
			},
			牛年端午:{
				name: '孙鲁育/牛年端午/XingXiang',
				x: [0,0.02],
				y: [0,0.3],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙鲁育/牛年端午/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			猪年春节:{
				name: '孙鲁育/猪年春节/XingXiang',
				x: [0,0.26],
				y: [0,0.28],
				scale: 0.46,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙鲁育/猪年春节/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            沅茝香兰1: {
                name: "skin_Decennial_SunLuYu_YuanChaiXiangLan",
                x: [0, 0.45],
                y: [0, 0.45],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_SunLuYu_YuanChaiXiangLan_bg.png",
                skinName: "沅茝香兰1"
            },		
			沅茝香兰: {
                name: "孙鲁育/沅茝香兰/daiji2",
				teshu: 'play2',
				shan: 'play3',
                x: [0, 0.45],
                y: [0, 0.45],
                scale: 0.9,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙鲁育/沅茝香兰/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '孙鲁育/沅茝香兰/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孙鲁育/沅茝香兰/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "沅茝香兰"
            },	
        },
        sunquan: {//孙权
			大魏光耀: {
                name: "skin_sunquan_DWGY",
                x: [0, 0.5],
                y: [0, 0.2],
                scale: 0.5,
                angle: 0,
                speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙权/大魏光耀/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '孙权/大魏光耀/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '孙权/吴王光耀/beijing',
					x: [0, 0.45],
					y: [0, 0.4],
					scale: 0.4,
				},
                //background: "skin_sunquan_DWGY_bg.png",
                skinName: "大魏光耀"
            },	
			冠绝天下:{
				name: '孙权/冠绝天下/XingXiang',
				x: [0,0.44],
				y: [0,0.3],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙权/冠绝天下/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            绘鸢黛情:{
				name: '孙权/绘鸢黛情/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.949],
				y: [0,0.308],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙权/绘鸢黛情/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},	
			鸾凤和鸣: {
				name: '孙权/鸾凤和鸣/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.35],
				y: [0, 0.5],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙权/鸾凤和鸣/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '孙权/鸾凤和鸣/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '孙权/鸾凤和鸣/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			神武之姿:{
				name: '孙权/神武之姿/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.05],
				y: [0,0.38],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙权/神武之姿/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},	
			吴王光耀: {
				name: '孙权/吴王光耀/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.5],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙权/吴王光耀/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '孙权/吴王光耀/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '孙权/吴王光耀/beijing',
					x: [0, 0.45],
					y: [0, 0.4],
					scale: 0.4,
				},
			},
			吴王六剑:{
				name: '孙权/吴王六剑/XingXiang',
				x: [0,0.5],
				y: [0,0.2],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙权/吴王六剑/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			英杰会聚: {
				name: '孙权/英杰会聚/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.44],
				y: [0, 0.48],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙权/英杰会聚/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '孙权/英杰会聚/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '孙权/英杰会聚/beijing',
					x: [0, -0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '孙权/英杰会聚/JiSha',
						x: [0, 0.5],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 1.7,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			永开吴祚:{
				name: '孙权/永开吴祚/XingXiang',
				x: [0,0.49],
				y: [0,0.15],
				scale: 0.45,
				angle: 0,
                speed: 1.5,
				//action: 'DaiJi',
				beijing: {
					name: '孙权/永开吴祚/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			
			
			牛年七夕:{
				name: '孙权/牛年七夕/XingXiang',
				x: [0,0.33],
				y: [0,0],
				scale: 0.6,
				angle: -5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙权/牛年七夕/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			兔年中秋:{
				name: '孙权/兔年中秋/XingXiang',
				x: [0,0.42],
				y: [0,0.24],
				scale: 0.57,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙权/兔年中秋/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			猪年端午:{
				name: '孙权/猪年端午/XingXiang',
				x: [0,0.6],
				y: [0,0.27],
				scale: 0.7,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙权/猪年端午/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        sunru: {//孙茹
			花容月貌:{
				name: '孙茹/花容月貌/XingXiang',
				x: [0,0.58],
				y: [0,0.13],
				scale: 0.45,
				angle: 10,
				//gongji: 'ChuChang',
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙茹/花容月貌/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			烟水悠悠:{
				name: '孙茹/烟水悠悠/XingXiang',
				x: [0,0.3],
				y: [0,-0.32],
				scale: 0.76,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙茹/烟水悠悠/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			鱼游濠水:{
				name: '孙茹/鱼游濠水/XingXiang',
				x: [0,0.78],
				y: [0,0.08],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙茹/鱼游濠水/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			月兔琼香: {
				name: '孙茹/月兔琼香/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.25],
				y: [0, 0.3],
				scale: 1.2,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙茹/月兔琼香/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '孙茹/月兔琼香/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '孙茹/月兔琼香/beijing',
					x: [0, 0.8],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '孙茹/月兔琼香/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '孙茹/月兔琼香/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.4,
					},
				},
			},
        },
        sunshangxiang: {//孙尚香
			缔结良缘: {
				name: '孙尚香/缔结良缘/XingXiang',
				version: '4.0',
        		//alpha: true,				
        		x: [0,0.59],				
        		y: [0,0.35],				
        		scale: 0.33,
        		background: '孙尚香/缔结良缘/beijing.png',
        	},
			ol大厅:{
				name: '刘备/ol大厅/dating_zhutui02',
				version:"4.0",
				x: [0,1.52],
				y: [0,0.22],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '刘备/ol大厅/dating_zhutui01',
					version:"4.0",
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			百器皆擅:{
				name: '孙尚香/百器皆擅/xingxiang',
				version:"4.0",
				x: [0,0.45],
				y: [0,0.2],
				scale: 0.65,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '孙尚香/百器皆擅/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			花好月圆: {
				name: '孙尚香/花好月圆/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.48],
				y: [0, 0.45],
				scale: 0.92,
				angle: 20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙尚香/花好月圆/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '孙尚香/花好月圆/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '孙尚香/花好月圆/beijing',
					x: [0, 0.55],
					y: [0, 0.5],
					scale: 0.25,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '孙尚香/花好月圆/JiSha',
						x: [0, 0.48],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
            花曳心牵: {
                name: '孙尚香/花曳心牵/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.55],
				y: [0,0.38],
				angle: 5,
				scale: 1,
                shizhounian: true,
                chuchang: {
					name: '孙尚香/花曳心牵/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '孙尚香/花曳心牵/chuchang',
					scale: 0.92,
					action: 'play',
				},
				beijing: {
					name: '孙尚香/花曳心牵/beijing',
					x: [0, 0.75],
					y: [0, 0.5],
					scale: 0.4,
				},
            },
            箭扫荆棘: {
                name: '孙尚香/箭扫荆棘/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.42],
				y: [0,0.32],
				scale: 1.05,
                shizhounian: true,
                chuchang: {
					name: '孙尚香/箭扫荆棘/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '孙尚香/箭扫荆棘/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孙尚香/箭扫荆棘/beijing',
					x: [0, 0.75],
					y: [0, 0.5],
					scale: 0.4,
				},
            },
			巾帼花武: {
				name: '孙尚香/巾帼花武/daiji2',
				x: [0, 0.24],
				y: [0, 0.46],
				scale: 1,
				angle: -15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙尚香/巾帼花武/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '孙尚香/巾帼花武/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '孙尚香/巾帼花武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},         			
			魅影剑舞: {
				name: '孙尚香/魅影剑舞/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.27],
				y: [0, 0.46],
				scale: 0.92,
				angle: -8,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙尚香/魅影剑舞/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '孙尚香/魅影剑舞/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '孙尚香/魅影剑舞/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '孙尚香/魅影剑舞/jisha',
						scale: 0.6,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			明良千古:{
				name: '孙尚香/明良千古/XingXiang',
				x: [0,-0.18],
				y: [0,0.15],
				scale: 0.45,
				angle: 5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙尚香/明良千古/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			星流霆击:{
				name: '孙尚香/星流霆击/XingXiang',
				x: [0,-0.45],
				y: [0,0.41],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙尚香/星流霆击/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			虚拟天团: {
                name: '孙尚香/虚拟天团/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.43],
				y: [0,0.4],
				scale: 0.9,
				shizhounian: true,
                chuchang: {
					name: '孙尚香/虚拟天团/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '孙尚香/虚拟天团/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孙尚香/虚拟天团/beijing',
					x: [0, 0.75],
					y: [0, 0.5],
					scale: 0.4,
				},
            },  
			战场绝版: {
				name: '孙尚香/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.41],
				y: [0, 0.48],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙尚香/战场绝版/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '孙尚香/战场绝版/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '孙尚香/战场绝版/beijing',
					x: [0, 0.75],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			兔年春节:{
				name: '孙尚香/兔年春节/XingXiang',
				x: [0,0.41],
				y: [0,0.31],
				scale: 0.55,
				angle: -5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙尚香/兔年春节/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			兔年中秋:{
				name: '孙尚香/兔年中秋/XingXiang',
				x: [0,0.93],
				y: [0,0.25],
				scale: 0.74,
				angle: -5,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙尚香/兔年中秋/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			猪年圣诞:{
				name: '孙尚香/猪年圣诞/XingXiang',
				x: [0,0.38],
				y: [0,0],
				scale: 0.62,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '孙尚香/猪年圣诞/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
         //孙休
        sunxiu: {
            君临即位1: {
                name: "skin_Decennial_SunXiu_JunLinJiWei",
                x: [0, 0.6],
                y: [0, 0.2],
                scale: 0.5,
                angle: -5,
                speed: 1,
                background: "skin_Decennial_SunXiu_JunLinJiWei_bg.png",
                skinName: "君临即位1"
            },
			君临即位: {
                name: "孙休/君临即位/daiji2",
				x: [0,0.33],
				y: [0,0.41],
				angle: 3,
				scale: 0.9,
                speed: 1,
				shizhounian: true,
				chuchang:{
					name: "孙休/君临即位/chuchang",
					scale: 0.7,
					action: 'play',
				},
				gongji:{
					name: "孙休/君临即位/chuchang",
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: "孙休/君临即位/beijing",
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
                //background: "skin_Decennial_SunXiu_JunLinJiWei_bg.png",
                skinName: "君临即位"
            },
        },       
        sunyi: {//孙翊
			腾龙翻江: {
				name: '孙翊/腾龙翻江/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.94,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '孙翊/腾龙翻江/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '孙翊/腾龙翻江/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '孙翊/腾龙翻江/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		tadun:{//蹋顿
			骁武百蛮:{
				name: '蹋顿/骁武百蛮/xingxiang',
				x: [0,0.62],
				y: [0,0.32],
				angle: 7,
				scale: 0.99,
				version:"4.0",
				beijing: {
					name: '蹋顿/骁武百蛮/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
			}
		},
        taishici: {//太史慈
			涤荡江东:{
				name: '太史慈/涤荡江东/XingXiang',
				x: [0,0.2],
				y: [0,0.45],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '太史慈/涤荡江东/BeiJing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			戟摧万仞:{
				name: '太史慈/戟摧万仞/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.57],
				y: [0,0.5],
				scale: 0.84,
				angle: 0,
				gongji:{
					name: '太史慈/戟摧万仞/xingxiang',
					version:"4.0",
					json: true,
					x: [0,0.57],
					y: [0,0.5],
					scale: 0.84,
				},
                //speed: 1,
				beijing: {
					name: '太史慈/戟摧万仞/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			武动乾坤: {
				name: '太史慈/武动乾坤/daiji2',
				x: [0, 0.47],
				y: [0, 0.47],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '太史慈/武动乾坤/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '太史慈/武动乾坤/chuchang',
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '太史慈/武动乾坤/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '太史慈/武动乾坤/JiSha',
						x: [0, 0.42],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 1.6,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
        },
        tangji: {//唐姬
            战场绝版: {
				name: '唐姬/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.38],
				y: [0, 0.34],
				scale: 1.16,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '唐姬/战场绝版/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '唐姬/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.7,
				},
				beijing: {
					name: '唐姬/战场绝版/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '唐姬/战场绝版/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.3,
					effect: {
						name: '唐姬/战场绝版/shouji',
						scale: 0.5,
						speed: 1,
						delay: 0.5,
					},
				},
			},
            福泽金蕊: {
                name: '唐姬/福泽金蕊/daiji2',
                x: [0, -0.1],
                y: [0, 0.45],
                scale: 0.5,
                angle: 0,
                shizhounian: true,
				chuchang: {
					name: '唐姬/福泽金蕊/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '唐姬/福泽金蕊/chuchang',
					action: 'play',
					scale: 0.7,
				},
				beijing: {
					name: '唐姬/福泽金蕊/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},

            },	
			水月镜缘: {
				name: '唐姬/水月镜缘/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.75],
				y: [0,0.29],
				scale: 1.16,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '唐姬/水月镜缘/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '唐姬/水月镜缘/chuchang',
					action: 'play',
					scale: 0.7,
				},
				beijing: {
					name: '唐姬/战场绝版/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			曼珠俪舞: {
                name: "唐姬/曼珠俪舞/xingxiang",
                x: [0,1.12],
				y: [0,0.51],
				angle: 10,
				scale: 0.7,
                speed: 1,
                version:"4.0",
                gongji: {  
                	name:"唐姬/曼珠俪舞/xingxiang",		                          
					action:'play',
					scale: 1.2,	
					version:"4.0", 
               	},       
               	beijing: {
					name: '唐姬/曼珠俪舞/beijing',
					x: [0,1.29],
				    y: [0,0.51],
				    scale: 0.6,
					version:"4.0", 
				},
                skinName: "曼珠俪舞"
            },  
			鹊乐织欣:{
				name: '唐姬/鹊乐织欣/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.55],
				y: [0,0.48],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '唐姬/鹊乐织欣/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			}, 		
        },
		tengfanglan: {//滕芳兰
			皓露沁兰: {
				name: '滕芳兰/皓露沁兰/daiji2',
				shan: 'play3',
				x: [0, 0.56],
				y: [0, 0.41],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '滕芳兰/皓露沁兰/chuchang',
					action: 'play',
					scale: 0.65,
				},
				gongji: {
					name: '滕芳兰/皓露沁兰/chuchang2',
					action: 'gongji',
					scale: 0.65,
				},
				teshu: {
					name: '滕芳兰/皓露沁兰/chuchang2',
					action: 'jineng',
					scale: 0.65,
				},
				beijing: {
					name: '滕芳兰/皓露沁兰/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '滕芳兰/皓露沁兰/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.5,
					effect: {
						name: '滕芳兰/皓露沁兰/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.4,
					},
				},
			},
			脂车香姝: {
			  name: "滕芳兰/脂车香姝/xingxiang",
			   x: [0,0.51],
			   y: [0,0.42],
			   angle: 0,
			   scale: 0.7,
			   speed: 1,	json: true, version:"4.0",
			   gongji: {  
				   name:"滕芳兰/脂车香姝/jineng01",		          
				   x: [0,0.64],
				   y: [0,0.44],
				   scale: 1.2,	version:"4.0",json: true  
				  },      
			   zhishixian: {
				   name: '滕芳兰/脂车香姝/jineng02',  
				   scale: 0.8,
				   speed: 0.5,
				   delay: 0.5,  
				   version:"4.0",json: true,  
				   effect: {  
					   name: '滕芳兰/脂车香姝/jineng02', 
					   scale: 0.6,
					   speed: 0.7,
					   delay: 0.2,
					   version:"4.0",json: true  
				   }                
			   }  ,               
			  beijing: {
				   name: '滕芳兰/脂车香姝/beijing',
				   x: [0,1.47],
				   y: [0,0.45],
				   angle:0,
				   scale: 0.55,
				   version:"4.0",json: true  
			   },
			   skinName: "脂车香姝"
		   },
		   拈花靛情: {
			   name: '滕芳兰/拈花靛情/daiji2',
			   x: [0, 0.37],
			   y: [0, 0.35],
			   scale: 1.1,
			   angle: 0,
			   //speed: 1,
			   shizhounian: true,
			   chuchang: {
				   name: '滕芳兰/拈花靛情/chuchang',
				   scale: 0.8,
				   action: 'play',
			   },
			   gongji: {
				   name: '滕芳兰/拈花靛情/chuchang',
				   scale: 1,
				   action: 'play',
			   },
			   beijing: {
				   name: '滕芳兰/拈花靛情/beijing',
				   x: [0, 0.5],
				   y: [0, 0.5],
				   scale: 0.3,
			   },
		   },
		   祈福:{
				name: '滕芳兰/祈福/SF_qifu_eff_tengfanglan',
				x: [0,2.11],
				y: [0,0.32],
				scale: 0.5,
				angle: 0,
				//speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '滕芳兰/拈花靛情/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
		},  
        tenggongzhu: {//滕公主
            菡萏慕卿: {
				name: '滕公主/菡萏慕卿/daiji2',
				shan: 'play3',
				x: [0, 0.55],
				y: [0, 0.4],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '滕公主/菡萏慕卿/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '滕公主/菡萏慕卿/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '滕公主/菡萏慕卿/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				beijing: {
					name: '滕公主/菡萏慕卿/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '滕公主/菡萏慕卿/shouji2',
					scale: 0.5,
					speed: 0.9,
					delay: 0.3,
					effect: {
						name: '滕公主/菡萏慕卿/shouji',
						scale: 0.6,
						speed: 0.8,
						delay: 0.6,
					},
				},
			},
			莲心姝影: {
				name: '滕公主/莲心姝影/daiji2',
				x: [0, 0.38],
				y: [0, 0.4],
				scale: 1.05,
				angle: -5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '滕公主/莲心姝影/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '滕公主/莲心姝影/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '滕公主/莲心姝影/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        tengyin: {//滕胤
            菡萏慕卿: {
				name: '滕胤/菡萏慕卿/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.43],
				y: [0, 0.3],
				scale: 1.2,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '滕胤/菡萏慕卿/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '滕胤/菡萏慕卿/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.9,
				},
				beijing: {
					name: '滕胤/菡萏慕卿/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '滕胤/菡萏慕卿/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.5,
					effect: {
						name: '滕胤/菡萏慕卿/shouji',
						scale: 0.6,
						speed: 0.8,
						delay: 0.7,
					},
				},
			},
        },
		tongyuan: {//童渊
            长乐未央: {
				name: '童渊/长乐未央/daiji2',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '童渊/长乐未央/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '童渊/长乐未央/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '童渊/长乐未央/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '童渊/长乐未央/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.5,
					effect: {
						name: '童渊/长乐未央/shouji',
						scale: 0.6,
						speed: 0.8,
						delay: 0.7,
					},
				},
			},
		},
        wanniangongzhu: {//万年公主
            战场绝版: {
				name: '万年公主/战场绝版/daiji2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.4],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '万年公主/战场绝版/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '万年公主/战场绝版/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '万年公主/战场绝版/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				beijing: {
					name: '万年公主/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '万年公主/战场绝版/shouji2',
					scale: 0.5,
					speed: 0.9,
					delay: 0.2,
					effect: {
						name: '万年公主/战场绝版/shouji',
						scale: 0.5,
						speed: 1,
						delay: 0.4,
					},
				},
			},
			长乐未央: {
				name: '万年公主/长乐未央/daiji2',
				x: [0, 0.37],
				y: [0, 0.35],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '万年公主/长乐未央/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '万年公主/长乐未央/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '万年公主/长乐未央/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        wangcan: {//王粲
			笔翰如流:{
				name: '王粲/笔翰如流/XingXiang',
				x: [0,1.28],
				y: [0,0],
				scale: 0.56,
				angle: -20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '王粲/笔翰如流/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        wangji: {//王基
			独秉固志:{
				name: '王基/独秉固志/XingXiang',
				x: [0,0.25],
				y: [0,0.33],
				scale: 0.48,
				angle: -22,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '王基/独秉固志/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            清奢明水1: {
                name: "skin_Decennial_WangJi_QingSheMingShui",
                x: [0, 1.24],
                y: [0, 0.03],
                scale: 0.65,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_WangJi_QingSheMingShui_bg.png",
                skinName: "轻奢明水1"
            },	
			清奢明水: {
                name: '王基/清奢明水/daiji2',
				x: [0, 1.24],
                y: [0, 0.03],
                scale: 0.65,
                angle: 0,
				//speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王基/清奢明水/chuchang',
					scale: 0.5,
					action: 'play',
				},
				gongji: {
					name: '王基/清奢明水/chuchang',
					scale: 0.7,
					action: 'play',
				},
				beijing: {
					name: '王基/清奢明水/beijing',
					x: [0, 0.4],
					y: [0, 0.5],
					scale: 0.25,
				},
            },
			奇兵制敌: {
				name: '王基/奇兵制敌/XingXiang',
				x: [0,0.4],
				y: [0, 0.3],
				scale: 0.55,
				angle: -15,
				//speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '王基/奇兵制敌/BeiJing',
					scale: 0.3,
					x: [0, 0.2],
					y: [0, 0.5]
				},
			},		
			时之彦士: {
				name: '王基/时之彦士/daiji2',
				x: [0, 0.38],
				y: [0, 0.44],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王基/时之彦士/chuchang',
					scale: 0.5,
					action: 'play',
				},
				gongji: {
					name: '王基/时之彦士/chuchang',
					scale: 0.7,
					action: 'play',
				},
				beijing: {
					name: '王基/时之彦士/beijing',
					x: [0, 0.4],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
        },
        wanglang: {//王朗
			龙袭星落:{
				name: '王朗/龙袭星落/XingXiang',
				x: [0,0],
				y: [0,0.34],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '王朗/龙袭星落/BeiJing',
					scale: 0.25,
					x: [0, 1],
					y: [0, 0.5]
				},
			},
			四世三公:{
				name: '王朗/四世三公/xingxiang',
				version:"4.0",
				x: [0,0.6],
				y: [0,0.3],
				scale: 1.1,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '王朗/四世三公/beijing',
					version:"4.0",
					scale: 0.7,
					x: [0, -0.9],
					y: [0, 0.5]
				},
			},
			骧龙御宇: {
				name: '王朗/骧龙御宇/daiji2',
				x: [0, 0.48],
				y: [0, 0.4],
				scale: 1.05,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王朗/骧龙御宇/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '王朗/骧龙御宇/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '王朗/骧龙御宇/beijing',
					x: [0, -0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			/*四世三公:{
				name: '王朗/四世三公/XingXiang',
				x: [0,0.25],
				y: [0,0.34],
				scale: 0.45,
				angle: 0,
				version:"4.0",
				beijing: {
					name: '王朗/龙袭星落/BeiJing',
					scale: 0.25,
					version:"4.0",
					x: [0, 1],
					y: [0, 0.5]
				},
			},*/
        },
		wangling:{//王凌
            金戈镇恶: {
				name: '王凌/金戈镇恶/xingxiang',
				x: [0, 0.48],
				y: [0, 0.47],
				scale: 0.87,
				action: 'DaiJi',
				json:true,version:"4.0",
				chuchang: {
					name: '王凌/金戈镇恶/xingxiang',
					scale: 0.8,
					action: 'ChuChang',
					json:true,version:"4.0",
					version: "4.0",
				},
				teshu: {
					name: '王凌/金戈镇恶/xingxiang',
					x: [0, 0.75],
					y: [0, 0.45],
					scale: 0.8,
					action: 'JiNeng',
					json:true,version:"4.0",
				},
				gongji: {
					name: '王凌/金戈镇恶/xingxiang',
					x: [0, 0.75],
					y: [0, 0.45],
					scale: 0.8,
					action: 'GongJi',
					json:true,version:"4.0",
				},
				beijing: {
					name: '王凌/金戈镇恶/beijing',
					x: [0, 0.92],
					y: [0, 0.53],
					scale: 0.84,
					json:true,version:"4.0",
				},			
			},
		},
         //王平
        wangping: {
            /*镇北柱国: {
                name: "skin_Decennial_WangPing_ZhenBeiZhuGuo",
                x: [0, 0],
                y: [0, 0.25],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_WangPing_ZhenBeiZhuGuo_bg.png",
                skinName: "镇北柱国"
            }, 	*/
			镇北柱国: {
                name: '王平/509101镇北柱国/daiji2',
				x: [0,0.56],
				y: [0,0.53],
				scale: 0.65,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王平/509101镇北柱国/chuchang',
					scale: 0.5,
					action: 'play',
				},
				gongji: {
					name: '王平/509101镇北柱国/chuchang',
					scale: 0.7,
					action: 'play',
				},
				beijing: {
					name: '王平/509101镇北柱国/beijing',
					x: [0, 0.4],
					y: [0, 0.5],
					scale: 0.35,
				},
                skinName: "镇北柱国"
            }, 
        },       
        wangrong: {//王荣
			俪觞妙舞:{
				name: '王荣/俪觞妙舞/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.75],
				y: [0,0.45],
				scale: 0.95,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '王荣/俪觞妙舞/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			雪荣钟情: {
				name: '王荣/雪荣钟情/xingxiang',
				x: [0,0.62],
				y: [0,0.42],
				angle: -5,
				scale: 0.74,
				version:"4.0",
				beijing: {
					name: '王荣/雪荣钟情/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
			},
			缱绻潋夏: {
				name: '王荣/缱绻潋夏/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.27],
				y: [0, 0.3],
				scale: 1.1,
				angle: 12,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王荣/缱绻潋夏/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '王荣/缱绻潋夏/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.9,
				},
				beijing: {
					name: '王荣/缱绻潋夏/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '王荣/缱绻潋夏/shouji2',
					scale: 0.7,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '王荣/缱绻潋夏/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
	            
			云裳花容: {	
				name: '王荣/云裳花容/daiji2',
                x: [0, 0.3],
                y: [0, 0.3],
                scale: 1.0,
                angle: -5,
                //speed: 1,
				shizhounian: true,
                chuchang: {
					name: '王荣/云裳花容/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '王荣/云裳花容/chuchang',
					action: 'play',
					scale: 0.9,
				},
				beijing: {
					name: '王荣/云裳花容/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "云裳花容"
            },		
			清虚织梦:{
				name: '王荣/清虚织梦/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.47],
				y: [0,0.4],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '王荣/清虚织梦/jineng01',
					version:"4.0",
				    json: true,
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '王荣/清虚织梦/jineng01',
					version:"4.0",
				    json: true,
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '王荣/清虚织梦/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '王荣/清虚织梦/jineng02',
					version:"4.0",
				    json: true,
					scale: 0.8,
					speed: 0.8,
					delay: 0.3,
				},
			},
        },
        wangshuang: { //王双
            攫戾执猛: {
                name: '王双/攫戾执猛/daiji',
                x: [0, 0.5],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                shizhounian: true,
				chuchang: {
					name: '王双/攫戾执猛/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '王双/攫戾执猛/chuchang',
					action:'play',
					scale: 0.9,
				},
				beijing: {
					name: '王双/攫戾执猛/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},

            },
        },
        wangtao: { //王桃
            春悦桃秾: {
                name: '王桃/春悦桃秾/daiji2',
				x: [0,0.47],
				y: [0,0.38],
				angle: -27,
				scale: 0.96,
                shizhounian: true,
				chuchang: {
					name:'王桃/春悦桃秾/chuchang',
					action:'play',
					scale: 0.9,
				},
				gongji: {
					name:'王桃/春悦桃秾/chuchang',
					action:'play',
					scale: 0.9,
				},
				beijing: {
					name: '王桃/春悦桃秾/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},			
				
            },
        },
		wangyi: {//王异
			花好月圆: {
				name: '王异/花好月圆/daiji2',
				x: [0, 0.44],
				y: [0, 0.6],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王异/花好月圆/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '王异/花好月圆/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '王异/花好月圆/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '王异/花好月圆/JiSha',
						x: [0, 0.5],
						version:"4.0",
						scale: 1.1,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			巾帼花武: {
				name: '王异/巾帼花武/daiji2',
				x: [0, 0.42],
				y: [0, 0.55],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王异/巾帼花武/chuchang',
					scale: 0.85,
					action: 'play',
				},
				gongji: {
					name: '王异/巾帼花武/chuchang',
					scale: 1.05,
					action: 'play',
				},
				beijing: {
					name: '王异/巾帼花武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},			
			绝色异彩: {
				name: '王异/绝色异彩/daiji2',
				x: [0, 0.32],
				y: [0, 0.45],
				scale: 0.84,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王异/绝色异彩/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '王异/绝色异彩/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '王异/绝色异彩/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
			轻燕掠影:{
				name: '王异/轻燕掠影/XingXiang',
				x: [0,0.45],
				y: [0,0.06],
				scale: 0.58,
				angle: -20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '王异/轻燕掠影/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			心伤花怜:{
				name: '王异/心伤花怜/daiji2',
				x: [0, 0.44],
				y: [0, 0.6],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王异/心伤花怜/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '王异/心伤花怜/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '王异/心伤花怜/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
			战场绝版: {
				name: '王异/战场绝版/daiji2',
				x: [0, 0.4],
				y: [0, 0.48],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王异/战场绝版/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '王异/战场绝版/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '王异/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        }, 
		wangyuanji: {//王元姬
			温情良缘: {
                name: '王元姬/温情良缘/xingxiang',
				x: [0,0.45],
				y: [0,0.53],
				angle: 0,
				scale: 0.7,
                version:"4.0",
                //action: 'DaiJi',
                beijing: {
					name: '王元姬/温情良缘/beijing',
					x: [0,1.23],
					y: [0,0.44],
					angle: 0,
					scale: 0.6,
					version:"4.0",
				},
        	},
			鼠年冬至:{
				name: '王元姬/鼠年冬至/XingXiang',
				x: [0,0.22],
				y: [0,0.58],
				scale: 0.58,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '王元姬/鼠年冬至/BeiJing',
					scale: 0.4,
					x: [0, 0.1],
					y: [0, 0.5]
				},
			},
			彩翼曼舞:{
				name: '王元姬/彩翼曼舞/xingxiang',
				x: [0,-0.04],
				y: [0,0.28],
				scale: 0.94,
				action: 'play2',
				json:"4.0",
				version:"4.0",
				ss_jinchang: 'play',
				beijing: {
					name: '王元姬/彩翼曼舞/beijing',
					x: [0,0],
				    y: [0,0.13],
				    scale: 1,
					json:"4.0",
					version:"4.0",
				},
				teshu: {
					name: '王元姬/彩翼曼舞/xingxiang2',
					x: [0,0.85],
					y: [0,0.36],
					scale: 1,
					action: 'play4',
					json:"4.0",
					version:"4.0",
				},
				gongji: {
					name: '王元姬/彩翼曼舞/xingxiang',
					x: [0,0.77],
				    y: [0,0.5],
				    scale: 1,
					action: 'play5',
					json:"4.0",
					version:"4.0",
				},
			},
			勇夺魁首:{
				name: '王元姬/勇夺魁首/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.8],
				y: [0,0.3],
				scale: 1.15,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '王元姬/勇夺魁首/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        wangyue: { //王悦
            春悦桃秾: {
                name: '王悦/春悦桃秾/daiji2',
				x: [0,0.51],
				y: [0,0.38],
				angle: -16,
				scale: 0.9,
                shizhounian: true,
				chuchang: {
					name:'王悦/春悦桃秾/chuchang',
					action:'play',
					scale: 0.9,
				},
				gongji: {
					name:'王悦/春悦桃秾/chuchang',
					action:'play',
					scale: 0.9,
				},
				beijing: {
					name: '王悦/春悦桃秾/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },
        },   
        wangyun: {//王允
            /*文和乱武: {
                name: "skin_Decennial_WangYun_WenHeLuanWu",
                x: [0, 0.2],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_WangYun_WenHeLuanWu_bg.png",
                skinName: "文和乱武"
            },*/
			文和乱武: {
				name: '王允/文和乱武/daiji2',
				x: [0, 0.4],
				y: [0, 0.43],
				scale: 1.05,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '王允/文和乱武/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '王允/文和乱武/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '王允/文和乱武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        }, 
		weiwenzhugezhi: {//卫温诸葛直
			逐鹿天下: {
				name: '卫温诸葛直/逐鹿天下/daiji2',
				x: [0, 0.45],
				y: [0, 0.48],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '卫温诸葛直/逐鹿天下/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '卫温诸葛直/逐鹿天下/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '卫温诸葛直/逐鹿天下/beijing',
					x: [0, 0.8],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },    
		weizi:{//卫兹
			助龙点睛:{
				name: '卫兹/助龙点睛/xingxiang',
				x: [0,1.08],
				y: [0,0.25],
				angle: 0,
				scale: 1,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"卫兹/助龙点睛/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					version:"4.0",
					json: true  
				   },    
				beijing: {
					name: '卫兹/助龙点睛/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale: 0.6,
				},

			}
		},   
        weiyan: {//魏延
			麒麟生角:{
				name: '魏延/麒麟生角/XingXiang',
				x: [0,0.6],
				y: [0,0.26],
				scale: 0.52,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '魏延/麒麟生角/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			狂傲果敢:{
				name: '魏延/狂傲果敢/xingxiang',
				x: [0,0.87],
				y: [0,0.33],
				angle: -19,
				scale: 0.74,
				version:"4.0",
				json:true,
				gongji:{
					name: '魏延/狂傲果敢/xingxiang',
					x: [0,0.62],
					y: [0,0.42],
					angle: -5,
					scale: 0.74,
					version:"4.0",
					json:true,
					speed:2,
				},
				beijing: {
					name: '魏延/狂傲果敢/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json:true,
				},	
			},
        }, 
        wenyang: {//文鸯
			势若万钧:{
                name: '文鸯/爆料皮肤/XingXiang',
				x: [0,0.96],
				y: [0,0.1],
				scale: 0.45,
                beijing: {
					name: '文鸯/爆料皮肤/BeiJing',
				x: [0,0.55],
				y: [0,0.3],
				scale: 0.4,
				},
        	},
			爆料皮肤2:{
                name: '文鸯/爆料皮肤2/XingXiang',
				x: [0,0.96],
				y: [0,0.1],
				scale: 0.45,
                beijing: {
					name: '文鸯/爆料皮肤2/BeiJing',
				x: [0,0.55],
				y: [0,0.3],
				scale: 0.4,
				},
        	},
			神通法相:{
				name: '文鸯/神通法相/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.02],
				y: [0,0.26],
				scale: 1.2,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '文鸯/神通法相/jineng01',
					version:"4.0",
				    json: true,
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '文鸯/神通法相/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '文鸯/神通法相/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
            骁勇金衔: {
				name: '文鸯/骁勇金衔/daiji2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.5],
				scale: 1.2,
				angle: -15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '文鸯/骁勇金衔/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '文鸯/骁勇金衔/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '文鸯/骁勇金衔/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '文鸯/骁勇金衔/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '文鸯/骁勇金衔/shouji2',
					scale: 0.3,
					speed: 0.6,
					delay: 0.3,
					effect: {
						name: '文鸯/骁勇金衔/shouji',
						scale: 0.5,
						speed: 0.6,
						delay: 0.4,
					},
				},
			},
			云涯文鸯: {
				name: '文鸯/云涯文鸯/zh',
				json: true,
				shizhounian: true,
				x: [0,0.54],
				y: [0,0.08],
				scale: 0.18,
                json: true,
                version: '3.8',
                chuchang: {
			    name: '文鸯/云涯文鸯/zh',
				json: true,
			    action: ['animation'],
				x: [0,0.54],
				y: [0,0.08],
				scale: 0.18,
                json: true,
                version: '3.8',
				 },
				gongji: {
				name: '文鸯/云涯文鸯/zh',
				json: true,
				action: ['animation2'],
				x: [0,0.5],
				y: [0,0.31],
				scale: 0.3,
                json: true,
                version: '3.8',
			     },
                beijing: {
				name: '文鸯/云涯文鸯/bg',
				x: [0,0.4],
				y: [0,0.46],
				scale: 0.27,
                json: true,
                version: '3.8',
				 },
},
			紫电清霜: {
				name: '文鸯/紫电清霜/daiji2',
				x: [0, 0.64],
				y: [0, 0.39],
				scale: 1.1,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '文鸯/紫电清霜/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '文鸯/紫电清霜/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '文鸯/紫电清霜/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
		wolongfengchu: {//卧龙凤雏
			赤壁链火:{
			   name: '卧龙凤雏/赤壁链火/xingxiang',
			   x: [0,0.49],
			   y: [0,0.38],
			   scale: 0.6,
			   version:"4.0",
			   beijing: {
			   name: '卧龙凤雏/赤壁链火/beijing',
			   x: [0,0.8],
			   y: [0,0.45],
			   scale: 0.6,
			   version:"4.0",
			   },
		   	},
			   赤壁链火卧龙:{
				name: '卧龙凤雏/赤壁链火/xingxiang',
				version:"4.0",
				x: [0,0.95],
				y: [0,0.4],
				scale: 1.15,
				angle: 10,
				//speed: 1,
				beijing: {
					name: '卧龙凤雏/赤壁链火/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			赤壁链火凤雏:{
				name: '卧龙凤雏/赤壁链火/xingxiang',
				version:"4.0",
				x: [0,-0.4],
				y: [0,0.23],
				scale: 1.25,
				angle: 0,
				//speed: 1,
				beijing: {
					name: '卧龙凤雏/赤壁链火/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			青羽锦绣:{
				name: '卧龙凤雏/青羽锦绣/xingxiang',
				x: [0,1.08],
				y: [0,0.25],
				angle: 0,
				scale: 1,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"卧龙凤雏/青羽锦绣/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					speed:3,
					version:"4.0",
					json: true  
				},    
				beijing: {
					name: '卧龙凤雏/青羽锦绣/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale: 0.6,
				},
			},
		   
	   	},
		wuguotai: {//吴国太
			丹云碧心:{
				name: '吴国太/丹云碧心/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.15],
				y: [0,0.3],
				scale: 0.9,
				angle: -20,
                //speed: 1,
				beijing: {
					name: '吴国太/丹云碧心/beijing',
					version:"4.0",
					json: true,
					scale: 0.9,
					x: [0, 0.15],
					y: [0, 0.3],
					angle: -20,
				},
			},
			丹云碧心decade: {
				name: '吴国太/丹云碧心decade/daiji2',
				x: [0, 0.5],
				y: [0, 0.45],
				scale: 1.1,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吴国太/丹云碧心decade/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '吴国太/丹云碧心decade/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '吴国太/丹云碧心decade/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			雍容雅步: {
				name: '吴国太/雍容雅步/daiji2',
				x: [0, 0.42],
				y: [0, 0.55],
				scale: 0.68,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吴国太/雍容雅步/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '吴国太/雍容雅步/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '吴国太/雍容雅步/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
        },
        wuxian: {//吴苋
			凤飞赐福:{
				name: '吴苋/凤飞赐福/xingxiang',
				x: [0,0.48],
				y: [0,0.4],
				angle: 11,
				scale: 0.74,
				version:"4.0",
				beijing: {
					name: '吴苋/凤飞赐福/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
			},
			福到万家:{
				name: '吴苋/福到万家/xingxiang',
				version:"4.0",
				shizhounian: true,
				x: [0,0.77],
				y: [0,0.22],
				scale: 1.15,
				angle: 10,
                //speed: 1,
                chuchang: {
					name: '吴苋/福到万家/jineng01',
					version:"4.0",
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '吴苋/福到万家/jineng01',
					version:"4.0",
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '吴苋/福到万家/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '吴苋/福到万家/jineng02',
					version:"4.0",
					scale: 0.4,
					speed: 0.8,
					delay: 0.4,
				},
			},
			锦运福绵: {
				name: '吴苋/锦运福绵/daiji2',
				x: [0, 0.42],
				y: [0, 0.55],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吴苋/锦运福绵/chuchang',
					scale: 0.85,
					action: 'play',
				},
				gongji: {
					name: '吴苋/锦运福绵/chuchang',
					scale: 1.05,
					action: 'play',
				},
				beijing: {
					name: '吴苋/锦运福绵/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            /*金玉满堂: {
                name: "skin_Decennial_WuXian_JinYuManTang",
                x: [0, 0.5],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_WuXian_JinYuManTang_bg.png",
                skinName: "金玉满堂"
            },*/
			金玉满堂: {
				name: '吴苋/金玉满堂/daiji2',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吴苋/金玉满堂/chuchang',
					scale: 0.85,
					action: 'play',
				},
				gongji: {
					name: '吴苋/金玉满堂/chuchang',
					scale: 1.05,
					action: 'play',
				},
				beijing: {
					name: '吴苋/金玉满堂/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},			
			温婉华贵: {
				name: '吴苋/温婉华贵/daiji2',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吴苋/温婉华贵/chuchang',
					scale: 0.85,
					action: 'play',
				},
				gongji: {
					name: '吴苋/温婉华贵/chuchang',
					scale: 1.05,
					action: 'play',
				},
				beijing: {
					name: '吴苋/温婉华贵/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },          
        wuyi: {//吴懿
            /*攻取雍凉: {
                name: "skin_Decennial_WuYi_GongQuYongLiang",
                x: [0, 0.95],
                y: [0, 0.1],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_WuYi_GongQuYongLiang_bg.png",
                skinName: "攻取雍凉"
            },
            燎原流火: {
                name: "skin_Decennial_WuYi_LiaoYuanLiuHuo",
                x: [0, -0.1],
                y: [0, -0.3],
                scale: 0.9,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_WuYi_LiaoYuanLiuHuo_bg.png",
                skinName: "燎原流火"
            },*/
			寒原奋军:{
				name: '吴懿/寒原奋军/xingxiang',
				x: [0,0.26],
				y: [0,0.29],
				angle: 52,
				scale: 0.7,
				version:"4.0",
				json: true,
				gongji:{
					name: '吴懿/寒原奋军/xingxiang',
					x: [0,0.62],
					y: [0,0.42],
					angle: -5,
					scale: 0.74,
					version:"4.0",
					json: true,
				},
				beijing: {
					name: '吴懿/寒原奋军/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json: true,
				},
				skinName:"寒原奋军"
			},
			攻取雍凉:{
				name: '吴懿/攻取雍凉/daiji2',
				x: [0,0.41],
				y: [0,0.32],
				angle: -9,
				scale: 1,
                speed: 1,
				shizhounian:true,
				chuchang: {
					name: '吴懿/攻取雍凉/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '吴懿/攻取雍凉/chuchang',
					x: [0,0.57],
					y: [0,0.46],
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '吴懿/攻取雍凉/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			燎原流火:{
				name: '吴懿/燎原流火/daiji2',
				x: [0,0.52],
				y: [0,0.27],
				angle: 6,
				scale: 1.11,
                speed: 1,
				shizhounian:true,
				chuchang: {
					name: '吴懿/燎原流火/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '吴懿/燎原流火/chuchang',
					x: [0,0.49],
					y: [0,0.54],
					scale: 1.2,	
					action: 'play',
				},
				beijing: {
					name: '吴懿/燎原流火/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			骁勇金衔: {
				name: '吴懿/骁勇金衔/daiji2',
				shan: 'play3',
				x: [0, 0.33],
				y: [0, 0.38],
				scale: 1.15,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '吴懿/骁勇金衔/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '吴懿/骁勇金衔/chuchang2',
					action: 'gongji',
					x: [0,0.49],
					y: [0,0.41],
					scale: 0.65,	
				},
				teshu: {
					name: '吴懿/骁勇金衔/chuchang2',
					action: 'jineng',
					scale: 0.65,
				},
				beijing: {
					name: '吴懿/骁勇金衔/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '吴懿/骁勇金衔/shouji2',
					scale: 0.4,
					speed: 0.6,
					delay: 0.4,
					effect: {
						name: '吴懿/骁勇金衔/shouji',
						scale: 0.6,
						speed: 0.6,
						delay: 0.7,
					},
				},
			},
        },  
		wu_luxun: {//武陆逊
			经典形象:{
				name: '武陆逊/经典形象/wumiao_luxun',
				teshu: 'play2',
				x: [0,1.72],
				y: [0,0.34],
				scale: 0.54,
				angle: 0,
                //speed: 1,
                background: "武陆逊/经典形象/beijing.jpg"
			},
        },
        wu_zhugeliang: {//武诸葛亮
			经典形象:{
				name: '武诸葛亮/经典形象/wumiao_zhugeliang',
				teshu: 'play2',
				x: [0,2.05],
				y: [0,0.22],
				scale: 0.7,
				angle: 0,
                //speed: 1,
                background: "武诸葛亮/经典形象/beijing.jpg"
			},
        },
		wutugu: {//兀突骨
			势如山崩: {
				name: '兀突骨/势如山崩/daiji2',
				x: [0, 0.45],
				y: [0, 0.45],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '兀突骨/势如山崩/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '兀突骨/势如山崩/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '兀突骨/势如山崩/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			鼠年春节:{
				name: '兀突骨/鼠年春节/XingXiang',
				x: [0,1.04],
				y: [0,0.12],
				scale: 0.5,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '兀突骨/鼠年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        xizhicai: {//戏志才
			风雅清韵: {
                name: '戏志才/风雅清韵/daiji2',
                x: [0,0.35],
                y: [0,0.38],
                angle: -20,
                scale: 0.85,       
                shizhounian: true,
                chuchang: {
					name: '戏志才/风雅清韵/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '戏志才/风雅清韵/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '戏志才/风雅清韵/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				skinName: "风雅清韵"
            },
			举棋若定:{
				name: '戏志才/举棋若定/XingXiang',
				x: [0,0.45],
				y: [0,0.33],
				scale: 0.5,
				angle: -28,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '戏志才/举棋若定/BeiJing',
					scale: 0.4,
					angle: -28,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			扇留魂志: {
				name: '戏志才/扇留魂志/daiji2',
				x: [0, 0.1],
				y: [0, 0.52],
				scale: 0.8,
				angle: -20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '戏志才/扇留魂志/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '戏志才/扇留魂志/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '戏志才/扇留魂志/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            /*逸志俊才: {
                name: "skin_Decennial_XiZhiCai_YiZhiJunCai",
                x: [0, -0.25],
                y: [0, 0.3],
                scale: 0.5,
                angle: -10,
                speed: 1,
                background: "skin_Decennial_XiZhiCai_YiZhiJunCai_bg.png",
                skinName: "逸志俊才"
            },*/
			逸志俊才: {
				name: '戏志才/逸志俊才/daiji2',
                x: [0,0.35],
                y: [0,0.38],
                angle: -20,
                scale: 0.85,       
                shizhounian: true,
                chuchang: {
					name: '戏志才/逸志俊才/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '戏志才/逸志俊才/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '戏志才/逸志俊才/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战场绝版: {
				name: '戏志才/战场绝版/daiji2',
				shan: 'play3',
				x: [0, 0.5],
				y: [0, 0.45],
				scale: 0.95,
				angle: -5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '戏志才/战场绝版/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '戏志才/战场绝版/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '戏志才/战场绝版/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '戏志才/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '戏志才/战场绝版/shouji2',
					scale: 0.6,
					speed: 0.9,
					delay: 0.5,
					effect: {
						name: '戏志才/战场绝版/shouji',
						scale: 0.6,
						speed: 0.8,
						delay: 0.5,
					},
				},
			},
			枕石漱流: {
				name: '戏志才/枕石漱流/XiZhiCai_XingXiang',
				version: '4.0',
				x: [0,0.32],
				y: [0,-0.04],
				angle: 4,
				scale: 0.9,
				background: '戏志才/枕石漱流/beijing.png',
			},
			忠魏河山:{
				name: '戏志才/忠魏河山/xingxiang',
				x: [0,1.08],
				y: [0,0.25],
				angle: 0,
				scale: 1,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"戏志才/忠魏河山/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					version:"4.0",
					json: true  
				   },    
				beijing: {
					name: '戏志才/忠魏河山/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale: 0.6,
				},

			}        			
        },
        xiahouba: {//夏侯霸
			玄弓上阵: {
				name: '夏侯霸/玄弓上阵/daiji2',
				x: [0, 0.59],
				y: [0, 0.5],
				scale: 0.75,
				angle: 12,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '夏侯霸/玄弓上阵/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '夏侯霸/玄弓上阵/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '夏侯霸/玄弓上阵/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        xiahoudun: {//夏侯惇
			刚烈无惧: {
				name: '夏侯惇/刚烈无惧/xingxiang',
				x: [0,0.62],
				y: [0,0.42],
				angle: -5,
				scale: 0.74,
				version:"4.0",
				beijing: {
					name: '夏侯惇/刚烈无惧/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},

			},
			开疆烈血: {
				name: '夏侯惇/开疆烈血/daiji2',
				x: [0, 0.35],
				y: [0, 0.5],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '夏侯惇/开疆烈血/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '夏侯惇/开疆烈血/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '夏侯惇/开疆烈血/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		jin_xiahouhui: {//夏侯徽
			熠熠珠玉: {
				name: '夏侯徽/熠熠珠玉/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				action: 'play2',
				teshu: 'play3',
				chuchang: {action: 'play4', scale: 0.75},
				gongji: {action: 'play5', scale: 0.9},
				x: [0, 0.18],
				y: [0, 0.4],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '夏侯徽/熠熠珠玉/beijing',
					version:"4.0",
				    json: true,
				    action: 'play2',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.6,
				},
			},
        },
        xiahoushi: {//夏侯氏
			端华夏莲: {
				name: '夏侯氏/端华夏莲/daiji2',
				x: [0, 0.44],
				y: [0, 0.48],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '夏侯氏/端华夏莲/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '夏侯氏/端华夏莲/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '夏侯氏/端华夏莲/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            /*战场绝版: {
                name: "skin_Decennial_XiaHouShi_ZhanChangJueBan",
                x: [0, 0.45],
                y: [0, 0.3],
                scale: 0.5,
                angle: -20,
                speed: 1,
                background: "skin_Decennial_XiaHouShi_ZhanChangJueBan_bg.png",
                skinName: "战场绝版"
            },*/
			战场绝版:{
				name: '夏侯氏/战场绝版/daiji2',
				x: [0, 0.44],
				y: [0, 0.48],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '夏侯氏/战场绝版/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '夏侯氏/战场绝版/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '夏侯氏/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},		
			明良千古:{
				name: '夏侯氏/明良千古/XingXiang',
				x: [0,0.3],
				y: [0,0.15],
				scale: 0.58,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '夏侯氏/明良千古/BeiJing',
					scale: 0.4,
					x: [0, 1.8],
					y: [0, 0.5]
				},
			},
			夏花绚烂: {
				name: '夏侯氏/夏花绚烂/daiji2',
				x: [0, 0.45],
				y: [0, 0.5],
				scale: 0.76,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '夏侯氏/夏花绚烂/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '夏侯氏/夏花绚烂/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '夏侯氏/夏花绚烂/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			星春侯福: {
				name: '夏侯氏/星春侯福/daiji2',
				x: [0, 0.44],
				y: [0, 0.48],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '夏侯氏/星春侯福/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '夏侯氏/星春侯福/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '夏侯氏/星春侯福/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '夏侯氏/星春侯福/JiSha',
						x: [0, 0.47],
						version:"4.0",
						scale: 0.85,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			猪年中秋:{
				name: '夏侯氏/猪年中秋/XingXiang',
				x: [0,0.25],
				y: [0,0.15],
				scale: 0.5,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '夏侯氏/猪年中秋/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        xiahouyuan: {//夏侯渊
			果敢速战:{
				name: '夏侯渊/果敢速战/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.28],
				y: [0,0.45],
				scale: 0.65,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '夏侯渊/果敢速战/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			闪光速行: {
				name: '夏侯渊/闪光速行/daiji2',
				x: [0, 0.6],
				y: [0, 0.47],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '夏侯渊/闪光速行/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '夏侯渊/闪光速行/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '夏侯渊/闪光速行/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        xiaoqiao: {//小乔
			采莲江南:{
				name: '小乔/采莲江南/XingXiang',
				x: [0,1.6],
				y: [0,0.32],
				scale: 0.45,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '小乔/采莲江南/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			花好月圆: {
				name: '小乔/花好月圆/daiji2',
				x: [0, 0.45],
				y: [0, 0.46],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '小乔/花好月圆/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '小乔/花好月圆/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '小乔/花好月圆/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '小乔/花好月圆/JiSha',
						x: [0, 0.47],
						version:"4.0",
						scale: 0.85,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			矫情之花: {
				name: '小乔/矫情之花/daiji2',
				x: [0, 0.41],
				y: [0, 0.48],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '小乔/矫情之花/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '小乔/矫情之花/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '小乔/矫情之花/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			如花似朵:{
				name: '小乔/如花似朵/XingXiang',
				x: [0,0.6],
				y: [0,0.15],
				scale: 0.5,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '小乔/如花似朵/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			软语香花: {
				name: '小乔/软语香花/daiji2',
				x: [0, 0.26],
				y: [0, 0.44],
				scale: 0.88,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '小乔/软语香花/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '小乔/软语香花/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '小乔/软语香花/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			鼠年春分:{
				name: '小乔/鼠年春分/XingXiang',
				x: [0, -1.14],
				y: [0,0.08],
				scale: 0.58,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '小乔/鼠年春分/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			兔年七夕:{
				name: '小乔/兔年七夕/XingXiang',
				x: [0,0.1],
				y: [0,0.45],
				scale: 0.38,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '小乔/兔年七夕/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			月夜佳妍:{
				name: '小乔/月夜佳妍/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0],
				y: [0,0.22],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '小乔/月夜佳妍/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			战场绝版: {
				name: '小乔/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.34],
				y: [0, 0.35],
				scale: 1.15,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '小乔/战场绝版/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '小乔/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 1.1,
				},
				beijing: {
					name: '小乔/战场绝版/beijing',
					x: [0, -0.3],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '小乔/战场绝版/shouji2',
					scale: 0.7,
					speed: 0.8,
					delay: 0.3,
					effect: {
						name: '小乔/战场绝版/shouji',
						scale: 0.6,
						speed: 0.8,
						delay: 0.4,
					},
				},
			},
			猪年大雪:{
				name: '小乔/猪年大雪/XingXiang',
				x: [0,0.4],
				y: [0,0.35],
				scale: 0.44,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '小乔/猪年大雪/BeiJing',
					scale: 0.4,
					x: [0, 0.8],
					y: [0, 0.5]
				},
			},
        },
        xinxianying: {//辛宪英
			鼠年春节:{
				name: '辛宪英/鼠年春节/XingXiang',
				x: [0,0.43],
				y: [0,0.42],
				scale: 0.46,
				angle: -30,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '辛宪英/鼠年春节/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            洞察才辨: {
                name: "辛宪英/洞察才辨/daiji",
                x: [0, 0.5],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                shizhounian: true,
				chuchang: {
					name: '辛宪英/洞察才辨/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '辛宪英/洞察才辨/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '辛宪英/洞察才辨/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },			
			英装素果: {
				name: '辛宪英/英装素果/daiji2',
				x: [0, 0.41],
				y: [0, 0.65],
				scale: 0.68,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '辛宪英/英装素果/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '辛宪英/英装素果/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '辛宪英/英装素果/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战场绝版: {
				name: '辛宪英/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.68],
				y: [0, 0.34],
				scale: 0.5,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '辛宪英/战场绝版/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '辛宪英/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.7,
				},
				beijing: {
					name: '辛宪英/战场绝版/beijing',
					x: [0, 0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '辛宪英/战场绝版/shouji2',
					scale: 0.7,
					speed: 0.8,
					delay: 0.3,
					effect: {
						name: '辛宪英/战场绝版/shouji',
						scale: 0.6,
						speed: 0.8,
						delay: 0.3,
					},
				},
			},
        },
        ol_xuhuang: {//徐晃
			蟾宫伐桂:{
				name: '徐晃/蟾宫伐桂/XingXiang',
				x: [0,0.5],
				y: [0,-0.1],
				scale: 0.68,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '徐晃/蟾宫伐桂/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			挥器扫敌: {
				name: '徐晃/挥器扫敌/daiji2',
				x: [0, 0.47],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐晃/挥器扫敌/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '徐晃/挥器扫敌/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '徐晃/挥器扫敌/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			虚拟天团: {
				name: '徐晃/虚拟天团/daiji2',
				x: [0, 0.45],
				y: [0, 0.36],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐晃/虚拟天团/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '徐晃/虚拟天团/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '徐晃/虚拟天团/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        xurong: {//徐荣
			怒燎横空: {
				name: '徐荣/怒燎横空/daiji2',
				shan: 'play3',
				x: [0, 0.3],
				y: [0, 0.35],
				scale: 1,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐荣/怒燎横空/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '徐荣/怒燎横空/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '徐荣/怒燎横空/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				audio: {
					skill: '徐荣/怒燎横空/audio',
				},
				beijing: {
					name: '徐荣/怒燎横空/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '徐荣/怒燎横空/shouji2',
					scale: 0.4,
					speed: 0.6,
					delay: 0.35,
					effect: {
						name: '徐荣/怒燎横空/shouji',
						scale: 0.65,
						speed: 0.6,
						delay: 0.45,
					},
				},
				special: {
					变身: {
						hp: 2,
						name: '徐荣/怒燎横空2',
					},
					condition: {
						lowhp: {
							transform: ['变身'],
							recover: true,
							effect: {
							    name: 'juexing_xurong',
							    scale: 0.6,
							},
						},
					},
				},
			},
			怒燎横空2: {
				name: '徐荣/怒燎横空2/daiji2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.42],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐荣/怒燎横空2/chuchang',
					action: 'play',
					scale: 0.65,
				},
				gongji: {
					name: '徐荣/怒燎横空2/chuchang2',
					action: 'gongji',
					scale: 0.65,
				},
				teshu: {
					name: '徐荣/怒燎横空2/chuchang2',
					action: 'jineng',
					scale: 0.65,
				},
				audio: {
					skill: '徐荣/怒燎横空2/audio',
				},
				beijing: {
					name: '徐荣/怒燎横空2/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '徐荣/怒燎横空2/shouji2',
					scale: 0.4,
					speed: 0.6,
					delay: 0.3,
					effect: {
						name: '徐荣/怒燎横空2/shouji',
						scale: 0.55,
						speed: 0.6,
						delay: 0.4,
					},
				},
			},
			横行四海: {
                name: "徐荣/横行四海/XingXiang",
                x: [0,0.41],
                y: [0,0.05],
                scale: 0.67,
                angle: 0,
                //speed: 1,
				//action: 'DaiJi',
                beijing: {
					name: '徐荣/横行四海/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
            },
			烬灭神骇:{
				name: '徐荣/烬灭神骇/XingXiang',
				x: [0,0.6],
				y: [0,0.36],
				scale: 0.4,
				angle: -20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '徐荣/烬灭神骇/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			战场豆腐: {
                name: "skin_xurong_ZhanChangDouFu",
                x: [0, 0.65],
                y: [0, 0.35],
                scale: 0.4,
                angle: -10,
                speed: 1,
                //action: "DaiJi",
                beijing: {
					name: '徐荣/烬灭神骇/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
                skinName: "战场豆腐"
            },			
            困龙缚虎: {
                name: '徐荣/困龙缚虎/daiji2',
                x: [0, 0.45],
                y: [0, 0.15],
                scale: 0.5,
                angle: 3,
				shizhounian: true,
                chuchang: {
					name: '徐荣/困龙缚虎/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '徐荣/困龙缚虎/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '徐荣/困龙缚虎/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },			
			文和乱武: {
				name: '徐荣/文和乱武/daiji2',
				x: [0, 0.45],
				y: [0, 0.57],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐荣/文和乱武/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '徐荣/文和乱武/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '徐荣/文和乱武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			凶励杀绝:{
				name: '徐荣/凶励杀绝/xingxiang',
				version:"4.0",
				x: [0,-0.1],
				y: [0,0.48],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '徐荣/凶励杀绝/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        xusheng: {//徐盛
			破军杀将:{
				name: '徐盛/破军杀将/XingXiang',
				x: [0,0.3],
				y: [0,-0.03],
				scale: 0.68,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '徐盛/破军杀将/BeiJing',
					scale: 0.4,
					x: [0, 1],
					y: [0, 0.5]
				},
			},
			御姐宝: {
        		name: 'luobo-nianghuadabao',
        		x: [25, 0.35],
       			y: [-30, 0.15],
        		scale: 0.15,
        		background: 'skin_xusheng_xin_bg.png',
        		skinName: "御姐宝"
       		},			
	        圣诞限定: {
                name: "skin_xusheng_ShengDanXianDing",
                x: [0, 0.3],
                y: [0, 0.45],
                scale: 0.4,
                angle: 5,
                speed: 1,
                //action: "DaiJi",
                background: "skin_xusheng_ShengDanXianDing_bg",
                skinName: "圣诞限定"
            },		
            百里疑城: {
                name: "徐盛/百里疑城/daiji2",
                x: [0, 0.5],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                //speed: 1,
				shizhounian: true,
                chuchang: {
					name: '徐盛/百里疑城/chuchang',
					action: 'play',
					scale: 0.65,
				},
				gongji: {
					name: '徐盛/百里疑城/chuchang',
					action: 'play',
					scale: 0.8,
				},
                beijing:{
					name: "徐盛/百里疑城/beijing",
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "百里疑城"
            },
			独兵斫敌:{
				name: '徐盛/独兵斫敌/xingxiang',
				version:"4.0",
				x: [0,0.3],
				y: [0,0.25],
				scale: 1.1,
				angle: -5,
                //speed: 1,
				beijing: {
					name: '徐盛/独兵斫敌/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},			
        },
        xushi: {//徐氏
			冰心玉质: {
				name: '徐氏/冰心玉质/daiji2',
				x: [0, 0.43],
				y: [0, 0.39],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐氏/冰心玉质/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '徐氏/冰心玉质/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '徐氏/冰心玉质/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
            巾帼花武: {
				name: '徐氏/巾帼花武/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.34],
				scale: 1.12,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐氏/巾帼花武/chuchang',
					action: 'play',
					scale: 0.65,
				},
				gongji: {
					name: '徐氏/巾帼花武/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.85,
				},
				beijing: {
					name: '徐氏/巾帼花武/beijing',
					x: [0, 0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '徐氏/巾帼花武/shouji2',
					scale: 0.4,
					speed: 0.6,
					delay: 0.2,
					effect: {
						name: '徐氏/巾帼花武/shouji',
						scale: 0.5,
						speed: 0.6,
						delay: 0.3,
					},
				},
			},        			
			拈花思君: {
				name: '徐氏/拈花思君/daiji2',
				x: [0, 0.42],
				y: [0, 0.52],
				scale: 0.9,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐氏/拈花思君/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '徐氏/拈花思君/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '徐氏/拈花思君/beijing',
					x: [0, 0.1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			琪花瑶草:{
				name: '徐氏/琪花瑶草/XingXiang',
				x: [0,0.76],
				y: [0,0.22],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '徐氏/琪花瑶草/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			琪花瑶草decade: {
				name: '徐氏/琪花瑶草decade/daiji2',
				x: [0, 0.35],
				y: [0, 0.42],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐氏/琪花瑶草decade/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '徐氏/琪花瑶草decade/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '徐氏/琪花瑶草decade/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			思君感伤: {
                name: '徐氏/思君感伤/xingxiang_2',
				x: [0,0.45],
				y: [0,0.41],
				angle: 0,
				scale: 1,
                version:"4.0",
                //action: 'DaiJi',
                beijing: {
					name: '徐氏/思君感伤/beijing',
					x: [0,0.45],
				    y: [0,0.41],
				    angle: 0,
				    scale: 0.7,
					version:"4.0",
				},
			},
			为夫弑敌: {
				name: '徐氏/为夫弑敌/daiji2',
				x: [0, 0.27],
				y: [0, 0.52],
				scale: 0.85,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐氏/为夫弑敌/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '徐氏/为夫弑敌/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '徐氏/为夫弑敌/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战场绝版: {
                name: '徐氏/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.34],
				scale: 1.12,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '徐氏/战场绝版/chuchang',
					action: 'play',
					scale: 0.65,
				},
				gongji: {
					name: '徐氏/战场绝版/chuchang',
					action: 'play',
					scale: 0.8,
				},
                beijing:{
					name: "徐氏/战场绝版/beijing",
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "战场绝版"
            }, 
        },
		xushu: {//徐庶
			契若金兰:{
				name: '徐庶/契若金兰/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0],
				y: [0,0.25],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '徐庶/契若金兰/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			逍遥任侠:{//极略
				name: 'JiLue/徐庶/逍遥任侠/xushu_001',
				json: true,
				x: [0,0.15],
				y: [0,0.25],
				scale: 0.55,
				angle: 0,
                //speed: 1,
			},
        },
        xuzhu: {//许褚
			虎啸生风:{
				name: '许褚/虎啸生风/XingXiang',
				x: [0,0.43],
				y: [0,0.36],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '许褚/虎啸生风/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			兔年端午:{
				name: '许褚/兔年端午/XingXiang',
				x: [0,0.38],
				y: [0,0.66],
				scale: 0.44,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '许褚/兔年端午/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			武动乾坤: {
				name: '许褚/武动乾坤/daiji2',
				x: [0, 0.47],
				y: [0, 0.54],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '许褚/武动乾坤/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '许褚/武动乾坤/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '许褚/武动乾坤/beijing',
					x: [0, 0.65],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '许褚/武动乾坤/JiSha',
						x: [0, 0.42],
						version:"4.0",
						scale: 0.94,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			雄毅勇力:{
				name: '许褚/雄毅勇力/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.45],
				y: [0,0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '许褚/雄毅勇力/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 1.2],
					y: [0, 0.5]
				},
			},
        },
		xujing:{//许靖
			丹枫盈瞳: {
				name: '许靖/丹枫盈瞳/daiji2',			
				shan: 'play3',
				x: [0,0.43],
				y: [0,0.45],
				angle: 0,
				scale: 0.95,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '许靖/丹枫盈瞳/chuchang',
					action: 'play',
					scale: 0.6,
				},
				gongji: {
					name: '许靖/丹枫盈瞳/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '许靖/丹枫盈瞳/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				beijing: {
					name: '许靖/丹枫盈瞳/beijing',
				    x: [0,0.5],
				    y: [0,0.5],
				    scale: 0.3,
				},
				zhishixian: {
					name: '许靖/丹枫盈瞳/shouji2',
					scale: 0.5,
					speed: 0.9,
					delay: 0.7,
					effect: {
						name: '许靖/丹枫盈瞳/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.7,
					},
				},
			},
			祈福:{
				name: '许靖/祈福/SF_qifu_eff_xujing',
				x: [0,0.42],
				y: [0,0.25],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
			},
			识人善用:{
				name: '许靖/识人善用/xingxiang',
				x: [0,0.44],
				y: [0,0.32],
				angle: -5,
				scale: 0.84,
				version:"4.0",
				json:true,
				gongji:{
					name: '许靖/识人善用/xingxiang',
					x: [0,0.44],
					y: [0,0.32],
					angle: -5,
					scale: 0.84,	
					version:"4.0",
					json:true,
					speed:2,
				},
				beijing: {
					name: '许靖/识人善用/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json:true,
				},	
			},
		},
        xushao: {//许劭
            评世雕龙: {
				name: '许劭/评世雕龙/daiji2',
				shan: 'play3',
				x: [0, 0.45],
				y: [0, 0.45],
				scale: 1,
				angle: -5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '许劭/评世雕龙/chuchang',
					action: 'play',
					scale: 0.6,
				},
				gongji: {
					name: '许劭/评世雕龙/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '许劭/评世雕龙/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '许劭/评世雕龙/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '许劭/评世雕龙/shouji2',
					scale: 0.5,
					speed: 0.7,
					delay: 0.2,
					effect: {
						name: '许劭/评世雕龙/shouji',
						scale: 0.4,
						speed: 0.8,
						delay: 0.3,
					},
				},
			},
			声名鹊起: {
				name: '许劭/声名鹊起/daiji2',
				x: [0, 0.42],
				y: [0, 0.5],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '许劭/声名鹊起/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '许劭/声名鹊起/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '许劭/声名鹊起/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        xuyou: {//许攸
			烽火燎袁:{
				name: '许攸/烽火燎袁/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.05],
				y: [0,0.35],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '许攸/烽火燎袁/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			火烧乌巢:{
				name: '许攸/火烧乌巢/XingXiang',
				x: [-10,0.4],
				y: [0,0.09],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '许攸/火烧乌巢/BeiJing',
					scale: 0.25,
					x: [0, 0.8],
					y: [0, 0.5]
				},
			},
			盛气凌人:{
				name: '许攸/盛气凌人/XingXiang',
				x: [0,0.64],
				y: [0,-0.1],
				scale: 0.74,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '许攸/盛气凌人/BeiJing',
					scale: 0.25,
					x: [0, 0.8],
					y: [0, 0.5]
				},
			},
            鸿雪寒山: {
                name: '许攸/鸿雪寒山/daiji2',
                x: [0, 0.58],
                y: [0, 0.15],
                scale: 0.9,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '许攸/鸿雪寒山/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '许攸/鸿雪寒山/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '许攸/鸿雪寒山/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "鸿雪寒山"
            },
            逆转官渡: {
                name: '许攸/逆转官渡/daiji2',
                x: [0, 0.58],
                y: [0, 0.15],
                scale: 0.9,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '许攸/逆转官渡/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '许攸/逆转官渡/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '许攸/逆转官渡/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "逆转官渡"
            },
			战场绝版: {
				name: '许攸/战场绝版/daiji2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.4],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '许攸/战场绝版/chuchang',
					action: 'play',
					scale: 0.65,
				},
				gongji: {
					name: '许攸/战场绝版/chuchang2',
					action: 'gongji',
					scale: 0.65,
				},
				teshu: {
					name: '许攸/战场绝版/chuchang2',
					action: 'jineng',
					scale: 0.65,
				},
				beijing: {
					name: '许攸/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '许攸/战场绝版/shouji2',
					scale: 0.6,
					speed: 0.9,
					delay: 0.6,
					effect: {
						name: '许攸/战场绝版/shouji',
						scale: 0.5,
						speed: 0.6,
						delay: 0.6,
					},
				},
		    },			
        },
		xuangongzhu: {//宣公主
			鹊夜同心:{
				name: '宣公主/鹊夜同心/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.55],
				y: [0,0.22],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '宣公主/鹊夜同心/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '宣公主/鹊夜同心/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.3,
					action: 'play',
				},
				beijing: {
					name: '宣公主/鹊夜同心/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '宣公主/鹊夜同心/jineng02',
					version:"4.0",
				    json: true,
					scale: 0.6,
					speed: 0.8,
					delay: 0.4,
				},
			},
         },
        xuezong: {//薛综
			渡海南征: {
				name: '薛综/渡海南征/daiji2',
				x: [0, 0.37],
				y: [0, 0.53],
				scale: 0.75,
				angle: 5,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '薛综/渡海南征/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '薛综/渡海南征/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '薛综/渡海南征/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		clan_xuncai: {//荀采
			雅柔映采:{
				name: '荀采/雅柔映采/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.58],
				y: [0,0.13],
				scale: 1,
				angle: -25,
                //speed: 1,
				beijing: {
					name: '荀采/雅柔映采/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        xunchen: { //荀谌
            /*鸿雪寒山: {
                name: "skin_Decennial_XunChen_HongXueHanShan",
                x: [0, 0.5],
                y: [0, 0.2],
                scale: 0.5,
                angle: 10,
                speed: 1,
                background: "skin_Decennial_XunChen_HongXueHanShan_bg.png",
                skinName: "鸿雪寒山"
            },*/
			鸿雪寒山:{
				name: '荀谌/鸿雪寒山/daiji2',
				x: [0, 0.44],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '荀谌/鸿雪寒山/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '荀谌/鸿雪寒山/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '荀谌/鸿雪寒山/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			乱世谋主:{
				name: '荀谌/乱世谋主/xingxiang',
				version:"4.0",
				x: [0,0.45],
				y: [0,0.2],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '荀谌/乱世谋主/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			栖木之择:{
				name: '荀谌/栖木之择/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.6],
				y: [0,0.18],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '荀谌/栖木之择/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },       
        xunyou: {//荀攸
			妙策助军:{
				name: '荀攸/妙策助军/XingXiang',
				x: [0,-0.67],
				y: [0,0.22],
				angle: -20,
				scale: 0.6,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '荀攸/妙策助军/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			十二奇策: {
				name: '荀攸/十二奇策/daiji2',
				x: [0, 0.44],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '荀攸/十二奇策/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '荀攸/十二奇策/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '荀攸/十二奇策/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        xunyu: {//荀彧
			谋定天下: {
				name: '荀彧/谋定天下/daiji2',
				x: [0, 0.4],
				y: [0, 0.54],
				scale: 0.73,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '荀彧/谋定天下/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '荀彧/谋定天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '荀彧/谋定天下/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			驱虎吞狼:{
				name: '荀彧/驱虎吞狼/XingXiang',
				x: [0,1.35],
				y: [0,0.08],
				scale: 0.54,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '荀彧/驱虎吞狼/BeiJing',
					scale: 0.25,
					x: [0, 0.1],
					y: [0, 0.5]
				},
			},
			竹隐定局:{
				name: '荀彧/竹隐定局/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.35],
				y: [0,0.15],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '荀彧/竹隐定局/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		yanfuren: {//严夫人
			长乐未央: {
				name: '严夫人/长乐未央/daiji2',
				shan: 'play3',
				x: [0, 0.4],
				y: [0, 0.4],
				scale: 1.05,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '严夫人/长乐未央/chuchang',
					action: 'play',
					scale: 0.75,
				},
				gongji: {
					name: '严夫人/长乐未央/chuchang2',
					action: 'gongji',
					scale: 0.75,
				},
				teshu: {
					name: '严夫人/长乐未央/chuchang2',
					action: 'jineng',
					scale: 0.75,
				},
				beijing: {
					name: '严夫人/长乐未央/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '严夫人/长乐未央/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '严夫人/长乐未央/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.5,
					},
				},
			},
        },
		
        yanyan: {//严颜
			皓首勇力:{
				name: '严颜/皓首勇力/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.43],
				y: [0,0.29],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '严颜/皓首勇力/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		yanwen: {//颜良文丑
			并肩作战: {
	 			name: "颜良文丑/并肩作战/xingxiang",
		  		x: [0,0.55],
		  		y: [0,0.44],
		  		angle: 0,
				scale: 0.48,
				speed: 1,	json: true, version:"4.0",                
				beijing: {
					name: '颜良文丑/并肩作战/beijing',
					x: [0,1.02],
					y: [0,0.42],
					angle: 0,
					scale: 0.48,
					version:"4.0",json: true  
		  		},
			},
			并肩作战颜良:{
				name: '颜良文丑/并肩作战/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.34],
				y: [0,0.25],
				scale: 1.05,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '颜良文丑/并肩作战/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			并肩作战文丑:{
				name: '颜良文丑/并肩作战/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.35],
				y: [0,0.45],
				scale: 1.05,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '颜良文丑/并肩作战/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},            
	  	},
		yanghu: {//羊祜
			端茂劲争:{
				name: '羊祜/端茂劲争/dating_zhutui02',
				version:"4.0",
				x: [0,1.6],
				y: [0,0.1],
				scale: 0.52,
				angle: -20,
                //speed: 1,
				beijing: {
					name: '羊祜/端茂劲争/dating_zhutui01',
					version:"4.0",
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			清觞倚梦:{
				name: '羊祜/清觞倚梦/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.35],
				y: [0,0.1],
				scale: 1.1,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '羊祜/清觞倚梦/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        yanghuiyu: {//羊徽瑜
			牛年中秋:{
				name: '羊徽瑜/牛年中秋/XingXiang',
				x: [0,-0.3],
				y: [0,0.58],
				scale: 0.45,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '羊徽瑜/牛年中秋/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			月耀华裳:{
				name: '羊徽瑜/月耀华裳/XingXiang',
				x: [0,1.67],
				y: [0,-0.56],
				scale: 0.65,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '羊徽瑜/月耀华裳/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			绵丽春暖: {
				name: '羊徽瑜/绵丽春暖/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				action: 'play2',
				teshu: 'play3',
				chuchang: {action: 'play4',},
				gongji: 'play5',
				x: [0, 0.82],
				y: [0, 0],
				scale: 1.4,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '羊徽瑜/绵丽春暖/beijing',
					version:"4.0",
				    json: true,
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.6,
				},
				zhishixian: {
					name: '羊徽瑜/绵丽春暖/jineng02',
					version:"4.0",
				    json: true,
					scale: 0.7,
					speed: 0.5,
					delay: 0.4,
				},
			},
			璟瑜荷徽: {
                name: '羊徽瑜/璟瑜荷微/xingxiang',
				x: [0,0.45],
				y: [0,0.41],
				angle: 0,
				scale: 0.7,
                 version:"4.0",
                //action: 'DaiJi',
                beijing: {
					name: '羊徽瑜/璟瑜荷微/beijing',
					x: [0,0.45],
					y: [0,0.41],
					angle: 0,
					scale: 0.7,
					version:"4.0",
				},
			},
			书颜繁花:{
				name: '羊徽瑜/书颜繁花/xingxiang',
				x: [0,0.5],
				y: [0,0.31],
				scale: 1,
				angle:0,
				version:"4.0",
				beijing: {
					name: '羊徽瑜/书颜繁花/beijing',
					x: [0,0.45],
					y: [0,0.41],
					angle: 0,
					scale: 0.7,
					version:"4.0",
				},
			},
        },
        yangbiao: {//杨彪
			忧心国事:{
				name: '杨彪/忧心国事/XingXiang',
				x: [0,0.29],
				y: [0,0.38],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '杨彪/忧心国事/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			国之柱石: {
				name: '杨彪/国之柱石/XingXiang',
				x: [0,0.41],
				y: [0,0.32],
				angle: -8,
				scale: 0.4,
				//speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '杨彪/国之柱石/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        yangwan: {//杨婉
			明良千古:{
				name: '杨婉/明良千古/XingXiang',
				x: [0,-0.4],
				y: [0,0.26],
				scale: 0.52,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '杨婉/明良千古/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			新桃迎卯:{
				name: '杨婉/新桃迎卯/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.1],
				y: [0,0.55],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '杨婉/新桃迎卯/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			星光淑婉: {
                name: '杨婉/星光淑婉/xingxiang',
				x: [0,0.11],
				y: [0,0.19],
				scale: 0.9,
                angle: 0,
                speed: 1,
                version:"4.0",
				json: true,
				gongji: {  
					name:"杨婉/星光淑婉/jineng01",		          
            		x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					version:"4.0",
					json: true  
               }, 
                beijing: {
					name: '杨婉/星光淑婉/beijing',
					x: [0,1.23],
					y: [0,0.44],
					angle: 0,
					scale: 0.6,
					version:"4.0",
					json: true,
				},
				星光淑婉decade: {
					name: '杨婉/星光淑婉decade/daiji2',
					x: [0, 0.42],
					y: [0, 0.36],
					scale: 1.1,
					angle: 0,
					//speed: 1,
					shizhounian: true,
					chuchang: {
						name: '杨婉/星光淑婉decade/chuchang',
						scale: 0.6,
						action: 'play',
					},
					gongji: {
						name: '杨婉/星光淑婉decade/chuchang',
						scale: 0.8,
						action: 'play',
					},
					beijing: {
						name: '杨婉/星光淑婉decade/beijing',
						x: [0, 0.5],
						y: [0, 0.5],
						scale: 0.4,
					},
				},
			},
            /*星光淑婉: {
                name: "skin_Decennial_YangWan_XingGuangShuWan",
                x: [0, 0.5],
                y: [0, 0.2],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_YangWan_XingGuangShuWan_bg.png",
                skinName: "星光淑婉"
            },	*/		
        },
        yangxiu: {//杨修
			鼠年端午:{
				name: '杨修/鼠年端午/XingXiang',
				x: [0,0.5],
				y: [0,0.18],
				scale: 0.65,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '杨修/鼠年端午/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			字字珠玑: {
				name: '杨修/字字珠玑/daiji2',
				x: [0, 0.36],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '杨修/字字珠玑/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '杨修/字字珠玑/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '杨修/字字珠玑/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
			度龙品酥: {
				name: '杨修/度龙品酥/daiji2',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '杨修/度龙品酥/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '杨修/度龙品酥/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '杨修/度龙品酥/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		yangyan: {//杨艳
            妍芷艳质: {
               	name: "杨艳/妍芷艳质/xingxiang",
				x: [0,0.53],
				y: [0,0.4],
				angle: 0,
				scale: 0.7,
				speed: 1,	json: true, version:"4.0",
				gongji: {  
					name:"杨艳/妍芷艳质/jineng01",		          
					x: [0,0.64],
					y: [0,0.44],
					scale: 0.9,	version:"4.0",json: true  
				},                   
			   	zhishixian: {
					name: '杨艳/妍芷艳质/jineng02',  
					scale: 0.8,
					speed: 0.5,
					delay: 0.5,  
					version:"4.0",json: true,  
					effect: {  
						name: '杨艳/妍芷艳质/jineng02', 
						scale: 0.6,
						speed: 0.7,
						delay: 0.2,
						version:"4.0",json: true  
					}                
				},               
            	beijing: {
					name: '杨艳/妍芷艳质/beijing',
					x: [0,0.64],
					y: [0,0.46],
					angle: 0,
					scale: 0.55,
					version:"4.0",json: true  
				},
                skinName: "妍芷艳质"
            },
        },
		yangyi:{//杨仪
			狷狭激愤:{
				name: '杨仪/狷狭激愤/xingxiang',
				x: [0,0.17],
				y: [0,0.12],
				scale: 1.06,
				angle: 0,
				version: '4.0',  
				json: true,  
				gongji: {  
					name:"杨仪/狷狭激愤/xingxiang",		          
					x: [0,0.72],
					y: [0,0.44],
					scale: 0.9,	
					version:"4.0",
					json: true,
					speed:2,
				   },    
				beijing: {
					name: '杨仪/狷狭激愤/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale: 0.6,
				},

			},
		},
		yangzhi: {//杨芷
        	妍芷艳质: {
   				name: "杨芷/妍芷艳质/xingxiang",
			    x: [0,0.51],
				y: [0,0.42],
				angle: 0,
				scale: 0.7,
                speed: 1,	json: true, version:"4.0",
                gongji: {  
					name:"杨芷/妍芷艳质/jineng01",		          
            		x: [0,0.64],
					y: [0,0.44],
					scale: 1.0,	version:"4.0",json: true  
               	},      
                hishixian: {
					name: '杨芷/妍芷艳质/jineng02',  
					scale: 0.8,
					speed: 0.5,
					delay: 0.5,  
					version:"4.0",json: true,  
					effect: {  
						name: '杨芷/妍芷艳质/jineng02', 
						scale: 0.6,
						speed: 0.7,
						delay: 0.2,
						version:"4.0",json: true  
					}                
				},               
               beijing: {
					name: '杨芷/妍芷艳质/beijing',
					x: [0,1.47],
					y: [0,0.47],
					angle: 0,
					scale: 0.55,
					version:"4.0",json: true  
		 		},
      		},
    	},
		xf_yiji: {//伊籍
			文若绚星: {
				name: '伊籍/文若绚星/daiji2',
				x: [0, 0.6],
				y: [0, 0.4],
				scale: 1,
				angle: 25,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '伊籍/文若绚星/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '伊籍/文若绚星/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '伊籍/文若绚星/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
		yinfuren: {//尹夫人
        	战场荣耀: {
				name: '尹夫人/战场荣耀/daiji2',			
				shan: 'play3',
				x: [0,0.43],
				y: [0,0.45],
				angle: 0,
				scale: 0.95,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '尹夫人/战场荣耀/chuchang',
					action: 'play',
					scale: 0.6,
				},
				gongji: {
					name: '尹夫人/战场荣耀/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '尹夫人/战场荣耀/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				beijing: {
					name: '尹夫人/战场荣耀/beijing',
				    x: [0,0.5],
				    y: [0,0.5],
				    scale: 0.3,
				},
				zhishixian: {
					name: '尹夫人/战场荣耀/shouji2',
					scale: 0.5,
					speed: 0.9,
					delay: 0.7,
					effect: {
						name: '尹夫人/战场荣耀/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.7,
					},
				},
			},
	    },
		yuji: {//于吉
			虚幻之躯:{
				name: '于吉/虚幻之躯/xingxiang',
				version:"4.0",
				x: [0,0.5],
				y: [0,0.2],
				scale: 0.74,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '于吉/虚幻之躯/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			虚拟天团: {
				name: '于吉/虚拟天团/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.53],
				y: [0,0.34],
				scale: 1,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '于吉/虚拟天团/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '于吉/虚拟天团/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '于吉/虚拟天团/beijing',
					x: [0, -0.29],
					y: [0, 0.65],
					scale: 0.4,
				},
			},
        },
        yujin: {//于禁
			威严毅重:{
				name: '于禁/威严毅重/XingXiang',
				x: [0,0.25],
				y: [0,0.3],
				scale: 0.4,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '于禁/威严毅重/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        ol_yuanshao: {//袁绍
			率盟伐董: {
				name: '袁绍/率盟伐董/daiji2',
				x: [0, 0.45],
				y: [0, 0.5],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '袁绍/率盟伐董/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '袁绍/率盟伐董/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '袁绍/率盟伐董/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			箭击曹营: {
				name: '袁绍/箭击曹营/daiji',
				x: [0, 0.38],
				y: [0, 0.3],
				scale: 0.45,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '袁绍/箭击曹营/chuchang',
					scale: 0.4,
					action: 'play',
				},
				gongji: {
					name: '袁绍/箭击曹营/chuchang',
					scale: 0.5,
					action: 'play',
				},
				beijing: {
					name: '袁绍/箭击曹营/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '袁绍/箭击曹营/jisha',
						scale: 0.6,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			一往无前:{
				name: '袁绍/一往无前/XingXiang',
				x: [0,0.26],
				y: [0,-0.25],
				scale: 0.78,
				angle: -25,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '袁绍/一往无前/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			声震寰宇:{
                name: '袁绍/声震寰宇/XingXiang',
                x: [0,-0.03],
                y: [0,-0.23],
                angle: 1,
                scale: 0.75,
                //speed: 1,
                //action: 'DaiJi',
                beijing: {
                    name: '袁绍/声震寰宇/BeiJing',
                    scale: 0.3,
                    x: [0, 0.4],
                    y: [0, 0.5]
                },
            },
			虚拟天团: {
				name: '袁绍/虚拟天团/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.53],
				y: [0,0.34],
				scale: 1,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '袁绍/虚拟天团/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '袁绍/虚拟天团/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '袁绍/虚拟天团/beijing',
					x: [0, -0.29],
					y: [0, 0.65],
					scale: 0.4,
				},
			},
        },
		yuanshu: {//袁术
			机缘得玺:{
				name: '袁术/机缘得玺/xingxiang',
				version:"4.0",
				x: [0,0.85],
				y: [0,0.4],
				scale: 0.9,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '袁术/机缘得玺/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.8],
					y: [0, 0.5]
				},
			},
        },
		yuantanyuanshang: {//袁谭袁尚
			常棣失华:{
				name: '袁谭袁尚/常棣失华/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.45],
				y: [0,0.55],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '袁谭袁尚/常棣失华/jineng01',
					version:"4.0",
				    json: true,
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '袁谭袁尚/常棣失华/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '袁谭袁尚/常棣失华/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.7],
					y: [0, 0.5]
				},
			},
        },
        zhangbao: {//张宝
			苍天已死:{
				name: '张宝/苍天已死/XingXiang',
				x: [0,0.38],
				y: [0,-0.13],
				scale: 0.65,
				angle: 0,
            	speed: 1.5,
				//action: 'DaiJi',
				beijing: {
					name: '张宝/苍天已死/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			神符咒术:{
				name: '张宝/神符咒术/xingxiang',
				version:"4.0",
				x: [0,0.68],
				y: [0,-0.08],
				scale: 1.4,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '张宝/神符咒术/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, -0.2],
					y: [0, 0.5]
				},
			},
        },
        zhangchangpu: {//张昌蒲
			寄情山水: {
                name: "张昌蒲/寄情山水/daiji2",
                x: [0, 0.5],
                y: [0, 0.2],
                scale: 0.5,
                angle: 5,
                shizhounian: true,
				chuchang: {
					name: '张昌蒲/寄情山水/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张昌蒲/寄情山水/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张昌蒲/寄情山水/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},

            },
			蒲月念兔:{
				name: '张昌蒲/蒲月念兔/xingxiang',
				x: [0,0.62],
				y: [0,0.42],
				angle: -5,
				scale: 0.74,
				version:"4.0",
				beijing: {
					name: '张昌蒲/蒲月念兔/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
			},
			钟桂香蒲: {
				name: '张昌蒲/钟桂香蒲/daiji2',
				x: [0, 0.45],
				y: [0, 0.55],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张昌蒲/钟桂香蒲/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张昌蒲/钟桂香蒲/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张昌蒲/钟桂香蒲/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            月影伴舟: {
				name: '张菖蒲/月影伴舟/XingXiang',
				version: '4.0',
				//alpha: true,
				x: [0,0.25],
				y: [0,0.2],
				scale: 0.34,
				background: '张菖蒲/月影伴舟/beijing.png',
			},
            战场绝版: {
                name: "张昌蒲/战场绝版/daiji2",
				x: [0,0.4],
				y: [0,0.43],
				angle: -11,
				scale: 0.87,
				shizhounian: true,
				chuchang: {
					name: '张昌蒲/战场绝版/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张昌蒲/战场绝版/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张昌蒲/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },
			龙年端午:{
				name: '张昌蒲/龙年端午/XingXiang',
				x: [0,0.61],
				y: [0,0.50],
				scale: 0.32,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张昌蒲/龙年端午/BeiJing',
					x: [0, 0.5],
					y: [0, 0.47],
					scale: 0.3,
				},
			},			
        },
        zhangchunhua: {//张春华
			绰约多姿: {
				name: '张春华/绰约多姿/daiji2',
				x: [0, 0.5],
				y: [0, 0.5],
				scale: 0.88,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张春华/绰约多姿/chuchang',
					scale: 0.65,
					action: 'play',
				},
				gongji: {
					name: '张春华/绰约多姿/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '张春华/绰约多姿/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			红梅迎春:{
				name: '张春华/红梅迎春/xingxiang',
				version:"4.0",
				shizhounian: true,
				x: [0,0.5],
				y: [0,0.5],
				scale: 0.95,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '张春华/红梅迎春/jineng01',
					version:"4.0",
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '张春华/红梅迎春/jineng01',
					version:"4.0",
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '张春华/红梅迎春/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '张春华/红梅迎春/jineng02',
					version:"4.0",
					scale: 0.5,
					speed: 0.6,
					delay: 0.3,
				},
			},
            /*巾帼花武: {
                name: "skin_Decennial_ZhangChunHua_JinGuoHuaWu",
                x: [0, 0.3],
                y: [0, 0.3],
                scale: 1.0,
                angle: -27,
                speed: 1,
                background: "skin_Decennial_ZhangChunHua_JinGuoHuaWu_bg.png",
                skinName: "巾帼花武"
            },*/
			巾帼花武:{
				name: '张春华/巾帼花武/daiji2',
				x: [0, 0.3],
                y: [0, 0.3],
                scale: 1.0,
                angle: -27,
                speed: 1,
				shizhounian: true,
				chuchang: {
					name: '张春华/巾帼花武/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张春华/巾帼花武/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张春华/巾帼花武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			宣穆夜袭:{
				name: '张春华/宣穆夜袭/XingXiang',
				x: [0,0.23],
				y: [0,0.18],
				scale: 0.54,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张春华/宣穆夜袭/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			雪中舞刃:{
				name: '张春华/雪中舞刃/XingXiang',
				x: [0,-0.1],
				y: [0,0.37],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张春华/雪中舞刃/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			月下瑶情:{
				name: '张春华/月下瑶情/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.55],
				y: [0,0.4],
				scale: 0.85,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '张春华/月下瑶情/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
            /*月夜逐华: {
                name: "skin_Decennial_ZhangChunHua_YueYeZhuHua",
                x: [0, -0.7],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_ZhangChunHua_YueYeZhuHua_bg.png",
                skinName: "月夜逐华"
            },*/
			月夜逐华:{
				name: '张春华/月夜逐华/daiji2',
				x: [0,0.49],
				y: [0,0.52],
				scale: 0.76,
				angle:0,
				//speed: 1,
				shizhounian: true,
				chuchang: {
					name: '张春华/月夜逐华/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张春华/月夜逐华/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张春华/月夜逐华/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},			
			牛年立冬:{
				name: '张春华/牛年立冬/XingXiang',
				x: [0,0.38],
				y: [0,0.23],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张春华/牛年立冬/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			战场绝版: {
				name: '张春华/战场绝版/daiji2',
				x: [0, 0.53],
				y: [0, 0.55],
				scale: 0.8,
				angle: 20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张春华/战场绝版/chuchang',
					scale: 0.65,
					action: 'play',
				},
				gongji: {
					name: '张春华/战场绝版/chuchang',
					scale: 0.85,
					action: 'play',
				},
				beijing: {
					name: '张春华/战场绝版/beijing',
					x: [0, -0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        zhangfei: {//张飞
			不忘初心:{
				name: '张飞/不忘初心/xingxiang',
				version:"4.0",
				x: [0,0.64],
				y: [0,0.23],
				scale: 1,
				angle: 15,
                //speed: 1,
				beijing: {
					name: '张飞/不忘初心/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			诚勇摄威:{
				name: '张飞/诚勇摄威/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.58],
				y: [0,0.15],
				scale: 1.05,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '张飞/诚勇摄威/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			据水断桥:{
				name: '张飞/据水断桥/XingXiang',
				x: [0,-0.1],
				y: [0,0.23],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张飞/据水断桥/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			明良千古:{
				name: '张飞/明良千古/XingXiang',
				x: [0,0.2],
				y: [0,0.35],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张飞/明良千古/BeiJing',
					scale: 0.25,
					x: [0, 1.1],
					y: [0, 0.5]
				},
			},
			武动乾坤: {
				name: '张飞/武动乾坤/daiji2',
				x: [0, 0.45],
				y: [0, 0.5],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张飞/武动乾坤/chuchang',
					scale: 1.2,
					action: 'play',
				},
				gongji: {
					name: '张飞/武动乾坤/chuchang',
					scale: 1.4,
					action: 'play',
				},
				beijing: {
					name: '张飞/武动乾坤/beijing',
					x: [0, 0.3],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			险棋激战: {
				name: '张飞/险棋激战/daiji2',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张飞/险棋激战/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张飞/险棋激战/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张飞/险棋激战/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			兔年端午:{
				name: '张飞/兔年端午/XingXiang',
				x: [0,0.32],
				y: [0,0.42],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张飞/兔年端午/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			猪年中秋:{
				name: '张飞/猪年中秋/XingXiang',
				x: [0,0.43],
				y: [0,0.33],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张飞/猪年中秋/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},               
        },
		zhangfen: {//张奋
			天工神机: {
				name: '张奋/天工神机/daiji2',
				x: [0, 0.35],
				y: [0, 0.42],
				scale: 1.05,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张奋/天工神机/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '张奋/天工神机/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '张奋/天工神机/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        zhanggong: {//张恭
			逐鹿天下: {
				name: '张恭/逐鹿天下/daiji2',
				x: [0, 0.41],
				y: [0, 0.52],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张恭/逐鹿天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '张恭/逐鹿天下/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '张恭/逐鹿天下/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        zhanghe: {//张郃
			背水一战:{
				name: '张郃/背水一战/XingXiang',
				x: [0,0.32],
				y: [0,0.37],
				scale: 0.45,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张郃/背水一战/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            汉中溃蜀: {
                name: "张郃/汉中溃蜀/daiji2",
				teshu:'play2',
				shan:'play3',
				x: [0,0.72],
				y: [0,0.58],
				angle: 30,
				scale: 0.8,
                speed: 1,
				shizhounian:true,
				chuchang:{
					name:'张郃/汉中溃蜀/chuchang',
					x: [0,0.78],
					y: [0,0.36],
					scale: 0.8,
				},
				gongji:{
					name:'张郃/汉中溃蜀/chuchang',
					x: [0,0.78],
					y: [0,0.36],
					scale: 0.8,
				},
                beijing:{
					name: "张郃/汉中溃蜀/beijing",
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "汉中溃蜀"
            },
			龙骧赫天: {
				name: '张郃/龙骧赫天/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				action: 'play2',
				teshu: 'play3',
				chuchang: {action: 'play4'},
				gongji: 'play5',
				x: [0, 0.48],
				y: [0, 0.38],
				scale: 0.95,
				angle: -10,
                //speed: 1,
				beijing: {
					name: '张郃/龙骧赫天/beijing',
					version:"4.0",
				    json: true,
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.6,
				},
			},			
        },
        zhanghu: { //张虎
            击艮援懿: {
                /*name: "skin_Decennial_ZhangHu_JiGenYuanYi",
                x: [0, 1.0],
                y: [0, 0.45],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_ZhangHu_JiGenYuanYi_bg.png",
                skinName: "击艮援懿"*/
				name: "张虎/击艮援懿/daiji2",
				x: [0,0.35],
				y: [0,0.46],
				scale: 0.8,
                angle: 0,
				shizhounian:true,
				chuchang:{
					name:'张虎/击艮援懿/chuchang',
					x: [0, 0.8],
                	y: [0, 0.4],
                	scale: 0.6,
				},
				gongji:{
					name:'张虎/击艮援懿/chuchang',
					x: [0, 0.8],
                	y: [0, 0.4],
                	scale: 0.6,
				},
                beijing:{
					name:'张虎/击艮援懿/beijing',
					x: [0, 0.8],
                	y: [0, 0.4],
                	scale: 0.6,
				},
            },
        },

        //张济
        zhangji: {
            文和乱武: {
                /*name: "skin_Decennial_ZhangJi_WenHeLuanWu",
                x: [0, 0.6],
                y: [0, 0.3],
                scale: 0.5,
                angle: -10,
                speed: 1,
                background: "skin_Decennial_ZhangJi_WenHeLuanWu_bg.png",
                skinName: "文和乱武"*/
				name: '张济/文和乱武/daiji2',
				x: [0,0.33],
				y: [0,0.38],
				angle: -10,
				scale: 0.98,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张济/文和乱武/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张济/文和乱武/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张济/文和乱武/beijing',
					x: [0, -0.07],
					y: [0, 0.66],
					scale: 0.4,
				},
            },
        },      
        zhangjiao: {//张角
			大贤良师: {
				name: '张角/大贤良师/daiji2',
				x: [0, 0.38],
				y: [0, 0.53],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张角/大贤良师/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张角/大贤良师/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张角/大贤良师/beijing',
					x: [0, 0.3],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			鬼道莫测:{
				name: '张角/鬼道莫测/xingxiang',
				version:"4.0",
				x: [0,0.4],
				y: [0,0.36],
				scale: 1.05,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '张角/鬼道莫测/beijing',
					version:"4.0",
					scale: 0.7,
					x: [0, 0.7],
					y: [0, 0.5]
				},
			},
			黄天当立:{
				name: '张角/黄天当立/XingXiang',
				x: [0,0.28],
				y: [0,0.48],
				scale: 0.5,
				angle: 0,
                speed: 1.2,
				//action: 'DaiJi',
				beijing: {
					name: '张角/黄天当立/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			迅雷风烈:{
				name: '张角/迅雷风烈/XingXiang',
				x: [0,0.43],
				y: [0,0.1],
				scale: 0.65,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张角/迅雷风烈/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			剑斩赤蚺:{
				name: '张角/剑斩赤蚺/xingxiang',
				x: [0,0.4],
				y: [0,0.44],
				angle: -5,
				scale: 0.69,
				version:"4.0",
				json:'true',
				gongji:{
					name: '张角/剑斩赤蚺/xingxiang',
					x: [0,0.62],
					y: [0,0.42],
					angle: -5,
					scale: 0.74,
					version:"4.0",
					json:'true',
				},
				beijing: {
					name: '张角/剑斩赤蚺/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json:'true',
				},

			},
			datingzhutui01:{
				name: '张角/datingzhutui01/datingzhutui01',
				x: [0,0.4],
				y: [0,0.44],
				angle: -5,
				scale: 0.69,
			},
			datingzhutui02:{
				name: '张角/datingzhutui02/datingzhutui02',
				x: [0,0.4],
				y: [0,0.44],
				angle: -5,
				scale: 0.69,
			},
        },
		shen_zhangjiao: {//张角
            驭道震泽: {
				name: '神张角/驭道震泽/daiji2',
				shan: 'play3',
				version: "3.6",
				x: [0, 0.66],
				y: [0, 0.32],
				scale: 1.2,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '神张角/驭道震泽/chuchang',
					version: "3.6",
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '神张角/驭道震泽/chuchang2',
					version: "3.6",
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '神张角/驭道震泽/chuchang2',
					version: "3.6",
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '神张角/驭道震泽/beijing',
					version: "3.6",
					x: [0, 0.29],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '神张角/驭道震泽/shouji2',
					version: "3.6",
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '神张角/驭道震泽/shouji',
						version: "3.6",
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},
		},
		zhangjinyun: {//张瑾云
			经典形象:{
				name: '张瑾云/祈福/SF_qifu_eff_zhanghuanghou',
				x: [0,2.35],
				y: [0,0.3],
				scale: 0.55,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '董贵人/春殿踏水/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
        },
        zhangliao: {//张辽
			登锋陷阵:{
				name: '张辽/登锋陷阵/XingXiang',
				x: [0,0.58],
				y: [0,-0.07],
				scale: 0.62,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张辽/登锋陷阵/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			奋勇破敌: {
				name: '张辽/奋勇破敌/daiji2',
				x: [0, 0.46],
				y: [0, 0.55],
				scale: 0.78,
				angle: 20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张辽/奋勇破敌/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '张辽/奋勇破敌/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '张辽/奋勇破敌/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			攻无不陷:{
				name: '张辽/攻无不陷/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.64],
				y: [0,0.37],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '张辽/攻无不陷/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			武动乾坤: {
				name: '张辽/武动乾坤/daiji2',
				x: [0, 0.35],
				y: [0, 0.53],
				scale: 0.8,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张辽/武动乾坤/chuchang',
					scale: 1.1,
					action: 'play',
				},
				gongji: {
					name: '张辽/武动乾坤/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '张辽/武动乾坤/beijing',
					x: [0, 0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '张辽/武动乾坤/JiSha',
						x: [0, 0.4],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			威震逍遥: {
				name: '张辽/威震逍遥/daiji2',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张辽/威震逍遥/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '张辽/威震逍遥/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '张辽/威震逍遥/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			无坚不陷:{
				name: '张辽/无坚不陷/xingxiang',
				x: [0,0.56],
				y: [0,0.34],
				angle: -10,
				scale: 0.75,
				version: '4.0',  
				json: true,   
				gongji:{
					name: '张辽/无坚不陷/xingxiang',
					x: [0,0.56],
					y: [0,0.34],
					angle: -10,
					scale: 0.75,
					version: '4.0',  
					json: true, 
					speed:2,
				},
				beijing: {
					name: '张辽/无坚不陷/beijing',
					version: '4.0',  
					json: true,
					x: [0,1.72],
					y: [0,0.48],
					scale: 0.6,
				},
			},
        },
		zhangling: {//张陵
            篆符敕星:{
				name: '张陵/篆符敕星/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.81],
				y: [0,0.32],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '张陵/篆符敕星/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        zhanglu: {//张鲁
			虎年冬至:{
				name: '张鲁/虎年冬至/XingXiang',
				x: [0,0.14],
				y: [0,0.66],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张鲁/虎年冬至/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			逐鹿天下: {
				name: '张鲁/逐鹿天下/daiji2',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张鲁/逐鹿天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '张鲁/逐鹿天下/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '张鲁/逐鹿天下/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        zhangqiying: {//张琪瑛
			虎年冬至:{
				name: '张琪瑛/虎年冬至/XingXiang',
				x: [0,0],
				y: [0,0.42],
				scale: 0.4,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张琪瑛/虎年冬至/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			金桂月华:{
				name: '张琪瑛/金桂月华/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.65],
				y: [0,0.65],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '张琪瑛/金桂月华/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			金钰微秋:{
				name: '张琪瑛/金钰微秋/xingxiang',
				version:"4.0",
				x: [0,0.48],
				y: [0,0.42],
				scale: 1.02,
				angle: 15,
                //speed: 1,
				beijing: {
					name: '张琪瑛/金钰微秋/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, -0.4],
					y: [0, 0.5]
				},
			},
			九州春回: {
				name: '张琪瑛/九州春回/daiji2',
				shan: 'play3',
				x: [0, 0.5],
				y: [0, 0.38],
				scale: 1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张琪瑛/九州春回/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '张琪瑛/九州春回/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '张琪瑛/九州春回/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				audio: {
					skill: '张琪瑛/九州春回/audio',
				},
				beijing: {
					name: '张琪瑛/九州春回/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '张琪瑛/九州春回/shouji2',
					scale: 0.7,
					speed: 0.8,
					delay: 0.2,
					effect: {
						name: '张琪瑛/九州春回/shouji',
						scale: 0.7,
						speed: 0.6,
						delay: 0.4,
					},
				},
				special: {
					变身: {
						hp: 2,
						name: 'zhangqiying/九州春回2',
					},
					condition: {
						lowhp: {
							transform: ['变身'],
							recover: true,
						},
					},
				},
			},
			九州春回2: {
				name: '张琪瑛/九州春回2/daiji2',
				shan: 'play3',
				x: [0, 0.15],
				y: [0, 0.35],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张琪瑛/九州春回2/chuchang',
					action: 'play',
					scale: 0.9,
				},
				gongji: {
					name: '张琪瑛/九州春回2/chuchang2',
					action: 'gongji',
					scale: 0.7,
				},
				teshu: {
					name: '张琪瑛/九州春回2/chuchang2',
					action: 'jineng',
					scale: 0.7,
				},
				audio: {
					skill: '张琪瑛/九州春回2/audio',
				},
				beijing: {
					name: '张琪瑛/九州春回2/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '张琪瑛/九州春回2/shouji2',
					scale: 0.6,
					speed: 0.8,
					delay: 0.2,
					effect: {
						name: '张琪瑛/九州春回2/shouji',
						scale: 0.7,
						speed: 0.6,
						delay: 0.5,
					},
				},
			},
            岁稔年丰: {
                name: '张琪瑛/岁稔年丰/daiji2',
                x: [0, 0.5],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
				shizhounian: true,
                chuchang: {
					name: '张琪瑛/岁稔年丰/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '张琪瑛/岁稔年丰/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '张琪瑛/岁稔年丰/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
            },			
			逐鹿天下: {
				name: '张琪瑛/逐鹿天下/daiji2',
				x: [0, 0.36],
				y: [0, 0.5],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张琪瑛/逐鹿天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '张琪瑛/逐鹿天下/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '张琪瑛/逐鹿天下/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
          //张让
        zhangrang: {
            /*窃政聚敛: {
                name: "skin_Decennial_ZhangRang_QieZhengJuLian",
                x: [0, -0.25],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_ZhangRang_QieZhengJuLian_bg.png",
                skinName: "窃政聚敛"
            },*/
			窃政聚敛: {
				name: '张让/窃政聚敛/daiji2',
				x: [0, 0.41],
				y: [0, 0.45],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张让/窃政聚敛/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '张让/窃政聚敛/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '张让/窃政聚敛/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        }, 
		zhangsong: {//张松
			沃鲤泽汉:{
				name: '张松/沃鲤泽汉/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.9],
				y: [0,0.05],
				scale: 1.1,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '张松/沃鲤泽汉/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },     
        zhangxingcai: {//张星彩
			父志耀星: {
				name: '张星彩/父志耀星/daiji2',
				x: [0, 0.4],
				y: [0, 0.47],
				scale: 0.85,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张星彩/父志耀星/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张星彩/父志耀星/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张星彩/父志耀星/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			巾帼花武: {
				name: '张星彩/巾帼花武/daiji2',
				x: [0, 0.45],
				y: [0, 0.45],
				scale: 1,
				angle: 15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张星彩/巾帼花武/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '张星彩/巾帼花武/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '张星彩/巾帼花武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			金枝玉叶: {
				name: "张星彩/金枝玉叶/xingxiang",
				x: [0,0.88],
				y: [0,0.63],
				angle: 15,
				scale: 0.57,
				speed: 1,	json: true, version:"4.0",                
				beijing: {
					name: '张星彩/金枝玉叶/beijing',
					x: [0,0.35],
					y: [0,0.43],
					angle: 0,
					scale: 0.5,
					version:"4.0",json: true  
				},
			},
			遇兔呈祥: {
	        	name: '张星彩/遇兔呈祥/ZhangXingCai_XingXiang',
	 			version: '4.0',
	 			//alpha: true,
				x: [0,0.39],
				y: [0,0.08],
				scale: 0.69,
	 			background: '张星彩/遇兔呈祥/beijing.png',
	 		},
			战场绝版: {
				name: '张星彩/战场绝版/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.53],
				y: [0,0.32],
				angle: 31,
				scale: 1.13,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张星彩/战场绝版/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '张星彩/战场绝版/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '张星彩/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '张星彩/战场绝版/shouji2',
					scale: 0.5,
					speed: 1.2,
					delay: 0.3,
					effect: {
						name: '张星彩/战场绝版/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.35,
					},
				},
			},
			凯旋星花:{
				name: '张星彩/凯旋星花/daiji2',
				x: [0, 0.28],
                y: [0, 0.19],
                scale: 0.75,
                angle: 0,
                speed: 1,
				shizhounian:true,
				chuchang: {
					name: '张星彩/凯旋星花/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张星彩/凯旋星花/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张星彩/凯旋星花/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},  
			临军对阵:{
				name: '张星彩/临军对阵/XingXiang',
				x: [0,0.92],
				y: [0,0.3],
				scale: 0.48,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张星彩/临军对阵/BeiJing',
					scale: 0.4,
					x: [0, -0.55],
					y: [0, 0.4]
				},
			},
			枪碎星河: {
				name: '张星彩/枪碎星河/daiji2',
				x: [0, 0.7],
				y: [0, 0.52],
				scale: 0.82,
				angle: 30,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张星彩/枪碎星河/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '张星彩/枪碎星河/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '张星彩/枪碎星河/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
			}, 
            /*星花柔矛: {
                name: "skin_Decennial_ZhangXingCai_XingHuaRouMao",
                x: [0, 1.28],
                y: [0, 0.1],
                scale: 0.68,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_ZhangXingCai_XingHuaRouMao_bg.png",
                skinName: "星花柔矛"
            },
              凯旋星花: {
                name: "skin_Decennial_ZhangXingCai_KaiXuanXingHua",
                x: [0, 0.28],
                y: [0, 0.19],
                scale: 0.75,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_ZhangXingCai_KaiXuanXingHua_bg.png",
                skinName: "凯旋星花"
            },  */
			星春侯福: {
				name: '张星彩/星春侯福/daiji2',
				x: [0, 0.45],
				y: [0, 0.45],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张星彩/星春侯福/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '张星彩/星春侯福/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '张星彩/星春侯福/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '张星彩/星春侯福/JiSha',
						x: [0, 0.47],
						version:"4.0",
						scale: 0.85,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			星花柔矛:{
				name: '张星彩/星花柔矛/daiji2',
				x: [0, 1.28],
                y: [0, 0.1],
                scale: 0.68,
                angle: 0,
                speed: 1,
				shizhounian:true,
				chuchang: {
					name: '张星彩/星花柔矛/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张星彩/星花柔矛/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张星彩/星花柔矛/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},   
			虎年端午:{
				name: '张星彩/虎年端午/XingXiang',
				x: [0,0.6],
				y: [0,0.04],
				scale: 0.75,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张星彩/虎年端午/BeiJing',
					scale: 0.4,
					x: [0, 0.68],
					y: [0, 0.5]
				},
			},
			猪年中秋:{
				name: '张星彩/猪年中秋/XingXiang',
				x: [0,0.55],
				y: [0,0.4],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张星彩/猪年中秋/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        zhangxiu: {//张绣
			龙骧虎视: {
				name: '张绣/龙骧虎视/daiji2',
				x: [0, 0.4],
				y: [0, 0.51],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张绣/龙骧虎视/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '张绣/龙骧虎视/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '张绣/龙骧虎视/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			玄凰砺羽:{
				name: '张绣/玄凰砺羽/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.34],
				y: [0,0.34],
				scale: 0.92,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '张绣/玄凰砺羽/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			讨伐叛军: {
				name: '张绣/讨伐叛军/daiji2',
				x: [0, 0.4],
				y: [0, 0.54],
				scale: 0.84,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张绣/讨伐叛军/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '张绣/讨伐叛军/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '张绣/讨伐叛军/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			逐鹿天下: {
				name: '张绣/逐鹿天下/daiji2',
				x: [0, 0.4],
				y: [0, 0.54],
				scale: 0.84,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张绣/逐鹿天下/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '张绣/逐鹿天下/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '张绣/逐鹿天下/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		//张嫙
		zhangxuan: {//张嫙
			涟漪夏梦: {
				name: '张嫙/涟漪夏梦/daiji2',
				x: [0, 0.43],
				y: [0, 0.5],
				scale: 0.88,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张嫙/涟漪夏梦/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '张嫙/涟漪夏梦/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '张嫙/涟漪夏梦/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			双姝绰约: {
				name: '张嫙/双姝绰约/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.31],
				scale: 1.21,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张嫙/双姝绰约/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '张嫙/双姝绰约/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '张嫙/双姝绰约/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '张嫙/双姝绰约/shouji2',
					scale: 0.5,
					speed: 1.2,
					delay: 0.3,
					effect: {
						name: '张嫙/双姝绰约/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.35,
					},
				},
			},
        },
		zhangyao: {//张媱
			双姝绰约: {
				name: '张媱/双姝绰约/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.42],
				y: [0, 0.31],
				scale: 1.21,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张媱/双姝绰约/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '张媱/双姝绰约/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '张媱/双姝绰约/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '张媱/双姝绰约/shouji2',
					scale: 0.5,
					speed: 1.2,
					delay: 0.3,
					effect: {
						name: '张媱/双姝绰约/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.35,
					},
				},
			},
        },
		zhangyì: {//张翼
			锐不可当:{
				name: '张翼/锐不可当/XingXiang',
				x: [0,0.6],
				y: [0,0.5],
				scale: 0.45,
				angle: 20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '张翼/锐不可当/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        zhangzhang: {//张昭张纮
			锦运绵长: {
				name: '张昭张纮/锦运绵长/daiji2',
				x: [0, 0.5],
				y: [0, 0.53],
				scale: 0.68,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '张昭张纮/锦运绵长/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '张昭张纮/锦运绵长/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '张昭张纮/锦运绵长/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		zhangzhi: {//张芝
            韵墨濯荷:{
				name: '张芝/韵墨濯荷/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.48],
				y: [0,0.11],
				scale: 1.0,
				angle: 15,
                //speed: 1,
				beijing: {
					name: '张芝/韵墨濯荷/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},
		zhaoang: {//赵昂
		    白枭贯虹: {
				name: '赵昂/白枭贯虹/daiji2',
				x: [0, 0.52],
				y: [0, 0.48],
				scale: 0.9,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '赵昂/白枭贯虹/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '赵昂/白枭贯虹/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '赵昂/白枭贯虹/beijing',
					x: [0, 0.29],
					y: [0, 0.48],
					scale: 0.4,
				},
			},
		},
        zhaoxiang: {//赵襄
			月痕芳影: {
                name: "赵襄/月痕芳影/daiji2",
                x: [0, 0.44],
                y: [0, 0.52],
                scale: 0.74,
                hideSlots:['ren_moanbutouying'],
                shizhounian: true,
                chuchang: {
                    name: '赵襄/月痕芳影/chuchang',
                    hideSlots:['ren_moanbutouying'],
                    scale: 0.6,
                    action: 'play',
                },
                beijing: {
                    name: "赵襄/月痕芳影/beijing",
                    x: [0, 0.44],
                    y: [0, 0.52],
                    scale: 0.74,
                },
                gongji: {
                    name: "赵襄/月痕芳影/chuchang2",
                    action: ["gongji"],
                    scale: 0.65,
                    hideSlots:['ren_moanbutouying'],
                    action: 'gongji',
                },
                teshu: {
                    name: "赵襄/月痕芳影/chuchang2",
                    scale: 0.65,
                    x: [0,0.75],
                    y: [0,0.45],
                    hideSlots:['ren_moanbutouying'],
                    action: 'jineng',
                },
                shan: 'play3',
                zhishixian: {
                    name: "赵襄/月痕芳影/shouji2",
                    scale: 0.7,
                    delay: 0.3,
                    speed: 0.8,
                    effect: {
                        name: "赵襄/月痕芳影/shouji",
                        scale: 0.7,
                        delay: 0.3,
                        speed: 0.8,
                    },
                },
                special: {
					变身: {
						hp: 2,
						name: 'zhaoxiang/月痕芳影2',
					},
					play: {
					 name: "赵襄/月痕芳影2/chuchang",
					 action: 'play',
					         },
					condition: {
						lowhp: {
							transform: ['变身'],
							recover: false,
							effect: 'juexing_zhaoxiang',
							play: 'play',
						},
					},
				},
			},
            月痕芳影2: {
                name: "赵襄/月痕芳影2/daiji2",
                x: [0, 0.40],
                y: [0, 0.56],
                scale: 0.60,
                hideSlots:['ren_moanbutouying'],
                shizhounian: true,
                background: "赵襄/月痕芳影2/static_bg.png",
                beijing: {
                    name: "赵襄/月痕芳影2/beijing",
                    x: [0, 0.40],
                    y: [0, 0.56],
                    scale: 0.60,
                },
                chuchang: {
                    name: '赵襄/月痕芳影2/chuchang',
                    hideSlots:['ren_moanbutouying'],
                    scale: 0.6,
                    action: 'play',
                },
                gongji: {
                    name: "赵襄/月痕芳影2/chuchang2",
                    x: [0, 0.87],
                    y: [0, 0.21],
                    scale: 0.65,
                    hideSlots:['ren_moanbutouying'],
                    action: 'gongji',
                },
                teshu: {
                    name: "赵襄/月痕芳影2/chuchang2",
                    scale: 0.65,
                    x: [0,0.75],
                    y: [0,0.45],
                    hideSlots:['ren_moanbutouying'],
                    action: 'jineng',
                },                
                shan: 'play3',
                zhishixian: {
                    name: "赵襄/月痕芳影2/shouji2",
                    scale: 0.7,
                    delay: 0.3,
                    speed: 0.8,
                    effect: {
                        name: "赵襄/月痕芳影2/shouji",
                        scale: 0.7,
                        delay: 0.3,
                        speed: 0.8,
                    },
                },
            },
			芳芷飒敌: {
				name: '赵襄/芳芷飒敌/daiji2',
				x: [0, 0.4],
				y: [0, 0.5],
				scale: 0.98,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '赵襄/芳芷飒敌/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '赵襄/芳芷飒敌/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '赵襄/芳芷飒敌/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			伶俐雀跃:{
				name: '赵襄/伶俐雀跃/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.28],
				y: [0,0.48],
				scale: 0.75,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '赵襄/伶俐雀跃/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			沙场芳魂:{
				name: '赵襄/沙场芳魂/xingxiang',
				version:"4.0",
				json: true,
				x: [0,-0.1],
				y: [0,0.07],
				scale: 1.37,
				angle: -15,
                //speed: 1,
				beijing: {
					name: '赵襄/沙场芳魂/beijing',
					version:"4.0",
					json: true,
					scale: 0.55,
					x: [0, 0.17],
					y: [0, 0.5]
				},
			},
			猪年春节:{
				name: '赵襄/猪年春节/XingXiang',
				x: [0,0.5],
				y: [0,0.4],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '赵襄/猪年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        zhaoyan: { //赵嫣
            /*
			彩绘芳菲: {
                name: "skin_Decennial_ZhaoYan_CaiHuiFangFei",
                x: [0, 1.5],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_ZhaoYan_CaiHuiFangFei_bg.png",
                skinName: "彩绘芳菲"
            },
			*/
			
			彩绘芳菲: {
                name: "赵嫣/彩绘芳菲/daiji2",
                x: [0, 0.47],
                y: [0, 0.52],
                scale: 0.7,
                angle: 0,
                speed: 1,
                shizhounian: true,  // 标明这是十周年的骨骼, 出场位置和出框默认会在原地, 并且返回也不是位移
				chuchang: {  // 第一回合出场
					name: "赵嫣/彩绘芳菲/chuchang",
					action: "play",
					scale: 0.45
				},
				shan: "play3", // 只有是shizhounian为true时才会播放出闪的动画. 默认play3
                beijing: {
					name: '赵嫣/彩绘芳菲/beijing',
					x: [0,2.15],
					y: [0,0.26],
					scale: 0.4,
				},
				zhishixian: {
					name: '赵嫣/彩绘芳菲/shouji2',  // 指示线
					scale: 0.8,
					speed: 0.5,
					delay: 0.5,  // 指示线在攻击多久后出现, 区间[0, 1], 默认0
					effect: {  // 爆炸特效 一般是shouji
						name: '赵嫣/彩绘芳菲/shouji',  // 指示线
						scale: 0.6,
						speed: 0.7,
						delay: 0.2,
					},
				},
                skinName: "彩绘芳菲"
            },
			 
        },  
		zhaoyǎn: {//赵俨
			遐迩一体:{
				name: '赵俨/遐迩一体/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,1.25],
				y: [0,0.25],
				scale: 1.1,
				angle: 10,
                //speed: 1,
				chuchang: {
					name: '赵俨/遐迩一体/jineng01',
					version:"4.0",
				    json: true,
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '赵俨/遐迩一体/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '赵俨/遐迩一体/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.7],
					y: [0, 0.5]
				},
			},
        },    
        zhaoyun: {//赵云
			常山白龙: {
				name: '赵云/常山白龙/daiji2',
				x: [0, 0.45],
				y: [0, 0.5],
				scale: 0.72,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '赵云/常山白龙/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '赵云/常山白龙/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '赵云/常山白龙/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			单骑救主:{
				name: '赵云/单骑救主/XingXiang',
				x: [0,0.58],
				y: [0,0.58],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '赵云/单骑救主/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			截江救主:{
				name: '赵云/截江救主/XingXiang',
				x: [0,0.72],
				y: [0,0.26],
				scale: 0.58,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '赵云/截江救主/BeiJing',
					scale: 0.25,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			龙战于渊: {
				name: '赵云/龙战于渊/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				action: 'play2',
				teshu: 'play3',
				chuchang: {action: 'play4'},
				gongji: 'play5',
				x: [0, -0.8],
				y: [0, 0.15],
				scale: 0.9,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '赵云/龙战于渊/beijing',
					version:"4.0",
					action: 'play2',
				    json: true,
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.6,
				},
			},
			明良千古:{
				name: '赵云/明良千古/XingXiang',
				x: [0,0.17],
				y: [0,0.22],
				scale: 0.54,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '赵云/明良千古/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			牛年春节:{
				name: '赵云/牛年春节/XingXiang',
				x: [0,0.88],
				y: [0,0.3],
				scale: 0.42,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '赵云/牛年春节/BeiJing',
					scale: 0.25,
					x: [0, 0.3],
					y: [0, 0.5]
				},
			},
			曲乐耀武:{
				name: '赵云/曲乐耀武/dating_zhutui02',
				version:"4.0",
				x: [0,1.4],
				y: [0,0.2],
				scale: 0.55,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '赵云/曲乐耀武/dating_zhutui01',
					version:"4.0",
					scale: 0.3,
					x: [0, 0],
					y: [0, 0.5]
				},
			},
			桃灼鹊跃: {
				name: '赵云/桃灼鹊跃/ZhaoYun_XingXiang2',
				version: '4.0',
				x: [0,0.08],
				y: [0,0.29],
				scale: 0.34,
				background: '赵云/桃灼鹊跃/beijing.png',
			},
			武动乾坤: {
				name: '赵云/武动乾坤/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0, 0.41],
				y: [0, 0.42],
				scale: 0.95,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '赵云/武动乾坤/chuchang',
					action: 'play',
					scale: 1,
				},
				gongji: {
					name: '赵云/武动乾坤/chuchang2',
					action: ['gongji', 'jineng'],
					scale: 0.8,
				},
				beijing: {
					name: '赵云/武动乾坤/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				zhishixian: {
					name: '赵云/武动乾坤/shouji2',
					scale: 0.6,
					speed: 0.8,
					delay: 0.3,
					effect: {
						name: '赵云/武动乾坤/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.3,
					},
				},
			},
			烟绚繁星: {
				name: '赵云/烟绚繁星/daiji2',
				x: [0, 0.35],
				y: [0, 0.5],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '赵云/烟绚繁星/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '赵云/烟绚繁星/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '赵云/烟绚繁星/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战场游龙: {
				name: '赵云/战场游龙/daiji2',
				x: [0, 0.38],
				y: [0, 0.54],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '赵云/战场游龙/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '赵云/战场游龙/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '赵云/战场游龙/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        zhenji: {//甄姬
			爆料皮肤:{
				name: '甄姬/爆料皮肤/XingXiang',
				x: [0,0.2],
				y: [0,0.17],
				scale: 0.5,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '甄姬/爆料皮肤/BeiJing',
					scale: 0.3,
					x: [0, 1.7],
					y: [0, 0.5]
				},
			},
			才颜双绝: {
				name: '甄姬/才颜双绝/daiji2',
				x: [0, 0.39],
				y: [0, 0.68],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '甄姬/才颜双绝/chuchang',
					scale: 0.85,
					action: 'play',
				},
				gongji: {
					name: '甄姬/才颜双绝/chuchang',
					scale: 1.05,
					action: 'play',
				},
				beijing: {
					name: '甄姬/才颜双绝/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			闺中博士:{
				name: '甄姬/闺中博士/XingXiang',
				x: [0,0.73],
				y: [0,0.4],
				scale: 0.33,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '甄姬/闺中博士/BeiJing',
					scale: 0.33,
					x: [0, 0.73],
					y: [0, 0.4]
				},
			},
			花好月圆: {
				name: '甄姬/花好月圆/daiji2',
				x: [0, 0.15],
				y: [0, 0.42],
				scale: 0.74,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '甄姬/花好月圆/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '甄姬/花好月圆/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '甄姬/花好月圆/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
				special: {
					击杀: {
					},
					jisha: {
						name: '甄姬/花好月圆/JiSha',
						x: [0, 0.48],
						version:"4.0",
						scale: 0.9,
						speed: 1,
						delay: 2,
					},
					condition: {
						jisha: {
							transform: "击杀",
							play: 'jisha',
						},
					},
				},
			},
			临水照花:{
				name:'甄姬/临水照花/daiji2',
				x: [0,0.4],
				y: [0,0.56],
				angle: -20,
				scale: 0.8,
				speed:1,
				shizhounian:true,
				chuchang:{
					name:'甄姬/临水照花/chuchang',
					scale:0.8,
					action:'play',
				},
				gongji:{
					name:'甄姬/临水照花/chuchang',
					scale:0.8,
					action:'play',
				},
				beijing:{
					name:'甄姬/临水照花/beijing',
					x:[0,0.5],
					y:[0,0.5],
					scale:0.3,
				},
			},
			洛神御水: {
				name: '甄姬/洛神御水/daiji2',
				x: [0, 0.4],
				y: [0, 0.56],
				scale: 0.8,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '甄姬/洛神御水/chuchang',
					scale: 0.85,
					action: 'play',
				},
				gongji: {
					name: '甄姬/洛神御水/chuchang',
					scale: 1.05,
					action: 'play',
				},
				beijing: {
					name: '甄姬/洛神御水/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			洛水神韵手杀:{
				name: '甄姬/洛水神韵手杀/XingXiang',
				x: [0,0.53],
				y: [0,0.23],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '甄姬/洛水神韵手杀/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			洛水神韵:{
				name: '甄姬/洛水神韵/daiji2',
				x: [0,0.59],
				y: [0,0.24],
				scale: 1.15,
				//speed: 1,
				shizhounian: true,
                chuchang: {
					name: '甄姬/洛水神韵/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '甄姬/洛水神韵/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '甄姬/洛水神韵/beijing_2',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			牛年清明:{
				name: '甄姬/牛年清明/XingXiang',
				x: [0,0.57],
				y: [0,0.31],
				scale: 0.58,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '甄姬/牛年清明/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			翩若惊鸿:{
				name:'甄姬/翩若惊鸿/daiji2',
				x: [0,0.5],
				y: [0,0.44],
				angle: -10,
				scale: 0.86,
				speed:1,
				shizhounian:true,
				chuchang:{
					name:'甄姬/翩若惊鸿/chuchang',
					scale:0.8,
					action:'play',
				},
				gongji:{
					name:'甄姬/翩若惊鸿/chuchang',
					scale:0.8,
					action:'play',
				},
				beijing:{
					name:'甄姬/翩若惊鸿/beijing',
					x:[0,0.5],
					y:[0,0.5],
					scale:0.3,
				},
			},
			清洛月泷:{
				name: '甄姬/清洛月泷/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.33],
				y: [0,0.29],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '甄姬/清洛月泷/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0],
					y: [0, 0.5]
				},
			},
			文昭皇后: {
				name: '甄姬/文昭皇后/daiji2',
				x: [0, 0.7],
				y: [0, 0.62],
				scale: 0.75,
				angle: 20,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '甄姬/文昭皇后/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '甄姬/文昭皇后/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '甄姬/文昭皇后/beijing',
					x: [0, -0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			
            /*虚拟天团: {
                name: "skin_Decennial_ZhenFu_XuNiTianTuan",
                x: [0, 0.9],
                y: [0, 0.3],
                scale: 0.5,
                angle: -10,
                speed: 1,
                background: "skin_Decennial_ZhenFu_XuNiTianTuan_bg.png",
                skinName: "虚拟天团"
            },
             翩若惊鸿: {
                name: "skin_Decennial_ZhenFu_PianRuoJingHong",
                x: [0, 0],
                y: [0, 0.15],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "skin_Decennial_ZhenFu_PianRuoJingHong_bg.png",
                skinName: "翩若惊鸿"
            },
              临水照花: {
                name: "skin_Decennial_ZhenFu_LinShuiZhaoHua",
                x: [0, 1.2],
                y: [0, 0.1],
                scale: 0.5,
                angle: -20,
                speed: 1,
                background: "skin_Decennial_ZhenFu_LinShuiZhaoHua_bg.png",
                skinName: "临水照花"
            },  */
			虚拟天团:{
				name:'甄姬/虚拟天团/daiji2',
				x: [0,0.36],
				y: [0,0.47],
				angle: -12,
				scale: 0.86,
				speed:1,
				shizhounian:true,
				chuchang:{
					name:'甄姬/虚拟天团/chuchang',
					scale:0.8,
					action:'play',
				},
				gongji:{
					name:'甄姬/虚拟天团/chuchang',
					scale:0.8,
					action:'play',
				},
				beijing:{
					name:'甄姬/虚拟天团/beijing',
					x:[0,0.5],
					y:[0,0.5],
					scale:0.3,
				},
			},
			月夜情满: {
				name: '甄姬/月夜情满/daiji2',
				x: [0, 0.42],
				y: [0, 0.52],
				scale: 0.8,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '甄姬/月夜情满/chuchang',
					scale: 0.85,
					action: 'play',
				},
				gongji: {
					name: '甄姬/月夜情满/chuchang',
					scale: 1.05,
					action: 'play',
				},
				beijing: {
					name: '甄姬/月夜情满/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			战场绝版: {
				name: '甄姬/战场绝版/daiji2',
				shan: 'play3',
				x: [0, 0.52],
				y: [0, 0.4],
				scale: 1.1,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '甄姬/战场绝版/chuchang',
					action: 'play',
					scale: 0.8,
				},
				gongji: {
					name: '甄姬/战场绝版/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '甄姬/战场绝版/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '甄姬/战场绝版/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
				zhishixian: {
					name: '甄姬/战场绝版/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '甄姬/战场绝版/shouji',
						scale: 0.4,
						speed: 0.8,
						delay: 0.4,
					},
				},
			},	         			
        },
        zhonghui: {//钟会
			潜蛟觊天:{
				name: '钟会/潜蛟觊天/XingXiang',
				x: [0,-0.7],
				y: [0,0.38],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '钟会/潜蛟觊天/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				audio: {
					skill: '钟会/潜蛟觊天/audio',
					card: '钟会/潜蛟觊天/audio',
				},
				special: {
					觉醒: {
						name: 'zhonghui/潜蛟觊天2',
					},
					condition: {
						juexingji: {
							transform: "觉醒",
							effect: 'shaohui',
							//play: 'play',
						},
					},
				},
			},
			潜蛟觊天2:{
				name: '钟会/潜蛟觊天2/XingXiang-1',
				x: [0,-1],
				y: [0,0.4],
				gongji: {
					x: [0, 0.4],
				},
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				audio: {
					skill: '钟会/潜蛟觊天2/audio',
					card: '钟会/潜蛟觊天2/audio',
				},
				beijing: {
					name: '钟会/潜蛟觊天2/BeiJing-1',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			蒲月念兔:{
				name: '钟会/蒲月念兔/xingxiang',
				x: [0,0.62],
				y: [0,0.42],
				angle: -5,
				scale: 0.74,
				version:"4.0",
				beijing: {
					name: '钟会/蒲月念兔/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
			},
			精炼策数: {
				name: '钟会/精炼策数/daiji2',
				x: [0, 0.46],
				y: [0, 0.5],
				scale: 0.7,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '钟会/精炼策数/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '钟会/精炼策数/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '钟会/精炼策数/beijing',
					x: [0, 0.6],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
			谋谟之勋:{
				name: '钟会/谋谟之勋/XingXiang',
				x: [0,0.45],
				y: [0,0.7],
				scale: 0.6,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '钟会/谋谟之勋/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			一将功成: {
				name: '钟会/一将功成/xingxiang',
				x: [0, 0.48],
				y: [0, 0.47],
				scale: 0.87,
				action: 'DaiJi',
				json:true,version:"4.0",
				chuchang: {
					name: '钟会/一将功成/xingxiang',
					scale: 0.8,
					action: 'ChuChang',
					json:true,version:"4.0",
					version: "4.0",
				},
				teshu: {
					name: '钟会/一将功成/xingxiang',
					x: [0, 0.75],
					y: [0, 0.45],
					scale: 0.8,
					action: 'JiNeng',
					json:true,version:"4.0",
				},
				gongji: {
					name: '钟会/一将功成/xingxiang',
					x: [0, 0.75],
					y: [0, 0.45],
					scale: 0.8,
					action: 'GongJi',
					json:true,version:"4.0",
				},
				beijing: {
					name: '钟会/一将功成/beijing',
					x: [0, 0.92],
					y: [0, 0.53],
					scale: 0.84,
					json:true,version:"4.0",
				},			
			},
			钟桂香蒲: {//出场
				name: '钟会/钟桂香蒲/daiji2',
				x: [0, 0.42],
				y: [0, 0.53],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
				chuchang:{
					name: '钟会/钟桂香蒲/chuchang',
					scale: 0.7,
					action: 'play',

				},
				gongji:{
					name: '钟会/钟桂香蒲/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '钟会/钟桂香蒲/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			龙年端午:{
				name: '钟会/龙年端午/XingXiang',
				x: [0,0.63],
				y: [0,0.52],
				scale: 0.33,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '钟会/龙年端午/BeiJing',
					x: [0, 0.5],
					y: [0, 0.47],
					scale: 0.3,
				},
			},
        },
		zhongyan: {//钟琰
			雪荣钟情:{
				name: '钟琰/雪荣钟情/xingxiang',
				version:"4.0",
				x: [0,1.22],
				y: [0,0.11],
				scale: 1.45,
				angle: 0,
				//speed: 1,
				shizhounian: true,
				chuchang: {
					name: '钟琰/雪荣钟情/jineng01',
					version:"4.0",
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '钟琰/雪荣钟情/jineng01',
					version:"4.0",
					scale: 0.9,
					action: 'play',
				},
				zhishixian: {
					name: '钟琰/雪荣钟情/jineng02',
					version:"4.0",
					scale: 0.5,
					speed: 0.5,
					delay: 0.4,
				},
				beijing: {
					name: '钟琰/雪荣钟情/beijing',
					version:"4.0",
					scale: 1.45,
					x: [0, 1.22],
					y: [0, 0.11]
				},
			},
		},
		
        zhongyao: {//钟繇
			安民护祚:{
				name: '钟繇/安民护祚/XingXiang',
				x: [0,0.66],
				y: [0,0.18],
				angle: 3,
				scale: 0.42,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '钟繇/安民护祚/BeiJing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			挥毫代诏: {
				name: '钟繇/挥毫代诏/daiji2',
				x: [0, 0.42],
				y: [0, 0.58],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '钟繇/挥毫代诏/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '钟繇/挥毫代诏/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '钟繇/挥毫代诏/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			稳定关右:{
				name: '钟繇/稳定关右/XingXiang',
				x: [0,0.51],
				y: [0,0.21],
				scale: 0.54,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '钟繇/稳定关右/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			钟桂香蒲: {
				name: '钟繇/钟桂香蒲/daiji2',
				x: [0, 0.4],
				y: [0, 0.57],
				scale: 0.78,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '钟繇/钟桂香蒲/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '钟繇/钟桂香蒲/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '钟繇/钟桂香蒲/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
		zhoubuyi:{//周不疑
            龙年清明: {
				name: '周不疑/龙年清明/XingXiang',
				x: [0,0.4],
				y: [0, 0.3],
				scale: 0.55,
				angle: -15,
				//speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '周不疑/龙年清明/BeiJing',
					scale: 0.3,
					x: [0, 0.2],
					y: [0, 0.5]
				},
			},
		},
		zhoucang: {//周仓
			忠勇助关:{
				name: '周仓/忠勇助关/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.5],
				y: [0,0.3],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '周仓/忠勇助关/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
		zhouchu: {//周处
            翻浪搏蛟: {
                name: "周处/翻浪搏蛟/xingxiang",
			    x: [0,0.55],
				y: [0,0.46],
				angle: 0,
				scale: 0.7,
                speed: 1,	json: true, version:"4.0",
                gongji: {  name:"周处/翻浪搏蛟/jineng01",		          
                x: [0,0.64],
				y: [0,0.44],
				scale:1.1,	version:"4.0",json: true  
               },        
                beijing: {
					name: '周处/翻浪搏蛟/beijing',
				x: [0,1.65],
				y: [0,0.45],
				scale: 0.6,
				version:"4.0",json: true 
				},
            },
			擎苍寻猎:{
				name: '周处/擎苍寻猎/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.55],
				y: [0,0.05],
				scale: 1,
				angle: -30,
                //speed: 1,
				gongji: {
					name: '周处/擎苍寻猎/jineng01',
					version:"4.0",
				    json: true,
				    x: [0,0.5],
				    y: [0,0.4],
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '周处/擎苍寻猎/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        zhoufang: {//周鲂
			带军鄱阳: {
				name: '周鲂/带军鄱阳/daiji2',
				x: [0, 0.35],
				y: [0, 0.44],
				scale: 0.85,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '周鲂/带军鄱阳/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '周鲂/带军鄱阳/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '周鲂/带军鄱阳/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			笺书诱敌:{
				name: '周鲂/笺书诱敌/xingxiang',
				version:"4.0",
				x: [0,0.15],
				y: [0,0.05],
				scale: 1.4,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '周鲂/笺书诱敌/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        zhoufei: {//周妃
			箜篌箜声: {
				name: '周妃/箜篌箜声/daiji2',
				x: [0, 0.47],
				y: [0, 0.62],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '周妃/箜篌箜声/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '周妃/箜篌箜声/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '周妃/箜篌箜声/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			笼中箜响:{
				name: '周妃/笼中箜响/XingXiang',
				x: [0,-0.23],
				y: [0,0.38],
				scale: 0.52,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '周妃/笼中箜响/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			晴空暖鸢: {
                name: "周妃/晴空暖鸢/daiji",
                x: [0, 0.97],
                y: [0, 0.13],
                scale: 0.65,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '周妃/晴空暖鸢/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '周妃/晴空暖鸢/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '周妃/晴空暖鸢/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "晴空暖鸢"
            },           			
			鹊星夕情: {
				name: '周妃/鹊星夕情/daiji2',
				x: [0, 0.35],
				y: [0, 0.55],
				scale: 0.8,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '周妃/鹊星夕情/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '周妃/鹊星夕情/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '周妃/鹊星夕情/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			寻箜觅灵: {
				name: '周妃/寻箜觅灵/ZhouFei_XingXiang',
				version: '4.0',
				//alpha: true,
				x: [0,0.41],
				y: [0,0.22],
				scale: 0.58,
				background: '周妃/寻箜觅灵/beijing.png',
			},
            战场绝版: {
                name: "周妃/战场绝版/daiji",
                x: [0, 0.32],
                y: [0, 0.17],
                scale: 0.7,
                angle: 0,
                shizhounian: true,
                chuchang: {
					name: '周妃/战场绝版/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '周妃/战场绝版/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '周妃/战场绝版/beijing',
					x: [0, 0],
					y: [0, 0.5],
					scale: 0.4,
				},
                skinName: "战场绝版"
            },
        },
		zhouqun: {//周群
			卜卦观签:{
				name: '周群/卜卦观签/XingXiang',
				x: [0,0.45],
				y: [0,0.35],
				scale: 0.55,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '周群/卜卦观签/BeiJing',
					scale: 0.3,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			瞻天瞩世:{
				name: '周群/瞻天瞩世/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.45],
				y: [0,0.3],
				scale: 1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '周群/瞻天瞩世/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},
        zhouyi: { //周夷
			剑舞浏漓: {
				name: '周夷/剑舞浏漓/daiji2',
				x: [0, 0.16],
				y: [0, 0.49],
				scale: 0.92,
				angle: -22,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '周夷/剑舞浏漓/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '周夷/剑舞浏漓/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '周夷/剑舞浏漓/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
            /*剑舞浏漓: {
                name: "skin_Decennial_ZhouYi_JianWuLiuLi",
                x: [0, 0.4],
                y: [0, 0.15],
                scale: 0.5,
                angle: -23,
                speed: 1,
                background: "skin_Decennial_ZhouYi_JianWuLiuLi_bg.png",
                skinName: "剑舞浏漓"
            },*/
        },      
        zhouyu: {//周瑜
			盖世之才: {
				name: '周瑜/盖世之才/daiji2',
				x: [0, 0.47],
				y: [0, 0.5],
				scale: 0.8,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '周瑜/盖世之才/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '周瑜/盖世之才/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '周瑜/盖世之才/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			谋定天下: {
				name: '周瑜/谋定天下/daiji2',
				x: [0, 0.37],
				y: [0, 0.5],
				scale: 0.78,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '周瑜/谋定天下/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '周瑜/谋定天下/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '周瑜/谋定天下/beijing',
					x: [0, 0.2],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			鼠年春节:{
				name: '周瑜/鼠年春节/XingXiang',
				x: [0,0.73],
				y: [0,0.25],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '周瑜/鼠年春节/BeiJing',
					scale: 0.4,
					x: [0, 0.2],
					y: [0, 0.5]
				},
			},
			运筹帷幄:{
				name: '周瑜/运筹帷幄/XingXiang',
				x: [0,1.05],
				y: [0,0.3],
				scale: 0.45,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '周瑜/运筹帷幄/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			兔年清明:{
				name: '周瑜/兔年清明/XingXiang',
				x: [0,0.43],
				y: [0,0.15],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '周瑜/兔年清明/BeiJing',
					scale: 0.4,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			兔年七夕:{
				name: '周瑜/兔年七夕/XingXiang',
				x: [0,0.82],
				y: [0,0.34],
				scale: 0.38,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '周瑜/兔年七夕/BeiJing',
					scale: 0.3,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        },
        zhuhuan: {//朱桓
			领军袭敌: {
                name: "朱桓/领军袭敌/daiji",
                x: [0, 0.4],
                y: [0, 0.5],
                scale: 0.8,
                angle: -10,
                shizhounian: true,
				chuchang: {
					name: '朱桓/领军袭敌/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '朱桓/领军袭敌/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '朱桓/领军袭敌/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
                //background: "skin_Decennial_ZhuHuan_LingJunXiDi_bg.png",
                skinName: "领军袭敌"
            },
        },
		zhuling: {//朱灵
			弄潮惊澜:{
				name: '朱灵/弄潮惊澜/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.8],
				y: [0,0.47],
				scale: 0.8,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '朱灵/弄潮惊澜/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
        }, 
		zhuran: {//朱然
			剑舞枫飞:{
				name: '朱然/剑舞枫飞/XingXiang',
				x: [0,1.03],
				y: [0,0.33],
				scale: 0.46,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '朱然/剑舞枫飞/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
            惊涛万军:{
				name: '朱然/惊涛万军/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.67],
				y: [0,0.64],
				scale: 1.25,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '朱然/惊涛万军/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			镇守江陵: {
				name: '朱然/镇守江陵/daiji2',
				x: [0, 0.44],
				y: [0, 0.43],
				scale: 1.05,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '朱然/镇守江陵/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '朱然/镇守江陵/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '朱然/镇守江陵/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},         
        },
		zhuzhi: {//朱治
			固阵之磐: {
				name: '朱治/固阵之磐/daiji2',
				teshu: 'play2',
				shan: 'play3',
				x: [0,0.38],
				y: [0,0.36],
				scale: 1.16,

                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '朱治/固阵之磐/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '朱治/固阵之磐/chuchang',
					action: 'play',
					scale: 0.7,
				},
				beijing: {
					name: '朱治/固阵之磐/beijing',
					x: [0, 1],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			征讨夷越:{
				name: '朱治/征讨夷越/xingxiang',
				version:"4.0",
				x: [0,0.67],
				y: [0,0.17],
				scale: 1.15,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '朱治/征讨夷越/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
		},     
        zhugedan:{//诸葛诞
			威凛淮阳:{
				name: '诸葛诞/威凛淮阳/xingxiang',
				x: [0,0.86],
				y: [0,0.3],
				angle: -5,
				scale: 0.95,
				version:"4.0",
				json: true,
				gongji:{
					name: '诸葛诞/威凛淮阳/xingxiang',
					x: [0,0.62],
					y: [0,0.42],
					angle: -5,
					scale: 0.74,
					version:"4.0",
					json: true,
				},
				beijing: {
					name: '诸葛诞/威凛淮阳/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json: true,
				},
				skinName:"威凛淮阳"
			},
		},
        zhugeguo: {//诸葛果
			虎年中秋:{
				name: '诸葛果/虎年中秋/XingXiang',
				x: [0,0.3],
				y: [0,0.38],
				scale: 0.52,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '诸葛果/虎年中秋/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.4]
				},
			},
			兰荷艾莲: {
				name: '诸葛果/兰荷艾莲/daiji2',
				x: [0, 0.4],
				y: [0, 0.52],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛果/兰荷艾莲/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '诸葛果/兰荷艾莲/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '诸葛果/兰荷艾莲/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			仙池起舞:{
				name: '诸葛果/仙池起舞/XingXiang',
				x: [0,0.-0.27],
				y: [0,0.25],
				scale: 0.5,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '诸葛果/仙池起舞/BeiJing',
					scale: 0.4,
					x: [0, -0.7],
					y: [0, 0.5]
				},
			},
			英装素果: {
				name: '诸葛果/英装素果/daiji2',
				x: [0, 0.35],
				y: [0, 0.63],
				scale: 0.72,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛果/英装素果/chuchang',
					scale: 0.8,
					action: 'play',
				},
				gongji: {
					name: '诸葛果/英装素果/chuchang',
					scale: 1,
					action: 'play',
				},
				beijing: {
					name: '诸葛果/英装素果/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        zhugejin: {//诸葛瑾
			风雅神逸: {
				name: '诸葛瑾/风雅神逸/daiji',
				x: [0, 0.42],
				y: [0, 0.29],
				scale: 0.42,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛瑾/风雅神逸/chuchang',
					scale: 0.4,
					action: 'play',
				},
				gongji: {
					name: '诸葛瑾/风雅神逸/chuchang',
					scale: 0.5,
					action: 'play',
				},
				beijing: {
					name: '诸葛瑾/风雅神逸/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
        },
        zhugeke: {//诸葛恪
			白浪掀天:{
				name: '诸葛恪/白浪掀天/XingXiang',
				x: [0,1.22],
				y: [0,0.12],
				scale: 0.52,
				angle: 10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '诸葛恪/白浪掀天/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
        zhugeliang: {//诸葛亮
			赤壁东风:{
				name: '诸葛亮/赤壁东风/xingxiang',
				version:"4.0",
				x: [0,0.88],
				y: [0,0.28],
				scale: 1.1,
				angle: -20,
                //speed: 1,
				beijing: {
					name: '诸葛亮/赤壁东风/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.8],
					y: [0, 0.5]
				},
			},
			虎年中秋:{
				name: '诸葛亮/虎年中秋/XingXiang',
				x: [0,0.47],
				y: [0,0.25],
				scale: 0.7,
				angle: 0,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '诸葛亮/虎年中秋/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.4]
				},
			},
			空城退敌: {
				name: '诸葛亮/空城退敌/daiji2',
				x: [0, 0.38],
				y: [0, 0.5],
				scale: 0.82,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛亮/空城退敌/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '诸葛亮/空城退敌/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '诸葛亮/空城退敌/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			林隐拾逸:{
				name: '诸葛亮/林隐拾逸/xingxiang',
				version:"4.0",
				json: true,
				x: [0,0.18],
				y: [0,0.12],
				scale: 1.1,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '诸葛亮/林隐拾逸/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, -0.5],
					y: [0, 0.5]
				},
			},
			龙跃凤鸣:{
				name: '诸葛亮/龙跃凤鸣/XingXiang',
				x: [0,0.8],
				y: [0,0.08],
				scale: 0.55,
				angle: 15,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '诸葛亮/龙跃凤鸣/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			隆中陇亩: {
				name: '诸葛亮/隆中陇亩/daiji2',
				x: [0, 0.36],
				y: [0, 0.6],
				scale: 0.75,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛亮/隆中陇亩/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '诸葛亮/隆中陇亩/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '诸葛亮/隆中陇亩/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			明良千古:{
				name: '诸葛亮/明良千古/XingXiang',
				x: [0,-0.24],
				y: [0,0.3],
				scale: 0.42,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '诸葛亮/明良千古/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			明智春馨:{
				name: '诸葛亮/明智春馨/daiji',
				x: [0, 1.7],
                y: [0, 0.5],
                scale: 0.5,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛亮/明智春馨/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '诸葛亮/明智春馨/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '诸葛亮/明智春馨/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},	
			谋定天下: {
				name: '诸葛亮/谋定天下/daiji2',
				x: [0, 0.25],
				y: [0, 0.42],
				scale: 0.95,
				angle: -10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛亮/谋定天下/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '诸葛亮/谋定天下/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '诸葛亮/谋定天下/beijing',
					x: [0, 0.35],
					y: [0, 0.5],
					scale: 0.25,
				},
			},
			契若金兰:{
				name: '诸葛亮/契若金兰/xingxiang',
				version:"4.0",
				json: true,
				x: [0,1.35],
				y: [0,0.45],
				scale: 0.8,
				angle: 10,
                //speed: 1,
				beijing: {
					name: '诸葛亮/契若金兰/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
			},
			虚拟天团: {
                name: '诸葛亮/虚拟天团/daiji2',
				x: [0,0.32],
				y: [0,0.33],
				angle: -11,
				scale: 1.13,
				//speed:1,
				shizhounian: true,
				chuchang:{
					name:'诸葛亮/虚拟天团/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji:{
					name:'诸葛亮/虚拟天团/chuchang',
					scale: 0.75,
					action: 'play',
				},
				beijing: {
					name:'诸葛亮/虚拟天团/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },
			一枕清梦: {
				name: '诸葛亮/一枕清梦/daiji2',
				x: [0, 0.55],
				y: [0, 0.4],
				scale: 1,
				angle: 10,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛亮/一枕清梦/chuchang',
					scale: 0.7,
					action: 'play',
				},
				gongji: {
					name: '诸葛亮/一枕清梦/chuchang',
					scale: 0.9,
					action: 'play',
				},
				beijing: {
					name: '诸葛亮/一枕清梦/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			战场荣耀: {
				name: '诸葛亮/战场荣耀/daiji2',
				shan: 'play3',
				x: [0, 0],
				y: [0, 0.27],
				scale: 1.2,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛亮/战场荣耀/chuchang',
					action: 'play',
					scale: 0.7,
				},
				gongji: {
					name: '诸葛亮/战场荣耀/chuchang2',
					action: 'gongji',
					scale: 0.8,
				},
				teshu: {
					name: '诸葛亮/战场荣耀/chuchang2',
					action: 'jineng',
					scale: 0.8,
				},
				beijing: {
					name: '诸葛亮/战场荣耀/beijing',
					x: [0, 0.5],
					y: [0, 0.34],
					scale: 1.2,
				},
				zhishixian: {
					name: '诸葛亮/战场荣耀/shouji2',
					scale: 0.5,
					speed: 0.8,
					delay: 0.4,
					effect: {
						name: '诸葛亮/战场荣耀/shouji',
						scale: 0.5,
						speed: 0.8,
						delay: 0.25,
					},
				},
			},	
        },
		

        zhugezhan: {//诸葛瞻
			临危不挠: {
				name: '诸葛瞻/临危不挠/daiji2',
				x: [0, 0.48],
				y: [0, 0.5],
				scale: 0.9,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛瞻/临危不挠/chuchang',
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '诸葛瞻/临危不挠/chuchang',
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '诸葛瞻/临危不挠/beijing',
					x: [0, 1.7],
					y: [0, 0.5],
					scale: 0.3,
				},
			},
			绵竹之殇:{
				name: '诸葛瞻/绵竹之殇/XingXiang',
				x: [0,0.73],
				y: [0,0.1],
				scale: 0.52,
				angle: -10,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '诸葛瞻/绵竹之殇/BeiJing',
					scale: 0.25,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			明智春馨:{
				name: '诸葛瞻/明智春馨/daiji',
				x: [0, -0.7],
                y: [0, 0.5],
                scale: 0.6,
                angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '诸葛瞻/明智春馨/chuchang',
					scale: 0.9,
					action: 'play',
				},
				gongji: {
					name: '诸葛瞻/明智春馨/chuchang',
					scale: 1.1,
					action: 'play',
				},
				beijing: {
					name: '诸葛瞻/明智春馨/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			忠节不降: {
				name: '诸葛瞻/忠节不降/xingxiang',
				x: [0,0.62],
				y: [0,0.42],
				angle: -5,
				scale: 0.74,
				version:"4.0",
				beijing: {
					name: '诸葛瞻/忠节不降/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
				},
			},				
        },
        zhurong: {//祝融
			飞刀烈火: {
				name: '祝融/飞刀烈火/daiji2',
				teshu:'play2',
				shan:'play3',
				x: [0, 0.35],
				y: [0, 0.55],
				scale: 0.78,
				angle: -15,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '祝融/飞刀烈火/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '祝融/飞刀烈火/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '祝融/飞刀烈火/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			火神之怒: {
                name: "祝融/火神之怒/XingXiang",
               	x: [0,0.57],
				y: [0,0.43],
				angle: -21,
				scale: 0.85,
                version:"4.0",
                gongji: {
					action: 'JiNeng', 
					scale: 1
				},
                background: '祝融/火神之怒/beijing.png',
                zhishixian: {
					name: '祝融/火神之怒/shouji2',  
					scale: 0.9,
					speed: 0.7,
					delay: 0.1,
					version:"4.0",
					effect: {  
						name: '祝融/火神之怒/shouji', 
						scale: 1,
						speed: 0.8,
						delay: 0.2,
						version:"4.0",
					},                
				}, 
			},
            巾帼花武: {
                name: '祝融/巾帼花武/daiji2',
				teshu:'play2',
				shan:'play3',
				x: [0,0.5],
				y: [0,0.45],
				angle: 42,
				scale: 0.83,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '祝融/巾帼花武/chuchang',
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '祝融/巾帼花武/chuchang',
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '祝融/巾帼花武/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
            },
			浴火焚天:{
				name: '祝融/浴火焚天/xingxiang',
				x: [0,0.54],
				y: [0,0.23],
				angle: 18,
				scale: 1.05,
				version:"4.0",
				json:true,
				gongji:{
					name: '祝融/浴火焚天/xingxiang',
					x: [0,0.54],
					y: [0,0.23],
					angle: 18,
					scale: 1.05,	
					version:"4.0",
					json:true,
					speed:2,
				},
				beijing: {
					name: '祝融/浴火焚天/beijing',
					x: [0,-0.03],
					y: [0,0.55],
					scale: 0.7,	
					version:"4.0",
					json:true,
				},
			},			
        },
		
        zuoci: {//左慈
			爆料皮肤:{
				name: '左慈/爆料皮肤/XingXiang',
				x: [0,0.98],
				y: [0,0.03],
				scale: 0.78,
				angle: 20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '左慈/爆料皮肤/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
			微妙玄通:{
				name: '左慈/微妙玄通/xingxiang',
				version:"4.0",
				x: [0,0.48],
				y: [0,0.33],
				scale: 1.2,
				angle: 0,
                //speed: 1,
				beijing: {
					name: '左慈/微妙玄通/beijing',
					version:"4.0",
					scale: 1.2,
					x: [0, 0.48],
					y: [0, 0.33]
				},
			},
			仙人之怒: {
				name: '左慈/仙人之怒/daiji2',
				x: [0, 0.37],
				y: [0, 0.43],
				scale: 0.84,
				angle: 0,
                //speed: 1,
                shizhounian: true,
                chuchang: {
					name: '左慈/仙人之怒/chuchang',
					scale: 0.75,
					action: 'play',
				},
				gongji: {
					name: '左慈/仙人之怒/chuchang',
					scale: 0.95,
					action: 'play',
				},
				beijing: {
					name: '左慈/仙人之怒/beijing',
					x: [0, 0.5],
					y: [0, 0.5],
					scale: 0.4,
				},
			},
			役使鬼神:{
				name: '左慈/役使鬼神/XingXiang',
				x: [0,0.98],
				y: [0,0.03],
				scale: 0.78,
				angle: 20,
                //speed: 1,
				//action: 'DaiJi',
				beijing: {
					name: '左慈/役使鬼神/BeiJing',
					scale: 0.4,
					x: [0, 0.4],
					y: [0, 0.5]
				},
			},
        },
		zuofen: {//左棻
			凝脂铅华:{
				name: '左棻/凝脂铅华/xingxiang',
				version:"4.0",
				shizhounian: true,
				x: [0,0.5],
				y: [0,0.23],
				scale: 1,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '左棻/凝脂铅华/jineng01',
					version:"4.0",
					scale: 0.6,
					action: 'play',
				},
				gongji: {
					name: '左棻/凝脂铅华/jineng01',
					version:"4.0",
					scale: 0.8,
					action: 'play',
				},
				beijing: {
					name: '左棻/凝脂铅华/beijing',
					version:"4.0",
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '左棻/凝脂铅华/jineng03',
					version:"4.0",
					scale: 0.6,
					speed: 0.7,
					delay: 0.4,
				},
			},
			青荷粽香:{
				name: '左棻/青荷粽香/xingxiang',
				version:"4.0",
				json: true,
				shizhounian: true,
				x: [0,0.78],
				y: [0,0.5],
				scale: 1,
				angle: 0,
                //speed: 1,
				chuchang: {
					name: '左棻/青荷粽香/jineng01',
					version:"4.0",
				    json: true,
					scale: 1,
					action: 'play',
				},
				gongji: {
					name: '左棻/青荷粽香/jineng01',
					version:"4.0",
				    json: true,
					scale: 1.2,
					action: 'play',
				},
				beijing: {
					name: '左棻/青荷粽香/beijing',
					version:"4.0",
					json: true,
					scale: 0.6,
					x: [0, 0.5],
					y: [0, 0.5]
				},
				zhishixian: {
					name: '左棻/青荷粽香/jineng02',
					version:"4.0",
				    json: true,
					scale: 0.6,
					speed: 0.7,
					delay: 0.4,
				},
			},
		},  
        
        //极略三国
        
        //神诸葛亮
        jlsgsoul_zhugeliang: {
            默认皮肤: {
                name: "极略三国/JL_spzhugeliang_MRPF",
                x: [0, 0.9],
                y: [0, 0.2],
                scale: 0.65,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_spzhugeliang_MRPF_bg.png",
                skinName: "默认皮肤"
            },
            七星诛邪: {
                name: "极略三国/JL_shenzhugeliang_QXZX",
                x: [0, 0.15],
                y: [0, 0],
                scale: 0.75,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenzhugeliang_QXZX_bg.png",
                skinName: "七星诛邪"
            },
        },
        
        //神司马徽
        jlsgsoul_simahui: {
           局中窥人: {
                name: "极略三国/JL_simahui_JZKR",
                x: [0, 1.0],
                y: [0, 0.2],
                scale: 0.15,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_simahui_JZKR_bg.png",
                skinName: "局中窥人"
            },
        },
        
        //sp蔡文姬
        jlsgsk_caiwenji: {
            百喙春和: {
                name: "极略三国/JL_caiwenji_BHCH",
                x: [0, 0.4],
                y: [0, 0.3],
                scale: 0.55,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_caiwenji_BHCH_bg.png",
                skinName: "百喙春和"
            },
        },
        
        //曹操
        jlsgsr_caocao: {
            王权霸业: {
                name: "极略三国/JL_shencaocao",
                x: [0, 0.55],
                y: [0, 0.25],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shencaocao_bg.png",
                skinName: "王权霸业"
            },
        },
        
        //曹节
        jlsgsk_caojie: {
            怀璧执玺: {
                name: "极略三国/JL_caojie_HBZX",
                x: [0, 0.55],
                y: [0, 0.15],
                scale: 0.15,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_caojie_HBZX_bg.png",
                skinName: "怀璧执玺"
            },
        },

		//曹休
		jlsgsk_caoxiu: {//曹休
			挽弓如月:{
				name: 'JiLue/曹休/挽弓如月/caoxiu_001',
				json: true,
				x: [0,0.1],
				y: [0,0.12],
				scale: 0.65,
				angle: 0,
                //speed: 1,
			},
        },
        
        //sr大乔
        jlsgsr_daqiao: {
            暗香浮影: {
                name: "极略三国/JL_daqiao_HXFY",
                x: [0, 0.52],
                y: [0, 0.3],
                scale: 0.55,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_daqiao_HXFY_bg.png",
                skinName: "暗香浮影"
            },
        },
        
        //神典韦
        jlsgsoul_dianwei: {
            无双乱戟: {
                name: "极略三国/JL_shendianwei_WSTJ",
                x: [0, 0.4],
                y: [0, 0.5],
                scale: 0.45,
                angle: 0,
                speed: 1,
                skinName: "无双乱戟"
            },
        },
        
        //貂蝉
        jlsgsr_diaochan: {
            花语花愿: {
                name: "极略三国/JL_diaochan_HYHY",
                x: [0, 0.2],
                y: [0, 0.3],
                scale: 0.55,
                angle: 6,
                speed: 1,
                background: "极略三国/JL_diaochan_HYHY_bg.png",
                skinName: "花语花愿"
            },
            正态分布: {
                name: "极略三国/JL_diaocan_ZTFB",
                x: [0, 0.25],
                y: [0, 0.2],
                scale: 0.55,
                angle: 6,
                speed: 1,
                background: "极略三国/JL_diaocan_ZTFB_bg.png",
                skinName: "正态分布"
            },
        },
        
        //董白
        jlsgsk_dongbai: {
            长乐未央: {
                name: "极略三国/JL_dongbai_CLWY",
                x: [0, 0],
                y: [0, 0.2],
                scale: 0.65,
                angle: 6,
                speed: 1,
                background: "极略三国/JL_dongbai_CLWY_bg.png",
                skinName: "长乐未央"
            },
        },
        
        //郭女王
        jlsgsk_guonvwang: {
            殚心书诏: {
                name: "极略三国/JL_guonvwang_CXSZ",
                x: [0, 0.3],
                y: [0, 0.3],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_guonvwang_CXSZ_bg.png",
                skinName: "殚心书诏"
            },
        },
        
        //黄月英
        jlsgsk_huangyueying: {
			星前月下: {
				name: '黄月英/星前月下/HuangYueYing_XingXiang',
				version: '4.0',
				//alpha: true,
				x: [0,0.47],
				y: [0,0.64],
				scale: 0.58,
				background: '黄月英/星前月下/beijing.png',
			},
            华裳羽梦: {
                name: "极略三国/JL_huangyueying_HSYM",
                x: [0, 0.6],
                y: [0, 0.45],
                scale: 0.4,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_huangyueying_HSYM_bg.png",
                skinName: "华裳羽梦"
            },
            黎月流光: {
                name: "极略三国/JL_huangyueying_LYLG",
                x: [0, 0.3],
                y: [0, 0.4],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_huangyueying_LYLG_bg.png",
                skinName: "黎月流光"
            },
        },
        
        //刘备
        jlsgsr_liubei: {
            仁义君王: {
                name: "极略三国/JL_liubei_RUJW",
                x: [0, 0.3],
                y: [0, 0.2],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_liubei_RUJW_bg.png",
                skinName: "仁义君王"
            },
            神龙之怒: {
                name: "极略三国/JL_shenliubei",
                x: [0, 0.4],
                y: [0, 0.2],
                scale: 0.4,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenliubei_bg.png",
                skinName: "神龙之怒"
            },
        },
        
        //吕布
        jlsgsr_lvbu: {
            鬼神罗刹: {
                name: "极略三国/JL_spshenlvbu_GSLC",
                x: [0, 0.38],
                y: [0, 0.18],
                scale: 0.65,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_spshenlvbu_GSLC_bg.png",
                skinName: "鬼神罗刹"
            },
            气盈山河: {
                name: "极略三国/JL_lvbui_zhongqiu",
                x: [0, 0.4],
                y: [0, 0.3],
                scale: 0.55,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_lvbui_zhongqiu_bg.png",
                skinName: "气盈山河"
            },
        },
        
        //吕玲绮
        jlsgsk_lvlingqi: {
            无双战姬: {
                name: "极略三国/JL_lvlingqi_WSZJ",
                x: [0, 0.3],
                y: [0, 0.25],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_lvlingqi_WSZJ_bg.png",
                skinName: "无双战姬"
            },
        },
        
        //吕蒙
        jlsgsr_lvmeng: {
            圣域神使: {
                name: "极略三国/JL_shenlvmeng_SYSS",
                x: [0, 0.25],
                y: [0, 0.3],
                scale: 0.55,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenlvmeng_SYSS_bg.png",
                skinName: "圣域神使"
            },
        },
        
        //马超
        jlsgsk_machao: {
            修罗幽影: {
                name: "极略三国/JL_shenmacao_XLYY",
                x: [0, 0.65],
                y: [0, 0.25],
                scale: 0.65,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenmacao_XLYY_bg.png",
                skinName: "修罗幽影"
            },
            武装机甲: {
                name: "极略三国/JL_machao_WZJJ",
                x: [0, 0.55],
                y: [0, 0.35],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_machao_WZJJ_bg.png",
                skinName: "武装机甲"
            },
        },
        
        //糜夫人
        jlsgsk_mifuren: {
            青莲疏影: {
                name: "极略三国/JL_mifuren_QLSY",
                x: [0, 0.05],
                y: [0, 0.4],
                scale: 0.45,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_mifuren_QLSY_bg.png",
                skinName: "青莲疏影"
            },
        },
        
        //潘淑
        jlsgsk_panshu: {
            锦织引簇: {
                name: "极略三国/JL_panshu_JZYC",
                x: [0, 0.3],
                y: [0, 0.25],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_panshu_JZYC_bg.png",
                skinName: "锦织引簇"
            },
        },
        
        //甘宁
        jlsgsr_ganning: {
            披星破浪: {
                name: "极略三国/JL_ganning_PXPL",
                x: [0, 0.4],
                y: [0, 0.3],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_ganning_PXPL_bg.png",
                skinName: "披星破浪"
            },
        },
        
        //关羽
        jlsgsr_guanyu: {
            炼狱武神: {
                name: "极略三国/JL_shenguanyu_LYWS",
                x: [0, 0],
                y: [0, 0.1],
                scale: 0.7,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenguanyu_LYWS_bg.png",
                skinName: "炼狱武神"
            },
        },
        
        //郭嘉
        jlsgsr_guojia: {
            驭魂画策: {
                name: "极略三国/JL_shenguojia",
                x: [0, 0.5],
                y: [0, 0.3],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenguojia_bg.png",
                skinName: "驭魂画策"
            },
        },
        
        //华佗
        jlsgsr_huatuo: {
            百草归元: {
                name: "极略三国/JL_shenhuatuo_BCGY",
                x: [0, 0.3],
                y: [0, 0.15],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenhuatuo_BCGY_bg.png",
                skinName: "百草归元"
            },
        },
        
        //神贾诩
        jlsgsoul_jiaxu: {
            谋定天下: {
                name: "极略三国/JL_shenjiaxu_MDTX",
                x: [0, 0.4],
                y: [0, 0.3],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenjiaxu_MDTX_bg.png",
                skinName: "谋定天下"
            },
        },
        
        //陆逊
        jlsgsr_luxun: {
            燎原之火: {
                name: "极略三国/JL_shenluxun_LYZH",
                x: [0, 0.3],
                y: [0, 0.3],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenluxun_LYZH_bg.png",
                skinName: "燎原之火"
            },
        },
        
        //孙权
        jlsgsr_sunquan: {
            东吴大帝: {
                name: "极略三国/JL_shensunquan_DWDD",
                x: [0, 0.4],
                y: [0, 0.25],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shensunquan_DWDD_bg.png",
                skinName: "东吴大帝"
            },
            剑舞游龙: {
                name: "极略三国/JL_sunquan",
                x: [0, 0.25],
                y: [0, 0.25],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_sunquan_bg.png",
                skinName: "剑舞游龙"
            },
        },
        
        //孙尚香
        jlsgsr_sunshangxiang: {
            夜枭泷月: {
                name: "极略三国/JL_shensunshangxiang_YXLY",
                x: [0, 0.6],
                y: [0, 0.3],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shensunshangxiang_YXLY_bg.png",
                skinName: "夜枭泷月"
            },
            蝶梦轻影: {
                name: "极略三国/JL_sunshangxiang_DMQY",
                x: [0, 0.7],
                y: [0, 0.25],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_sunshangxiang_DMQY_bg.png",
                skinName: "蝶梦轻影"
            },
            夏日炎炎: {
                name: "极略三国/JL_sunshangxiang_XRYY",
                x: [0, 0.7],
                y: [0, 0.4],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_sunshangxiang_XRYY_bg.png",
                skinName: "夏日炎炎"
            },
        },
        
        //张飞
        jlsgsr_zhangfei: {
            龙舟竞渡: {
                name: "极略三国/JL_shenzhangfei_LZJD",
                x: [0, 0.45],
                y: [0, 0.3],
                scale: 0.55,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenzhangfei_LZJD_bg.png",
                skinName: "龙舟竞渡"
            },
        },
        
        //神张角
        jlsgsoul_zhangjiao: {
            阴阳相生: {
                name: "极略三国/JL_shenzhangjiao_SP",
                x: [0, 0.35],
                y: [0, 0.15],
                scale: 0.65,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenzhangjiao_SP_bg.png",
                skinName: "阴阳相生"
            },
            驱雷策电: {
                name: "极略三国/JL_shenzhangjiao_QLCD",
                x: [0, 0.05],
                y: [0, 0.2],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenzhangjiao_QLCD_bg.png",
                skinName: "驱雷策电"
            },
        },
        
        //张辽
        jlsgsr_zhangliao: {
            风驰电掣: {
                name: "极略三国/JL_shenzhangliao",
                x: [0, 0.4],
                y: [0, 0.2],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenzhangliao_bg.png",
                skinName: "风驰电掣"
            },
        },
        
        //赵云
        jlsgsr_zhaoyun: {
            冲涛踏浪: {
                name: "极略三国/JL_shenzhaoyun_CTTL",
                x: [0, 0.6],
                y: [0, 0.25],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenzhaoyun_CTTL_bg.png",
                skinName: "冲涛踏浪"
            },
            快意豪情: {
                name: "极略三国/JL_zhaoyun_KYHQ",
                x: [0, 0.4],
                y: [0, 0.45],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_zhaoyun_KYHQ_bg.png",
                skinName: "快意豪情"
            },
            
        },
        
        //周瑜
        jlsgsr_zhouyu: {
            红莲业火: {
                name: "极略三国/JL_shenzhouyu_HLYH",
                x: [0, 0.5],
                y: [0, 0.2],
                scale: 0.7,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_shenzhouyu_HLYH_bg.png",
                skinName: "红莲业火"
            },
            韶华轻游: {
                name: "极略三国/JL_zhouyu_qixi",
                x: [0, 0.1],
                y: [0, 0.5],
                scale: 0.45,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_zhouyu_qixi_bg.png",
                skinName: "韶华轻游"
            },
        },
        
        //孙策
        jlsgsk_sunce: {
            霸影狂狮: {
                name: "极略三国/JL_sunce",
                x: [0, 0.35],
                y: [0, 0.35],
                scale: 0.45,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_sunce_bg.png",
                skinName: "霸影狂狮"
            },
        },
        
        //田丰
        jlsgsk_tianfeng: {
            神秩之辉: {
                name: "极略三国/JL_tianfeng_SZZH",
                x: [0, 0.2],
                y: [0, 0.4],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_tianfeng_SZZH_bg.png",
                skinName: "神秩之辉"
            },
        },
        
        //王异
        jlsgsk_wangyi: {
            孤剑琼英: {
                name: "极略三国/JL_wangyi_GJQY",
                x: [0, 0.45],
                y: [0, 0.45],
                scale: 0.45,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_wangyi_GJQY_bg.png",
                skinName: "孤剑琼英"
            },
        },
        
        //吴懿
        jlsgsk_wuyi: {
            万军破敌: {
                name: "极略三国/JL_wuyi_WJPD",
                x: [0, 0.3],
                y: [0, 0.2],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_wuyi_WJPD_bg.png",
                skinName: "万军破敌"
            },
        },
        
        //戏志才
        jlsgsk_xizhicai: {
            风流倜傥: {
                name: "极略三国/JL_xizhicai",
                x: [0, 0.7],
                y: [0, 0.15],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_xizhicai_bg.png",
                skinName: "风流倜傥"
            },
        },
        
        //夏侯惇
        jlsgsr_xiahoudun: {
            忠魂烈火: {
                name: "极略三国/JL_xiahoudun_ZHLH",
                x: [0, 0.5],
                y: [0, 0.4],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_xiahoudun_ZHLH_bg.png",
                skinName: "忠魂烈火"
            },
        },
        
        //许攸
        jlsgsk_xuyou: {
            火烧鸟巢: {
                name: "极略三国/JL_xuyou_HSNC",
                x: [0, 0.5],
                y: [0, 0.35],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_xuyou_HSNC_bg.png",
                skinName: "火烧鸟巢"
            },
        },
        
        //于吉
        jlsgsk_yuji: {
            符水济世: {
                name: "极略三国/JL_yuji_FSJS",
                x: [0, 0.55],
                y: [0, 0.15],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_yuji_FSJS_bg.png",
                skinName: "符水济世"
            },
        },
        
        //张梁
        jlsgsk_zhangliang: {
            张梁: {
                name: "极略三国/JL_zhangliang",
                x: [0, 0.5],
                y: [0, 0.15],
                scale: 0.65,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_zhangliang_bg.png",
                skinName: "张梁"
            },
        },
        
        //张宁
        jlsgsk_zhangning: {
            绝命幽兰: {
                name: "极略三国/JL_zhangning_JMYL",
                x: [0, 0.9],
                y: [0, 0.35],
                scale: 0.55,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_zhangning_JMYL_bg.png",
                skinName: "绝命幽兰"
            },
        },
        
        //甄姬
        jlsgsr_zhenji: {
            轻云蔽月: {
                name: "极略三国/JL_zhenji_QYBY",
                x: [0, 0.85],
                y: [0, 0.3],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_zhenji_QYBY_bg.png",
                skinName: "轻云蔽月"
            },
        },
        
        //诸葛果
        jlsgsk_zhugeguo: {
            御鹤登仙: {
                name: "极略三国/JL_zhugeguo_YHDX",
                x: [0, 0.4],
                y: [0, 0.2],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_zhugeguo_YHDX_bg.png",
                skinName: "御鹤登仙"
            },
        },
        
        //邹氏
        jlsgsk_zoushi: {
            微风和煦: {
                name: "极略三国/JL_zoushi_WFHX",
                x: [0, 0.15],
                y: [0, 0.2],
                scale: 0.6,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_zoushi_WFHX_bg.png",
                skinName: "微风和煦"
            },
        },
        
        //三英神蔡夫人
        jlsgsy_caifuren: {
            幽夜烛纱: {
                name: "极略三国/JL_caifuren_YYSD",
                x: [0, 0.5],
                y: [0, 0.5],
                scale: 0.5,
                angle: 0,
                speed: 1,
                background: "极略三国/JL_caifuren_YYSD_bg.png",
                skinName: "幽夜烛纱"
            },
        },
        
        //左幽
        左幽: {
            红尘炼心: {
                name: '极略三国/zuoyou',
                x: [0, 0.43],
                y: [0, -0.38],
                scale: 1.25,
                background: '极略三国/zuoyou_bg.png',
                skinName: "红尘炼心"
            },
            侠骨柔情: {
                name: '极略三国/zuoyou_005',
                x: [0, -0.31],
                y: [0, -0.42],
                scale: 1.3,
                angle: -10,
                background: '极略三国/zuoyou_005_bg.png',
                skinName: "侠骨柔情"
            },
            倩女幽魂: {
                name: '极略三国/zuoyou_006',
                x: [0, 0.43],
                y: [0, 0.31],
                scale: 0.5,
                background: '极略三国/zuoyou_006_bg.png',
                skinName: "倩女幽魂"
            },
            烈焰羽凰: {
                name: '极略三国/zuoyou_LieYanYuHuang',
                x: [0, 0.22],
                y: [0, -0.43],
                scale: 1.25,
                angle: -5,
                background: '极略三国/zuoyou_LieYanYuHuang_BG.png',
                skinName: "烈焰羽凰"
            },
            庄周梦蝶: {
                name: '极略三国/zuoyou_zzmd',
                x: [0, 0.38],
                y: [0, -0.39],
                scale: 1.2,
                angle: 5,
                action: 'animation',
                background: '极略三国/zuoyou_zzmd_bg.png',
                skinName: "庄周梦蝶"
            },
            鹤鸣剑影: {
                name: '极略三国/zuoyou_HMJY',
                x: [0, 0.4],
                y: [0, -0.4],
                scale: 1.08,
                background: '极略三国/zuoyou_HMJY_bg.png',
                skinName: "鹤鸣剑影"
            },
            次元战姬: {
                name: '极略三国/zuoyou_CYZJ',
                x: [0, 0.53],
                y: [0, -0.87],
                scale: 0.7,
                background: '极略三国/zuoyou_CYZJ_bg.png',
                skinName: "次元战姬"
            },
            绿野仙踪: {
                name: '极略三国/skin_zuoyou_LYXZ',
                x: [0, 0.43],
                y: [0, 0.25],
                scale: 0.5,
                background: '极略三国/skin_zuoyou_LYXZ_bg.png',
                skinName: "绿野仙踪"
            },
        },
	};
	
	var extend = {//共用

		//鲍三娘
        re_baosanniang: decadeUI.dynamicSkin.baosanniang,
        xin_baosanniang: decadeUI.dynamicSkin.baosanniang,

		//卑弥呼
		tw_beimihu: decadeUI.dynamicSkin.beimihu,
		
       	//卞夫人
       	sp_bianfuren: decadeUI.dynamicSkin.ol_bianfuren,
        tw_bianfuren: decadeUI.dynamicSkin.ol_bianfuren,
        
        //步练师
        re_bulianshi: decadeUI.dynamicSkin.bulianshi,
        dc_bulianshi: decadeUI.dynamicSkin.bulianshi,
		old_bulianshi: decadeUI.dynamicSkin.bulianshi,

        //蔡夫人
        re_caifuren: decadeUI.dynamicSkin.caifuren,
        xin_caifuren: decadeUI.dynamicSkin.caifuren,

        //蔡文姬
		diy_caiwenji: decadeUI.dynamicSkin.caiwenji, 
        ol_caiwenji: decadeUI.dynamicSkin.caiwenji,
        re_caiwenji: decadeUI.dynamicSkin.caiwenji,
        sp_caiwenji: decadeUI.dynamicSkin.caiwenji,
		yue_caiwenji: decadeUI.dynamicSkin.caiwenji,
		
		//蔡邕
		re_caiyong: decadeUI.dynamicSkin.caiyong,
		yue_caiyong: decadeUI.dynamicSkin.caiyong,

		//曹昂
		yj_caoang: decadeUI.dynamicSkin.caoang,     
    	tw_caoang: decadeUI.dynamicSkin.caoang,

        //曹操
        re_caocao: decadeUI.dynamicSkin.caocao,
		yj_caocao: decadeUI.dynamicSkin.caocao, 
    	tw_caocao: decadeUI.dynamicSkin.caocao, 
    	sb_caocao: decadeUI.dynamicSkin.caocao, 

		//曹冲
		old_caochong: decadeUI.dynamicSkin.caochong,     

		//曹纯
    	old_caochun: decadeUI.dynamicSkin.caochun,   
		
		//曹洪
		tw_caohong: decadeUI.dynamicSkin.caohong, 
		tw_re_caohong: decadeUI.dynamicSkin.caohong, 

        //曹丕
        re_caopi: decadeUI.dynamicSkin.caopi,

        //曹仁
        old_caoren: decadeUI.dynamicSkin.caoren,
        sp_caoren: decadeUI.dynamicSkin.caoren,
		sb_caoren: decadeUI.dynamicSkin.caoren,
    	new_caoren: decadeUI.dynamicSkin.caoren,
		star_caoren: decadeUI.dynamicSkin.caoren,
		jsp_caoren: decadeUI.dynamicSkin.caoren,

		//曹睿
		old_caorui: decadeUI.dynamicSkin.caorui, 
		re_caorui: decadeUI.dynamicSkin.caorui,  
		
		//曹嵩
		sp_caosong: decadeUI.dynamicSkin.caosong,

		//曹休
        re_caoxiu: decadeUI.dynamicSkin.caoxiu,
        xin_caoxiu: decadeUI.dynamicSkin.caoxiu,
        tw_caoxiu: decadeUI.dynamicSkin.caoxiu,
        old_caoxiu: decadeUI.dynamicSkin.caoxiu,

		//曹真
        re_caozhang: decadeUI.dynamicSkin.caozhang,
        xin_caozhang: decadeUI.dynamicSkin.caozhang,
        //曹真
		old_caozhen: decadeUI.dynamicSkin.caozhen,
        re_caozhen: decadeUI.dynamicSkin.caozhen,
        xin_caozhen: decadeUI.dynamicSkin.caozhen,

        //曹植
        re_caozhi: decadeUI.dynamicSkin.caozhi,
		dc_caozhi: decadeUI.dynamicSkin.caozhi,

		//陈到
		ns_chendao: decadeUI.dynamicSkin.chendao,

		//陈登
		ol_chendeng: decadeUI.dynamicSkin.chendeng,
		re_chendeng: decadeUI.dynamicSkin.chendeng,
		
		//陈宫    
		re_chengong: decadeUI.dynamicSkin.chengong,
		sb_chengong: decadeUI.dynamicSkin.chengong,

		//陈群
        re_chenqun: decadeUI.dynamicSkin.chenqun,
        dc_chenqun: decadeUI.dynamicSkin.chenqun,
        old_chenqun: decadeUI.dynamicSkin.chenqun,

        //大乔
        re_daqiao: decadeUI.dynamicSkin.daqiao,
		sb_daqiao: decadeUI.dynamicSkin.daqiao,

		//大乔小乔
		decade_daxiaoqiao: decadeUI.dynamicSkin.daxiaoqiao,
		tw_daxiaoqiao: decadeUI.dynamicSkin.daxiaoqiao,

		//邓艾
        ol_dengai: decadeUI.dynamicSkin.dengai,
        re_dengai: decadeUI.dynamicSkin.dengai,

		//邓芝
        ol_dengzhi: decadeUI.dynamicSkin.dengzhi,
		re_dengzhi: decadeUI.dynamicSkin.dengzhi,
        tw_dengzhi: decadeUI.dynamicSkin.dengzhi,

        //典韦
        re_dianwei: decadeUI.dynamicSkin.dianwei,
        ol_dianwei: decadeUI.dynamicSkin.dianwei,
		xia_dianwei: decadeUI.dynamicSkin.dianwei,

        //貂蝉
        re_diaochan: decadeUI.dynamicSkin.diaochan,
        sp_diaochan: decadeUI.dynamicSkin.diaochan,
		sb_diaochan: decadeUI.dynamicSkin.diaochan,

       	//丁奉 
		tw_dingfeng: decadeUI.dynamicSkin.dingfeng,
		old_dingfeng: decadeUI.dynamicSkin.dingfeng,
		ddd_dingfeng: decadeUI.dynamicSkin.dingfeng,

		//丁原
        ol_dingyuan: decadeUI.dynamicSkin.dingyuan,

		//丁尚涴
		ol_dingshangwan: decadeUI.dynamicSkin.dingshangwan,

        //董白
        re_dongbai: decadeUI.dynamicSkin.dongbai,

		//董承
		re_dongcheng: decadeUI.dynamicSkin.dongcheng,

		//董昭
		tw_dongzhao: decadeUI.dynamicSkin.dongzhao,

        //董卓
        ol_dongzhuo: decadeUI.dynamicSkin.dongzhuo,
        re_dongzhuo: decadeUI.dynamicSkin.dongzhuo,
        sp_dongzhuo: decadeUI.dynamicSkin.dongzhuo,

		//杜预
		sp_duyu: decadeUI.dynamicSkin.duyu,
		dc_duyu: decadeUI.dynamicSkin.duyu,

		//樊稠
		ns_fanchou: decadeUI.dynamicSkin.fanchou,   
		tw_fanchou: decadeUI.dynamicSkin.fanchou,  

        //法正
        re_fazheng: decadeUI.dynamicSkin.fazheng,
		xin_fazheng: decadeUI.dynamicSkin.fazheng,
		tw_re_fazheng: decadeUI.dynamicSkin.fazheng,  
        sb_fazheng: decadeUI.dynamicSkin.fazheng,

		//费祎
		tw_feiyi: decadeUI.dynamicSkin.feiyi,
		ol_feiyi: decadeUI.dynamicSkin.feiyi,
        //冯妤//冯芳女
        re_fengfangnv: decadeUI.dynamicSkin.fengfangnv,

        //伏皇后
        re_fuhuanghou: decadeUI.dynamicSkin.fuhuanghou,
        sp_fuhuanghou: decadeUI.dynamicSkin.fuhuanghou,
        xin_fuhuanghou: decadeUI.dynamicSkin.fuhuanghou,
		old_fuhuanghou: decadeUI.dynamicSkin.fuhuanghou,

        //甘宁
        re_ganning: decadeUI.dynamicSkin.ganning,
        yj_ganning: decadeUI.dynamicSkin.ganning,
		sb_ganning: decadeUI.dynamicSkin.ganning,

		//高览
		dc_gaolan: decadeUI.dynamicSkin.gaolan,
		sp_gaolan: decadeUI.dynamicSkin.gaolan,

		//高顺
		re_gaoshun: decadeUI.dynamicSkin.gaoshun,
		old_gaoshun: decadeUI.dynamicSkin.gaoshun,
		xin_gaoshun: decadeUI.dynamicSkin.gaoshun,
		sb_gaoshun: decadeUI.dynamicSkin.gaoshun,

		//葛玄
		tw_gexuan: decadeUI.dynamicSkin.gexuan,

        //公孙渊
        re_gongsunyuan: decadeUI.dynamicSkin.gongsunyuan,
		gz_gongsunyuan: decadeUI.dynamicSkin.gongsunyuan,

		//公孙瓒
        re_gongsunzan: decadeUI.dynamicSkin.gongsunzan,
        dc_gongsunzan: decadeUI.dynamicSkin.gongsunzan,
        sp_gongsunzan: decadeUI.dynamicSkin.gongsunzan,
        xin_gongsunzan: decadeUI.dynamicSkin.gongsunzan,
        
        //顾雍
        re_guyong: decadeUI.dynamicSkin.guyong,
        xin_guyong: decadeUI.dynamicSkin.guyong,
        tw_guyong: decadeUI.dynamicSkin.guyong,

        //关平
        re_guanping: decadeUI.dynamicSkin.guanping,

		//关索
        dc_guansuo: decadeUI.dynamicSkin.guansuo,

		//关兴张苞
        re_guanzhang: decadeUI.dynamicSkin.guanzhang,
        old_guanzhang: decadeUI.dynamicSkin.guanzhang,

		//关银屏
		old_guanyinping: decadeUI.dynamicSkin.guanyinping,

        //关羽
        re_guanyu: decadeUI.dynamicSkin.guanyu,
		sb_guanyu: decadeUI.dynamicSkin.guanyu,
        jsp_guanyu: decadeUI.dynamicSkin.guanyu,
		
		//毌丘俭
		re_guanqiujian: decadeUI.dynamicSkin.guanqiujian,
		tw_guanqiujian: decadeUI.dynamicSkin.guanqiujian,
		old_guanqiujian: decadeUI.dynamicSkin.guanqiujian,

        //郭皇后
        re_guohuanghou: decadeUI.dynamicSkin.guohuanghou,

        //郭嘉
        re_guojia: decadeUI.dynamicSkin.guojia,

		//郭照/郭女王
		xin_guozhao: decadeUI.dynamicSkin.guozhao,

		//贺齐
		re_heqi: decadeUI.dynamicSkin.heqi,

        //花鬘
        sp_huaman: decadeUI.dynamicSkin.huaman,
		
        //华佗
        re_huatuo: decadeUI.dynamicSkin.huatuo,
		old_huatuo: decadeUI.dynamicSkin.huatuo,

		//黄承彦
		dc_huangchengyan: decadeUI.dynamicSkin.huangchengyan,
		//皇甫嵩
		sp_huangfusong: decadeUI.dynamicSkin.huangfusong,
		old_huangfusong: decadeUI.dynamicSkin.huangfusong,

        //黄盖
        re_huanggai: decadeUI.dynamicSkin.huanggai,
        sb_huanggai: decadeUI.dynamicSkin.huanggai,

		//黄权
		dc_huangquan: decadeUI.dynamicSkin.huangquan,

        //黄月英
        re_huangyueying: decadeUI.dynamicSkin.huangyueying,
		sb_huangyueying: decadeUI.dynamicSkin.huangyueying,
        jsp_huangyueying: decadeUI.dynamicSkin.huangyueying,
		boss_huangyueying: decadeUI.dynamicSkin.huangyueying,
		
        //黄忠
        re_huangzhong: decadeUI.dynamicSkin.huangzhong,
		ol_huangzhong: decadeUI.dynamicSkin.huangzhong,
        yj_huangzhong: decadeUI.dynamicSkin.huangzhong,
        sb_huangzhong: decadeUI.dynamicSkin.huangzhong,

        //华雄
        old_huaxiong: decadeUI.dynamicSkin.huaxiong,
        re_huaxiong: decadeUI.dynamicSkin.huaxiong,
        sb_huaxiong: decadeUI.dynamicSkin.huaxiong,

		//胡金定
		dc_hujinding: decadeUI.dynamicSkin.hujinding,

		//黄祖
        dc_huangzu: decadeUI.dynamicSkin.huangzu,
        
        //霍峻
        dc_huojun: decadeUI.dynamicSkin.huojun,
        tw_huojun: decadeUI.dynamicSkin.huojun,

        //贾充
        jin_jiachong: decadeUI.dynamicSkin.jiachong,
        dc_jiachong: decadeUI.dynamicSkin.jiachong,
		
		//贾诩
        re_jiaxu: decadeUI.dynamicSkin.jiaxu,
        sp_jiaxu: decadeUI.dynamicSkin.jiaxu,
		dc_sp_jiaxu: decadeUI.dynamicSkin.jiaxu,

		//姜维
        ol_jiangwei: decadeUI.dynamicSkin.jiangwei,
        re_jiangwei: decadeUI.dynamicSkin.jiangwei,
        sp_jiangwei: decadeUI.dynamicSkin.jiangwei,
		sb_jiangwei: decadeUI.dynamicSkin.jiangwei,
				
        //蒋干
        sp_jianggan: decadeUI.dynamicSkin.jianggan,

		//简雍
		ol_jianyong: decadeUI.dynamicSkin.jianyong,
		re_jianyong: decadeUI.dynamicSkin.jianyong,
		xin_jianyong: decadeUI.dynamicSkin.jianyong,

 		//孔融
		sp_kongrong: decadeUI.dynamicSkin.kongrong,  
		
		//李傕
		ns_lijue: decadeUI.dynamicSkin.lijue,

	 	//李儒
		re_liru: decadeUI.dynamicSkin.liru,
		xin_liru: decadeUI.dynamicSkin.liru,
		dc_liru: decadeUI.dynamicSkin.liru,

		//李婉
		ol_liwan: decadeUI.dynamicSkin.liwan,

        //灵雎
		old_lingju: decadeUI.dynamicSkin.lingju,

		//凌统
		re_lingtong: decadeUI.dynamicSkin.lingtong,
     	old_lingtong: decadeUI.dynamicSkin.lingtong,
		xin_lingtong: decadeUI.dynamicSkin.lingtong,

        //刘备
        re_liubei: decadeUI.dynamicSkin.liubei,
		jsp_liubei: decadeUI.dynamicSkin.liubei, 
		sb_liubei: decadeUI.dynamicSkin.liubei, 
		xia_liubei: decadeUI.dynamicSkin.liubei,

        //刘表
        re_liubiao: decadeUI.dynamicSkin.liubiao,
        xin_liubiao: decadeUI.dynamicSkin.liubiao,

		//刘封
		re_liufeng: decadeUI.dynamicSkin.liufeng,   

        //刘禅
        ol_liushan: decadeUI.dynamicSkin.liushan,
        re_liushan: decadeUI.dynamicSkin.liushan,

		//刘协
		sp_liuxie: decadeUI.dynamicSkin.liuxie,

		//刘焉
		ol_liuyan: decadeUI.dynamicSkin.liuyan,
		diy_liuyan: decadeUI.dynamicSkin.liuyan,

        //留赞
        re_liuzan: decadeUI.dynamicSkin.liuzan,
		diy_liuzan: decadeUI.dynamicSkin.liuzan,
		
		//卢植
		tw_yl_luzhi: decadeUI.dynamicSkin.yl_luzhi, 
		sb_yl_luzhi: decadeUI.dynamicSkin.yl_luzhi,  

        //鲁肃
        re_lusu: decadeUI.dynamicSkin.ol_lusu,
		xia_lusu: decadeUI.dynamicSkin.ol_lusu,

		//陆抗
		diy_lukang: decadeUI.dynamicSkin.lukang, 

        //陆逊
        re_luxun: decadeUI.dynamicSkin.luxun,

		//陆郁生
		ol_luyusheng: decadeUI.dynamicSkin.luyusheng,

        //吕布
        re_lvbu: decadeUI.dynamicSkin.lvbu,

		//吕旷吕翔
        dc_lvkuanglvxiang: decadeUI.dynamicSkin.lvkuanglvxiang,

        //吕蒙
        re_lvmeng: decadeUI.dynamicSkin.lvmeng,
		sb_lvmeng: decadeUI.dynamicSkin.lvmeng,
     	ns_lvmeng: decadeUI.dynamicSkin.lvmeng,
     	sp_lvmeng: decadeUI.dynamicSkin.lvmeng,

        //马岱
        re_madai: decadeUI.dynamicSkin.madai,
		old_madai: decadeUI.dynamicSkin.madai,
		tw_madai: decadeUI.dynamicSkin.madai,

        //马超
        re_machao: decadeUI.dynamicSkin.machao,
        sp_machao: decadeUI.dynamicSkin.machao,
		sb_machao: decadeUI.dynamicSkin.machao,
        bol_machao: decadeUI.dynamicSkin.machao,
		dc_sp_machao: decadeUI.dynamicSkin.machao,

		//马钧
		old_majun: decadeUI.dynamicSkin.majun,   
        th_majun: decadeUI.dynamicSkin.majun, 

		//马良
		ol_maliang: decadeUI.dynamicSkin.maliang,
		tw_maliang: decadeUI.dynamicSkin.maliang,
		re_maliang: decadeUI.dynamicSkin.maliang,
		old_maliang: decadeUI.dynamicSkin.maliang,
		
        //马谡
        re_masu: decadeUI.dynamicSkin.masu,
        xin_masu: decadeUI.dynamicSkin.masu,
		ns_masu: decadeUI.dynamicSkin.masu,

		//马云禄
		tw_mayunlu: decadeUI.dynamicSkin.mayunlu,   

		//孟达
		ol_mengda: decadeUI.dynamicSkin.mengda,
		
		//孟获	
		re_menghuo: decadeUI.dynamicSkin.menghuo,
		sp_menghuo: decadeUI.dynamicSkin.menghuo,
		sb_menghuo: decadeUI.dynamicSkin.menghuo,
		tw_menghuo: decadeUI.dynamicSkin.menghuo,

		//祢衡
        re_miheng: decadeUI.dynamicSkin.miheng,

		//糜夫人
		dc_mifuren: decadeUI.dynamicSkin.mifuren,
	
        //南华老仙
        re_nanhualaoxian: decadeUI.dynamicSkin.nanhualaoxian,
		th_nanhualaoxian: decadeUI.dynamicSkin.nanhualaoxian,
		
        //庞统
        ol_pangtong: decadeUI.dynamicSkin.pangtong,
        re_pangtong: decadeUI.dynamicSkin.pangtong,
		sb_pangtong: decadeUI.dynamicSkin.pangtong,
        re_jsp_pangtong: decadeUI.dynamicSkin.pangtong,
		sp_pangtong: decadeUI.dynamicSkin.pangtong,

        
        //潘凤
        re_panfeng: decadeUI.dynamicSkin.panfeng,
		std_panfeng: decadeUI.dynamicSkin.panfeng,

        //潘淑
        re_panshu: decadeUI.dynamicSkin.panshu,

        //庞德公
        re_pangdegong: decadeUI.dynamicSkin.pangdegong,
        th_pangdegong: decadeUI.dynamicSkin.pangdegong,

        //蒲元
        ol_puyuan: decadeUI.dynamicSkin.puyuan,
        th_puyuan: decadeUI.dynamicSkin.puyuan,

        //全琮
        old_quancong: decadeUI.dynamicSkin.quancong,
		re_quancong: decadeUI.dynamicSkin.quancong,
        xin_quancong: decadeUI.dynamicSkin.quancong,

		//麹义
		re_quyi: decadeUI.dynamicSkin.quyi,

		//阮禹   
		old_ruanyu: decadeUI.dynamicSkin.ruanyu,
		
		//芮姬
		dc_ruiji: decadeUI.dynamicSkin.ruiji,

        //神关羽
        tw_shen_guanyu: decadeUI.dynamicSkin.shen_guanyu,
		
		//神吕蒙
		tw_shen_lvmeng: decadeUI.dynamicSkin.shen_lvmeng,  
		
        //神司马懿
		oldshen_simayi: decadeUI.dynamicSkin.shen_simayi, 

		//神赵云
		old_shen_zhaoyun: decadeUI.dynamicSkin.shen_zhaoyun,
		boss_zhaoyun: decadeUI.dynamicSkin.shen_zhaoyun,

		//士燮
		gz_shixie: decadeUI.dynamicSkin.shixie,
		dc_shixie: decadeUI.dynamicSkin.shixie,
		old_shixie: decadeUI.dynamicSkin.shixie,

		//司马懿
        re_simayi: decadeUI.dynamicSkin.simayi,
		jin_simayi: decadeUI.dynamicSkin.simayi,

		//司马师
		jin_simashi: decadeUI.dynamicSkin.simashi,   

		//司马昭 
		jin_simazhao: decadeUI.dynamicSkin.simazhao,    
    	gz_simazhao: decadeUI.dynamicSkin.simazhao,
		sp_simazhao: decadeUI.dynamicSkin.simazhao,

        //苏飞
        sp_sufei: decadeUI.dynamicSkin.xf_sufei,
		yj_sufei: decadeUI.dynamicSkin.xf_sufei,

        //孙策
        re_sunce: decadeUI.dynamicSkin.sunce,
        re_sunben: decadeUI.dynamicSkin.sunce,
		sb_sunce: decadeUI.dynamicSkin.sunce,

		//孙登
		re_sundeng: decadeUI.dynamicSkin.sundeng,  
		
		//孙皓
		old_sunhao: decadeUI.dynamicSkin.sunhao,
		
		//孙坚
		re_sunjian: decadeUI.dynamicSkin.sunjian,
		ol_sunjian: decadeUI.dynamicSkin.sunjian,
		tw_ol_sunjian: decadeUI.dynamicSkin.sunjian,
		ns_sunjian: decadeUI.dynamicSkin.sunjian,

		//孙寒华
        dc_sunhanhua: decadeUI.dynamicSkin.sunhanhua,
		th_sunhanhua: decadeUI.dynamicSkin.sunhanhua,

		//孙亮
		old_sunliang:decadeUI.dynamicSkin.sunliang,

        //孙鲁班
        re_sunluban: decadeUI.dynamicSkin.sunluban,
        xin_sunluban: decadeUI.dynamicSkin.sunluban,

        //孙鲁育
        re_sunluyu: decadeUI.dynamicSkin.sunluyu,
		mb_sunluyu: decadeUI.dynamicSkin.sunluyu,

        //孙权
        re_sunquan: decadeUI.dynamicSkin.sunquan,
		junk_sunquan: decadeUI.dynamicSkin.sunquan,
    	sb_sunquan: decadeUI.dynamicSkin.sunquan,

        //孙茹
        dc_sunru: decadeUI.dynamicSkin.sunru,

        //孙尚香
        re_sunshangxiang: decadeUI.dynamicSkin.sunshangxiang,
        sp_sunshangxiang: decadeUI.dynamicSkin.sunshangxiang,
		sb_sunshangxiang: decadeUI.dynamicSkin.sunshangxiang,

        //孙休
        re_sunxiu: decadeUI.dynamicSkin.sunxiu,
        xin_sunxiu: decadeUI.dynamicSkin.sunxiu,

        //孙翊
        re_sunyi: decadeUI.dynamicSkin.sunyi,
		ns_sunyi: decadeUI.dynamicSkin.sunyi,
    	tw_sunyi: decadeUI.dynamicSkin.sunyi, 

        //太史慈
        re_taishici: decadeUI.dynamicSkin.taishici,
        sp_taishici: decadeUI.dynamicSkin.taishici,
		re_sp_taishici: decadeUI.dynamicSkin.taishici,

		//滕芳兰
        dc_tengfanglan: decadeUI.dynamicSkin.tengfanglan,

		//童渊
		xia_tongyuan: decadeUI.dynamicSkin.tongyuan,

        //王粲
        sp_wangcan: decadeUI.dynamicSkin.wangcan,
		tw_wangcan: decadeUI.dynamicSkin.wangcan,

		//王朗
		ol_wanglang: decadeUI.dynamicSkin.wanglang,  
		old_wanglang: decadeUI.dynamicSkin.wanglang,
        th_wanglang: decadeUI.dynamicSkin.wanglang, 

		//王凌
        clan_wangling: decadeUI.dynamicSkin.wangling,
		tw_wangling: decadeUI.dynamicSkin.wangling,

        //王荣
        ol_wangrong: decadeUI.dynamicSkin.wangrong,

        //王双
        sp_wangshuang: decadeUI.dynamicSkin.wangshuang,

        //王异
        re_wangyi: decadeUI.dynamicSkin.wangyi,  
		old_wangyi: decadeUI.dynamicSkin.wangyi, 

		//王元姬
		jin_wangyuanji: decadeUI.dynamicSkin.wangyuanji, 

        //王允
        re_wangyun: decadeUI.dynamicSkin.wangyun,
		old_wangyun: decadeUI.dynamicSkin.wangyun,
		wz_wangyun: decadeUI.dynamicSkin.wangyun, 
    	ns_wangyun: decadeUI.dynamicSkin.wangyun,  
    	dc_wangyun: decadeUI.dynamicSkin.wangyun, 
    	decade_wangyun: decadeUI.dynamicSkin.wangyun, 
		clan_wangyun: decadeUI.dynamicSkin.wangyun,

		//万年公主
		//re_wanniangongzhu :decadeUI.dynamicSkin.wanniangongzhu, 

        //卫温诸葛直
        re_weiwenzhugezhi: decadeUI.dynamicSkin.weiwenzhugezhi,

        //魏延
        re_weiyan: decadeUI.dynamicSkin.weiyan,
		ol_weiyan: decadeUI.dynamicSkin.weiyan,
		yj_weiyan: decadeUI.dynamicSkin.weiyan,

        //文鸯
        db_wenyang: decadeUI.dynamicSkin.wenyang,
		diy_wenyang: decadeUI.dynamicSkin.wenyang, 
	
		//吴苋
		clan_wuxian: decadeUI.dynamicSkin.wuxian,

        //吴国太
        re_wuguotai: decadeUI.dynamicSkin.wuguotai,
        xin_wuguotai: decadeUI.dynamicSkin.wuguotai,

        //吴懿
        re_wuyi: decadeUI.dynamicSkin.wuyi,
		xin_wuyi: decadeUI.dynamicSkin.wuyi,  

		//兀突骨
		//decade_wutugu: decadeUI.dynamicSkin.wutugu,     

        //夏侯霸
        dc_xiahouba: decadeUI.dynamicSkin.xiahouba,
		tw_xiahouba: decadeUI.dynamicSkin.xiahouba,

        //夏侯惇
        re_xiahoudun: decadeUI.dynamicSkin.xiahoudun,
        xin_xiahoudun: decadeUI.dynamicSkin.xiahoudun,
		xia_xiahoudun: decadeUI.dynamicSkin.xiahoudun,

        //夏侯氏
        re_xiahoushi: decadeUI.dynamicSkin.xiahoushi,
		sb_xiahoushi: decadeUI.dynamicSkin.xiahoushi, 
		sp_xiahoushi: decadeUI.dynamicSkin.xiahoushi,

        //夏侯渊
        re_xiahouyuan: decadeUI.dynamicSkin.xiahouyuan,
		ol_xiahouyuan: decadeUI.dynamicSkin.xiahouyuan,

        //小乔
        re_xiaoqiao: decadeUI.dynamicSkin.xiaoqiao,
        ol_xiaoqiao: decadeUI.dynamicSkin.xiaoqiao,
        decade_xiaoqiao: decadeUI.dynamicSkin.xiaoqiao,
		old_xiaoqiao: decadeUI.dynamicSkin.xiaoqiao, 

        //辛宪英
        ol_xinxianying: decadeUI.dynamicSkin.xinxianying,
        re_xinxianying: decadeUI.dynamicSkin.xinxianying,
		sp_xinxianying: decadeUI.dynamicSkin.xinxianying,
		
        //薛综
        tw_xuezong: decadeUI.dynamicSkin.xuezong,

        //徐晃
        xuhuang: decadeUI.dynamicSkin.ol_xuhuang,
        re_xuhuang: decadeUI.dynamicSkin.ol_xuhuang,
        yj_xuhuang: decadeUI.dynamicSkin.ol_xuhuang,
		sb_xuhuang: decadeUI.dynamicSkin.ol_xuhuang,

		//许靖
		dc_xujing: decadeUI.dynamicSkin.xujing,
		tw_xujing: decadeUI.dynamicSkin.xujing,
		sp_xujing: decadeUI.dynamicSkin.xujing,
		ddd_xujing: decadeUI.dynamicSkin.xujing,

		//荀谌
		re_xunchen: decadeUI.dynamicSkin.xunchen,
		sp_xunchen: decadeUI.dynamicSkin.xunchen,
		clan_xunchen: decadeUI.dynamicSkin.xunchen,
		tw_xunchen: decadeUI.dynamicSkin.xunchen,

		//荀攸
		re_xunyou: decadeUI.dynamicSkin.xunyou,
		clan_xunyou: decadeUI.dynamicSkin.xunyou,

        //荀彧
        ol_xunyu: decadeUI.dynamicSkin.xunyu,
        re_xunyu: decadeUI.dynamicSkin.xunyu,
		
		//徐盛
        re_xusheng: decadeUI.dynamicSkin.xusheng,
        xin_xusheng: decadeUI.dynamicSkin.xusheng,

		//徐庶
        re_xushu: decadeUI.dynamicSkin.xushu,
        dc_xushu: decadeUI.dynamicSkin.xushu,
        xin_xushu: decadeUI.dynamicSkin.xushu,
        xia_xushu: decadeUI.dynamicSkin.xushu,

        //许褚
        re_xuzhu: decadeUI.dynamicSkin.xuzhu,

        //许攸
        sp_xuyou: decadeUI.dynamicSkin.xuyou,
		xin_xuyou: decadeUI.dynamicSkin.xuyou,
		junk_xuyou: decadeUI.dynamicSkin.xuyou,


		//羊祜
        jin_yanghu: decadeUI.dynamicSkin.yanghu,
        dc_yanghu: decadeUI.dynamicSkin.yanghu,

		//羊徽瑜
		jin_yanghuiyu: decadeUI.dynamicSkin.yanghuiyu,

		//杨彪
		dc_yangbiao: decadeUI.dynamicSkin.yangbiao,

        //杨婉
        sp_yangwan: decadeUI.dynamicSkin.yangwan,

		//杨艳
		old_yangyan: decadeUI.dynamicSkin.yangyan,

		//杨仪
		ol_yangyi: decadeUI.dynamicSkin.yangyi,
		tw_yangyi: decadeUI.dynamicSkin.yangyi,
		diy_yangyi: decadeUI.dynamicSkin.yangyi,
		ns_yangyi: decadeUI.dynamicSkin.yangyi,

		//颜良文丑
		re_yanwen: decadeUI.dynamicSkin.yanwen,

        //于吉
		re_yuji: decadeUI.dynamicSkin.yuji,
		ns_yuji: decadeUI.dynamicSkin.yuji,
		xin_yuji: decadeUI.dynamicSkin.yuji,
		diy_yuji: decadeUI.dynamicSkin.yuji,
		
		//于禁
        ol_yujin: decadeUI.dynamicSkin.yujin,
		xin_yujin: decadeUI.dynamicSkin.yujin,
        yujin_yujin: decadeUI.dynamicSkin.yujin,
        sb_yujin: decadeUI.dynamicSkin.yujin,
		re_yujin: decadeUI.dynamicSkin.yujin,
		tw_yujin: decadeUI.dynamicSkin.yujin,
		ddd_yujin: decadeUI.dynamicSkin.yujin,

        //袁绍
        re_yuanshao: decadeUI.dynamicSkin.ol_yuanshao,
        xin_yuanshao: decadeUI.dynamicSkin.ol_yuanshao,
		sb_yuanshao: decadeUI.dynamicSkin.ol_yuanshao,

		//袁术
        re_yuanshu: decadeUI.dynamicSkin.yuanshu,
        ol_yuanshu: decadeUI.dynamicSkin.yuanshu,
        old_yuanshu: decadeUI.dynamicSkin.yuanshu,
        yl_yuanshu: decadeUI.dynamicSkin.yuanshu,
		star_yuanshu: decadeUI.dynamicSkin.yuanshu,

        //张宝
        re_zhangbao: decadeUI.dynamicSkin.zhangbao,
        
        //张昌蒲
        ol_zhangchangpu: decadeUI.dynamicSkin.zhangchangpu,
        sp_zhangchangpu: decadeUI.dynamicSkin.zhangchangpu,

        //张春华
        re_zhangchunhua: decadeUI.dynamicSkin.zhangchunhua,
		jin_zhangchunhua: decadeUI.dynamicSkin.zhangchunhua,

        //张飞
        re_zhangfei: decadeUI.dynamicSkin.zhangfei,
        xin_zhangfei: decadeUI.dynamicSkin.zhangfei,
        bol_zhangfei: decadeUI.dynamicSkin.zhangfei,
		sb_zhangfei: decadeUI.dynamicSkin.zhangfei,
		tw_zhangfei: decadeUI.dynamicSkin.zhangfei,
		sp_zhangfei: decadeUI.dynamicSkin.zhangfei,
		old_zhangfei: decadeUI.dynamicSkin.zhangfei,
		yj_zhangfei: decadeUI.dynamicSkin.zhangfei,

        //张恭
        re_zhanggong: decadeUI.dynamicSkin.zhanggong,

        //张郃
        re_zhanghe: decadeUI.dynamicSkin.zhanghe,
		sb_zhanghe: decadeUI.dynamicSkin.zhanghe,
        sp_zhanghe: decadeUI.dynamicSkin.zhanghe,
        yj_zhanghe: decadeUI.dynamicSkin.zhanghe,
        sp_ol_zhanghe: decadeUI.dynamicSkin.zhanghe,
		old_yj_zhanghe: decadeUI.dynamicSkin.zhanghe,

        //张辽
        ol_zhangliao: decadeUI.dynamicSkin.zhangliao,
        re_zhangliao: decadeUI.dynamicSkin.zhangliao,
        sp_zhangliao: decadeUI.dynamicSkin.zhangliao,
        yj_zhangliao: decadeUI.dynamicSkin.zhangliao,

		//张济
		ns_zhangji: decadeUI.dynamicSkin.zhangji,
		
		//张角
        re_zhangjiao: decadeUI.dynamicSkin.zhangjiao,
		sb_zhangjiao: decadeUI.dynamicSkin.zhangjiao,
		sp_zhangjiao: decadeUI.dynamicSkin.zhangjiao,

		//张让
		btw_zhangrang: decadeUI.dynamicSkin.zhangrang,
		ol_zhangrang: decadeUI.dynamicSkin.zhangrang,
		scs_zhangrang: decadeUI.dynamicSkin.zhangrang,
		junk_zhangrang: decadeUI.dynamicSkin.zhangrang,

		//张松
		re_zhangsong: decadeUI.dynamicSkin.zhangsong,

		//张星彩
		old_zhangxingcai: decadeUI.dynamicSkin.zhangxingcai,

		//张绣
		ns_zhangxiu: decadeUI.dynamicSkin.zhangxiu,

        //张翼
        ol_zhangyì: decadeUI.dynamicSkin.zhangyì,
		
		//张昭张纮
        re_zhangzhang: decadeUI.dynamicSkin.zhangzhang,

        //赵襄
		//doubleold_zhaoxiang: decadeUI.dynamicSkin.zhaoxiang,  
    	dc_zhaoxiang: decadeUI.dynamicSkin.zhaoxiang,
    	tw_zhaoxiang: decadeUI.dynamicSkin.zhaoxiang,
    	//doubleold_zhaoxiang: decadeUI.dynamicSkin.zhaoxiang,
    	//old_zhaoxiang: decadeUI.dynamicSkin.zhaoxiang,

		//赵俨
        dc_zhaoyǎn: decadeUI.dynamicSkin.zhaoyǎn,

		//赵云
        ol_zhaoyun: decadeUI.dynamicSkin.zhaoyun,
        re_zhaoyun: decadeUI.dynamicSkin.zhaoyun,
        sp_zhaoyun: decadeUI.dynamicSkin.zhaoyun,
		sb_zhaoyun: decadeUI.dynamicSkin.zhaoyun, 
    	fre_zhaoyun: decadeUI.dynamicSkin.zhaoyun, 
		old_zhaoyun: decadeUI.dynamicSkin.zhaoyun, 
		jsp_zhaoyun: decadeUI.dynamicSkin.zhaoyun,
        bilibili_shen_zhaoyun: decadeUI.dynamicSkin.shen_zhaoyun,

        //甄宓
        sb_zhenji: decadeUI.dynamicSkin.zhenji,
        re_zhenji: decadeUI.dynamicSkin.zhenji,
		diy_zhenji: decadeUI.dynamicSkin.zhenji,

        //钟会
        re_zhonghui: decadeUI.dynamicSkin.zhonghui,
        xin_zhonghui: decadeUI.dynamicSkin.zhonghui,
		old_zhonghui: decadeUI.dynamicSkin.zhonghui,
    	gz_zhonghui: decadeUI.dynamicSkin.zhonghui,
		clan_zhonghui: decadeUI.dynamicSkin.zhonghui,

		//钟琰
		clan_zhongyan: decadeUI.dynamicSkin.zhongyan,
		//钟繇
		re_zhongyao: decadeUI.dynamicSkin.zhongyao,

		//周不疑
		yj_zhoubuyi: decadeUI.dynamicSkin.zhoubuyi,

		//周仓
        re_zhoucang: decadeUI.dynamicSkin.zhoucang,
        xin_zhoucang: decadeUI.dynamicSkin.zhoucang,

		//周处
        jin_zhouchu: decadeUI.dynamicSkin.zhouchu,
		tw_zhouchu: decadeUI.dynamicSkin.zhouchu,

		//周妃
		yue_zhoufei: decadeUI.dynamicSkin.zhoufei,

		//周群
		ol_zhouqun: decadeUI.dynamicSkin.zhouqun,

        //周瑜
        re_zhouyu: decadeUI.dynamicSkin.zhouyu,
		sb_zhouyu: decadeUI.dynamicSkin.zhouyu,
		
		//朱桓
		re_zhuhuan: decadeUI.dynamicSkin.zhuhuan,   
    	xin_zhuhuan: decadeUI.dynamicSkin.zhuhuan, 
		old_zhuhuan: decadeUI.dynamicSkin.zhuhuan,
		yizhuhuan: decadeUI.dynamicSkin.zhuhuan,

		//朱灵
        ol_zhuling: decadeUI.dynamicSkin.zhuling,
        dc_zhuling: decadeUI.dynamicSkin.zhuling,
	
        //朱然
		re_zhuran: decadeUI.dynamicSkin.zhuran,
        xin_zhuran: decadeUI.dynamicSkin.zhuran,
		old_zhuran: decadeUI.dynamicSkin.zhuran, 

		//朱治
		re_zhuzhi: decadeUI.dynamicSkin.zhuzhi,
		xin_zhuzhi: decadeUI.dynamicSkin.zhuzhi,
		old_zhuzhi: decadeUI.dynamicSkin.zhuzhi,

		//诸葛诞
		re_zhugedan: decadeUI.dynamicSkin.zhugedan,

		//诸葛果
		tw_zhugeguo: decadeUI.dynamicSkin.zhugeguo,   //诸葛果
    	btw_zhugeguo: decadeUI.dynamicSkin.zhugeguo,  

        //诸葛亮
        re_zhugeliang: decadeUI.dynamicSkin.zhugeliang,
		ns_re_zhugeliang: decadeUI.dynamicSkin.zhugeliang,
		sb_zhugeliang: decadeUI.dynamicSkin.zhugeliang,
        sp_zhugeliang: decadeUI.dynamicSkin.zhugeliang,
        ol_sp_zhugeliang: decadeUI.dynamicSkin.zhugeliang,
        re_sp_zhugeliang: decadeUI.dynamicSkin.zhugeliang,
		
		//诸葛瞻
		old_zhugezhan: decadeUI.dynamicSkin.zhugezhan,

       

        //祝融
        ol_zhurong: decadeUI.dynamicSkin.zhurong,
        re_zhurong: decadeUI.dynamicSkin.zhurong,
		sb_zhurong: decadeUI.dynamicSkin.zhurong,

        //左慈
        re_zuoci: decadeUI.dynamicSkin.zuoci,
		ns_zuoci: decadeUI.dynamicSkin.re_zuoci,
        
        //极略三国
        //曹操
        jlsgsoul_caocao: decadeUI.dynamicSkin.jlsgsr_caocao,
        
        //诸葛亮
        jlsgsoul_sp_zhugeliang: decadeUI.dynamicSkin.jlsgsoul_zhugeliang,
        jlsgsr_zhugeliang: decadeUI.dynamicSkin.jlsgsoul_zhugeliang,
        
        //貂蝉
        jlsgsoul_diaochan: decadeUI.dynamicSkin.jlsgsr_diaochan,
        
        //黄月英
        jlsgsr_huangyueying: decadeUI.dynamicSkin.jlsgsk_huangyueying,
        jlsgsoul_huangyueying: decadeUI.dynamicSkin.jlsgsk_huangyueying,
        
        //刘备
        jlsgsoul_liubei: decadeUI.dynamicSkin.jlsgsr_liubei,
        
        //吕布
        jlsgsoul_lvbu: decadeUI.dynamicSkin.jlsgsr_lvbu,
        jlsgsoul_sp_lvbu: decadeUI.dynamicSkin.jlsgsr_lvbu,
        
        //吕蒙
        jlsgsoul_lvmeng: decadeUI.dynamicSkin.jlsgsr_lvmeng,
        
        //马超
        jlsgsr_machao: decadeUI.dynamicSkin.jlsgsk_machao,
        jlsgsoul_machao: decadeUI.dynamicSkin.jlsgsk_machao,
        
        //甘宁
        jlsgsoul_ganning: decadeUI.dynamicSkin.jlsgsr_ganning,
        
        //关羽
        jlsgsoul_guanyu: decadeUI.dynamicSkin.jlsgsr_guanyu,
        
        //郭嘉
        jlsgsoul_guojia: decadeUI.dynamicSkin.jlsgsr_guojia,
        
        //华佗
        jlsgsoul_huatuo: decadeUI.dynamicSkin.jlsgsr_huatuo,
        
        //陆逊
        jlsgsoul_luxun: decadeUI.dynamicSkin.jlsgsr_luxun,
        
        //孙权
        jlsgsoul_sunquan: decadeUI.dynamicSkin.jlsgsr_sunquan,
        
        //孙尚香
        jlsgsoul_sunshangxiang: decadeUI.dynamicSkin.jlsgsr_sunshangxiang,
        
        //张飞
        jlsgsoul_zhangfei: decadeUI.dynamicSkin.jlsgsr_zhangfei,
        
        //神张角
        jlsgsoul_sp_zhangjiao: decadeUI.dynamicSkin.jlsgsoul_zhangjiao,
        jlsgsy_zhangjiao: decadeUI.dynamicSkin.jlsgsoul_zhangjiao,
        jlsgsy_zhangjiaobaonu: decadeUI.dynamicSkin.jlsgsoul_zhangjiao,
        
        //张辽
        jlsgsoul_zhangliao: decadeUI.dynamicSkin.jlsgsr_zhangliao,
        
        //赵云
        jlsgsoul_zhaoyun: decadeUI.dynamicSkin.jlsgsr_zhaoyun,
        
        //周瑜
        jlsgsoul_zhouyu: decadeUI.dynamicSkin.jlsgsr_zhouyu,
        
        //夏侯惇
        jlsgsoul_xiahoudun: decadeUI.dynamicSkin.jlsgsr_xiahoudun,
        
        //甄姬
        jlsgsoul_zhenji: decadeUI.dynamicSkin.jlsgsr_zhenji,
        
        //三英神蔡夫人
        jlsgsy_caifurenbaonu: decadeUI.dynamicSkin.jlsgsy_caifuren,
        
        //左幽
        变天左幽: decadeUI.dynamicSkin.左幽,
        残普左幽: decadeUI.dynamicSkin.左幽,
        反骨左幽: decadeUI.dynamicSkin.左幽,
        锦囊左幽: decadeUI.dynamicSkin.左幽,
        神游左幽: decadeUI.dynamicSkin.左幽,
        苦刮左幽: decadeUI.dynamicSkin.左幽,
        知天左幽: decadeUI.dynamicSkin.左幽,
        
	};decadeUI.get.extend(decadeUI.dynamicSkin, extend);
	
});
//
//