/*
* flag v0.1
* Copyright 2015.12.24
* flag is Javascript library for non-blocking notifications. this plugin don't need to jquery library
*if you have someting, please contact this email here('hacking4soju at gmail.com' or 'jhjang1005@naver.com')
*/

(function(){
  'use strict';
    try{
      var _flag = flag || {} || new Object();
      var self = this;
      var low_client = false;
      var flag = {
          info : info,
          success : success,
          warning : warning,
          error : error,
          debug : function(){
            console.log(this);
              // require(flag.settings.lib+'_debug.js'); //디버깅할때만..strictly하게
          },
          low_client : false,
          no:0
      }
      function initialize(position){
        if(!flag.parentNode){
            if(!position){
                position='flag_top-right';
            }
            var _parent = document.createElement('div');
            var attr = document.createAttribute('id');
            attr.value = '_flag';
            _parent.setAttributeNode(attr);
            attr = document.createAttribute('class');
            attr.value = position;
            _parent.setAttributeNode(attr);
            document.body.appendChild(_parent);
            flag.parentNode = _parent;
        }
      }
      initialize();

      function info(content, title){
        console.log('is info');
        createNode({type:'info', content:content, title:title});
      }
      function success(){
        console.log('is success');
      }
      function warning(){
        console.log('is warning');
      }
      function error(){
        console.log('is error');
      }
      if(window.navigator.appName == 'Microsoft Internet Explorer' && window.attachEvent && !window.addEventListener){//익스8까지만 서포트
        window.navigator.__defineGetter__('userAgent', function(){
          low_client = true;
        });
      }
      // type, content, title
      function createNode(option){
        var div = document.createElement('div');
        var attr = document.createAttribute('class');
        attr.value = '_flag_dom '+option.type;
        div.setAttributeNode(attr);
        attr = document.createAttribute('id');
        attr.value = ++flag.no;
        div.setAttributeNode(attr);

        var title_tag = document.createElement('h3');
        title_tag.appendChild(document.createTextNode(option.title));
        div.appendChild(title_tag);
        
        var content_tag = document.createElement('p')
        content_tag.appendChild(document.createTextNode(option.content));
        div.appendChild(content_tag);
        if(!flag.parentNode){
            console.log("You need to initialize!");
        }
        flag.parentNode.appendChild(div);
      }

      if(!window.flag){
          window.flag = flag;
      }
      // Object.defineProperty(exports, '__esModule', {
      //   value: true
      // });
      // exports['default'] = flag = function(){
      //
      // }
      console.log('test');
    }catch(e){
        switch (true){
            case (e instanceof EvalError):
                alert("Eval 에러: " + e.message);
                break;
            case (e instanceof RangeError):
                alert("RangeError에러: " + e.message);
                break;
            default:
                alert("에러: " + e.message);
                break;
        }
    }
})();
