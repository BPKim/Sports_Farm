enyo.kind({
	name:"headLinePanel", 
	kind: "View",
	style: "background-color:white;",
	components:[
	    {kind:"FittableColumns", fit:true,  style:"height:150px; padding-top:20px; background-color:gray;", components:[
	        {name:"title", fit:true, classes:"news_title"},
	        {kind: "moon.Item", style:"width:120px; margin-right:10px;",  ontap: "goBack", components: [
	            {name:"backButton", kind:"Image", src:"assets/union_item/goBack.jpg"}
	        ]},
	        {kind: "moon.Item", style:"width:120px; margin-right:35px",  ontap: "goHome", components: [
	            {name:"homeButton", kind:"Image", src:"assets/union_item/HomeButton.png"}
	        ]}
	    ]},
	    {kind:"FittableRows", components:[
	        {kind: "View", style:"text-align:center; margin-top:20px;", components:[
	            {name:"image", kind:"Image"}
	        ]},
		    {kind: "moon.Scroller", classes: "news_scroller", vertical:"scroll", components:[
		        {name:"spinner", kind:"moon.Spinner", center:true, style:"margin-left:960px; margin-top:200px;"},      
	            {name:"detail", allowHtml:true, classes:"news_detail"}
	        ]}
        ]}
    ],
	create: function(inSender, inEvent){
		this.inherited(arguments);
		this.fetch();
	},
	fetch: function() {
		var query = 'select * from html where url = "http://www.koreabaseball.com/News/PreviewView.aspx';
		var jsonp = new enyo.JsonpRequest({
			url: "http://query.yahooapis.com/v1/public/yql?format=json",
			callbackName: "callback"
		});
		jsonp.go({
			q: query + hrefHeadLine[staticIndex] + "\""
		});
		jsonp.response(this, "processResponse");
	
		return true;
	},	
	processResponse: function(inSender, inResponse) {
		dataNews = JSON.stringify(inResponse, null, 2);
//		this.$.detail.setContent(dataNews);
		this.$.spinner.hide();
		this.parserNewsPage();
		return true;
	},
	parserNewsPage: function(){
		textNews=new Array(3);
    	var news = dataNews.substring(dataNews.indexOf("boardView")+20);
    	
    	var first = news.indexOf("h4")+6;
    	var end = news.indexOf("div");
    	textNews[0]= news.substring(first,end).replace(/[!,"\\]/gi,'');
    	news = news.substring(end);
    	news = news.substring(news.indexOf("content")+10).replace(/[!,"]/gi,'');;
    	news = news.substring(0, news.indexOf("}")).replace(/[!\\]/gi,'');
    	textNews[2] = news;
    	textDetail = textNews[2].replace(/[!n]/gi,'<br>');
    	
    	
//    	alert(news);
    	
//    	news = news.substring(news.indexOf("span"));
//    	news = news.substring(news.indexOf("content")+20);
//    	news = news.substring(news.indexOf("content")+7);
//    	textNews[2] = news.substring(4, news.indexOf("}")).replace(/[!\\]/gi,'');
//    	textDetail = textNews[2].replace(/[!n]/gi,'<br>');
    	
		this.updateUI();
    	return true;
	},
	updateUI: function(){
		this.$.title.setContent(textNews[0]);
		this.$.image.setSrc(urls[staticIndex]);
		this.$.detail.setContent(textDetail);
	},
	goHome: function(inSender, inEvent){
		this.bubbleUp("onGoHome");
		return true;
	},
	goBack: function(inSender, inEvent) {
		this.bubbleUp("onShowPanel", {name:"todayNews"});
		return true;
	},
});

