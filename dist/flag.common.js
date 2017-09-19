/*
* Flag v1.0.1
* Copyright 2015.12.24
* Flag is Javascript library for non-blocking notifications.
* If you have to someting problems, please contact us
* "a@hax0r.info" or "jhjang1005@naver.com"
*/
(function() {
  'use strict';
    try {
      var flag = {
          info : info,
          success : success,
          warning : warning,
          error : error,
          clean : clean,
          options : {},
          version : '1.0.1',
          init: initialize,
          setPos: changePosition,
          lowVersionClient : false,
          no:0
      };

      if( window.navigator.appName == 'Microsoft Internet Explorer' && window.attachEvent && !window.addEventListener ){
        flag.lowVersionClient = true;
      }


	  /**
	   * initialize new flag
	   * @method initialize
	   * @param  {string}   position 위치
	   * @return {void}
	   */
      function initialize(position)
	  {

			if ( !flag.parentNode ) {
				if ( !position ) {
					position='top-right';
				}

				position = 'flag_'+position;

				var parents = document.createElement('div');
				var attr = document.createAttribute('id');

				attr.value = '_flag';
				parents.setAttributeNode(attr);
				attr = document.createAttribute('class');
				attr.value = position;
				parents.setAttributeNode(attr);
				document.body.appendChild(parents);
				flag.parentNode = parents;
			}
      }

	/**
	* 노드 제거
	* @method
	* @param  {object} myNode         Your node
	* @param  {string} effect        type of effect
	* @param  {string} timeoutEvent
	* @return {void}               [description]
	*/
	var removeNode = function(myNode, effect, timeoutEvent){
		if ( myNode.parentNode == null ) {
			return;
		}

		if ( !effect ) {
			effect = 'fade-out';
		}

		if ( !myNode ) {
			return false;
		}

		switch (effect) {
			case 'kill':
				if ( timeoutEvent ) {
					clearTimeout(timeoutEvent);
				}
				myNode.parentNode.removeChild(myNode);
				break;
			case 'fade-out':
				var op = 1,
					timer = setInterval(function () {
						if ( op <= 0.1 ) {
							clearInterval(timer);
							myNode.parentNode.removeChild(myNode);
						}
						myNode.style.opacity = op;
						if ( flag.lowVersionClient ) {
							myNode.style.filter = 'alpha(opacity=' + op * 100 + ")";
						}
						op -= op * 0.1;
					}, 50);
			break;
		}
	}


	/**
	* Flag type of info
	* @method info
	* @param  {string} content
	* @param  {string} title
	* @param  {string} size
	* @return {void}
	*/
	function info(content, title, size)
	{
		createNode({
			type : 'info',
			content : content,
			title : title,
			size : size
		});
	}


	/**
	* Flag type of success
	* @method info
	* @param  {string} content
	* @param  {string} title
	* @param  {string} size
	* @return {void}
	*/
	function success(content, title, size)
	{
		createNode({
			type : 'success',
			content : content,
			title : title,
			size : size
		});
	}


	/**
	* Flag type of warning
	* @method info
	* @param  {string} content
	* @param  {string} title
	* @param  {string} size
	* @return {void}
	*/
	function warning(content, title, size)
	{
		createNode({
			type : 'warning',
			content : content,
			title : title,
			size : size
		});
	}


	/**
	* Flag type of error
	* @method info
	* @param  {string} content
	* @param  {string} title
	* @param  {string} size
	* @return {void}
	*/
	function error(content, title, size)
	{
		createNode({
			type : 'error',
			content : content,
			title : title,
			size : size
		});
	}



	/**
	 * [clean description]
	 * @method clean
	 * @return {[type]} [description]
	 */
	function clean()
	{
		var c = flag.parentNode.childNodes,
			len = c.length;

		for ( var i = 0; i < len; i++ ) {
			flag.parentNode.removeChild(c[0]);
		}
	}

     /**
      * Create flag nodes
      * @method createNode
      * @param  {object}   option  like a type, content, title
      * @return {void}
      */
	function createNode(option)
	{
		if ( typeof option.content === 'undefinde' ) {
			option.content
		}

		if ( !option.title ) {
			switch (option.type) {
				case 'info':
				option.title = 'Info';
				break;
			case 'success':
				option.title = 'Success';
				break;
			case 'warning':
				option.title = 'Warning';
				break;
			case 'error' :
				option.title = 'Error'
				break;
			}
		}
		if ( !option.size ) {
			option.size = 'middle';
		}

		option.size = 'is-'+option.size;

		var div = document.createElement('div'),
			attr = document.createAttribute('class');

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

		if ( !flag.parentNode ) {
			initialize();
		}

		flag.parentNode.appendChild(div);
		var removeEvent = setTimeout(function()
		{
			removeNode(div);
		},5000);

		div.addEventListener('click',function()
		{
			removeNode(div, 'kill', removeEvent);
		});
	}



	/**
	 * changePosition
	 * @method changePosition
	 * @param  {[type]}       position (e.g top-right)
	 * @return {[type]}                [description]
	 */
	function changePosition(position)
	{
		if ( !flag.parentNode ) {
			initialize(position);
		}
		else {
			if ( !position ) {
				position='top-right';
			}

			flag.parentNode.getAttributeNode('class').value = 'flag_'+position;
		}
	}

      if ( !window.flag ) {
          window.flag = flag;
      }

    }
	catch( e ) {
        switch (true) {
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
