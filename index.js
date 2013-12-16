'use strict';
(function() {
  var EventEmitter = require('events').EventEmitter
    , foo = require('./foo')
    , emitter
    , element
    , setEmmiter = function() {
        emitter = new EventEmitter();
      
        // set up a listener for the event
        emitter.on('br', function(){
          element.innerHTML += '<br/>';
        });

        emitter.on('message', function(message){
          element.innerHTML += message;
        });

        emitter.on('numberFoo', function(number){
          element.innerHTML += '==> emitter.on("numberFoo"): ' + foo(number);
        });

      }
    , getHtmlElement = function() {
        return document.querySelector('.result');
      }
  ;

  setEmmiter();
  element = getHtmlElement();

  // emit events
  emitter.emit('message', 'Hello.');
  emitter.emit('message', ' My name is julio.');
  emitter.emit('br');
  emitter.emit('message', 'Bellow there is a foo function call');
  emitter.emit('br');
  emitter.emit('numberFoo', 7);

})();

