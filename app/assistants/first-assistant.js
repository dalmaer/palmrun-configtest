function FirstAssistant() {}

FirstAssistant.prototype = {    
    setup: function() {
        Mojo.Log.info("setup called! you see this if debugging is on nicely for you");

    	this.controller.get("app-title").update(Mojo.appInfo.title);
    	this.controller.get("app-id").update(Mojo.appInfo.id);
    	this.controller.get("app-version").update(Mojo.appInfo.version);
    },
};
