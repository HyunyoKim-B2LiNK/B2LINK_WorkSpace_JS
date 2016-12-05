//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_bank_swift/getAllList__Table__Rolling.js";
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
		_el_table.js.setData({ idStart : -1, idEnd : 40, limit : 40, limitTerm : 2, maxCount : null
	 		, fn : {
				req_getCount : window.b2link_service_list_static.bank_swift.getCount
				, req_getList_Range__id : window.b2link_service_list_static.bank_swift.getList_Range__id
			}
		});
		_el_table.js.req_Data();

	/*/
	var _el_tmp_tr = window.document.createElement( "TR" );
		_el_tmp_tr.appendChild( window.document.createElement( "TD" ) );
	_el_table.tBodies[ 0 ].insertAdjacentElement( "afterbegin", _el_tmp_tr );
	//*/

	var _el_table_tbody = _el_table.tBodies[ 0 ];


	var _bScrollBottomEnd = false;
	var _bScrollTopEnd = false;

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
		_addEvent_mClick__el_div__btns_();
		_addEvent_scroll__el_table_tbody();
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );
		_removeEvent_mClick__el_div__btns_();
		_removeEvent_scroll__el_table_tbody();
		_removeEvent_mWheel__el_table_tbody();
	};

	/**
	 * @function
	 */
	var _addEvent_mClick__el_div__btns_ = function()
	{
		_removeEvent_mClick__el_div__btns_();
		_el_div__btns_bottom.addEventListener( "click", _evt_mClick__el_div__btns_, false, 0, true );
		_el_div__btns_top.addEventListener( "click", _evt_mClick__el_div__btns_, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent_mClick__el_div__btns_ = function()
	{
		_el_div__btns_bottom.removeEventListener( "click", _evt_mClick__el_div__btns_, false );
		_el_div__btns_top.removeEventListener( "click", _evt_mClick__el_div__btns_, false );
	};

	/**
	 * @function
	 */
	var _addEvent_scroll__el_table_tbody = function()
	{
		_removeEvent_scroll__el_table_tbody();
		_el_table_tbody.addEventListener( "scroll", _evt_mScroll__el_table_tbody, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent_scroll__el_table_tbody = function()
	{
		_el_table_tbody.removeEventListener( "scroll", _evt_mScroll__el_table_tbody, false );
	};

	/**
	 * @function
	 */
	var _addEvent_mWheel__el_table_tbody = function()
	{
		_removeEvent_mWheel__el_table_tbody();
		_el_table_tbody.addEventListener( "mousewheel", _evt_mWheel__el_table_tbody, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent_mWheel__el_table_tbody = function()
	{
		_el_table_tbody.removeEventListener( "mousewheel", _evt_mWheel__el_table_tbody, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_div__btns_ = function( e )
	{
		window.Rh2Log.timeStamp( "-- [ S ] - _evt_mClick__el_div__btns_():void----------" );

		e.stopImmediatePropagation();
		e.stopPropagation();

		_removeEvent_mClick__el_div__btns_();

		try
		{
			console.log( "e.target.className : " + e.target.className );
			_evt_mClick__el_div__btns_[ "_fn_" + e.target.className ]();
		}
		catch( er )
		{
			console.error( "_evt_mClick__el_div__btns_ Error : " + er );
		}

		_addEvent_mClick__el_div__btns_();

		//_el_table.tBodies[ 0 ].insertAdjacentElement( "afterbegin", _el_tmp_tr );

		window.Rh2Log.timeStamp( "-- [ E ] - _evt_mClick__el_div__btns_():void----------" );
	};
	_evt_mClick__el_div__btns_._fn_btn_gt = function(){ _el_table.js.req_Data_Next(); };
	_evt_mClick__el_div__btns_._fn_btn_gtgt = function(){ _el_table.js.req_Data_NextEnd(); };
	_evt_mClick__el_div__btns_._fn_btn_lt = function(){ _el_table.js.req_Data_Prev(); };
	_evt_mClick__el_div__btns_._fn_btn_ltlt = function(){ _el_table.js.req_Data_PrevEnd(); };

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mScroll__el_table_tbody = function( e )
	{
		//window.Rh2Log.timeStamp( "-- [ S ] - _evt_mScroll__el_table_tbody():void----------" );

		//console.log( e );

		e.stopImmediatePropagation();
		e.stopPropagation();

		_removeEvent_scroll__el_table_tbody();

		var t = e.target;//console.log( t );

		/*/
		console.log( "t.scrollLeft : " + t.scrollLeft );
		console.log( "t.scrollHeight : " + t.scrollHeight );
		console.log( "t.scrollTop : " + t.scrollTop );
		console.log( "t.scrollWidth : " + t.scrollWidth );
		//*/

		if( t.scrollHeight == ( t.clientHeight + t.scrollTop ) )
		{
			console.log( "scroll is Bottom." );

			_bScrollBottomEnd = true;
			_bScrollTopEnd = false;
			_addEvent_scroll__el_table_tbody();
			window.Rh2Log.timeStamp( "-- [ E ] - _evt_mScroll__el_table_tbody():void----------Bottom" );

			//_el_table_tbody.addEventListener( "mousewheel", _evt_mWheel__el_table_tbody, false, 0, true );
			_addEvent_mWheel__el_table_tbody();

			return;
		}
		else if( 0 == t.scrollTop )
		{
			//console.log( "scroll is Top." );

			_bScrollBottomEnd = false;
			_bScrollTopEnd = true;
			_addEvent_scroll__el_table_tbody();
			window.Rh2Log.timeStamp( "-- [ E ] - _evt_mScroll__el_table_tbody():void----------Top" );

			//_el_table_tbody.addEventListener( "mousewheel", _evt_mWheel__el_table_tbody, false, 0, true );
			_addEvent_mWheel__el_table_tbody();

			return;
		}

		_bScrollBottomEnd = false;
		_bScrollTopEnd = false;

		_addEvent_scroll__el_table_tbody();

		//window.Rh2Log.timeStamp( "-- [ E ] - _evt_mScroll__el_table_tbody():void----------" );
	};

	/**
	 * @function
	 * @param {MouseWheelEvent} e event
	 */
	var _evt_mWheel__el_table_tbody = function( e )
	{
		//window.Rh2Log.timeStamp( "-- [ S ] - _evt_mWheel__el_table_tbody():void----------" );

		console.log( "e.wheelDelta : " + e.wheelDelta );

		//_el_table_tbody.removeEventListener( "mousewheel", _evt_mWheel__el_table_tbody, false );
		_removeEvent_mWheel__el_table_tbody();

		e.stopImmediatePropagation();
		e.stopPropagation();

		if( _bScrollBottomEnd && ( 0 > e.wheelDelta ) )
		{
			_bScrollBottomEnd = _bScrollTopEnd = false;

			//_el_table_tbody.removeEventListener( "mousewheel", _evt_mWheel__el_table_tbody, false );
			//_removeEvent_mWheel__el_table_tbody();

			_el_table_tbody.scrollTop = _el_table_tbody.scrollTop / 2;
			_el_table.js.req_Data_Next();
		}
		else if( _bScrollTopEnd && ( 0 < e.wheelDelta ) )
		{
			_bScrollBottomEnd = _bScrollTopEnd = false;

			//_el_table_tbody.removeEventListener( "mousewheel", _evt_mWheel__el_table_tbody, false );
			//_removeEvent_mWheel__el_table_tbody();

			_el_table_tbody.scrollTop = _el_table_tbody.scrollHeight / 2;
			_el_table.js.req_Data_Prev();
		}

		//window.Rh2Log.timeStamp( "-- [ E ] - _evt_mWheel__el_table_tbody():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_resize$parentElement = function( e )
	{
		window.Rh2Log.timeStamp( "-- [ S ] - _evt_resize$parentElement():void----------" );

		_setPosition();

		window.Rh2Log.timeStamp( "-- [ E ] - _evt_resize$parentElement():void----------" );
	};

	//--------------------------------------------------;

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

		_el_div__btns_bottom = null;
		_el_div__btns_top = null;

		_el_table = null;

		_el_table_tbody = null;

		_bScrollBottomEnd = null;
		_bScrollTopEnd = null;
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
		window.Rh2Log.timeStamp( "-- [ S ] - _setPosition():void----------" );

		//var t = $el_div;
		//window.b2link.element.setPosition_CenterMiddle_FromParent( t );

		window.Rh2Log.timeStamp( "-- [ E ] - _setPosition():void----------" );
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