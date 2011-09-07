new Ext.Application({
    name: 'sencha_hdc',
    instagram_client_id: "75a6289409504c2ab38f54873d69d13c",
	instagram_tag: "omaha",
	launch: function() {
		this.views.viewport = new this.views.Viewport(); 
    }
});