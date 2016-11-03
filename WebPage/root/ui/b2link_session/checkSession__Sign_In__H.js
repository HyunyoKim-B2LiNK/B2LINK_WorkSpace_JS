//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_session/member_session/checkSession__Sign_In.js";
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
	var $d = window.document;

	var $f0 = window.b2link.element.getElementByClassName;

	var _el_btn_cancle = $f0( $el_div, "btn_Cancle" );
	var _el_btn_signin = $f0( $el_div, "btn_SignIn" );

	var _el_input_id = $f0( $el_div, "input_ID" );
	var _el_input_pw = $f0( $el_div, "input_PW" );

	/**
	 * @Property {Function} function( result ){}
	 */
	var _evt_Complete__SignIn;

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

		_el_btn_cancle.addEventListener( "click", _evt_mClick__el_btn_cancle, false, 0, true );
		_el_btn_signin.addEventListener( "click", _evt_mClick__el_btn_signin, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_btn_cancle.removeEventListener( "click", _evt_mClick__el_btn_cancle, false );
		_el_btn_signin.removeEventListener( "click", _evt_mClick__el_btn_signin, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_btn_signin = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_signin():void----------" );

		window.b2link_service_member.member_session.checkSession__Sign_In(
			{
				id : _el_input_id.value
				, pw : _el_input_pw.value
			}
			, function( result ){
				window.b2link.console.nameAndObject( "_evt_mClick__el_btn_signin result", result );
				if( window.b2link.fn.getResultStatus( result ) ) _evt_Complete__SignIn( result );
				else
				{
					window.b2link.log.error__Signin_failure();
					//alert( "Signin Failue." );
				}
			}
		);

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick$btn__member_session$checkSession__Sign_In():void----------" );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_btn_cancle = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_cancle():void----------" );
		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_cancle():void----------" );
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
		_el_btn_signin = null;
		_el_input_id = null;
		_el_input_pw = null;
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

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
	var _getEvt_Complete__SignIn = function(){ return _evt_Complete__SignIn; };
	var _setEvt_Complete__SignIn = function( fn ){ _evt_Complete__SignIn = fn; };

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
	window.TtwLog.timeStamp( "$w.screen.width : " + $w.screen.width );
	window.TtwLog.timeStamp( "$w.screen.height : " + $w.screen.height );

	//----------;

	//--------------------------------------------------this;
	var _ = _this;
	window.b2linkExtends.extends.div_Panel( _this );
	_.__el = $el_div;
	_.dispose = _dispose;
	_.getEvt_Complete__SignIn = _getEvt_Complete__SignIn;
	_.setEvt_Complete__SignIn = _setEvt_Complete__SignIn;
	//--------------------------------------------------this;
	return _this;
});