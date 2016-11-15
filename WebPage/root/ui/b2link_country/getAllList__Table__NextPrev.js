//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_country/getAllList__Table__NextPrev.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_div ){

	//window.b2link.ui_resource.apply_LocaleLabel( url, $el_div );
	//window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el_div );
	window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el_div );

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

	var _el_div__btns_bottom = $f0( $el_div, "btns_bottom" );
	var _el_div__btns_top = $f0( $el_div, "btns_top" );

	var _el_table = $f0( $el_div, "table" );
		_el_table.js.setData({ idStart : -1, idEnd : 20, limit : 20, maxCount : null
	 		, fn : {
				req_getCount : window.b2link_service_list_static.country.getCount
				, req_getList_Range__id : window.b2link_service_list_static.country.getList_Range__id
			}
		});
		_el_table.js.req_Data();

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

		_el_div__btns_bottom.addEventListener( "click", _evt_mClick__el_div__btns_, false, 0, true );
		_el_div__btns_top.addEventListener( "click", _evt_mClick__el_div__btns_, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_div__btns_bottom.removeEventListener( "click", _evt_mClick__el_div__btns_, false );
		_el_div__btns_top.removeEventListener( "click", _evt_mClick__el_div__btns_, false );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_mClick__el_div__btns_ = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick__el_div__btns_():void----------" );

		_removeEvent();

		console.log( "e.target.className : " + e.target.className );
		_evt_mClick__el_div__btns_[ "_fn_" + e.target.className ]();

		_addEvent();

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick__el_div__btns_():void----------" );
	};
	_evt_mClick__el_div__btns_._fn_btn_gt = function(){ _el_table.js.req_Data_Next(); };
	_evt_mClick__el_div__btns_._fn_btn_gtgt = function(){ _el_table.js.req_Data_NextEnd(); };
	_evt_mClick__el_div__btns_._fn_btn_lt = function(){ _el_table.js.req_Data_Prev(); };
	_evt_mClick__el_div__btns_._fn_btn_ltlt = function(){ _el_table.js.req_Data_PrevEnd(); };

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