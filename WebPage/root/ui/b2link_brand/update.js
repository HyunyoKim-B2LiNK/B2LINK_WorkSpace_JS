//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_brand/update.js";
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
	
	var _el_btn_update = $f0( $el_div, "btn_Update" );
	var _el_btn_cancel = $f0( $el_div, "btn_Cancel" );

	var _el_tbody = $f0( $el_div, "tbody" );
	var _el_thead = $f0( $el_div, "thead" );

	var _o_thead_style = {
 		_check : "Selected"
		,_id : "ID"
		, nm_kr : "브랜드명", nm_cn : "브랜드명(중문)", nm_us : "브랜드명(영문)"
		, description : "명세"
		, url : "홈페이지" , url_logo : "logo path", url_trademark : "상표등록증"
 		, date_register : "등록일" , _id$member_basic : "등록자"
	};

	var _evt_Complete__Update;
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
		_el_btn_update.addEventListener( "click", _evt_mClick__el_btn_update, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );
		_el_btn_update.removeEventListener( "click", _evt_mClick__el_btn_update, false );
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
	
	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_btn_update = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_update():void----------");

		var d = _getDataForQuery();
			console.log( "d.length : " + d.length );
		var t = window.b2link_service_brand.brand_basic;
		if( 1 < d.length ) t.update_ids( d, _evt_mClick__el_btn_update._cb_f0 );
		else if( 1 == d.length ) t.update_id( d[ 0 ], _evt_mClick__el_btn_update._cb_f0 );

		window.RayLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_update():void----------");
	};
	
	_evt_mClick__el_btn_update._cb_f0 = function( result )
	{
		window.RayLog.timeStamp( "--- [ S ] - _evt_mClick__el_btn_update._cb_f0():void----------");
		console.log( "result : " + result );
		if( !window.b2link.fn.getResultStatus( result ) ) alert( "수정 실패.");
		else _evt_Complete__Update( result );
		window.RayLog.timeStamp( "--- [ E ] - _evt_mClick__el_btn_update._cb_f0():void----------");
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

		$_o_thead_style = null;
	};

	/**
	 * @function
	 */
	var _hide = function(){ window.b2link.element.hide( $el_div ); };

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

	/**
	 * @function
	 */
	var _show = function(){ window.b2link.element.show( $el_div ); };

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;
	
	/**
	 * @function
	 * #param _tr
	 * @return {Object} Object
	 */
	var __getDataForQuery__Tr = function( _tr )
	{
		window.RayLog.timeStamp( "--- [ S ] - __getDataForQuery__Tr( tr ):{Object}----------" );
		var i = 1 , iLen = _tr.children.length;
		var r = {};
		var io; 
		for ( ; i < iLen ; ++i ) // td
		{
			io = _tr.children[i];
			var iolen = io.children.length;
			if ( iolen > 0 )
			{
				for ( var j = 0 ;  j < iolen ; ++j)
				{
					var ioc = io.children[j];
					if( "INPUT" == ioc.tagName ) r[ ioc.className ] = ioc.value;		
				}
			} else r[io.className] = io.innerText;		
			
		}
		window.RayLog.timeStamp( "--- [ S ] - __getDataForQuery__Tr( tr ):{Object}----------" );
		return r;
	}
	
	/**
	 * @function
	 * @return [Array] [Object, Object]
	 */
	var _getDataForQuery = function( )
	{
		window.RayLog.timeStamp( "-- [ S ] - _getDataForQuery():[Object,...]----------" );
		
		var idx = window.b2link.el_tbody.getInputValue_IntFromTBody_CheckBoxSelected( _el_tbody );
		var i = 0 , iLen = idx.length;
		var r = [];
		for ( ; i < iLen ; ++i ) r.push ( __getDataForQuery__Tr( _el_tbody.children[idx[i]] ) );
		
		
		console.logObjectInformation( r, "_getDataForQuery - r" );
		return r;

		window.RayLog.timeStamp( "-- [ E ] - _getDataForQuery():[Object,,...]----------" );
	};


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
		window.RayLog.timeStamp( data );
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
	
	/**
	 * @function
	 * @return {Function}
	 */
	var _getEvt_Complete__Update = function(){ return _evt_Complete__Update; };
	var _setEvt_Complete__Update = function( fn ){ _evt_Complete__Update = fn; };

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

	var o = window.b2link.html.apply_html( _el_thead, _o_thead_style );
		console.log( o );

	_req_Data();

	//----------;
	
	var _ = _this;
	_.dispose = _dispose;
	_.hide = _hide;
	_.req_Data = _req_Data;
	_.show = _show;
	_.getEvt_Complete__Update = _getEvt_Complete__Update;
	_.setEvt_Complete__Update = _setEvt_Complete__Update;
	//--------------------------------------------------this;
	
	return _this;
});