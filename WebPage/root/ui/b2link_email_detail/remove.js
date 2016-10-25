//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/b2link_email_detail/remove.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(url, $el_div){
	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	var $w = window;
	var $d = $w.document;

	var $f0 = window.b2link.element.getElementByClassName;

	var _el_tbody = $f0( $el_div, "tbody" );
	var _el_thead = $f0( $el_div, "thead" );
    var _el_btn_delete = $f0( $el_div, "btn_Delete" );
    var _el_btn_cancel = $f0( $el_div, "btn_Cancel" );

	var _o_thead_style = {
        _check : "Selected"
		,_id : "ID"
		, SLD : "Second Level Domain"
		, TLD : "Top Level Domain"
		, ccTLD : "Country code Top Level Domain"
		, gTLD : "Global Top level Domain"
		, c : "Country"
	};
    
    /**
	* @Property {Function} function( result ){}
	*/
    var _evt_Complete__Delete;

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
        
        _el_btn_delete.addEventListener( "click", _evt_mClick__el_btn_delete, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		$w.removeEventListener( "resize", _evt_resize$parentElement, false );
        _el_btn_delete.removeEventListener( "click", _evt_mClick__el_btn_delete, false );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_resize$parentElement = function( e )
	{
		window.RayLog.timeStamp( "-- [ S ] - evt_resize$parentElement():void----------");
		_setPosition();
		window.RayLog.timeStamp( "-- [ E ] - evt_resize$parentElement():void----------");
	};
    
    /**
	 * @function
	 * @param {MouseEvent} e event
	 */
    var _evt_mClick__el_btn_delete = function( e ) 
    {
        window.RayLog.timeStamp( "-- [ S ] - _evt_mClick__el_btn_delete():void----------");
        window.b2link_service_list_static.email_detail.remove(
			_getDataForQuery()
			, function( result ){s
				if( !result )
				{
					alert( "삭제에 실패 하였습니다. " );
				}
				else
				{
					_evt_Complete__Delete( result );
				}
			}
		);
        window.RayLog.timeStamp( "-- [ E ] - _evt_mClick__el_btn_delete():void----------");
        
    }

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
	var _hide = function() { window.b2link.element.hide( $el_div ); };

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _req_Data():void----------" );
		window.b2link_service_list_static.email_detail.getAllList( _res_Data );
		window.RayLog.timeStamp( "-- [ E ] - _req_Data():void----------" );
	};

	/**
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		window.RayLog.timeStamp( "-- [ S ] - _res_Data:void----------");
		_setData__tbody( result )
		window.RayLog.timeStamp( "-- [ E ] - _res_Data:void----------");
	}

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
	 * @return {Object} [id,id,...]
	 */
    var _selectedDeleteRow = function() 
    {
        var chk = $d.getElementsByName("_chk"); // check 된 가져온다. 
        var len = chk.length;
        for ( var i = 0 ; i < len ; ++i )
        {
            if ( chk[i].checked == true )
            {
                return chk[i];
            }
                
        }
        return r;
    };
    
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
        var d = _selectedDeleteRow();
        var r = { _id : d };
        //*/
		console.logObjectInformation( r, "_getDataForQuery - r" );
		return r;

		window.TtwLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );
	};

	//--------------------------------------------------;

	var _setClassName__tbody_tr_td = function() { window.b2link.element.setClassName__tbody_tr_td( _el_tbody, _className_td ); };

	var _setClassName__thead_tr_th = function() { window.b2link.element.setClassName__tbody_tr_th( _el_thead, _className_th ); };

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__tbody = function( data )
	{
		window.RayLog.timeStamp( "-- [ S ] - _setData_tbody():void----------" );

		window.RayLog.timeStamp( data );
		window.b2link.html.apply_tbody_child( _el_tbody, data );

		window.RayLog.timeStamp( "-- [ E ] - _setData__tbody():void----------");
	};

	//------------------------------;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.RayLog.timeStamp( "-- [ S ] - _setPosition():void----------");
		// var t = $el_div;
		// window.b2link.element.setPosition_CenterMiddle_FromParent( t );
		// _width = t.clientWidht;
		// _height = t.clientHeight;

		window.RayLog.timeStamp( "-- [ E ] - _setPosition():void----------");
	};

	//--------------------------------------------------;

	//--------------------------------------------------;
    
    /**
	 * @function
	 * @return {Function}
	 */
	var _getEvt_Complete__Delete = function(){ return _evt_Complete__Delete; };
	var _setEvt_Complete__Delete = function( fn ){ _evt_Complete__Delete = fn; };

	var _getHeight = function() { return _height; };
	var _setHeight = function( w ) { _height = w; };

	var _getWidth = function() { return _width; };
	var _setWidth = function( w ) { _width = w; };


	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//----------;
	_addEvent();
	_setPosition;
	//----------;

	var o = window.b2link.html.apply_html( _el_thead, _o_thead_style );
		console.log( o );
	_req_Data();

	//----------;
	return {
		dispose : _dispose
		, hide : _hide
		, req_Data : _req_Data
		, show : _show

		, getWidth : _getWidth
		, getHeight : _getHeight
        
        , getEvt_Complete__Delete : _getEvt_Complete__Delete
		, setEvt_Complete__Delete : _setEvt_Complete__Delete
	};
});