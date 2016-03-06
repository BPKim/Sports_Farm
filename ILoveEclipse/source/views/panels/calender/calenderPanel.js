
enyo
		.kind({
			name : "calenderPanel",
			classes : "moon enyo-unselectable enyo-fit",
			kind : "FittableColumns",

			components : [
					{
						kind : "FittableRows",
						components : [ {
							kind : "moon.Header",
							name : "Header",
							content : "Sche",
							titleBelow : "KBO",
							subTitleBelow : "SK Wyverns",
						}, ]
					},

					{
						kind : "FittableRows",
						fit : true,
						components : [
						//                        {kind: "moon.Scroller", fit:true, components: 
						//                           [
						// {kind: "moon.Item", name: "advertise", components: [
						{
							kind : "View",
							content :
							//"<div id=\"Layer1\" style=\"position:relative; background-color:yellow; margin-left:-808px; margin-top:-290px; width:690; height:0px;  z-index:1; overflow: hidden\" ></div><iframe src=\"http://www.koreabaseball.com/Schedule/CalendarSchedule.aspx\" width='690' height='900'></iframe></div>"
							/*                                            	 "<div id=\"Layer1\" style=\"position:relative; background-color:yellow; margin-left:-8px; margin-top:-348px; width:650px; height:0px; z-index:1; overflow: hidden\" >" +
							                                            	 "<IFRAME SRC='http://www.naver.com'  WIDTH='638' HEIGHT='580' FRAMEBORDER='0' SCROLLING='no' LEFTMARGIN='0' "+
							                                            		 "MARGINHEIGHT='0' MARGINWIDTH='0' NAME='list'  ></IFRAME>"+
							                                            		 "</div>"*/

							/* "<div id=\"Layer1\" style=\"position:relative;  background-color:yellow; margin-left:-260px; margin-top:-260px; width:60px; height:0px; z-index: 100; overflow: hidden\" ></div>"+
							 "<IFRAME SRC=\"http://www.koreabaseball.com/Schedule/CalendarSchedule.aspx\" align='right' WIDTH='1000' HEIGHT='900' FRAMEBORDER='0' SCROLLING='no' LEFTMARGIN='0'"+
							 "MARGINHEIGHT='0' MARGINWIDTH='0' NAME='list'  ></IFRAME>"*/

							"<div id=\"unse\" style=\"position:relative;z-index:1;width:730px;height:630px;\"> "
									+ "<DIV style=\"position:absolute;overflow:hidden;width:730px;height:630px;top:0px;left:0px;\">"
									+ "<DIV style=\"position:absolute;left:-270px;top:-230px;\">"
									+ "<iframe src=\"http://www.koreabaseball.com/Schedule/CalendarSchedule.aspx\" style=schedule scrolling =no WIDTH=1000 HEIGHT=930></iframe> "
									+ "</div>" + "</div> " + "</div>"

							,
							allowHtml : true
						} ],
						ondown : "imageClick"//}
					/*
					{kind: "moon.Divider", content: "Result"},
					{kind: "moon.BodyText", name: "result", content: "No change yet"},
					{kind: "moon.BodyText", name: "show", content: "asdf"}*/
					//                           ]
					//                        }
					//]
					}, {
						kind : "moon.Button",
						content : "BACK",
						ontap : "goHome"
					} ],
			bindings : [ {
				from : ".collection",
				to : ".$.gridList.collection"
			},
			/* 달력 값 보내기 */
			//                      {from: ".$.calendar.value", to: ".$.input.value", transform: function(val) {this.$.match.setContent(val.toDateString());} /*, transform:"comfirm"*/}
			//                      {from: ".$.calendar.value", to: ".$.show.content"},
			//                      {from: ".$.calendar.value", to:".$.picker.value", oneWay:false},
			//                      {from: ".$.calendar.value", to:".$.input.value", transform: function(val) {return val.toDateString();} }
			],

			/* 창 뜨기전에 실행 */
			create : function() {
				this.inherited(arguments);
				// we set the collection that will fire the binding and add it to the list
				this.set("collection", new enyo.Collection());
			},
			/* 창 다뜨고  실행 하기 */
			start : function() {
				this.changed();
			},
			changed : function(inSender, inEvent) {
				if (this.$.result && inEvent.value) { //30 Line result 값 바꿈 
				//           this.$.result.setContent("Current Date" + " changed to " + inEvent.value.toDateString());
				//              this.$.match.setContent(inEvent.value.toDateString()+" Match");
				}
				this.fetch();
			},

			fetch : function() {
				var jsonp = new enyo.JsonpRequest(
						{
							url : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%20%3D%20%22http%3A%2F%2Fwww.koreabaseball.com%2FTeamrank%2FTeamGraph.aspx%22&diagnostics=true",
							callbackName : "callback"
						});
				jsonp.go();

				jsonp.response(this, "processResponse"); /////////////// 28

			},
			/// 24 Line 
			processResponse : function(inSender, inResponse) {
				// do something with it
				dataCalender = JSON.stringify(inResponse, null, 2);
				//alert(dataCalender.length);
				//this.$.textArea.setValue(dataCalender);

				// parsing of KBO order inform.
				this.parserCalener();////////////////////// 39
			},
			// 39 Line
			parserCalener : function() {
				gameItem = new Array(8);

				var col;
				var b = 0;
				var inf;
				var inl;

				/* 스타디움으로 경기 자르기  */
				for (var a = 0; a < 4; a++) {

					data2 = dataCalender.substring(dataCalender
							.indexOf("stadium") + 3);

					var first = data2.indexOf("strong");
					var last = data2.indexOf("stadium");

					alert(a + " - " + data2.substring(first, last));

					col = data2.substring(first, last);
					gameItem[a] = new Array(15);

					dataCalender = data2.substring(last); // 다음에 쓸거 

					/* 경기중 장소 시간 팀 경기결과 */
					// 경기장
					inf = col.indexOf("strong") + 7;
					inl = inf + 2;
					gameItem[a][b] = col.substring(inf, inl);
					col = col.substring(inl);
					b++;

					// away 이미지
					inf = col.indexOf("image");
					inl = col.indexOf(".png") + 4;

					gameItem[a][b] = "http://" + col.substring(inf, inl);
					col = col.substring(inl);
					b++;

					/* 경기전 */
					if (col.indexOf("score") < 0) {

						gameItem[a][2] = " ";
						gameItem[a][3] = "  Not yet  ";
						gameItem[a][4] = " ";

						b = b + 3;

						col = col.substring(col.indexOf(".png") + 4);

					} else {

						// away 스코어 
						inf = col.indexOf("score") + 8;
						inl = inf + 1;

						gameItem[a][b] = col.substring(inf, inl);
						col = col.substring(inl);
						b++;

						// 이닝
						inf = col.indexOf("onclick") + 47;
						inl = inf + 3;

						gameItem[a][b] = col.substring(inf, inl);
						col = col.substring(inl);
						b++;

						// home 스코어 
						inf = col.indexOf("score") + 8;
						inl = inf + 1;

						gameItem[a][b] = col.substring(inf, inl);
						col = col.substring(inl);
						b++;

					}

					// home 이미지 
					inf = col.indexOf("image");
					inl = col.indexOf(".png") + 4;

					gameItem[a][b] = "http://" + col.substring(inf, inl);
					col = col.substring(inl);
					b++;

					// 1루
					inf = col.indexOf("image");
					inl = col.indexOf(".png") + 4;

					gameItem[a][b] = col.substring(inf, inl);
					col = col.substring(inl);
					b++;

					// 2루
					inf = col.indexOf("image");
					inl = col.indexOf(".png") + 4;

					gameItem[a][b] = col.substring(inf, inl);
					col = col.substring(inl);
					b++;

					// 3루
					inf = col.indexOf("image");
					inl = col.indexOf(".png") + 4;

					gameItem[a][b] = col.substring(inf, inl);
					col = col.substring(inl);

					alert("경기장 : " + gameItem[a][0] + " \n" + "1 im : "
							+ gameItem[a][1] + " \n" + "1 so : "
							+ gameItem[a][2] + " \n" + "ining : "
							+ gameItem[a][3] + " \n" + "2 so : "
							+ gameItem[a][4] + " \n" + "2 im : "
							+ gameItem[a][5] + " \n" + "base1 : "
							+ gameItem[a][6] + " \n" + "base2 : "
							+ gameItem[a][7] + " \n" + "base3 : "
							+ gameItem[a][8] + "");

					b = 0;

				}

				this.refreshItems(gameItem);

				//         return true;
			},

			generateGameList : function(gameInfo) {
				var game = [];

				alert("generateGameList start");
				for (var a = 0; a < 4; ++a) {
					game.push({
						stidum : gameInfo[a][0],
						awaylogo : gameInfo[a][1],
						awayscore : gameInfo[a][2],
						ining : gameInfo[a][3],
						homescore : gameInfo[a][4],
						homelogo : gameInfo[a][5],
					/*                    base1 : gameInfo[a][6], 
					 base2 : gameInfo[a][7], 
					 base3 : gameInfo[a][8]   */
					});
				}
				alert("generateGameList start");

				return game;
			},
			refreshItems : function(gameInfo) {

				// we fetch our collection reference
				var collection = this.get("collection");
				// we now remove all of the current records from the collection

				collection.remove(collection.records);
				alert("refresh start");
				// and we insert all new records that will update the list
				collection.add(this.generateGameList(gameInfo));
				alert("refresh end");
			},
			comfirm : function() {
				alert("comfirm");
			},
			goHome : function(inSender, inEvent) {
				this.bubbleUp("onGoHome");
				return true;
			},

		});

enyo
		.kind({
			name : "myapp.GameItem",
			kind : "moon.Item",
			components : [ {
				kind : "FittableColumns",
				classes : "fittable-sample-height fittable-sample-box fittable-sample-o fittable-sample-mlr fittable-sample-mtb",
				components : [
						/* home team */

						{
							kind : "FittableRows",
							noStretch : true,
							classes : "fittable-sample-height fittable-sample-box fittable-sample-o fittable-sample-mtb",
							components : [
									{
										name : "homelogo",
										kind : "Image",
										src : "http://image.koreabaseball.com/home/images/common/emblem/laegue_SK.png",
										style : "height: 40px; width: 40px;"
									},
									{
										name : "homescore",
										content : "10",
										classes : "fittable-sample-box fittable-sample-mlr fittable-sample-mtb"
									} ]
						},

						//                                   {name:"homepitcher", content: "Kim", classes: "fittable-sample-box"},

						/* VS */
						{
							kind : "FittableRows", /*fit: true,*/
							noStretch : true,
							classes : "fittable-sample-height fittable-sample-box fittable-sample-o fittable-sample-mtb",
							components : [ {
								name : "vs",
								content : "VS",
								classes : "fittable-sample-box"
							}, {
								name : "stidum",
								content : "MunHak",
								classes : "fittable-sample-box"
							} ]
						},

						/* away team */
						//                                   {name:"awaypitcher", content: "Lee", classes: "fittable-sample-box"},
						{
							kind : "FittableRows",
							noStretch : true,
							classes : "fittable-sample-height fittable-sample-box fittable-sample-o fittable-sample-mtb",
							components : [
									{
										name : "awaylogo",
										kind : "Image",
										src : "http://image.koreabaseball.com/home/images/common/emblem/laegue_HH.png",
										style : "height: 40px; width: 40px;"
									},
									{
										name : "awayscore",
										content : "0",
										classes : "fittable-sample-box fittable-sample-mlr fittable-sample-mtb"
									} ]
						}

				]
			} ],
			bindings : [ {
				from : ".model.stidum",
				to : ".$.stidum.content"
			}, {
				from : ".model.homelogo",
				to : ".$.homelogo.src"
			}, {
				from : ".model.homescore",
				to : ".$.homescore.content"
			}, {
				from : ".model.ining",
				to : ".$.vs.content"
			}, {
				from : ".model.awayscore",
				to : ".$.awayscore.content"
			}, {
				from : ".model.awaylogo",
				to : ".$.awaylogo.src"
			} ]
		});