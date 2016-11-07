//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/product_brand/add.js";
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

	var _el_btn_add = $f0( $el_div, "btn_Add" );

	var _el_inputParent = $f0( $el_div, "inputs" );
	var _el_inputDate_register = $f0( $el_div, "date_register" );
	var _el_inputRegister = $f0( $el_div, "register" );

	/**
	 * @Property {Function} function( result ){}
	 */
	var _evt_Complete__Add;
	
	var _toDay = [];

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
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );

		_el_btn_add.removeEventListener( "click", _evt_mClick__el_btn_add, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_btn_add = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_add():void----------" );
		window.b2link_service_product.product_basic.add(
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

		$f0 = null;

		_el_btn_add = null;
		
		_el_inputParent = null;

		_evt_Complete__Add = null;
	};

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
		window.RayLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );

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

		window.RayLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );
	};

	//--------------------------------------------------;

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

		_width = t.clientWidth;
		_height = t.clientHeight;
		window.RayLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};
	
	/**
	 * @function
	 * @param {Array} 
	 */
	var _setData_Today = function( o )
	{
		// 서버에서 받아 와야 한다. 
		window.RayLog.timeStamp( "-- [ S ] - _setData_Today():void----------" );
		var _date = new Date();
		var _year = _date.getFullYear();
		var _month = _date.getMonth();
		var _day = _date.getDay();
		var _hour = _date.getHours();
		var _min = _date.getMinutes();
		var _sec = _date.getSeconds();
		o[0] = _year;
		o[1] = _month;
		o[2] = _day;
		o[3] = _hour;
		o[4] = _min;
		o[5] = _sec;
		
		_el_inputDate_register.value = o.toString();
		window.RayLog.timeStamp( "-- [ E ] - _setData_Today():void----------" );
		
	};
	
	/**
	 * @function
	 * @param {Object}  { register : "박종하" }
	 */
	var _setData_Register = function( o )
	{
		window.RayLog.timeStamp( "-- [ S ] - _setData_Register():void----------" );
		_el_inputRegister.value = o.register;
		window.RayLog.timeStamp( "-- [ E ] - _setData_Register():void----------" );
	}
	
	/**
	 * @function
	 */
	var _setData_InputValue = function()
	{
		_setData_Today( _toDay );	
		_setData_Register( {"register" : "박종하"});
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Function}
	 */
	var _getEvt_Complete__Add = function(){ return _evt_Complete__Add; };
	var _setEvt_Complete__Add = function( fn ){ _evt_Complete__Add = fn; };

	
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

	//--------------------------------------------------this;
	return _this;
});