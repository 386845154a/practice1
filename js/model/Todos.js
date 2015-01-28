/**
 * Created by qiujuan on 2015/1/28.
 */
'use strict';

(function(){
  var Model = Backbone.Model.extend({
    defaults: {
      status: false
    },
    toJSON: function (options) {
      var json = Backbone.Model.prototype.toJSON.call(this,options);
      json.cid=this.cid;
      return json;
    }
  });
  var Todos = window.Todos = Backbone.Collection.extend({
    model: Model
  });
}());