//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_member/getAllList.js";
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

	//var _className_td = "border_solid_1px_000000";
	//var _className_th = "border_solid_1px_000000";

	var $f0 = window.b2link.element.getElementByClassName;

	var _el_tbody = $f0( $el_div, "tbody" );
	var _el_thead = $f0( $el_div, "thead" );

	var _o_thead_style = {
		"_id" : "ID"
		, "bConn" : "접속 상태", "email" : "E-MAIL", "nSignInFail" : "로그인 실패 횟수"
		, "nm.a" : "이름", "nm_cn.a" : "이름(중문)", "nm_kr.a" : "이름(한글)", "nm_us.a" : "이름(영문)"
		, "rank" : "등급", "mid" : "MEMBER ID"
	};

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
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data():void----------" );
		window.b2link_service_member.member_basic.getAllList( _res_Data );
		window.TtwLog.timeStamp( "-- [ E ] - _req_Data():void----------" );
	};

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

	/**
	 * @function
	 */
	var _show = function(){ window.b2link.element.show( $el_div ); };

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	var _setClassName__tbody_tr_td = function(){ window.b2link.element.setClassName__tbody_tr_td( _el_tbody, _className_td ); };

	var _setClassName__thead_tr_th = function(){ window.b2link.element.setClassName__tbody_tr_th( _el_thead, _className_th ); };

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__tbody = function( data )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setData__tbody():void----------" );

		window.TtwLog.timeStamp( "window.b2link.service.req$member_basic$getAllList result : " );
		window.TtwLog.timeStamp( data );
		window.b2link.html.apply_tbody_child( _el_tbody, data );
		//_setClassName__tbody_tr_td();

		window.TtwLog.timeStamp( "-- [ E ] - _setData__tbody():void----------" );
	};

	//------------------------------;

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
	_setPosition();
	//----------;

	var o = window.b2link.html.apply_html( _el_thead, _o_thead_style );
		console.log( o );
	//_setClassName__thead_tr_th();

	_req_Data();

	//----------;

	//--------------------------------------------------this;
	var _ = _this;
	_.dispose = _dispose;
	_.hide = _hide;
	_.req_Data = _req_Data;
	_.show = _show;
	//--------------------------------------------------this;
	return _this;
});