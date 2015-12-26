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
      if(window.navigator.appName == 'Microsoft Internet Explorer' && window.attachEvent && !window.addEventListener){//익스8까지만 서포트
        flag.low_client = true;
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
        createNode({type:'info', content:content, title:title, size:'is-middle'});
      }
      function success(content, title){
        console.log('is success');
        createNode({type:'success', content:content, title:title, size:'is-middle'});
      }
      function warning(content, title){
        console.log('is warning');
        createNode({type:'warning', content:content, title:title, size:'is-middle'});
      }
      function error(content, title){
        console.log('is error');
        createNode({type:'error', content:content, title:title, size:'is-middle'});
      }
      var removeNode = function(_node,effect){
        console.debug(_node);
        // var _node = _node.parentNode;
        if(!effect){
          effect = 'fade-out';
        }
        if(_node){
          switch (effect) {
            case 'kill': _node.parentNode.removeChild(_node);
              break;
            case 'fade-out':
              var op = 1;
              var timer = setInterval(function () {
                  if (op <= 0.1){
                      console.log(timer+'싀싀시ㅡ븨');
                      clearInterval(timer);
                      // _node.style.display = 'none';
                      _node.parentNode.removeChild(_node);
                  }
                  _node.style.opacity = op;
                  if(flag.low_client){
                    _node.style.filter = 'alpha(opacity=' + op * 100 + ")";
                  }
                  op -= op * 0.1;
              }, 50);
              break;
          }
        }
      }
      // type, content, title
      function createNode(option){
        if(!option.content){
          option.content = 'display default message';
        }
        if(!option.title){
          // console.log('yes i"m here');
          switch (option.type) {
            case 'info': option.title = 'Info';
              break;
            case 'success': option.title = 'Success';
              break;
            case 'warning': option.title = 'Warning';
              break;
            case 'error' : option.title = 'Error'
              break;
          }
        }
        if(!option.size){
          option.size = 'is-middle';
        }
        var div = document.createElement('div');
        var attr = document.createAttribute('class');
        attr.value = '_flag_dom '+option.type+' '+option.size;
        div.setAttributeNode(attr);
        attr = document.createAttribute('role');
        attr.value = 'alert';
        attr = document.createAttribute('data-flag-index');

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
        Extents();
        div.addEventListener('click',function(){
          removeNode(div,'kill');
        });
        setTimeout(function(){
          removeNode(div);
        },5000);// 5000 is default sec
      }

      function Extents(){
        var i = 'is1';
        return i;
      }

      if(!window.flag){
          window.flag = flag;
      }
    }catch(e){
        switch (true){
            case (e instanceof EvalError):
              console.log("Eval 에러: " + e.message);
                break;
            case (e instanceof RangeError):
              console.log("RangeError 에러: " + e.message);
                break;
            default:
              console.log("에러: " + e.message);
                break;
        }
    }
})();
