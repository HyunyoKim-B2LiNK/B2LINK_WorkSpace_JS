//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/window.b2link_ui.email.addEmail.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function 
 */
window.b2link_ui.email.addEmail = function()
{
    window.RayLog.timeStamp( "---- [ S ] - window.b2link_ui.email.addEmail():void----------" );
    
    var d = {
        url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_EMAIL
        , nm : "addEmail"
        , css_url : "./css_ui/"
        , css_front_nm : "div__email-"
        , key : "email$addEmail"
    };
	
    var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

    if( !o[ 1 ].getEvt_Complete__Add() )
    {
		o[ 1 ].setEvt_Complete__Add( function( result ){
			window.RayLog.timeStamp( "[ S ] - o[ 1 ].setEvt_Complete__Add( function( result ){----------" );
			if( window.b2link.fn.getResultStatus( result ) )
			{
                //*/
				o[ 1 ].hide();
                /*/
                window.b2link.element.setPosition_RightTop( o[ 0 ], 10, 300 );
                //*/

				window.b2link_ui.email.getAllList();
				//window.b2link_ui.member_basic.getAllList__nm();
			}
			else 
                alert("등록 실패 하였습니다.");

			window.RayLog.timeStamp( "[ E ] - o[ 1 ].setEvt_Complete__Add( function( result ){----------" );
		});
    }

    window.RayLog.timeStamp( "---- [ E ] - window.b2link_ui.email.addEmail():void----------");
	return o;
}

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;