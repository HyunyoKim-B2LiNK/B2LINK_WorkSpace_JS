//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/el_input/window.b2link.el_input.getInputValueFromInputType.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * @function
	 * @param {HTMLElement} t INPUT
	 * @return {Object} {}
	 */
	window.b2link.el_input.getInputValueFromInputType = function( t )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_input.getInputValueFromInputType():{Object}----------" );

		/*/
		try
		{
			var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + io.type ]( t );
		}
		catch( er )
		{
			console.error( "window.b2link.el_input.getInputValueFromInputType Error : " + er );
		}
		/*/
		var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + t.type ]( t );
		//*/


		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_input.getInputValueFromInputType():{Object}----------" );

		return r;
	};
	var _ = window.b2link.el_input.getInputValueFromInputType;
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