enyo.kind({ 
	name: "todaySchedule",
	kind: "View",
	style:"background-color:white;",
	components: [
	    /* {name:"Match1"},
	     {name:"Match2"},
	     {name:"Match3"},
	     {name:"Match4"}*/
{kind:"Button",content:"abs"}
	     //{name:"rankTable", style:"margin-left:30px; margin-right:30px;", allowHtml:true}	     
	],
	create: function(inSender, inEvent){
		this.inherited(arguments);
		this.parserTodaySchedule();
	},
	parserTodaySchedule: function(){
		//todayMatch = new Array(4);
		
		dataTodayMatch = data.substring(data.indexOf("id=\"scrollR_content\""), data.indexOf("<!-- //regular -->"));
		var Idx = 0;
		while (dataTodayMatch.indexOf("stadium")){
			todayMatch.stadium[Idx] = dataTodayMatch.substring(dataTodayMatch.indexOf("strong"),dataTodayMatch.indexOf("strong")+10);
			alert(todayMatch.stadium[Idx]);
			Idx++;
		}
//		var rankIdx = 0;
//		while( data2.indexOf("rank rank") != -1 ){
//			teamRank[rankIdx] = new Array(7);
//			for (var i=0; i<7; i++){
//				var first = data2.indexOf("\"p\": \"")+5;
//				var last = data2.indexOf("\"p\": \"")+14;
//				teamRank[rankIdx][i] = data2.substring(first, last).replace(/[~\s!@\#$%^&*\()\-=+_'"" "]/gi,'');
//				data2 = data2.substring(last);
//			}
//			//alert((rankIdx+1)+". "+teamRank[rankIdx]);
//			rankIdx++;
//		}
//		return true;
	},
});

