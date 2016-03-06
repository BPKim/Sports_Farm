enyo
		.kind({
			name : "playPanel",
			classes : "moon enyo-fit enyo-unselectable pannerStyles moon-button-sample",
			components : [
					{
						name : "player",
						kind : "moon.VideoPlayer",
						src : "assets/sport1.mp4", 
						autoplay : true,
						ontimeupdate : "timeChanged", 
						infoComponents : [
								{
									kind : "moon.VideoInfoBackground",
									orient : "left",
									background : true,
									fit : true,
									components : [
											{
												kind : "moon.ChannelInfo",
												channelNo : "13",
												channelName : "AMC",
												classes : "moon-2h",
												components : [
														{
															content : "3D"
														},
														{
															content : "Live"
														},
														{
															content : "REC 08:22",
															classes : "moon-video-player-info-redicon "
														} ]
											},
											{
												kind : "moon.VideoInfoHeader",
												title : "Downton Abbey - Extra Title",
												subTitle : "Mon June 21, 7:00 - 8:00pm",
												subSubTitle : "R - TV 14, V, L, SC",
												description : "The series, set in the Youkshire country estate of Downton Abbey, depicts the lives of the aristocratic Crawley famiry and"
											} ]
								}, {
									kind : "moon.VideoInfoBackground",
									orient : "right",
									background : true,
									components : [ {
										kind : "moon.Clock"
									} ]
								} ],
					},
					{
						name : "panels",
						kind : "moon.Panels",
						pattern : "alwaysviewing",
						animate : false,
						classes : "enyo-fit",
						showing : false,
						components : [

								{
									title : "",
									titleBelow : "",
									subTitleBelow : " ",
									classes : "moon-h7",
									autoNumber : false,

									components : [
											{
												kind : "moon.InputDecorator",
												style : "width:700px;",
												components : [ {
													kind : "onyx.InputDecorator",
													alwaysLooksFocused : false,
													classes : "teduri",
													components : [
															{
																kind : "enyo.Input",
																name : "playername1",
																style : "width: 550px;",
																placeholder : "빠른 검색",
															},
															{
																name : "searchButton1",
																kind : "Image",
																src : "assets/search-input-search.png",
//																ontap : "dbCreate"
																ontap : "searchDrawer1_1"
															} ]
												} ]
											},
											{
												classes : "moon-hspacing",
												style : "height : 50px; color: white;",
												components : [
														{
															style : "width : 370px;",
															components : [
																	{
																		name : "checkButton",
																		kind : "moon.ToggleItem",
																		classes : "tap-area-toggle-container",
																		content : "요약 정보",
																		onActivate : "checkButton"
																	}, ]
														},
														{
															kind : "moon.TooltipDecorator",
															components : [
																	{
																		kind : "moon.ContextualPopupDecorator",
																		components : [
																				{
																					kind : "onyx.IconButton",
																					style : "width : 50px; height : 50px; ",
																					src : "assets/HomeButton3.png",
																				},
																				{
																					kind : "moon.ContextualPopup",
																					spotlightModal : true,
																					classes : "teduri",
																					style : "background-color : #8C8C8C;width:450px;",
																					components : [
																							{
																								kind : "moon.InputDecorator",
																								style : "width:400px; background-color : #8C8C8C;",
																								components : [ {
																									kind : "onyx.InputDecorator",
																									alwaysLooksFocused : false,
																									classes : "teduri",
																									components : [
																											{
																												kind : "enyo.Input",
																												name : "playRule",
																												style : "width: 300px; color : black;",
																												placeholder : "야구 용어",
																											},
																											{
																												name : "playRuleButton",
																												kind : "Image",
																												src : "assets/search-input-search.png",
																												ontap : "playRule"
																											} ]
																								} ]
																							},
																							{
																								classes : "result-section",
																								style : "background-color : #8C8C8C;",
																								components : [
																										{
																											name : "potest1",
																											classes : "result-label",
																											content : ""
																										}, ]
																							}, ]
																				} ]
																	},
																	{
																		kind : "moon.Tooltip",
																		content : "야구용어검색",
																		showDelay : 2
																	} ]
														},
														{
															kind : "moon.TooltipDecorator",
															style : "display:inline-block;",
															components : [
																	{
																		name : "darwerClose",
																		kind : "onyx.IconButton",
																		style : "width : 50px; height : 50px;",
																		src : "assets/HomeButton1.png",
																		ontap : "closeDrawer"
																	},
																	{
																		kind : "moon.Tooltip",
																		content : "올리기",
																		classes : ".moon-tooltip-label",
																		showDelay : 2
																	} ]
														},
														{
															kind : "moon.TooltipDecorator",
															style : "display:inline-block",
															components : [
																	{
																		name : "homeButton",
																		kind : "onyx.IconButton",
																		style : "width : 50px; height : 50px; !important; padding : 0px 0px 0px 0px;",
																		src : "assets/HomeButton.png",
																		ontap : "goHome"
																	},

																	{
																		kind : "moon.Tooltip",
																		content : "홈으로",
																		showDelay : 2
																	} ]
														}, ]
											},
											{
												classes : "result-section",
												components : [
														{
															name : "potest",
															classes : "result-label",
															content : "선수"
														},
														{
															name : "videoPosition",
															style : "font-size : 1px; color : transparent;"
														} ]
											},
											{
												classes : "baseballPlayground",
												style : "margin-top : 1px;",
												components : [
														{
															components : [
																	{
																		kind : "onyx.IconButton",
																		src : "assets/playerButton1.png",
//																		ontap : "dbCreate",
																		ontap : "realDrawer",
																		name : "rPlay1",
																		setEnable : true,
																		onmouseover : "changed",
																		onmouseout : "changed1",
																		classes : "icon-button",
																		content : "최형우",
																		style : "width : 46px; height : 46px; margin-left : 90px; margin-top : 120px; !important; padding : 0px 0px 0px 0px;"
																	},
																	{
																		kind : "onyx.IconButton",
																		src : "assets/playerButton1.png",
//																		ontap : "dbCreate",
																		ontap : "realDrawer",
																		onmouseover : "changed",
																		onmouseout : "changed1",
																		name : "rPlay2",
																		classes : "icon-button",
																		content : "박해민",
																		style : "width : 46px; height : 46px; margin-left : 143px; margin-top : -60px !important; padding : 0px 0px 0px 0px;"
																	},
																	{
																		classes : "section moon-hspacing",
																		components : [
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton1.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay3",
																					classes : "icon-button",
																					content : "박한이",
																					style : "width : 46px; height : 46px; margin-left : 455px; margin-top : -75px !important; padding : 0px 0px 0px 0px;"
																				},

																		]
																	},
																	{
																		classes : "section moon-hspacing",
																		components : [
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton1.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay4",
																					classes : "icon-button",
																					content : "조동찬",
																					style : "width : 46px; height : 46px; margin-left : 60px; margin-top : 45px !important; padding : 0px 0px 0px 0px;"
																				},
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay333",
																					classes : "icon-button",
																					content : "3루수",
																					style : "width : 46px; height : 46px; margin-left : -15px; margin-top : 85px !important; padding : 0px 0px 0px 0px;"
																				},
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton1.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay6",
																					classes : "icon-button",
																					content : "나바로",
																					style : "width : 46px; height : 46px; margin-left : 123px; margin-top : -230px !important; padding : 0px 0px 0px 0px;"
																				},
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay222",
																					classes : "icon-button",
																					content : "2루수",
																					style : "width : 46px; height : 46px; margin-left : -56px; margin-top : -140px !important; padding : 0px 0px 0px 0px;"
																				},
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton1.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay8",
																					classes : "icon-button",
																					content : "김상수",
																					style : "width : 46px; height : 46px; margin-left : 40px; margin-top : -100px !important; padding : 0px 0px 0px 0px;"
																				},
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton1.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay9",
																					classes : "icon-button",
																					content : "채태인",
																					style : "width : 46px; height : 46px; margin-left : 60px; margin-top : 55px !important; padding : 0px 0px 0px 0px;"
																				},
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay111",
																					classes : "icon-button",
																					content : "1루수",
																					style : "width : 46px; height : 46px; margin-left : -100px; margin-top : 85px !important; padding : 0px 0px 0px 0px;"
																				}, ]
																	},
																	{
																		classes : "section moon-hspacing",
																		components : [
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton1.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay11",
																					classes : "icon-button",
																					content : "장원삼",
																					style : "width : 46px; height : 46px; margin-left : 275px; margin-top : -100px !important; padding : 0px 0px 0px 0px;"
																				}, ]
																	},
																	{
																		classes : "section moon-hspacing",
																		components : [
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay12",
																					classes : "icon-button",
																					content : "우타자",
																					style : "width : 46px; height : 46px; margin-left : 220px; margin-top : -20px !important; padding : 0px 0px 0px 0px;"
																				},
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton1.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay13",
																					classes : "icon-button",
																					content : "이지영",
																					style : "width : 46px; height : 46px; margin-left : -1px; margin-top : 50px !important; padding : 0px 0px 0px 0px;"
																				},
																				{
																					kind : "onyx.IconButton",
																					src : "assets/playerButton.png",
//																					ontap : "dbCreate",
																					ontap : "realDrawer",
																					onmouseover : "changed",
																					onmouseout : "changed1",
																					name : "rPlay14",
																					classes : "icon-button",
																					content : "좌타자",
																					style : "width : 46px; height : 46px; margin-left : -5px; margin-top : -20px !important; padding : 0px 0px 0px 0px;"
																				}, ]
																	} ]
														},
														{
															name : "drawer3",
															kind : "enyo.Drawer",
															open : false,
															components : [ {
																classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
																style : "height : 500px; color: white;",
																components : [
																		{
																			style : "width : 130px !important;",
																			components : [
																					{
																						name : "reresult1",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "승"
																					},
																					{
																						name : "reresult2",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "패"
																					},
																					{
																						name : "reresult3",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "세이브"
																					},
																					{
																						name : "reresult4",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "승률"
																					},
																					{
																						name : "reresult5",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "이닝"
																					} ]
																		},
																		{
																			style : "width : 130px !important;",
																			components : [
																					{
																						classes : "tabletest",
																						kind : "moon.Divider",
																						name : "realobj1",
																						content : ""
																					},
																					{
																						classes : "tabletest",
																						kind : "moon.Divider",
																						name : "realobj2",
																						content : ""
																					},
																					{
																						classes : "tabletest",
																						kind : "moon.Divider",
																						name : "realobj3",
																						content : ""
																					},
																					{
																						classes : "tabletest",
																						kind : "moon.Divider",
																						name : "realobj4",
																						content : ""
																					},
																					{
																						classes : "tabletest",
																						kind : "moon.Divider",
																						name : "realobj5",
																						content : ""
																					} ]
																		},
																		{
																			style : "width : 130px !important;",
																			components : [
																					{
																						name : "reresult6",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "투구수"
																					},
																					{
																						name : "reresult7",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "피안타"
																					},
																					{
																						name : "reresult8",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "피홈런"
																					},
																					{
																						name : "reresult9",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "타자"
																					},
																					{
																						name : "reresult10",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : "홀드"
																					} ]
																		},
																		{
																			style : "width : 130px !important;",
																			components : [
																					{
																						classes : "tabletest",
																						kind : "moon.Divider",
																						name : "realobj6",
																						content : ""
																					},
																					{
																						classes : "tabletest",
																						kind : "moon.Divider",
																						name : "realobj7",
																						content : ""
																					},
																					{
																						name : "realobj8",
																						classes : "tabletest",
																						kind : "moon.Divider",
																						content : ""
																					},
																					{
																						classes : "tabletest",
																						kind : "moon.Divider",
																						name : "realobj9",
																						content : ""
																					},
																					{
																						classes : "tabletest",
																						kind : "moon.Divider",
																						name : "realobj10",
																						content : ""
																					} ]
																		} ]
															} ]
														} ]
											},
											{
												kind : "onyx.IconButton",
												src : "assets/playerButton.png",
												style : "width : 46px; height : 46px; margin-left : 0px; margin-top : 0px !important; padding : 0px 0px 0px 0px;"
											}, ]
								},
								{
									name : "playerSearch",
									title : "",
									titleBelow : "",
									subTitleBelow : " ",
									classes : "moon-h7",
									autoNumber : false,
									components : [
											{
												kind : "moon.InputDecorator",
												style : "width:700px;",
												components : [ {
													kind : "onyx.InputDecorator",
													alwaysLooksFocused : false,
													classes : "teduri",
													components : [
															{
																kind : "enyo.Input",
																name : "playername2",
																style : "width: 550px;",
																placeholder : "Search Player",
															},
															{
																name : "searchButton2",
																kind : "Image",
																src : "assets/search-input-search.png",
//																ontap : "dbCreate"
																ontap : "searchDrawer1_2"
															} ]
												} ]
											},

											{
												name : "drawer",
												kind : "enyo.Drawer",
												open : false,
												style : "height: 1000px;",
												components : [
														{
															classes : "fittable-sample-box fittable-sample-mtb",
															style : "height: 793px; width: 580px; color: white;",
															components : [
																	{
																		name : "search",

																		kind : "moon.ImageItem",
																		source : "http://img.naver.net/static/www/u/2013/0731/nmms_224940510.gif",
																		label : "Nexon Park Junghun 7",
																		text : "birth: 1987.11.04<br>position:good<br>etc...",
																		allowHtml : true,
																		style : "color: white;"
																	},
																	{
																		classes : "moon-hspacing",
																		components : [
																				{
																					style : "width : 130px !important;",
																					components : [
																							{
																								name : "result1",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "승"
																							},
																							{
																								name : "result2",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "패"
																							},
																							{
																								name : "result3",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "세이브"
																							},
																							{
																								name : "result4",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "홀드"
																							},
																							{
																								name : "result5",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "승률"
																							},
																							{
																								name : "result6",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "타자"
																							},
																							{
																								name : "result7",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "투구수"
																							}, ]
																				},
																				{
																					style : "width : 130px !important;",
																					components : [
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj1",
																								content : "1"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj2",
																								content : "2"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj3",
																								content : "3"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj4",
																								content : "4"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj5",
																								content : "5"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj6",
																								content : "6"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj7",
																								content : "7"
																							}, ]
																				},
																				{
																					style : "width : 130px !important;",
																					components : [
																							{
																								name : "result8",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "이닝"
																							},
																							{
																								name : "result9",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "피안타"
																							},
																							{
																								name : "result10",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "2루타"
																							},
																							{
																								name : "result11",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "3루타"
																							},
																							{
																								name : "result12",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "피홈런"
																							},
																							{
																								name : "result13",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "희타"
																							},
																							{
																								name : "result14",
																								classes : "tabletest",
																								kind : "moon.Divider",
																								content : "희비"
																							}, ]
																				},
																				{
																					style : "width : 130px !important;",
																					components : [
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj8",
																								content : "8"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj9",
																								content : "9"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj10",
																								content : "10"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj11",
																								content : "11"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj12",
																								content : "12"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj13",
																								content : "13"
																							},
																							{
																								classes : "tabletest",
																								kind : "moon.Divider",
																								name : "obj14",
																								content : "14"
																							}, ]
																				},

																		]
																	} ]
														},

												]
											}, ]
								}

						]
					} ],

			handlers : {
				ontap : "tap",
			},
			tap : function(inSender, inEvent) {
				this.$.results.destroyClientControls();
				this.$.results.createComponent({
					content : "Event  \"" + inEvent.type + "\" from \""
							+ inEvent.originator.getName() + "\"."
				});
				this.$.results.render();
			},
			changed : function(inSender, inEvent) {
				this.$.potest.setContent("선수 : " + inSender.getContent());
			},
			changed1 : function(inSender, inEvent) {
				this.$.potest.setContent("선수 ");
			},
			goHome : function(inSender, inEvent) {
				this.$.player.unload();
				this.bubbleUp("onGoHome", {
					name : name
				});
				return true;
			},
			playRule : function() {
				if (this.$.playRule.getValue() == "견제구")
					this.$.potest1
							.setContent("야구에서 주자가 베이스에 있을 때 도루 방지나 아웃을 잡기 위해 투수 또는 포수가 수비 선수에게 던지는 공을 말한다");
				if (this.$.playRule.getValue() == "고의낙구")
					this.$.potest1
							.setContent("야구 경기에서 내야수가 공중에 뜬 공을 고의로 떨어뜨리는 행위");
				if (this.$.playRule.getValue() == "고의사구")
					this.$.potest1
							.setContent("투수가 작전상 또는 강타자를 만났을 때 고의로 볼 4개를 던져 타자를 1루로 보내는 것을 말한다. 투수가 앞서 던진 3개의 볼과 무관하게 마지막 4번째 볼을 어떻게 던졌느냐에 따라 판정한다");
				if (this.$.playRule.getValue() == "구원투수")
					this.$.potest1
							.setContent("선발투수가 컨디션이 좋지 않거나 부상을 입은 경우 경기 전력에 위기 상황이 왔을 때 혹은 리드 상황을 유지하고자 할 때 등 전략적으로 경기를 운용하기 위해 투입되는 투수를 말한다");
				if (this.$.playRule.getValue() == "그라운드홈런")
					this.$.potest1
							.setContent("펜스를 넘지 못한 타구를 수비 팀이 처리하는 동안 타자가 홈인까지 하여 득점하는 것을 말한다");
				if (this.$.playRule.getValue() == "벤치클리어링")
					this.$.potest1
							.setContent("그라운드 위에서 선수들 사이에 싸움이 벌어졌을 때 양 팀 소속 선수들이 모두 그라운드로 몰려나와 뒤엉키는 것을 말한다. 그러면 말 그대로 벤치가 깨끗이 비워지게 되기 때문이다.");
				if (this.$.playRule.getValue() == "번트")
					this.$.potest1
							.setContent("내야에 공이 천천히 구르도록 배트를 스윙하지 않고 의식적으로 갖다 댄 타구를 말한다. 대개의 경우 누상에 있는 다른 주자를 다음 베이스로 진루시킬 목적으로 하는 희생 번트의 뜻으로 쓰인다.");
				if (this.$.playRule.getValue() == "병살")
					this.$.potest1
							.setContent("야구에서 2명의 선수가 한꺼번에 아웃되는 플레이. 타자가 땅볼을 쳤을 때 2명의 주자가 연속으로 아웃되는 상황 타자가 타격 후 아웃되고 연속으로 주자가 베이스로 돌아가기 전에 아웃되는 상황 타자가 스트라이크 아웃되고 주자가 도루를 하려다가 아웃되는 상황 등을 일컫는다.");
				if (this.$.playRule.getValue() == "더블플레이")
					this.$.potest1
							.setContent("야구에서 2명의 선수가 한꺼번에 아웃되는 플레이. 타자가 땅볼을 쳤을 때 2명의 주자가 연속으로 아웃되는 상황 타자가 타격 후 아웃되고 연속으로 주자가 베이스로 돌아가기 전에 아웃되는 상황 타자가 스트라이크 아웃되고 주자가 도루를 하려다가 아웃되는 상황 등을 일컫는다.");
				if (this.$.playRule.getValue() == "보살")
					this.$.potest1
							.setContent("러너를 터치 아웃시키기에 충분한 조력적 수비를 완료한 동작. 또 이 동작을 한 사람에게 부여되는 수비 성적을 나타내는 말.");
				if (this.$.playRule.getValue() == "보크")
					this.$.potest1
							.setContent("보크가 선언되면 베이스에 있던 주자는 모두 다음 베이스로 자동 진루할 수 있다. 투수가 다음의 잘못을 저질렀을 경우 심판원은 보크를 선언한다.");
				if (this.$.playRule.getValue() == "본헤드플레이")
					this.$.potest1
							.setContent("미숙한 플레이. 수비나 주루 플레이를 할 때 판단을 잘못해서 어처구니 없는 실수를 저지르는 것을 말한다. 그런 실수를 저지르는 선수를 가리켜 본헤드라고 부른다.");
				if (this.$.playRule.getValue() == "블론세이브")
					this.$.potest1
							.setContent("야구에서 블론세이브란 세이브상황에서 등판한 투수가 동점이나 역전을 허용했을 때 기록된다. 말 그대로 날려버린 세이브를 뜻한다.");
				if (this.$.playRule.getValue() == "백투백홈런")
					this.$.potest1
							.setContent("야구 경기에서 홈런을 친 타자 바로 다음에 타석에 오른 타자가 연속하여 홈런을 치는 경우를 백투백홈런이라고 한다. 세 타자 연속 홈런은 백투백투백홈런이라고 한다.");
				if (this.$.playRule.getValue() == "낫아웃")
					this.$.potest1
							.setContent("투수가 던진 세 번째 스트라이크를 포수가 받지 못하여 삼진 아웃이 되지 않은 경우를 말한다. 이때 타자는 아직 아웃이 되지 않은 상태로 1루까지 뛸 수 있으며 포수는 놓친 공을 잡아 타자를 태그(tag)하거나 타자가 1루에 도달하기 전에 1루로 공을 보내야 아웃으로 인정된다.");
				if (this.$.playRule.getValue() == "네이버후드플레이")
					this.$.potest1
							.setContent("2루에서 주자를 포스 아웃시키려는 수비수가 베이스를 밟지 않거나 공을 잡기 전에 베이스에서 발을 떼고 1루로 송구하여 더블플레이를 시도하는 행위를 지칭");
				if (this.$.playRule.getValue() == "노히트노런")
					this.$.potest1
							.setContent("투수가 상대 팀 선수에게 무안타 무실점인 상태로 경기에서 승리했을 때를 말한다.");
				if (this.$.playRule.getValue() == "더블헤더")
					this.$.potest1
							.setContent("두 팀이 같은 날 계속해서 두 경기를 치르는 것을 말한다. 폭우 등 불가피한 상황으로 인해 노게임이 되거나 취소된 경기를 정규 시즌 일정 안에 마치기 위해 치른다.");
				if (this.$.playRule.getValue() == "도루")
					this.$.potest1
							.setContent("주자가 수비 팀의 허점을 이용해 다음 베이스로 가는 것을 말한다");
				if (this.$.playRule.getValue() == "더블스틸")
					this.$.potest1
							.setContent("베이스에 있는 2명의 주자가 동시에 도루를 하는 것. 보통 1루와 2루에 주자가 있을 때 사용하는 기습적인 작전으로 주자가 1루와 3루에 있을 때 사용하기도 한다.");
				if (this.$.playRule.getValue() == "몰수게임")
					this.$.potest1
							.setContent("포피티드 게임(Forfeited Game)을 우리말로 옮긴 표현이다. 경기 중 중대한 문제가 발생했을 경우 주심의 선언에 의해 책임이 있는 구단의 패배를 기록하게 되는 규칙이다.");
				if (this.$.playRule.getValue() == "방어율")
					this.$.potest1
							.setContent("방어율은 투수가 평균적으로 한 게임(9이닝) 당 내준 점수를 의미한다. 방어율이 낮을수록 경기 당 내준 점수가 적다는 것이므로 투수는 낮은 방어율을 기록할수록 좋다.");
				if (this.$.playRule.getValue() == "사구")
					this.$.potest1
							.setContent("타자의 몸을 맞히는 투구 몸에 맞는 공 이라는 우리말로 바뀌는 추세");
				if (this.$.playRule.getValue() == "사사구")
					this.$.potest1
							.setContent("포 볼(four ball)과 데드 볼(dead ball)을 통틀어 가리키는 말");
				if (this.$.playRule.getValue() == "사이클링히트")
					this.$.potest1
							.setContent("한 선수가 한 게임에서 단타(1루타) 2루타 3루타 홈런을 순서에 관계없이 모두 쳐낸 것을 말한다.");
				if (this.$.playRule.getValue() == "삼중살")
					this.$.potest1
							.setContent("수비 팀이 연속된 동작으로 3명의 공격 팀 선수를 아웃시키는 플레이를 말한다. 그러나 풋아웃(put out)과 풋아웃 사이에 실책이 있는 경우는 트리플플레이로 기록되지 않는다. 삼중살(三重殺)이라고도 한다.");
				if (this.$.playRule.getValue() == "트리플플레이")
					this.$.potest1
							.setContent("수비 팀이 연속된 동작으로 3명의 공격 팀 선수를 아웃시키는 플레이를 말한다. 그러나 풋아웃(put out)과 풋아웃 사이에 실책이 있는 경우는 트리플플레이로 기록되지 않는다. 삼중살(三重殺)이라고도 한다.");
				if (this.$.playRule.getValue() == "선발투수")
					this.$.potest1
							.setContent("경기가 시작될 때 가장 먼저 등판한 투수를 말한다. 영어로는 스타팅피처라고 한다.");
				if (this.$.playRule.getValue() == "세이브")
					this.$.potest1
							.setContent("마무리 투수가 나와서 역전을 허용하지 않았을 경우 주어지는 기록.");
				if (this.$.playRule.getValue() == "낫아웃")
					this.$.potest1
							.setContent("투 스트라이크 이후 3번째 스트라이크를 포수가 잡지 못하고 떨어뜨리거나뒤로 빠뜨릴 경우 타자는 1루로 뛸 권리가 생기고 수비측에서는 타자가 1루에 도달하기 전에 1루에 공을 던져 아웃시켜야 하는데 이것을 스트라이크아웃 낫아웃 이라고 한다.");
				if (this.$.playRule.getValue() == "승리투수")
					this.$.potest1
							.setContent("경기를 승리로 이끈 투수 혹은 그 투수에게 주어지는 기록이다.");
				if (this.$.playRule.getValue() == "완봉승")
					this.$.potest1
							.setContent("완투승은 투수가 9이닝까지 모두 던지고 승리를 기록한 경우를 말하며 완봉승은 투수가 완투하여 상대팀에게 전혀 득점을 주지 않은 승리로 연장전인 경우 연장전 마지막 이닝까지 무실점으로 막아야 기록이 인정된다. 일명 셧아웃 게임(Shut Out Game)이라고도 한다.");
				if (this.$.playRule.getValue() == "완투승")
					this.$.potest1
							.setContent("완투경기란 한 투수가 승패에 관계없이 9이닝을 전부 던진 경기를 말한다. 연장전인 경우 연장전 마지막 이닝까지 던져야 완투기록을 준다. 일명 컴플리트게임(Complete Game). 한편 완투승은 투수가 9이닝까지 모두 던지고 승리를 기록한 경우를 말한다.");
				if (this.$.playRule.getValue() == "인필드플라이")
					this.$.potest1
							.setContent("다음의 경우에 심판이 타자에게 선고하는 아웃을 말한다. 즉 무사 또는 1사로 1/2루 또는 1/2/3루에 주자가 있을 때 타자가 친 볼이 직선으로 날아가는 타구가 아니고 심판의 판단으로 당연히 내야수가 볼을 잡을 수 있는 페어 플라이(fair fly)였을 경우이다.");
				if (this.$.playRule.getValue() == "자책점")
					this.$.potest1
							.setContent("투수가 책임을 져야 하는 실점이다. 영어로는 언드런이라고 한다. 자책점을 결정하려면 실책(포수의 타격 방해 포함)과 패스트볼(passed ball)을 제외하고 그 이닝을 재구성해야 한다.");
				if (this.$.playRule.getValue() == "지명타자")
					this.$.potest1.setContent("수비는 하지 않고 투수 대신 공격을 전담하는 타자");
				if (this.$.playRule.getValue() == "출루율")
					this.$.potest1
							.setContent("타자가 타석에서 베이스로 얼마나 많이 살아 나갔는지를 백분율로 나타낸 수치이다.");
				if (this.$.playRule.getValue() == "퀄리티스타트")
					this.$.potest1
							.setContent("선발로 등판한 투수가 6이닝 이상 공을 던지고 3자책점 이하로 막아 낸 경기를 뜻하는 야구용어");
				if (this.$.playRule.getValue() == "타석")
					this.$.potest1
							.setContent("타자가 타격을 완료할 때까지 벗어나서는 안 되는 직사각형 구역");
				if (this.$.playRule.getValue() == "타수")
					this.$.potest1
							.setContent("야구에서 타자가 타격한 횟수를 말한다. 여기서 베이스 온 볼스 희생번트 투수의 방해 희생타 등은 제외되며 이에 따라 선수의 타율이 정해진다.");
				if (this.$.playRule.getValue() == "타율")
					this.$.potest1
							.setContent("타격 성적을 백분율로 나타낸 것으로 영어로는 배팅애버리지라고 한다. 타율은 타자의 타격정확도를 가늠하는 척도로 타율이 높을수록 강타자로 인정받는다.");
				if (this.$.playRule.getValue() == "타점")
					this.$.potest1
							.setContent("타자의 플레이로 주자가 홈베이스에 들어와 득점했을 때 타자에게 주어지는 점수를 말한다. 여기서 타자의 플레이에는 안타 뿐만 아니라 희생플라이나 볼넷 등도 포함된다. 타점이 많은 타자는 득점 찬스에 강하다는 것을 의미한다.");
				if (this.$.playRule.getValue() == "퍼펙트게임")
					this.$.potest1
							.setContent("야구에서 한 명의 투수가 선발 등판해 단 한 명의 타자도 진루시키지 않고 끝내는 경기를 말한다. 즉 한 명의 투수가 1회부터 9회가 끝날 때까지 상대편 타자를 한 명도 1루에 내보내지 않은 경기이다.");
				if (this.$.playRule.getValue() == "패스트볼")
					this.$.potest1
							.setContent("야구에서 투수가 던진 공이 타자의 배트에 맞지 않았는데 포수의 실수로 뒤로 빠지는 상황을 말한다. 이 때 주자는 재빨리 다음 베이스로 전진할 수 있다.");
				if (this.$.playRule.getValue() == "패전투수")
					this.$.potest1
							.setContent("팀에게 패배의 빌미를 준 투수. 이닝에 관계없이 뒤지고 있을 때 마운드를 내려온 이후 자기 팀이 한번도 동점을 이루거나 역전을 못하고 경기가 종료되었을 경우를 말한다. 영어로는 루징피처라고 한다.");
				if (this.$.playRule.getValue() == "페넌트레이스")
					this.$.potest1
							.setContent("주로 프로야구·프로농구·프로축구 등에서 우승기를 놓고 겨루는 공식경기를 말한다. 특히 각팀이 우승을 목표로 승률을 쌓아가는 장기리그전을 가리키며 이런 경우 정규시즌이라고도 한다.");
				if (this.$.playRule.getValue() == "포볼")
					this.$.potest1
							.setContent("타자가 세 개의 스트라이크를 선언당하기 전에 네 개의 볼이 선고된 경우이며 타자는 1루에 진루한다.");
				if (this.$.playRule.getValue() == "포스트시즌")
					this.$.potest1
							.setContent("정규 리그가 끝난 다음 최종적인 우승 팀을 가리기 위해 벌이는 모든 경기를 말한다.");
				if (this.$.playRule.getValue() == "폭투")
					this.$.potest1
							.setContent("투수가 타자에게 규정대로 던진 볼이지만 이를 포수가 보통 노력으로는 막을 수도 잡을 수도 없는 것");
				if (this.$.playRule.getValue() == "피치아웃")
					this.$.potest1
							.setContent("주자가 도루할 것에 대비하여 스트라이크존보다 훨씬 높거나 옆으로 빠지는 공을 던지는 것을 말한다. 주로 포수의 요구에 의하며 투수는 포수가 그 공을 잘 잡아 수비수에게 송구하기 편한 곳으로 투구해야 한다.");
				if (this.$.playRule.getValue() == "홀드")
					this.$.potest1
							.setContent("1. 승리나 세이브를 얻지는 못했으나 자기 팀이 리드한 상황에서 중간계투로 등판해 세이브 조건을 충족시키고 물러난 투수에게 주어지는 평가를 말한다. 2. 주자로 하여금 자신이 점유한 베이스에서 다음 베이스를 향해 많이 리드하지 못하도록 견제하는 것을 말한다.");
				if (this.$.playRule.getValue() == "희생번트")
					this.$.potest1
							.setContent("노아웃이나 원아웃에서 주자가 베이스에 있을 때 그 주자를 다음 베이스로 진루시키기 위해 타자가 자신을 희생하며 번트를 댄 후 1루에서 아웃되는 것을 말한다.");
				if (this.$.playRule.getValue() == "희생플라이")
					this.$.potest1
							.setContent("노아웃이나 원아웃에서 3루 주자가 태그업(tag up)으로 득점을 올릴수 있도록 외야 깊은 곳으로 날려 보낸 플라이볼(fly ball)을 말한다. 타수(打數)에서 제외하며 영어로는 새크리파이스플라이라고 한다.");
				if (this.$.playRule.getValue() == "포스아웃")
					this.$.potest1
							.setContent("포스아웃,포스플레이(force play)상황에서 당하는 아웃을 가리킨다. 봉살이라고도 한다. ");
				if (this.$.playRule.getValue() == "유격수")
					this.$.potest1.setContent("야구경기에서 2루와 3루 사이의 지역을 수비하는 내야수");
				if (this.$.playRule.getValue() == "스트라이크")
					this.$.potest1
							.setContent("야구 경기에서 심판원이 스트라이크라고 선언한 투수의 정규 투구.");
				if (this.$.playRule.getValue() == "볼데드")
					this.$.potest1
							.setContent("심판원의 타임 선언이나 정해진 규칙에 의해 경기가 일시 정지된 상태");
				if (this.$.playRule.getValue() == "태그아웃")
					this.$.potest1
							.setContent("야수가 손 또는 글러브(glove)로 타구나 송구로 날아온 공을 확실하게 잡은 상태에서 공을 잡은 손이나 글러브 혹은 그 공으로 직접 주자의 몸을 태그하여 아웃시키는 것을 가리킨다.");
				if (this.$.playRule.getValue() == "사우스포")
					this.$.potest1.setContent("왼손으로 공을 던지는 왼손잡이 투수를 지칭하는 말");
				if (this.$.playRule.getValue() == "더그아웃")
					this.$.potest1.setContent("경기가 진행되는 동안 감독 선수 코치들이 대기하는 장소");
				if (this.$.playRule.getValue() == "중견수")
					this.$.potest1
							.setContent("외야 한가운데 지역을 맡아 수비하는 외야수이다. 영어로는 센터필더라고 한다. 중견수의 포지션넘버는 8이다.");
				if (this.$.playRule.getValue() == "베이스온볼")
					this.$.potest1
							.setContent("타자가 볼카운트에서 4개의 볼을 얻어내 1루로 출루하는 것");
				if (this.$.playRule.getValue() == "삼자범퇴")
					this.$.potest1
							.setContent("공격 팀이 1이닝 동안 진루나 잔루 점수를 기록하지 못하고 3명의 타자가 차례로 아웃되는 것을 말한다.");
				if (this.$.playRule.getValue() == "장타율")
					this.$.potest1
							.setContent("단타를 1 2루타를 2 3루타를 3 홈런을 4로 계산하여 합한 수를 타수로 나눈 값을 말한다.");
				if (this.$.playRule.getValue() == "빈볼")
					this.$.potest1
							.setContent("투수가 타자를 위협하기 위한 목적으로 타자의 머리를 향하여 던지는 투구.");
				if (this.$.playRule.getValue() == "마운드")
					this.$.potest1.setContent("야구에서 투수가 공을 던질 때 서는 곳");
				if (this.$.playRule.getValue() == "승부치기")
					this.$.potest1
							.setContent("야구 경기에서 연장전 경기시간을 단축하기 위해 도입된 승부 방식. 연장 11회부터 시행된다.");
				if (this.$.playRule.getValue() == "필딩")
					this.$.potest1
							.setContent("야수의 수비 자체를 필딩이라고 한다. 수비와 관련된 여러 뜻으로 사용된다.");
				if (this.$.playRule.getValue() == "태그업")
					this.$.potest1
							.setContent("타자의 타구가 플라이볼(fly ball)일 때 주자가 베이스를 밟은 상태에 있다 수비 팀이 그 플라이공을 잡는 순간 다음 베이스를 향해 달려가는 동작을 말한다. 리터치(retouch) 또는 터치업(touch up)이라고도 한다.");
				if (this.$.playRule.getValue() == "텍사스히트")
					this.$.potest1
							.setContent("빗맞은 타구가 내야수와 외야수 중간에 떨어져 운좋게 안타가 된 것.");
				if (this.$.playRule.getValue() == "베이스코치")
					this.$.potest1
							.setContent("1루 또는 3루의 코치스박스(coach’s box) 안에서 주자의 플레이를 지휘하는 사람이다.");
				if (this.$.playRule.getValue() == "범타")
					this.$.potest1
							.setContent("평범한 타구. 타자가 친 공이 수비 팀에 손쉽게 잡혀 아웃으로 처리되는 것을 말한다.");
				if (this.$.playRule.getValue() == "풋아웃")
					this.$.potest1
							.setContent("수비 팀 선수가 공격 팀 선수를 아웃시켰거나 공격 팀 선수가 규칙 위반으로 아웃되었을 때 수비 팀 선수에게 주어지는 기록 용어");
				if (this.$.playRule.getValue() == "인터리그")
					this.$.potest1.setContent("다른 리그에 속한 팀끼리 펼치는 경기");
				if (this.$.playRule.getValue() == "스코어보드")
					this.$.potest1
							.setContent("야구 경기장에서 관중이 경기 진행 상황을 알 수 있도록 득점 안타 수 볼카운트 등을 표시해주는 전광판");
				if (this.$.playRule.getValue() == "나이트게임")
					this.$.potest1
							.setContent("야간 경기 야간에 조명등을 설치한 상태에서 치르는 경기이다.");
				if (this.$.playRule.getValue() == "더블스틸")
					this.$.potest1
							.setContent("베이스에 있는 2명의 주자가 동시에 도루를 하는 것. 보통 1루와 2루에 주자가 있을 때 사용하는 기습적인 작전으로 주자가 1루와 3루에 있을 때 사용하기도 한다.");
				if (this.$.playRule.getValue() == "희생타")
					this.$.potest1
							.setContent("희생번트와 희생플라이를 아울러 가리킨다. 영어로는 새크리파이스히트라고 한다.");
				if (this.$.playRule.getValue() == "아웃카운트")
					this.$.potest1
							.setContent("아웃의 수를 헤아리는 것을 말한다. 원아웃 투아웃 스리아웃 또는 1사 2사 등으로 세고 스리아웃이 되면 공수를 교대한다.");
				if (this.$.playRule.getValue() == "서스펜디드게임")
					this.$.potest1
							.setContent("일시정지 경기라고도 하며 뒷날 속행하는 게임을 말한다. ");
				if (this.$.playRule.getValue() == "이닝피치트")
					this.$.potest1
							.setContent("투수가 등판하여 투구한 이닝의 수를 말한다. 투구 수가 아닌 투수로서 등판한 이닝 수를 따지기 때문에 공을 몇 번 던졌는지가 아니라 몇 이닝을 등판했는지를 센다.");
				if (this.$.playRule.getValue() == "스피리트라인")
					this.$.potest1
							.setContent("홈 플레이트와 1루 사이 베이스라인 3피트 바깥쪽에 그어진 흰색의 선");
				if (this.$.playRule.getValue() == "코너스톤")
					this.$.potest1
							.setContent("포수를 달리 이르는 말. 초석 주춧돌이라는 원래 뜻처럼 포수가 매우 중요한 역할을 담당하는 포지션임을 상징한다.");
				if (this.$.playRule.getValue() == "릴레이")
					this.$.potest1
							.setContent("중계 플레이. 외야에서 주자의 진루를 막기 위해 홈플레이트(home plate)나 3루로 공을 송구할 때 중간에 다른 수비수가 공을 잡아 연결하는 것을 말한다.");
				if (this.$.playRule.getValue() == "런다운플레이")
					this.$.potest1
							.setContent("공격 팀의 3루 주자가 홈에 들어올 시간을 벌어주기 위해 1루나 2루에 있는 다른 주자가 고의적으로 런다운에 걸리는 주루 작전을 말한다.");
				if (this.$.playRule.getValue() == "그랜드슬램")
					this.$.potest1
							.setContent("만루 홈런. 1루에서 3루까지 베이스에 3명의 주자가 꽉 차 있을 때 타자가 친 홈런을 말한다. 타자에게 4타점이 주어진다.");
				if (this.$.playRule.getValue() == "백업")
					this.$.potest1
							.setContent("1. 동료 야수의 수비를 돕기 위해 뒤를 받쳐주거나 수비 중 틈이 생긴 공간으로 위치를 옮겨서 협력 플레이 하는 것을 백업 혹은 백커버라고 한다. 2. 주전 선수가 게임에 참가할 수 없을 때를 대신해 출전하는 선수 또는 그런 역할을 하는 것을 말한다.");
				if (this.$.playRule.getValue() == "배터리")
					this.$.potest1.setContent("투수와 포수를 합쳐서 부르는 말");
				if (this.$.playRule.getValue() == "타격방해")
					this.$.potest1
							.setContent("타자의 타격을 방해하는 행위. 포수의 미트(mitt)가 타자의 배트(bat)에 닿는 것을 비롯해 대부분 포수에 의해 일어난다. 이 경우 타자는 1루로 자동 진출하게 된다.");
				if (this.$.playRule.getValue() == "페이크번트")
					this.$.potest1
							.setContent("타자가 번트 자세를 취했다가 실제로는 번트를 하지 않는 위장 동작이다. 야수들의 수비 영역을 앞쪽으로 끌어당긴 다음 빈 공간으로 공을 쳐내기 위한 작전이다.");
				if (this.$.playRule.getValue() == "드래그번트")
					this.$.potest1
							.setContent("타자가 의도적으로 1루 파울 라인을 따라 공이 굴러 가게 하는 번트이다.");
				if (this.$.playRule.getValue() == "배터러너")
					this.$.potest1
							.setContent("1. 타격을 마치고 출루하여 1루 주자가 되기 직전까지의 타자를 의미한다. 2. 타격 후 주자로서 1루 2루 3루를 모두 돌고 홈으로 돌아올 때까지의 상태를 의미한다. 3. 방금 아웃이 된 타자를 의미한다.");
				if (this.$.playRule.getValue() == "굿바이히트")
					this.$.potest1
							.setContent("끝내기 안타. 9회말에 경기의 승패를 결정 짓는 득점을 올리게 한 안타를 말한다.");
				if (this.$.playRule.getValue() == "주루사")
					this.$.potest1
							.setContent("베이스에 있던 주자가 투수 또는 포수의 견제구나 주루 플레이 미숙으로 아웃되는 것을 말한다.");
				if (this.$.playRule.getValue() == "구스터프")
					this.$.potest1
							.setContent("위기 상황 또는 승부를 결정 짓는 상황에서 투수가 던지는 비장의 무기를 말한다. 흔히 위닝샷이라고 하지만 이는 일본식 영어이다.");
				if (this.$.playRule.getValue() == "인터벌")
					this.$.potest1.setContent("투구와 투구 사이의 시간적 간격");
				if (this.$.playRule.getValue() == "미기")
					this.$.potest1
							.setContent("수비수가 잡기 어려운 공을 멋지게 처리했을 때와 같은 훌륭한 기술을 말한다. 영어로는 파인 플레이또는 나이스 플레이라고 한다.");
				if (this.$.playRule.getValue() == "세이브포인트")
					this.$.potest1.setContent("투수의 구원승 수와 세이브 수를 합한 수를 말한다.");
				if (this.$.playRule.getValue() == "로킹모션")
					this.$.potest1
							.setContent("투수가 공을 던지기 전에 팔과 몸을 좌우로 또는 위아래로 흔드는 동작이다.");
				if (this.$.playRule.getValue() == "스핏볼")
					this.$.potest1
							.setContent("야구의 반칙투구 중 하나. 투수가 공을 던질 때 손가락에 침 또는 바셀린처럼 미끌거리는 점액질을 발라서 공을 꽉 움켜쥔 후 던지는 투구 또는 이때 던지는 공을 가리킨다.");
				if (this.$.playRule.getValue() == "딜레이드스틸")
					this.$.potest1
							.setContent("포수가 투수에게 공을 되돌려주는 순간을 노려 스타트하는 도루. 고의적으로 스타트를 늦춤으로써(delay) 상대 팀의 허점을 노리는 도루 방법이다.");
				if (this.$.playRule.getValue() == "번트앤드런")
					this.$.potest1
							.setContent("주자와 타자가 사전에 약속을 한 상태에서 주자는 다음 베이스를 향해 무조건 달리고 타자는 어떤 공이든 반드시 번트를 해서 주자의 진루를 돕는 전술이다.");

			},
			closeDrawer : function(inSender, inEvent) {
				this.$.drawer3.setOpen(false);
				return true;
			},
			checkButton : function(inSender, inEvent) {
				if (inEvent.checked) {
					this.$.checkButton.setContent("상세 정보");
				} else {
					this.$.checkButton.setContent("요약 정보");
				}
			},
/*내부디비이용
			timeChanged : function(inSender, inEvent) {
				this.$.videoPosition.setContent(Math.floor(inEvent.currentTime)
						+ "s");
				if (Math.floor(inEvent.currentTime) == 0) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("assets/playerButton.png");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("박경수");
					this.$.rPlay14.setContent("");
				}
				if (Math.floor(inEvent.currentTime) == 73) {
					this.$.rPlay111.setDisabled(false);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("assets/playerButton.png");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("assets/playerButton.png");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("박경수");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("손주인");
					this.$.rPlay14.setContent("");
				}
				if (Math.floor(inEvent.currentTime) == 179) {
					this.$.rPlay111.setDisabled(false);
					this.$.rPlay222.setDisabled(false);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(true);
					this.$.rPlay14.setDisabled(false);
					this.$.rPlay111.setSrc("assets/playerButton.png");
					this.$.rPlay222.setSrc("assets/playerButton.png");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("assets/playerButton.png");
					this.$.rPlay111.setContent("손주인");
					this.$.rPlay222.setContent("박경수");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("박용택");
				}
				if (Math.floor(inEvent.currentTime) == 376) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(false);
					this.$.rPlay333.setDisabled(false);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("assets/playerButton.png");
					this.$.rPlay333.setSrc("assets/playerButton.png");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("손주인");
					this.$.rPlay333.setContent("박경수");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("이병규");
				}
				if (Math.floor(inEvent.currentTime) == 567) {
					this.$.rPlay111.setDisabled(false);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(true);
					this.$.rPlay14.setDisabled(false);
					this.$.rPlay111.setSrc("assets/playerButton.png");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("assets/playerButton.png");
					this.$.rPlay111.setContent("이병규");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("이진영");
				}
				if (Math.floor(inEvent.currentTime) == 648) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(false);
					this.$.rPlay333.setDisabled(false);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("assets/playerButton.png");
					this.$.rPlay333.setSrc("assets/playerButton.png");
					this.$.rPlay12.setSrc("assets/playerButton.png");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("이진영");
					this.$.rPlay333.setContent("이병규");
					this.$.rPlay12.setContent("정의윤");
					this.$.rPlay14.setContent("");
				}
				if (Math.floor(inEvent.currentTime) == 818) {
					this.$.rPlay111.setDisabled(false);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("assets/playerButton.png");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("assets/playerButton.png");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("정의윤");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("최승준");
					this.$.rPlay14.setContent("");
				}
				if (Math.floor(inEvent.currentTime) == 965) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("assets/playerButton.png");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("최경");
					this.$.rPlay14.setContent("");
				}
				if (Math.floor(inEvent.currentTime) == 1135) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(true);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("");
					this.$.rPlay1.setContent("정의윤");
					this.$.rPlay1.setSrc("assets/playerButton.png");
					this.$.rPlay2.setContent("박용택");
					this.$.rPlay2.setSrc("assets/playerButton.png");
					this.$.rPlay3.setContent("이병규");
					this.$.rPlay3.setSrc("assets/playerButton.png");
					this.$.rPlay4.setContent("손주인");
					this.$.rPlay4.setSrc("assets/playerButton.png");
					this.$.rPlay6.setContent("박경수");
					this.$.rPlay6.setSrc("assets/playerButton.png");
					this.$.rPlay8.setContent("오지환");
					this.$.rPlay8.setSrc("assets/playerButton.png");
					this.$.rPlay9.setContent("김용의");
					this.$.rPlay9.setSrc("assets/playerButton.png");
					this.$.rPlay11.setContent("우규민");
					this.$.rPlay11.setSrc("assets/playerButton.png");
					this.$.rPlay13.setContent("최경철");
					this.$.rPlay13.setSrc("assets/playerButton.png");
				}
				if (Math.floor(inEvent.currentTime) == 1210) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(true);
					this.$.rPlay14.setDisabled(false);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("assets/playerButton1.png");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("이승엽");
				}
				if (Math.floor(inEvent.currentTime) == 1305) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("assets/playerButton1.png");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("조동찬");
					this.$.rPlay14.setContent("");
				}
				if (Math.floor(inEvent.currentTime) == 1387) {
					this.$.rPlay111.setDisabled(false);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(true);
					this.$.rPlay14.setDisabled(false);
					this.$.rPlay111.setSrc("assets/playerButton1.png");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("assets/playerButton1.png");
					this.$.rPlay111.setContent("조동찬");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("박해민");
				}
				if (Math.floor(inEvent.currentTime) == 1590) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(true);
					this.$.rPlay14.setDisabled(false);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("assets/playerButton.png");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("오지환");
					this.$.rPlayer1.setContent("최형우");
					this.$.rPlay1.setSrc("assets/playerButton1.png");
					this.$.rPlay2.setContent("박해민");
					this.$.rPlay2.setSrc("assets/playerButton1.png");
					this.$.rPlay3.setContent("박한이");
					this.$.rPlay3.setSrc("assets/playerButton1.png");
					this.$.rPlay4.setContent("조동찬");
					this.$.rPlay4.setSrc("assets/playerButton1.png");
					this.$.rPlay6.setContent("나바로");
					this.$.rPlay6.setSrc("assets/playerButton1.png");
					this.$.rPlay8.setContent("김상수");
					this.$.rPlay8.setSrc("assets/playerButton1.png");
					this.$.rPlay9.setContent("채태인");
					this.$.rPlay9.setSrc("assets/playerButton1.png");
					this.$.rPlay11.setContent("차우찬");
					this.$.rPlay11.setSrc("assets/playerButton1.png");
					this.$.rPlay13.setContent("이지영");
					this.$.rPlay13.setSrc("assets/playerButton1.png");
				}
				if (Math.floor(inEvent.currentTime) == 1607) {
					this.$.rPlay111.setDisabled(false);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("assets/playerButton.png");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("assets/playerButton.png");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("오지환");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("박경수");
					this.$.rPlay14.setContent("");
				}
				if (Math.floor(inEvent.currentTime) == 1830) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(false);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("assets/playerButton.png");
					this.$.rPlay12.setSrc("assets/playerButton.png");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("박경수");
					this.$.rPlay12.setContent("손주인");
					this.$.rPlay14.setContent("");
				}
				if (Math.floor(inEvent.currentTime) == 1995) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(false);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(true);
					this.$.rPlay14.setDisabled(false);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("assets/playerButton.png");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("assets/playerButton.png");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("손주인");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("박용택");
				}
				if (Math.floor(inEvent.currentTime) == 2183) {
					this.$.rPlay111.setDisabled(true);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(false);
					this.$.rPlay12.setDisabled(true);
					this.$.rPlay14.setDisabled(false);
					this.$.rPlay111.setSrc("");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("assets/playerButton.png");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("assets/playerButton.png");
					this.$.rPlay111.setContent("");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("손주인");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("이병규");
				}
				if (Math.floor(inEvent.currentTime) == 2293) {
					this.$.rPlay111.setDisabled(false);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(false);
					this.$.rPlay12.setDisabled(true);
					this.$.rPlay14.setDisabled(false);
					this.$.rPlay111.setSrc("assets/playerButton.png");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("assets/playerButton.png");
					this.$.rPlay12.setSrc("");
					this.$.rPlay14.setSrc("assets/playerButton.png");
					this.$.rPlay111.setContent("이병규");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("손주인");
					this.$.rPlay12.setContent("");
					this.$.rPlay14.setContent("이진영");
				}
				if (Math.floor(inEvent.currentTime) == 2370) {
					this.$.rPlay111.setDisabled(false);
					this.$.rPlay222.setDisabled(true);
					this.$.rPlay333.setDisabled(true);
					this.$.rPlay12.setDisabled(false);
					this.$.rPlay14.setDisabled(true);
					this.$.rPlay111.setSrc("assets/playerButton.png");
					this.$.rPlay222.setSrc("");
					this.$.rPlay333.setSrc("");
					this.$.rPlay12.setSrc("assets/playerButton.png");
					this.$.rPlay14.setSrc("");
					this.$.rPlay111.setContent("이병규");
					this.$.rPlay222.setContent("");
					this.$.rPlay333.setContent("");
					this.$.rPlay12.setContent("정의윤");
					this.$.rPlay14.setContent("");
				}
				return true;
			},

			dbCreate : function(inSender, inEvent) {
				this.$.drawer3.setOpen(false);
				var a = "이태원, NC, 1986년 03월 17일, 포수(우투우타), 177cm/78kg, 0.121, 62, 69, 5, 8, 0, 4, 0, 2, 20, 0, 0.147, 0, 0.0%, 0.299, 0.105, /file/person/middle/60102.jpg ////김응민, 두산, 1991년 10월 22일, 포수(우투우타), 178cm/90kg, 0.200, 11, 12, 0, 2, 0, 3, 0, 0, 1, 0, 0.333, 0, 0.0%, 0.533, 0.500, /file/person/middle/60288.jpg ////이창섭, NC, 1987년 03월 10일, 내야수(우투우타), 182cm/77kg, 0.000, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/60304.jpg ////송주호, 한화, 1988년 07월 11일, 외야수(우투좌타), 181cm/75kg, 0.136, 17, 26, 5, 3, 0, 2, 1, 4, 7, 0, 0.269, 0, 100.0%, 0.405, 0.200, /file/person/middle/60404.jpg ////백상원, 삼성, 1988년 01월 02일, 내야수(우투좌타), 177cm/76kg, 0.182, 31, 26, 7, 4, 0, 2, 0, 3, 3, 0, 0.269, 3, 0.0%, 0.451, 0.222, /file/person/middle/60456.jpg ////문선엽, 삼성, 1991년 07월 31일, 외야수(좌투좌타), 175cm/80kg, 0.000, 3, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/60464.jpg ////정훈, 롯데, 1987년 07월 18일, 내야수(우투우타), 181cm/84kg, 0.294, 124, 558, 89, 140, 3, 58, 8, 62, 105, 10, 0.386, 13, 66.7%, 0.784, 0.306, /file/person/middle/60523.jpg ////오승택, 롯데, 1991년 11월 18일, 내야수(우투우타), 186cm/85kg, 0.244, 57, 50, 10, 11, 1, 5, 2, 5, 18, 0, 0.320, 3, 66.7%, 0.698, 0.250, /file/person/middle/60558.jpg ////이상호, NC, 1989년 02월 05일, 내야수(우투우타), 180cm/82kg, 0.216, 96, 54, 30, 11, 1, 5, 11, 2, 10, 1, 0.241, 1, 68.8%, 0.555, 0.125, /file/person/middle/60566.jpg ////이종환, KIA, 1986년 05월 08일, 외야수(좌투좌타), 175cm/90kg, 0.287, 92, 138, 14, 35, 2, 23, 0, 11, 33, 1, 0.353, 1, 0.0%, 0.763, 0.213, /file/person/middle/60667.jpg ////이상훈, 삼성, 1987년 05월 04일, 외야수(우투우타), 171cm/75kg, 0.000, 10, 11, 0, 0, 0, 0, 0, 1, 2, 0, 0.091, 0, 0.0%, 0.091, 0.000, /file/person/middle/60724.jpg ////김정훈, SK, 1987년 05월 23일, 포수(우투우타), 182cm/93kg, 0.000, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/60860.jpg ////안정광, SK, 1989년 11월 29일, 내야수(우투우타), 184cm/82kg, 0.207, 15, 32, 4, 6, 0, 4, 1, 3, 9, 0, 0.281, 0, 50.0%, 0.522, 0.143, /file/person/middle/60865.jpg ////조성우, SK, 1988년 02월 08일, 내야수(우투우타), 188cm/91kg, 0.000, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/60891.jpg ////최영진, 두산, 1988년 05월 10일, 내야수(우투우타), 185cm/87kg, 0.143, 4, 7, 1, 1, 0, 1, 0, 0, 1, 0, 0.143, 0, 0.0%, 0.286, 0.000, /file/person/middle/61197.jpg ////고종욱, 넥센, 1989년 01월 11일, 외야수(우투좌타), 184cm/83kg, 0.000, 8, 14, 2, 0, 0, 0, 1, 2, 4, 0, 0.143, 0, 100.0%, 0.143, 0.000, /file/person/middle/61353.jpg ////김도현, SK, 1992년 10월 23일, 외야수(우투우타), 182cm/95kg, 0.083, 7, 13, 0, 1, 0, 0, 0, 0, 3, 1, 0.154, 0, 0.0%, 0.237, 0.000, /file/person/middle/61360.jpg ////문우람, 넥센, 1992년 03월 08일, 외야수(우투좌타), 177cm/83kg, 0.284, 122, 368, 46, 92, 6, 43, 5, 33, 54, 10, 0.352, 4, 62.5%, 0.790, 0.280, /file/person/middle/61363.jpg ////홍성갑, 넥센, 1992년 08월 02일, 내야수(우투우타), 181cm/80kg, 0.500, 2, 2, 0, 1, 0, 1, 0, 0, 1, 0, 0.500, 0, 0.0%, 1.000, 1.000, /file/person/middle/61366.jpg ////김헌곤, 삼성, 1988년 11월 09일, 외야수(우투우타), 174cm/81kg, 0.260, 76, 143, 17, 32, 3, 20, 2, 13, 20, 1, 0.359, 1, 50.0%, 0.782, 0.382, /file/person/middle/61404.jpg ////김정혁, 삼성, 1985년 08월 03일, 내야수(우투우타), 182cm/82kg, 0.000, 2, 5, 2, 0, 0, 0, 0, 0, 1, 1, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/61463.jpg ////김민하, 롯데, 1989년 02월 25일, 외야수(우투우타), 183cm/82kg, 0.266, 55, 98, 23, 25, 2, 7, 3, 2, 34, 0, 0.289, 1, 75.0%, 0.704, 0.160, /file/person/middle/61554.jpg ////김사훈, 롯데, 1987년 06월 18일, 포수(우투우타), 174cm/86kg, 0.333, 4, 3, 0, 1, 0, 1, 0, 0, 1, 0, 0.333, 0, 0.0%, 0.666, 1.000, /file/person/middle/61591.jpg ////강경학, 한화, 1992년 08월 11일, 내야수(우투좌타), 180cm/72kg, 0.221, 41, 103, 11, 19, 1, 7, 0, 13, 28, 1, 0.337, 6, 0.0%, 0.686, 0.227, /file/person/middle/61700.jpg ////박계현, SK, 1992년 03월 08일, 내야수(우투좌타), 181cm/77kg, 0.341, 62, 144, 23, 44, 0, 13, 7, 8, 24, 2, 0.371, 6, 70.0%, 0.782, 0.243, /file/person/middle/61893.jpg ////김영관, LG, 1985년 07월 20일, 내야수(우투우타), 178cm/80kg, 0.167, 13, 7, 2, 1, 0, 1, 0, 1, 4, 0, 0.286, 1, 0.0%, 0.786, 0.500, /file/person/middle/62007.jpg ////오두철, KIA, 1985년 04월 25일, 포수(우투우타), 178cm/78kg, 0.000, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/62022.jpg ////조윤준, LG, 1989년 08월 30일, 포수(우투우타), 185cm/95kg, 0.143, 5, 9, 1, 1, 0, 0, 0, 1, 1, 0, 0.250, 1, 0.0%, 0.393, 0.000, /file/person/middle/62147.jpg ////박찬도, 삼성, 1989년 02월 22일, 외야수(우투좌타), 185cm/75kg, 0.500, 28, 8, 8, 4, 0, 3, 6, 0, 2, 0, 0.500, 0, 75.0%, 1.000, 0.500, /file/person/middle/62409.jpg ////박해민, 삼성, 1990년 02월 24일, 외야수(우투좌타), 180cm/75kg, 0.297, 119, 373, 65, 92, 1, 31, 36, 37, 45, 4, 0.381, 3, 81.8%, 0.749, 0.318, /file/person/middle/62415.jpg ////신본기, 롯데, 1989년 03월 21일, 내야수(우투우타), 178cm/82kg, 0.230, 63, 130, 20, 26, 4, 13, 1, 5, 25, 0, 0.282, 4, 50.0%, 0.689, 0.176, /file/person/middle/62556.jpg ////윤완주, KIA, 1989년 02월 25일, 내야수(우투우타), 178cm/77kg, 1.000, 5, 3, 0, 2, 0, 0, 0, 1, 0, 0, 1.000, 0, 0.0%, 2.000, 0.000, /file/person/middle/62668.jpg ////엄태용, 한화, 1994년 02월 24일, 포수(우투우타), 183cm/85kg, 0.176, 17, 17, 2, 3, 0, 2, 0, 0, 5, 0, 0.176, 0, 0.0%, 0.411, 0.375, /file/person/middle/62748.jpg ////한동민, SK, 1989년 08월 09일, 외야수(우투좌타), 190cm/95kg, 0.252, 67, 163, 17, 36, 3, 24, 0, 11, 53, 1, 0.323, 1, 0.0%, 0.750, 0.256, /file/person/middle/62895.jpg ////박민우, NC, 1993년 02월 06일, 내야수(우투좌타), 185cm/80kg, 0.298, 118, 491, 87, 124, 1, 40, 50, 56, 89, 5, 0.392, 10, 83.3%, 0.791, 0.380, /file/person/middle/62907.jpg ////김태우, NC, 1989년 07월 23일, 포수(우투우타), 180cm/80kg, 0.200, 5, 5, 0, 1, 0, 0, 0, 0, 3, 0, 0.200, 0, 0.0%, 0.600, 0.000, /file/person/middle/62927.jpg ////노진혁, NC, 1989년 07월 15일, 내야수(우투좌타), 184cm/80kg, 0.188, 26, 16, 3, 3, 1, 2, 0, 0, 7, 0, 0.188, 0, 0.0%, 0.563, 0.250, /file/person/middle/62931.jpg ////김성욱, NC, 1993년 05월 01일, 외야수(우투우타), 181cm/83kg, 0.174, 26, 26, 6, 4, 1, 1, 1, 3, 9, 0, 0.269, 0, 100.0%, 0.617, 0.000, /file/person/middle/62934.jpg ////나성범, NC, 1989년 10월 03일, 외야수(좌투좌타), 183cm/100kg, 0.329, 123, 536, 88, 157, 30, 101, 14, 42, 128, 4, 0.400, 3, 73.7%, 0.997, 0.390, /file/person/middle/62947.jpg ////마낙길, NC, 1989년 06월 22일, 외야수(우투우타), 178cm/75kg, 0.000, 2, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0.500, 0, 0.0%, 0.500, 0.000, /file/person/middle/62967.jpg ////황목치승, LG, 1985년 06월 21일, 내야수(우투우타), 173cm/68kg, 0.304, 37, 51, 11, 14, 0, 3, 2, 1, 9, 1, 0.319, 4, 50.0%, 0.667, 0.286, /file/person/middle/63077.jpg ////김재민, LG, 1991년 01월 28일, 포수(우투우타), 177cm/84kg, 0.063, 38, 18, 0, 1, 0, 0, 0, 2, 4, 1, 0.167, 1, 0.0%, 0.230, 0.000, /file/person/middle/63125.jpg ////이흥련, 삼성, 1989년 05월 16일, 포수(우투우타), 183cm/85kg, 0.227, 88, 155, 21, 30, 1, 17, 1, 14, 24, 0, 0.325, 4, 100.0%, 0.620, 0.293, /file/person/middle/63440.jpg ////정현, 삼성, 1994년 06월 01일, 내야수(우투우타), 181cm/80kg, 0.000, 5, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/63450.jpg ////임종혁, 롯데, 1990년 04월 07일, 내야수(우투좌타), 177cm/75kg, 0.222, 21, 25, 3, 4, 0, 1, 2, 5, 8, 0, 0.417, 0, 50.0%, 0.639, 0.200, /file/person/middle/63554.jpg ////백민기, 롯데, 1990년 09월 16일, 외야수(우투우타), 185cm/86kg, 0.000, 9, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/63559.jpg ////고도현, 롯데, 1990년 10월 13일, 외야수(우투우타), 182cm/97kg, 0.286, 4, 7, 0, 2, 0, 1, 0, 0, 2, 0, 0.286, 0, 0.0%, 0.572, 0.200, /file/person/middle/63563.jpg ////조홍석, 롯데, 1990년 02월 23일, 외야수(우투좌타), 175cm/70kg, 0.000, 2, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/63593.jpg ////김광연, KIA, 1991년 11월 13일, 내야수(우투좌타), 182cm/73kg, 0.000, 8, 10, 0, 0, 0, 1, 0, 0, 3, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/63601.jpg ////고영우, KIA, 1990년 01월 08일, 내야수(우투양타), 183cm/80kg, 0.083, 21, 27, 4, 2, 0, 1, 0, 1, 6, 0, 0.148, 4, 0.0%, 0.315, 0.000, /file/person/middle/63636.jpg ////장운호, 한화, 1994년 02월 20일, 외야수(우투우타), 183cm/85kg, 0.266, 39, 70, 7, 17, 1, 7, 1, 1, 10, 1, 0.288, 2, 50.0%, 0.616, 0.286, /file/person/middle/63700.jpg ////노수광, 한화, 1990년 08월 06일, 외야수(우투좌타), 180cm/75kg, 0.000, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/63704.jpg ////조정원, 한화, 1990년 08월 10일, 내야수(우투우타), 176cm/76kg, 0.125, 20, 58, 2, 7, 0, 6, 0, 0, 10, 2, 0.123, 6, 0.0%, 0.302, 0.143, /file/person/middle/63792.jpg ////최재원, NC, 1990년 07월 30일, 외야수(우투우타), 183cm/81kg, 0.000, 2, 2, 1, 0, 0, 0, 0, 1, 1, 0, 0.500, 1, 0.0%, 0.500, 0.000, /file/person/middle/63913.jpg ////김준완, NC, 1991년 01월 20일, 외야수(우투좌타), 174cm/73kg, 0.500, 6, 5, 1, 2, 0, 0, 1, 1, 1, 0, 0.600, 0, 100.0%, 1.100, 0.000, /file/person/middle/63920.jpg ////권희동, NC, 1990년 12월 30일, 외야수(우투우타), 177cm/85kg, 0.285, 101, 252, 39, 63, 7, 36, 6, 25, 43, 4, 0.363, 2, 85.7%, 0.806, 0.288, /file/person/middle/63963.jpg ////조쉬벨, LG, 1986년 11월 13일, 내야수(우투양타), 190cm/104kg, 0.267, 63, 275, 33, 64, 10, 39, 3, 30, 56, 10, 0.345, 5, 100.0%, 0.778, 0.225, /file/person/middle/64154.jpg ////스나이더, LG, 1982년 05월 25일, 외야수(좌투좌타), 192cm/96kg, 0.210, 37, 113, 17, 21, 4, 17, 0, 9, 31, 0, 0.292, 1, 0.0%, 0.692, 0.250, /file/person/middle/64158.jpg ////칸투, 두산, 1982년 01월 30일, 내야수(우투우타), 192cm/92kg, 0.309, 111, 419, 56, 116, 18, 72, 1, 34, 85, 11, 0.375, 8, 100.0%, 0.899, 0.258, /file/person/middle/64203.jpg ////이성곤, 두산, 1992년 03월 25일, 내야수(우투좌타), 186cm/93kg, 0.250, 4, 8, 1, 2, 0, 0, 0, 0, 4, 0, 0.250, 1, 0.0%, 0.625, 0.000, /file/person/middle/64266.jpg ////김하성, 넥센, 1995년 10월 17일, 내야수(우투우타), 175cm/76kg, 0.188, 60, 59, 17, 9, 2, 7, 4, 8, 13, 2, 0.298, 1, 57.1%, 0.694, 0.182, /file/person/middle/64300.jpg ////로티노, 넥센, 1980년 04월 07일, 외야수(우투우타), 183cm/86kg, 0.306, 79, 247, 30, 66, 2, 22, 2, 29, 22, 7, 0.389, 3, 100.0%, 0.806, 0.266, /file/person/middle/64302.jpg ////나바로, 삼성, 1987년 10월 31일, 내야수(우투우타), 183cm/93kg, 0.308, 125, 602, 118, 154, 31, 98, 25, 96, 71, 7, 0.417, 11, 73.5%, 0.969, 0.407, /file/person/middle/64440.jpg ////김희석, 삼성, 1990년 02월 25일, 포수(우투우타), 179cm/75kg, 0.000, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/64492.jpg ////김재현, 삼성, 1991년 08월 30일, 내야수(우투우타), 176cm/73kg, 0.143, 8, 8, 0, 1, 0, 1, 0, 0, 4, 1, 0.250, 0, 0.0%, 0.393, 0.000, /file/person/middle/64499.jpg ////히메네스, 롯데, 1982년 05월 07일, 내야수(좌투좌타), 192cm/127kg, 0.315, 80, 303, 42, 82, 14, 61, 0, 41, 57, 11, 0.409, 6, 0.0%, 0.944, 0.305, /file/person/middle/64553.jpg ////이창진, 롯데, 1991년 03월 04일, 내야수(우투우타), 175cm/80kg, 0.500, 4, 2, 1, 1, 0, 0, 0, 0, 1, 0, 0.500, 0, 0.0%, 1.500, 0.000, /file/person/middle/64560.jpg ////강한울, KIA, 1991년 09월 12일, 내야수(우투좌타), 181cm/66kg, 0.264, 93, 224, 32, 55, 0, 14, 4, 8, 44, 1, 0.294, 11, 66.7%, 0.621, 0.226, /file/person/middle/64610.jpg ////박찬호, KIA, 1995년 06월 05일, 내야수(우투우타), 178cm/71kg, 0.091, 17, 23, 3, 2, 0, 0, 0, 1, 10, 0, 0.130, 1, 0.0%, 0.266, 0.000, /file/person/middle/64646.jpg ////박준태, KIA, 1991년 07월 26일, 외야수(우투좌타), 181cm/75kg, 0.262, 32, 55, 6, 11, 0, 2, 2, 8, 18, 1, 0.436, 1, 100.0%, 0.698, 0.400, /file/person/middle/64657.jpg ////필, KIA, 1984년 09월 09일, 내야수(우투우타), 193cm/102kg, 0.309, 92, 389, 64, 112, 19, 66, 10, 22, 65, 10, 0.352, 6, 90.9%, 0.893, 0.252, /file/person/middle/64699.jpg ////이창열, 한화, 1991년 09월 06일, 내야수(우투좌타), 175cm/70kg, 0.190, 22, 25, 5, 4, 0, 3, 1, 3, 6, 0, 0.320, 0, 100.0%, 0.701, 0.333, /file/person/middle/64706.jpg ////박준혁, 한화, 1991년 01월 09일, 외야수(우투좌타), 188cm/91kg, 0.000, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/64724.jpg ////피에, 한화, 1985년 02월 08일, 외야수(좌투좌타), 188cm/86kg, 0.326, 119, 498, 61, 145, 17, 92, 9, 41, 60, 11, 0.373, 6, 45.0%, 0.897, 0.315, /file/person/middle/64746.jpg ////김민수, 한화, 1991년 03월 02일, 포수(우투우타), 177cm/80kg, 0.149, 35, 78, 5, 11, 0, 5, 0, 3, 21, 1, 0.182, 5, 0.0%, 0.344, 0.286, /file/person/middle/64793.jpg ////스캇, SK, 1978년 06월 25일, 외야수(우투좌타), 182cm/100kg, 0.267, 33, 130, 17, 28, 6, 17, 0, 20, 18, 1, 0.392, 0, 0.0%, 0.897, 0.211, /file/person/middle/64864.jpg ////강민국, NC, 1992년 01월 10일, 내야수(우투우타), 176cm/80kg, 0.000, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0.000, 2, 0.0%, 0.000, 0.000, /file/person/middle/64906.jpg ////테임즈, NC, 1986년 11월 10일, 내야수(우투좌타), 183cm/95kg, 0.343, 125, 514, 95, 152, 37, 121, 11, 58, 99, 6, 0.422, 13, 84.6%, 1.110, 0.388, /file/person/middle/64914.jpg ////오윤, 넥센, 1981년 09월 08일, 외야수(우투우타), 185cm/105kg, 0.000, 6, 7, 1, 0, 0, 0, 0, 1, 3, 0, 0.143, 0, 0.0%, 0.143, 0.000, /file/person/middle/70312.jpg ////김주찬, KIA, 1981년 03월 25일, 외야수(우투우타), 183cm/85kg, 0.346, 100, 442, 72, 138, 9, 46, 22, 31, 48, 11, 0.397, 3, 68.8%, 0.911, 0.326, /file/person/middle/70410.jpg ////박기혁, 롯데, 1981년 06월 04일, 내야수(우투우타), 179cm/77kg, 0.157, 22, 63, 8, 8, 0, 2, 0, 10, 11, 1, 0.295, 2, 0.0%, 0.491, 0.200, /file/person/middle/70553.jpg ////김상훈, KIA, 1977년 10월 27일, 포수(우투우타), 180cm/92kg, 0.100, 9, 12, 0, 1, 0, 0, 0, 2, 3, 0, 0.250, 0, 0.0%, 0.350, 0.200, /file/person/middle/70612.jpg ////김상현, SK, 1980년 11월 12일, 외야수(우투우타), 190cm/95kg, 0.263, 42, 87, 8, 21, 5, 20, 1, 5, 22, 2, 0.310, 2, 50.0%, 0.823, 0.286, /file/person/middle/70646.jpg ////이범호, KIA, 1981년 11월 25일, 내야수(우투우타), 183cm/93kg, 0.269, 105, 406, 47, 94, 19, 82, 2, 41, 89, 9, 0.360, 9, 50.0%, 0.857, 0.293, /file/person/middle/70756.jpg ////이성우, KIA, 1981년 09월 01일, 포수(우투우타), 180cm/83kg, 0.234, 63, 134, 11, 29, 1, 9, 1, 3, 18, 9, 0.258, 5, 100.0%, 0.540, 0.122, /file/person/middle/71184.jpg ////김원섭, KIA, 1978년 12월 18일, 외야수(우투좌타), 180cm/75kg, 0.225, 44, 101, 21, 18, 0, 13, 3, 17, 13, 2, 0.354, 0, 75.0%, 0.654, 0.185, /file/person/middle/71207.jpg ////장민석, 두산, 1982년 05월 09일, 외야수(좌투좌타), 180cm/73kg, 0.200, 45, 75, 16, 14, 0, 8, 5, 3, 16, 0, 0.243, 0, 83.3%, 0.529, 0.250, /file/person/middle/71347.jpg ////박한이, 삼성, 1979년 01월 28일, 외야수(좌투좌타), 182cm/91kg, 0.331, 125, 567, 83, 156, 9, 80, 7, 61, 74, 9, 0.409, 5, 53.8%, 0.852, 0.385, /file/person/middle/71432.jpg ////최준석, 롯데, 1983년 02월 15일, 내야수(우투우타), 187cm/130kg, 0.286, 121, 460, 54, 106, 23, 90, 1, 81, 88, 14, 0.411, 0, 100.0%, 0.918, 0.300, /file/person/middle/71552.jpg ////박종윤, 롯데, 1982년 04월 11일, 내야수(좌투좌타), 188cm/92kg, 0.309, 123, 476, 59, 136, 7, 73, 0, 22, 65, 10, 0.343, 5, 0.0%, 0.788, 0.324, /file/person/middle/71562.jpg ////이승화, 롯데, 1982년 05월 04일, 외야수(우투좌타), 182cm/85kg, 0.225, 44, 103, 14, 18, 0, 10, 0, 14, 22, 1, 0.351, 0, 0.0%, 0.576, 0.320, /file/person/middle/71565.jpg ////김경언, 한화, 1982년 12월 07일, 외야수(좌투좌타), 188cm/84kg, 0.313, 89, 355, 43, 94, 8, 52, 1, 40, 42, 8, 0.397, 2, 25.0%, 0.864, 0.349, /file/person/middle/71610.jpg ////김태균, 한화, 1982년 05월 29일, 내야수(우투우타), 185cm/110kg, 0.365, 118, 508, 66, 154, 18, 84, 0, 70, 73, 18, 0.463, 3, 0.0%, 1.027, 0.354, /file/person/middle/71752.jpg ////박준서, 롯데, 1981년 12월 11일, 내야수(우투양타), 180cm/80kg, 0.232, 74, 118, 9, 23, 0, 13, 0, 14, 24, 1, 0.325, 2, 0.0%, 0.668, 0.200, /file/person/middle/71815.jpg ////김강민, SK, 1982년 09월 13일, 외야수(우투우타), 182cm/85kg, 0.302, 113, 483, 86, 130, 16, 82, 32, 43, 91, 12, 0.368, 3, 86.5%, 0.863, 0.358, /file/person/middle/71837.jpg ////정상호, SK, 1982년 12월 24일, 포수(우투우타), 187cm/98kg, 0.238, 100, 269, 36, 56, 9, 39, 0, 18, 67, 3, 0.305, 11, 0.0%, 0.722, 0.317, /file/person/middle/71842.jpg ////조동화, SK, 1981년 03월 22일, 외야수(좌투좌타), 175cm/74kg, 0.262, 125, 522, 74, 116, 2, 52, 37, 43, 72, 8, 0.330, 1, 84.1%, 0.655, 0.328, /file/person/middle/71848.jpg ////박재상, SK, 1982년 07월 20일, 외야수(좌투좌타), 178cm/80kg, 0.190, 38, 77, 9, 12, 1, 6, 2, 9, 13, 1, 0.311, 0, 66.7%, 0.613, 0.286, /file/person/middle/71857.jpg ////박용택, LG, 1979년 04월 21일, 외야수(우투좌타), 185cm/90kg, 0.343, 124, 549, 71, 159, 9, 73, 11, 75, 65, 15, 0.430, 1, 55.0%, 0.891, 0.398, /file/person/middle/72133.jpg ////추승우, 한화, 1979년 09월 24일, 외야수(우투좌타), 187cm/74kg, 0.167, 9, 10, 3, 1, 0, 0, 0, 4, 2, 0, 0.500, 0, 0.0%, 0.667, 0.000, /file/person/middle/72139.jpg ////고영민, 두산, 1984년 02월 08일, 내야수(우투우타), 182cm/73kg, 0.287, 52, 108, 18, 27, 1, 7, 1, 11, 18, 3, 0.355, 2, 50.0%, 0.695, 0.200, /file/person/middle/72214.jpg ////김민우, KIA, 1979년 03월 21일, 내야수(우투우타), 184cm/84kg, 0.251, 87, 210, 34, 42, 3, 15, 7, 36, 46, 2, 0.387, 8, 77.8%, 0.752, 0.233, /file/person/middle/72303.jpg ////허웅, SK, 1983년 09월 17일, 포수(우투우타), 177cm/84kg, 0.333, 5, 7, 1, 2, 0, 1, 0, 0, 3, 0, 0.286, 1, 0.0%, 0.619, 0.000, /file/person/middle/72324.jpg ////현재윤, LG, 1979년 07월 08일, 포수(우투우타), 174cm/80kg, 0.533, 14, 16, 3, 8, 0, 2, 0, 1, 3, 0, 0.563, 2, 0.0%, 1.230, 0.333, /file/person/middle/72427.jpg ////최형우, 삼성, 1983년 12월 16일, 외야수(우투좌타), 179cm/86kg, 0.356, 113, 493, 92, 153, 31, 100, 4, 50, 62, 11, 0.426, 1, 66.7%, 1.075, 0.320, /file/person/middle/72443.jpg ////손주인, LG, 1983년 12월 01일, 내야수(우투우타), 179cm/82kg, 0.290, 120, 400, 50, 99, 5, 30, 4, 30, 42, 8, 0.358, 11, 66.7%, 0.725, 0.288, /file/person/middle/72456.jpg ////조동찬, 삼성, 1983년 07월 27일, 내야수(우투우타), 180cm/80kg, 0.270, 31, 87, 8, 20, 1, 6, 5, 10, 21, 5, 0.360, 2, 71.4%, 0.725, 0.125, /file/person/middle/72466.jpg ////문규현, 롯데, 1983년 07월 05일, 내야수(우투우타), 184cm/87kg, 0.281, 77, 275, 33, 66, 2, 27, 5, 26, 30, 7, 0.350, 7, 71.4%, 0.724, 0.268, /file/person/middle/72546.jpg ////신종길, KIA, 1983년 12월 31일, 외야수(우투좌타), 183cm/85kg, 0.292, 103, 399, 60, 105, 9, 51, 20, 29, 92, 2, 0.345, 4, 74.1%, 0.812, 0.233, /file/person/middle/72559.jpg ////이현곤, NC, 1980년 02월 21일, 내야수(우투우타), 183cm/83kg, 0.091, 7, 12, 0, 1, 0, 0, 0, 0, 3, 1, 0.091, 0, 0.0%, 0.182, 1.000, /file/person/middle/72606.jpg ////이대수, SK, 1981년 08월 21일, 내야수(우투우타), 175cm/76kg, 0.160, 15, 28, 1, 4, 0, 2, 0, 2, 5, 2, 0.250, 1, 0.0%, 0.410, 0.111, /file/person/middle/72860.jpg ////박경수, LG, 1984년 03월 31일, 내야수(우투우타), 178cm/80kg, 0.228, 87, 201, 33, 37, 2, 19, 7, 25, 33, 6, 0.344, 10, 87.5%, 0.659, 0.235, /file/person/middle/73113.jpg ////이성열, 넥센, 1984년 07월 13일, 외야수(우투좌타), 185cm/102kg, 0.258, 96, 291, 46, 66, 14, 39, 2, 24, 80, 0, 0.341, 1, 40.0%, 0.802, 0.203, /file/person/middle/73136.jpg ////이대형, KIA, 1983년 07월 19일, 외야수(좌투좌타), 184cm/78kg, 0.323, 126, 505, 75, 149, 1, 40, 22, 35, 57, 5, 0.372, 3, 59.5%, 0.773, 0.298, /file/person/middle/73153.jpg ////나주환, SK, 1984년 06월 14일, 내야수(우투우타), 180cm/84kg, 0.273, 127, 478, 64, 115, 7, 51, 10, 36, 101, 8, 0.332, 10, 76.9%, 0.714, 0.209, /file/person/middle/73209.jpg ////손시헌, NC, 1980년 10월 19일, 내야수(우투우타), 172cm/73kg, 0.293, 97, 361, 39, 90, 5, 39, 2, 34, 53, 10, 0.368, 6, 66.7%, 0.782, 0.303, /file/person/middle/73213.jpg ////지석훈, NC, 1984년 03월 17일, 내야수(우투우타), 181cm/74kg, 0.274, 114, 238, 26, 58, 6, 34, 1, 16, 46, 8, 0.340, 5, 50.0%, 0.802, 0.365, /file/person/middle/73306.jpg ////이종욱, NC, 1980년 06월 18일, 외야수(좌투좌타), 176cm/78kg, 0.288, 124, 495, 73, 126, 6, 78, 15, 40, 60, 5, 0.342, 3, 78.9%, 0.753, 0.348, /file/person/middle/73339.jpg ////이택근, 넥센, 1980년 07월 10일, 외야수(우투우타), 183cm/89kg, 0.306, 122, 527, 87, 135, 21, 91, 11, 51, 43, 10, 0.386, 5, 57.9%, 0.912, 0.308, /file/person/middle/73342.jpg ////강명구, 삼성, 1980년 10월 25일, 내야수(우투양타), 181cm/70kg, 0.000, 21, 4, 8, 0, 0, 0, 3, 0, 3, 0, 0.000, 0, 75.0%, 0.000, 0.000, /file/person/middle/73409.jpg ////박정준, NC, 1984년 06월 26일, 외야수(좌투좌타), 185cm/87kg, 0.241, 39, 60, 8, 13, 1, 5, 0, 5, 9, 2, 0.305, 0, 0.0%, 0.620, 0.300, /file/person/middle/73543.jpg ////차일목, KIA, 1981년 01월 26일, 포수(우투우타), 176cm/81kg, 0.189, 94, 224, 17, 35, 2, 18, 0, 24, 28, 7, 0.286, 1, 0.0%, 0.540, 0.161, /file/person/middle/73602.jpg ////서동욱, 넥센, 1984년 03월 21일, 내야수(우투양타), 188cm/99kg, 0.147, 39, 41, 2, 5, 0, 0, 1, 3, 12, 1, 0.237, 0, 100.0%, 0.413, 0.111, /file/person/middle/73606.jpg ////한상훈, 한화, 1980년 06월 03일, 내야수(우투좌타), 176cm/78kg, 0.286, 77, 203, 23, 50, 1, 21, 3, 24, 40, 4, 0.372, 5, 75.0%, 0.732, 0.362, /file/person/middle/73703.jpg ////이양기, 한화, 1981년 01월 31일, 외야수(우투우타), 184cm/90kg, 0.264, 45, 139, 13, 33, 0, 6, 1, 10, 19, 3, 0.326, 0, 100.0%, 0.630, 0.219, /file/person/middle/73725.jpg ////최경철, LG, 1980년 08월 15일, 포수(우투우타), 180cm/86kg, 0.214, 117, 334, 36, 62, 4, 39, 4, 22, 67, 7, 0.280, 3, 66.7%, 0.573, 0.259, /file/person/middle/73824.jpg ////박기남, KIA, 1981년 08월 14일, 내야수(우투우타), 175cm/80kg, 0.287, 90, 202, 21, 49, 3, 21, 2, 22, 25, 5, 0.371, 5, 28.6%, 0.763, 0.313, /file/person/middle/74103.jpg ////이학준, 한화, 1985년 02월 25일, 내야수(우투우타), 182cm/84kg, 0.286, 45, 119, 14, 30, 0, 9, 4, 10, 19, 3, 0.345, 6, 80.0%, 0.669, 0.242, /file/person/middle/74148.jpg ////김태완, 삼성, 1981년 09월 19일, 내야수(우투우타), 174cm/81kg, 0.347, 65, 108, 14, 33, 2, 15, 0, 8, 17, 4, 0.421, 0, 0.0%, 0.905, 0.412, /file/person/middle/74158.jpg ////이용규, 한화, 1985년 08월 26일, 외야수(좌투좌타), 175cm/70kg, 0.288, 104, 418, 62, 103, 0, 20, 12, 52, 46, 5, 0.385, 0, 52.2%, 0.729, 0.208, /file/person/middle/74163.jpg ////김재호, 두산, 1985년 03월 21일, 내야수(우투우타), 181cm/75kg, 0.252, 122, 421, 50, 86, 3, 54, 2, 54, 59, 14, 0.348, 11, 20.0%, 0.674, 0.298, /file/person/middle/74206.jpg ////윤석민, 넥센, 1985년 09월 04일, 내야수(우투우타), 180cm/88kg, 0.267, 99, 307, 30, 75, 10, 43, 0, 18, 47, 11, 0.314, 3, 0.0%, 0.730, 0.244, /file/person/middle/74215.jpg ////용덕한, 롯데, 1981년 04월 09일, 포수(우투우타), 176cm/82kg, 0.305, 59, 92, 13, 25, 1, 11, 0, 3, 22, 4, 0.326, 1, 0.0%, 0.728, 0.200, /file/person/middle/74223.jpg ////유한준, 넥센, 1981년 07월 01일, 외야수(우투우타), 186cm/97kg, 0.316, 122, 469, 71, 128, 20, 91, 2, 46, 53, 9, 0.384, 1, 66.7%, 0.925, 0.328, /file/person/middle/74339.jpg ////조평호, NC, 1985년 08월 07일, 내야수(우투우타), 188cm/84kg, 0.000, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/74358.jpg ////이정식, 삼성, 1981년 11월 02일, 포수(우투우타), 183cm/90kg, 0.000, 7, 5, 0, 0, 0, 0, 0, 1, 1, 0, 0.200, 0, 0.0%, 0.200, 0.000, /file/person/middle/74402.jpg ////안태영, 넥센, 1985년 03월 15일, 내야수(우투좌타), 186cm/93kg, 0.270, 41, 80, 12, 17, 1, 9, 1, 7, 21, 3, 0.425, 0, 100.0%, 0.838, 0.308, /file/person/middle/74460.jpg ////박석민, 삼성, 1985년 06월 22일, 내야수(우투우타), 178cm/88kg, 0.315, 110, 425, 77, 112, 27, 72, 0, 54, 62, 12, 0.419, 12, 0.0%, 1.020, 0.298, /file/person/middle/74465.jpg ////강민호, 롯데, 1985년 08월 18일, 포수(우투우타), 186cm/100kg, 0.229, 98, 360, 37, 71, 16, 40, 1, 33, 92, 6, 0.325, 3, 33.3%, 0.767, 0.169, /file/person/middle/74540.jpg ////김주형, KIA, 1985년 12월 15일, 내야수(우투우타), 186cm/100kg, 0.245, 64, 176, 16, 37, 7, 26, 0, 17, 19, 3, 0.326, 4, 0.0%, 0.737, 0.244, /file/person/middle/74605.jpg ////최진행, 한화, 1985년 08월 17일, 외야수(우투우타), 188cm/100kg, 0.261, 99, 328, 32, 78, 12, 45, 1, 23, 79, 8, 0.317, 3, 33.3%, 0.752, 0.225, /file/person/middle/74729.jpg ////고동진, 한화, 1980년 04월 01일, 외야수(좌투좌타), 183cm/85kg, 0.241, 73, 213, 21, 45, 1, 14, 0, 18, 35, 2, 0.310, 2, 0.0%, 0.593, 0.173, /file/person/middle/74745.jpg ////박노민, 한화, 1985년 08월 18일, 포수(우투우타), 182cm/93kg, 0.000, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/74756.jpg ////임훈, SK, 1985년 07월 17일, 외야수(좌투좌타), 186cm/86kg, 0.314, 90, 330, 47, 87, 2, 27, 9, 37, 61, 4, 0.407, 2, 81.8%, 0.797, 0.262, /file/person/middle/74823.jpg ////박정권, SK, 1981년 07월 21일, 내야수(좌투좌타), 187cm/93kg, 0.310, 120, 499, 81, 140, 27, 109, 7, 41, 106, 6, 0.367, 5, 43.8%, 0.938, 0.338, /file/person/middle/74846.jpg ////박병호, 넥센, 1986년 07월 10일, 내야수(우투우타), 185cm/107kg, 0.303, 128, 571, 126, 139, 52, 124, 8, 96, 142, 13, 0.433, 4, 72.7%, 1.119, 0.292, /file/person/middle/75125.jpg ////정의윤, LG, 1986년 07월 25일, 외야수(우투우타), 185cm/87kg, 0.264, 97, 292, 29, 69, 7, 38, 5, 21, 40, 9, 0.328, 1, 55.6%, 0.726, 0.267, /file/person/middle/75151.jpg ////오재일, 두산, 1986년 10월 29일, 내야수(좌투좌타), 187cm/95kg, 0.242, 75, 155, 10, 32, 3, 18, 1, 20, 39, 1, 0.342, 4, 50.0%, 0.706, 0.214, /file/person/middle/75334.jpg ////허준, NC, 1981년 07월 20일, 포수(우투우타), 182cm/97kg, 0.172, 28, 36, 2, 5, 0, 1, 0, 5, 10, 0, 0.294, 0, 0.0%, 0.570, 0.100, /file/person/middle/75344.jpg ////조영훈, NC, 1982년 11월 12일, 내야수(좌투좌타), 185cm/90kg, 0.261, 92, 124, 15, 29, 6, 22, 1, 10, 26, 1, 0.325, 3, 50.0%, 0.784, 0.194, /file/person/middle/75441.jpg ////이원석, 두산, 1986년 10월 21일, 내야수(우투우타), 182cm/82kg, 0.251, 79, 255, 29, 58, 5, 25, 0, 19, 53, 2, 0.308, 6, 0.0%, 0.676, 0.200, /file/person/middle/75566.jpg ////전현태, 한화, 1986년 07월 09일, 내야수(우투좌타), 184cm/87kg, 0.100, 10, 10, 2, 1, 0, 0, 0, 0, 3, 0, 0.100, 0, 0.0%, 0.200, 0.000, /file/person/middle/75706.jpg ////정근우, 한화, 1982년 10월 02일, 내야수(우투우타), 172cm/80kg, 0.295, 125, 549, 91, 137, 6, 44, 32, 66, 56, 11, 0.391, 12, 91.4%, 0.807, 0.248, /file/person/middle/75808.jpg ////최정, SK, 1987년 02월 28일, 내야수(우투우타), 180cm/84kg, 0.305, 82, 361, 65, 94, 14, 76, 7, 37, 69, 9, 0.397, 12, 77.8%, 0.903, 0.432, /file/person/middle/75847.jpg ////이병규, LG, 1983년 10월 09일, 외야수(좌투좌타), 178cm/90kg, 0.306, 116, 450, 66, 110, 16, 87, 5, 74, 78, 7, 0.423, 2, 33.3%, 0.956, 0.327, /file/person/middle/76100.jpg ////최승준, LG, 1988년 01월 11일, 내야수(우투우타), 188cm/88kg, 0.263, 20, 40, 4, 10, 2, 11, 0, 2, 11, 1, 0.300, 0, 0.0%, 0.800, 0.444, /file/person/middle/76158.jpg ////양의지, 두산, 1987년 06월 05일, 포수(우투우타), 179cm/85kg, 0.294, 97, 338, 40, 87, 10, 46, 4, 24, 34, 8, 0.360, 10, 57.1%, 0.840, 0.322, /file/person/middle/76232.jpg ////민병헌, 두산, 1987년 03월 10일, 외야수(우투우타), 178cm/78kg, 0.345, 124, 527, 85, 162, 12, 79, 16, 37, 63, 11, 0.395, 0, 66.7%, 0.895, 0.360, /file/person/middle/76249.jpg ////최주환, 두산, 1988년 02월 28일, 내야수(우투좌타), 178cm/73kg, 0.280, 82, 211, 38, 53, 4, 31, 1, 14, 25, 1, 0.333, 3, 50.0%, 0.751, 0.288, /file/person/middle/76267.jpg ////김현수, 두산, 1988년 01월 12일, 외야수(우투좌타), 188cm/100kg, 0.322, 125, 528, 75, 149, 17, 90, 2, 53, 45, 10, 0.396, 1, 100.0%, 0.884, 0.316, /file/person/middle/76290.jpg ////신현철, SK, 1987년 11월 02일, 내야수(우투우타), 179cm/84kg, 0.262, 60, 75, 10, 17, 1, 3, 1, 8, 16, 3, 0.342, 8, 100.0%, 0.696, 0.200, /file/person/middle/76304.jpg ////황재균, 롯데, 1987년 07월 28일, 내야수(우투우타), 183cm/90kg, 0.321, 128, 550, 66, 156, 12, 76, 17, 53, 86, 8, 0.388, 16, 63.0%, 0.863, 0.343, /file/person/middle/76313.jpg ////강정호, 넥센, 1987년 04월 05일, 내야수(우투우타), 183cm/96kg, 0.356, 117, 501, 103, 149, 40, 117, 3, 68, 106, 8, 0.459, 9, 50.0%, 1.198, 0.361, /file/person/middle/76325.jpg ////유재신, 넥센, 1987년 11월 21일, 내야수(우투우타), 179cm/70kg, 0.000, 23, 2, 8, 0, 0, 0, 6, 0, 0, 0, 0.000, 0, 75.0%, 0.000, 0.000, /file/person/middle/76368.jpg ////김문호, 롯데, 1987년 06월 22일, 외야수(좌투좌타), 184cm/90kg, 0.214, 71, 222, 28, 41, 2, 27, 4, 19, 51, 2, 0.301, 4, 100.0%, 0.634, 0.258, /file/person/middle/76509.jpg ////손용석, 롯데, 1987년 04월 13일, 내야수(우투우타), 175cm/84kg, 0.250, 3, 4, 1, 1, 0, 0, 0, 0, 1, 0, 0.250, 0, 0.0%, 0.500, 0.000, /file/person/middle/76536.jpg ////이승재, NC, 1983년 06월 09일, 포수(우투우타), 182cm/88kg, 0.091, 12, 11, 1, 1, 0, 3, 0, 0, 3, 0, 0.091, 1, 0.0%, 0.364, 0.250, /file/person/middle/76553.jpg ////황동채, 롯데, 1983년 07월 04일, 외야수(우투우타), 180cm/73kg, 0.200, 12, 5, 0, 1, 0, 0, 0, 0, 1, 0, 0.200, 0, 0.0%, 0.400, 0.000, /file/person/middle/76562.jpg ////정범모, 한화, 1987년 03월 26일, 포수(우투우타), 184cm/94kg, 0.253, 85, 212, 18, 47, 6, 23, 1, 17, 39, 8, 0.314, 8, 100.0%, 0.717, 0.224, /file/person/middle/76720.jpg ////김태완, 한화, 1984년 01월 27일, 외야수(우투우타), 189cm/105kg, 0.258, 89, 214, 26, 48, 7, 39, 0, 24, 51, 10, 0.350, 1, 0.0%, 0.764, 0.296, /file/person/middle/76746.jpg ////송광민, 한화, 1983년 06월 24일, 내야수(우투우타), 184cm/90kg, 0.316, 103, 421, 52, 123, 11, 58, 3, 26, 73, 15, 0.357, 23, 60.0%, 0.825, 0.281, /file/person/middle/76753.jpg ////김성현, SK, 1987년 03월 09일, 내야수(우투우타), 172cm/70kg, 0.284, 122, 476, 73, 113, 5, 43, 6, 55, 51, 7, 0.376, 18, 66.7%, 0.753, 0.250, /file/person/middle/76802.jpg ////이재원, SK, 1988년 02월 24일, 포수(우투우타), 185cm/98kg, 0.337, 120, 484, 48, 139, 12, 83, 3, 49, 66, 14, 0.413, 7, 100.0%, 0.920, 0.336, /file/person/middle/76812.jpg ////이명기, SK, 1987년 12월 26일, 외야수(좌투좌타), 183cm/80kg, 0.368, 83, 314, 54, 105, 4, 28, 8, 21, 47, 7, 0.414, 3, 57.1%, 0.884, 0.313, /file/person/middle/76849.jpg ////홍명찬, SK, 1987년 01월 19일, 내야수(우투좌타), 187cm/90kg, 0.063, 10, 16, 0, 1, 0, 1, 0, 0, 3, 0, 0.063, 0, 0.0%, 0.126, 0.167, /file/person/middle/76854.jpg ////김재현, SK, 1987년 11월 07일, 외야수(우투양타), 174cm/70kg, 0.200, 60, 28, 12, 5, 0, 6, 8, 0, 10, 0, 0.250, 0, 88.9%, 0.490, 0.300, /file/person/middle/76869.jpg ////박용근, LG, 1984년 01월 21일, 외야수(우투우타), 172cm/76kg, 0.211, 27, 25, 8, 4, 0, 0, 1, 6, 6, 1, 0.400, 2, 100.0%, 0.716, 0.000, /file/person/middle/77104.jpg ////허도환, 넥센, 1984년 07월 31일, 포수(우투우타), 176cm/87kg, 0.220, 93, 220, 18, 40, 2, 12, 0, 20, 52, 6, 0.322, 5, 0.0%, 0.619, 0.119, /file/person/middle/77243.jpg ////오재원, 두산, 1985년 02월 09일, 내야수(우투좌타), 185cm/75kg, 0.318, 110, 420, 60, 114, 5, 40, 33, 50, 61, 7, 0.404, 7, 82.5%, 0.855, 0.223, /file/person/middle/77248.jpg ////임태준, 넥센, 1988년 04월 23일, 포수(우투우타), 177cm/86kg, 0.083, 17, 14, 1, 1, 0, 0, 0, 2, 6, 1, 0.214, 0, 0.0%, 0.297, 0.000, /file/person/middle/77326.jpg ////김종호, NC, 1984년 05월 31일, 외야수(좌투좌타), 183cm/82kg, 0.262, 113, 347, 58, 83, 2, 25, 22, 19, 55, 4, 0.316, 6, 75.9%, 0.657, 0.272, /file/person/middle/77454.jpg ////채태인, 삼성, 1982년 10월 11일, 내야수(좌투좌타), 187cm/94kg, 0.317, 124, 541, 69, 156, 14, 99, 1, 41, 91, 8, 0.368, 2, 100.0%, 0.852, 0.362, /file/person/middle/77463.jpg ////임익준, 한화, 1988년 03월 15일, 내야수(우투우타), 180cm/83kg, 0.300, 6, 10, 2, 3, 0, 0, 0, 0, 3, 0, 0.300, 2, 0.0%, 0.600, 0.000, /file/person/middle/77464.jpg ////손아섭, 롯데, 1988년 03월 18일, 외야수(우투좌타), 174cm/88kg, 0.362, 122, 570, 105, 175, 18, 80, 10, 80, 78, 7, 0.456, 4, 76.9%, 0.994, 0.336, /file/person/middle/77532.jpg ////김민성, 넥센, 1988년 12월 17일, 내야수(우투우타), 181cm/94kg, 0.292, 116, 486, 60, 128, 12, 77, 3, 30, 80, 10, 0.349, 8, 75.0%, 0.799, 0.292, /file/person/middle/77564.jpg ////이준수, 한화, 1988년 06월 17일, 포수(우투우타), 176cm/80kg, 0.000, 3, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1.000, 0, 0.0%, 1.000, 0.000, /file/person/middle/77654.jpg ////김주현, 롯데, 1988년 04월 16일, 내야수(우투우타), 182cm/85kg, 0.167, 9, 12, 2, 2, 0, 1, 0, 0, 4, 0, 0.167, 0, 0.0%, 0.417, 0.500, /file/person/middle/77669.jpg ////박윤, SK, 1988년 03월 07일, 내야수(좌투좌타), 181cm/90kg, 0.267, 6, 15, 0, 4, 0, 2, 0, 0, 5, 0, 0.267, 0, 0.0%, 0.534, 0.500, /file/person/middle/77848.jpg ////김태군, NC, 1989년 12월 30일, 포수(우투우타), 182cm/92kg, 0.262, 109, 322, 28, 77, 0, 23, 0, 12, 47, 9, 0.297, 6, 0.0%, 0.603, 0.207, /file/person/middle/78122.jpg ////서건창, 넥센, 1989년 08월 22일, 내야수(우투좌타), 176cm/84kg, 0.370, 128, 616, 135, 201, 7, 67, 48, 59, 47, 1, 0.438, 7, 73.8%, 0.985, 0.390, /file/person/middle/78168.jpg ////김용의, LG, 1985년 08월 20일, 내야수(우투좌타), 187cm/74kg, 0.240, 103, 208, 31, 44, 0, 22, 9, 19, 46, 2, 0.317, 6, 56.3%, 0.607, 0.302, /file/person/middle/78217.jpg ////김재환, 두산, 1988년 09월 22일, 포수(우투좌타), 183cm/90kg, 0.306, 52, 96, 12, 26, 3, 13, 1, 11, 12, 3, 0.385, 2, 100.0%, 0.867, 0.261, /file/person/middle/78224.jpg ////최재훈, 두산, 1989년 08월 27일, 포수(우투우타), 178cm/76kg, 0.241, 48, 125, 9, 27, 1, 10, 0, 5, 22, 3, 0.287, 2, 0.0%, 0.600, 0.176, /file/person/middle/78288.jpg ////우동균, 삼성, 1989년 12월 03일, 외야수(우투좌타), 175cm/68kg, 0.231, 30, 43, 2, 9, 0, 7, 0, 4, 8, 1, 0.302, 0, 0.0%, 0.558, 0.333, /file/person/middle/78454.jpg ////이영욱, 삼성, 1985년 10월 11일, 외야수(좌투좌타), 180cm/85kg, 0.208, 40, 64, 16, 11, 0, 6, 6, 7, 16, 0, 0.323, 1, 85.7%, 0.587, 0.273, /file/person/middle/78467.jpg ////전준우, 롯데, 1986년 02월 25일, 외야수(우투우타), 184cm/91kg, 0.292, 113, 470, 69, 121, 14, 66, 7, 34, 71, 10, 0.356, 2, 63.6%, 0.814, 0.293, /file/person/middle/78513.jpg ////하준호, 롯데, 1989년 04월 29일, 외야수(좌투좌타), 174cm/78kg, 0.233, 31, 88, 18, 17, 1, 11, 1, 8, 29, 0, 0.356, 1, 50.0%, 0.698, 0.364, /file/person/middle/78517.jpg ////김대우, 롯데, 1984년 07월 26일, 외야수(우투좌타), 190cm/94kg, 0.240, 18, 26, 0, 6, 0, 2, 1, 1, 12, 0, 0.269, 0, 100.0%, 0.509, 0.143, /file/person/middle/78536.jpg ////장성우, 롯데, 1990년 01월 17일, 포수(우투우타), 187cm/100kg, 0.274, 43, 99, 10, 23, 1, 9, 0, 12, 19, 1, 0.364, 0, 0.0%, 0.721, 0.120, /file/person/middle/78548.jpg ////황진수, 롯데, 1989년 02월 15일, 내야수(우투양타), 180cm/79kg, 0.000, 5, 5, 0, 0, 0, 0, 0, 0, 1, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/78566.jpg ////김선빈, KIA, 1989년 12월 18일, 내야수(우투우타), 165cm/70kg, 0.290, 33, 98, 7, 27, 0, 9, 2, 3, 10, 3, 0.313, 1, 100.0%, 0.646, 0.290, /file/person/middle/78603.jpg ////나지완, KIA, 1985년 05월 19일, 외야수(우투우타), 182cm/95kg, 0.312, 118, 470, 64, 124, 19, 79, 3, 54, 97, 9, 0.404, 0, 50.0%, 0.914, 0.281, /file/person/middle/78629.jpg ////백용환, KIA, 1989년 03월 20일, 포수(우투우타), 180cm/84kg, 0.177, 47, 86, 8, 14, 4, 10, 0, 5, 28, 1, 0.226, 2, 0.0%, 0.580, 0.179, /file/person/middle/78643.jpg ////이희근, 한화, 1985년 06월 07일, 포수(우투우타), 179cm/83kg, 0.231, 6, 14, 2, 3, 0, 2, 0, 0, 6, 0, 0.286, 1, 0.0%, 0.671, 0.250, /file/person/middle/78739.jpg ////정현석, 한화, 1984년 03월 01일, 외야수(우투우타), 182cm/93kg, 0.225, 53, 118, 15, 23, 3, 6, 0, 11, 21, 6, 0.319, 0, 0.0%, 0.662, 0.100, /file/person/middle/78745.jpg ////김다원, KIA, 1985년 09월 17일, 외야수(우투우타), 185cm/88kg, 0.270, 86, 210, 21, 51, 5, 17, 2, 12, 53, 3, 0.329, 1, 50.0%, 0.758, 0.176, /file/person/middle/78765.jpg ////모창민, NC, 1985년 05월 08일, 내야수(우투우타), 188cm/89kg, 0.263, 122, 468, 62, 110, 16, 72, 14, 37, 82, 13, 0.320, 10, 82.4%, 0.733, 0.263, /file/person/middle/78813.jpg ////윤요섭, LG, 1982년 03월 30일, 포수(우투우타), 180cm/96kg, 0.221, 27, 74, 4, 15, 0, 2, 0, 2, 15, 1, 0.250, 1, 0.0%, 0.529, 0.053, /file/person/middle/78892.jpg ////오지환, LG, 1990년 03월 12일, 내야수(우투좌타), 186cm/80kg, 0.262, 113, 464, 72, 104, 8, 56, 28, 51, 102, 8, 0.354, 20, 70.0%, 0.767, 0.359, /file/person/middle/79109.jpg ////문선재, LG, 1990년 05월 20일, 외야수(우투우타), 184cm/80kg, 0.150, 22, 24, 4, 3, 0, 4, 3, 3, 5, 0, 0.250, 0, 100.0%, 0.450, 0.500, /file/person/middle/79113.jpg ////강지광, 넥센, 1990년 10월 23일, 외야수(우투우타), 181cm/100kg, 0.000, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/79130.jpg ////채은성, LG, 1990년 02월 06일, 내야수(우투우타), 186cm/92kg, 0.277, 62, 197, 18, 44, 1, 15, 5, 21, 36, 3, 0.385, 1, 62.5%, 0.762, 0.265, /file/person/middle/79192.jpg ////박건우, 두산, 1990년 09월 08일, 외야수(우투우타), 184cm/80kg, 0.180, 47, 66, 7, 11, 0, 3, 1, 4, 13, 0, 0.231, 2, 100.0%, 0.510, 0.167, /file/person/middle/79215.jpg ////정수빈, 두산, 1990년 10월 07일, 외야수(좌투좌타), 175cm/70kg, 0.306, 128, 507, 79, 132, 6, 49, 32, 41, 68, 8, 0.379, 1, 86.5%, 0.801, 0.361, /file/person/middle/79231.jpg ////김진형, 두산, 1990년 06월 07일, 외야수(우투우타), 179cm/83kg, 0.237, 28, 42, 5, 9, 0, 5, 0, 3, 7, 0, 0.293, 2, 0.0%, 0.556, 0.273, /file/person/middle/79234.jpg ////허경민, 두산, 1990년 08월 26일, 내야수(우투우타), 176cm/69kg, 0.247, 105, 233, 33, 49, 0, 10, 6, 21, 21, 7, 0.335, 3, 60.0%, 0.633, 0.143, /file/person/middle/79240.jpg ////김지수, 넥센, 1986년 08월 23일, 내야수(우투우타), 180cm/81kg, 0.174, 28, 29, 2, 4, 0, 3, 1, 4, 2, 1, 0.296, 1, 100.0%, 0.470, 0.200, /file/person/middle/79300.jpg ////박헌도, 넥센, 1987년 01월 01일, 외야수(우투우타), 180cm/91kg, 0.245, 47, 113, 12, 23, 4, 14, 2, 9, 19, 0, 0.327, 0, 100.0%, 0.721, 0.115, /file/person/middle/79356.jpg ////박동원, 넥센, 1990년 04월 07일, 포수(우투우타), 179cm/92kg, 0.253, 76, 198, 32, 44, 6, 26, 0, 13, 41, 7, 0.321, 7, 0.0%, 0.741, 0.238, /file/person/middle/79365.jpg ////김상수, 삼성, 1990년 03월 23일, 내야수(우투우타), 175cm/68kg, 0.288, 128, 493, 74, 123, 5, 63, 53, 41, 77, 7, 0.354, 14, 89.8%, 0.761, 0.312, /file/person/middle/79402.jpg ////오정복, NC, 1986년 10월 13일, 외야수(우투우타), 177cm/75kg, 0.232, 47, 79, 9, 16, 0, 7, 2, 7, 9, 2, 0.304, 0, 100.0%, 0.594, 0.286, /file/person/middle/79453.jpg ////이지영, 삼성, 1986년 02월 27일, 포수(우투우타), 178cm/83kg, 0.278, 99, 299, 37, 74, 3, 32, 3, 14, 33, 5, 0.315, 6, 50.0%, 0.687, 0.275, /file/person/middle/79456.jpg ////정형식, 삼성, 1991년 01월 28일, 외야수(우투좌타), 178cm/73kg, 0.170, 52, 121, 9, 18, 1, 6, 4, 12, 24, 2, 0.258, 1, 66.7%, 0.475, 0.107, /file/person/middle/79459.jpg ////양종민, 두산, 1990년 10월 09일, 내야수(우투우타), 181cm/81kg, 0.000, 5, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0.000, 0, 0.0%, 0.000, 0.000, /file/person/middle/79530.jpg ////오장훈, 두산, 1984년 05월 19일, 내야수(우투우타), 186cm/100kg, 0.200, 1, 5, 0, 1, 0, 0, 0, 0, 3, 1, 0.200, 1, 0.0%, 0.400, 0.333, /file/person/middle/79544.jpg ////안치홍, KIA, 1990년 07월 02일, 내야수(우투우타), 178cm/80kg, 0.339, 126, 479, 65, 147, 18, 88, 19, 33, 65, 11, 0.390, 9, 76.0%, 0.934, 0.338, /file/person/middle/79608.jpg ////김회성, 한화, 1985년 12월 04일, 내야수(우투우타), 190cm/92kg, 0.236, 59, 162, 21, 33, 6, 18, 0, 14, 45, 4, 0.321, 4, 0.0%, 0.757, 0.167, /file/person/middle/79705.jpg ////이호준, NC, 1976년 02월 08일, 내야수(우투우타), 187cm/95kg, 0.271, 122, 500, 59, 115, 23, 78, 3, 67, 104, 15, 0.371, 0, 37.5%, 0.852, 0.241, /file/person/middle/94629.jpg ////권용관, LG, 1976년 11월 19일, 내야수(우투우타), 180cm/80kg, 0.118, 8, 21, 0, 2, 0, 2, 0, 1, 5, 1, 0.158, 1, 0.0%, 0.334, 0.000, /file/person/middle/95158.jpg ////이승엽, 삼성, 1976년 08월 18일, 내야수(좌투좌타), 183cm/87kg, 0.308, 127, 548, 83, 156, 32, 101, 5, 40, 77, 10, 0.358, 0, 83.3%, 0.915, 0.293, /file/person/middle/95436.jpg ////박진만, SK, 1976년 11월 30일, 내야수(우투우타), 178cm/82kg, 0.250, 19, 35, 3, 8, 0, 2, 0, 2, 8, 0, 0.294, 0, 0.0%, 0.575, 0.200, /file/person/middle/96307.jpg ////장성호, 롯데, 1977년 10월 18일, 내야수(좌투좌타), 183cm/92kg, 0.000, 5, 5, 0, 0, 0, 0, 0, 3, 0, 1, 0.600, 0, 0.0%, 0.600, 0.000, /file/person/middle/96610.jpg ////이병규, LG, 1974년 10월 25일, 외야수(좌투좌타), 185cm/85kg, 0.251, 62, 207, 23, 49, 2, 25, 1, 8, 21, 5, 0.288, 0, 50.0%, 0.601, 0.263, /file/person/middle/97109.jpg ////진갑용, 삼성, 1974년 05월 08일, 포수(우투우타), 182cm/90kg, 0.412, 11, 17, 2, 7, 0, 4, 0, 0, 1, 0, 0.412, 1, 0.0%, 0.824, 0.667, /file/person/middle/97202.jpg ////조인성, 한화, 1975년 05월 25일, 포수(우투우타), 183cm/99kg, 0.226, 75, 185, 16, 37, 7, 34, 0, 14, 40, 5, 0.290, 5, 0.0%, 0.686, 0.263, /file/person/middle/98144.jpg ////홍성흔, 두산, 1977년 02월 28일, 내야수(우투우타), 180cm/96kg, 0.315, 124, 521, 63, 141, 20, 82, 5, 64, 79, 13, 0.405, 0, 62.5%, 0.902, 0.323, /file/person/middle/99222.jpg ////임재철, LG, 1976년 04월 08일, 외야수(우투우타), 182cm/88kg, 0.242, 53, 76, 13, 16, 0, 3, 0, 5, 16, 1, 0.306, 2, 0.0%, 0.564, 0.043, /file/person/middle/99507.jpg ////조성환, 롯데, 1976년 12월 23일, 내야수(우투우타), 180cm/83kg, 0.000, 6, 8, 1, 0, 0, 0, 0, 1, 2, 1, 0.125, 0, 0.0%, 0.125, 0.000, /file/person/middle/99543.jpg ////정성훈, LG, 1980년 06월 27일, 내야수(우투우타), 182cm/83kg, 0.329, 112, 455, 71, 126, 13, 59, 10, 59, 56, 13, 0.424, 5, 83.3%, 0.925, 0.259, /file/person/middle/99606.jpg ////이진영, LG, 1980년 06월 15일, 외야수(좌투좌타), 185cm/90kg, 0.325, 119, 468, 53, 134, 6, 65, 4, 45, 48, 10, 0.384, 0, 57.1%, 0.80";
				var b = "장민익, 두산, 1991년 02월 05일, 투수(좌투좌타), 207cm/99kg, 3.38, 8, 0, 0, 0, 1, 5 1/3, 7, 0, 2, 1, 0, 1.69, 0.350, 0, /file/person/middle/60255.jpg ////이재학, NC, 1990년 10월 04일, 투수(우언우타), 181cm/80kg, 4.21, 29, 10, 9, 0, 0, 156, 152, 16, 68, 131, 0, 1.41, 0.264, 13, /file/person/middle/60263.jpg ////정대현, 두산, 1991년 07월 19일, 투수(좌투좌타), 186cm/93kg, 7.90, 12, 1, 1, 0, 0, 27 1/3, 29, 2, 25, 21, 0, 1.98, 0.271, 0, /file/person/middle/60264.jpg ////문성현, 넥센, 1991년 11월 09일, 투수(우투우타), 180cm/87kg, 5.91, 20, 9, 4, 0, 1, 85 1/3, 96, 12, 48, 51, 0, 1.69, 0.278, 4, /file/person/middle/60336.jpg ////김대유, SK, 1991년 05월 08일, 투수(좌투좌타), 186cm/90kg, 10.03, 9, 0, 1, 0, 0, 11 2/3, 12, 1, 19, 14, 0, 2.66, 0.279, 0, /file/person/middle/60337.jpg ////김현우, 삼성, 1988년 01월 21일, 투수(우투우타), 185cm/111kg, 2.32, 29, 1, 0, 0, 1, 31, 25, 4, 8, 29, 0, 1.06, 0.225, 0, /file/person/middle/60457.jpg ////심동섭, KIA, 1991년 09월 20일, 투수(좌투좌타), 185cm/85kg, 5.52, 57, 1, 5, 4, 9, 45 2/3, 44, 3, 28, 46, 2, 1.58, 0.260, 0, /file/person/middle/60636.jpg ////이태양, 한화, 1990년 07월 03일, 투수(우투좌타), 192cm/97kg, 5.29, 30, 7, 10, 0, 0, 153, 183, 27, 41, 96, 0, 1.46, 0.298, 14, /file/person/middle/60768.jpg ////문광은, SK, 1987년 11월 09일, 투수(우투우타), 180cm/85kg, 6.34, 9, 1, 2, 0, 0, 32 2/3, 40, 7, 10, 23, 0, 1.53, 0.294, 0, /file/person/middle/60845.jpg ////이상백, SK, 1987년 03월 10일, 투수(우투우타), 180cm/92kg, 4.40, 16, 0, 0, 1, 0, 14 1/3, 13, 3, 6, 14, 0, 1.33, 0.232, 0, /file/person/middle/60864.jpg ////니퍼트, 두산, 1981년 05월 06일, 투수(우투우타), 203cm/103kg, 3.81, 30, 14, 7, 0, 1, 179 1/3, 186, 17, 48, 158, 0, 1.30, 0.269, 16, /file/person/middle/61240.jpg ////이정호, 두산, 1992년 04월 11일, 투수(우언우타), 184cm/88kg, 0.00, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0.00, 0.000, 0, /file/person/middle/61262.jpg ////최현정, KIA, 1992년 12월 03일, 투수(좌투좌타), 178cm/75kg, 9.82, 8, 0, 0, 0, 0, 7 1/3, 12, 1, 4, 2, 0, 2.18, 0.375, 0, /file/person/middle/61267.jpg ////강동연, 두산, 1992년 12월 18일, 투수(우투우타), 195cm/94kg, 27.00, 1, 0, 0, 0, 0, 1, 5, 1, 0, 3, 0, 5.00, 0.625, 0, /file/person/middle/61295.jpg ////이태양, NC, 1993년 01월 28일, 투수(우언좌타), 183cm/82kg, 6.46, 9, 0, 1, 0, 1, 15 1/3, 19, 3, 13, 9, 0, 2.09, 0.317, 0, /file/person/middle/61323.jpg ////윤지웅, LG, 1988년 03월 11일, 투수(좌투좌타), 180cm/75kg, 4.25, 53, 1, 2, 0, 6, 36, 40, 4, 16, 34, 0, 1.56, 0.280, 0, /file/person/middle/61329.jpg ////김대우, 넥센, 1988년 11월 21일, 투수(우언우타), 183cm/85kg, 5.50, 30, 2, 2, 1, 0, 73 2/3, 88, 9, 45, 66, 0, 1.81, 0.307, 1, /file/person/middle/61365.jpg ////심창민, 삼성, 1993년 02월 01일, 투수(우언우타), 185cm/86kg, 6.81, 52, 5, 2, 0, 8, 38 1/3, 42, 7, 26, 38, 1, 1.77, 0.280, 0, /file/person/middle/61411.jpg ////윤영삼, 넥센, 1992년 07월 14일, 투수(우투양타), 181cm/87kg, 27.00, 1, 0, 0, 0, 0, 4, 11, 3, 6, 4, 0, 4.25, 0.524, 0, /file/person/middle/61456.jpg ////임현준, 삼성, 1988년 12월 21일, 투수(좌투좌타), 185cm/88kg, 0.00, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0.00, 1.000, 0, /file/person/middle/61457.jpg ////김명성, 두산, 1988년 04월 08일, 투수(우투우타), 179cm/88kg, 2.35, 8, 0, 0, 0, 0, 7 2/3, 4, 1, 2, 3, 0, 0.78, 0.160, 0, /file/person/middle/61527.jpg ////한승혁, KIA, 1993년 01월 03일, 투수(우투우타), 185cm/88kg, 7.21, 26, 1, 5, 0, 0, 58 2/3, 62, 5, 48, 54, 1, 1.88, 0.282, 1, /file/person/middle/61666.jpg ////유창식, 한화, 1992년 05월 15일, 투수(좌투좌타), 186cm/100kg, 4.14, 21, 4, 4, 0, 0, 91 1/3, 100, 2, 72, 53, 0, 1.88, 0.288, 6, /file/person/middle/61715.jpg ////임정우, LG, 1991년 04월 02일, 투수(우투우타), 183cm/77kg, 4.17, 25, 2, 5, 0, 0, 73 1/3, 79, 6, 26, 54, 0, 1.43, 0.288, 0, /file/person/middle/61891.jpg ////신동훈, LG, 1994년 01월 24일, 투수(우투우타), 183cm/80kg, 3.48, 5, 1, 0, 0, 0, 10 1/3, 10, 0, 5, 4, 0, 1.45, 0.286, 0, /file/person/middle/62160.jpg ////윤명준, 두산, 1989년 06월 18일, 투수(우투우타), 178cm/78kg, 5.27, 61, 7, 3, 0, 16, 71 2/3, 78, 10, 23, 55, 1, 1.41, 0.282, 0, /file/person/middle/62242.jpg ////변진수, 두산, 1993년 04월 01일, 투수(우언우타), 178cm/78kg, 5.08, 31, 0, 0, 0, 2, 33 2/3, 35, 3, 10, 29, 0, 1.34, 0.282, 0, /file/person/middle/62263.jpg ////밴헤켄, 넥센, 1979년 07월 31일, 투수(좌투우타), 193cm/90kg, 3.51, 31, 20, 6, 0, 0, 187, 193, 9, 53, 178, 0, 1.32, 0.270, 18, /file/person/middle/62322.jpg ////김병현, KIA, 1979년 01월 19일, 투수(우언우타), 178cm/85kg, 7.10, 21, 3, 6, 0, 0, 71, 88, 5, 27, 66, 0, 1.62, 0.312, 3, /file/person/middle/62349.jpg ////김동준, 넥센, 1992년 03월 02일, 투수(우투우타), 185cm/90kg, 6.00, 5, 0, 0, 0, 0, 6, 6, 1, 8, 2, 0, 2.33, 0.250, 0, /file/person/middle/62360.jpg ////한현희, 넥센, 1993년 06월 25일, 투수(우언우타), 182cm/95kg, 3.20, 66, 4, 2, 2, 31, 78 2/3, 75, 6, 31, 83, 3, 1.35, 0.247, 0, /file/person/middle/62363.jpg ////유먼, 롯데, 1979년 10월 11일, 투수(좌투좌타), 195cm/100kg, 5.93, 28, 12, 10, 0, 0, 151 2/3, 196, 20, 63, 84, 0, 1.71, 0.322, 10, /file/person/middle/62597.jpg ////임준섭, KIA, 1989년 07월 16일, 투수(좌투좌타), 181cm/88kg, 6.06, 29, 5, 11, 0, 0, 130 2/3, 157, 15, 67, 54, 0, 1.71, 0.311, 3, /file/person/middle/62611.jpg ////홍성민, 롯데, 1989년 07월 15일, 투수(우언양타), 189cm/73kg, 4.75, 14, 2, 3, 0, 0, 36, 42, 7, 12, 11, 0, 1.50, 0.294, 0, /file/person/middle/62655.jpg ////소사, 넥센, 1985년 07월 28일, 투수(우투우타), 186cm/95kg, 4.61, 20, 10, 2, 0, 0, 125, 140, 18, 45, 98, 0, 1.48, 0.290, 12, /file/person/middle/62698.jpg ////임기영, 한화, 1993년 04월 16일, 투수(우언우타), 184cm/75kg, 6.75, 14, 1, 1, 0, 0, 22 2/3, 38, 6, 9, 17, 0, 2.07, 0.365, 0, /file/person/middle/62754.jpg ////허건엽, SK, 1993년 07월 24일, 투수(우투우타), 178cm/88kg, 0.00, 3, 0, 0, 0, 0, 5, 3, 0, 2, 1, 0, 1.00, 0.188, 0, /file/person/middle/62892.jpg ////김기현, 한화, 1989년 04월 03일, 투수(좌투좌타), 184cm/96kg, 5.79, 24, 0, 1, 0, 1, 23 1/3, 38, 9, 7, 15, 0, 1.93, 0.355, 0, /file/person/middle/62919.jpg ////노성호, NC, 1989년 10월 22일, 투수(좌투좌타), 182cm/89kg, 4.47, 15, 1, 2, 0, 1, 48 1/3, 44, 6, 28, 37, 0, 1.49, 0.247, 1, /file/person/middle/62920.jpg ////이민호, NC, 1993년 08월 11일, 투수(우투우타), 185cm/90kg, 5.01, 51, 7, 2, 2, 8, 88, 93, 19, 38, 73, 3, 1.49, 0.267, 1, /file/person/middle/62929.jpg ////최금강, NC, 1989년 04월 26일, 투수(우투우타), 195cm/95kg, 9.00, 4, 0, 0, 0, 0, 5, 9, 0, 2, 4, 0, 2.20, 0.409, 0, /file/person/middle/62966.jpg ////류제국, LG, 1983년 05월 30일, 투수(우투우타), 190cm/105kg, 5.12, 27, 9, 7, 0, 0, 147 2/3, 146, 13, 58, 128, 0, 1.38, 0.251, 10, /file/person/middle/63111.jpg ////함덕주, 두산, 1995년 01월 13일, 투수(좌투좌타), 181cm/78kg, 4.44, 31, 1, 0, 0, 2, 26 1/3, 24, 2, 12, 23, 1, 1.37, 0.253, 0, /file/person/middle/63248.jpg ////유창준, 두산, 1989년 07월 25일, 투수(우투우타), 184cm/105kg, 11.25, 4, 0, 0, 0, 1, 4, 9, 0, 4, 1, 0, 3.25, 0.474, 0, /file/person/middle/63295.jpg ////조상우, 넥센, 1994년 09월 04일, 투수(우투우타), 186cm/97kg, 2.47, 48, 6, 2, 0, 11, 69 1/3, 53, 2, 29, 73, 2, 1.18, 0.220, 0, /file/person/middle/63342.jpg ////밴덴헐크, 삼성, 1985년 05월 22일, 투수(우투우타), 198cm/104kg, 3.18, 25, 13, 4, 0, 0, 152 2/3, 125, 15, 45, 180, 0, 1.11, 0.222, 16, /file/person/middle/63432.jpg ////구승민, 롯데, 1990년 06월 12일, 투수(우투우타), 181cm/80kg, 0.00, 1, 0, 0, 0, 0, 0 2/3, 0, 0, 0, 1, 0, 0.00, 0.000, 0, /file/person/middle/63543.jpg ////박준표, KIA, 1992년 06월 26일, 투수(우투우타), 181cm/83kg, 7.94, 13, 0, 1, 0, 0, 22 2/3, 28, 3, 11, 6, 0, 1.72, 0.304, 0, /file/person/middle/63638.jpg ////조지훈, 한화, 1994년 04월 06일, 투수(우투우타), 185cm/91kg, 27.00, 2, 0, 0, 0, 0, 0 2/3, 2, 1, 1, 0, 0, 4.50, 0.500, 0, /file/person/middle/63730.jpg ////송창현, 한화, 1989년 08월 17일, 투수(좌투좌타), 181cm/100kg, 6.69, 20, 1, 9, 0, 0, 79 1/3, 104, 11, 60, 30, 0, 2.07, 0.331, 3, /file/person/middle/63791.jpg ////레이예스, SK, 1984년 11월 20일, 투수(좌투좌타), 189cm/97kg, 6.55, 13, 2, 7, 0, 0, 78 1/3, 103, 10, 38, 41, 0, 1.80, 0.323, 4, /file/person/middle/63857.jpg ////손정욱, NC, 1990년 12월 24일, 투수(좌투좌타), 182cm/84kg, 4.70, 67, 2, 1, 1, 16, 44, 40, 3, 25, 38, 0, 1.48, 0.248, 0, /file/person/middle/63914.jpg ////이성민, NC, 1990년 03월 30일, 투수(우투우타), 185cm/85kg, 5.79, 9, 1, 2, 0, 0, 28, 37, 0, 16, 14, 0, 1.89, 0.322, 1, /file/person/middle/63935.jpg ////에릭, NC, 1983년 03월 26일, 투수(우투우타), 185cm/104kg, 4.01, 30, 8, 8, 0, 0, 172 2/3, 169, 14, 62, 112, 0, 1.34, 0.258, 16, /file/person/middle/63938.jpg ////찰리, NC, 1985년 10월 25일, 투수(우투우타), 190cm/93kg, 3.81, 28, 12, 8, 0, 0, 165 1/3, 184, 13, 55, 92, 0, 1.45, 0.291, 16, /file/person/middle/63939.jpg ////이상민, 넥센, 1990년 11월 04일, 투수(좌투좌타), 180cm/78kg, 8.10, 6, 0, 0, 0, 0, 3 1/3, 4, 0, 4, 4, 0, 2.40, 0.267, 0, /file/person/middle/63960.jpg ////윤형배, NC, 1994년 07월 15일, 투수(우투우타), 183cm/99kg, 13.50, 2, 0, 0, 0, 0, 3 1/3, 8, 3, 0, 3, 0, 2.40, 0.471, 0, /file/person/middle/63961.jpg ////티포드, LG, 1984년 05월 15일, 투수(좌투좌타), 183cm/75kg, 5.24, 20, 5, 6, 0, 0, 99 2/3, 105, 9, 51, 85, 0, 1.57, 0.271, 7, /file/person/middle/64136.jpg ////임지섭, LG, 1995년 09월 06일, 투수(좌투좌타), 190cm/94kg, 6.75, 4, 1, 2, 0, 0, 14 2/3, 15, 1, 17, 8, 0, 2.18, 0.278, 0, /file/person/middle/64155.jpg ////리오단, LG, 1986년 05월 25일, 투수(우투우타), 193cm/90kg, 3.96, 28, 9, 10, 0, 0, 168, 177, 13, 37, 77, 0, 1.27, 0.274, 16, /file/person/middle/64157.jpg ////마야, 두산, 1981년 08월 28일, 투수(우투우타), 183cm/95kg, 4.86, 11, 2, 4, 0, 0, 63, 67, 6, 24, 54, 0, 1.44, 0.277, 4, /file/person/middle/64219.jpg ////볼스테드, 두산, 1986년 09월 23일, 투수(우투우타), 207cm/104kg, 6.21, 17, 5, 7, 0, 0, 87, 116, 8, 37, 32, 0, 1.76, 0.330, 4, /file/person/middle/64230.jpg ////최병욱, 두산, 1989년 06월 02일, 투수(우투우타), 181cm/88kg, 6.61, 12, 0, 0, 0, 0, 16 1/3, 24, 4, 7, 9, 0, 1.90, 0.353, 0, /file/person/middle/64259.jpg ////하영민, 넥센, 1995년 05월 07일, 투수(우투우타), 180cm/68kg, 7.22, 14, 3, 5, 0, 0, 62 1/3, 84, 9, 28, 43, 0, 1.80, 0.329, 3, /file/person/middle/64350.jpg ////마틴, 삼성, 1983년 01월 02일, 투수(우투우타), 193cm/101kg, 4.78, 23, 9, 6, 0, 0, 128, 148, 10, 31, 84, 0, 1.40, 0.288, 13, /file/person/middle/64430.jpg ////이수민, 삼성, 1995년 09월 11일, 투수(좌투좌타), 180cm/94kg, 2.45, 5, 1, 0, 0, 1, 7 1/3, 7, 0, 10, 7, 0, 2.32, 0.259, 0, /file/person/middle/64464.jpg ////문동욱, 롯데, 1992년 01월 07일, 투수(우투좌타), 187cm/90kg, 9.00, 1, 0, 0, 0, 0, 2, 3, 0, 1, 0, 0, 2.00, 0.333, 0, /file/person/middle/64554.jpg ////이인복, 롯데, 1991년 06월 18일, 투수(우투우타), 186cm/88kg, 15.43, 3, 0, 0, 0, 0, 4 2/3, 8, 2, 4, 2, 0, 2.57, 0.364, 0, /file/person/middle/64565.jpg ////심규범, 롯데, 1991년 09월 04일, 투수(좌투좌타), 180cm/84kg, 0.00, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0.00, 0.000, 0, /file/person/middle/64594.jpg ////김유영, 롯데, 1994년 05월 02일, 투수(좌투좌타), 180cm/79kg, 5.87, 5, 0, 0, 0, 0, 7 2/3, 8, 0, 7, 2, 0, 1.96, 0.276, 0, /file/person/middle/64596.jpg ////김지훈, KIA, 1992년 04월 16일, 투수(우투우타), 181cm/88kg, 8.53, 10, 0, 1, 0, 0, 12 2/3, 19, 2, 9, 7, 0, 2.21, 0.358, 0, /file/person/middle/64640.jpg ////어센시오, KIA, 1983년 05월 30일, 투수(우투우타), 189cm/82kg, 4.05, 46, 4, 1, 20, 0, 46 2/3, 49, 5, 14, 56, 7, 1.35, 0.259, 0, /file/person/middle/64641.jpg ////홀튼, KIA, 1979년 08월 12일, 투수(우투우타), 193cm/107kg, 4.80, 17, 5, 8, 0, 0, 93 2/3, 96, 10, 48, 58, 0, 1.54, 0.272, 10, /file/person/middle/64658.jpg ////토마스, KIA, 1984년 01월 18일, 투수(좌투좌타), 190cm/99kg, 4.44, 10, 2, 2, 0, 0, 46 2/3, 55, 3, 19, 51, 0, 1.59, 0.296, 3, /file/person/middle/64659.jpg ////최영환, 한화, 1992년 02월 20일, 투수(우투우타), 181cm/88kg, 7.10, 50, 1, 2, 1, 2, 64 2/3, 76, 9, 43, 42, 1, 1.84, 0.304, 0, /file/person/middle/64718.jpg ////앨버스, 한화, 1985년 10월 06일, 투수(좌투우타), 185cm/88kg, 5.89, 28, 6, 13, 0, 0, 151 1/3, 200, 18, 40, 107, 0, 1.59, 0.326, 10, /file/person/middle/64737.jpg ////황영국, 한화, 1995년 12월 26일, 투수(좌투우타), 185cm/83kg, 9.00, 1, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 3.00, 0.500, 0, /file/person/middle/64760.jpg ////클레이, 한화, 1988년 02월 15일, 투수(우투우타), 188cm/82kg, 8.33, 10, 3, 4, 0, 0, 40, 62, 8, 25, 20, 0, 2.17, 0.367, 1, /file/person/middle/64761.jpg ////타투스코, 한화, 1985년 03월 27일, 투수(우투좌타), 196cm/92kg, 7.07, 14, 2, 6, 0, 0, 63 2/3, 64, 7, 45, 49, 0, 1.71, 0.262, 2, /file/person/middle/64762.jpg ////조영우, 한화, 1995년 06월 27일, 투수(우투좌타), 185cm/80kg, 10.64, 6, 0, 1, 0, 0, 11, 22, 4, 4, 8, 0, 2.36, 0.407, 0, /file/person/middle/64768.jpg ////울프, SK, 1982년 10월 18일, 투수(우투우타), 182cm/82kg, 4.85, 23, 2, 2, 4, 0, 85 1/3, 88, 10, 27, 41, 0, 1.35, 0.269, 3, /file/person/middle/64824.jpg ////박민호, SK, 1992년 02월 25일, 투수(우언우타), 185cm/95kg, 5.46, 17, 2, 3, 0, 0, 31 1/3, 41, 3, 10, 12, 0, 1.63, 0.313, 0, /file/person/middle/64893.jpg ////웨버, NC, 1984년 09월 28일, 투수(우투우타), 189cm/93kg, 4.58, 24, 9, 6, 0, 0, 118, 132, 13, 42, 85, 0, 1.47, 0.288, 11, /file/person/middle/64956.jpg ////밴와트, SK, 1986년 02월 14일, 투수(우투우타), 192cm/100kg, 3.11, 11, 9, 1, 0, 0, 66 2/3, 56, 6, 26, 56, 0, 1.23, 0.226, 7, /file/person/middle/67845.jpg ////김광수, 한화, 1981년 05월 05일, 투수(우투우타), 182cm/84kg, 0.00, 1, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0.00, 1.000, 0, /file/person/middle/70142.jpg ////마일영, 한화, 1981년 05월 28일, 투수(좌투좌타), 177cm/95kg, 8.55, 19, 0, 0, 0, 1, 20, 32, 1, 9, 8, 0, 2.05, 0.356, 0, /file/person/middle/70329.jpg ////배영수, 삼성, 1981년 05월 04일, 투수(우투우타), 184cm/84kg, 5.45, 25, 8, 6, 0, 0, 133 2/3, 171, 14, 39, 111, 0, 1.57, 0.314, 10, /file/person/middle/70425.jpg ////강영식, 롯데, 1981년 06월 17일, 투수(좌투좌타), 189cm/98kg, 4.79, 52, 2, 5, 0, 14, 47, 46, 4, 24, 42, 4, 1.49, 0.266, 0, /file/person/middle/70615.jpg ////신승현, LG, 1983년 08월 13일, 투수(우언우타), 193cm/102kg, 5.87, 11, 0, 0, 0, 1, 15 1/3, 21, 2, 9, 12, 0, 1.96, 0.309, 0, /file/person/middle/70839.jpg ////엄정욱, SK, 1981년 06월 18일, 투수(우투우타), 191cm/94kg, 9.00, 5, 0, 1, 0, 0, 3, 4, 1, 4, 3, 0, 2.67, 0.308, 0, /file/person/middle/70855.jpg ////이동현, LG, 1983년 01월 12일, 투수(우투우타), 192cm/98kg, 2.73, 61, 5, 1, 2, 23, 59 1/3, 54, 2, 21, 38, 4, 1.26, 0.257, 0, /file/person/middle/71118.jpg ////김태영, KIA, 1980년 04월 07일, 투수(우투우타), 181cm/82kg, 5.68, 48, 5, 4, 1, 11, 50 2/3, 56, 6, 17, 45, 5, 1.44, 0.279, 0, /file/person/middle/71255.jpg ////이재우, 두산, 1980년 02월 09일, 투수(우투우타), 183cm/82kg, 5.02, 11, 1, 2, 0, 1, 37 2/3, 41, 5, 22, 30, 0, 1.67, 0.279, 0, /file/person/middle/71260.jpg ////정대현, 롯데, 1978년 11월 10일, 투수(우언우타), 184cm/104kg, 4.07, 60, 4, 2, 2, 13, 42, 40, 2, 13, 27, 2, 1.26, 0.252, 0, /file/person/middle/71801.jpg ////채병용, SK, 1982년 04월 25일, 투수(우투우타), 185cm/100kg, 6.37, 27, 8, 12, 0, 0, 130, 151, 27, 49, 87, 1, 1.54, 0.291, 7, /file/person/middle/71845.jpg ////김건한, 삼성, 1981년 03월 26일, 투수(우투우타), 182cm/82kg, 5.45, 34, 0, 1, 1, 0, 36 1/3, 42, 2, 9, 23, 0, 1.40, 0.286, 0, /file/person/middle/71851.jpg ////이재영, SK, 1979년 06월 13일, 투수(우투우타), 187cm/90kg, 6.19, 38, 1, 0, 0, 4, 48, 45, 7, 28, 42, 0, 1.52, 0.251, 0, /file/person/middle/72216.jpg ////배힘찬, 넥센, 1983년 12월 08일, 투수(우투우타), 185cm/82kg, 5.40, 6, 0, 0, 0, 0, 6 2/3, 11, 1, 1, 4, 0, 1.80, 0.355, 0, /file/person/middle/72321.jpg ////권혁, 삼성, 1983년 11월 06일, 투수(좌투좌타), 192cm/97kg, 2.86, 38, 3, 2, 0, 1, 34 2/3, 27, 4, 11, 38, 1, 1.10, 0.216, 0, /file/person/middle/72447.jpg ////안지만, 삼성, 1983년 10월 01일, 투수(우투우타), 180cm/83kg, 3.75, 55, 6, 3, 1, 27, 62 1/3, 51, 5, 30, 67, 4, 1.30, 0.234, 0, /file/person/middle/72463.jpg ////고효준, SK, 1983년 02월 08일, 투수(좌투좌타), 179cm/71kg, 9.18, 21, 2, 5, 0, 1, 51, 67, 11, 38, 40, 0, 2.06, 0.324, 0, /file/person/middle/72523.jpg ////이명우, 롯데, 1982년 06월 03일, 투수(좌투좌타), 185cm/98kg, 7.02, 64, 0, 6, 0, 11, 42 1/3, 64, 1, 23, 31, 1, 2.06, 0.362, 0, /file/person/middle/72535.jpg ////이정민, 롯데, 1979년 03월 02일, 투수(우투우타), 183cm/83kg, 2.43, 25, 1, 1, 0, 8, 33 1/3, 42, 1, 15, 25, 1, 1.71, 0.316, 0, /file/person/middle/72551.jpg ////김진우, KIA, 1983년 03월 07일, 투수(우투우타), 193cm/95kg, 5.96, 28, 3, 4, 1, 1, 90 2/3, 100, 8, 61, 85, 1, 1.78, 0.287, 2, /file/person/middle/72641.jpg ////문수호, NC, 1983년 06월 04일, 투수(좌투좌타), 185cm/85kg, 6.00, 10, 0, 1, 0, 1, 9, 11, 3, 1, 9, 1, 1.33, 0.306, 0, /file/person/middle/72643.jpg ////마정길, 넥센, 1979년 03월 13일, 투수(우언우타), 177cm/95kg, 4.78, 56, 3, 3, 0, 7, 64, 57, 9, 30, 55, 0, 1.36, 0.241, 0, /file/person/middle/72749.jpg ////제춘모, SK, 1982년 04월 05일, 투수(우투우타), 190cm/91kg, 27.00, 1, 0, 0, 0, 0, 0 1/3, 2, 0, 0, 0, 0, 6.00, 0.667, 0, /file/person/middle/72801.jpg ////윤길현, SK, 1983년 09월 23일, 투수(우투우타), 185cm/86kg, 3.90, 59, 3, 3, 7, 9, 57 2/3, 49, 7, 28, 63, 3, 1.34, 0.229, 0, /file/person/middle/72862.jpg ////우규민, LG, 1985년 01월 21일, 투수(우언우타), 184cm/75kg, 4.04, 29, 11, 5, 0, 0, 153 2/3, 170, 11, 34, 103, 0, 1.33, 0.284, 13, /file/person/middle/73117.jpg ////노경은, 두산, 1984년 03월 11일, 투수(우투우타), 186cm/85kg, 9.03, 29, 3, 15, 0, 0, 109 2/3, 147, 14, 69, 74, 0, 1.97, 0.333, 4, /file/person/middle/73211.jpg ////김성배, 롯데, 1981년 01월 12일, 투수(우언우타), 181cm/81kg, 5.98, 46, 1, 0, 4, 11, 40 2/3, 54, 7, 22, 32, 3, 1.87, 0.316, 0, /file/person/middle/73226.jpg ////정재훈, 두산, 1980년 01월 01일, 투수(우투우타), 179cm/81kg, 5.37, 54, 1, 5, 2, 15, 53 2/3, 50, 6, 19, 56, 4, 1.29, 0.250, 0, /file/person/middle/73241.jpg ////김승회, 롯데, 1981년 02월 11일, 투수(우투우타), 177cm/85kg, 3.05, 54, 1, 2, 20, 4, 56, 47, 4, 18, 40, 3, 1.16, 0.234, 0, /file/person/middle/73248.jpg ////임준혁, KIA, 1984년 10월 09일, 투수(우투우타), 182cm/96kg, 5.06, 30, 1, 3, 0, 2, 32, 34, 3, 18, 17, 1, 1.63, 0.276, 0, /file/person/middle/73632.jpg ////안영명, 한화, 1984년 11월 19일, 투수(우투우타), 183cm/90kg, 4.52, 48, 7, 6, 4, 6, 97 2/3, 114, 8, 36, 64, 1, 1.54, 0.298, 1, /file/person/middle/73738.jpg ////윤규진, 한화, 1984년 07월 28일, 투수(우투우타), 185cm/90kg, 4.63, 43, 7, 2, 9, 3, 72, 69, 11, 31, 73, 3, 1.39, 0.251, 0, /file/person/middle/73750.jpg ////송은범, KIA, 1984년 03월 17일, 투수(우투우타), 182cm/88kg, 7.32, 27, 4, 8, 0, 0, 78 2/3, 114, 11, 43, 60, 0, 2.00, 0.344, 3, /file/person/middle/73801.jpg ////장진용, LG, 1986년 01월 28일, 투수(우투우타), 187cm/92kg, 2.45, 4, 0, 2, 0, 0, 7 1/3, 8, 1, 2, 5, 0, 1.36, 0.276, 0, /file/person/middle/74139.jpg ////심수창, 롯데, 1981년 02월 09일, 투수(우투우타), 185cm/85kg, 9.15, 11, 0, 0, 2, 0, 19 2/3, 24, 7, 8, 14, 0, 1.63, 0.300, 0, /file/person/middle/74167.jpg ////오재영, 넥센, 1985년 03월 31일, 투수(좌투좌타), 184cm/95kg, 6.45, 21, 5, 6, 0, 0, 74, 99, 14, 33, 31, 0, 1.78, 0.333, 1, /file/person/middle/74359.jpg ////윤성환, 삼성, 1981년 10월 08일, 투수(우투우타), 183cm/88kg, 4.39, 28, 12, 7, 0, 0, 170 1/3, 196, 18, 37, 133, 0, 1.37, 0.295, 13, /file/person/middle/74454.jpg ////장원준, 롯데, 1985년 07월 31일, 투수(좌투좌타), 184cm/85kg, 4.59, 27, 10, 9, 0, 0, 155, 160, 15, 67, 107, 0, 1.46, 0.273, 13, /file/person/middle/74513.jpg ////최대성, 롯데, 1985년 05월 17일, 투수(우투우타), 182cm/80kg, 2.58, 41, 2, 2, 0, 1, 45 1/3, 41, 1, 25, 43, 0, 1.46, 0.246, 0, /file/person/middle/74543.jpg ////허준혁, 롯데, 1985년 12월 15일, 투수(우투우타), 180cm/87kg, 9.00, 2, 0, 0, 0, 0, 2, 3, 0, 1, 1, 0, 2.00, 0.375, 0, /file/person/middle/74556.jpg ////박근홍, 삼성, 1985년 08월 22일, 투수(좌투좌타), 180cm/90kg, 4.45, 42, 1, 0, 0, 5, 30 1/3, 25, 4, 28, 26, 0, 1.75, 0.229, 0, /file/person/middle/74630.jpg ////송창식, 한화, 1985년 03월 25일, 투수(우투우타), 183cm/104kg, 7.45, 26, 1, 3, 1, 3, 29, 35, 9, 14, 21, 3, 1.69, 0.299, 0, /file/person/middle/74731.jpg ////정재원, 한화, 1984년 08월 11일, 투수(우언우타), 187cm/84kg, 22.85, 5, 0, 0, 0, 0, 4 1/3, 12, 0, 8, 9, 0, 4.62, 0.480, 0, /file/person/middle/74748.jpg ////윤희상, SK, 1985년 05월 17일, 투수(우투우타), 193cm/88kg, 5.08, 7, 0, 1, 0, 0, 28 1/3, 36, 1, 9, 18, 0, 1.59, 0.321, 2, /file/person/middle/74838.jpg ////신재웅, LG, 1982년 03월 28일, 투수(좌투좌타), 181cm/85kg, 3.80, 57, 8, 3, 0, 8, 64, 62, 7, 26, 46, 5, 1.38, 0.264, 0, /file/person/middle/75138.jpg ////홍성용, NC, 1986년 11월 18일, 투수(좌언좌타), 180cm/85kg, 4.26, 22, 0, 1, 0, 3, 12 2/3, 12, 1, 8, 5, 0, 1.58, 0.255, 0, /file/person/middle/75149.jpg ////박정배, SK, 1982년 04월 01일, 투수(우투우타), 180cm/85kg, 5.82, 43, 6, 4, 1, 10, 43 1/3, 42, 3, 23, 34, 2, 1.50, 0.268, 0, /file/person/middle/75250.jpg ////금민철, 넥센, 1986년 11월 07일, 투수(좌투좌타), 181cm/87kg, 6.05, 11, 3, 5, 0, 0, 41 2/3, 51, 4, 30, 24, 0, 1.94, 0.307, 3, /file/person/middle/75258.jpg ////서동환, 삼성, 1986년 03월 27일, 투수(우투우타), 185cm/90kg, 0.00, 2, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1.00, 0.250, 0, /file/person/middle/75261.jpg ////조현근, 삼성, 1985년 11월 21일, 투수(좌투좌타), 184cm/74kg, 0.00, 6, 0, 0, 0, 0, 5 1/3, 2, 0, 1, 3, 0, 0.56, 0.111, 0, /file/person/middle/75268.jpg ////손승락, 넥센, 1982년 03월 04일, 투수(우투우타), 187cm/88kg, 4.33, 62, 3, 5, 32, 0, 62 1/3, 69, 6, 11, 53, 6, 1.28, 0.284, 0, /file/person/middle/75321.jpg ////전유수, SK, 1986년 11월 29일, 투수(우투우타), 185cm/95kg, 5.00, 67, 7, 4, 0, 5, 84 2/3, 99, 11, 37, 72, 2, 1.61, 0.297, 0, /file/person/middle/75340.jpg ////박성훈, 넥센, 1982년 09월 19일, 투수(좌투좌타), 188cm/97kg, 8.04, 15, 1, 0, 0, 0, 15 2/3, 23, 5, 7, 12, 0, 1.91, 0.354, 0, /file/person/middle/75464.jpg ////윤근영, 한화, 1986년 05월 07일, 투수(좌투좌타), 185cm/89kg, 7.16, 36, 2, 3, 0, 5, 49, 71, 6, 23, 28, 0, 1.92, 0.346, 0, /file/person/middle/75730.jpg ////김선규, LG, 1986년 04월 20일, 투수(우언우타), 185cm/94kg, 7.13, 19, 0, 3, 0, 1, 17 2/3, 25, 2, 9, 7, 0, 1.92, 0.325, 0, /file/person/middle/75852.jpg ////김진성, NC, 1985년 03월 07일, 투수(우투우타), 186cm/92kg, 4.10, 58, 3, 3, 25, 1, 48 1/3, 40, 4, 26, 52, 2, 1.37, 0.222, 0, /file/person/middle/75867.jpg ////원종현, NC, 1987년 07월 31일, 투수(우투우타), 182cm/83kg, 4.06, 73, 5, 3, 1, 11, 71, 62, 7, 31, 73, 3, 1.31, 0.235, 0, /file/person/middle/76118.jpg ////김기표, LG, 1983년 04월 25일, 투수(우언우타), 185cm/84kg, 13.50, 3, 0, 0, 0, 0, 2, 2, 2, 0, 1, 0, 1.00, 0.222, 0, /file/person/middle/76119.jpg ////신창호, KIA, 1987년 03월 18일, 투수(우투우타), 180cm/93kg, 6.16, 27, 0, 1, 0, 0, 38, 40, 3, 24, 33, 0, 1.68, 0.267, 0, /file/person/middle/76140.jpg ////이현승, 두산, 1983년 10월 11일, 투수(좌투좌타), 179cm/87kg, 5.07, 65, 3, 3, 0, 15, 55, 68, 2, 23, 39, 1, 1.65, 0.301, 0, /file/person/middle/76329.jpg ////김영민, 넥센, 1987년 08월 07일, 투수(우투우타), 188cm/98kg, 8.00, 34, 5, 2, 0, 2, 45, 62, 3, 29, 33, 1, 2.02, 0.343, 0, /file/person/middle/76350.jpg ////장원삼, 삼성, 1983년 06월 09일, 투수(좌투좌타), 181cm/81kg, 4.11, 24, 11, 5, 0, 0, 129 1/3, 149, 16, 37, 63, 0, 1.44, 0.295, 11, /file/person/middle/76355.jpg ////차우찬, 삼성, 1987년 05월 31일, 투수(좌투좌타), 185cm/80kg, 5.60, 69, 3, 4, 0, 21, 82, 86, 9, 42, 79, 3, 1.56, 0.266, 0, /file/person/middle/76455.jpg ////김기태, 삼성, 1987년 05월 11일, 투수(우투우타), 183cm/96kg, 7.27, 6, 0, 0, 1, 0, 8 2/3, 13, 2, 1, 8, 0, 1.62, 0.333, 0, /file/person/middle/76461.jpg ////배장호, 롯데, 1987년 06월 25일, 투수(우언우타), 188cm/95kg, 4.82, 16, 2, 2, 0, 0, 28, 27, 1, 15, 9, 0, 1.50, 0.265, 0, /file/person/middle/76540.jpg ////진해수, SK, 1986년 06월 26일, 투수(좌투좌타), 187cm/85kg, 7.16, 75, 0, 4, 0, 15, 49, 67, 8, 27, 37, 4, 1.92, 0.328, 0, /file/person/middle/76650.jpg ////박경태, KIA, 1987년 09월 02일, 투수(좌투좌타), 185cm/87kg, 12.27, 16, 0, 2, 0, 1, 25 2/3, 49, 6, 13, 17, 1, 2.42, 0.419, 0, /file/person/middle/76653.jpg ////유원상, LG, 1986년 06월 17일, 투수(우투우타), 187cm/93kg, 4.37, 66, 4, 5, 0, 16, 68, 67, 6, 23, 49, 5, 1.32, 0.262, 0, /file/person/middle/76757.jpg ////이한진, SK, 1983년 12월 20일, 투수(우언우타), 191cm/95kg, 8.64, 4, 0, 0, 0, 0, 8 1/3, 17, 2, 4, 3, 0, 2.52, 0.362, 0, /file/person/middle/76822.jpg ////박희수, SK, 1983년 07월 13일, 투수(좌투좌타), 184cm/88kg, 3.48, 21, 1, 2, 13, 0, 20 2/3, 17, 1, 8, 29, 3, 1.21, 0.227, 0, /file/person/middle/76858.jpg ////봉중근, LG, 1980년 07월 15일, 투수(좌투좌타), 190cm/98kg, 2.90, 50, 2, 4, 30, 0, 49 2/3, 51, 2, 17, 45, 6, 1.37, 0.264, 0, /file/person/middle/77147.jpg ////옥스프링, 롯데, 1977년 05월 13일, 투수(우투좌타), 183cm/90kg, 4.20, 32, 10, 8, 0, 0, 184 1/3, 184, 20, 63, 130, 0, 1.34, 0.264, 16, /file/person/middle/77199.jpg ////이용찬, 두산, 1989년 01월 02일, 투수(우투우타), 185cm/85kg, 4.24, 48, 5, 5, 17, 0, 51, 56, 3, 16, 47, 7, 1.41, 0.281, 0, /file/person/middle/77211.jpg ////임태훈, 두산, 1988년 09월 28일, 투수(우투우타), 182cm/83kg, 9.82, 6, 0, 0, 0, 1, 3 2/3, 7, 0, 6, 4, 0, 3.55, 0.389, 0, /file/person/middle/77251.jpg ////김강률, 두산, 1988년 08월 28일, 투수(우투우타), 187cm/95kg, 8.10, 14, 0, 1, 0, 0, 16 2/3, 25, 5, 7, 13, 0, 1.92, 0.352, 0, /file/person/middle/77263.jpg ////장시환, 넥센, 1987년 11월 01일, 투수(우투우타), 184cm/82kg, 12.15, 6, 0, 0, 0, 0, 6 2/3, 9, 0, 3, 2, 0, 1.80, 0.310, 0, /file/person/middle/77318.jpg ////백정현, 삼성, 1987년 07월 13일, 투수(좌투좌타), 184cm/80kg, 5.24, 27, 0, 3, 1, 1, 46 1/3, 51, 5, 17, 53, 0, 1.47, 0.285, 0, /file/person/middle/77446.jpg ////이동걸, 한화, 1983년 08월 12일, 투수(우투우타), 185cm/95kg, 4.50, 8, 0, 1, 0, 0, 20, 21, 4, 7, 16, 0, 1.40, 0.292, 0, /file/person/middle/77452.jpg ////이상화, 롯데, 1988년 03월 01일, 투수(우투우타), 188cm/95kg, 9.33, 10, 1, 3, 0, 0, 27, 42, 4, 15, 16, 0, 2.11, 0.362, 0, /file/person/middle/77563.jpg ////송승준, 롯데, 1980년 06월 29일, 투수(우투우타), 183cm/105kg, 5.98, 24, 8, 11, 0, 0, 122, 166, 16, 43, 89, 0, 1.71, 0.325, 6, /file/person/middle/77591.jpg ////양현종, KIA, 1988년 03월 01일, 투수(좌투좌타), 183cm/85kg, 4.25, 29, 16, 8, 0, 0, 171 1/3, 162, 12, 77, 165, 0, 1.39, 0.253, 17, /file/person/middle/77637.jpg ////김혁민, 한화, 1987년 05월 24일, 투수(우투우타), 187cm/94kg, 11.15, 17, 0, 4, 1, 2, 30 2/3, 55, 8, 17, 22, 1, 2.35, 0.390, 0, /file/person/middle/77748.jpg ////김광현, SK, 1988년 07월 22일, 투수(좌투좌타), 188cm/88kg, 3.42, 28, 13, 9, 0, 0, 173 2/3, 178, 10, 81, 145, 0, 1.49, 0.274, 15, /file/person/middle/77829.jpg ////이창욱, SK, 1984년 08월 28일, 투수(우투우타), 181cm/80kg, 8.59, 7, 1, 0, 0, 0, 7 1/3, 9, 0, 5, 3, 0, 1.91, 0.281, 0, /file/person/middle/77854.jpg ////정찬헌, LG, 1990년 01월 26일, 투수(우투우타), 187cm/94kg, 4.44, 51, 1, 3, 3, 8, 52 2/3, 57, 5, 27, 41, 0, 1.59, 0.294, 0, /file/person/middle/78148.jpg ////노진용, 삼성, 1990년 02월 15일, 투수(우언우타), 182cm/85kg, 27.00, 1, 0, 0, 0, 0, 0 1/3, 1, 1, 0, 1, 0, 3.00, 0.500, 0, /file/person/middle/78149.jpg ////김선우, LG, 1977년 09월 04일, 투수(우투우타), 182cm/88kg, 14.04, 6, 0, 1, 0, 0, 8 1/3, 14, 2, 4, 3, 0, 2.16, 0.368, 0, /file/person/middle/78232.jpg ////홍상삼, 두산, 1990년 02월 13일, 투수(우투좌타), 188cm/85kg, 8.57, 12, 0, 3, 0, 1, 21, 26, 4, 20, 17, 0, 2.19, 0.302, 0, /file/person/middle/78247.jpg ////고창성, NC, 1984년 12월 21일, 투수(우언우타), 183cm/85kg, 1.80, 25, 1, 1, 0, 1, 25, 25, 1, 7, 11, 1, 1.28, 0.260, 0, /file/person/middle/78248.jpg ////임창민, NC, 1985년 08월 25일, 투수(우투우타), 183cm/85kg, 4.39, 41, 6, 3, 1, 5, 53 1/3, 50, 5, 29, 53, 2, 1.48, 0.250, 0, /file/person/middle/78352.jpg ////민성기, NC, 1989년 09월 12일, 투수(좌투좌타), 181cm/73kg, 9.00, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 2.00, 0.500, 0, /file/person/middle/78366.jpg ////김수완, 두산, 1989년 07월 20일, 투수(우투우타), 185cm/76kg, 33.75, 2, 0, 0, 0, 0, 1 1/3, 7, 0, 1, 0, 0, 6.00, 0.636, 0, /file/person/middle/78550.jpg ////강승현, 롯데, 1985년 10월 06일, 투수(우투좌타), 186cm/88kg, 25.41, 3, 0, 0, 0, 0, 5 2/3, 18, 2, 2, 3, 0, 3.53, 0.529, 0, /file/person/middle/78552.jpg ////서재응, KIA, 1977년 05월 24일, 투수(우투우타), 181cm/97kg, 6.40, 16, 0, 2, 0, 2, 32 1/3, 45, 6, 10, 18, 0, 1.70, 0.331, 0, /file/person/middle/78640.jpg ////윤기호, 한화, 1988년 07월 28일, 투수(좌투좌타), 184cm/83kg, 0.00, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0.00, 1.000, 0, /file/person/middle/78730.jpg ////정대훈, 한화, 1985년 03월 08일, 투수(우언우타), 185cm/83kg, 7.23, 34, 3, 2, 1, 0, 42 1/3, 64, 4, 14, 14, 0, 1.84, 0.368, 0, /file/person/middle/78760.jpg ////백인식, SK, 1987년 11월 19일, 투수(우언우타), 185cm/95kg, 18.32, 6, 0, 1, 0, 0, 9 1/3, 22, 3, 7, 3, 0, 3.11, 0.489, 0, /file/person/middle/78819.jpg ////김준, KIA, 1985년 10월 08일, 투수(좌투좌타), 180cm/80kg, 0.00, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0.00, 0.000, 0, /file/person/middle/78823.jpg ////최동환, LG, 1989년 09월 19일, 투수(우언우타), 184cm/83kg, 11.57, 1, 0, 0, 0, 0, 2 1/3, 2, 1, 3, 2, 0, 2.14, 0.222, 0, /file/person/middle/79140.jpg ////유희관, 두산, 1986년 06월 01일, 투수(좌투좌타), 180cm/88kg, 4.42, 30, 12, 9, 0, 0, 177 1/3, 202, 21, 51, 112, 0, 1.43, 0.286, 14, /file/person/middle/79229.jpg ////오현택, 두산, 1985년 07월 17일, 투수(우언우타), 180cm/73kg, 3.65, 58, 4, 3, 0, 4, 66 2/3, 81, 6, 18, 56, 0, 1.49, 0.299, 0, /file/person/middle/79293.jpg ////강윤구, 넥센, 1990년 07월 10일, 투수(좌투좌타), 183cm/89kg, 7.71, 24, 1, 1, 0, 1, 42, 60, 17, 32, 36, 0, 2.19, 0.339, 0, /file/person/middle/79358.jpg ////나이트, 넥센, 1975년 10월 01일, 투수(우투좌타), 183cm/88kg, 5.52, 6, 1, 2, 0, 0, 29 1/3, 36, 5, 22, 19, 0, 1.98, 0.310, 1, /file/person/middle/79430.jpg ////이우선, 삼성, 1983년 04월 19일, 투수(우투우타), 179cm/83kg, 0.00, 1, 0, 0, 0, 0, 0 1/3, 0, 0, 1, 0, 0, 3.00, 0.000, 0, /file/person/middle/79442.jpg ////허준혁, 두산, 1990년 09월 30일, 투수(좌투좌타), 183cm/82kg, 14.21, 8, 0, 0, 0, 0, 6 1/3, 17, 1, 4, 3, 0, 3.32, 0.531, 0, /file/person/middle/79535.jpg ////허유강, 한화, 1986년 11월 16일, 투수(우언우타), 180cm/82kg, 13.50, 1, 0, 0, 0, 0, 0 2/3, 2, 1, 0, 0, 0, 3.00, 0.500, 0, /file/person/middle/79746.jpg ////구본범, 한화, 1987년 02월 08일, 투수(우투좌타), 191cm/91kg, 12.27, 3, 0, 0, 0, 0, 3 2/3, 8, 1, 0, 2, 0, 2.18, 0.444, 0, /file/person/middle/79748.jpg ////황재규, 한화, 1986년 04월 16일, 투수(우투우타), 175cm/85kg, 17.28, 8, 0, 1, 0, 0, 8 1/3, 17, 1, 5, 3, 0, 2.64, 0.436, 0, /file/person/middle/79758.jpg ////박성호, KIA, 1986년 07월 04일, 투수(우투우타), 197cm/115kg, 10.38, 8, 0, 0, 0, 0, 13, 27, 3, 7, 11, 0, 2.62, 0.429, 0, /file/person/middle/79760.jpg ////여건욱, SK, 1986년 09월 16일, 투수(우투우타), 185cm/95kg, 6.20, 28, 3, 3, 0, 0, 69 2/3, 81, 16, 28, 50, 0, 1.56, 0.290, 3, /file/person/middle/79825.jpg ////신윤호, SK, 1975년 05월 15일, 투수(우언우타), 184cm/100kg, 9.00, 2, 0, 0, 0, 0, 3, 8, 1, 2, 1, 0, 3.33, 0.533, 0, /file/person/middle/94126.jpg ////류택현, LG, 1971년 10월 23일, 투수(좌투좌타), 185cm/80kg, 27.00, 2, 0, 0, 0, 0, 1, 3, 2, 0, 0, 0, 3.00, 0.600, 0, /file/person/middle/94228.jpg ////임창용, 삼성, 1976년 06월 04일, 투수(우언우타), 180cm/75kg, 5.84, 49, 5, 4, 31, 0, 44 2/3, 50, 4, 21, 52, 9, 1.59, 0.282, 0, /file/person/middle/95657.jpg ////박명환, NC, 1977년 06월 07일, 투수(우투우타), 186cm/92kg, 7.20, 5, 0, 2, 0, 0, 5, 7, 1, 8, 7, 0, 3.00, 0.333, 0, /file/person/middle/96251.jpg ////정현욱, LG, 1978년 12월 02일, 투수(우투우타), 187cm/102kg, 4.73, 25, 2, 2, 0, 1, 32 1/3, 39, 4, 15, 24, 1, 1.67, 0.305, 0, /file/person/middle/96462.jpg ////이상열, LG, 1977년 04월 20일, 투수(좌투좌타), 185cm/73kg, 7.88, 12, 0, 0, 0, 1, 8, 11, 1, 3, 5, 0, 1.75, 0.324, 0, /file/person/middle/96720.jpg ////최영필, KIA, 1974년 05월 13일, 투수(우투우타), 184cm/92kg, 3.19, 40, 4, 2, 0, 14, 53 2/3, 52, 6, 15, 45, 3, 1.25, 0.252, 0, /file/person/middle/97336.jpg ////이정훈, 넥센, 1977년 10월 09일, 투수(우투우타), 182cm/95kg, 12.27, 7, 0, 0, 0, 0, 7 1/3, 15, 2, 5, 2, 0, 2.73, 0.455, 0, /file/person/middle/97541.jpg ////손민한, NC, 1975년 01월 02일, 투수(우투우타), 180cm/85kg, 3.54, 52, 4, 4, 1, 9, 48 1/3, 56, 5, 14, 23, 5, 1.45, 0.298, 0, /file/person/middle/97571.jpg ////이혜천, NC, 1979년 03월 12일, 투수(좌투좌타), 184cm/90kg, 3.00, 25, 1, 0, 0, 2, 18, 22, 0, 8, 17, 2, 1.67, 0.306, 0, /file/person/middle/98259.jpg ////임경완, SK, 1975년 12월 28일, 투수(우언우타), 186cm/95kg, 5.40, 16, 0, 0, 0, 0, 16 2/3, 21, 4, 6, 5, 0, 1.62, 0.318, 0, /file/person/middle/98521.jpg ////송신영, 넥센, 1977년 03월 01일, 투수(우투우타), 180cm/88kg, 6.59, 41, 2, 1, 0, 2, 42 1/3, 57, 7, 16, 28, 0, 1.72, 0.331, 0, /file/person/middle/99314.jpg ////권오준, 삼성, 1980년 03월 09일, 투수(우언우타), 182cm/80kg, 18.00, 1, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 3.00, 0.600, 0, /file/person/middle/99445.jpg ////김사율, 롯데, 1980년 04월 17일, 투수(우투우타), 181cm/95kg, 5.79, 33, 2, 5, 0, 2, 79 1/3, 95, 13, 30, 71, 0, 1.58, 0.303, 1, /file/person/middle/99563.jpg ////박정진, 한화, 1976년 05월 27일, 투수(좌투좌타), 183cm/88kg, 6.02, 60, 4, 4, 9, 7, 49 1/3, 54, 5, 25, 51, 2, 1.60, 0.283, 0, /file/person/middle/99737.jpg ////";
				a += b;

				if (inSender.name == "searchButton1") {
					playerinput = this.$.playername1.getValue();
					this.$.playername1.setPlaceholder(this.$.playername1
							.getValue());
					this.$.playername2.setPlaceholder(this.$.playername1
							.getValue());
				} else if (inSender.name == "searchButton2") {
					playerinput = this.$.playername2.getValue();
					this.$.playername1.setPlaceholder(this.$.playername2
							.getValue());
					this.$.playername2.setPlaceholder(this.$.playername2
							.getValue());

				} else
					playerinput = inSender.getContent();
				player_data = new Array(40);

				var data_player_url = a.indexOf(playerinput);

				a = a.substring(data_player_url);
				a = a.substring("", a.indexOf("jpg") + 3);
				a += ',';
				for (var g = 0; g < 22; g++) {
					last_data2 = a.substring(a.indexOf(""), a.indexOf(","));
					player_data[g] = last_data2;
					a = a.substring(a.indexOf(",") + 1);
				}

				if (this.$.checkButton.getContent() == "상세 정보"
						|| inSender.name == "searchButton1"
						|| inSender.name == "searchButton2") {
					this.$.panels.setIndex(2);
					this.$.drawer.setOpen(false);
					this.$.searchButton2.setSrc("assets/spinner.gif");
					this.$.playername1.setPlaceholder(this.$.playername1
							.getValue());
					this.$.playername2.setPlaceholder(this.$.playername1
							.getValue());
					this.$.playername2.setValue("");
					this.$.drawer3.setOpen(false);

					if (player_data[3] == " 투수(우투우타)"
							|| player_data[3] == " 투수(우투좌타)"
							|| player_data[3] == " 투수(좌투우타)"
							|| player_data[3] == " 투수(좌투좌타)") {
						this.$.search.setSource("http://www.koreabaseball.com"
								+ player_data[20].trim());
						this.$.search.setLabel(player_data[0] + "  "
								+ player_data[1]);
						this.$.search.setText("birth: " + player_data[2]
								+ "<br>" + "position: " + player_data[3]
								+ "<br>" + "physical: " + player_data[4]);
						this.$.result1.setContent("경기수");
						this.$.result2.setContent("이닝");
						this.$.result3.setContent("패");
						this.$.result4.setContent("세이브");
						this.$.result5.setContent("볼넷");
						this.$.result6.setContent("피안타율");
						this.$.result7.setContent("QS");
						this.$.result8.setContent("방어율");
						this.$.result9.setContent("승");
						this.$.result10.setContent("홀드");
						this.$.result11.setContent("탈삼진");
						this.$.result12.setContent("WHIP");
						this.$.result13.setContent("블론");
						this.$.result14.setContent("피홈런");

						this.$.obj1.setContent(player_data[6]);
						this.$.obj2.setContent(player_data[11]);
						this.$.obj3.setContent(player_data[8]);
						this.$.obj4.setContent(player_data[9]);
						this.$.obj5.setContent(player_data[14]);
						this.$.obj6.setContent(player_data[12]);
						this.$.obj7.setContent(player_data[19]);
						this.$.obj8.setContent(player_data[5]);
						this.$.obj9.setContent(player_data[7]);
						this.$.obj10.setContent(player_data[10]);
						this.$.obj11.setContent(player_data[15]);
						this.$.obj12.setContent(player_data[17]);
						this.$.obj13.setContent(player_data[16]);
						this.$.obj14.setContent(player_data[13]);
						this.$.searchButton2
								.setSrc("assets/search-input-search.png");
						this.$.playername1.setValue("");
						this.$.playername2.setValue("");
						this.$.drawer.setOpen(true);
					} else {
						this.$.search.setSource("http://www.koreabaseball.com"
								+ player_data[21].trim());
						this.$.search.setLabel(player_data[0] + "  "
								+ player_data[1]);
						this.$.search.setText("birth: " + player_data[2]
								+ "<br>" + "position: " + player_data[3]
								+ "<br>" + "physical: " + player_data[4]);
						this.$.result1.setContent("타석");
						this.$.result2.setContent("안타");
						this.$.result3.setContent("타점");
						this.$.result4.setContent("도루");
						this.$.result5.setContent("출루율");
						this.$.result6.setContent("볼넷");
						this.$.result7.setContent("도루율");
						this.$.result8.setContent("타율");
						this.$.result9.setContent("홈런");
						this.$.result10.setContent("득점");
						this.$.result11.setContent("실책");
						this.$.result12.setContent("OPS");
						this.$.result13.setContent("삼진");
						this.$.result14.setContent("득타율");

						this.$.obj1.setContent(player_data[7]);
						this.$.obj2.setContent(player_data[9]);
						this.$.obj3.setContent(player_data[11]);
						this.$.obj4.setContent(player_data[12]);
						this.$.obj5.setContent(player_data[16]);
						this.$.obj6.setContent(player_data[13]);
						this.$.obj7.setContent(player_data[18]);
						this.$.obj8.setContent(player_data[5]);
						this.$.obj9.setContent(player_data[10]);
						this.$.obj10.setContent(player_data[8]);
						this.$.obj11.setContent(player_data[17]);
						this.$.obj12.setContent(player_data[19]);
						this.$.obj13.setContent(player_data[14]);
						this.$.obj14.setContent(player_data[20]);
						this.$.searchButton2
								.setSrc("assets/search-input-search.png");
						this.$.playername1.setValue("");
						this.$.playername2.setValue("");
						this.$.drawer.setOpen(true);
					}
				} else if (this.$.checkButton.getContent() == "요약 정보") {
					if (player_data[3] == " 투수(우투우타)"
							|| player_data[3] == " 투수(우투좌타)"
							|| player_data[3] == " 투수(좌투우타)"
							|| player_data[3] == " 투수(좌투좌타)") {
						this.$.reresult1.setContent("경기수");
						this.$.reresult2.setContent("이닝");
						this.$.reresult3.setContent("패");
						this.$.reresult4.setContent("세이브");
						this.$.reresult5.setContent("볼넷");
						this.$.reresult6.setContent("발어율");
						this.$.reresult7.setContent("승");
						this.$.reresult8.setContent("홀드");
						this.$.reresult9.setContent("탈삼진");
						this.$.reresult10.setContent("블론");

						this.$.realobj1.setContent(player_data[6]);
						this.$.realobj2.setContent(player_data[11]);
						this.$.realobj3.setContent(player_data[8]);
						this.$.realobj4.setContent(player_data[9]);
						this.$.realobj5.setContent(player_data[14]);
						this.$.realobj6.setContent(player_data[5]);
						this.$.realobj7.setContent(player_data[7]);
						this.$.realobj8.setContent(player_data[10]);
						this.$.realobj9.setContent(player_data[15]);
						this.$.realobj10.setContent(player_data[16]);
						this.$.drawer3.setOpen(true);
					} else {
						this.$.reresult1.setContent("타석");
						this.$.reresult2.setContent("안타");
						this.$.reresult3.setContent("타점");
						this.$.reresult4.setContent("도루");
						this.$.reresult5.setContent("출루율");
						this.$.reresult6.setContent("타율");
						this.$.reresult7.setContent("홈런");
						this.$.reresult8.setContent("득점");
						this.$.reresult9.setContent("실책");
						this.$.reresult10.setContent("삼진");

						this.$.realobj1.setContent(player_data[7]);
						this.$.realobj2.setContent(player_data[9]);
						this.$.realobj3.setContent(player_data[11]);
						this.$.realobj4.setContent(player_data[12]);
						this.$.realobj5.setContent(player_data[16]);
						this.$.realobj6.setContent(player_data[5]);
						this.$.realobj7.setContent(player_data[10]);
						this.$.realobj8.setContent(player_data[8]);
						this.$.realobj9.setContent(player_data[17]);
						this.$.realobj10.setContent(player_data[14]);
						this.$.drawer3.setOpen(true);
					}
				}
			},
*/
			
			searchDrawer1_1 : function() {
				this.$.panels.setIndex(2);
				this.$.drawer.setOpen(false);
				this.$.searchButton2.setSrc("assets/spinner.gif");
				playerinput = this.$.playername1.getValue();
				this.$.playername1
						.setPlaceholder(this.$.playername1.getValue());
				this.$.playername2
						.setPlaceholder(this.$.playername1.getValue());
				var data_player_url = player.indexOf(playerinput);

				parserp = player.substring(data_player_url - 100,
						data_player_url);
				searchurl = 'select * from html where url = "http://www.koreabaseball.com';
				searchurl += parserp.substring(parserp.indexOf("Record") - 1,
						parserp.indexOf("pcode") + 11);
				searchurl += "\"";
				this.$.playername1.setValue("");
				this.fetch2();

			},
			searchDrawer1_2 : function() {
				this.$.drawer.setOpen(false);
				this.$.searchButton2.setSrc("assets/spinner.gif");
				playerinput = this.$.playername2.getValue();
				this.$.playername1
						.setPlaceholder(this.$.playername2.getValue());
				this.$.playername2
						.setPlaceholder(this.$.playername2.getValue());
				var data_player_url = player.indexOf(playerinput);

				parserp = player.substring(data_player_url - 100,
						data_player_url);
				searchurl = 'select * from html where url = "http://www.koreabaseball.com';
				searchurl += parserp.substring(parserp.indexOf("Record") - 1,
						parserp.indexOf("pcode") + 11);
				searchurl += "\"";
				this.$.playername2.setValue("");
				this.fetch2();

			},

			realDrawer : function(inSender, inEvent) {
				this.$.drawer3.setOpen(false);
				playerinput = inSender.getContent();
				var data_player_url1 = player.indexOf(playerinput);

				parserp = player.substring(data_player_url1 - 100,
						data_player_url1);
				searchurl = 'select * from html where url = "http://www.koreabaseball.com';
				searchurl += parserp.substring(parserp.indexOf("Record") - 1,
						parserp.indexOf("pcode") + 11);
				searchurl += "\"";

				if (this.$.checkButton.getContent() == "상세 정보") {
					this.$.panels.setIndex(2);
					this.$.drawer.setOpen(false);
					this.$.searchButton2.setSrc("assets/spinner.gif");
					this.$.playername1.setPlaceholder(this.$.playername1
							.getValue());
					this.$.playername2.setPlaceholder(this.$.playername1
							.getValue());
					this.$.playername2.setValue("");
					this.$.drawer3.setOpen(false);
					this.fetch2();
				} else if (this.$.checkButton.getContent() == "요약 정보") {
					this.fetch3();
				}

			},

			searchDrawer2 : function() {
				this.$.drawer2.setOpen(!this.$.drawer2.open);
			},
			next : function(inSender, inEvent) {
				this.$.panels.setIndex(2);
				return true;
			},
			create : function() {
				this.inherited(arguments);
				this.start();
			},
			start : function() {
				this.fetch();
			},
			fetch2 : function() {
				var jsonp = new enyo.JsonpRequest(
						{
							url : "http://query.yahooapis.com/v1/public/yql?format=json",
							callbackName : "callback"
						});
				jsonp.go({
					q : searchurl
				});
				jsonp.response(this, "processResponse2");

			},

			fetch3 : function() {
				var jsonp = new enyo.JsonpRequest(
						{
							url : "http://query.yahooapis.com/v1/public/yql?format=json",

							callbackName : "callback"
						});
				jsonp.go({
					q : searchurl
				});
				jsonp.response(this, "processResponse3");

			},
			processResponse2 : function(inSender, inResponse) {
				last_data = JSON.stringify(inResponse, null, 2);

				this.parserOrderKBO2();
			},

			processResponse3 : function(inSender, inResponse) {
				last_data = JSON.stringify(inResponse, null, 2);

				this.parserOrderKBO3();
			},
			parserOrderKBO2 : function() {
				teamRank2 = new Array(8);
				player_data = new Array(40);
				player_data2 = new Array(10);
				last_data = last_data
						.substring(last_data.indexOf("playerBox") + 1);
				last_data = last_data
						.substring(last_data.indexOf("content") + 12);
				last_data2 = last_data.substring(last_data.indexOf(""),
						last_data.indexOf("\""));
				player_data[0] = last_data2;
				last_data = last_data
						.substring(last_data.indexOf("\"src\"") + 8);

				last_data2 = last_data.substring(last_data.indexOf(""),
						last_data.indexOf("\""));
				player_data2[0] = last_data2;
				for (var a = 1; a < 10; a++) {
					last_data = last_data
							.substring(last_data.indexOf("\"p\"") + 6);
					last_data2 = last_data.substring(last_data.indexOf(""),
							last_data.indexOf("\""));
					player_data[a] = last_data2;
				}
				last_data = last_data.substring(last_data.indexOf("tlong") + 6);
				last_data = last_data.substring(last_data.indexOf("tbody") + 6);
				last_data = last_data
						.substring(last_data.indexOf("\"p\"") + 15);
				for (var a = 10; a < 26; a++) {
					last_data = last_data
							.substring(last_data.indexOf("\"p\"") + 6);
					last_data2 = last_data.substring(last_data.indexOf(""),
							last_data.indexOf("\""));
					player_data[a] = last_data2;
				}
				last_data = last_data.substring(last_data.indexOf("tbody") + 6);
				for (var a = 26; a < 40; a++) {
					last_data = last_data
							.substring(last_data.indexOf("\"p\"") + 6);
					last_data2 = last_data.substring(last_data.indexOf(""),
							last_data.indexOf("\""));
					player_data[a] = last_data2;
				}
				if (player_data[4] == "투수(우투우타)"
						|| player_data[4] == "투수(우투좌타)"
						|| player_data[4] == "투수(좌투우타)"
						|| player_data[4] == "투수(좌투좌타)") {
					this.$.search.setSource("http://www.koreabaseball.com"
							+ player_data2[0]);
					this.$.search.setLabel(player_data[0] + "  "
							+ player_data[1]);
					this.$.search.setText("birth: " + player_data[3] + "<br>"
							+ "position: " + player_data[4] + "<br>"
							+ "physical: " + player_data[5]);
					this.$.result1.setContent("승");
					this.$.result2.setContent("패");
					this.$.result3.setContent("세이브");
					this.$.result4.setContent("홀드");
					this.$.result5.setContent("승률");
					this.$.result6.setContent("타자");
					this.$.result7.setContent("투구수");
					this.$.result8.setContent("이닝");
					this.$.result9.setContent("피안타");
					this.$.result10.setContent("2루타");
					this.$.result11.setContent("3루타");
					this.$.result12.setContent("피홈런");
					this.$.result13.setContent("희타");
					this.$.result14.setContent("희비");

					this.$.obj1.setContent(player_data[14]);
					this.$.obj2.setContent(player_data[15]);
					this.$.obj3.setContent(player_data[16]);
					this.$.obj4.setContent(player_data[17]);
					this.$.obj5.setContent(player_data[18]);
					this.$.obj6.setContent(player_data[19]);
					this.$.obj7.setContent(player_data[20]);
					this.$.obj8.setContent(player_data[21]);
					this.$.obj9.setContent(player_data[22]);
					this.$.obj10.setContent(player_data[23]);
					this.$.obj11.setContent(player_data[24]);
					this.$.obj12.setContent(player_data[25]);
					this.$.obj13.setContent(player_data[26]);
					this.$.obj14.setContent(player_data[27]);
					this.$.searchButton2
							.setSrc("assets/search-input-search.png");
					this.$.drawer.setOpen(true);
				} else {
					this.$.search.setSource("http://www.koreabaseball.com"
							+ player_data2[0]);
					this.$.search.setLabel(player_data[0] + "  "
							+ player_data[1]);
					this.$.search.setText("birth: " + player_data[3] + "<br>"
							+ "position: " + player_data[4] + "<br>"
							+ "physical: " + player_data[5]);
					this.$.result1.setContent("타율");
					this.$.result2.setContent("경기");
					this.$.result3.setContent("타석");
					this.$.result4.setContent("타수");
					this.$.result5.setContent("득점");
					this.$.result6.setContent("안타");
					this.$.result7.setContent("2루타");
					this.$.result8.setContent("3루타");
					this.$.result9.setContent("홈런");
					this.$.result10.setContent("타점");
					this.$.result11.setContent("도루");
					this.$.result12.setContent("볼넷");
					this.$.result13.setContent("장타율");
					this.$.result14.setContent("출루율");

					this.$.obj1.setContent(player_data[10]);
					this.$.obj2.setContent(player_data[11]);
					this.$.obj3.setContent(player_data[12]);
					this.$.obj4.setContent(player_data[13]);
					this.$.obj5.setContent(player_data[14]);
					this.$.obj6.setContent(player_data[15]);
					this.$.obj7.setContent(player_data[16]);
					this.$.obj8.setContent(player_data[17]);
					this.$.obj9.setContent(player_data[18]);
					this.$.obj10.setContent(player_data[20]);
					this.$.obj11.setContent(player_data[21]);
					this.$.obj12.setContent(player_data[26]);
					this.$.obj13.setContent(player_data[31]);
					this.$.obj14.setContent(player_data[32]);
					this.$.searchButton2
							.setSrc("assets/search-input-search.png");
					this.$.drawer.setOpen(true);
				}
			},

			parserOrderKBO3 : function() {
				teamRank2 = new Array(8);
				player_data = new Array(40);

				last_data = last_data
						.substring(last_data.indexOf("playerBox") + 1);
				last_data = last_data
						.substring(last_data.indexOf("content") + 12);
				last_data2 = last_data.substring(last_data.indexOf(""),
						last_data.indexOf("\""));
				player_data[0] = last_data2;
				for (var a = 1; a < 10; a++) {
					last_data = last_data
							.substring(last_data.indexOf("\"p\"") + 6);
					last_data2 = last_data.substring(last_data.indexOf(""),
							last_data.indexOf("\""));
					player_data[a] = last_data2;
				}
				last_data = last_data.substring(last_data.indexOf("tlong") + 6);
				last_data = last_data.substring(last_data.indexOf("tbody") + 6);
				last_data = last_data
						.substring(last_data.indexOf("\"p\"") + 15);
				for (var a = 10; a < 26; a++) {
					last_data = last_data
							.substring(last_data.indexOf("\"p\"") + 6);
					last_data2 = last_data.substring(last_data.indexOf(""),
							last_data.indexOf("\""));
					player_data[a] = last_data2;
				}
				last_data = last_data.substring(last_data.indexOf("tbody") + 6);
				for (var a = 26; a < 40; a++) {
					last_data = last_data
							.substring(last_data.indexOf("\"p\"") + 6);
					last_data2 = last_data.substring(last_data.indexOf(""),
							last_data.indexOf("\""));
					player_data[a] = last_data2;
				}
				if (player_data[4] == "투수(우투우타)"
						|| player_data[4] == "투수(우투좌타)"
						|| player_data[4] == "투수(좌투우타)"
						|| player_data[4] == "투수(좌투좌타)") {
					this.$.reresult1.setContent("승");
					this.$.reresult2.setContent("패");
					this.$.reresult3.setContent("세이브");
					this.$.reresult4.setContent("승률");
					this.$.reresult5.setContent("이닝");
					this.$.reresult6.setContent("투구수");
					this.$.reresult7.setContent("피안타");
					this.$.reresult8.setContent("피홈런");
					this.$.reresult9.setContent("타자");
					this.$.reresult10.setContent("홀드");

					this.$.realobj1.setContent(player_data[14]);
					this.$.realobj2.setContent(player_data[15]);
					this.$.realobj3.setContent(player_data[16]);
					this.$.realobj4.setContent(player_data[18]);
					this.$.realobj5.setContent(player_data[21]);
					this.$.realobj6.setContent(player_data[20]);
					this.$.realobj7.setContent(player_data[22]);
					this.$.realobj8.setContent(player_data[25]);
					this.$.realobj9.setContent(player_data[19]);
					this.$.realobj10.setContent(player_data[17]);
					this.$.drawer3.setOpen(true);
				} else {
					this.$.reresult1.setContent("타율");
					this.$.reresult2.setContent("경기");
					this.$.reresult3.setContent("타석");
					this.$.reresult4.setContent("타수");
					this.$.reresult5.setContent("득점");
					this.$.reresult6.setContent("안타");
					this.$.reresult7.setContent("홈런");
					this.$.reresult8.setContent("타점");
					this.$.reresult9.setContent("삼진");
					this.$.reresult10.setContent("출루율");

					this.$.realobj1.setContent(player_data[10]);
					this.$.realobj2.setContent(player_data[11]);
					this.$.realobj3.setContent(player_data[12]);
					this.$.realobj4.setContent(player_data[13]);
					this.$.realobj5.setContent(player_data[14]);
					this.$.realobj6.setContent(player_data[15]);
					this.$.realobj7.setContent(player_data[18]);
					this.$.realobj8.setContent(player_data[20]);
					this.$.realobj9.setContent(player_data[29]);
					this.$.realobj10.setContent(player_data[32]);
					this.$.drawer3.setOpen(true);
				}
			},
			fetch : function() {
				var jsonp = new enyo.JsonpRequest(
						{
							url : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%20%3D%20%22http%3A%2F%2Fwww.koreabaseball.com%2FRecord%2FPlayerSearch.aspx%3Fposition%3D%ED%88%AC%22&format=json&diagnostics=true",
							callbackName : "callback"
						});
				jsonp.go();
				jsonp.response(this, "processResponse");
			},
			processResponse : function(inSender, inResponse) {
				data1 = JSON.stringify(inResponse, null, 2);

				this.fetch5();
			},
			fetch5 : function() {
				var jsonp = new enyo.JsonpRequest(
						{
							url : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%20%3D%20%22http%3A%2F%2Fwww.koreabaseball.com%2FRecord%2FPlayerSearch.aspx%3Fposition%3D%ED%8F%AC%22&format=json&diagnostics=true",
							callbackName : "callback"
						});
				jsonp.go();
				jsonp.response(this, "processResponse5");
			},
			processResponse5 : function(inSender, inResponse) {
				data5 = JSON.stringify(inResponse, null, 2);
				this.fetch6();
			},
			fetch6 : function() {
				var jsonp = new enyo.JsonpRequest(
						{
							url : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%20%3D%20%22http%3A%2F%2Fwww.koreabaseball.com%2FRecord%2FPlayerSearch.aspx%3Fposition%3D%EB%82%B4%22&format=json&diagnostics=true",
							callbackName : "callback"
						});
				jsonp.go();
				jsonp.response(this, "processResponse6");
			},
			processResponse6 : function(inSender, inResponse) {
				data6 = JSON.stringify(inResponse, null, 2);
				this.fetch7();
			},
			fetch7 : function() {
				var jsonp = new enyo.JsonpRequest(
						{
							url : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%20%3D%20%22http%3A%2F%2Fwww.koreabaseball.com%2FRecord%2FPlayerSearch.aspx%3Fposition%3D%EC%99%B8%22&format=json&diagnostics=true",
							callbackName : "callback"
						});
				jsonp.go();
				jsonp.response(this, "processResponse7");
			},
			processResponse7 : function(inSender, inResponse) {
				data7 = JSON.stringify(inResponse, null, 2);
				this.parserOrderKBO();
			},
			parserOrderKBO : function() {
				teamRank2 = new Array(8);
				player = data1.substring(data1.indexOf("playerList"));
				player5 = data5.substring(data5.indexOf("playerList"));
				player6 = data6.substring(data6.indexOf("playerList"));
				player7 = data7.substring(data7.indexOf("playerList"));
				player = player + player5 + player6 + player7;
				alert("complete");
				return true;
			},
			
		});