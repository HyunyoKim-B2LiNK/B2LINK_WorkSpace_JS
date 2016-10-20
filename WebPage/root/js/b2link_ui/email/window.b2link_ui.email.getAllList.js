//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/window.b2link_ui.email.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function 
 */
window.b2link_ui.email.getAllList = function()
{
    window.RayLog.timeStamp( "---- [ S ] - window.b2link_ui.email.getAllList():void----------" );
    
    var d = {
        url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_EMAIL
        , nm : "getAllList"
        , css_url : "./css_ui/"
        , css_front_nm : "div__email-"
        , key : "email$getAllList"
    };
    var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
    
    window.RayLog.timeStamp( "---- [ E ] - window.b2link_ui.email.getAllList():void----------");
    
    return o;
}

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
