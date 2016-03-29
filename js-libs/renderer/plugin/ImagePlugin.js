var ImagePlugin = Plugin.extend({
    _type: 'image',
    _isContainer: false,
    _render: true,
    initPlugin: function(data) {
        var instance = this;
        var asset = '';
        if (data.model) {
            asset = this._stage.getModelValue(data.model);   
        } else if (data.param) {
            asset = this.getParam(data.param);
        } else {
            asset = data.asset;
        }
        var s = new createjs.Bitmap(this._theme.getAsset(asset));
        var dims = this.relativeDims();
        var sb = s.getBounds();
        s.x = dims.x;
        s.y = dims.y;
        this._self = s;
        if(sb) this.setScale(); 
    }
});
PluginManager.registerPlugin('image', ImagePlugin);