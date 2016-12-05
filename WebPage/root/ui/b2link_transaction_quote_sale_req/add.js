//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_transaction_quote_sale_req/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_div ){

	//window.b2link.ui_resource.apply_LocaleLabel( url, $el_div );
	window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el_div );

	//*/
	var _this = { __url : url };
	var _ = _this;
	window.b2linkExtends.extends.div_Panel( _this );
	_.__el = $el_div;
	return _this;
	//*/

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
	var $d = window.document;

	var $f0 = window.b2link.element.getElementByClassName;

	var _el_btn_add = $f0( $el_div, "btn_Add" );
	var _el_btn_cancel = $f0( $el_div, "btn_Cancel" );
	var _el_btn_checkOverlap = $f0( $el_div, "btn_CheckOverlap" );

	var _el_inputParent = $f0( $el_div, "inputs" );

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

		window.b2link_service_brand.brand_basic.add(
			_getDataForQuery()
			, function( result )
			{
				if( !result ) alert( "등록 실패." );
				else _evt_Complete__Add( result );
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

		window.b2link_service_brand.brand_basic.check__Overlap(
			_getDataForQuery()
			, function( result )
			{
				console.log( "==========" );
				console.log( result );
				console.log( typeof result );
				console.log( "==========" );
				if( window.b2link.fn.getResultStatus( result ) ) alert( "동일 데이터 존재." )
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
	 * 회원 명을 가져 온다.
	 * @function
	 */
	var _getDataFromServer__MemberName = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _getDataFromServer__MemberName():void----------" );

		window.b2link_service_member.member_public.getProp_NameFromsid( function( result ){
			if( result === false ) alert( "인가 되지 않은 사용자." );
			else _setData__el_input_nm_register( result );
		});

		window.RayLog.timeStamp( "-- [ E ] - _getDataFromServer__MemberName():void----------" );
	}

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$w = null;
		$d = null;

		$f0 = null;

		_el_btn_add = null;
		_el_btn_cancel = null;
		_el_btn_checkOverlap = null;

		_el_inputParent = null;

		_el_input_Register = null;

		_evt_Complete__Add = null;
		_evt_Complete__CheckOverlap = null;
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object} { nm_kr : "", nm_us : "", nm_cn : "", url : "", url_logo : "", url_trademark : "", description : "" }
	 */
	var _getDataForQuery = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );

		var r = window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input( _el_inputParent );
		console.logObjectInformation( r, "_getDataForQuery - r" );

		return r;

		window.RayLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {String}  "박종하"
	 */
	var _setData__el_input_nm_register = function( d )
	{
		window.RayLog.timeStamp( "-- [ S ] - _setData__el_input_nm_register():void----------" );

		_el_input_nm_register.value = d;

		window.RayLog.timeStamp( "-- [ E ] - _setData__el_input_nm_register():void----------" );
	}

	/**
	 * @function
	 */
	var _setData_InputValue = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _setData_InputValue():void----------" );

		//get user name from server;
		_getDataFromServer__MemberName();

		window.RayLog.timeStamp( "-- [ E ] - _setData_InputValue():void----------" );
	};

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _setPosition():void----------" );

		var t = $el_div;

		//window.b2link.element.setPosition_CenterMiddle_FromParent( t );
		//window.b2link.element.setPosition_LeftBottom( t, 10, 10 );
		//window.b2link.element.setPosition_LeftTop( t, 10, 10 );
		//window.b2link.element.setPosition_RightBottom( t, 10, 10 );
		//window.b2link.element.setPosition_RightTop( t, 10, 10 );

		window.RayLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
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
	_setData_InputValue();
	_setPosition();
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