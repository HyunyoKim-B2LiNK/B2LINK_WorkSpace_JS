//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_member/member_session_log/window.b2link_service_member.member_session_log.getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.MEMBER.SESSION_LOG + "getAllList?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {Object} d signin data { "id" : "", "pw" : "" }
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_session_log.getAllList = function( d, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_session_log.getAllList():void----------" );

	window.b2link_service.common._fn_req( _url, cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_session_log.getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
