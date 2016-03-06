enyo.kind({
	name: "myapp.MainView",
	handlers: {
		onShowPanel: "showPanel",
		onGoHome: "goHome",
	},
	components:[
	    {name: "panels", kind: "moon.Panels", arrangerKind: "CardArranger", classes: "moon enyo-fit", components: [	 
	        {name: "menu", kind: "menuPanel"}
        ]}
	    
	],
	goHome: function() {
		this.$.panels.set("index", 0); // return home view
		return true;
	},
	showPanel: function(inSender, inEvent) { 
		var panelKind = inEvent.name+"Panel";   // addBff������  addBffPanel 
	//	alert(panelKind);
		var model = inEvent.model;
		this.$.panels.popPanels(1);
		this.$.panels.pushPanel({kind: panelKind, model: model});
		return true;
	}
});

