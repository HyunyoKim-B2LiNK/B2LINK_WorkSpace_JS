//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_brand/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_div ){

	window.b2link.ui_resource.apply_LocaleLabel( url, $el_div );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	var _this = { __url : url };

	var $w = window;
	var $d = $w.document;

	var $f0 = window.b2link.element.getElementByClassName;

	var _el_tbody = $f0( $el_div, "tbody" );
	var _el_thead = $f0( $el_div, "thead" );

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
		window.RayLog.timeStamp( "-- [ S ] - _evt_resize$parentElement():void----------" );
		_setPosition();
		window.RayLog.timeStamp( "-- [ E ] - _evt_resize$parentElement():void----------" );
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

		$_el_tbody = null;
		$_el_thead = null;
	};

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _req_Data():void----------" );

		window.b2link_service_brand.brand_basic.getAllList( _res_Data );

		window.RayLog.timeStamp( "-- [ E ] - _req_Data():void----------" );
	};

	/**
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		window.RayLog.timeStamp( "-- [ S ] - _res_Data():void----------" );
		_setData__tbody( result );
		window.RayLog.timeStamp( "-- [ E ] - _res_Data():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__tbody = function( data )
	{
		window.RayLog.timeStamp( "-- [ S ] - _setData__tbody():void----------" );

		window.RayLog.timeStamp( "window.b2link_service_brand.brand_basic.getAllList result : " );
		console.log( data );
		window.b2link.html.apply_tbody_child( _el_tbody, data );

		window.RayLog.timeStamp( "-- [ E ] - _setData__tbody():void----------" );
	};

	//------------------------------;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _setPosition():void----------" );
		//var t = $el_div;
		//window.b2link.element.setPosition_CenterMiddle_FromParent( t );
		//_width = t.clientWidth;
		//_height = t.clientHeight;
		window.RayLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
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
	_setPosition();
	//----------;

	_req_Data();

	//----------;

	//--------------------------------------------------this;
	var _ = _this;
	window.b2linkExtends.extends.div_Panel( _this );
	_.__el = $el_div;
	_.dispose = _dispose;

	_.req_Data = _req_Data;
	//--------------------------------------------------this;
	return _this;
});