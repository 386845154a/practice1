"use strict";
$(function(){
  var todos = new Todos()
    , form = new Form({
      el: '#add-form',
      collection: todos
    })
    , list = new List({
      el: '#todo-list',
      collection: todos
    })
});