enyo.kind({
	name:"todayNewsPanel", 
	kind: "View",
	classes:"todayNews_background",
	components:[
	    {kind:"View", style:"width:100%; height:180px; padding-left:1780px; padding-right:30px;", components:[
            {kind: "moon.Item", style:"margin:20px; width:100px;",  ontap: "goHome", components: [
	    	    {kind:"Image", src:"assets/union_item/HomeButton.png"}
	    	]}
	    ]},
	    {kind: "FittableColumns", style:"margin-top: 65px; margin-left:30px;", components: [
            {kind: "FittableColumns", components: [
	            {kind: "View",  components: [                                   
	                {kind: "moon.Icon", icon: "arrowsmallleft", small: false, classes:"headLine_arrow", small: false, ontap: "previous"},
	            ]},
	            {kind: "FittableRows", fit: true, components: [
	                {content: "HeadLine", classes:"headLine"},                                          
	                {kind: "moon.Item", style:"width:700px; text-align:center; background:white;", name: "headLine", components: [  
		                {name:"carousel", kind:"ImageCarousel", style:"height:498px;", onload:"load", onZoom:"zoom", onerror:"error", onTransitionStart: "transitionStart", onTransitionFinish: "transitionFinish"},
		                {name: "headLineText1", classes:"headLine_text1"},
		                {name: "headLineText2", classes:"headLine_text2"},
	                ], ondown: "clikedHeadLine"},
	                {kind: "moon.RadioItemGroup", style:"text-align:center", onActivate:"buttonActivated", components: [
						{name:"radio1", kind:"moon.IconButton", value:"0", active:true, style:"width: 20px; height: 20px; margin:8px; background: white;", ontap:"changedIndex"},
						{name:"radio2", kind:"moon.IconButton", value:"1", style:"width: 20px; height: 20px; margin:8px; background: white;", ontap:"changedIndex"},
						{name:"radio3", kind:"moon.IconButton", value:"2", style:"width: 20px; height: 20px; margin:8px; background: white;", ontap:"changedIndex"},
						{name:"radio4", kind:"moon.IconButton", value:"3", style:"width: 20px; height: 20px; margin:8px; background: white;", ontap:"changedIndex"},
						{name:"radio5", kind:"moon.IconButton", value:"4", style:"width: 20px; height: 20px; margin:8px; background: white;", ontap:"changedIndex"}
	                ]},
	            ]},
	            {kind: "View",  components: [                                   
	                 {kind: "moon.Icon", icon: "arrowsmallright", small: false, classes:"headLine_arrow", small: false, ontap: "next"},
	            ]},
            ]},
            
	        {kind:"FittableRows", style:"margin-top:65px; margin-left:70px;", fit:true, components:[
		        {kind: "FittableRows", style:"margin-right:40px;", components: [
			        {content: "Breaking News", classes:"breakingNews"}, 
			        {kind: "FittableColumns", classes:"breakingNews_outbox",components: [
		                {kind:"Image", src:"http://www.koreabaseball.com/file/main/breakingnewsPhoto_1.jpg", classes:"breakingNews_img"},
		                {kind: "FittableRows", components:[
		                    {name:"breakingNews1", classes:"breakingNews_title", style:"margin-top:20px;", value:"1", ontap:"clikedBreakingNews"},
		                    {name:"breakingNews2", classes:"breakingNews_title", value:"2", ontap:"clikedBreakingNews"},
		                    {name:"breakingNews3", classes:"breakingNews_title", value:"3", ontap:"clikedBreakingNews"},
		                    {name:"breakingNews4", classes:"breakingNews_title", value:"4", ontap:"clikedBreakingNews"},
		                    {name:"breakingNews5", classes:"breakingNews_title", value:"5", ontap:"clikedBreakingNews"}
		                ]}
			        ]}
			    ]},
			    {kind: "FittableRows", style:"margin-top:52px; margin-right:40px;", components: [
			        {content: "Interview", classes:"interview"}, 
			        {kind: "FittableColumns", classes:"interview_outbox", components: [
				        {kind:"Image", src:"http://www.koreabaseball.com/file/main/interviewPhoto_1.jpg", classes:"interview_img"},
				        {kind: "FittableRows", components:[
					        {name:"interview1", classes:"interview_title", style:"margin-top:20px;", value:"1", ontap:"clikedInterview"},
					        {name:"interview2", classes:"interview_title", value:"2", ontap:"clikedInterview"},
					        {name:"interview3", classes:"interview_title", value:"3", ontap:"clikedInterview"},
					        {name:"interview4", classes:"interview_title", value:"4", ontap:"clikedInterview"},
					        {name:"interview5", classes:"interview_title", value:"5", ontap:"clikedInterview"}
					    ]}
				    ]}
			    ]}
	        ]}
	    ]}
	],
	create: function(inSender, inEvent){
		this.inherited(arguments);
		urls = [
		             "http://www.koreabaseball.com/file/main/reNewsOrderPhoto_1.jpg",
		             "http://www.koreabaseball.com/file/main/reNewsOrderPhoto_2.jpg",
		             "http://www.koreabaseball.com/file/main/reNewsOrderPhoto_3.jpg",
		             "http://www.koreabaseball.com/file/main/reNewsOrderPhoto_4.jpg",
		             "http://www.koreabaseball.com/file/main/reNewsOrderPhoto_5.jpg"
		 ];
		// although we're specifying all the image urls now, the images themselves
		// only get created/loaded as needed
		this.$.carousel.setImages(urls);
		this.parserHeadLine();
		this.parserBreakingNews();
		this.parserInterview();
	},
    changedIndex: function(inSender, inEvent){
    	this.$.carousel.setIndex(inSender.value);
    	this.changedHeadLineText();
    	// Need Color change
    	return true;
    },
	changedHeadLineText: function(){
		var index = this.$.carousel.getIndex(); 
    	this.$.headLineText1.setContent(textHeadLine[index*2]); // 0 2 4 6 8 
    	this.$.headLineText2.setContent(textHeadLine[index*2+1]); // 1 3 5 7 9 
    	return true;
	},
	clikedHeadLine: function(inSender, inEvent) {
	//	alert(inSender.name);
		staticIndex = this.$.carousel.getIndex(); 
		var name = inSender.name;
		this.bubbleUp("onShowPanel", {name:name});
		return true;
	},
	clikedBreakingNews: function(inSender, inEvent) { 
		staticIndex = inSender.value;
		location='http://www.koreabaseball.com/'+ hrefBreakingNews[staticIndex-1];
		return true;
	},
	clikedInterview: function(inSender, inEvent) { 
		staticIndex = inSender.value;
		location = 'http://www.koreabaseball.com/'+ hrefInterview[staticIndex-1];
		
		return true;
	},
	previous: function(inSender, inEvent) {
		this.$.carousel.previous();
		switch (this.$.carousel.get("index")){ // radio button focus changed
		case 0: this.$.radio1.setActive(true); break;
		case 1: this.$.radio2.setActive(true); break;
		case 2: this.$.radio3.setActive(true); break;
		case 3: this.$.radio4.setActive(true); break;
		}
		this.changedHeadLineText();
    	return true;
	},
	next: function(inSender, inEvent) {		
		this.$.carousel.next();	
		switch (this.$.carousel.get("index")){ // radio button focus changed
		case 1: this.$.radio2.setActive(true); break;
		case 2: this.$.radio3.setActive(true); break;
		case 3: this.$.radio4.setActive(true); break;
		case 4: this.$.radio5.setActive(true); break;
		}
		this.changedHeadLineText();
    	return true;
	},
    parserHeadLine: function(){
    	textHeadLine=new Array(10);
    	hrefHeadLine=new Array(5);
    	var dataHeadLine = data.substring(data.indexOf("mainCenter"));
    	for(var i=0; i<10; i+=2){
    		hrefHeadLine[i>>1] = dataHeadLine.substring(dataHeadLine.indexOf("href")+8, dataHeadLine.indexOf("strong")).replace(/[~\s!,"]/gi,'');
    		var first = dataHeadLine.indexOf("strong")+10;
    		dataHeadLine = dataHeadLine.substring(first);
    		var mid = dataHeadLine.indexOf("content");
    		var last = dataHeadLine.indexOf("}");
    		textHeadLine[i] = dataHeadLine.substring(0,mid).replace(/[!,"]/gi,'');
    		textHeadLine[i+1] = dataHeadLine.substring(mid+10, last).replace(/[!,"]/gi,'');
    		dataHeadLine = dataHeadLine.substring(last);
    	}
    	this.$.headLineText1.setContent(textHeadLine[0]);
    	this.$.headLineText2.setContent(textHeadLine[1]);
    	return true;
    },
	parserBreakingNews: function(){
		textBreakingNews=new Array(10);
    	hrefBreakingNews=new Array(5);
    	var tmp = data.substring(data.indexOf("noticeArea"));
    	var dataBreakingNews = tmp.substring(tmp.indexOf("noticelist"));
    	for (var i=0; i<5; i++){
    		hrefBreakingNews[i] = dataBreakingNews.substring(dataBreakingNews.indexOf("href")+8, dataBreakingNews.indexOf("title")).replace(/[~\s!,"]/gi,'');    		
    		var first = dataBreakingNews.indexOf("title");
    		dataBreakingNews = dataBreakingNews.substring(first);
    		var mid = dataBreakingNews.indexOf("content")+10;
    		var last = dataBreakingNews.indexOf("}");
    		textBreakingNews[i] = dataBreakingNews.substring(mid,last).replace(/[!,"]/gi,'');
    		dataBreakingNews = dataBreakingNews.substring(last);
    	}
    	this.$.breakingNews1.setContent(textBreakingNews[0]);
    	this.$.breakingNews2.setContent(textBreakingNews[1]);
    	this.$.breakingNews3.setContent(textBreakingNews[2]);
    	this.$.breakingNews4.setContent(textBreakingNews[3]);
    	this.$.breakingNews5.setContent(textBreakingNews[4]);
    	return true;
	},
	parserInterview: function(){
		textInterview=new Array(10);
    	hrefInterview=new Array(5);
    	var tmp = data.substring(data.indexOf("noticeArea"));
    	var dataInterview = tmp.substring(tmp.indexOf("InterviewView"));
    	for (var i=0; i<5; i++){
    		hrefInterview[i] = dataInterview.substring(dataInterview.indexOf("href")+8, dataInterview.indexOf("title")).replace(/[~\s!,"]/gi,'');
    		var first = dataInterview.indexOf("title");
    		dataInterview = dataInterview.substring(first);
    		var mid = dataInterview.indexOf("content")+10;
    		var last = dataInterview.indexOf("}");
    		textInterview[i] = dataInterview.substring(mid,last).replace(/[!,"]/gi,'');
    		dataInterview = dataInterview.substring(last);
    	}
    	this.$.interview1.setContent(textInterview[0]);
    	this.$.interview2.setContent(textInterview[1]);
    	this.$.interview3.setContent(textInterview[2]);
    	this.$.interview4.setContent(textInterview[3]);
    	this.$.interview5.setContent(textInterview[4]);
    	return true;
	},
	goHome: function(inSender, inEvent) {
		this.bubbleUp("onGoHome", {name:name});
		return true;
	}
});




