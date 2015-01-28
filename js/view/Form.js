/**
 * Created by qiujuan on 2015/1/28.
 */

'use strict';

(function(){
  var Form = window.Form = Backbone.View.extend({
    events: {
      'submit': 'submitHandler'
    },
    initialize: function(){
      this.input = this.$('input');
    },
    submitHandler: function(event){
      if(this.input.val()){
        this.collection.add({
            title: this.input.val()
        });
        this.input.val('');
      }
      event.preventDefault();
    }
  });
}());

