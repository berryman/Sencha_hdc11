// The sencha_hdc Viewport is an extension of the Ext.Panel component.
// This is "main" wrapping view.
sencha_hdc.views.Viewport = Ext.extend(Ext.Panel, {
    // Let's set some config options for the panel.
    fullscreen: true,
    layout: 'fit',
    
    // Now, we initialize it.
    initComponent: function() {

        // Create new instance of the our Photo component.
        sencha_hdc.views.photoList = new sencha_hdc.views.PhotoList();

        // Let's add our view to the Viewport.
        // This is defined in the "views" folder under its respective name.
        Ext.apply(this, {
            items: [
                sencha_hdc.views.photoList
            ]
        });

        // Similar to calling "super" in languages like Java.  Kicks off initialization in parent classes.
        sencha_hdc.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});