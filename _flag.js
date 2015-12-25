/*
* flag v0.1
* Copyright 2015.12.24
* flag is Javascript library for non-blocking notifications. this plugin don't need to jquery library
*if you have someting, please contact this email here('hacking4soju at gmail.com' or jhjang1005@naver.com)
*/

(function(define){
    try{
        var flag = flag || {} || new Object();
        var self = this;
        flag.settings.lib = 'inc';
        flag.Type = {
            info : 'info',
            success : 'success',
            warning : 'warning',
            debug : function(){
                'use strict';
                require(flag.settings.lib+'_debug.js'); //디버깅할때만..strictly하게
            }
        }
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        if(window.navigator.appName == 'Microsoft Internet Explorer' && window.attachEvent && !window.addEventListener){//익스8까지만 서포트
            window.navigator.__defineGetter__('userAgent', function(){
                return 'fake';
            });
        }
        exports['default'] = flag = function(){

        }
        flag.statusCode = 200;
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
});
