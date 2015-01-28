/**
 * Created by qiujuan on 2015/1/28.
 */
'use strict';

(function(){
  var List = window.List = Backbone.View.extend({
    events: {
      'change input': 'input_changeHandler'
    },

    initialize: function(){
      this.template = Handlebars.compile(this.$('script').remove().html());

      this.collection.on('add',this.collection_addHandler,this);
      this.collection.on('change',this.collection_changeHandler,this);
    },
    collection_addHandler: function(model){
      this.$el.append(this.template(model.toJSON()));
    },
    collection_changeHandler: function(model){
      this.$('#todo-' + model.cid).toggleClass('finish',model.get('status'));
    },
    input_changeHandler: function(event){
      this.collection.get(event.target.value).set('status',1)
    }
  });
}())