enyo.kind({	
	name: "menuPanel", 
	kind: "View",
	classes:"menu_background", 
	pattern: "activity", 
	components: [
	{kind: "View", style:"text-align:center;", components:[
		// header section
	    {name:"headMargin", style:"height:250px;"},
		// body section     
		{kind: "enyo.FittableColumns", style:"Text-align:center; margin:20px;", fit: true, components: [
	        {kind: "enyo.FittableRows", style:"text-align:right; margin-right:20px;", components: [
				{kind: "View", name: "play", style:"margin-top:10px; margin-bottom:30px;", components: [
                    {kind: "moon.Image", src: "assets/main_item/MainPlay.png"}
                ], ontap: "imageClick"},
                {kind: "View", name: "highlight", style:"margin-bottom:30px;", components: [
	                {kind: "moon.Image", src: "assets/main_item/MainHighlight.png"}
                ], ondown: "imageClick"},
                {kind: "View", name: "todayNews", components: [
                    {kind: "moon.Image", src: "assets/main_item/MainNews.png", }
                ], ondown: "imageClick"}                 
			]}, 
			{kind: "enyo.FittableRows", style:"text-align:right; margin-right:20px;", components: [
                {kind:"enyo.FittableColumns",  style:" width:787px; height:276px; margin-top:10px; margin-bottom:12px;", components:[
			    {kind:"View", classes:"schedule_background", style:"padding-top:10px; width:591px;", components:[	
//					    {kind:"scheduleView2", style:"background-color:white; margin-left:150px; width:430px; height:255px;"}
			                {kind:"scheduleView", style:"background-color:white; margin-left:150px; width:430px; height:255px;"}
					]},
					{name:"calender", kind: "moon.Image",  style:"padding-left:22px;", src: "assets/main_item/calender.jpg", ondown: "imageClick"}
				]},   
			    {kind:"View", classes:"table_background",style:"Text-align:center; width:787px; height:370px;", components:[                                                                                                    
			         {kind:"enyo.FittableColumns", components:[
			             {kind:"enyo.FittableRows", components:[
			                 {style:"margin-bottom:150px;"},
			                 {name:"tap_teamRank", content:"Team", value:"0", style:"background-color: white; color: #e30450;",classes:"tap_teamRank", ontap:"tapRankPage"},
			                 {name:"tap_pitcherRank", content:"Pitcher", value:"1", style:"background-color: #e30450; color: white;", classes:"tap_pitcherRank", ontap:"tapRankPage"},
			                 {name:"tap_hitterRank",content:"Hitter", value:"2", style:"background-color: #e30450; color: white;", classes:"tap_hitterRank", ontap:"tapRankPage"},
			             ]},

					     {name: "rankInfo", kind: "moon.Panels", arrangerKind: "CardArranger", components: [
							{kind:"teamRankView"},
							{kind:"pitcherView"},
							{kind:"hitterView"}
					     ], fit:true, style:"margin-left:14px; width:654px; height:370px; background-color:#e30450; text-align:center;"}
			         ]}
			    ]},
			]},
				
			{kind: "enyo.FittableRows", components: [     
			    {kind: "View", style:"margin-top:10px; margin-bottom:40px;", components: [
			        {kind: "moon.Image", src: "assets/main_item/logoadd.jpg"}
			    ], ondown: "goAdvertise"},
			    {kind:"enyo.FittableColumns", components:[
			        {kind: "View", components: [
			            {kind: "moon.Image", src: "assets/main_item/logofacebook.jpg"}
			        ], ondown: "goFacebook"},
			        {kind: "View", style:"margin-left:20px;", components: [
                        {kind: "moon.Image", src: "assets/main_item/logotwitter.jpg"}
                    ], ondown: "goTwitter"}
			    ]}
//				{kind: "moon.Item", name: "twitter", components: [
//				     {kind:"moon.Image", classes : "my-border-o", src: "assets/twitter.jpg" },
//		             {name:"twi", fit:true, classes:"ajax-sample-source", allowHtml:true},
//				     {content: "<iframe src=\"WebContent/twitter.html\" width=400 height=400></iframe>", allowHtml:true }
//				], ondown: "imageClick"},
			]},			
		]}
	]}
	],
	handlers: {
		onActive:"twitter"
	},
	create: function(inSender, inEvent){
		this.inherited(arguments);
		
	},
	tapRankPage: function(inSender, inEvent) {
		var idx = inSender.value;
		if(idx == 0){
			this.$.tap_teamRank.setStyle("background-color: white; color:#e30450;");
			this.$.tap_pitcherRank.setStyle("background-color:#e30450; color:white");  
			this.$.tap_hitterRank.setStyle("background-color:#e30450; color:white");  
		} else if (idx == 1){
			this.$.tap_teamRank.setStyle("background-color:#e30450; color:white");  
			this.$.tap_pitcherRank.setStyle("background-color: white; color:#e30450;");
			this.$.tap_hitterRank.setStyle("background-color:#e30450; color:white");
		} else if (idx == 2){
			this.$.tap_teamRank.setStyle("background-color:#e30450; color:white");  
			this.$.tap_pitcherRank.setStyle("background-color:#e30450; color:white");  
			this.$.tap_hitterRank.setStyle("background-color: white; color:#e30450;");
		}
		this.$.rankInfo.set("index", idx);
    	return true;
	},
	goHome: function(inSender, inEvent){
		this.bubbleUp("onGoHome");
		return true;
	},
	imageClick: function(inSender, inEvent) {
//		alert(inSender.name); // 
		var name = inSender.name;
		this.bubbleUp("onShowPanel", {name:name});
		return true;
	},
	goAdvertise: function(){
//		location = "http://developer.lge.com/webOSTV/";
		enyo.windows.activate("http://developer.lge.com/webOSTV/",scrollbar=yes);
	},
	goFacebook: function(){
		location = "https://www.facebook.com/hashtag/KBO?fref=ts";
	},
	goTwitter: function(){
		location = "https://twitter.com/search?q=%EC%95%BC%EA%B5%AC%20OR%20KBO&src=savs/";
	}
});
