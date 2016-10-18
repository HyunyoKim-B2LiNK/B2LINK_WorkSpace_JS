//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/window.b2link_ui.member_session.checkSession__Sign_In.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2link_ui.member_session.checkSession__Sign_In = function()
{

	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.member_session.checkSession__Sign_In():void----------" );
    
    var d = {
        url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_SESSION
        , nm : "checkSession__Sign_In"
        , css_url : "./css_ui/"
        , css_front_nm : "div__member_session-"
    };

    //var o = window.b2link.ui.add_HTML_JS_CSS( d );
    var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

    if( !o[ 1 ].getEvt_Complete__SignIn() )
    {
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
    }

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.member_session.checkSession__Sign_In():void----------" );
    
    return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
