//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_member/member_session/window.b2link_service_member.member_session.getProp__idFromsid.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.MEMBER.SESSION + "getProp__idFromsid?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_session.getProp__idFromsid = function( cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_session.getProp__idFromsid():void----------" );

	window.b2link_service.common._fn_req( _url, cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_session.getProp__idFromsid():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;