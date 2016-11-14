//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_country/getAllList__Table__NextPrev.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_div ){

	//window.b2link.ui_resource.apply_LocaleLabel( url, $el_div );
	//window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el_div );

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

	//debugger;
	var _el_table = $f0( $el_div, "table" );
	//debugger;
		_el_table.js.setData({ idStart : -1, idEnd : 20, limit : 20, maxCount : null
	 		, fn : {
				req_getCount : window.b2link_service_list_static.country.getCount
				, req_getList_Range__id : window.b2link_service_list_static.country.getList_Range__id
			}
		});
		_el_table.js.req_Data();

	var _el_btn_gt = $f0( $el_div, "<" );
	var _el_btn_gtgt = $f0( $el_div, "<<" );
	var _el_btn_lt = $f0( $el_div, ">" );
	var _el_btn_ltlt = $f0( $el_div, ">>" );

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

		_el_btn_gt.addEventListener( "click", _evt_mClick__el_btn_gt, false, 0, true );
		_el_btn_gtgt.addEventListener( "click", _evt_mClick__el_btn_gtgt, false, 0, true );
		_el_btn_lt.addEventListener( "click", _evt_mClick__el_btn_lt, false, 0, true );
		_el_btn_ltlt.addEventListener( "click", _evt_mClick__el_btn_ltlt, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_btn_gt.removeEventListener( "click", _evt_mClick__el_btn_gt, false );
		_el_btn_gtgt.removeEventListener( "click", _evt_mClick__el_btn_gtgt, false );
		_el_btn_lt.removeEventListener( "click", _evt_mClick__el_btn_lt, false );
		_el_btn_ltlt.removeEventListener( "click", _evt_mClick__el_btn_ltlt, false );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_mClick__el_btn_gt = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_gt():void----------" );

		_removeEvent();
		_el_table.js.req_Data_Prev();
		_addEvent();

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_gt():void----------" );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_mClick__el_btn_gtgt = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_gtgt():void----------" );

		_removeEvent();
		//_el_table.js.req_Data_Prev();
		_el_table.js.req_Data_PrevEnd();
		_addEvent();

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_gtgt():void----------" );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_mClick__el_btn_lt = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_lt():void----------" );

		_removeEvent();
		_el_table.js.req_Data_Next();
		_addEvent();

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_lt():void----------" );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_mClick__el_btn_ltlt = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_ltlt():void----------" );

		_removeEvent();
		//_el_table.js.req_Data_Next();
		_el_table.js.req_Data_NextEnd();
		_addEvent();

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_ltlt():void----------" );
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
	};

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data():void----------" );

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data():void----------" );
	};

	/**
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res_Data():void----------" );

		window.TtwLog.timeStamp( "-- [ E ] - _res_Data():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//------------------------------;

	//------------------------------;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setPosition():void----------" );

		//var t = $el_div;
		//window.b2link.element.setPosition_CenterMiddle_FromParent( t );

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