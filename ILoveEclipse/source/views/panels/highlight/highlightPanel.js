enyo.kind({
	name: "highlightPanel",
	classes: "enyo-unselectable highlight_background",
	style: "background-color:white;",
	components: [
		{kind: "FittableRows", pattern: "activity", classes: "enyo-fit", components: [
			{kind:"FittableColumns", components:[
                {kind:"View", style:"width:100%; height:180px;padding-left:1780px; padding-right:30px;", components:[
			        {kind: "moon.Item", style:"margin:20px; width:100px;",  ontap: "goHome", components: [
			            {kind:"Image", src:"assets/union_item/HomeButton.png"}
			        ]}
			    ]},
			]},
			{kind:"FittableColumns", style:"text-align:center; margin-top:110px; ", components:[
			    {kind: "View", components: [{
					fit: true,
					components: [
						{name: "player", kind: "moon.VideoPlayer", inline:true, classes: "moon-8h", poster: "assets/KBOlogo.jpg",
						style:"width:900px;",
						infoComponents: [
							{kind: "moon.VideoInfoBackground", orient: "left", fit: true},
							{kind: "moon.VideoInfoBackground", orient: "right", components: [
							    {kind:"moon.Clock"}
						    ]}
						], components: [
							{kind: "moon.VideoFullscreenToggleButton"},
							{kind: "moon.IconButton", src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
							{kind: "moon.IconButton", src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
							{kind: "moon.IconButton", src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
							{kind: "moon.IconButton", src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
							{kind: "moon.IconButton", src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
							{kind: "moon.IconButton", src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
							{kind: "moon.IconButton", src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
							{kind: "moon.IconButton", src: "$lib/moonstone/images/video-player/icon-placeholder.png"},
							{kind: "moon.IconButton", src: "$lib/moonstone/images/video-player/icon-placeholder.png"}
						]
					}]
				}
			]},
			{kind: "View", style:"margin-top:65px; margin-left:80px; width:800px;", components: [
				{kind:"moon.Divider", content: "Select video content", style:"color:white; font-size:50px; font-weight: bold;"},
				{kind: "moon.RadioItemGroup", onActivate: "webMovieCounter", style:"padding-top:30px; height:250px; background:white; opacity:0.5;", components: [
				    {name:"spinner", kind:"moon.Spinner", center:true, style:"margin-left:50px; margin-top:60px;"},         
				    {name:"high1", style:"color:black; margin:5px; width:700px; font-size:22px; font-family: 'Malgun Gothic'; font-weight:bold;"},
				    {name:"high2", style:"color:black; margin:5px; width:700px; font-size:22px; font-family: 'Malgun Gothic'; font-weight:bold;"},
				    {name:"high3", style:"color:black; margin:5px; width:700px; font-size:22px; font-family: 'Malgun Gothic'; font-weight:bold;"},
				    {name:"high4", style:"color:black; margin:5px; width:700px; font-size:22px; font-family: 'Malgun Gothic'; font-weight:bold;"},
				]},
//				{classes:"moon-vspacing-m", components: [
//				]}
			]}
		]}
			]}
	],
	create: function(){
		this.inherited(arguments);
		this.fetch();
	},
	bindings: [
		{from:".$.autoplayToggle.value", to:".$.player.autoplay"}
	],
	unload: function() {
		this.$.player.unload();
	},
	load: function() {
		this.$.player.unload();
		this.$.player.setSrc(this.src);
	},
	webMovieCounter: function(inSender, inEvent) {
		var originator = inEvent.originator;
		var input = originator.name;

		if (!inEvent.originator.active) {
			return;
		}

		if(input=="high1"){
			this.src = "http://media.koreabaseball.com:80"+fn[0];
//			alert(this.src);
			this.$.player.setSrc(this.src);
			this.$.videoInfoHeader.setTitle(fn[0]);
		}

		if(input=="high2"){
			this.src = "http://media.koreabaseball.com:80"+fn[1];
			this.$.player.setSrc(this.src);
			this.$.videoInfoHeader.setTitle(fn[1]);
		}

		if(input=="high3"){
			this.src = "http://media.koreabaseball.com:80"+fn[2];
			this.$.player.setSrc(this.src);
			this.$.videoInfoHeader.setTitle(fn[2]);
		}

		if(input=="high4"){
			this.src = "http://media.koreabaseball.com:80"+fn[3];
			this.$.player.setSrc(this.src);
			this.$.videoInfoHeader.setTitle(fn[3]);
		}

	},
	///// 파싱 부분 
	fetch: function() {
//		alert("fetch");
		fn = new Array(4); 

		var jsonp = new enyo.JsonpRequest({
			url:  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%20%3D%20%22http%3A%2F%2Fwww.koreabaseball.com%2FDefault.aspx%22&diagnostics=true",
			callbackName: "callback"
		});
		// send parameters the remote service using the 'go()' method
		jsonp.go();
		jsonp.response(this, "processResponse");

	},   
	processResponse: function(inSender, inResponse) {
//		alert("processResponse");
		dataHighlight = JSON.stringify(inResponse, null, 2);

		this.$.spinner.hide();
		this.parserHighlight();
	},
	parserHighlight: function(){
//		alert(dataHighlight.substring(dataHighlight.indexOf("h_wo")));
		high=dataHighlight.substring(dataHighlight.indexOf("HIGHLIGHT"));
		i=0;

		while((cut=high.indexOf("vod/images"))>0){
			fn[i]=high.substring(cut+18,high.indexOf(".mp4")+4);
//			alert( i +" /"+fn[i]);
			high = high.substring(high.indexOf(".jpg")+4);
			i++;
		}
		this.named();
	},
	named: function(){
		var content = new Array(4);
		for(var i=0; i<4; i++){
			var idx = fn[i].indexOf('2014');
			var M = fn[i].substring(idx+4, idx+6)+"월";
			var D = fn[i].substring(idx+6, idx+8)+"일";
			var left = this.nameMatch(fn[i].substring(idx+8, idx+10));
			var right = this.nameMatch(fn[i].substring(idx+10, idx+12));
			content[i] = "("+M+""+D+") "+left+" vs "+right;
		}
		this.$.high1.setContent(content[0]);
		this.$.high2.setContent(content[1]);
		this.$.high3.setContent(content[2]);
		this.$.high4.setContent(content[3]);
		return true;
	},
	nameMatch: function(name){
		switch(name){
		case "HH" : return "한화";
		case "SK" : return "SK";
		case "LG" : return "LG";
		case "SS" : return "삼성";
		case "WO" : return "넥센";
		case "OB" : return "두산";
		case "LT" : return "롯데";
		case "HT" : return "기아";
		case "NC" : return "NC";
		default : "Error";
		}
	},
	goHome: function(inSender, inEvent) {
		this.unload();
		this.bubbleUp("onGoHome", {name:name});
		return true;
	}
});