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
          clean : clean,
          options : {}, //빈 배열
          version : '.1',
          debug : function(){
            console.log('debug mode');
            console.log(this);
              // require(flag.settings.lib+'_debug.js'); //디버깅할때만..strictly하게
          },
          init: initialize,
          setPos: changePosition,
          low_client : false,
          no:0
      };
      if(window.navigator.appName == 'Microsoft Internet Explorer' && window.attachEvent && !window.addEventListener){//익스8까지만 서포트
        flag.low_client = true;
      }

      function initialize(position){
        if(!flag.parentNode){
            if(!position){
                position='top-right';
            }
            position = 'flag_'+position;
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
      var removeNode = function(_node,effect, timeout_event){
        var MAMA_node = _node.parentNode;
        if(!effect){
          effect = 'fade-out';
        }
        if(_node){
          switch (effect) {
            case 'kill':
              if(timeout_event){
                clearTimeout(timeout_event);
              }
              _node.parentNode.removeChild(_node);
              break;
            case 'fade-out':
              var op = 1;
              var timer = setInterval(function () {
                  if (op <= 0.1){
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
      function info(content, title, size){
        createNode({type:'info', content:content, title:title, size:size});
      }
      function success(content, title, size){
        createNode({type:'success', content:content, title:title, size:size});
      }
      function warning(content, title, size){
        createNode({type:'warning', content:content, title:title, size:size});
      }
      function error(content, title, size){
        createNode({type:'error', content:content, title:title, size:size});
      }
      function clean(){
        // removeNode(document.getElementById('_flag'));
      }
      // type, content, title
      function createNode(option){
        if(!option.content){
          option.content = 'display default message';
        }
        if(!option.title){
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
          option.size = 'middle';
        }
        option.size = 'is-'+option.size;
        var ExtentsOption = Extents();
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
          initialize();
        }
        flag.parentNode.appendChild(div);
        Extents();
        var removeEvent = setTimeout(function(){
          removeNode(div);
        },5000);// 5 is default sec
        div.addEventListener('click',function(){
          removeNode(div, 'kill', removeEvent);
        });
      }

      function changePosition(position){
        if(!flag.parentNode){
          initialize(position);
        } else {
          if(!position){
            position='top-right';
          }
          flag.parentNode.getAttributeNode('class').value = 'flag_'+position;
        }
      }

      function Extents(){
        //상속받아서 리턴
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
