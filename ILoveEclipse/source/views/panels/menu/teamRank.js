enyo.kind({
	name:"table",
	components:[
	    {kind:"FittableColumns", style:"height:33px;", components:[
	        {name:"rank", classes:"body_column_style width60"}, 
	        {name:"team", classes:"body_column_style width80"}, 
	        {name:"game", classes:"body_column_style width80"}, 
	        {name:"wins", classes:"body_column_style width60"},
	        {name:"losses", classes:"body_column_style width60"},
	        {name:"draws", classes:"body_column_style width60"},
	        {name:"prob", classes:"body_column_style width94"},
	        {name:"series", classes:"body_column_style width72"},
	        {name:"history", classes:"body_column_style width80"}
	    ]}
	],bindings:[
                {from :".model.rank", to:".$.rank.content"},
                {from :".model.team", to:".$.team.content"},
                {from :".model.game", to:".$.game.content"},
                {from :".model.wins", to:".$.wins.content"},
                {from :".model.losses", to:".$.losses.content"},
                {from :".model.draws", to:".$.draws.content"},
                {from :".model.prob", to:".$.prob.content"},
                {from :".model.series", to:".$.series.content"},
                {from :".model.history", to:".$.history.content"}
    ]
});

enyo.kind({ 
	name: "teamRankView",
	kind: "View",
	components: [
	   {kind:"FittableRows", style:"background:white; margin-top:20px; width:645px; height:330px;", components:[
           {kind:"FittableColumns", style:"height:32px;", components:[
               {name:"column1", content:"순위", classes:"column_style width60"}, 
               {name:"column2", content:"팀명", classes:"column_style width80"}, 
               {name:"column3", content:"경기", classes:"column_style width80"}, 
               {name:"column4", content:"승", classes:"column_style width60"},
               {name:"column5", content:"패", classes:"column_style width60"},
               {name:"column6", content:"무", classes:"column_style width60"},
               {name:"column7", content:"승률", classes:"column_style width94"},
               {name:"column8", content:"연속", classes:"column_style width72"},
               {name:"column9", content:"게임차", classes:"column_style width80"}
           ]}, 
           {name:"spinner", kind:"moon.Spinner", center:true, style:"margin-top:100px;"},   
			//{name: "collection", kind: "enyo.Collection"},
           {name: "gridList", kind: "moon.DataList", components: [
		       {kind: "table"}
           ]},
	   ]}
	],
	bindings: [
	             {from: ".collection", to: ".$.gridList.collection"}
	],  
	create: function(inSender, inEvent){
		this.inherited(arguments);
		this.set("collection", new enyo.Collection());
		this.fetch();
	},
	showTable: function () {
    	var collection = this.get("collection");
    	collection.remove(collection.records);
    	collection.add(this.generateTeamRankList());
    },
    generateTeamRankList: function () {
    	var list = [];
    	for (var idx =0; idx < 9; idx++) {
    		list.push({
    			rank : teamRank[idx][0],
    			team : teamRank[idx][1],
    			game: teamRank[idx][2], 
    			wins : teamRank[idx][3],
    			losses: teamRank[idx][4], 
    			draws: teamRank[idx][5],
    			prob: teamRank[idx][6],
    			series: teamRank[idx][8],
    			history: teamRank[idx][7]
    		});
    	}
    	return list;
    },
	fetch: function() {
		var jsonp = new enyo.JsonpRequest({
			url: "http://query.yahooapis.com/v1/public/yql?format=json",
			callbackName: "callback"
		});
		// send parameters the remote service using the 'go()' method
		jsonp.go({
			q: 'select * from html where url = "http://www.koreabaseball.com/Default.aspx"'
		});
		// attach responders to the transaction object
		jsonp.response(this, "processResponse");

		return true;
	},	
	processResponse: function(inSender, inResponse) {
		// do something with it
		data = JSON.stringify(inResponse, null, 2);
		//alert(data.length);
		//this.$.textArea.setValue(data);
		// parsing of KBO order inform.
		this.$.spinner.hide();
		this.parserOrderKBO();
		return true;
	},
	parserOrderKBO: function(){
		teamRank=new Array(9);
		data2 = data.substring(data.indexOf("rank rank"));
		var rankIdx = 0;
		while( data2.indexOf("rank rank") != -1 ){
			teamRank[rankIdx] = new Array(9);
			teamRank[rankIdx][0]=data2.substring(data2.indexOf("rank rank")+9, data2.indexOf("rank rank")+10); // team Rank
			for (var i=1; i<8; i++){
				var first = data2.indexOf("\"p\": \"")+5;
				var last = data2.indexOf("\"p\": \"")+14;
				teamRank[rankIdx][i] = data2.substring(first, last).replace(/[~\s!@\#$%^&*\()\-=+_'"" "]/gi,'');
				data2 = data2.substring(last);
			}
			teamRank[rankIdx][8]=((teamRank[0][3]-teamRank[rankIdx][3])-(teamRank[0][4]-teamRank[rankIdx][4]))/2.0; // 승수, 패수 차이로 게임차 구하기
			
			rankIdx++;
		}
		this.showTable();
		return true;
	}
});


/*
  enyo.kind({ 
	name: "teamRankView",
	kind: "View",
	components: [
	     {name:"rankTable", style:"margin-left:30px; margin-right:30px;", allowHtml:true}	     
	],
	create: function(inSender, inEvent){
		this.inherited(arguments);
		this.fetch();
	},
	fetch: function() {
		var jsonp = new enyo.JsonpRequest({
			url: "http://query.yahooapis.com/v1/public/yql?format=json",
			callbackName: "callback"
		});
		// send parameters the remote service using the 'go()' method
		jsonp.go({
			q: 'select * from html where url = "http://www.koreabaseball.com/Default.aspx"'
		});
		// attach responders to the transaction object
		jsonp.response(this, "processResponse");

		return true;
	},	
	processResponse: function(inSender, inResponse) {
		// do something with it
		data = JSON.stringify(inResponse, null, 2);
		//alert(data.length);
		//this.$.textArea.setValue(data);
		// parsing of KBO order inform.
		this.parserOrderKBO();
		return true;
	},
	parserOrderKBO: function(){
		teamRank=new Array(9);
		data2 = data.substring(data.indexOf("rank rank"));
		var rankIdx = 0;
		while( data2.indexOf("rank rank") != -1 ){
			teamRank[rankIdx] = new Array(7);
			for (var i=0; i<7; i++){
				var first = data2.indexOf("\"p\": \"")+5;
				var last = data2.indexOf("\"p\": \"")+14;
				teamRank[rankIdx][i] = data2.substring(first, last).replace(/[~\s!@\#$%^&*\()\-=+_'"" "]/gi,'');
				data2 = data2.substring(last);
			}
			//alert((rankIdx+1)+". "+teamRank[rankIdx]);
			rankIdx++;
		}
		this.showTable();
		return true;
	},
	showTable: function(){
		htmlCode = "<table><tr><th>Rank</th><th>Team</th><th>game</th><th>Wins</th><th>Losses</th><th>Draws</th><th>"+
					"%</th><th>history</th></tr>";
		for (var i=0; i<9; i++){
			htmlCode += "<tr><td>"+(i+1)+"</td>";
			for(var j=0; j<7; j++){
				htmlCode += "<td>" + teamRank[i][j] + "</td>";
			}
			htmlCode += "</tr>";
		}
		htmlCode += "</table>";
		this.$.rankTable.setContent(htmlCode);

		return htmlCode;
	}
});
*/
