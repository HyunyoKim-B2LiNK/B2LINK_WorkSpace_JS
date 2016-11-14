//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/product_brand/add.js";
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
	var $d = window.document;

	var $f0 = window.b2link.element.getElementByClassName;

	var _el_btn_add = $f0( $el_div, "btn_Add" );

	var _el_inputParent = $f0( $el_div, "inputs" );
	var _el_input_Date_register = $f0( $el_div, "date_register" );
	var _el_input_Register = $f0( $el_div, "register" );

	/**
	 * @Property {Function} function( result ){}
	 */
	var _evt_Complete__Add;

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
		_el_input_Date_register = null
		_el_input_Register = null;


		_evt_Complete__Add = null;

	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * //수정하기 - 박종하 - 20161108
	 * @return {Object} { brand : {String}, nm_kr : {String}, nm_cn : {String}, nm_us : {String}
	 *					, product_category : {String}, weight : {Number}, unit_weight : {String}
	 *					, url : {String}, url_file_product : {String}, barcode : {String}, url_file_barcode : {String}, msds:{Boolean}, url_file_msds : {String}
	 *					, description : {String}, register : {String}  }
	 */
	var _getDataForQuery = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );

		var r = window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type( _el_inputParent );
		console.logObjectInformation( r, "_getDataForQuery - r" );

		return r;

		window.RayLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );
	};
	
	
	/**
	* @function 회원 명을 가져 온다. 
	*/
	var _getDataFromServer__MemberName = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _getDataFromServer__MemberName():void----------" );
		
		window.b2link_service_member.member_basic.getDocProperty__Name( function( result ) {
			if ( result === false ) alert( "인가 되지 않은 사용자." );
			else _setData_Register( result );
		});
		window.RayLog.timeStamp( "-- [ E ] - _getDataFromServer__MemberName():void----------" );
	}

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

		window.RayLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};
<<<<<<< HEAD
	
	
=======

	/**
	 * @function
	 * @param {Array}
	 */
	var _setData_Today = function( o )
	{
		//개발하기 - 박종하 - 20161108 - 서버에서 받아 와야 한다.;
		window.RayLog.timeStamp( "-- [ S ] - _setData_Today():void----------" );
		var _date = new Date();
		var _year = _date.getFullYear();
		var _month = _date.getMonth();
		var _day = _date.getDay();
		var _hour = _date.getHours();
		var _min = _date.getMinutes();
		var _sec = _date.getSeconds();
		o[ 0 ] = _year;
		o[ 1 ] = _month;
		o[ 2 ] = _day;
		o[ 3 ] = _hour;
		o[ 4 ] = _min;
		o[ 5 ] = _sec;

		_el_input_Date_register.value = o.toString();
		window.RayLog.timeStamp( "-- [ E ] - _setData_Today():void----------" );
	};

	/**
	 * @function
	 * @param {String}  "박종하" 
	 */
	var _setData__el_input_Register = function( d )
	{
		window.RayLog.timeStamp( "-- [ S ] - _setData__el_input_Register():void----------" );

		_el_input_Register.value = d;

		window.RayLog.timeStamp( "-- [ E ] - _setData__el_input_Register():void----------" );
	}


	/**
	 * @function
	 */
	var _setData_InputValue = function()
	{

		_getDataFromServer__MemberName();
		_setData__el_input_Register({ "박종하");
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