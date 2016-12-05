//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_list_static/window.b2link_ui_list_static.bank_swift.add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.bank_swift.add = function()
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link_ui_list_static.bank_swift.add():{Array}----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_BANK_SWIFT
		, nm : "add"
		, css_url : "./css_ui/"
		, css_front_nm : "div__bank_swift-"
		, key : "bank_swift$add"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
	if( !o[ 1 ].getEvt_Complete__Add() )
	{
		o[ 1 ].setEvt_Complete__Add( function( result ){
			window.Rh2Log.timeStamp( "[ S ] - o[ 1 ].setEvt_Complete__Add( function( result ){----------" );
			if( window.b2link.fn.getResultStatus( result ) )
			{
				//*/
				o[ 1 ].hide();
				/*/
				window.b2link.element.setPosition_RightTop( o[ 0 ], 10, 300 );
				//*/

				window.b2link_ui_list_static.bank_swift.getAllList();
			}
			else alert( "등록 실패." );

			window.Rh2Log.timeStamp( "[ E ] - o[ 1 ].setEvt_Complete__Add( function( result ){----------" );
		});
	}

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link_ui_list_static.bank_swift.add():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
