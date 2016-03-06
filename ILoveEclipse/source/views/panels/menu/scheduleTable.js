enyo.kind({
	name: "scheduleView",
	style:"background-color:white;",
	kind: "FittableRows", style:"height:300px; ", 
	components: [
		{name: "collection", kind: "enyo.Collection"},
		{
			name: "gridList", spacing: 20, 
			minWidth: 180, minHeight: 270, 
			kind: "moon.DataList", style:"border: 2px solid #cccccc",
			components: [
			             { kind: "GameItem" }
			]
		},
	],
	bindings: [
        {from: ".collection", to: ".$.gridList.collection"},
    ],  

    create: function () {
    	
    	this.inherited(arguments);
    	this.set("collection", new enyo.Collection());
    	this.fetch();
    	
    },

    fetch: function() {
    	
    	var jsonp = new enyo.JsonpRequest({
    		url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%20%3D%20%22http%3A%2F%2Fwww.koreabaseball.com%2FTeamrank%2FTeamGraph.aspx%22&diagnostics=true",
    		callbackName: "callback"
    	});
    	jsonp.go();

    	jsonp.response(this, "processResponse"); /////////////// 28

    },   

    processResponse: function(inSender, inResponse) {

    	dataSchedule = JSON.stringify(inResponse, null, 2);
    	this.parserSchedule();
    },

    parserSchedule: function(){
    	
    	gameItem=new Array(8);

    	var col;
    	var b=0;
    	var inf;
    	var inl;
    	
    	/* 스타디움으로 경기 자르기  */
    	for(var a = 0 ; a < 4 ; a++){

    		data2 = dataSchedule.substring(dataSchedule.indexOf("stadium")+3);

    		var first = data2.indexOf("strong");
    		var last = data2.indexOf("stadium");

    		col=data2.substring(first, last);
    		gameItem[a] = new Array(15);

    		dataSchedule = data2.substring(last);

    		/* 경기중 장소 시간 팀 경기결과 */
    		inf = col.indexOf("strong")+7;
    		inl = inf+2;
    		gameItem[a][b] = col.substring(inf, inl); 
    		col = col.substring(inl);
    		b++;
    		
    		/* 경기전 */
    		if(col.indexOf("time")>0)
    		{
    			gameItem[a][2]=" "; // 점수

    			// 경기 시간 
    			inf =col.indexOf("time")+7;
    			inl = inf+5;

    			gameItem[a][3] = col.substring(inf, inl); 
    			col = col.substring(inl);

    			// away 이미지
    			inf = col.indexOf("image");
    			inl = col.indexOf(".png")+4;

    			gameItem[a][1] = "http://"+col.substring(inf, inl); 
    			col = col.substring(inl);

    			gameItem[a][4]=" "; //

    			b=b+4;

    			col = col.substring(col.indexOf(".png")+4);

    		}
    		/* 경기중 or 경기끝 */
    		else{
    			
    			// away 이미지
    			inf = col.indexOf("image");
    			inl = col.indexOf(".png")+4;

    			gameItem[a][b] = "http://"+col.substring(inf, inl); 
    			col = col.substring(inl);
    			b++;
    			
    			// away 스코어 
    			inf = col.indexOf("score\\")+8; //
    			col = col.substring(inf);
    			inl = col.indexOf("</span>");

    			gameItem[a][b] = col.substring(0, inl); 
    			col = col.substring(inl);
    			b++;

    			/* 경기 끝 */
    			if(col.indexOf("onclick")<0){

    				//경기종료
        			gameItem[a][b] = "경기종료"; 
        			b++;
        			
    			}
    			/* 경기 중 이닝 */
    			else{
    				
        			// 이닝
        			inf = col.indexOf("onclick")+47;
        			inl = inf + 3;

        			gameItem[a][b] = col.substring(inf, inl); 
        			col = col.substring(inl);
        			b++;
        			
    			}

    			// home 스코어 
    			inf = col.indexOf("score\\")+8; //
    			col = col.substring(inf);
    			inl = col.indexOf("</span>");
    			
    			gameItem[a][b] = col.substring(0, inl);
    			col = col.substring(inl);
    			b++;

    		}

    		// home 이미지 
    		inf = col.indexOf("image");
    		inl = col.indexOf(".png")+4;
    		gameItem[a][b] = "http://"+col.substring(inf, inl); 
    		col = col.substring(inl);
    		b++;
/*
    		// 1루
    		inf = col.indexOf("image");
    		inl = col.indexOf(".png")+4;

    		gameItem[a][b] = col.substring(inf, inl); 
    		col = col.substring(inl);
    		b++;

    		// 2루
    		inf = col.indexOf("image");
    		inl = col.indexOf(".png")+4;

    		gameItem[a][b] = col.substring(inf, inl); 
    		col = col.substring(inl);
    		b++;

    		// 3루
    		inf = col.indexOf("image");
    		inl = col.indexOf(".png")+4;

    		gameItem[a][b] = col.substring(inf, inl); 
    		col = col.substring(inl);
*/
    		/*	            
	            	alert("경기장 : "+gameItem[a][0] +" \n" + 
	            		"1 im : "+gameItem[a][1] +" \n" +
	            		"1 so : "+gameItem[a][2] +" \n" +
	            		"ining : "+gameItem[a][3] +" \n" +
	            		"2 so : "+gameItem[a][4] +" \n" +
	            		"2 im : "+gameItem[a][5] +" \n" +
	            		"base1 : "+gameItem[a][6] +" \n" +
	            		"base2 : "+gameItem[a][7] +" \n" +
	            		"base3 : "+gameItem[a][8] +"");*/

    		b=0;

    	}

    	this.refreshItems(gameItem);

    },

    generateGameList: function (gameInfo) {
    	
    	var game = [];

    	for (var a =0; a < 4; ++a) {
    		if(gameInfo[a][1].indexOf(".png")<0)
    			break;
    		game.push({
    			stadium : gameInfo[a][0],
    			awaylogo : gameInfo[a][1],
    			awayscore: gameInfo[a][2], 
    			ining : gameInfo[a][3],
    			homescore: gameInfo[a][4], 
    			homelogo: gameInfo[a][5]
    		/*	    base1 : gameInfo[a][6], 
	           		base2 : gameInfo[a][7], 
	           		base3 : gameInfo[a][8]	*/			
    		});
    	}

    	return game;
    	
    },
    
    refreshItems: function (gameInfo) {

    	var collection = this.get("collection");
    	collection.remove(collection.records);
    	collection.add(this.generateGameList(gameInfo));
    	
    },

});

enyo.kind({
	name: "GameItem",	
	kind: "FittableRows",
	components: [
	             {kind: "FittableColumns", 
	            	 style:"width:400px; height:50px; text-align:center; margin:10px;",
	            	 components: [
	            	              /* home team */                                                                                                                                           			
	            	              {kind: "FittableColumns", noStretch: true, 
	            	            	  style:"text-align:center;",
	            	            	  components: [
	            	            	               {name:"homelogo", kind: "Image", style: "height: 36px; width: 40px;"},
	            	            	               {name:"homescore", style:"font-size:20px; width: 45px;"}
	            	            	               ]},


	            	              /* VS */ 
	            	              {kind: "FittableRows", style:"width:100px; height:40px; text-align:center; ", 
	            	            	   components: [
	            	            	                {kind: "FittableRows", name:"vs", content: "VS", style:"font-size:18px; height:25px;"},
	            	            	                {kind: "FittableRows", name:"stadium", style:"font-size:15px ;height:20px;"}
	            	            	                ]},


	            	              /* away team */ 
	            	              {kind: "FittableColumns", noStretch: true, style:"text-align:center;",
	            	            	   components: [
	            	            	                {name:"awayscore", style:"font-size:20px;width: 45px;"},
	            	            	                {name:"awaylogo", kind: "Image",style: "height: 36px; width: 40px;"}

	            	            	                ]}

	            	              ]}
	             ],
	             bindings:[
	                       {from :".model.stadium", to:".$.stadium.content"},
	                       {from :".model.homelogo", to:".$.homelogo.src"},
	                       {from :".model.homescore", to:".$.homescore.content"},
	                       {from :".model.ining", to:".$.vs.content"},
	                       {from :".model.awayscore", to:".$.awayscore.content"},
	                       {from :".model.awaylogo", to:".$.awaylogo.src"}
	                       ]
});