//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_email/addEmail.js";
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
	var _el_btn_add = $f0( $el_div, "btn_Add" );
	var _el_btn_checkoverlap = $f0( $el_div, "btn_CheckOverlap" );

	var _el_input_SLD = $f0( $el_div, "SLD" );
	var _el_input_TLD = $f0( $el_div, "TLD" );
	var _el_input_ccTLD= $f0( $el_div, "ccTLD" );
	var _el_input_gTLD = $f0( $el_div, "gTLD" );
	var _el_input_country = $f0( $el_div, "country" );


	/**
	 * @Property {Function} function( result ){}
	 */
	var _evt_Complete__Add;
	var _evt_Complete__CheckOverlap;

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
		_el_btn_checkoverlap.addEventListener( "click", _evt_mClick$btn__email$addEmail_checkOverlap, false, 0, true );
		_el_btn_add.addEventListener( "click", _evt_mClick$btn__email$addEmail_add, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_btn_checkoverlap.removeEventListener( "click", _evt_mClick$btn__email$addEmail_checkOverlap, false );
		_el_btn_add.removeEventListener( "click", _evt_mClick$btn__email$addEmail_add, false );

	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick$btn__email$addEmail_add = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick$btn__email$addEmail_add():void----------" );
		window.b2link.service.req$email$addEmail__add({
				sld : _el_input_SLD.value
				, tld : _el_input_TLD.value
				, ccTLD : _el_input_ccTLD.value
				, gTLD : _el_input_gTLD.value
				, c : _el_input_country.value
			}
			, function( result ){
				if( !result )
				{
					alert( "등록에 실패 하였습니다. " );
				}
				else
				{
					_evt_Complete__Add( result );
				}
			}
		);

		window.RayLog.timeStamp( "-- [ E ] - _evt_mClick$btn__email$addEmail_add():void----------" );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick$btn__email$addEmail_checkOverlap = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick$btn__email$addEmail_checkOverlap():void----------" );
		window.b2link.service.req$email$addEmail__checkOverlap({
				sld : _el_input_SLD.value
				, tld : _el_input_TLD.value
				, ccTLD : _el_input_ccTLD.value
				, gTLD : _el_input_gTLD.value
				, c : _el_input_country.value
			}
			, function( result ){
				if( result.result == 0 )
				{
					alert( "등록 가능한 이메일입니다." );//_evt_Complete__CheckOverlap( result );
				}
				else
				{
					alert( "이미 등록 되어 있습니다." )
				}
			}
		);

		window.RayLog.timeStamp( "-- [ E ] - _evt_mClick$btn__email$addEmail_checkOverlap():void----------" );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick$btn__email$addEmail__Cancle = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick$btn__email$addEmail__Cancle():void----------" );
		window.RayLog.timeStamp( "-- [ E ] - _evt_mClick$btn__email$addEmail__Cancle():void----------" );
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
		_el_btn_checkoverlap = null;
		_el_btn_cancle = null;
		_el_input_ccTLD = null;
		_el_input_gTLD = null;
		_el_input_SLD = null;
		_el_input_country = null;
		_el_input_TLD = null;
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
	window.RayLog.timeStamp( "$w.screen.width : " + $w.screen.width );
	window.RayLog.timeStamp( "$w.screen.height : " + $w.screen.height );

	//----------;

	return {
		dispose : _dispose
		, hide : _hide
		, show : _show

		, getWidth : _getWidth
		, getHeight : _getHeight

		, getEvt_Complete__Add : _getEvt_Complete__Add
		, setEvt_Complete__Add : _setEvt_Complete__Add

		, getEvt_Complete__CheckOverlap : _getEvt_Complete__CheckOverlap
		, setEvt_Complete__CheckOverlap : _setEvt_Complete__CheckOverlap
	};
});