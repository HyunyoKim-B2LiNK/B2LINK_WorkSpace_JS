//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/el_input/window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * @function
	 * @param {Object} t INPUT
	 * @param {HTMLElement} el INPUT
	 */
	window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName = function( t, el )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName():void----------" );

		/*/
		try
		{
			var r = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName[ "_fn_" + io.type ]( t );
		}
		catch( er )
		{
			console.error( "window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName Error : " + er );
		}
		/*/
		
		var r = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName[ "_fn_" + el.type ]( t );
		//*/

		t[ el.className ] = r;

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName():void----------" );
	};
	var _ = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName;
		_._fn_button = function( t ){ t.value; };
		_._fn_checkbox = function( t ){ t.checked; };
		_._fn_color = function( t ){ t.value; };
		_._fn_date = function( t ){ t.value; };
		_[ "datetime-local" ] = function( t ){ t.value; };
		_._fn_email = function( t ){ t.value; };
		_._fn_file = function( t ){ t.value; };
		_._fn_hidden = function( t ){ t.value; };
		_._fn_image = function( t ){ t.value; };
		_._fn_month = function( t ){ t.value; };
		_._fn_number = function( t ){ t.value; };
		_._fn_password = function( t ){ t.value; };
		_._fn_radio = function( t ){ t.value; };
		_._fn_range = function( t ){ t.value; };
		_._fn_reset = function( t ){ t.value; };
		_._fn_search = function( t ){ t.value; };
		_._fn_submit = function( t ){ t.value; };
		_._fn_tel = function( t ){ t.value; };
		_._fn_text = function( t ){ return t.value; };
		_._fn_time = function( t ){ t.value; };
		_._fn_url = function( t ){ t.value; };
		_._fn_week = function( t ){ t.value; };
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;