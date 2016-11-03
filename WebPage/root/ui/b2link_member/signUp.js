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

	var _this = {};

	var $w = window;
	var $d = $w.document;

	var $f0 = window.b2link.element.getElementByClassName;

	var _el_input_email = $f0( $el_div, "email" );
	var _el_input_name = $f0( $el_div, "name" );
	var _el_input_phone = $f0( $el_div, "phone" );
	var _el_input_password = $f0( $el_div, "password" );
	var _el_input_password_confirm = $f0( $el_div, "password_confirm" );

	var _o_locale_label = window.b2link.ui_resource.reqSync_JSON_LocaleLabel( url );

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
		window.TtwLog.timeStamp( "-- [ S ] - _evt_resize$parentElement():void----------" );
		_setPosition();
		window.TtwLog.timeStamp( "-- [ E ] - _evt_resize$parentElement():void----------" );
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

		$f0 = null;

		_el_input_email = null;
		_el_input_name = null;
		_el_input_phone = null;
		_el_input_password = null;
		_el_input_password_confirm = null;

		_this = null;
	};

	/**
	 * @function
	 */
	var _initialize__local_label = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _initialize__local_label():void----------" );

		var o = window.b2link.html.apply_html( $el_div, _o_locale_label );
			//console.log( o );

		window.TtwLog.timeStamp( "-- [ E ] - _initialize__local_label():void----------" );
	};

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
		window.TtwLog.timeStamp( "-- [ S ] - _setPosition():void----------" );
		// var t = $el_div;
		// window.b2link.element.setPosition_CenterMiddle_FromParent( t );
		// _width = t.clientWidth;
		// _height = t.clientHeight;
		window.TtwLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//----------;
	_addEvent();
	_initialize__local_label();
	_setPosition();
	//----------;

	//--------------------------------------------------this;
	var _ = _this;
	window.b2linkExtends.extends.div_Panel( _this );
	_.__el = $el_div;
	_.dispose = _dispose;
	//--------------------------------------------------this;
	return _this;
});
