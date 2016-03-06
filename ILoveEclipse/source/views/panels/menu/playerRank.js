enyo.kind({ 
	name: "pitcherView",
	kind: "View", 
	style:"margin-top:20px;",
	components: [
	     {name:"pitcherTable", kind:"FittableColumns", style:"background-color:#e30450;", components:[
	         {name:"win", kind:"FittableRows", style:"background-color:white; width:215px;", components:[
	             {content:"승리", classes:"pitcherTable_Tap"},
	             {kind:"View", style:"border: 1px solid #e30450;", components:[
		             {kind:"FittableColumns", style:"padding:25px; ", components: [
		                 {name:"firstWinsImage", classes:"pitcherTable_1st_Player", kind:"Image"},
		                 {kind:"FittableRows", components: [
		                     {name:"firstWinsNumber", classes:"pitcherTable_1st_Player_Number"},
		                     {name:"firstWinsName", classes:"pitcherTable_1st_Player_Name"},
		                     {name:"firstWinsTeam", classes:"pitcherTable_1st_Player_Team"}
		                 ]},
		             ]},
		             {name:"winsPlayer2", classes:"pitcherTable_remainder_Player"},
		             {name:"winsPlayer3", classes:"pitcherTable_remainder_Player"},
		             {name:"winsPlayer4", classes:"pitcherTable_remainder_Player"},
		             {name:"winsPlayer5", classes:"pitcherTable_remainder_Player"}
	             ]}
             ]},
	         {name:"ERA", kind:"FittableRows", style:"background-color:white; width:215px; ", components:[
                 {content:"방어율", classes:"pitcherTable_Tap"},
	             {kind:"View", style:"border: 1px solid #e30450;", components:[
		             {kind:"FittableColumns", style:"padding:25px; ", components: [
		                 {name:"firstERAImage", classes:"pitcherTable_1st_Player", kind:"Image"},
		                 {kind:"FittableRows", components: [
		                     {name:"firstERANumber", classes:"pitcherTable_1st_Player_Number"},
		                     {name:"firstERAName", classes:"pitcherTable_1st_Player_Name"},
		                     {name:"firstERATeam", classes:"pitcherTable_1st_Player_Team"}
		                 ]},
		             ]},
		             {name:"ERAPlayer2", classes:"pitcherTable_remainder_Player"},
		             {name:"ERAPlayer3", classes:"pitcherTable_remainder_Player"},
		             {name:"ERAPlayer4", classes:"pitcherTable_remainder_Player"},
		             {name:"ERAPlayer5", classes:"pitcherTable_remainder_Player"}
	             ]}
	         ]},
	         {name:"SO", kind:"FittableRows", style:"background-color:white; width:215px;", components:[
                 {content:"삼진", classes:"pitcherTable_Tap"},
	             {kind:"View", style:"border: 1px solid #e30450;", components:[
		             {kind:"FittableColumns", style:"padding:25px; ", components: [
		                 {name:"firstSVImage", classes:"pitcherTable_1st_Player", kind:"Image"},
		                 {kind:"FittableRows", components: [
		                     {name:"firstSVNumber", classes:"pitcherTable_1st_Player_Number"},
		                     {name:"firstSVName", classes:"pitcherTable_1st_Player_Name"},
		                     {name:"firstSVTeam", classes:"pitcherTable_1st_Player_Team"}
		                 ]},
		             ]},
		             {name:"SVPlayer2", classes:"pitcherTable_remainder_Player"},
		             {name:"SVPlayer3", classes:"pitcherTable_remainder_Player"},
		             {name:"SVPlayer4", classes:"pitcherTable_remainder_Player"},
		             {name:"SVPlayer5", classes:"pitcherTable_remainder_Player"}
	             ]}
	         ]},
	     ]}
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
		this.parserOrderPitcher();
		return true;
	},
	parserOrderPitcher: function(){
		pitcherRank=new Array(3);
		pitcherImg=new Array(3);
		pitcherNum=new Array(3);
		data2 = data.substring(data.indexOf("topPlayer"));
		for (var i=0; i<3; i++){
			pitcherRank[i] = new Array(5);
			pitcherNum[i] = new Array(5);
			data2 = data2.substring(data2.indexOf("pitcherCont"+(i+1)));
			pitcherImg[i] = data2.substring(data2.indexOf("src")+7,data2.indexOf("jpg")+3);
			for(var k=0; k<5; k++) {
				data2 = data2.substring(data2.indexOf("no"));
				pitcherNum[i][k] = data2.substring(data2.indexOf("no")+2,data2.indexOf("no")+3);
				
				first =  data2.indexOf("content")+10;
				end = data2.indexOf("}");
				pitcherRank[i][k] = data2.substring(first, end).replace(/[~\s,"" "]/gi,'');
//				alert(data2.substring(first, end));
				data2 = data2.substring(end);
			}
		//	alert(pitcherRank[i]);
		}
		this.showTable();
		return true;
	},

	showTable: function(){
		this.$.firstWinsImage.setSrc('http://www.koreabaseball.com'+pitcherImg[0]);
		var first = pitcherRank[0][0];
		this.$.firstWinsNumber.setContent(first.substring(first.indexOf(')')+1));
		this.$.firstWinsTeam.setContent(first.substring(first.indexOf('('),first.indexOf(')')+1));
		this.$.firstWinsName.setContent(first.substring(0,first.indexOf('(')));
		this.$.winsPlayer2.setContent(pitcherNum[0][1]+". "+pitcherRank[0][1].substring(0, pitcherRank[0][1].indexOf(")")+1)+" "+pitcherRank[0][1].substring(pitcherRank[0][1].indexOf(")")+1));
		this.$.winsPlayer3.setContent(pitcherNum[0][2]+". "+pitcherRank[0][2].substring(0, pitcherRank[0][2].indexOf(")")+1)+" "+pitcherRank[0][2].substring(pitcherRank[0][2].indexOf(")")+1));
		this.$.winsPlayer4.setContent(pitcherNum[0][3]+". "+pitcherRank[0][3].substring(0, pitcherRank[0][3].indexOf(")")+1)+" "+pitcherRank[0][3].substring(pitcherRank[0][3].indexOf(")")+1));
		this.$.winsPlayer5.setContent(pitcherNum[0][4]+". "+pitcherRank[0][4].substring(0, pitcherRank[0][4].indexOf(")")+1)+" "+pitcherRank[0][4].substring(pitcherRank[0][4].indexOf(")")+1));
		

		this.$.firstERAImage.setSrc('http://www.koreabaseball.com'+pitcherImg[1]);
		var first = pitcherRank[1][0];
		this.$.firstERANumber.setContent(first.substring(first.indexOf(')')+1));
		this.$.firstERATeam.setContent(first.substring(first.indexOf('('),first.indexOf(')')+1));
		this.$.firstERAName.setContent(first.substring(0,first.indexOf('(')));
		this.$.ERAPlayer2.setContent(pitcherNum[1][1]+". "+pitcherRank[1][1].substring(0, pitcherRank[1][1].indexOf(")")+1)+" "+pitcherRank[1][1].substring(pitcherRank[1][1].indexOf(")")+1));
		this.$.ERAPlayer3.setContent(pitcherNum[1][2]+". "+pitcherRank[1][2].substring(0, pitcherRank[1][2].indexOf(")")+1)+" "+pitcherRank[1][2].substring(pitcherRank[1][2].indexOf(")")+1));
		this.$.ERAPlayer4.setContent(pitcherNum[1][3]+". "+pitcherRank[1][3].substring(0, pitcherRank[1][3].indexOf(")")+1)+" "+pitcherRank[1][3].substring(pitcherRank[1][3].indexOf(")")+1));
		this.$.ERAPlayer5.setContent(pitcherNum[1][4]+". "+pitcherRank[1][4].substring(0, pitcherRank[1][4].indexOf(")")+1)+" "+pitcherRank[1][4].substring(pitcherRank[1][4].indexOf(")")+1));
		
		this.$.firstSVImage.setSrc('http://www.koreabaseball.com'+pitcherImg[2]);
		var first = pitcherRank[2][0];
		this.$.firstSVNumber.setContent(first.substring(first.indexOf(')')+1));
		this.$.firstSVTeam.setContent(first.substring(first.indexOf('('),first.indexOf(')')+1));
		this.$.firstSVName.setContent(first.substring(0,first.indexOf('(')));
		this.$.SVPlayer2.setContent(pitcherNum[2][1]+". "+pitcherRank[2][1].substring(0, pitcherRank[2][1].indexOf(")")+1)+" "+pitcherRank[2][1].substring(pitcherRank[2][1].indexOf(")")+1));
		this.$.SVPlayer3.setContent(pitcherNum[2][2]+". "+pitcherRank[2][2].substring(0, pitcherRank[2][2].indexOf(")")+1)+" "+pitcherRank[2][2].substring(pitcherRank[2][2].indexOf(")")+1));
		this.$.SVPlayer4.setContent(pitcherNum[2][3]+". "+pitcherRank[2][3].substring(0, pitcherRank[2][3].indexOf(")")+1)+" "+pitcherRank[2][3].substring(pitcherRank[2][3].indexOf(")")+1));
		this.$.SVPlayer5.setContent(pitcherNum[2][4]+". "+pitcherRank[2][4].substring(0, pitcherRank[2][4].indexOf(")")+1)+" "+pitcherRank[2][4].substring(pitcherRank[2][4].indexOf(")")+1));
	}
});




//------------------------------------------------------------------------------------------------------------------------

enyo.kind({ 
	name: "hitterView",
	kind: "View",
	style:"margin-top:20px;",
	components: [
	     {name:"hitterTabel",  kind:"FittableColumns", style:"background-color:#e30450; ", components:[
	         {name:"average", kind:"FittableRows", style:"background-color:white; width:215px;", components:[
	             {content:"타율", classes:"hitterTabel_Tap"},
	             {kind:"View", style:"border: 1px solid #e30450;", components:[
		             {kind:"FittableColumns", style:"padding:25px; ", components: [
		                 {name:"firstAverageImage", classes:"hitterTabel_1st_Player", kind:"Image"},
		                 {kind:"FittableRows", components: [
		                     {name:"firstAverageNumber", classes:"hitterTabel_1st_Player_Number"},
		                     {name:"firstAverageName", classes:"hitterTabel_1st_Player_Name"},
		                     {name:"firstAverageTeam", classes:"hitterTabel_1st_Player_Team"}
		                 ]},
		             ]},
		             {name:"averagePlayer2", classes:"hitterTabel_remainder_Player"},
		             {name:"averagePlayer3", classes:"hitterTabel_remainder_Player"},
		             {name:"averagePlayer4", classes:"hitterTabel_remainder_Player"},
		             {name:"averagePlayer5", classes:"hitterTabel_remainder_Player"}
	             ]}
             ]},
	         {name:"homerun", kind:"FittableRows", style:"background-color:white; background-color:white; width:215px;", components:[
                 {content:"홈런", classes:"hitterTabel_Tap"},
	             {kind:"View", style:"border: 1px solid #e30450;", components:[
		             {kind:"FittableColumns", style:"padding:25px; ", components: [
		                 {name:"firstHomerunImage", classes:"hitterTabel_1st_Player", kind:"Image"},
		                 {kind:"FittableRows", components: [
		                     {name:"firstHomerunNumber", classes:"hitterTabel_1st_Player_Number"},
		                     {name:"firstHomerunName", classes:"hitterTabel_1st_Player_Name"},
		                     {name:"firstHomerunTeam", classes:"hitterTabel_1st_Player_Team"}
		                 ]},
		             ]},
		             {name:"homerunPlayer2", classes:"hitterTabel_remainder_Player"},
		             {name:"homerunPlayer3", classes:"hitterTabel_remainder_Player"},
		             {name:"homerunPlayer4", classes:"hitterTabel_remainder_Player"},
		             {name:"homerunPlayer5", classes:"hitterTabel_remainder_Player"}
		         ]}
	         ]},
	         {name:"hitpoint", kind:"FittableRows", style:"background-color:white; background-color:white; width:215px;", components:[
                 {content:"타점", classes:"hitterTabel_Tap"},
	             {kind:"View", style:"border: 1px solid #e30450;", components:[
		             {kind:"FittableColumns", style:"padding:25px; ", components: [
		                 {name:"firstHitpointImage", classes:"hitterTabel_1st_Player", kind:"Image"},
		                 {kind:"FittableRows", components: [
		                     {name:"firstHitpointNumber", classes:"hitterTabel_1st_Player_Number"},
		                     {name:"firstHitpointName", classes:"hitterTabel_1st_Player_Name"},
		                     {name:"firstHitpointTeam", classes:"hitterTabel_1st_Player_Team"}
		                 ]},
		             ]},
		             {name:"hitpointPlayer2", classes:"hitterTabel_remainder_Player"},
		             {name:"hitpointPlayer3", classes:"hitterTabel_remainder_Player"},
		             {name:"hitpointPlayer4", classes:"hitterTabel_remainder_Player"},
		             {name:"hitpointPlayer5", classes:"hitterTabel_remainder_Player"}
	             ]}
	         ]},
	     ]}
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
		this.parserOrderhitter();
		return true;
	},
	parserOrderhitter: function(){
		hitterRank=new Array(3);
		hitterImg=new Array(3);
		hitterNum=new Array(3);
		data2 = data.substring(data.indexOf("topPlayer"));
		for (var i=0; i<3; i++){
			hitterRank[i] = new Array(5);
			hitterNum[i] = new Array(5);
			data2 = data2.substring(data2.indexOf("hitterCont"+(i+1)));
			hitterImg[i] = data2.substring(data2.indexOf("src")+7,data2.indexOf("jpg")+3);
			for(var k=0; k<5; k++) {
				data2 = data2.substring(data2.indexOf("no"));
				hitterNum[i][k] = data2.substring(data2.indexOf("no")+2,data2.indexOf("no")+3);
				
				first =  data2.indexOf("content")+10;
				end = data2.indexOf("}");
				hitterRank[i][k] = data2.substring(first, end).replace(/[~\s,"" "]/gi,'');
//				alert(data2.substring(first, end));
				data2 = data2.substring(end);
			}
		//	alert(hitterRank[i]);
		}
		this.showTable();
		return true;
	},

	showTable: function(){
		this.$.firstAverageImage.setSrc('http://www.koreabaseball.com'+hitterImg[0]);
		var first = hitterRank[0][0];
		this.$.firstAverageNumber.setContent(first.substring(first.indexOf(')')+1));
		this.$.firstAverageTeam.setContent(first.substring(first.indexOf('('),first.indexOf(')')+1));
		this.$.firstAverageName.setContent(first.substring(0,first.indexOf('(')));
		this.$.averagePlayer2.setContent(hitterNum[0][1]+". "+hitterRank[0][1].substring(0, hitterRank[0][1].indexOf(")")+1)+" "+hitterRank[0][1].substring(hitterRank[0][1].indexOf(")")+1));
		this.$.averagePlayer3.setContent(hitterNum[0][2]+". "+hitterRank[0][2].substring(0, hitterRank[0][2].indexOf(")")+1)+" "+hitterRank[0][2].substring(hitterRank[0][2].indexOf(")")+1));
		this.$.averagePlayer4.setContent(hitterNum[0][3]+". "+hitterRank[0][3].substring(0, hitterRank[0][3].indexOf(")")+1)+" "+hitterRank[0][3].substring(hitterRank[0][3].indexOf(")")+1));
		this.$.averagePlayer5.setContent(hitterNum[0][4]+". "+hitterRank[0][4].substring(0, hitterRank[0][4].indexOf(")")+1)+" "+hitterRank[0][4].substring(hitterRank[0][4].indexOf(")")+1));
		

		this.$.firstHomerunImage.setSrc('http://www.koreabaseball.com'+hitterImg[1]);
		var first = hitterRank[1][0];
		this.$.firstHomerunNumber.setContent(first.substring(first.indexOf(')')+1));
		this.$.firstHomerunTeam.setContent(first.substring(first.indexOf('('),first.indexOf(')')+1));
		this.$.firstHomerunName.setContent(first.substring(0,first.indexOf('(')));
		this.$.homerunPlayer2.setContent(hitterNum[1][1]+". "+hitterRank[1][1].substring(0, hitterRank[1][1].indexOf(")")+1)+" "+hitterRank[1][1].substring(hitterRank[1][1].indexOf(")")+1));
		this.$.homerunPlayer3.setContent(hitterNum[1][2]+". "+hitterRank[1][2].substring(0, hitterRank[1][2].indexOf(")")+1)+" "+hitterRank[1][2].substring(hitterRank[1][2].indexOf(")")+1));
		this.$.homerunPlayer4.setContent(hitterNum[1][3]+". "+hitterRank[1][3].substring(0, hitterRank[1][3].indexOf(")")+1)+" "+hitterRank[1][3].substring(hitterRank[1][3].indexOf(")")+1));
		this.$.homerunPlayer5.setContent(hitterNum[1][4]+". "+hitterRank[1][4].substring(0, hitterRank[1][4].indexOf(")")+1)+" "+hitterRank[1][4].substring(hitterRank[1][4].indexOf(")")+1));
		
		this.$.firstHitpointImage.setSrc('http://www.koreabaseball.com'+hitterImg[2]);
		var first = hitterRank[2][0];
		this.$.firstHitpointNumber.setContent(first.substring(first.indexOf(')')+1));
		this.$.firstHitpointTeam.setContent(first.substring(first.indexOf('('),first.indexOf(')')+1));
		this.$.firstHitpointName.setContent(first.substring(0,first.indexOf('(')));
		this.$.hitpointPlayer2.setContent(hitterNum[2][1]+". "+hitterRank[2][1].substring(0, hitterRank[2][1].indexOf(")")+1)+" "+hitterRank[2][1].substring(hitterRank[2][1].indexOf(")")+1));
		this.$.hitpointPlayer3.setContent(hitterNum[2][2]+". "+hitterRank[2][2].substring(0, hitterRank[2][2].indexOf(")")+1)+" "+hitterRank[2][2].substring(hitterRank[2][2].indexOf(")")+1));
		this.$.hitpointPlayer4.setContent(hitterNum[2][3]+". "+hitterRank[2][3].substring(0, hitterRank[2][3].indexOf(")")+1)+" "+hitterRank[2][3].substring(hitterRank[2][3].indexOf(")")+1));
		this.$.hitpointPlayer5.setContent(hitterNum[2][4]+". "+hitterRank[2][4].substring(0, hitterRank[2][4].indexOf(")")+1)+" "+hitterRank[2][4].substring(hitterRank[2][4].indexOf(")")+1));
	}
});