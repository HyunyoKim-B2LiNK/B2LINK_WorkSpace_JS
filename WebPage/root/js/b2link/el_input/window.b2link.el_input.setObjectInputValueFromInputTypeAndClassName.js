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
			var r = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName[ "_fn_" + el.type ]( t );
		}
		catch( er )
		{
			console.error( "window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName Error : " + er );
		}
		/*/

		var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + el.type ]( t );
		//*/

		t[ el.className ] = r;

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;