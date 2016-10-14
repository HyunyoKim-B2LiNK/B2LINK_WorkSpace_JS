//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui/window.b2link_ui.member_session.checkSession__Sign_In.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2link_ui.member_session.checkSession__Sign_In = function()
{

	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.member_session.checkSession__Sign_In():void----------" );

    var _url = window.b2link.STATIC.CONFIG.URL.UI.B2LINK_SESSION;
    var _nm = "checkSession__Sign_In";
    
	var html = window.b2link.ui.__getFileNM_HTML( _url, _nm );
	var js = window.b2link.ui.__getFileNM_JS( _url, _nm );
    var css = window.b2link.ui.__getFileNM_CSS( "./css_ui/", "div__member_session-" + _nm );

	var f = window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI;
	var o = f( _nm, html, js, css, "div_0__UI_Component_Fixed" );

		o[ 1 ].setEvt_Complete__SignIn( function( result ){
			window.TtwLog.timeStamp( "[ S ] - o[ 1 ].setEvt_Complete__SignIn( function( result ){----------" );
			if( window.b2link.fn.getResultStatus( result ) )
			{
                //*/
				o[ 1 ].hide();
                /*/
                window.b2link.element.setPosition_RightTop( o[ 0 ], 10, 300 );
                //*/

				window.b2link_ui.member_basic.getAllList();
				//window.b2link_ui.member_basic.getAllList__nm();
			}
			else window.b2link.log.error__Signin_failure();

			window.TtwLog.timeStamp( "[ E ] - o[ 1 ].setEvt_Complete__SignIn( function( result ){----------" );
		});

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.member_session.checkSession__Sign_In():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
