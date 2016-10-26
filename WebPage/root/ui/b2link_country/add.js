//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_country/add.js";
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
	
	var _this = {};

	var $w = window;
	var $d = window.document;

	var $f0 = window.b2link.element.getElementByClassName;

	var _el_btn_add = $f0( $el_div, "btn_Add" );
	var _el_btn_cancle = $f0( $el_div, "btn_Cancle" );
	var _el_btn_checkOverlap = $f0( $el_div, "btn_CheckOverlap" );
	
	/*/
	var _el_input__cd_n = $f0( $el_div, "cd_n" );
	var _el_input__cd_us2 = $f0( $el_div, "cd_us2" );
	var _el_input__cd_us3 = $f0( $el_div, "cd_us3" );
	var _el_input__nm_cn = $f0( $el_div, "nm_cn" );
	var _el_input__nm_kr = $f0( $el_div, "nm_kr" );
	var _el_input__nm_us = $f0( $el_div, "nm_us" );
	/*/
	var _el_inputParent = $f0( $el_div, "inputs" );
	//*/

	/**
	 * @Property {Function} function( result ){}
	 */
	var _evt_Complete__Add;
	var _evt_Complete__CheckOverlap;

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

		_el_btn_add.addEventListener( "click", _evt_mClick__el_btn_add, false, 0, true );
		_el_btn_cancle.addEventListener( "click", _evt_mClick__el_btn_cancle, false, 0, true );
		_el_btn_checkOverlap.addEventListener( "click", _evt_mClick__el_btn_checkOverlap, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_btn_add.removeEventListener( "click", _evt_mClick__el_btn_add, false );
		_el_btn_cancle.removeEventListener( "click", _evt_mClick__el_btn_cancle, false );
		_el_btn_checkOverlap.removeEventListener( "click", _evt_mClick__el_btn_checkOverlap, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_btn_add = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_add():void----------" );

		window.b2link_service_list_static.country.add(
			_getDataForQuery()
			, function( result ){
				if( !result )
				{
					alert( "등록 실패." );
				}
				else
				{
					_evt_Complete__Add( result );
				}
			}
		);

		window.RayLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_add():void----------" );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_btn_checkOverlap = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_checkOverlap():void----------" );

		window.b2link_service_list_static.country.check__Overlap(
			_getDataForQuery()
			, function( result ){
				console.log( "==========" );
				console.log( result );
				console.log( typeof result );
				console.log( "==========" );
				if( window.b2link.fn.getResultStatus( result ) )
				{
					alert( "동일 데이터 존재." )
				}
				else
				{
					alert( "등록 가능 데이터." );//_evt_Complete__CheckOverlap( result );
				}
			}
		);

		window.RayLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_checkOverlap():void----------" );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_btn_cancle = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_cancle():void----------" );
		window.RayLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_cancle():void----------" );
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

		_el_btn_add = null;
		_el_btn_cancle = null;
		_el_btn_checkOverlap = null;

		/*/
		_el_input__cd_n = null;
		_el_input__cd_us2 = null;
		_el_input__cd_us3 = null;
		_el_input__nm_cn = null;
		_el_input__nm_kr = null;
		_el_input__nm_us = null;
		/*/
		_el_inputParent = null;
		//*/
	};

	/**
	 * @function
	 */
	var _hide = function(){ window.b2link.element.hide( $el_div ); };

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
	 * @return {Object} { cd_n : {Number}, cd_us2 : "", cd_us3 : "", nm_cn : "", nm_kr : "", nm_us : "" }
	 */
	var _getDataForQuery = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );
		
		/*/
		var r = {
			cd_n : _el_input__cd_n.value
			, cd_us2 : _el_input__cd_us2.value
			, cd_us3 : _el_input__cd_us3.value
			, nm_cn : _el_input__nm_cn.value
			, nm_kr : _el_input__nm_kr.value
			, nm_us : _el_input__nm_us.value
		};
		/*/
		var r = window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input( _el_inputParent );
		//*/
		console.logObjectInformation( r, "_getDataForQuery - r" );
		return r;

		window.TtwLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setPosition():void----------" );
		var t = $el_div;

		//window.b2link.element.setPosition_CenterMiddle_FromParent( t );
		//window.b2link.element.setPosition_LeftBottom( t, 10, 10 );
		//window.b2link.element.setPosition_LeftTop( t, 10, 10 );
		//window.b2link.element.setPosition_RightBottom( t, 10, 10 );
		//window.b2link.element.setPosition_RightTop( t, 10, 10 );

		_width = t.clientWidth;
		_height = t.clientHeight;
		window.TtwLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Function}
	 */
	var _getEvt_Complete__Add = function(){ return _evt_Complete__Add; };
	var _setEvt_Complete__Add = function( fn ){ _evt_Complete__Add = fn; };

	/**
	 * @function
	 * @return {Function}
	 */
	var _getEvt_Complete__CheckOverlap = function(){ return _evt_Complete__CheckOverlap; };
	var _setEvt_Complete__CheckOverlap = function( fn ){ _evt_Complete__CheckOverlap = fn; };

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
	//console.logObjectInformation( $w );
	window.RayLog.timeStamp( "$w.screen.width : " + $w.screen.width );
	window.RayLog.timeStamp( "$w.screen.height : " + $w.screen.height );

	//----------;
	
	//--------------------------------------------------this;
	var _ = _this;
	_.dispose = _dispose;
	_.hide = _hide;
	_.show = _show;
	_.getEvt_Complete__Add = _getEvt_Complete__Add;
	_.setEvt_Complete__Add = _setEvt_Complete__Add;
	_.getEvt_Complete__CheckOverlap = _getEvt_Complete__CheckOverlap;
	_.setEvt_Complete__CheckOverlap = _setEvt_Complete__CheckOverlap;
	//--------------------------------------------------this;
	return _this;
});