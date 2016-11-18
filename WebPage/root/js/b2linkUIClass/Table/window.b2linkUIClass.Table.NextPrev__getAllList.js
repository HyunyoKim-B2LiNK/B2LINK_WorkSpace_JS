//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/Table/window.b2linkUIClass.Table.NextPrev__getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {HTMLElement} $el_table
 */
window.b2linkUIClass.Table.NextPrev__getAllList = function( url, $el_table )
{
	//window.b2link.ui_resource.apply_LocaleLabel( url, $el_table );
	//window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el_table );
	window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el_table );

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

	var _el_tbody = $f0( $el_table, "tbody" );
	var _el_thead = $f0( $el_table, "thead" );

	var _fn_req_getCount;
	var _fn_req_getList_Range__id;

	var _o_tbody_status = { idS : -1, idE : 10, limit : 10, maxCount : 0 };

	/**
	 * @Property {String} 0 or 1 - 0(Prev), 1(Next)
	 */
	var _status_req = null;

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
		//$w.addEventListener( "resize", _evt_resize$parentElement, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		//$w.removeEventListener( "resize", _evt_resize$parentElement, false );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	/*/
	var _evt_resize$parentElement = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_resize$parentElement():void----------" );

		_setPosition();

		window.TtwLog.timeStamp( "-- [ E ] - _evt_resize$parentElement():void----------" );
	};
	//*/

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _calc_DataNext():void----------" );

		var o = _o_tbody_status;
		var n = window.b2link.el_tbody.getTD_innerText_Int__LastTRFirstTD( _el_tbody );
		if( n == o.maxCount )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _calc_DataNext():void----------if( n == o.maxCount )" );
			o.idS = o.maxCount + 1;
			return 1;
		}

		o.idS += o.limit;
		o.idE += o.limit;

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( o.idS > o.maxCount )
		{
			o.idE = o.maxCount;
			o.idS = o.maxCount - o.limit;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _calc_DataNext():void----------" );
	};

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _cale_DataPrev():void----------" );

		var o = _o_tbody_status;
		var n = window.b2link.el_tbody.getTD_innerText_Int__FirstTRFirstTD( _el_tbody );
		if( 0 == n )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _cale_DataPrev():void----------if( 0 == n )" );
			o.idS = -2;
			return 1;
		}

		o.idS -= o.limit;
		o.idE -= o.limit;

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( -1 > o.idS )
		{
			o.idS = -1;
			o.idE = o.idS + o.limit;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _cale_DataPrev():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();
		$w = null;
		$d = null;

		$f0 = null;

		_el_tbody = null;
		_el_thead = null;

		_fn_req_getCount = null;
		_fn_req_getList_Range__id = null;

		_o_tbody_status = null;

		_status_req = null;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data():void----------" );

		var o = _o_tbody_status;
		_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data():void----------" );
	};

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data_Next():void----------" );

		if( _calc_DataNext() )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Next():void----------if( _calc_DataNext() )" );
			return;
		}

		var o = _o_tbody_status;
		/*/
		if( o.idE >= o.maxCount )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Next():void----------return;" );
			return;
		}
		//*/

		if( o.idS < o.maxCount )
		{
			_status_req = 1;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Next():void----------" );
	};

	/**
	 * @function
	 */
	var _req_Data_NextEnd = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data_NextEnd():void----------" );

		//수정하기 - 20161115 - 송선우 - 맨 앞이 되게 수정하기;
		_calc_DataNext();
		_calc_DataNext();

		var o = _o_tbody_status;
		if( o.idE >= o.maxCount )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_NextEnd():void----------return;" );
			return;
		}

		if( o.idS < o.maxCount )
		{
			_status_req = 1;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data_NextEnd():void----------" );
	};

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data_Prev():void----------" );

		if( _calc_DataPrev() )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Prev():void----------if( _calc_DataPrev() )" );
			return;
		}

		var o = _o_tbody_status;
		if( o.idS < -1 )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Prev():void----------return;" );
			return;
		}

		if( 1 < o.idE )
		{
			_status_req = 0;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Prev():void----------" );
	};

	/**
	 * @function
	 */
	var _req_Data_PrevEnd = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data_PrevEnd():void----------" );

		//수정하기 - 20161115 - 송선우 - End가 되게 수정하기;
		_calc_DataPrev();
		_calc_DataPrev();

		var o = _o_tbody_status;
		if( o.idS < -1 )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_PrevEnd():void----------return;" );
			return;
		}

		if( 1 < o.idE )
		{
			_status_req = 0;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data_PrevEnd():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res_Data():void----------" );

		_setData__tbody( result );

		window.TtwLog.timeStamp( "-- [ E ] - _res_Data():void----------" );
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"idStart" : -1
	 *	, "idEnd" : 20
	 *	, "limit" : 20
	 *	, "maxCount" : null
	 *	"fn" : {
	 *		"req_getCount" : {Function}
	 *		, "req_getList_Range__id" : {Function}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setData():void----------" );

		_fn_req_getCount = d.fn.req_getCount;
		_fn_req_getList_Range__id = d.fn.req_getList_Range__id;

		_set__o_tbody_status( d.idStart, d.idEnd, d.limit, d.maxCount );

		window.TtwLog.timeStamp( "-- [ E ] - _setData():void----------" );
	};

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__tbody = function( data )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setData__tbody():void----------" );

		//console.log( data );

		window.b2link.html.apply_tbody_child( _el_tbody, data );

		window.TtwLog.timeStamp( "-- [ E ] - _setData__tbody():void----------" );
	};

	//------------------------------;

	/**
	 * @function
	 */
	/*/
	var _setPosition = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setPosition():void----------" );

		//var t = $el_table;
		//window.b2link.element.setPosition_CenterMiddle_FromParent( t );

		window.TtwLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};
	//*/

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _set_Req__o_tbody_status_maxCount = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _set_Req__o_tbody_status_maxCount():void----------" );

		_fn_req_getCount( function( r ){ _o_tbody_status.maxCount = r; });

		window.TtwLog.timeStamp( "-- [ E ] - _set_Req__o_tbody_status_maxCount():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object} { "idS" : 0, "idE" : 10, "limit" : 10, "maxCount" : 0 };
	 */
	var _get__o_tbody_status = function(){ return _o_tbody_status; };
	/**
	 * @function
	 * @param {uint} idStart
	 * @param {uint} idEnd
	 * @param {uint} limit
	 * @param {uint} maxCount
	 */
	var _set__o_tbody_status = function( idStart, idEnd, limit, maxCount )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _set__o_tbody_status():void----------" );

		_o_tbody_status.idS = idStart ? idStart : -1;
		_o_tbody_status.idE = idEnd ? idEnd : 20;
		_o_tbody_status.limit = limit ? limit : 20;

		if( maxCount ) _o_tbody_status.maxCount = maxCount;
		else _set_Req__o_tbody_status_maxCount();

		console.log( _o_tbody_status );

		window.TtwLog.timeStamp( "-- [ E ] - _set__o_tbody_status():void----------" );
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//----------;
	_addEvent();
	//_setPosition();
	//----------;

	//_req_Data();

	//----------;

	//--------------------------------------------------this;
	var _ = _this;
	//window.b2linkExtends.extends.div_Panel( _this );

	_.__el = $el_table;
	_.dispose = _dispose;

	_.req_Data = _req_Data;
	_.req_Data_Next = _req_Data_Next;
	_.req_Data_NextEnd = _req_Data_NextEnd;
	_.req_Data_Prev = _req_Data_Prev;
	_.req_Data_PrevEnd = _req_Data_PrevEnd;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;