enyo.kind({
	name:"calenderPanel",
	kind: "View",
	pattern: "activity",
	classes:"calender_background",
	components:[ 
//	            {name:"headMargin", 
//	             style:"height:150px; Text-align:left; padding-top:100px", 
//	             components:[
//	                         {kind: "moon.Button", 
//	                          content:"Back", 
//	                          ontap:"goHome", 
//	                         }
//	                         ]
//	            },		
	    	    {kind:"View", style:"width:100%; height:180px; padding-left:1780px; padding-right:30px;", components:[
	    	        {kind: "moon.Item", style:"margin:20px; width:100px;",  ontap: "goHome", components: [
                        {kind:"Image", src:"assets/union_item/HomeButton.png"}
                    ]}
	    	    ]},
	            {kind: 'moon.Scroller', 
	            	classes: "enyo-fill", 
	            	style:"margin-left:360px; margin-top:50px;", 
	            	components: [		  
	            	             {kind:"View",
	            	            	 content: 
	            	            		 "<div id=\"unse\" style=\"position:relative;z-index:1;width:1241px;height:1400px;\"> "+
	            	            		 "<DIV style=\"position:absolute;overflow:hidden;width:1241px;height:1400px;top:0px;left:0px;\">"+
	            	            		 "<DIV style=\"position:absolute;left:-475px;top:-410px;\">" +
	            	            		 "<iframe src=\"http://www.koreabaseball.com/Schedule/CalendarSchedule.aspx\" style=iframe scrolling =no WIDTH=1000 HEIGHT=1300></iframe> "+
	            	            		 "</div>"+ 
	            	            		 "</div> "+
	            	            		 "</div>"
	            	            		 , allowHtml:true },
	            	            	]
	            }
	            ],
	            goHome: function(inSender, inEvent){
	            	this.bubbleUp("onGoHome");
	            	return true;
	            }
});