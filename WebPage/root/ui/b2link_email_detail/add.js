//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_email_detail/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_div ){

	//window.b2link.ui_resource.apply_LocaleLabel( url, $el_div );
	window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el_div );

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

	var _el_btn_add = $f0( $el_div, "btn_Add" );
	var _el_btn_cancel = $f0( $el_div, "btn_Cancel" );
	var _el_btn_checkOverlap = $f0( $el_div, "btn_CheckOverlap" );

	/*/
	var _el_input_SLD = $f0( $el_div, "SLD" );
	var _el_input_TLD = $f0( $el_div, "TLD" );
	var _el_input_ccTLD= $f0( $el_div, "ccTLD" );
	var _el_input_gTLD = $f0( $el_div, "gTLD" );
	var _el_input_country = $f0( $el_div, "c" );
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
		_el_btn_cancel.addEventListener( "click", _evt_mClick__el_btn_cancel, false, 0, true );
		_el_btn_checkOverlap.addEventListener( "click", _evt_mClick__el_btn_checkOverlap, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_btn_add.removeEventListener( "click", _evt_mClick__el_btn_add, false );
		_el_btn_cancel.removeEventListener( "click", _evt_mClick__el_btn_cancel, false );
		_el_btn_checkOverlap.removeEventListener( "click", _evt_mClick__el_btn_checkOverlap, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_btn_add = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_add():void----------" );

		window.b2link_service_list_static.email_detail.add(
			_getDataForQuery()
			, function( result ){
				if( !window.b2link.fn.getResultStatus( result ) )
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

		window.b2link_service_list_static.email_detail.check__Overlap(
			_getDataForQuery()
			, function( result ){
				console.log( "==========" );
				console.log( result );
				console.log( typeof result );
				console.log( "==========" );
				if( window.b2link.fn.getResultStatus( result ) )
				{
					alert( "동일 데이터 존재함." )
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
	var _evt_mClick__el_btn_cancel = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_cancel():void----------" );
		window.RayLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_cancel():void----------" );
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
		_el_btn_cancel = null;
		_el_btn_checkOverlap = null;

		/*/
		_el_input_country = null;
		_el_input_ccTLD = null;
		_el_input_gTLD = null;
		_el_input_SLD = null;
		_el_input_TLD = null;
		/*/
		_el_inputParent = null;
		//*/
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object} { SLD : "", TLD : "", ccTLD : "", gTLD : "", c : "" }
	 */
	var _getDataForQuery = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );

		/*/
		var r = {
			SLD : _el_input_SLD.value
			, TLD : _el_input_TLD.value
			, ccTLD : _el_input_ccTLD.value
			, gTLD : _el_input_gTLD.value
			, c : _el_input_country.value
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
	window.b2linkExtends.extends.div_Panel( _this );
	_.__el = $el_div;
	_.dispose = _dispose;

	_.getEvt_Complete__Add = _getEvt_Complete__Add;
	_.setEvt_Complete__Add = _setEvt_Complete__Add;

	_.getEvt_Complete__CheckOverlap = _getEvt_Complete__CheckOverlap;
	_.setEvt_Complete__CheckOverlap = _setEvt_Complete__CheckOverlap;
	//--------------------------------------------------this;
	return _this;
});