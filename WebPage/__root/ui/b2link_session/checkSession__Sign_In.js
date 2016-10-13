//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_session/member_session/checkSession__Sign_In.js";
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

	var _width = $el_div.clientWidth;
	var _height = $el_div.clientHeight;

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

	  _el_btn_cancle.addEventListener( "click", _evt_mClick$btn__member_session$checkSession__Cancle, false, 0, true );
	  _el_btn_signin.addEventListener( "click", _evt_mClick$btn__member_session$checkSession__Sign_In, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_btn_cancle.removeEventListener( "click", _evt_mClick$btn__member_session$checkSession__Cancle, false );
		_el_btn_signin.removeEventListener( "click", _evt_mClick$btn__member_session$checkSession__Sign_In, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick$btn__member_session$checkSession__Sign_In = function( e )
	{
        window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick$btn__member_session$checkSession__Sign_In():void----------" );
        
		window.b2link.service.req$member_session$checkSession__Sign_In(
			{ id : _el_input_id.value, pw : _el_input_pw.value }
			, function( result ){
              window.b2link.console.nameAndObject( "_evt_mClick$btn__member_session$checkSession__Sign_In result", result );
				if( result ) _evt_Complete__SignIn( result );
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
	var _evt_mClick$btn__member_session$checkSession__Cancle = function( e )
	{
        window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick$btn__member_session$checkSession__Cancle():void----------" );
        window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick$btn__member_session$checkSession__Cancle():void----------" );
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

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setPosition():void----------" );
		var t = $el_div;
        
		//window.b2link.element.setPosition_Center_FromWindow( t );
        //window.b2link.element.setPosition_LeftBottom( t, 10, 10 );
        //window.b2link.element.setPosition_LeftTop( t, 10, 10 );
        //window.b2link.element.setPosition_RightBottom( t, 10, 10 );
        window.b2link.element.setPosition_RightTop( t, 10, 10 );
        
		_width = t.clientWidth;
		_height = t.clientHeight;
		window.TtwLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Function} fn
	 */
	var _setEvt_Complete__SignIn = function( fn ){ _evt_Complete__SignIn = fn; };

	//--------------------------------------------------;

	var _getHeight = function(){ return _height; };
	var _setHeight = function( w ){ _height = w; };

	var _getWidth = function(){ return _width; };
	var _setWidth = function( w ){ _width = w; };

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

	return {
		dispose : _dispose
		, hide : _hide
		, show : _show

		, getWidth : _getWidth
		, getHeight : _getHeight

		, setEvt_Complete__SignIn : _setEvt_Complete__SignIn
	};
});