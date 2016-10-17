//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/test/test_Menu.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED = "div__test_Menu_UIContainer";


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

    var _el_div_menu_list = $d.getElementById( "div__test_Menu_List" );
    var _el_div_menu_uic = $d.getElementById( "div__test_Menu_UIContainer" );

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

	  _el_div_menu_list.addEventListener( "click", _evt_mClick, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_div_menu_list.removeEventListener( "click", _evt_mClick, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick = function( e )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _evt_mClick():void----------" );
        var t = e.target;
            //console.logObjectInformation( t, "t" );
        window.b2link.STATIC.UI.__allHide();
        //window.b2link.STATIC.UI.__all_setPosition__TestMenu();
        var o = t.onclick();
            //console.log( o );
        _el_div_menu_uic.appendChild( o[ 0 ] );
        window.b2link.element.setPosition_Center_FromParent( o[ 0 ] );

		window.TtwLog.timeStamp( "-- [ E ] - _evt_mClick():void----------" );
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
		//_el_btn_signin = null;
	};

	/**
	 * @function
	 */
	var _hide = function(){ window.b2link.element.hide( $el_div ); };

	/**
	 * @function
	 */
	var _show = function(){ window.b2link.element.show( $el_div ); };

    var _showOrCreateElement = function()
    {
        
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

		//window.b2link.element.setPosition_Center_FromWindow( t );
		//window.b2link.element.setPosition_LeftBottom( t, 10, 10 );
		window.b2link.element.setPosition_LeftTop( t, 5, 5 );
		//window.b2link.element.setPosition_RightBottom( t, 10, 10 );
		//window.b2link.element.setPosition_RightTop( t, 10, 10 );

		_width = t.clientWidth;
		_height = t.clientHeight;
        
        window.b2link.STATIC.UI.__all_setPosition_Center_FromParent();
        
		window.TtwLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};

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
    
    _el_div_menu_uic.__appendChild = _el_div_menu_uic.appendChild;
    _el_div_menu_uic.appendChild = function( t )
    {
        var o = _el_div_menu_uic.__appendChild( t );
            //console.log( "var o = _el_div_menu_uic.__appendChild( t );" );
            //console.log( o );
        setTimeout( function(){ window.b2link.element.setPosition_Center_FromParent( t ); }, 300 );
        return o;
    };

	//----------;

	return {
		dispose : _dispose
		, hide : _hide
		, show : _show

		, getWidth : _getWidth
		, getHeight : _getHeight
	};
});