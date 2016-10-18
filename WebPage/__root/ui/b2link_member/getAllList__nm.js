//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_member/getAllList__nm.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_div ){

	console.log( "arguments : " );
	console.log( arguments );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	var $w = window;
	var $d = $w.document;

	var _width = $el_div.clientWidth;
	var _height = $el_div.clientHeight;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	var _addEvent = function()
	{
	  _removeEvent();
	  $w.addEventListener( "resize", _evt_resize$parentElement, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_resize$parentElement = function( e )
	{
	  console.log( "-- [ S ] - _evt_resize$parentElement():void----------" );
	  _setPosition();
	  console.log( "-- [ E ] - _evt_resize$parentElement():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();
		$w = null;
		$d = null;
	};

	/**
	 * @function
	 */
	var _hide = function(){ $el_div.style.display = "none"; };

	/**
	 * @function
	 */
	var _show = function(){ $el_div.style.display = ""; };

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		console.log( "-- [ S ] - _setPosition():void----------" );
		// var t = $el_div;
		// window.b2link.element.setPosition_CenterMiddle_FromParent( t );
		// _width = t.clientWidth;
		// _height = t.clientHeight;
		console.log( "-- [ E ] - _setPosition():void----------" );
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	var _getHeight = function(){ return _height; };
	var _setHeight = function( w ){ _height = w; };

	var _getWidth = function(){ return _width; };
	var _setWidth = function( w ){ _width = w; };

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//----------;
	_addEvent();
	_setPosition();
	//----------;

	window.b2link.service.req$member_basic$getAllList__nm(
		function( result ){
			console.log( "window.b2link.service.req$member_basic$getAllList__nm result : " );
			console.log( result );

			var _t = $d.getElementById( "tbody__member_basic$getAllList__nm" );
			var html = "<tr>";
			var td = "<td>$d</td>";
			var a = result;
			var io;
			var i=0, iLen=a.length;
			for( ; i<iLen; ++i )
			{
				io = a[ i ];
				html += td.replace( "$d", io.a ) ;
				html += td.replace( "$d", io.f ) ;
				html += td.replace( "$d", io.l ) ;
			}
			html += "</tr>";
			_t.innerHTML = html;
		}
	);

	//----------;

	return {
		dispose : _dispose
		, hide : _hide
		, show : _show

		, getWidth : _getWidth
		, getHeight : _getHeight
	};
});
