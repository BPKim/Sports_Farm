enyo.kind({
   name: "calenderPanel",
   classes: "moon enyo-unselectable",
   kind: "FittableColumns",
   style:"background-color:white;",
   components: [
                {kind: "moon.Panel", 
                 style:"width:400px;margin:20px;",/* title:"  Schedule",*/ 
//                 headerComponents:[
//                                   {content:"  Schedule", 
//                                	style:"font-size:80px; padding:10px;"}
//                                   ],
                 components:[
                             {content:"KBO", style:"font-size:30px; text-align:right;"},
                             {kind: "moon.Button", 
                              content:"Back", 
                              ontap:"goHome", 
                              style:"width:200px; height:100px; text-align:right;"
                              }
                              ]
                },
                {components: [
                              {kind: "enyo.FittableRows", 
                               components: [     
                                            {kind: "moon.Item", 
                                             name: "advertise", 
                                             components: [
                                             {kind:"View",content: 
                                                
                                             "<div id=\"unse\" style=\"position:relative;z-index:1;width:1241px;height:1400px;\"> "+
                                             "<DIV style=\"position:absolute;overflow:hidden;width:1241px;height:1400px;top:0px;left:0px;\">"+
                                             "<DIV style=\"position:absolute;left:-475px;top:-410px;\">" +
                                                 "<iframe src=\"http://www.koreabaseball.com/Schedule/CalendarSchedule.aspx\" style=iframe scrolling =no WIDTH=1000 HEIGHT=1300></iframe> "+
                                             "</div>"+ 
                                             "</div> "+
                                             "</div>"
                                                
                                                , allowHtml:true }
                                         ]},
                                      ]}       

                        ]
                }],
                goHome: function(inSender, inEvent){
                   this.bubbleUp("onGoHome");
                   return true;
                }

});