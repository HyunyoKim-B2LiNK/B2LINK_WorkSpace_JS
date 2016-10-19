//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_member/signUp.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_div ){
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
    
    var $f0 = window.b2link.element.getElementByClassName;

    var _el_input_email = $f0( $el_div, "email" );
    var _el_input_name = $f0( $el_div, "name" );
    var _el_input_phone = $f0( $el_div, "phone" );
    var _el_input_password = $f0( $el_div, "password" );
    var _el_input_password_confirm = $f0( $el_div, "password_confirm" );

    
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

	return {
		dispose : _dispose
		, hide : _hide
		, show : _show

		, getWidth : _getWidth
		, getHeight : _getHeight
	};
});
